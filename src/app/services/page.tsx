import Link from "next/link";
import { services } from "@/content/services";
import { pageMetadata, breadcrumbData, collectionPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs, Label, Cta, Arrow, ContactBand } from "@/components/ui";

export const metadata = pageMetadata(
  "Digital, Creative & Distribution Services | DaaS.media",
  "Explore DaaS.media’s digital marketing, content, web and physical distribution services. Find the right starting point for your business in Chennai.",
  "/services/",
  {
    ogImage: "/services/opengraph-image/",
    ogAlt: "Digital, Creative & Distribution Services — DaaS.media",
  },
);

const serviceGroups = [
  {
    title: "Strategy & distribution",
    number: "01",
    description:
      "Align your channel mix, customer journey and real-world touchpoints into a unified campaign architecture.",
    slugs: ["digital-marketing", "physical-distribution"],
  },
  {
    title: "Search & paid media",
    number: "02",
    description:
      "Connect high-intent discovery across Google, Meta, local business listings and performance ad campaigns.",
    slugs: [
      "seo",
      "google-business-profile",
      "google-ads",
      "meta-ads",
      "performance-marketing",
      "lead-generation",
      "chatgpt-ads",
    ],
  },
  {
    title: "Content & creative",
    number: "03",
    description:
      "Produce original video, photography, social narratives and brand assets designed for distribution.",
    slugs: [
      "video-production",
      "video-editing",
      "social-media-content",
      "social-media-design",
      "branding",
    ],
  },
  {
    title: "Websites & technology",
    number: "04",
    description:
      "Build fast, server-rendered destinations, automated email nurture journeys and direct messaging flows.",
    slugs: [
      "web-design-development",
      "hosting-support",
      "whatsapp-marketing",
      "email-marketing",
    ],
  },
  {
    title: "Measurement & support",
    number: "05",
    description:
      "Inspect source attribution, lead qualification rates, tracking integrity and continuous campaign refinement.",
    slugs: ["analytics"],
  },
];

export default function Services() {
  return (
    <main id="main">
      <StructuredData
        data={collectionPageData({
          name: "Digital, Creative & Distribution Services | DaaS.media",
          description:
            "Explore 19 marketing, content, paid media, SEO, web and physical distribution services offered by DaaS.media.",
          path: "/services/",
          items: services.map((s) => ({
            name: s.name,
            path: `/services/${s.slug}/`,
          })),
        })}
      />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />
      <section className="page-hero section-pad">
        <Breadcrumbs items={[{ name: "Services" }]} />
        <p className="eyebrow mt-12">THE TOOLS. THE THINKING. THE EXECUTION.</p>
        <h1>
          Good ideas need
          <br />
          <em>good distribution.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            Find the service your business needs now, and the connections that
            help it work harder. A focused brief or a complete system. We can
            start with either.
          </p>
          <Cta />
        </div>
      </section>

      <section className="section-pad paper">
        {serviceGroups.map((group) => {
          const groupServices = group.slugs
            .map((slug) => services.find((s) => s.slug === slug))
            .filter((s): s is NonNullable<typeof s> => Boolean(s));

          return (
            <div className="service-category" key={group.title}>
              <Label number={group.number}>{group.title.toUpperCase()}</Label>
              <p className="body-copy max-w-2xl mb-8 text-neutral-600">
                {group.description}
              </p>
              <div className="service-card-grid">
                {groupServices.map((s) => (
                  <Link
                    href={`/services/${s.slug}/`}
                    className="service-card"
                    key={s.slug}
                  >
                    <div className="flex justify-between gap-4">
                      <h2>{s.name}</h2>
                      <Arrow />
                    </div>
                    <p>{s.intro}</p>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <span className="text-xs uppercase tracking-wider text-neutral-500 font-mono">
                        Ideal fit:
                      </span>
                      <p className="text-xs text-neutral-700 mt-1">{s.fit}</p>
                    </div>
                    <span className="eyebrow mt-4 inline-block">
                      EXPLORE THE SERVICE ↗
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <ContactBand />
    </main>
  );
}
