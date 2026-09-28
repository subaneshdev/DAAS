import Link from "next/link";
import { pageMetadata, breadcrumbData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs, Label, Cta, Faq, ContactBand } from "@/components/ui";
import { markets } from "@/content/markets";
export const metadata = pageMetadata(
  "Campaign Coverage Across India | DaaS.media",
  "DaaS.media runs remote campaigns across India. Learn how we scope local audiences, content, shoots and activations around your market and brief.",
  "/locations/",
);
export default function Locations() {
  return (
    <main id="main">
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Campaign coverage", path: "/locations/" },
        ])}
      />
      <section className="page-hero section-pad">
        <Breadcrumbs items={[{ name: "Campaign coverage" }]} />
        <p className="eyebrow mt-12">REMOTE DELIVERY. LOCAL CONTEXT.</p>
        <h1>
          Across India.
          <br />
          <em>Specific to your market.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            DaaS.media runs remote campaigns for businesses across India. We
            plan around the audience and the actual location of your offer, with
            shoots and physical activations confirmed for each brief.
          </p>
          <Cta />
        </div>
      </section>
      <section className="section-pad paper">
        <Label number="01 — DELIVERY">
          WHAT CAN BE REMOTE. WHAT NEEDS A LOCAL PLAN.
        </Label>
        <div className="coverage-grid">
          <article>
            <h2>Remote campaign delivery</h2>
            <p className="body-copy">
              Strategy, paid media management, search optimisation, content
              planning, design, editing, website work and enquiry workflows can
              be coordinated remotely. We agree access, asset requirements,
              approval owners, language review and reporting before starting.
            </p>
          </article>
          <article>
            <h2>Local execution, scoped first</h2>
            <p className="body-copy">
              A property shoot, creator visit, media placement or on-ground
              activation needs its own delivery plan. We check practical
              availability, permissions, travel, vendors and costs. We do not
              assume a national office network or guaranteed access to local
              publishers and communities.
            </p>
          </article>
        </div>
      </section>
      <section className="section-pad">
        <Label number="02 — THE BRIEF">
          START WITH THE MARKET YOU NEED TO REACH.
        </Label>
        <div className="section-heading">
          <h2>
            A city name is
            <br />
            <em>only the beginning.</em>
          </h2>
          <p className="body-copy">
            These are markets we can discuss for remote campaigns.
            <br />
            They are not office locations.
          </p>
        </div>
        <ul className="market-list">
          {markets.map((m) => (
            <li key={m.slug}>{m.name}</li>
          ))}
        </ul>
        <p className="body-copy">
          For Chandigarh-region briefs, we research Mohali and Zirakpur
          separately. For wider corridors and neighbourhood names, we confirm
          the precise project address and intended catchment before planning
          content or targeting.
        </p>
      </section>
      <section className="section-pad paper">
        <Label number="03 — LOCAL RELEVANCE">
          A USEFUL CAMPAIGN STARTS WITH USEFUL QUESTIONS.
        </Label>
        <div className="steps">
          {[
            [
              "Where, exactly?",
              "Confirm the project address, locality, service area and the real boundary of the offer.",
            ],
            [
              "Who is it for?",
              "Understand the customer’s needs, language, budget context and likely decision process.",
            ],
            [
              "What can we show?",
              "Collect approved facts, original content and relevant answers to local questions.",
            ],
            [
              "How will we deliver?",
              "Agree remote responsibilities and separately confirm any local production or activation.",
            ],
          ].map(([t, p], i) => (
            <article key={t}>
              <span className="eyebrow">0{i + 1}</span>
              <h2>{t}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
        <Link href="/real-estate-marketing/" className="text-link mt-12">
          See the real estate distribution approach ↗
        </Link>
      </section>
      <section className="section-pad paper pt-0">
        <div className="faq-grid">
          <h2>
            Coverage,
            <br />
            <em>clearly explained.</em>
          </h2>
          <Faq
            items={[
              [
                "Does this mean you have offices in these cities?",
                "No. The list describes markets for remote campaign discussions. We only publish office details when the business has confirmed a real office and its public contact information.",
              ],
              [
                "Can you arrange local property shoots?",
                "We can assess the requirement. Availability, local crew, access, permissions, timing and travel costs are confirmed in the proposal.",
              ],
              [
                "Will a city campaign include local creators and communities?",
                "Only where relevant channels can be identified and collaboration is agreed. We do not promise audience access before confirming it.",
              ],
              [
                "Why are there no separate pages for every neighbourhood?",
                "A useful local page needs distinct information, original material and an actual service context. We develop that evidence before publishing another page.",
              ],
            ]}
          />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
