"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

export function Navigation() {
  const path = usePathname();
  const ref = useRef<HTMLDetailsElement>(null);
  function close() { if (ref.current) ref.current.open = false; }
  return (
    <details className="studio-menu" ref={ref} onKeyDown={(event) => { if (event.key === "Escape") { close(); ref.current?.querySelector("summary")?.focus(); } }}>
      <summary aria-label="Main navigation"><span className="studio-menu-dots" aria-hidden="true"><i /><i /><i /><i /></span><span className="menu-caption">MENU</span></summary>
      <nav aria-label="Main navigation" className="studio-menu-panel">
        <p className="studio-label">FIND YOUR NEXT CHAPTER</p>
        {[["/", "Home"], ["/about/", "About"], ["/distribution/", "Our approach"], ["/services/", "Services"], ["/industries/", "Industries"], ["/real-estate-marketing/", "Real estate"], ["/sample-projects/", "Sample projects"], ["/resources/", "Resources"], ["/contact/", "Let’s talk"]].map(([href,label],i)=><Link onClick={close} href={href} key={href} aria-current={path === href || (href!=="/" && path.startsWith(href))?"page":undefined}><span>0{i+1}</span>{label}<span aria-hidden="true">↗</span></Link>)}
        <a href="mailto:contact@daas.media" onClick={close} className="studio-menu-email">contact@daas.media</a>
      </nav>
    </details>
  );
}
