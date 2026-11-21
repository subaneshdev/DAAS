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
        <filter id="daas-film-palette" colorInterpolationFilters="sRGB">
          {/* Key blue scenery only; preserve skin, stone, foliage and highlights. */}
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -1 0 1 0 -0.03" result="blueKey" />
          <feComponentTransfer in="blueKey" result="skyMask"><feFuncA type="table" tableValues="0 0.85 1 1" /></feComponentTransfer>
          <feColorMatrix in="SourceGraphic" type="matrix" values="0.08 0.12 0.04 0 0.02  0.08 0.12 0.04 0 0.02  0.08 0.12 0.04 0 0.02  0 0 0 1 0" result="charcoalTexture" />
          <feComposite in="charcoalTexture" in2="skyMask" operator="in" result="brandedSky" />
          <feComposite in="SourceGraphic" in2="skyMask" operator="out" result="naturalDetails" />
          <feComposite in="brandedSky" in2="naturalDetails" operator="over" result="scene" />
          {/* Recolour strongly saturated red accents without tinting natural skin. */}
          <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  2.5 -3 -1 0 -0.03" result="redKey" />
          <feComponentTransfer in="redKey" result="accentMask"><feFuncA type="table" tableValues="0 0.65 1 1" /></feComponentTransfer>
          <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0  0.5255 0 0 0 0  0.7451 0 0 0 0  0 0 0 1 0" result="pinkAccent" />
          <feComposite in="pinkAccent" in2="accentMask" operator="in" result="brandedAccents" />
          <feComposite in="scene" in2="accentMask" operator="out" result="sceneDetails" />
          <feComposite in="brandedAccents" in2="sceneDetails" operator="over" />
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
