import { site } from "@/content/site";
import { services } from "@/content/services";
import { growthPaths } from "@/content/growth";

export const dynamic = "force-static";

const UPDATED_TODAY = "2026-11-09";
const BASELINE_DATE = "2026-09-29";

const updatedRoutes = new Set([
  "/",
  "/about/",
  "/real-estate-marketing/",
  "/services/",
  "/distribution/",
  "/industries/",
  "/industries/b2b/",
  "/sample-projects/",
  "/resources/",
  "/pilot/",
  "/locations/",
  "/contact/",
  "/services/digital-marketing/",
  "/services/meta-ads/",
  "/services/google-ads/",
  "/services/seo/",
  "/services/google-business-profile/",
  "/services/performance-marketing/",
  "/services/lead-generation/",
  "/services/web-design-development/",
]);

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const paths = [
    "/",
    "/about/",
    "/real-estate-marketing/",
    "/services/",
    "/locations/",
    "/contact/",
    ...growthPaths,
    ...services.map((s) => `/services/${s.slug}/`),
  ];

  const entries = paths
    .map((path) => {
      const loc = escapeXml(`${site.url}${path}`);
      const lastmod = updatedRoutes.has(path) ? UPDATED_TODAY : BASELINE_DATE;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
