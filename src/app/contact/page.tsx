import Link from "next/link";
import { pageMetadata, breadcrumbData, contactPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs, Label, Arrow } from "@/components/ui";
import { EnquiryForm } from "@/components/enquiry-form";
import { services } from "@/content/services";
import { industries } from "@/content/growth";
import { site } from "@/content/site";

export const metadata = pageMetadata(
  "Discuss Your Distribution Goals | DaaS.media",
  "Tell DaaS.media about your business, audience and distribution goals. Enquire about real estate marketing, digital campaigns, content and connected services.",
  "/contact/",
);

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const choices = [
    ...services.map(({ slug, name }) => ({ slug, name })),
    { slug: "pilot", name: "A focused pilot" },
    ...industries.map((p) => ({ slug: `industry-${p.slug}`, name: p.name })),
  ];
  const initial =
    service === "real-estate" || choices.some((s) => s.slug === service)
      ? service!
      : "distribution-strategy";
  return (
    <main id="main">
      <StructuredData data={contactPageData()} />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ])}
      />
      <section className="section-pad contact-page">
        <Breadcrumbs items={[{ name: "Contact" }]} />
        <div className="contact-page-grid">
          <div>
            <span className="eyebrow">YOUR NEXT CHAPTER.</span>
            <h1>
              Discuss your
              <br />
              <em>distribution goals.</em>
            </h1>
            <p className="lead mt-8">
              Tell us what you’re building, who you need to reach and what you
              want to happen next.
            </p>
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email} ↗
            </a>
            <p className="body-copy mt-6">
              Remote campaigns across India, anchored from Chennai. Local
              shoots and on-ground activations are scoped and confirmed for each
              brief.
            </p>
            <Link className="text-link mt-6" href="/locations/">
              Explore how we work across markets ↗
            </Link>
          </div>
          <div className="form-panel">
            <EnquiryForm
              deliveryEnabled={Boolean(
                process.env.RESEND_API_KEY && process.env.ENQUIRY_FROM_EMAIL,
              )}
              initialService={initial}
              services={choices}
            />
          </div>
        </div>
      </section>

      <section className="section-pad paper">
        <Label number="01 — PREPARING THE BRIEF">
          MAKING THE FIRST CONVERSATION USEFUL.
        </Label>
        <div className="coverage-grid">
          <article>
            <h2>What helps us prepare a useful reply</h2>
            <p className="body-copy">
              Include the product, service or property you are promoting, your
              target market (such as Chennai neighbourhoods or remote Indian
              metros), the goal you are prioritising, and whether a website,
              creative assets or sales team are already in place. Separate media
              budget context helps us recommend a realistic starting scope.
            </p>
          </article>
          <article>
            <h2>How scope and fees are handled</h2>
            <p className="body-copy">
              We review the brief, check whether an existing channel or a
              single focused improvement makes more sense than a broad retainer,
              and confirm what requires verified facts or account access from
              your side. Media spend, production, software licences and agency
              fees are always listed separately.
            </p>
          </article>
        </div>
        <div className="coverage-grid">
          <article>
            <h2>Prefer to inspect first?</h2>
            <p className="body-copy">
              If you are still shaping the internal brief before reaching out,
              start with our ungated worksheets or inspect how we structure a
              pilot without long-term lock-in.
            </p>
          </article>
          <article>
            <h2>How enquiry details are used</h2>
            <p className="body-copy">
              Enquiry details are used solely to review and respond to your
              request. Do not upload sensitive buyer databases or confidential
              financial records through this form. Read our full{" "}
              <Link href="/privacy/" className="underline">
                privacy and data-handling note
              </Link>
              .
            </p>
          </article>
        </div>
        <div className="growth-link-grid mt-8">
          <Link className="growth-link" href="/pilot/">
            Explore a focused pilot scope <Arrow />
          </Link>
          <Link className="growth-link" href="/resources/property-launch-brief/">
            Download the property brief template (.md) <Arrow />
          </Link>
          <Link className="growth-link" href="/about/">
            Learn how DaaS.media operates <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
