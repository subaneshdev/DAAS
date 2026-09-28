import Link from "next/link";
import { site } from "@/content/site";
export function Arrow() {
  return <span aria-hidden="true">↗</span>;
}
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <path
        d="M43 0h14v32L80 9l10 10-23 24h33v14H67l23 24-10 10-23-23v32H43V68L20 91 10 81l23-24H0V43h33L10 19 20 9l23 23z"
        fill="currentColor"
      />
    </svg>
  );
}
export function Cta({
  service,
  className = "",
}: {
  service?: string;
  className?: string;
}) {
  return (
    <Link
      className={`cta ${className}`}
      href={`/contact/${service ? `?service=${encodeURIComponent(service)}` : ""}`}
    >
      {site.cta}
      <Arrow />
    </Link>
  );
}
export function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>({number})</span>
      <span>{children}</span>
    </div>
  );
}
export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="faq-list">
      {items.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">+</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((item) => (
          <li key={item.name}>
            {item.href ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              <span aria-current="page">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band section-pad">
      <Label number="NEXT">A CONVERSATION IS A GOOD PLACE TO START.</Label>
      <div className="contact-band-grid">
        <h2>
          Good business.
          <br />
          <em>Better distribution.</em>
        </h2>
        <div>
          <p>
            Tell us what you want to put out into the world. We’ll help you find
            the right way forward.
          </p>
          <Cta />
        </div>
      </div>
    </section>
  );
}
