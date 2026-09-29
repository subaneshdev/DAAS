import { load } from "cheerio";
import assert from "node:assert/strict";
const base = (process.env.TEST_BASE_URL || "http://127.0.0.1:3000").replace(
  /\/$/,
  "",
);
const origin = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://daas.media"
).replace(/\/$/, "");
const sitemap = await fetch(`${base}/sitemap.xml`);
assert.equal(sitemap.status, 200);
const xml = load(await sitemap.text(), { xmlMode: true });
const urls = xml("loc")
  .map((_, el) => xml(el).text())
  .get();
assert.equal(urls.length, 40);
assert.equal(new Set(urls).size, urls.length);
const titles = new Set(),
  descriptions = new Set(),
  internal = new Set();
let schemas = 0;
for (const canonical of urls) {
  const path = new URL(canonical).pathname;
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
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
  assert.ok($('meta[property="og:image"]').attr("content"));
  assert.equal(
    $('meta[name="twitter:card"]').attr("content"),
    "summary_large_image",
  );
  assert.ok(!$('meta[name="robots"]').attr("content")?.includes("noindex"));
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
const image = await fetch(`${base}/opengraph-image`);
assert.equal(image.status, 200);
assert.ok(image.headers.get("content-type").includes("image/png"));
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
  `PASS ${urls.length} server-rendered pages, ${internal.size} internal destinations, ${schemas} JSON-LD blocks, robots, OG image, 404s and API validation.`,
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
