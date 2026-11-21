/* Full document navigation intentionally resets the isolated film runtime. */
/* eslint-disable @next/next/no-html-link-for-pages */
import { pageMetadata, webPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { FilmExperience } from "@/components/film-experience";
export const metadata = pageMetadata(
  "Digital Marketing Agency in Chennai | DaaS.media",
  "DaaS.media builds digital campaigns, content and distribution systems for businesses in Chennai. Explore our services and discuss your growth goals.",
  "/",
);
export default function Home() {
  return <>
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute", pointerEvents: "none" }}>
      <defs>
        <filter id="daas-brand-grade" colorInterpolationFilters="sRGB">
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.035 0.16 0.54 1 0.96" />
            <feFuncG type="table" tableValues="0.035 0.055 0.15 0.5255 0.953" />
            <feFuncB type="table" tableValues="0.035 0.10 0.31 0.7451 0.937" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
    <StructuredData data={webPageData({ name: "Digital Marketing Agency in Chennai | DaaS.media", description: "Digital and physical distribution systems for businesses in Chennai and across India.", path: "/" })} />
    <div id="daas-film-root">
      <main id="main" className="film-fallback">
        <h1>Brands built to reach.</h1>
        <p>Distribution by design,<br />digital and physical.</p>
        <a href="/contact/">Discuss your distribution goals →</a>
        <p>A digital marketing agency in Chennai. We connect strategy, content, media and physical distribution to help relevant audiences discover your business.</p>
        <nav aria-label="Explore DaaS"><a href="/distribution/">Our approach</a><a href="/services/">Services</a><a href="/real-estate-marketing/">Real estate</a><a href="/industries/">Industries</a><a href="/resources/">Resources</a></nav>
      </main>
    </div>
    <FilmExperience />
  </>;
}
