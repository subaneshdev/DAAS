/* Footer links use full navigation to reset the homepage film runtime. */
/* eslint-disable @next/next/no-html-link-for-pages */
import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { industries, projects, resources } from "@/content/growth";
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
      <span className="header-location">CHENNAI / ACROSS INDIA</span>
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
        <a className="wordmark" href="/">
          daas<span>.media</span>
        </a>
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
      <nav className="footer-links" aria-label="All DaaS pages">
        <div>
          <p className="eyebrow">EXPLORE</p>
          <a href="/">Home</a>
          <a href="/about/">About DaaS.media</a>
          <a href="/real-estate-marketing/">Real estate distribution</a>
          <a href="/services/">All services</a>
          <a href="/distribution/">Distribution approach</a>
          <a href="/industries/">Industries</a>
          <a href="/sample-projects/">Sample projects</a>
          <a href="/resources/">Free resources</a>
          <a href="/pilot/">Start a pilot</a>
          <a href="/locations/">Campaign coverage</a>
          <a href="/contact/">Discuss your distribution goals</a>
          <a href="/privacy/">Privacy</a>
        </div>
        {(
          ["Strategy & reach", "Content & identity", "Web & systems"] as const
        ).map((category) => (
          <div key={category}>
            <p className="eyebrow">{category}</p>
            {services
              .filter((s) => s.category === category)
              .map((s) => (
                <a href={`/services/${s.slug}/`} key={s.slug}>
                  {s.name}
                </a>
              ))}
          </div>
        ))}
        <div>
          <p className="eyebrow">Industries</p>
          {industries.map((page) => <a href={`/industries/${page.slug}/`} key={page.slug}>{page.name}</a>)}
        </div>
        <div>
          <p className="eyebrow">Resources</p>
          {resources.map((page) => <a href={`/resources/${page.slug}/`} key={page.slug}>{page.name}</a>)}
        </div>
        <div>
          <p className="eyebrow">Sample projects</p>
          {projects.map((page) => <a href={`/sample-projects/${page.slug}/`} key={page.slug}>{page.name}</a>)}
        </div>
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} DaaS.media</span>
        <span>BUILT FOR DISTRIBUTION.</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
