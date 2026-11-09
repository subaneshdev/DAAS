import { load } from "cheerio";
import assert from "node:assert/strict";
import http from "node:http";

const base = (process.env.TEST_BASE_URL || "http://127.0.0.1:3000").replace(
  /\/$/,
  "",
);
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://daas.media"
).replace(/\/$/, "");

function requestWithHost(path, hostHeader) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${base}${path}`);
    const req = http.request(
      {
        hostname: url.hostname,
        port: url.port || 80,
        path: url.pathname + url.search,
        method: "GET",
        headers: { Host: hostHeader },
      },
      (res) => {
        res.resume();
        resolve({ status: res.statusCode, headers: res.headers });
      },
    );
    req.on("error", reject);
    req.end();
  });
}

const sitemap = await fetch(`${base}/sitemap.xml`, { redirect: "manual" });
assert.equal(sitemap.status, 200, "/sitemap.xml must return 200 without redirect");
assert.ok(
  sitemap.headers.get("content-type")?.includes("xml"),
  "/sitemap.xml must serve XML content-type",
);
const sitemapText = await sitemap.text();
assert.ok(
  sitemapText.includes('<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>'),
  "/sitemap.xml must include XSL stylesheet instruction",
);
const xml = load(sitemapText, { xmlMode: true });
const urls = xml("loc")
  .map((_, el) => xml(el).text())
  .get();
const lastmods = xml("lastmod")
  .map((_, el) => xml(el).text())
  .get();

assert.equal(urls.length, 40, "Curated sitemap should contain 40 indexable URLs");
assert.equal(lastmods.length, urls.length, "Every sitemap entry needs <lastmod>");
assert.equal(new Set(urls).size, urls.length, "Sitemap URLs must be unique");
assert.ok(
  !urls.some((u) => u.endsWith("/privacy/")),
  "/privacy/ must be excluded from sitemap.xml",
);

const xsl = await fetch(`${base}/sitemap.xsl`, { redirect: "manual" });
assert.equal(xsl.status, 200, "/sitemap.xsl must return 200 without redirect");
assert.ok(
  xsl.headers.get("content-type")?.includes("xml"),
  "/sitemap.xsl must serve XML content-type",
);
assert.ok((await xsl.text()).includes("<xsl:stylesheet"));

const sitemapNoSlash = await fetch(`${base}/sitemap`, { redirect: "manual" });
assert.equal(sitemapNoSlash.status, 308, "/sitemap must redirect permanently");
assert.equal(sitemapNoSlash.headers.get("location"), "/sitemap/");

const sitemapWithSlash = await fetch(`${base}/sitemap/`, { redirect: "manual" });
assert.equal(sitemapWithSlash.status, 308, "/sitemap/ must redirect permanently");
assert.equal(sitemapWithSlash.headers.get("location"), "/sitemap.xml");

const titles = new Set(),
  descriptions = new Set(),
  internal = new Set(),
  ogImages = new Set();
let schemas = 0;

for (const canonical of urls) {
  const path = new URL(canonical).pathname;
  const response = await fetch(`${base}${path}`, { redirect: "manual" });
  assert.equal(response.status, 200, `${path} must return 200 without redirect`);
  const $ = load(await response.text());
  assert.equal($("main h1").length, 1, `${path}: one H1`);
  assert.equal(
    $('link[rel="canonical"]').attr("href"),
    `${origin}${path}`,
    `${path}: canonical`,
  );
  const title = $("title").text(),
    description = $('meta[name="description"]').attr("content");
  assert.ok(title && description, `${path}: metadata`);
  assert.ok(!titles.has(title), `${path}: duplicate title`);
  assert.ok(!descriptions.has(description), `${path}: duplicate description`);
  titles.add(title);
  descriptions.add(description);
  assert.equal($('meta[property="og:url"]').attr("content"), canonical);
  const ogImg = $('meta[property="og:image"]').attr("content");
  assert.ok(ogImg, `${path}: og:image present`);
  ogImages.add(ogImg);
  assert.equal(
    $('meta[name="twitter:card"]').attr("content"),
    "summary_large_image",
  );
  assert.ok(
    !$('meta[name="robots"]').attr("content")?.includes("noindex"),
    `${path}: indexable page must not have noindex`,
  );
  let pageSchemas = 0;
  $('script[type="application/ld+json"]').each((_, el) => {
    JSON.parse($(el).text());
    schemas++;
    pageSchemas++;
  });
  assert.ok(pageSchemas > 0, `${path}: structured data`);
  $("img").each((_, el) =>
    assert.notEqual($(el).attr("alt"), undefined, `${path}: image alt`),
  );
  $("a[href]").each((_, el) => {
    const href = $(el).attr("href");
    if (href.startsWith("/")) internal.add(new URL(href, base).pathname);
  });
  console.log(`PASS ${path}`);
}

for (const ogImg of ogImages) {
  const ogPath = new URL(ogImg).pathname;
  const imageRes = await fetch(`${base}${ogPath}`, { redirect: "manual" });
  assert.equal(
    imageRes.status,
    200,
    `OG image ${ogPath} must return 200 without redirect (got ${imageRes.status})`,
  );
  assert.ok(
    imageRes.headers.get("content-type")?.includes("image/png"),
    `OG image ${ogPath} must be PNG`,
  );
}

const privacyRes = await fetch(`${base}/privacy/`, { redirect: "manual" });
assert.equal(privacyRes.status, 200);
const $privacy = load(await privacyRes.text());
const privacyRobots = $privacy('meta[name="robots"]').attr("content") || "";
assert.ok(privacyRobots.includes("noindex"), "/privacy/ must be noindex");
assert.ok(privacyRobots.includes("follow"), "/privacy/ should remain follow");

for (const icon of ["/favicon.ico", "/favicon.svg"]) {
  const res = await fetch(`${base}${icon}`, { redirect: "manual" });
  assert.equal(res.status, 200, `${icon} must return 200`);
}

for (const path of internal) {
  assert.equal(
    (await fetch(`${base}${path}`)).status,
    200,
    `Broken link ${path}`,
  );
}

const robots = await (await fetch(`${base}/robots.txt`)).text();
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
assert.ok(robots.includes("Disallow: /api/"));

for (const [hostPath, expectedLocation] of [
  ["/", "https://daas.media/"],
  ["/services/", "https://daas.media/services/"],
  ["/services/seo/", "https://daas.media/services/seo/"],
  ["/sitemap.xml", "https://daas.media/sitemap.xml"],
]) {
  const wwwRes = await requestWithHost(hostPath, "www.daas.media");
  assert.equal(wwwRes.status, 308, `www${hostPath} must permanently redirect`);
  assert.equal(
    wwwRes.headers.location,
    expectedLocation,
    `www${hostPath} redirect location mismatch`,
  );
}

assert.equal((await fetch(`${base}/services/not-a-service/`)).status, 404);
assert.equal((await fetch(`${base}/not-a-page/`)).status, 404);
const invalid = await fetch(`${base}/api/enquiry/`, {
  method: "POST",
  headers: { "content-type": "application/json", origin: base },
  body: JSON.stringify({ name: " " }),
});
assert.equal(invalid.status, 400);
const foreign = await fetch(`${base}/api/enquiry/`, {
  method: "POST",
  headers: {
    "content-type": "application/json",
    origin: "https://unrelated.invalid",
  },
  body: "{}",
});
assert.equal(foreign.status, 403);
console.log(
  `PASS ${urls.length} server-rendered pages, ${internal.size} internal destinations, ${schemas} JSON-LD blocks, ${ogImages.size} cluster OG images (0 redirects), www 308s, robots, favicons, XSL sitemap, 404s and API validation.`,
);

for (const path of [
  "/industries/not-a-sector/",
  "/resources/not-a-resource/",
  "/sample-projects/not-a-project/",
])
  assert.equal((await fetch(`${base}${path}`)).status, 404);
for (const path of [
  "/resources/property-launch-brief.md",
  "/resources/restaurant-discovery-checklist.md",
  "/resources/enquiry-tracker.csv",
]) {
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200);
  assert.ok((await response.text()).length > 100);
}
console.log("PASS growth routes, missing slugs and downloadable resources");
