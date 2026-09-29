"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function Navigation() {
  const path = usePathname();
  return (
    <nav className="floating-nav" aria-label="Main navigation">
      {[
        ["/", "Home"],
        ["/distribution/", "Explore"],
        ["/services/", "Services"],
        ["/contact/", "Discuss goals ↗"],
      ].map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className={href === "/contact/" ? "nav-cta" : ""}
          aria-current={
            href === "/"
              ? path === "/"
                ? "page"
                : undefined
              : path.startsWith(href)
                ? "page"
                : undefined
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
