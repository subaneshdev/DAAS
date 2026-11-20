import Image from "next/image";
import Link from "next/link";
import { pageMetadata, webPageData } from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import { Arrow, Cta, Faq } from "@/components/ui";

export const metadata = pageMetadata(
  "Digital Marketing Agency in Chennai | DaaS.media",
  "DaaS.media builds digital campaigns, content and distribution systems for businesses in Chennai. Explore our services and discuss your growth goals.",
  "/",
);

const capabilities = [
  { number: "01", name: "Be discovered.", text: "Search, local discovery and useful content that help the right people find your business.", links: [["SEO & organic growth", "seo"], ["Google Business Profile", "google-business-profile"], ["Websites & landing pages", "web-design-development"]] },
  { number: "02", name: "Be understood.", text: "A clear identity. A story worth spending time with. Creative built for the places it will live.", links: [["Brand identity", "branding"], ["Video & photography", "video-production"], ["Social media content", "social-media-content"]] },
  { number: "03", name: "Be connected.", text: "Turn attention into a useful next step, across screens, communities and physical spaces.", links: [["Lead generation", "lead-generation"], ["WhatsApp journeys", "whatsapp-marketing"], ["Physical distribution", "physical-distribution"]] },
];
const industries = [["Real estate", "/real-estate-marketing/", "From a property to a place people can imagine."], ["Restaurants", "/industries/restaurants/", "From local discovery to the next table."], ["Manufacturing", "/industries/manufacturing/", "From technical capability to a qualified conversation."], ["B2B", "/industries/b2b/", "Make a considered decision easier to make."], ["Food & beverage", "/industries/food-beverage/", "Give the product a story and a route to discovery."], ["FMCG", "/industries/fmcg/", "Connect brand attention with retail touchpoints."]];

export default function Home() {
  return (
    <main id="main" className="studio-home">
      <StructuredData data={webPageData({ name: "Digital Marketing Agency in Chennai | DaaS.media", description: "DaaS.media builds digital campaigns, content and distribution systems for businesses in Chennai. Explore our services and discuss your growth goals.", path: "/" })} />
      <section className="studio-hero" aria-labelledby="hero-title">
        <Image className="studio-hero-image" src="/images/distribution-city.webp" alt="" fill sizes="100vw" priority />
        <div className="studio-hero-shade" />
        <div className="studio-grid" aria-hidden="true"><span /><span /></div>
        <div className="studio-hero-copy">
          <p className="studio-label"><span className="status-light" /> INDEPENDENT DISTRIBUTION PARTNER</p>
          <h1 id="hero-title">Good businesses.<br /><em>Out in the world.</em></h1>
          <p className="studio-hero-intro">A digital marketing agency in Chennai.<br />Built to connect the digital and the physical.</p>
          <Cta className="studio-button" />
        </div>
        <a className="studio-scroll" href="#approach" aria-label="Explore our approach"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a>
        <div className="studio-hero-caption">
          <p className="studio-label">DISTRIBUTION<br />AS A SERVICE</p>
          <p>We bring strategy, content, media and real-world touchpoints together. So your business reaches the people it matters to.</p>
          <span className="studio-caption-place">CHENNAI · ACROSS INDIA<br />DIGITAL + PHYSICAL</span>
        </div>
      </section>

      <nav className="studio-chapters" aria-label="Homepage chapters">
        <a href="#approach"><span>01</span> Approach</a><a href="#capabilities"><span>02</span> Capabilities</a><a href="#industries"><span>03</span> Industries</a><a href="#process"><span>04</span> Process</a><a href="#questions"><span>05</span> Details</a>
      </nav>

      <section id="approach" className="studio-section studio-approach">
        <div className="studio-section-top"><span className="studio-label">01 / THE APPROACH</span><span className="studio-label">ATTENTION NEEDS A DIRECTION.</span></div>
        <div className="studio-editorial"><h2>Not just seen.<br /><em>Connected.</em></h2><div><p className="studio-lead">A message becomes useful when it reaches the right person, in the right context, with a clear next step.</p><p>We build that journey. From search and content to creators, communities and on-ground experiences, each channel has a job to do. The work can begin with one service or a complete distribution plan.</p><Link href="/distribution/" className="studio-text-link">Explore our distribution approach <Arrow /></Link></div></div>
        <div className="studio-orbit" aria-label="One business connected to search, content, communities and physical touchpoints" role="img"><div className="orbit-ring orbit-ring-one" /><div className="orbit-ring orbit-ring-two" /><div className="orbit-core">daas<span>.media</span></div><span className="orbit-label orbit-a">SEARCH & DISCOVERY</span><span className="orbit-label orbit-b">CONTENT & CREATORS</span><span className="orbit-label orbit-c">LOCAL COMMUNITIES</span><span className="orbit-label orbit-d">PHYSICAL TOUCHPOINTS</span><span className="orbit-note">ONE BUSINESS. CONNECTED POSSIBILITIES.</span></div>
      </section>

      <section id="capabilities" className="studio-section studio-light">
        <div className="studio-section-top"><span className="studio-label">02 / CAPABILITIES</span><Link href="/services/" className="studio-text-link">All services <Arrow /></Link></div>
        <div className="studio-section-heading"><h2>Different disciplines.<br /><em>One direction.</em></h2><p>Choose the starting point your business needs.<br />We connect it to the bigger picture.</p></div>
        <div className="studio-capabilities">{capabilities.map((item)=><article key={item.number}><span className="studio-label">/{item.number}</span><h3>{item.name}</h3><p>{item.text}</p><ul>{item.links.map(([label,slug])=><li key={slug}><Link href={`/services/${slug}/`}>{label}<Arrow /></Link></li>)}</ul></article>)}</div>
        <div className="studio-paid-note"><span className="studio-label">WHEN PAID REACH FITS THE BRIEF</span><p>We also plan and manage <Link href="/services/meta-ads/">Meta ads</Link>, <Link href="/services/google-ads/">Google Ads</Link> and <Link href="/services/performance-marketing/">performance campaigns</Link>. Media spend is scoped separately.</p></div>
      </section>

      <section id="industries" className="studio-section studio-industries">
        <div className="studio-section-top"><span className="studio-label">03 / THE CONTEXT MATTERS</span><span className="studio-label">BUILT AROUND YOUR BUSINESS</span></div>
        <div className="studio-editorial"><h2>Same thinking.<br /><em>Different worlds.</em></h2><div><p className="studio-lead">Every audience has its own reasons to pay attention.</p><p>We start with the market, the decision and the route to a conversation. Real estate is our first outbound specialty. Our approach also supports businesses across these sectors.</p></div></div>
        <div className="studio-industry-list">{industries.map(([name,href,description],i)=><Link href={href} key={href}><span className="studio-label">0{i+1}</span><h3>{name}</h3><p>{description}</p><Arrow /></Link>)}</div>
      </section>

      <section className="studio-feature" aria-labelledby="property-title"><div className="studio-feature-visual"><Image src="/images/distribution-city.webp" alt="Conceptual architectural artwork of buildings connected by a pink ribbon of light" fill sizes="(max-width: 760px) 100vw, 55vw" /><span className="studio-label">CONCEPT ART / CONNECTED PLACES</span></div><div className="studio-feature-copy"><p className="studio-label">OUR FIRST SPECIALTY / REAL ESTATE</p><h2 id="property-title">Property is local.<br /><em>So is possibility.</em></h2><p>For developers, builders, brokers, property consultants and PropTech teams. We connect property content, relevant neighbourhood audiences, creators and enquiry journeys around your project.</p><Link href="/real-estate-marketing/" className="studio-button">Explore real estate distribution <Arrow /></Link></div></section>

      <section id="process" className="studio-section studio-light"><div className="studio-section-top"><span className="studio-label">04 / THE PROCESS</span><span className="studio-label">A CLEAR WAY FORWARD</span></div><div className="studio-section-heading"><h2>From the first brief<br /><em>to the next move.</em></h2><p>A defined scope, clear ownership<br />and a shared understanding of progress.</p></div><div className="studio-process">{[["Discover","Understand the business, audience, offer and sales process. Agree what the work needs to achieve."],["Design","Choose the channels, shape the message and plan the assets, budget and rollout."],["Distribute","Launch the agreed work across digital channels and physical touchpoints, with clear ownership."],["Develop","Review campaign evidence and sales feedback. Improve the next move with what we learn."]].map(([title,copy],i)=><article key={title}><span className="studio-process-num">0{i+1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="studio-section studio-thinking"><div className="studio-section-top"><span className="studio-label">OPEN STUDIO</span><span className="studio-label">SEE HOW WE THINK</span></div><div className="studio-section-heading"><h2>Before we work together,<br /><em>look closer.</em></h2><p>We’re building our portfolio.<br />Here’s work you can inspect today.</p></div><div className="studio-thinking-grid"><Link href="/sample-projects/" className="studio-thinking-card"><div className="studio-sample-art" aria-hidden="true"><span className="sample-sheet"><small>THE DISTRIBUTION BRIEF</small><b>Who.<br />Where.<br />What next.</b><i>DAAS.MEDIA / STUDY 01</i></span><span className="sample-seal">D</span></div><div><span className="studio-label">01 / DEMONSTRATIONS</span><h3>Our thinking, made tangible. <Arrow /></h3><p>Fictional property and restaurant briefs. Clearly labelled demonstrations, with no invented client results.</p></div></Link><Link href="/resources/" className="studio-thinking-card"><div className="studio-resource-art" aria-hidden="true"><span>Make room<br /><em>for a clear plan.</em></span><span className="resource-cross">+</span><small>BRIEFS / CHECKLISTS / ENQUIRY TRACKER</small></div><div><span className="studio-label">02 / FREE RESOURCES</span><h3>A useful place to start. <Arrow /></h3><p>A property launch brief, a restaurant discovery checklist and an enquiry tracker. No email gate.</p></div></Link></div></section>

      <section id="questions" className="studio-section studio-questions"><div className="studio-section-top"><span className="studio-label">05 / A FEW DETAILS</span></div><div className="faq-grid"><h2>Before we<br /><em>make moves.</em></h2><Faq items={[["Where does DaaS.media work?","We work with businesses in Chennai and run remote campaigns across India. Local shoots, creator work and physical activations depend on the brief and are confirmed before launch."],["Can we start with one service?","Yes. Start with a defined need such as SEO, a property shoot, content or a website. We explain how the work connects to your wider customer journey."],["Can we start without an advertising budget?","Yes. We can scope search, useful content, local discovery and enquiry journeys around your resources. Agency fees, production and any tools are discussed separately. Organic growth takes sustained work."],["How much does a project cost?","The proposal depends on your audience, channels, assets, geography and timeline. Agency fees, media spend, production and software are distinguished before you commit."],["Do you guarantee rankings or sales?","No. We commit to agreed work and clear measurement. Search visibility, lead quality and sales depend on factors beyond a marketing campaign."]]} /></div></section>
      <section className="studio-close"><span className="studio-label">THE NEXT CHAPTER IS YOURS.</span><h2>Let’s get your business<br /><em>out there.</em></h2><Cta className="studio-button" /><Link href="/pilot/" className="studio-text-link">Or start with a focused pilot <Arrow /></Link></section>
    </main>
  );
}
