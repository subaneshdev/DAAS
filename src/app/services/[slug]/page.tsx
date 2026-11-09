import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getService } from "@/content/services";
import {
  pageMetadata,
  serviceData,
  breadcrumbData,
  webPageData,
} from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import {
  Breadcrumbs,
  Cta,
  Label,
  Faq,
  Arrow,
  ContactBand,
} from "@/components/ui";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata(s.title, s.description, `/services/${s.slug}/`, {
    ogImage: "/services/opengraph-image/",
    ogAlt: `${s.name} — DaaS.media`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const path = `/services/${s.slug}/`;
  return (
    <main id="main">
      <StructuredData
        data={webPageData({
          name: s.title,
          description: s.description,
          path,
        })}
      />
      <StructuredData data={serviceData(s.name, s.description, path)} />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: s.name, path },
        ])}
      />
      <section className="page-hero section-pad">
        <Breadcrumbs
          items={[{ name: "Services", href: "/services/" }, { name: s.name }]}
        />
        <p className="eyebrow mt-12">{s.category.toUpperCase()} / CHENNAI</p>
        <h1>
          {s.name}
          <br />
          <em>
            {s.slug === "chatgpt-ads"
              ? "With a clear plan."
              : "Built for your audience."}
          </em>
        </h1>
        <div className="hero-bottom">
          <p>{s.intro}</p>
          <Cta service={s.slug} />
        </div>
        <nav aria-label="On this page" className="page-jumps">
          <a href="#approach">The approach ↓</a>
          <a href="#scope">What we build ↓</a>
          <a href="#questions">Questions ↓</a>
        </nav>
      </section>
      <section id="approach" className="section-pad paper">
        <Label number="01 — THE APPROACH">{s.name.toUpperCase()}</Label>
        <div className="detail-intro">
          <h2>{s.headline}</h2>
          <div>
            <p className="lead">{s.problem}</p>
            <p className="body-copy mt-6">
              <strong>A good fit:</strong> {s.fit}
            </p>
          </div>
        </div>
      </section>
      <section id="scope" className="section-pad">
        <Label number="02 — WHAT WE BUILD">A SCOPE THAT FITS THE BRIEF.</Label>
        <div className="deliverables">
          {s.deliverables.map(([title, text], i) => (
            <article key={title}>
              <span className="eyebrow muted">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
              <Arrow />
            </article>
          ))}
        </div>
        <p className="scope-note">
          The final proposal defines deliverables, timelines, approvals, fees
          and any third-party costs. You can begin with this service or connect
          it to a wider distribution plan.
        </p>
      </section>
      <section className="section-pad paper">
        <Label number="03 — HOW IT WORKS">FROM BRIEF TO DELIVERY.</Label>
        <div className="steps steps-three">
          {s.steps.map(([title, text], i) => (
            <article key={title}>
              <span className="eyebrow">0{i + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="use-case">
          <span className="eyebrow">IN A REAL ESTATE CONTEXT</span>
          <p>{s.useCase}</p>
          <Link className="text-link" href="/real-estate-marketing/">
            Explore real estate distribution
            <Arrow />
          </Link>
          <small>
            Illustrative approach, not a client case study or a promised
            outcome.
          </small>
        </div>
      </section>
      {s.deepDive && (
        <section className="section-pad paper pt-0">
          <Label number="04 — IN PRACTICE">{s.deepDive.label}</Label>
          <p className="lead mt-6">{s.deepDive.heading}</p>
          <div className="coverage-grid">
            {s.deepDive.blocks.map((block) => (
              <article key={block.title}>
                <h2>{block.title}</h2>
                <p className="body-copy">{block.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      <section id="questions" className="section-pad paper pt-0">
        <div className="faq-grid">
          <h2>
            A few useful
            <br />
            <em>answers.</em>
          </h2>
          <Faq items={s.faqs} />
        </div>
        {s.slug === "chatgpt-ads" && (
          <p className="source-note">
            Platform reference:{" "}
            <a
              href="https://developers.openai.com/ads/campaign-targeting"
              target="_blank"
              rel="noopener noreferrer"
            >
              OpenAI advertising targeting documentation
            </a>
            . Account and location availability are checked for each engagement.
          </p>
        )}
      </section>
      <section className="section-pad">
        <Label number={s.deepDive ? "05 — BETTER CONNECTED" : "04 — BETTER CONNECTED"}>
          RELATED SERVICES
        </Label>
        <div className="related-grid">
          {s.related.map((slug) => {
            const item = getService(slug)!;
            return (
              <Link key={slug} href={`/services/${slug}/`}>
                <h2>{item.name}</h2>
                <Arrow />
              </Link>
            );
          })}
        </div>
        {s.relatedGuides && s.relatedGuides.length > 0 && (
          <div className="mt-12">
            <p className="eyebrow">FURTHER READING &amp; TOOLS</p>
            <div className="growth-link-grid">
              {s.relatedGuides.map((guide) => (
                <Link className="growth-link" key={guide.href} href={guide.href}>
                  {guide.label}
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <ContactBand />
    </main>
  );
}
