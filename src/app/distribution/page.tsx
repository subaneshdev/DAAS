import Link from "next/link";
import { industries } from "@/content/growth";
import { pageMetadata, breadcrumbData, webPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs, Cta, Arrow, Faq } from "@/components/ui";

export const metadata = pageMetadata(
  "Digital & Physical Distribution Strategy | DaaS.media",
  "Connect useful content, search, communities and scoped physical activity. Explore DaaS.media’s distribution approach across real estate and other industries.",
  "/distribution/",
);

export default function Distribution() {
  return (
    <main id="main">
      <StructuredData
        data={webPageData({
          name: "Digital & Physical Distribution Strategy | DaaS.media",
          description:
            "Connect useful content, search, communities and scoped physical activity across digital and real-world channels.",
          path: "/distribution/",
        })}
      />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Distribution", path: "/distribution/" },
        ])}
      />
      <section className="page-hero section-pad">
        <Breadcrumbs items={[{ name: "Distribution" }]} />
        <p className="eyebrow mt-12">DISTRIBUTION AS A SERVICE</p>
        <h1>
          Good work needs
          <br />
          <em>a way to reach people.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            Distribution connects the message, the audience, the place they
            encounter it and the next useful action. We plan digital content and
            physical touchpoints as parts of the same customer journey.
          </p>
          <Cta />
        </div>
      </section>
      <section className="section-pad paper">
        <div className="growth-sections">
          <article>
            <h2>What do we mean by distribution?</h2>
            <p>
              For DaaS.media, distribution means planning how marketing reaches
              relevant people: through useful search content, business-owned
              channels, communities, creators and agreed real-world activity. It
              includes the destination and follow-up. Warehousing, stock supply,
              shipping and guaranteed media placement are not part of this
              marketing offer.
            </p>
          </article>
          <article>
            <h2>Begin with a decision someone needs to make</h2>
            <p>
              A property buyer might want project information. A procurement
              team might need a capability statement. A restaurant customer
              might want a readable menu. We identify that decision, prepare the
              right material and choose a realistic route to it.
            </p>
          </article>
        </div>
        <div className="growth-steps">
          {[
            [
              "01",
              "Understand",
              "Agree the audience, offer, current evidence and sales process.",
            ],
            [
              "02",
              "Create",
              "Build one useful destination and the content it needs.",
            ],
            [
              "03",
              "Distribute",
              "Use agreed channels; confirm permissions, access and costs.",
            ],
            [
              "04",
              "Learn",
              "Review genuine enquiries, quality and next actions.",
            ],
          ].map(([n, h, p]) => (
            <article key={n}>
              <span className="eyebrow">{n}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad paper">
        <p className="eyebrow">ONE APPROACH. DISTINCT INDUSTRY BRIEFS.</p>
        <h2 className="mt-6">
          Start with your <em>business.</em>
        </h2>
        <div className="service-card-grid mt-8">
          <Link className="service-card" href="/real-estate-marketing/">
            <p className="eyebrow">OUR FIRST SPECIALTY</p>
            <h3>Real estate</h3>
            <p>
              Project information, neighbourhood questions, useful property
              content and buyer-enquiry journeys.
            </p>
            <Arrow />
          </Link>
          {industries.map((p) => (
            <Link
              className="service-card"
              href={`/industries/${p.slug}/`}
              key={p.slug}
            >
              <h3>{p.name}</h3>
              <p>{p.intro}</p>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <h2>
          Start small.
          <br />
          <em>Show the work.</em>
        </h2>
        <div className="growth-link-grid">
          <Link className="growth-link" href="/sample-projects/">
            Inspect our labelled demonstration projects <Arrow />
          </Link>
          <Link
            className="growth-link"
            href="/sample-projects/property-launch/"
          >
            Inspect the property launch demonstration <Arrow />
          </Link>
          <Link className="growth-link" href="/resources/">
            Use the free planning resources <Arrow />
          </Link>
          <Link
            className="growth-link"
            href="/resources/property-launch-brief/"
          >
            Download the property brief template <Arrow />
          </Link>
          <Link className="growth-link" href="/pilot/">
            Explore a focused pilot <Arrow />
          </Link>
          <Link className="growth-link" href="/services/seo/">
            Explore SEO & organic growth <Arrow />
          </Link>
        </div>
      </section>
      <section className="section-pad paper growth-questions">
        <h2>Before we start.</h2>
        <Faq
          items={[
            [
              "Can you work without an advertising budget?",
              "Yes. A scope can focus on useful pages, content and existing organic channels. That does not make production, printing or implementation cost-free, and it does not guarantee reach.",
            ],
            [
              "Do you already have audiences and distribution partners in every city?",
              "No such network is claimed. We run remote campaigns across India; partner availability, local shoots and activations are confirmed for the specific brief.",
            ],
            [
              "Why are your projects labelled demonstrations?",
              "We are building our portfolio. Sample projects show our proposed approach without implying a completed client engagement or measured outcomes.",
            ],
          ]}
        />
        <div className="mt-8">
          <Cta />
        </div>
      </section>
    </main>
  );
}
