import Link from "next/link";
import { pageMetadata, breadcrumbData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs } from "@/components/ui";
import { EnquiryForm } from "@/components/enquiry-form";
import { services } from "@/content/services";
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
  const initial =
    service === "real-estate" || services.some((s) => s.slug === service)
      ? service!
      : "distribution-strategy";
  return (
    <main id="main">
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
              Remote campaigns across India. Local shoots and activations are
              confirmed for each brief.
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
              services={services.map(({ slug, name }) => ({ slug, name }))}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
