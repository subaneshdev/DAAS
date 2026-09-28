import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="section-pad not-found">
      <span className="eyebrow">404 / A DIFFERENT DIRECTION.</span>
      <h1>
        Let’s get you
        <br />
        <em>back on track.</em>
      </h1>
      <p>
        This page isn’t here. Explore our services or tell us what you’re
        looking for.
      </p>
      <Link className="cta" href="/services/">
        Explore our services ↗
      </Link>
    </main>
  );
}
