import Link from "next/link";
import { pageMetadata, breadcrumbData, webPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs, Cta, Faq } from "@/components/ui";

export const metadata = pageMetadata(
  "A Focused Marketing Pilot | DaaS.media",
  "Start with one business objective, a useful page, a small content package and an enquiry review. Discuss a clearly scoped DaaS.media pilot engagement.",
  "/pilot/",
);

export default function Pilot() {
  return (
    <main id="main">
      <StructuredData
        data={webPageData({
          name: "A Focused Marketing Pilot | DaaS.media",
          description:
            "Start with one business objective, a useful landing page, focused content assets and an enquiry-tracking review.",
          path: "/pilot/",
        })}
      />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Pilot", path: "/pilot/" },
        ])}
      />
      <section className="page-hero section-pad">
        <Breadcrumbs items={[{ name: "Pilot" }]} />
        <p className="eyebrow mt-12">SMALL SCOPE. VISIBLE WORK.</p>
        <h1>
          Start with one
          <br />
          <em>useful improvement.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            A focused pilot lets us work on a real business problem before
            committing to a wider programme. We agree deliverables,
            responsibilities and a review point. We do not promise a particular
            number of leads or a ranking.
          </p>
          <Cta service="pilot" />
        </div>
      </section>
      <section className="section-pad paper">
        <div className="growth-sections">
          <article>
            <h2>A proposed starting scope</h2>
            <p>
              For a business with an existing offer and an owner available to
              approve information, we can discuss the following package. Final
              scope and fees are agreed in writing before work starts.
            </p>
            <ul>
              <li>
                A review of one customer journey, from discovery to enquiry.
              </li>
              <li>
                One landing page or a focused improvement to an existing page.
              </li>
              <li>
                Three content concepts or adaptations using approved existing
                assets.
              </li>
              <li>A brief and enquiry-tracking worksheet.</li>
              <li>
                One review of completed deliverables and the next sensible
                action.
              </li>
            </ul>
          </article>
          <article>
            <h2>What the business provides</h2>
            <p>
              An authorised contact, accurate product or service information,
              approved assets and timely feedback. Any account access must use
              the provider’s normal permission system. We agree who answers
              enquiries and how progress will be recorded.
            </p>
          </article>
          <article>
            <h2>What needs separate agreement</h2>
            <p>
              Ad spend, domain and hosting charges, travel, new photography,
              filming, printing, creator fees, media placement, CRM integrations
              and ongoing management are outside this proposed starting scope.
              We quote the pilot fee after reviewing the brief, so you can
              decide with a clear scope and cost.
            </p>
          </article>
          <article>
            <h2>Define acceptance before work begins</h2>
            <p>
              Agree the exact page, content formats, revision allowance,
              schedule and handover files. Completion means the agreed
              deliverables are supplied and checked. A short pilot may establish
              a useful baseline without enough time or traffic to evaluate
              organic growth.
            </p>
          </article>
          <article>
            <h2>Case-study permission is separate</h2>
            <p>
              We may ask whether you are comfortable with a factual account of
              the work being published. Declining is fine. Names, imagery,
              testimonials and business results are published only with
              permission and appropriate evidence. A positive review is never a
              condition of service.
            </p>
          </article>
        </div>
        <div className="growth-link-grid">
          <Link className="growth-link" href="/sample-projects/">
            See demonstration work ↗
          </Link>
          <Link className="growth-link" href="/resources/enquiry-tracker/">
            Inspect the measurement worksheet ↗
          </Link>
        </div>
      </section>
      <section className="section-pad paper growth-questions">
        <h2>Make the scope clear.</h2>
        <Faq
          items={[
            [
              "Is the pilot free?",
              "Pricing depends on the agreed work. We provide a written scope and fee before starting. No free engagement or discount is promised on this page.",
            ],
            [
              "How long does it take?",
              "The schedule depends on the page, assets, access and approval process. We agree dates after reviewing the brief rather than promising a turnaround without those inputs.",
            ],
            [
              "Will you guarantee leads or rankings?",
              "No. We commit to the agreed work and honest measurement. Search visibility and sales outcomes depend on factors beyond a short engagement.",
            ],
          ]}
        />
        <div className="mt-8">
          <Cta service="pilot" />
        </div>
      </section>
    </main>
  );
}
