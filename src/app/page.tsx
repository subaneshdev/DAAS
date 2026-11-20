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
