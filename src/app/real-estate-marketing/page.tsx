import Link from "next/link";
import {
  pageMetadata,
  breadcrumbData,
  serviceData,
  webPageData,
} from "@/lib/seo";
import { StructuredData } from "@/components/structured-data";
import {
  Breadcrumbs,
  Label,
  Cta,
  Arrow,
  Faq,
  ContactBand,
  Star,
} from "@/components/ui";
export const metadata = pageMetadata(
  "Real Estate Marketing Agency in Chennai | DaaS.media",
  "Reach relevant property buyers in Chennai and across India with focused content, local media, paid ads and lead generation. Real estate marketing by DaaS.media.",
  "/real-estate-marketing/",
  {
    ogImage: "/real-estate-marketing/opengraph-image/",
    ogAlt: "Real Estate Marketing Agency in Chennai — DaaS.media",
  },
);
const channels = [
  [
    "Local property media",
    "A relevant place for the project story.",
    "Research local property publishers and pages, assess editorial and audience fit, and scope possible placements. Availability, fees, disclosure and usage rights are confirmed with each publisher.",
  ],
  [
    "Neighbourhood audiences",
    "Build the story around the location.",
    "Develop content that answers location-specific buyer questions: the exact setting, access, surrounding context and the details a site visit can clarify. Verify facts before they become campaign claims.",
  ],
  [
    "Property creators",
    "Give the project a useful explanation.",
    "Find creators whose work and audience fit the brief. Plan walkthroughs, interviews and explainers around approved information, with clear commercial disclosure and agreed reuse rights.",
  ],
  [
    "Content & communities",
    "Show up with something worth sharing.",
    "Create project content and seek permission-based community distribution. Match the topic to the group or community, respect its rules and offer a useful next step rather than repetitive promotion.",
  ],
  [
    "Lead-generation campaigns",
    "Connect attention to a real conversation.",
    "Use search, paid social and focused landing pages to capture relevant enquiries. Agree qualification questions, consent language, source tracking and the handoff to your sales team.",
  ],
  [
    "Physical touchpoints",
    "Carry the same message into the real world.",
    "Where the brief calls for it, scope open-house communication, print, local media or on-ground activation. Confirm local delivery capacity, permissions and costs before scheduling activity.",
  ],
];
export default function RealEstate() {
  return (
    <main id="main">
      <StructuredData
        data={webPageData({
          name: "Real Estate Marketing Agency in Chennai | DaaS.media",
          description:
            "Reach relevant property buyers in Chennai and across India with focused content, local media, paid ads and lead generation.",
          path: "/real-estate-marketing/",
        })}
      />
      <StructuredData
        data={serviceData(
          "Real estate distribution and marketing",
          "Distribution systems for developers, builders, brokers, property consultants and PropTech companies.",
          "/real-estate-marketing/",
        )}
      />
      <StructuredData
        data={breadcrumbData([
          { name: "Home", path: "/" },
          { name: "Real estate marketing", path: "/real-estate-marketing/" },
        ])}
      />
      <section className="page-hero real-estate-hero section-pad">
        <Breadcrumbs items={[{ name: "Real estate marketing" }]} />
        <div className="hero-kicker mt-12">
          <span className="eyebrow">OUR FIRST OUTBOUND SPECIALTY</span>
          <span className="eyebrow muted">
            CHENNAI FOCUS. CAMPAIGNS ACROSS INDIA.
          </span>
        </div>
        <h1>
          Real estate marketing.
          <br />
          <em>Built around buyers.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            Your next buyer needs more than another property post. DaaS.media
            connects local property media, neighbourhood audiences, creators,
            content, communities and campaigns into a distribution system.
          </p>
          <Cta service="real-estate" />
        </div>
        <div className="real-estate-strip">
          <span>DEVELOPERS & BUILDERS</span>
          <span>BROKERS & CONSULTANTS</span>
          <span>PROPTECH</span>
        </div>
      </section>
      <section className="section-pad paper">
        <Label number="01 — THE DIFFERENCE">
          YOUR REAL ESTATE DISTRIBUTION PARTNER.
        </Label>
        <div className="detail-intro">
          <h2>
            Give the project
            <br />a presence.
            <br />
            <em>Give buyers context.</em>
          </h2>
          <div>
            <p className="lead">
              Property decisions involve a place, a budget, a timeline and a
              great deal of comparison. Your marketing needs to help buyers
              understand the project and know what to do next.
            </p>
            <p className="body-copy mt-6">
              As a real estate marketing agency serving Chennai businesses, we
              connect the people creating the story with the channels
              distributing it and the team handling enquiries. The work goes
              beyond a social media calendar: it is a coordinated plan for
              discovery, consideration and follow-up.
            </p>
            <p className="body-copy mt-6">
              We run remote campaigns across India. Local shoots, creator visits
              and on-ground activations are confirmed for the brief. A market on
              your target list is not a claim that we own a local audience or
              maintain an office there.
            </p>
          </div>
        </div>
      </section>
      <section className="section-pad">
        <Label number="02 — WHO WE HELP">
          A DIFFERENT BRIEF FOR EVERY BUSINESS.
        </Label>
        <div className="audience-grid">
          {[
            [
              "Developers & builders",
              "Introduce a launch, explain a project’s strengths or support available inventory with a coordinated content and campaign plan.",
            ],
            [
              "Brokers & property consultants",
              "Make your expertise and verified listings useful to buyers, then route enquiries by requirement and location.",
            ],
            [
              "PropTech companies",
              "Explain the product, reach relevant property audiences and build a clear path from discovery to a demo or enquiry.",
            ],
          ].map(([t, p]) => (
            <article key={t}>
              <Star />
              <h2>{t}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad paper">
        <Label number="03 — THE DISTRIBUTION SYSTEM">
          CONNECTED CHANNELS. ONE PROJECT STORY.
        </Label>
        <div className="section-heading">
          <h2>
            From local attention
            <br />
            to <em>relevant enquiries.</em>
          </h2>
          <p className="body-copy">
            We choose the mix around the project.
            <br />
            Every channel has a job.
          </p>
        </div>
        <div className="channel-list">
          {channels.map(([title, heading, text], i) => (
            <details key={title} open={i === 0}>
              <summary>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{title}</h3>
                <span className="expand" aria-hidden="true">
                  +
                </span>
              </summary>
              <div>
                <h4>{heading}</h4>
                <p>{text}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="section-pad">
        <Label number="04 — THE CAMPAIGN">A PRACTICAL ROLLOUT.</Label>
        <div className="steps">
          {[
            [
              "Understand the project",
              "Review the location, inventory, price positioning, buyer questions, available assets and sales process. Agree the campaign’s scope and constraints.",
            ],
            [
              "Build the story",
              "Turn approved project information into a clear message, content brief, landing page and channel plan. Define what counts as a useful enquiry.",
            ],
            [
              "Coordinate distribution",
              "Launch the agreed paid campaigns and content. Coordinate any approved media, creator or community placements and physical activity.",
            ],
            [
              "Review and refine",
              "Review source quality, qualified conversations and site-visit stages where your team can supply the data. Improve the next cycle with that feedback.",
            ],
          ].map(([t, p], i) => (
            <article key={t}>
              <span className="eyebrow">0{i + 1}</span>
              <h2>{t}</h2>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad pink">
        <Label number="05 — THE LOCAL BRIEF">
          CHENNAI IS THE STARTING POINT.
        </Label>
        <div className="detail-intro">
          <h2>
            One city.
            <br />
            <em>Different buyer questions.</em>
          </h2>
          <div>
            <p className="lead">
              A neighbourhood name is a starting point for research, not a
              ready-made audience strategy. We begin with the exact project
              address and the people the offer is intended to serve.
            </p>
            <div className="locality-briefs">
              {[
                [
                  "Anna Nagar & Adyar",
                  "What is the actual project setting? Which existing surroundings and property details can we document clearly?",
                ],
                [
                  "OMR",
                  "Which stretch of the corridor is relevant? Define the exact location instead of treating the whole corridor as one market.",
                ],
                [
                  "Porur & Velachery",
                  "Which location and access questions are buyers asking? Use verified information and original content to answer them.",
                ],
                [
                  "Tambaram",
                  "What is the precise locality and project context? Confirm boundaries, travel claims and the area the campaign should address.",
                ],
              ].map(([name, copy]) => (
                <div key={name}>
                  <h3>{name}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
            <Link href="/locations/" className="text-link">
              How we plan campaigns across India
              <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad paper">
        <Label number="06 — BEFORE WE LAUNCH">
          THE INFORMATION THAT MAKES THE WORK USEFUL.
        </Label>
        <div className="brief-grid">
          <div>
            <h2>
              A clear brief.
              <br />
              <em>A credible campaign.</em>
            </h2>
            <p className="body-copy mt-6">
              We work from client-approved project facts. We do not invent
              availability, approvals, construction status, travel times or
              buyer demand.
            </p>
          </div>
          <ul className="check-list">
            <li>
              Project location, inventory, pricing context and intended buyer
              profile.
            </li>
            <li>
              Approved plans, photography, video, brand assets and usage
              permissions.
            </li>
            <li>
              Applicable project registration details and client-approved
              advertising disclosures.
            </li>
            <li>
              Current sales material and the questions your team hears most
              often.
            </li>
            <li>
              Budget, timeline, decision-makers and a named owner for enquiries.
            </li>
            <li>
              Follow-up process and the outcomes your team can report back.
            </li>
          </ul>
        </div>
        <div className="measurement-note">
          <h3>Measure the journey, not just the form fill.</h3>
          <p>
            Where the data is available, separate campaign reach, enquiries,
            relevant conversations, appointments and completed sales stages.
            Marketing reports should show their measurement limits. We do not
            promise a lead volume, cost per lead or sales outcome.
          </p>
        </div>
      </section>
      <section className="section-pad paper pt-0">
        <div className="faq-grid">
          <h2>
            Before your
            <br />
            <em>next launch.</em>
          </h2>
          <Faq
            items={[
              [
                "Are you a real estate lead-selling company?",
                "No. We build distribution and enquiry systems for your business. We do not sell a database and describe it as an exclusive audience of property buyers.",
              ],
              [
                "Do you already own local property media or communities?",
                "We do not claim ownership of a media network or guaranteed access to communities. Relevant channels are researched, and each placement or collaboration is confirmed before it enters the delivery plan.",
              ],
              [
                "Can you run campaigns outside Chennai?",
                "Yes. Remote campaigns can be delivered across India. Local production and activations depend on the brief, suitable partners, access and agreed costs.",
              ],
              [
                "Will you handle buyer calls and site visits?",
                "Your sales team normally owns buyer conversations and site visits. We agree qualification, routing and reporting responsibilities. Any additional sales operations support requires a separate scope.",
              ],
              [
                "What if we already have a marketing team?",
                "We can work alongside your team on distribution strategy, selected campaigns, production or enquiry workflows. Responsibilities are defined before launch.",
              ],
              [
                "Can you guarantee sales or a specific cost per lead?",
                "No. Price, inventory, buyer fit, market conditions and follow-up all affect outcomes. We propose a practical test, agreed deliverables and a transparent review process.",
              ],
            ]}
          />
        </div>
      </section>
      <section className="section-pad">
        <Label number="07 — THE BUILDING BLOCKS">
          EXPLORE THE SPECIALIST SERVICES.
        </Label>
        <div className="related-grid">
          {[
            ["meta-ads", "Meta ads"],
            ["google-ads", "Google Ads"],
            ["video-production", "Property shoots"],
            ["lead-generation", "Lead generation"],
            ["whatsapp-marketing", "WhatsApp follow-up"],
            ["seo", "Real estate SEO"],
          ].map(([slug, name]) => (
            <Link key={slug} href={`/services/${slug}/`}>
              <h2>{name}</h2>
              <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <section className="section-pad paper">
        <Label number="08 — INSPECT THE THINKING">
          DEMONSTRATIONS & PLANNING TOOLS.
        </Label>
        <div className="section-heading">
          <h2>
            Work you can inspect.
            <br />
            <em>Free resources you can use.</em>
          </h2>
          <p className="body-copy">
            Explore our residential launch demonstration brief and practical
            planning worksheets.
          </p>
        </div>
        <div className="service-card-grid mt-8">
          <Link
            className="service-card"
            href="/sample-projects/property-launch/"
          >
            <h3>Residential property launch demonstration</h3>
            <p>
              Inspect our sample property launch brief, audience questions,
              landing page structure, content sequence and measurement plan.
              Clearly labelled illustrative planning.
            </p>
            <span className="text-link mt-6">
              See the property demonstration ↗
            </span>
          </Link>
          <Link
            className="service-card"
            href="/resources/property-launch-brief/"
          >
            <h3>Property launch briefing template (.md)</h3>
            <p>
              Download our editable Markdown briefing worksheet to organise
              project facts, buyer questions, content approvals and enquiry
              follow-up before launch. Free, ungated download.
            </p>
            <span className="text-link mt-6">
              Download briefing template ↗
            </span>
          </Link>
          <Link
            className="service-card"
            href="/resources/enquiry-tracker/"
          >
            <h3>Campaign enquiry tracker template (.csv)</h3>
            <p>
              Download a simple spreadsheet to track genuine property enquiries,
              sources, qualification stages and team follow-up. Free, ungated
              download.
            </p>
            <span className="text-link mt-6">Download enquiry tracker ↗</span>
          </Link>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
