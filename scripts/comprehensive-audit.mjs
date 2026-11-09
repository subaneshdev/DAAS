import { load } from "cheerio";
import fs from "node:fs";

const BASE_URL = process.env.TEST_BASE_URL || "http://127.0.0.1:3000";

async function runAudit() {
  console.log("Fetching sitemap from:", `${BASE_URL}/sitemap.xml`);
  const sitemapRes = await fetch(`${BASE_URL}/sitemap.xml`);
  const sitemapXml = await sitemapRes.text();
  const $sitemap = load(sitemapXml, { xmlMode: true });

  const urls = $sitemap("loc").map((_, el) => $sitemap(el).text().trim()).get();
  console.log(`Found ${urls.length} URLs in sitemap.`);

  const auditResults = [];
  const linkGraph = new Map(); // targetPath -> Set of sourcePaths

  for (const fullUrl of urls) {
    const urlObj = new URL(fullUrl);
    const path = urlObj.pathname;
    const res = await fetch(`${BASE_URL}${path}`);
    const html = await res.text();
    const $ = load(html);

    const title = $("title").text().trim();
    const description = $('meta[name="description"]').attr("content") || "";
    const canonical = $('link[rel="canonical"]').attr("href") || "";
    const h1 = $("h1").map((_, el) => $(el).text().replace(/\s+/g, " ").trim()).get().join(" | ");
    const h2Count = $("h2").length;
    const robots = $('meta[name="robots"]').attr("content") || "default (index, follow)";
    const ogTitle = $('meta[property="og:title"]').attr("content") || "";
    const ogDesc = $('meta[property="og:description"]').attr("content") || "";
    const ogUrl = $('meta[property="og:url"]').attr("content") || "";
    const ogImage = $('meta[property="og:image"]').attr("content") || "";
    const twitterCard = $('meta[name="twitter:card"]').attr("content") || "";

    // JSON-LD blocks
    const schemas = [];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const parsed = JSON.parse($(el).text());
        if (parsed["@graph"]) {
          schemas.push(...parsed["@graph"].map((g) => g["@type"]));
        } else if (parsed["@type"]) {
          schemas.push(parsed["@type"]);
        }
      } catch {
        schemas.push("INVALID_JSON");
      }
    });

    // Internal links out
    const internalLinksOut = new Set();
    $("a[href]").each((_, el) => {
      const href = $(el).attr("href");
      if (href && (href.startsWith("/") || href.startsWith("https://daas.media"))) {
        const cleanPath = href.replace(/^https:\/\/daas\.media/, "").split("#")[0].split("?")[0];
        if (cleanPath && cleanPath !== path) {
          internalLinksOut.add(cleanPath);
          if (!linkGraph.has(cleanPath)) linkGraph.set(cleanPath, new Set());
          linkGraph.get(cleanPath).add(path);
        }
      }
    });

    const bodyText = $("main").text().replace(/\s+/g, " ").trim();
    const wordCount = bodyText ? bodyText.split(" ").length : 0;

    auditResults.push({
      path,
      status: res.status,
      title,
      titleLength: title.length,
      description,
      descriptionLength: description.length,
      canonical,
      h1,
      h2Count,
      robots,
      schemas,
      wordCount,
      outboundInternalLinksCount: internalLinksOut.size,
      ogTitle,
      ogDesc,
      ogUrl,
      ogImage,
      twitterCard,
    });
  }

  // Add inbound link counts
  for (const item of auditResults) {
    const inbound = linkGraph.get(item.path) || new Set();
    item.inboundInternalLinksCount = inbound.size;
    item.inboundSources = Array.from(inbound);
  }

  fs.writeFileSync("baseline-audit.json", JSON.stringify(auditResults, null, 2));
  console.log("Wrote audit data to baseline-audit.json");

  // Summary statistics
  console.log("\n--- AUDIT SUMMARY ---");
  console.log(`Total URLs: ${auditResults.length}`);
  const missingH1 = auditResults.filter((r) => !r.h1);
  console.log(`Missing H1: ${missingH1.length}`);
  const titleOver60 = auditResults.filter((r) => r.titleLength > 60);
  console.log(`Titles > 60 chars: ${titleOver60.length}`);
  const descOver160 = auditResults.filter((r) => r.descriptionLength > 160);
  console.log(`Descriptions > 160 chars: ${descOver160.length}`);
  const lowInbound = auditResults.filter((r) => r.inboundInternalLinksCount < 3);
  console.log(`Pages with < 3 inbound internal links: ${lowInbound.length}`);
  lowInbound.forEach((p) => console.log(`  - ${p.path}: ${p.inboundInternalLinksCount} inbound links`));
}

runAudit().catch(console.error);
