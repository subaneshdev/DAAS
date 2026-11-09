import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { Arrow } from "./ui";
export function Header() {
  return (
    <header className="header">
      <Link className="wordmark" href="/" aria-label="DaaS.media home">
        daas<span>.media</span>
      </Link>
      <span className="brand-definition">
        DISTRIBUTION
        <br />
        AS A SERVICE
      </span>
      <Link className="header-specialty" href="/real-estate-marketing/">
        <i />
        Real estate. Our first specialty.
      </Link>
      <Link className="header-cta" href="/contact/">
        Discuss your distribution goals
        <Arrow />
      </Link>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="footer section-pad">
      <div className="footer-top">
        <Link className="wordmark" href="/">
          daas<span>.media</span>
        </Link>
        <p>
          From the first scroll
          <br />
          to the real-world conversation.
        </p>
        <a href={`mailto:${site.email}`}>
          {site.email}
          <Arrow />
        </a>
      </div>
      <div className="footer-links">
        <div>
          <p className="eyebrow">EXPLORE</p>
          <Link href="/about/">About DaaS.media</Link>
          <Link href="/real-estate-marketing/">Real estate distribution</Link>
          <Link href="/services/">All services</Link>
          <Link href="/distribution/">Distribution approach</Link>
          <Link href="/industries/">Industries</Link>
          <Link href="/sample-projects/">Sample projects</Link>
          <Link href="/resources/">Free resources</Link>
          <Link href="/pilot/">Start a pilot</Link>
          <Link href="/locations/">Campaign coverage</Link>
          <Link href="/contact/">Discuss your distribution goals</Link>
          <Link href="/privacy/">Privacy</Link>
        </div>
        {(
          ["Strategy & reach", "Content & identity", "Web & systems"] as const
        ).map((category) => (
          <div key={category}>
            <p className="eyebrow">{category}</p>
            {services
              .filter((s) => s.category === category)
              .map((s) => (
                <Link href={`/services/${s.slug}/`} key={s.slug}>
                  {s.name}
                </Link>
              ))}
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DaaS.media</span>
        <span>BUILT FOR DISTRIBUTION.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
