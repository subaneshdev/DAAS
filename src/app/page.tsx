import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Arrow, Star, Cta, Label, Faq, ContactBand } from "@/components/ui";
import { services } from "@/content/services";
export const metadata = pageMetadata(
  "Digital Marketing Agency in Chennai | DaaS.media",
  "DaaS.media builds digital campaigns, content and distribution systems for businesses in Chennai. Explore our services and discuss your growth goals.",
  "/",
);
export default function Home() {
  return (
    <main id="main">
      <section className="home-hero section-pad">
        <div className="hero-kicker">
          <span className="eyebrow">
            INDEPENDENT THINKING. CONNECTED EXECUTION.
          </span>
          <span className="eyebrow muted">CHENNAI / DIGITAL + PHYSICAL</span>
        </div>
        <h1>
          Digital marketing
          <br />
          in Chennai.
          <br />
          <em>Built for distribution.</em>
        </h1>
        <Star className="hero-star" />
        <div className="hero-bottom">
          <p>
            DaaS.media builds the systems that take your business to relevant
            audiences. Paid campaigns, search, content, creators, communities,
            and real-world touchpoints. All working together.
          </p>
          <Cta />
        </div>
      </section>
      <div className="ticker">
        <span>ON SCREENS</span>
        <Arrow />
        <span>IN COMMUNITIES</span>
        <Arrow />
        <span>ON STREETS</span>
        <Arrow />
        <span>ON MINDS</span>
        <Arrow />
      </div>
      <section className="section-pad paper">
        <Label number="01 — THE IDEA">
          DISTRIBUTION IS THE CONNECTING THREAD.
        </Label>
        <div className="intro-grid">
          <Star className="intro-star" />
          <div>
            <h2>
              A good business
              <br />
              deserves to <em>get out there.</em>
            </h2>
            <p className="lead mt-8">
              We’re a digital marketing agency for businesses in Chennai that
              need more than disconnected activity. We connect the message, the
              channel and the next conversation.
            </p>
            <p className="body-copy mt-5">
              We run remote campaigns across India, with local shoots and
              activations scoped to the brief. The work can start with one
              service or a joined-up distribution plan. We help you clarify who
              to reach, create useful material, put it in the right places and
              learn from the response. Digital and physical touchpoints share
              the same goal.
            </p>
          </div>
        </div>
      </section>
      <section className="specialty section-pad">
        <Label number="02 — OUR FIRST SPECIALTY">
          REAL ESTATE DISTRIBUTION
        </Label>
        <div className="specialty-grid">
          <div>
            <h2>
              Property is local.
              <br />
              <em>
                Distribution
                <br />
                should be, too.
              </em>
            </h2>
            <p className="body-copy mt-8">
              We help developers, builders, brokers, property consultants and
              PropTech businesses connect with relevant buyers through local
              property media, neighbourhood audiences, creators, content,
              communities and lead-generation campaigns.
            </p>
            <Link className="text-link mt-8" href="/real-estate-marketing/">
              Explore real estate distribution
              <Arrow />
            </Link>
          </div>
          <div
            className="property-art"
            role="img"
            aria-label="Illustration of a property distribution system connecting a building to local media, creators, communities and buyers"
          >
            <div className="art-caption">THE PROPERTY DISTRIBUTION SYSTEM</div>
            <div className="building">
              <div className="building-top" />
              <div className="windows">
                {Array.from({ length: 24 }, (_, i) => (
                  <i key={i} />
                ))}
              </div>
              <span>
                YOUR NEXT
                <br />
                CHAPTER.
              </span>
            </div>
            <span className="art-chip chip-one">LOCAL MEDIA ↗</span>
            <span className="art-chip chip-two">CREATORS ↗</span>
            <span className="art-chip chip-three">COMMUNITIES ↗</span>
            <div className="art-bottom">
              ONE PROJECT. CONNECTED TOUCHPOINTS.
            </div>
          </div>
        </div>
      </section>
      <section className="section-pad" id="services">
        <Label number="03 — WHAT WE BUILD">PICK A STARTING POINT.</Label>
        <div className="section-heading">
          <h2>
            Different channels.
            <br />
            <em>A shared direction.</em>
          </h2>
          <Link href="/services/" className="text-link">
            Explore all services
            <Arrow />
          </Link>
        </div>
        <div className="service-preview">
          {[
            ["performance-marketing", "01"],
            ["seo", "02"],
            ["video-production", "03"],
            ["social-media-content", "04"],
            ["web-design-development", "05"],
            ["physical-distribution", "06"],
          ].map(([slug, n]) => {
            const s = services.find((item) => item.slug === slug)!;
            return (
              <Link
                key={slug}
                className="service-row"
                href={`/services/${slug}/`}
              >
                <span className="eyebrow muted">{n}</span>
                <h3>{s.name}</h3>
                <span className="service-row-description">{s.headline}</span>
                <Arrow />
              </Link>
            );
          })}
        </div>
      </section>
      <section className="bridge">
        <p className="eyebrow">THE WORLD ISN’T ONLINE OR OFFLINE.</p>
        <h2>
          It’s <em>both.</em>
        </h2>
        <div>
          DIGITAL THINKING.
          <Star />
          PHYSICAL IMPACT.
        </div>
      </section>
      <section className="section-pad paper">
        <Label number="04 — HOW WE WORK">
          A CLEAR PLAN. A USEFUL NEXT STEP.
        </Label>
        <div className="section-heading">
          <h2>
            From the first brief
            <br />
            to the <em>next conversation.</em>
          </h2>
          <p className="body-copy">
            One defined scope.
            <br />
            One connected way forward.
          </p>
        </div>
        <div className="steps">
          {[
            [
              "Discover",
              "Understand your business, audience, offer and sales process. Agree what the campaign should help achieve.",
            ],
            [
              "Design",
              "Choose channels, develop the message and plan the assets, budget and practical rollout.",
            ],
            [
              "Distribute",
              "Launch the agreed work across digital channels and physical touchpoints, with clear ownership.",
            ],
            [
              "Develop",
              "Review campaign evidence and sales feedback. Improve the next move with what we learn.",
            ],
          ].map(([title, copy], i) => (
            <article key={title}>
              <span className="eyebrow">
                0{i + 1} / {title.toUpperCase()}
              </span>
              <h3>{title}.</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad paper pt-0">
        <div className="faq-grid">
          <h2>
            Before we
            <br />
            <em>make moves.</em>
          </h2>
          <Faq
            items={[
              [
                "Who does DaaS.media work with?",
                "We work with businesses that need a clearer way to reach their audience. Real estate is our first outbound specialty: developers, builders, brokers, property consultants and PropTech companies.",
              ],
              [
                "Can we start with one service?",
                "Yes. You can start with a defined need such as Meta ads, SEO, a property shoot or a website. We explain how that work connects to your wider customer journey.",
              ],
              [
                "How do you work with Chennai businesses?",
                "We begin with the audience, service area, language needs and actual delivery requirements. Shoots, local media and physical activations are scoped around the brief and confirmed before launch.",
              ],
              [
                "What does a campaign cost?",
                "Scope depends on the offer, channels, assets, geography and timeline. Media spend, production, software and agency fees are distinguished in the proposal.",
              ],
              [
                "Do you guarantee rankings or sales?",
                "No. We commit to agreed work and clear measurement. Search visibility, lead quality and sales depend on factors that extend beyond a marketing campaign.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="section-pad growth-home">
        <p className="eyebrow">BUILDING OUR PORTFOLIO. SHOWING OUR THINKING.</p>
        <h2 className="mt-6">
          A clear approach.
          <br />
          <em>Work you can inspect.</em>
        </h2>
        <div className="service-card-grid mt-8">
          <Link className="service-card" href="/sample-projects/">
            <h3>Demonstration projects</h3>
            <p>
              Inspect fictional property and restaurant briefs, sample content
              and measurement plans. Clearly labelled, with no invented client
              results.
            </p>
            <span className="text-link mt-6">See the thinking ↗</span>
          </Link>
          <Link className="service-card" href="/resources/">
            <h3>Useful, free resources</h3>
            <p>
              Prepare a property brief, review a restaurant’s discovery journey
              or track genuine enquiries. Download the tools without an email
              gate.
            </p>
            <span className="text-link mt-6">Explore the resources ↗</span>
          </Link>
        </div>
        <nav className="growth-nav-links" aria-label="Explore distribution">
          <Link href="/distribution/">Our distribution approach ↗</Link>
          <Link href="/industries/">Explore industries ↗</Link>
          <Link href="/pilot/">Start with a focused pilot ↗</Link>
        </nav>
      </section>
      <ContactBand />
    </main>
  );
}
