import Link from "next/link";
import { services } from "@/content/services";
import { pageMetadata, breadcrumbData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Breadcrumbs, Label, Cta, Arrow, ContactBand } from "@/components/ui";
export const metadata = pageMetadata(
  "Digital, Creative & Distribution Services | DaaS.media",
  "Explore DaaS.media’s digital marketing, content, web and physical distribution services. Find the right starting point for your business in Chennai.",
  "/services/",
);
export default function Services() {
  return (
    <main id="main">
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
        {(
          ["Strategy & reach", "Content & identity", "Web & systems"] as const
        ).map((category, i) => (
          <div className="service-category" key={category}>
            <Label number={`0${i + 1}`}>{category.toUpperCase()}</Label>
            <div className="service-card-grid">
              {services
                .filter((s) => s.category === category)
                .map((s) => (
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
                    <span className="eyebrow">EXPLORE THE SERVICE</span>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>
      <ContactBand />
    </main>
  );
}
