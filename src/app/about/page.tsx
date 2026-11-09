import Link from "next/link";
import { pageMetadata, breadcrumbData, aboutPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import {
  Breadcrumbs,
  Label,
  Cta,
  Arrow,
  Star,
  ContactBand,
} from "@/components/ui";
import { site } from "@/content/site";

export const metadata = pageMetadata(
  "About DaaS.media | Digital Marketing Agency Chennai",
  "Learn about DaaS.media, our distribution-first methodology, Chennai roots and remote India delivery. Clear scope, verified methods and honest execution.",
  "/about/",
  {
    ogImage: "/about/opengraph-image/",
    ogAlt: "About DaaS.media — Distribution as a Service Agency in Chennai",
  },
);

export default function AboutPage() {
  return (
    <main id="main">
      <StructuredData data={aboutPageData()} />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />

      <section className="page-hero section-pad">
        <Breadcrumbs items={[{ name: "About" }]} />
        <div className="hero-kicker mt-12">
          <span className="eyebrow">
            INDEPENDENT THINKING. CONNECTED EXECUTION.
          </span>
          <span className="eyebrow muted">CHENNAI / DIGITAL + PHYSICAL</span>
        </div>
        <h1>
          About DaaS.media.
          <br />
          <em>Built for distribution.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            DaaS.media is a digital marketing and distribution agency founded in
            Chennai. We build systems that take your business to relevant
            audiences through paid campaigns, search, content, creators,
            communities and real-world touchpoints.
          </p>
          <Cta />
        </div>
      </section>

      <section className="section-pad paper">
        <Label number="01 — THE MODEL">DISTRIBUTION AS A SERVICE</Label>
        <div className="detail-intro">
          <h2>
            More than disconnected
            <br />
            <em>marketing activity.</em>
          </h2>
          <div>
            <p className="lead">
              A good business deserves to get out there. But running isolated
              ads, posting random social content or buying bulk leads rarely
              builds a sustainable acquisition engine.
            </p>
            <p className="body-copy mt-6">
              Distribution as a Service (DaaS) means connecting the message, the
              channel and the next conversation. We align online discovery
              (search, Meta Ads, Google Ads, content) with local context,
              community spaces and real-world touchpoints so every channel does a
              distinct, measurable job.
            </p>
            <div className="mt-8">
              <Link href="/distribution/" className="text-link">
                Explore our distribution approach
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <Label number="02 — LOCATION & DELIVERY">
          CHENNAI ROOTS. CAMPAIGNS ACROSS INDIA.
        </Label>
        <div className="detail-intro">
          <h2>
            Local context.
            <br />
            <em>National reach.</em>
          </h2>
          <div>
            <p className="lead">
              Chennai is our primary market focus and cultural anchor. We
              understand the neighbourhoods, business language and local nuances
              that make marketing resonate in Tamil Nadu.
            </p>
            <p className="body-copy mt-6">
              We deliver remote digital campaigns for clients across major Indian
              metros, including Bengaluru, Hyderabad, Mumbai, Pune and Delhi NCR.
              Where a brief requires local shoots, creator walkthroughs or
              physical activations, we scope verified on-ground production
              partners before launch. We do not claim physical offices in
              cities where we do not have confirmed premises.
            </p>
            <div className="mt-8">
              <Link href="/locations/" className="text-link">
                Learn how we work across markets
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad paper">
        <Label number="03 — SPECIALTY">FIRST FOCUS: REAL ESTATE</Label>
        <div className="detail-intro">
          <h2>
            Property is local.
            <br />
            <em>Distribution should be, too.</em>
          </h2>
          <div>
            <p className="lead">
              Real estate was our first outbound specialty and remains our
              deepest domain. We help developers, builders, brokers, property
              consultants and PropTech teams reach genuine buyers.
            </p>
            <p className="body-copy mt-6">
              Rather than generic lead-gen promises, we structure property
              marketing around the buying decision: project setting, verified
              specifications, catchment area, neighbourhood amenities and
              structured enquiry qualification.
            </p>
            <div className="mt-8">
              <Link href="/real-estate-marketing/" className="text-link">
                Explore real estate distribution
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <Label number="04 — PRINCIPLES">HOW WE OPERATE</Label>
        <div className="audience-grid">
          <article>
            <Star />
            <h2>Truthful evidence</h2>
            <p>
              We do not fabricate client logos, awards, review ratings or
              inflated metrics. Demonstration projects are explicitly labelled as
              fictional planning exercises.
            </p>
          </article>
          <article>
            <Star />
            <h2>Conversations over clicks</h2>
            <p>
              A form fill is only the beginning. We measure qualified buyer
              conversations, response times and sales handoff quality, not vanity
              impressions.
            </p>
          </article>
          <article>
            <Star />
            <h2>Transparent scopes</h2>
            <p>
              Media spend, production costs, agency fees and software licences
              are clearly separated in every proposal. No hidden markups or
              unrealistic guarantees.
            </p>
          </article>
        </div>
      </section>

      <section className="section-pad paper">
        <Label number="05 — EDITORIAL STANDARDS">
          OPEN RESOURCES & TOOLS
        </Label>
        <div className="detail-intro">
          <h2>
            Inspectable thinking.
            <br />
            <em>Free tools.</em>
          </h2>
          <div>
            <p className="lead">
              We publish practical briefing templates, audit checklists and
              tracking worksheets so businesses can plan their marketing with
              clarity.
            </p>
            <p className="body-copy mt-6">
              All downloadable tools are available without an email gate or
              signup barrier. We maintain editorial responsibility for every guide
              and update our materials as digital platforms and search practices
              evolve.
            </p>
            <div className="mt-8">
              <Link href="/resources/" className="text-link">
                Explore free marketing resources
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <Label number="06 — NEXT STEP">START A CONVERSATION</Label>
        <div className="section-heading">
          <h2>
            Discuss your
            <br />
            <em>distribution goals.</em>
          </h2>
          <p className="body-copy">
            Tell us about your project, your audience and what you want to
            achieve. Direct inquiries reach{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/contact/" className="text-link">
            Open the brief form
            <Arrow />
          </Link>
        </div>
      </section>

      <ContactBand />
    </main>
  );
}
