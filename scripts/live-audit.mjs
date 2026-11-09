import { load } from "cheerio";
import fs from "node:fs";

const LIVE = "https://daas.media";

async function auditLive() {
  console.log("=== LIVE PRODUCTION AUDIT FOR https://daas.media ===");

  // 1. Check host variants
  const hostVariants = [
    "http://daas.media/",
    "http://www.daas.media/",
    "https://www.daas.media/",
    "https://daas.media/",
    "https://daas.media/sitemap.xml",
    "https://daas.media/sitemap.xml/",
    "https://www.daas.media/sitemap.xml",
    "https://daas.media/about/",
    "https://daas.media/services",
    "https://daas.media/services/",
  ];

  const hostChecks = [];
  for (const url of hostVariants) {
    try {
      const res = await fetch(url, { redirect: "manual" });
      hostChecks.push({
        url,
        status: res.status,
        location: res.headers.get("location") || null,
        contentType: res.headers.get("content-type") || null,
        xRobotsTag: res.headers.get("x-robots-tag") || null,
      });
    } catch (err) {
      hostChecks.push({ url, error: String(err) });
    }
  }
  console.log("\n1. Host & Redirect Checks:");
  console.table(hostChecks);

  // 2. Fetch live sitemap.xml
  const smRes = await fetch(`${LIVE}/sitemap.xml`);
  const smText = await smRes.text();
  const $sm = load(smText, { xmlMode: true });
  const urls = $sm("loc").map((_, el) => $sm(el).text().trim()).get();
  const hasLastmod = $sm("lastmod").length > 0;
  console.log(`\n2. Live Sitemap: ${urls.length} URLs, hasLastmod=${hasLastmod}`);

  // 3. Audit all sitemap URLs on LIVE site
  const results = [];
  const linkGraph = new Map();
  const externalLinks = new Set();
  const brokenTargets = [];

  for (const canonicalUrl of urls) {
    const pathname = new URL(canonicalUrl).pathname;
    const res = await fetch(canonicalUrl, { redirect: "manual" });
    const status = res.status;
    const xRobotsTag = res.headers.get("x-robots-tag") || "";
    const html = status === 200 ? await res.text() : "";
    const $ = html ? load(html) : null;

    const title = $ ? $("title").text().trim() : "";
    const description = $ ? ($('meta[name="description"]').attr("content") || "") : "";
    const canonical = $ ? ($('link[rel="canonical"]').attr("href") || "") : "";
    const robotsMeta = $ ? ($('meta[name="robots"]').attr("content") || "") : "";
    const h1s = $ ? $("h1").map((_, el) => $(el).text().replace(/\s+/g, " ").trim()).get() : [];
    const h2Count = $ ? $("h2").length : 0;
    const ogUrl = $ ? ($('meta[property="og:url"]').attr("content") || "") : "";
    const ogImage = $ ? ($('meta[property="og:image"]').attr("content") || "") : "";
    const htmlLang = $ ? ($("html").attr("lang") || "") : "";
    const bodyText = $ ? $("main").text().replace(/\s+/g, " ").trim() : "";
    const wordCount = bodyText ? bodyText.split(" ").length : 0;

    // Schemas
    const schemas = [];
    if ($) {
      $('script[type="application/ld+json"]').each((_, el) => {
        try {
          const parsed = JSON.parse($(el).text());
          if (parsed["@graph"]) schemas.push(...parsed["@graph"].map((g) => g["@type"]));
          else if (parsed["@type"]) schemas.push(parsed["@type"]);
        } catch {
          schemas.push("INVALID_JSON");
        }
      });
    }

    // Internal links
    const outLinks = new Set();
    if ($) {
      $("a[href]").each((_, el) => {
        const href = $(el).attr("href");
        if (!href) return;
        if (href.startsWith("/") || href.startsWith(LIVE)) {
          const clean = href.replace(LIVE, "").split("#")[0].split("?")[0];
          if (clean && clean !== pathname) {
            outLinks.add(clean);
            if (!linkGraph.has(clean)) linkGraph.set(clean, new Set());
            linkGraph.get(clean).add(pathname);
          }
        } else if (href.startsWith("http")) {
          externalLinks.add(href);
        }
      });
    }

    results.push({
      pathname,
      status,
      xRobotsTag,
      robotsMeta,
      title,
      titleLen: title.length,
      descriptionLen: description.length,
      canonical,
      canonicalMatches: canonical === canonicalUrl,
      ogUrlMatches: ogUrl === canonicalUrl,
      ogImage,
      htmlLang,
      h1Count: h1s.length,
      h1: h1s[0] || "",
      h2Count,
      wordCount,
      schemas,
      outboundInternal: outLinks.size,
    });
  }

  for (const r of results) {
    const inbound = linkGraph.get(r.pathname) || new Set();
    r.inboundInternal = inbound.size;
  }

  // Check OG image & key asset reachability
  const ogImgUrls = Array.from(new Set(results.map((r) => r.ogImage).filter(Boolean)));
  const ogImgChecks = [];
  for (const imgUrl of ogImgUrls) {
    const r = await fetch(imgUrl, { redirect: "manual" });
    ogImgChecks.push({ url: imgUrl, status: r.status, type: r.headers.get("content-type") });
  }

  // Check all discovered internal links on live site
  for (const target of linkGraph.keys()) {
    const r = await fetch(`${LIVE}${target}`, { redirect: "manual" });
    if (r.status !== 200) {
      brokenTargets.push({ target, status: r.status, location: r.headers.get("location") });
    }
  }

  const report = {
    auditedAt: new Date().toISOString(),
    hostChecks,
    sitemapCount: urls.length,
    hasLastmod,
    ogImgChecks,
    brokenOrRedirectingInternalLinks: brokenTargets,
    externalLinks: Array.from(externalLinks),
    pages: results,
  };

  fs.writeFileSync("live-audit-report.json", JSON.stringify(report, null, 2));
  console.log("\n3. OG Image Checks:", ogImgChecks);
  console.log("\n4. Broken or Redirecting Internal Targets:", brokenTargets);
  console.log("\n5. Summary of Live Pages:");
  console.log("Total Live Sitemap URLs:", results.length);
  console.log("Non-200 pages:", results.filter((p) => p.status !== 200).length);
  console.log("Canonical mismatches:", results.filter((p) => !p.canonicalMatches).length);
  console.log("Titles > 60:", results.filter((p) => p.titleLen > 60).map((p) => `${p.pathname} (${p.titleLen})`));
  console.log("Descriptions > 160:", results.filter((p) => p.descriptionLen > 160).map((p) => `${p.pathname} (${p.descriptionLen})`));
  console.log("Pages < 3 inbound links:", results.filter((p) => p.inboundInternal < 3).map((p) => `${p.pathname} (${p.inboundInternal})`));
  console.log("Lowest word counts:", [...results].sort((a, b) => a.wordCount - b.wordCount).slice(0, 8).map((p) => `${p.pathname}: ${p.wordCount} words`));
}

auditLive().catch(console.error);
