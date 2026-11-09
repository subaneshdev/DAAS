export const dynamic = "force-static";

const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sitemap"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en-IN">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>XML Sitemap | DaaS.media</title>
        <style>
          * { box-sizing: border-box; }
          body {
            margin: 0;
            padding: 48px 5%;
            background: #111111;
            color: #f5f3ef;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
            line-height: 1.6;
          }
          header {
            max-width: 1080px;
            margin: 0 auto 32px;
            padding-bottom: 24px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.16);
          }
          .eyebrow {
            font-size: 11px;
            letter-spacing: 1.4px;
            text-transform: uppercase;
            color: #ff86be;
            margin-bottom: 10px;
          }
          h1 {
            margin: 0 0 10px;
            font-size: 32px;
            font-weight: 600;
            letter-spacing: -0.03em;
          }
          p {
            margin: 0;
            color: #c7c7c2;
            font-size: 14px;
          }
          a {
            color: #ff86be;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          main {
            max-width: 1080px;
            margin: 0 auto;
            background: #f5f3ef;
            color: #111111;
            border-radius: 6px;
            overflow: hidden;
          }
          .summary {
            padding: 18px 24px;
            font-size: 13px;
            border-bottom: 1px solid #d7d5ce;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            text-align: left;
            padding: 13px 24px;
            border-bottom: 1px solid #e3e1da;
            font-size: 14px;
          }
          th {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #55554f;
            background: #ece9e1;
          }
          td a {
            color: #111111;
            font-weight: 500;
            word-break: break-all;
          }
          td a:hover {
            color: #a02965;
          }
          td.num, th.num {
            width: 56px;
            color: #6c6c64;
          }
          td.date {
            width: 160px;
            color: #55554f;
            white-space: nowrap;
          }
          @media (max-width: 640px) {
            body { padding: 28px 4%; }
            th, td { padding: 11px 14px; font-size: 13px; }
          }
        </style>
      </head>
      <body>
        <header>
          <div class="eyebrow">DaaS.media — Distribution as a Service</div>
          <h1>XML Sitemap</h1>
          <p>
            Indexable canonical URLs for search engines. Return to
            <a href="https://daas.media/"> daas.media homepage</a>.
          </p>
        </header>
        <main>
          <div class="summary">
            <span>
              <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)" /></strong>
              <xsl:text> canonical URLs in this sitemap</xsl:text>
            </span>
            <span>Format: Sitemap Protocol 0.9</span>
          </div>
          <table>
            <thead>
              <tr>
                <th class="num">#</th>
                <th>URL</th>
                <th>Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="num"><xsl:value-of select="position()" /></td>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc" />
                    </a>
                  </td>
                  <td class="date">
                    <xsl:value-of select="sitemap:lastmod" />
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;

export function GET() {
  return new Response(xsl, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
