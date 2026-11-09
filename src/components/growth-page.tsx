import Link from "next/link";
import type { GrowthPage } from "@/content/growth";
import { Breadcrumbs, Cta, Faq, Arrow, Label } from "@/components/ui";
import { StructuredData } from "@/components/structured-data";
import {
  breadcrumbData,
  serviceData,
  collectionPageData,
  guidePageData,
  webPageData,
} from "@/lib/seo";

export type EditorialNote = {
  label: string;
  heading: string;
  blocks: { title: string; text: string }[];
  links?: { label: string; href: string }[];
};

export function GrowthDetail({
  page,
  group,
  label,
}: {
  page: GrowthPage;
  group: string;
  label: string;
}) {
  const path = `/${group}/${page.slug}/`;
  return (
    <main id="main">
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: label, path: `/${group}/` },
          { name: page.name, path },
        ])}
      />
      {group === "industries" && (
        <>
          <StructuredData
            data={serviceData(page.name, page.description, path)}
          />
          <StructuredData
            data={webPageData({
              name: page.title,
              description: page.description,
              path,
            })}
          />
        </>
      )}
      {group === "resources" && (
        <StructuredData
          data={guidePageData({
            type: "TechArticle",
            name: page.title,
            description: page.description,
            path,
            isFree: true,
          })}
        />
      )}
      {group === "sample-projects" && (
        <StructuredData
          data={guidePageData({
            type: "CreativeWork",
            name: page.title,
            description: page.description,
            path,
          })}
        />
      )}
      <section className="page-hero section-pad">
        <Breadcrumbs
          items={[{ name: label, href: `/${group}/` }, { name: page.name }]}
        />
        <p className="eyebrow mt-12">{page.eyebrow}</p>
        <h1>{page.headline}</h1>
        <div className="hero-bottom">
          <p>{page.intro}</p>
          {page.download ? (
            <a className="cta" href={page.download.href} download>
              {page.download.label}
              <Arrow />
            </a>
          ) : (
            <Cta
              service={
                group === "industries" ? `industry-${page.slug}` : "pilot"
              }
            />
          )}
        </div>
      </section>
      {group === "sample-projects" && (
        <section className="section-pad sample-board-wrap">
          <figure className="sample-board">
            <figcaption className="eyebrow">
              ILLUSTRATIVE CAMPAIGN BOARD / NOT A LIVE CAMPAIGN
            </figcaption>
            <blockquote>
              {page.slug === "property-launch"
                ? "Understand the project before you plan a visit."
                : "Planning a meal together? See the menu before you decide."}
            </blockquote>
            <div className="sample-board-flow">
              {(page.slug === "property-launch"
                ? [
                    "Verified project facts",
                    "Useful property content",
                    "Project information page",
                    "Qualified conversation",
                  ]
                : [
                    "Accurate venue details",
                    "Original menu content",
                    "Menu and booking page",
                    "A relevant enquiry",
                  ]
              ).map((step, i) => (
                <div key={step}>
                  <span className="eyebrow">0{i + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
            <p className="sample-board-note">
              Creative direction only. A real business must supply and approve
              the facts before publication.
            </p>
          </figure>
        </section>
      )}
      <section className="section-pad paper">
        <div className="growth-layout">
          <aside className="growth-aside">
            <p className="eyebrow">
              IN THIS {group === "industries" ? "BRIEF" : "GUIDE"}
            </p>
            <nav aria-label="On this page">
              {page.sections.map((s, i) => (
                <a key={s.title} href={`#section-${i + 1}`}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              ))}
            </nav>
            {group === "sample-projects" && (
              <p className="evidence-note">
                Fictional planning exercise. Not client work. No campaign
                results.
              </p>
            )}
            {group === "industries" && (
              <p className="evidence-note">
                We are building our portfolio. This is a service scope, not a
                claim of completed sector campaigns.
              </p>
            )}
          </aside>
          <div className="growth-sections">
            {page.sections.map((s, i) => (
              <article id={`section-${i + 1}`} key={s.title}>
                <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
                {s.points && (
                  <ul>
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad paper growth-questions">
        <h2>Useful questions.</h2>
        <Faq items={page.questions} />
      </section>
      <section className="section-pad">
        <p className="eyebrow">KEEP EXPLORING</p>
        <div className="growth-link-grid">
          {page.links.map((l) => (
            <Link className="growth-link" key={l.href} href={l.href}>
              {l.label}
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="section-pad contact-band">
        <h2>
          Start with a <em>clear brief.</em>
        </h2>
        <p className="lead mt-6">
          Remote campaigns across India. Local shoots and activations depend on
          the brief.
        </p>
        <div className="mt-8">
          <Cta
            service={group === "industries" ? `industry-${page.slug}` : "pilot"}
          />
        </div>
      </section>
    </main>
  );
}

export function GrowthIndex({
  title,
  headline,
  intro,
  group,
  pages,
  editorialNote,
}: {
  title: string;
  headline: string;
  intro: string;
  group: string;
  pages: GrowthPage[];
  editorialNote?: EditorialNote;
}) {
  return (
    <main id="main">
      <StructuredData
        data={collectionPageData({
          name: title,
          description: intro,
          path: `/${group}/`,
          items: pages.map((p) => ({
            name: p.name,
            path: `/${group}/${p.slug}/`,
          })),
        })}
      />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: title, path: `/${group}/` },
        ])}
      />
      <section className="page-hero section-pad">
        <Breadcrumbs items={[{ name: title }]} />
        <p className="eyebrow mt-12">{title}</p>
        <h1>{headline}</h1>
        <p className="lead mt-8 growth-intro">{intro}</p>
      </section>
      <section className="section-pad paper">
        <div className="service-card-grid">
          {pages.map((p) => (
            <Link
              className="service-card"
              href={`/${group}/${p.slug}/`}
              key={p.slug}
            >
              <p className="eyebrow">{p.eyebrow}</p>
              <h2>{p.name}</h2>
              <p>{p.intro}</p>
              <span className="text-link">
                Explore <Arrow />
              </span>
            </Link>
          ))}
        </div>
        {group === "industries" && (
          <Link className="text-link mt-8" href="/real-estate-marketing/">
            Explore our first specialty: real estate distribution ↗
          </Link>
        )}
        <div className="mt-12">
          <Link className="text-link" href="/distribution/">
            How distribution connects the work ↗
          </Link>
        </div>
      </section>
      {editorialNote && (
        <section className="section-pad">
          <Label number="02 — METHOD">{editorialNote.label}</Label>
          <p className="lead mt-8 growth-intro">{editorialNote.heading}</p>
          <div className="coverage-grid">
            {editorialNote.blocks.map((block) => (
              <article key={block.title}>
                <h2>{block.title}</h2>
                <p className="body-copy">{block.text}</p>
              </article>
            ))}
          </div>
          {editorialNote.links && editorialNote.links.length > 0 && (
            <div className="growth-link-grid mt-8">
              {editorialNote.links.map((link) => (
                <Link
                  className="growth-link"
                  key={link.href}
                  href={link.href}
                >
                  {link.label} <Arrow />
                </Link>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}
