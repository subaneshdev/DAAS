import { additionalServices } from "./additional-services";

export type ServiceDeepDive = {
  label: string;
  heading: string;
  blocks: { title: string; text: string }[];
};

export type Service = {
  slug: string;
  name: string;
  category: "Strategy & reach" | "Content & identity" | "Web & systems";
  keyword: string;
  supporting: string[];
  title: string;
  description: string;
  headline: string;
  intro: string;
  problem: string;
  deliverables: [string, string][];
  steps: [string, string][];
  useCase: string;
  fit: string;
  faqs: [string, string][];
  related: string[];
  deepDive?: ServiceDeepDive;
  relatedGuides?: { label: string; href: string }[];
};

export const services: Service[] = [
  {
    slug: "digital-marketing",
    name: "Digital marketing",
    category: "Strategy & reach",
    keyword: "digital marketing services in Chennai",
    supporting: [
      "integrated digital marketing",
      "digital marketing strategy Chennai",
    ],
    title: "Digital Marketing Services in Chennai | DaaS.media",
    description:
      "Connect paid media, search, content, email and measurement in one distribution plan. Explore DaaS.media’s digital marketing services in Chennai.",
    headline: "One business goal. A connected digital plan.",
    intro:
      "A campaign works better when each channel has a job. DaaS.media brings your content, paid media, organic discovery and follow-up into one practical distribution system.",
    problem:
      "Disconnected activity makes it difficult to understand what is moving the business forward. We start with your offer, audience and sales process, then choose the channels that can support them. You get a shared brief, a sequenced rollout and a clear view of what to review next.",
    deliverables: [
      [
        "Channel strategy",
        "Define the role of search, social, paid media, email and your website in the customer journey.",
      ],
      [
        "Campaign planning",
        "Build an offer, message hierarchy, creative requirements and a launch calendar.",
      ],
      [
        "Distribution coordination",
        "Connect specialist execution so ads, content and landing pages tell the same story.",
      ],
      [
        "Measurement and learning",
        "Agree meaningful events and review channel evidence alongside sales feedback.",
      ],
    ],
    steps: [
      [
        "Audit the journey",
        "Review your current channels, audience questions and sales handoffs.",
      ],
      [
        "Choose the mix",
        "Prioritise what to launch now, what to test and what can wait.",
      ],
      [
        "Run and refine",
        "Coordinate delivery and use findings to shape the next campaign.",
      ],
    ],
    useCase:
      "For a property launch, search can capture active demand, creators can explain the neighbourhood, and email can support prospects who request more information. The mix follows the project brief; it is not a fixed package of posts.",
    fit: "For businesses that need several specialists working toward one objective, or an existing team that needs a distribution plan and coordinated execution.",
    faqs: [
      [
        "Is this a monthly social media package?",
        "It can include social content, but the engagement is planned around a business goal. Channels, deliverables, management fees and media budgets are scoped before work starts.",
      ],
      [
        "Can you work with our in-house team?",
        "Yes. We can define strategy, coordinate selected channels or take ownership of agreed execution while your team retains other responsibilities.",
      ],
      [
        "Which channels do you cover?",
        "Paid social, search advertising, SEO, email, WhatsApp, content and measurement. New advertising channels are assessed for account eligibility and suitability before being included.",
      ],
    ],
    deepDive: {
      label: "HOW CHANNELS FIT TOGETHER",
      heading:
        "Digital marketing works reliably when foundational pages, capture forms and follow-up are ready before media spend scales.",
      blocks: [
        {
          title: "Fix the destination before buying attention",
          text: "Sending paid search or social traffic to a slow, ambiguous page wastes budget. We align core offer pages, verified product specs and clear enquiry routing before scaling campaigns.",
        },
        {
          title: "Assign one clear job to each channel",
          text: "Search captures existing buyer questions, paid social tests visual explanations and reach, owned content answers comparison questions and follow-up flows keep serious prospects moving.",
        },
        {
          title: "Keep budgets and fees transparent",
          text: "Ad spend goes directly from your account to platforms. Agency fees, video or shoot production, and third-party tools are separated in every proposal so trade-offs stay clear.",
        },
        {
          title: "Connect Chennai nuance to national delivery",
          text: "For Tamil Nadu audiences we account for local catchment and language review; for remote campaigns across Indian metros we coordinate digitally without inventing regional branch offices.",
        },
      ],
    },
    relatedGuides: [
      { label: "Our distribution methodology", href: "/distribution/" },
      { label: "Start with a focused pilot", href: "/pilot/" },
      { label: "Campaign coverage across India", href: "/locations/" },
    ],
    related: ["performance-marketing", "seo", "email-marketing", "analytics"],
  },
  {
    slug: "meta-ads",
    name: "Meta ads",
    category: "Strategy & reach",
    keyword: "Meta ads agency in Chennai",
    supporting: [
      "Facebook ads agency Chennai",
      "Instagram ads management",
      "Facebook lead ads Chennai",
    ],
    title: "Meta Ads Agency in Chennai | DaaS.media",
    description:
      "Plan Facebook and Instagram campaigns with DaaS.media. Explore Meta ads strategy, creative testing, lead capture and campaign reporting.",
    headline: "Make the next scroll a useful connection.",
    intro:
      "Reach people on Facebook and Instagram with campaigns that connect a relevant message to a clear next step. We plan the audience, creative, enquiry route and feedback loop together.",
    problem:
      "Cheap form fills are not enough if your sales team cannot use them. Our Meta ads work starts with the offer and the information a prospect needs before enquiring. We compare creative angles, review the resulting conversations and adjust the campaign using more than a cost-per-lead number.",
    deliverables: [
      [
        "Account and campaign setup",
        "Review business assets, access, objectives and a practical account structure.",
      ],
      [
        "Audience and creative tests",
        "Plan eligible targeting, exclusions and distinct message variations.",
      ],
      [
        "Lead capture",
        "Choose website forms, instant forms or messaging journeys to match the sales process.",
      ],
      [
        "Reporting and iteration",
        "Review spend, enquiry quality and creative performance with your team.",
      ],
    ],
    steps: [
      [
        "Define the enquiry",
        "Agree what makes a relevant response and where it should go.",
      ],
      [
        "Launch focused tests",
        "Test a manageable set of audiences and creative ideas.",
      ],
      [
        "Close the feedback loop",
        "Use lead reviews to improve messages and allocation.",
      ],
    ],
    useCase:
      "For a builder, a campaign can separate a project walkthrough from a location-led introduction. The enquiry form can ask about a buyer’s budget range and purchase timeline, with a consented handoff to the sales team.",
    fit: "For businesses with a clear offer, useful creative assets and someone ready to respond to enquiries.",
    faqs: [
      [
        "Do you create the ad designs and videos?",
        "Creative planning and adaptation can be included. New shoots, extensive editing and production are scoped separately so you can see what the campaign needs.",
      ],
      [
        "Is the advertising budget included?",
        "Media spend and agency fees are separate unless the proposal explicitly says otherwise. Your proposal explains the planned spend and responsibilities.",
      ],
      [
        "Can you guarantee a cost per lead?",
        "No. Auction conditions, offer, location, creative, qualification and follow-up all affect results. We agree a test plan and evaluate the evidence.",
      ],
    ],
    deepDive: {
      label: "META ADS EXECUTION",
      heading:
        "Social feeds reward clear context and authentic visuals over generic banner templates and frictionless spam traps.",
      blocks: [
        {
          title: "Instant forms vs landing pages",
          text: "We choose lead-capture mechanics based on sales capacity: higher-intent website destinations or structured Instant Forms with qualifying questions rather than accidental one-tap submissions.",
        },
        {
          title: "Distinct creative angles, not cosmetic variants",
          text: "Instead of changing button colours ten times, we test meaningful differences: project setting vs floor-plan utility, founder explanation vs product walkthrough, clarity vs urgency.",
        },
        {
          title: "Special Ad Categories & policy compliance",
          text: "Housing, credit and employment campaigns follow platform Special Ad Category constraints cleanly from setup, avoiding rejected ads and wasted learning cycles.",
        },
        {
          title: "Creative fatigue & down-funnel review",
          text: "Frequency, hold rate and sales team lead-qualification notes determine when creative needs refreshing—preventing budget burn on tired impressions.",
        },
      ],
    },
    relatedGuides: [
      {
        label: "See the property launch demonstration",
        href: "/sample-projects/property-launch/",
      },
      {
        label: "Download the property briefing template",
        href: "/resources/property-launch-brief/",
      },
      {
        label: "Download the campaign enquiry tracker",
        href: "/resources/enquiry-tracker/",
      },
    ],
    related: ["lead-generation", "video-editing", "social-media-design"],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    category: "Strategy & reach",
    keyword: "Google Ads agency in Chennai",
    supporting: [
      "PPC agency Chennai",
      "Google search ads management",
      "Google Ads for real estate Chennai",
    ],
    title: "Google Ads Agency in Chennai | DaaS.media",
    description:
      "Reach people actively searching for your services. DaaS.media plans Google Ads campaigns, landing page journeys and conversion measurement.",
    headline: "Be there when the search gets serious.",
    intro:
      "Connect your business with people searching for a relevant product, service or property. We build Google Ads campaigns around search intent, useful landing pages and measurable actions.",
    problem:
      "Broad keywords and a generic homepage can spend a budget without explaining why a prospect should choose you. We group search themes by intent, build a relevant message for each theme and review the actual search terms that bring people to your site.",
    deliverables: [
      [
        "Search and offer research",
        "Separate high-intent queries, comparison searches and irrelevant traffic.",
      ],
      [
        "Campaign structure",
        "Organise keywords, ads, locations, exclusions and budget allocation.",
      ],
      [
        "Landing page alignment",
        "Match the promise in the ad to the content and enquiry action on the page.",
      ],
      [
        "Conversion review",
        "Check measurement and review search terms, qualified enquiries and spend.",
      ],
    ],
    steps: [
      [
        "Map demand",
        "Understand what people search and what you can credibly offer.",
      ],
      [
        "Build the route",
        "Connect focused ads to a clear landing page and enquiry path.",
      ],
      [
        "Refine the account",
        "Review terms, creative and outcomes before expanding.",
      ],
    ],
    useCase:
      "For a property consultant, campaigns can distinguish a specific project search from a wider neighbourhood enquiry. Separate landing pages help explain inventory, project facts and the next step without mixing unrelated buyer intentions.",
    fit: "For businesses with active search demand and a website capable of explaining the offer clearly.",
    faqs: [
      [
        "Do you manage existing Google Ads accounts?",
        "We can review and restructure an existing account. We first check tracking, access, search terms and campaign history to preserve useful learning.",
      ],
      [
        "Will we own the advertising account?",
        "Client-owned accounts with appropriate agency access are the preferred setup. Ownership and access responsibilities are agreed during onboarding.",
      ],
      [
        "Do you build landing pages too?",
        "Yes, landing page design and development can be scoped alongside ads. Keeping both aligned helps visitors understand the offer before they enquire.",
      ],
    ],
    deepDive: {
      label: "SEARCH INTENT ARCHITECTURE",
      heading:
        "Profitable search campaigns protect budget with tight intent grouping, disciplined negative lists and dedicated landing pages.",
      blocks: [
        {
          title: "Search term hygiene from day one",
          text: "We review search-term reports consistently to exclude job-seeker queries, free-tool shoppers, competitor mismatches and wrong-city clicks before they drain spend.",
        },
        {
          title: "Geographic & corridor precision",
          text: "Location settings distinguish between people physically in a target area and people showing casual interest elsewhere—essential for Chennai corridors, local services and B2B catchments.",
        },
        {
          title: "Message match & Quality Score focus",
          text: "Every ad group connects to a dedicated page answering the specific configuration, capability or service query so prospects do not bounce hunting through a generic homepage.",
        },
        {
          title: "Client-owned billing & data integrity",
          text: "Your billing profile, historical search data and negative lists stay in a Google Ads account owned directly by your business with transparent admin access.",
        },
      ],
    },
    relatedGuides: [
      {
        label: "Real estate search & distribution",
        href: "/real-estate-marketing/",
      },
      {
        label: "B2B services marketing scope",
        href: "/industries/b2b/",
      },
      {
        label: "Campaign enquiry tracker template",
        href: "/resources/enquiry-tracker/",
      },
    ],
    related: ["performance-marketing", "web-design-development", "analytics"],
  },
  {
    slug: "seo",
    name: "SEO & organic growth",
    category: "Strategy & reach",
    keyword: "SEO agency in Chennai",
    supporting: [
      "SEO services Chennai",
      "local SEO agency Chennai",
      "real estate SEO",
    ],
    title: "SEO Agency in Chennai | DaaS.media",
    description:
      "Help customers discover your business through technical SEO, useful content, local search and clear measurement. Explore DaaS.media’s SEO services.",
    headline: "Make your expertise easier to discover.",
    intro:
      "Build an organic presence around the questions your customers actually ask. We connect technical foundations, search-focused pages and useful content that helps people make a decision.",
    problem:
      "Publishing many similar pages does not make a website more useful. We identify the intent each page should serve, fix obstacles to discovery and create content with a clear purpose. Local pages are added only when we have distinct information and a genuine service context.",
    deliverables: [
      [
        "Technical audit",
        "Review crawling, indexation, templates, internal links, performance and metadata.",
      ],
      [
        "Search intent map",
        "Match important topics to pages and identify overlap or missing answers.",
      ],
      [
        "Content improvement",
        "Create or revise service pages, guides and supporting information with your expertise.",
      ],
      [
        "Organic reporting",
        "Track relevant queries, landing page activity and enquiries where measurement is available.",
      ],
    ],
    steps: [
      [
        "Find the gaps",
        "Review search visibility, technical issues and customer questions.",
      ],
      [
        "Fix and publish",
        "Prioritise improvements and substantive content over page volume.",
      ],
      [
        "Learn over time",
        "Review discovery and engagement, then refine the next priorities.",
      ],
    ],
    useCase:
      "A real estate business can build a useful project or locality page from verified project details, original photography and buyer questions. Copying the same text across dozens of place names creates little value for someone comparing options.",
    fit: "For businesses willing to invest in helpful content, accurate information and ongoing site improvement.",
    faqs: [
      [
        "Can you guarantee first-page rankings?",
        "No. Search visibility depends on competition, relevance, site quality and factors outside any agency’s control. We agree deliverables and track progress without ranking guarantees.",
      ],
      [
        "How is local SEO different?",
        "Local SEO focuses on discovery in a relevant service area. It can include your eligible Business Profile, consistent business information and genuinely useful local content.",
      ],
      [
        "Will you create a page for every city?",
        "Only where the business serves that market and can provide distinct, useful information. We avoid mass-produced location pages.",
      ],
    ],
    deepDive: {
      label: "TECHNICAL & EDITORIAL SEO",
      heading:
        "Durable search visibility comes from clean crawl architecture, fast server-rendered content and pages written around real buyer questions.",
      blocks: [
        {
          title: "Crawlability, canonicals & index hygiene",
          text: "We eliminate duplicate www/non-www hosts, trailing-slash redirect chains, thin utility pages in sitemaps, orphan URLs and client-side rendering traps that hide copy from crawlers.",
        },
        {
          title: "Commercial service & locality depth",
          text: "Rather than generating dozens of identical suburb doorway pages, we build substantive pages anchored in verified project specs, buyer comparison questions and real service proof.",
        },
        {
          title: "Truthful structured data & internal graphs",
          text: "Schema markup (`Organization`, `Service`, `BreadcrumbList`, `TechArticle`) strictly mirrors visible on-page facts—strengthening topic clusters through descriptive internal links.",
        },
        {
          title: "Enquiry attribution over vanity traffic",
          text: "Search Console query impressions, landing-page engagement and qualified enquiry counts are reviewed together so SEO efforts map to actual pipeline conversations.",
        },
      ],
    },
    relatedGuides: [
      {
        label: "Manufacturing & industrial SEO scope",
        href: "/industries/manufacturing/",
      },
      {
        label: "Restaurant discovery checklist",
        href: "/resources/restaurant-discovery-checklist/",
      },
      { label: "Start a focused SEO pilot", href: "/pilot/" },
    ],
    related: ["google-business-profile", "web-design-development", "analytics"],
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    category: "Strategy & reach",
    keyword: "Google Business Profile optimization Chennai",
    supporting: [
      "Google Maps SEO Chennai",
      "local business listing optimization",
    ],
    title: "Google Business Profile Services Chennai | DaaS.media",
    description:
      "Make your business information easier to find on Google Search and Maps. Explore profile optimisation, local content and review processes.",
    headline: "Help nearby customers find the right details.",
    intro:
      "Your Google Business Profile should make it easy to understand your business and take the next step. We work on accurate information, useful imagery, service details and a practical review process.",
    problem:
      "An outdated phone number, unclear category or incorrect opening hours creates friction before a conversation starts. We review the profile against the real business and help keep it useful. We do not create invented offices, misleading listings or paid reviews.",
    deliverables: [
      [
        "Profile audit",
        "Review access, business eligibility, categories and information consistency.",
      ],
      [
        "Information cleanup",
        "Update approved contact details, hours, services, descriptions and relevant links.",
      ],
      [
        "Local content",
        "Plan genuine business photos, updates and answers to recurring questions.",
      ],
      [
        "Review workflow",
        "Build a process for requesting honest feedback and responding appropriately.",
      ],
    ],
    steps: [
      [
        "Verify the business",
        "Confirm the real location or service area and ownership access.",
      ],
      [
        "Improve the profile",
        "Organise accurate information and useful visual content.",
      ],
      [
        "Maintain consistency",
        "Keep changes, reviews and customer questions under review.",
      ],
    ],
    useCase:
      "For an eligible property consultancy, clear office information and genuine team photographs can help prospective buyers identify the business they are contacting. A project location and an agency office should not be presented as interchangeable.",
    fit: "For eligible businesses with verified ownership access and accurate location or service-area information.",
    faqs: [
      [
        "Can you guarantee a Google Maps position?",
        "No. Local visibility depends on multiple factors, including the searcher’s context. Our work improves accuracy, usefulness and the profile management process.",
      ],
      [
        "Can we list virtual offices in several cities?",
        "We do not create listings for locations that do not meet Google’s eligibility requirements. Coverage claims must reflect the real business.",
      ],
      [
        "Do you provide customer reviews?",
        "No. We help you ask real customers for honest feedback and respond to it. Reviews are never fabricated or purchased.",
      ],
    ],
    deepDive: {
      label: "ELIGIBILITY & LOCAL TRUST",
      heading:
        "Google Business Profile visibility depends on guideline compliance, accurate primary categories and genuine customer trust signals.",
      blocks: [
        {
          title: "Eligibility before optimisation",
          text: "We confirm whether your operation qualifies as a staffed storefront/office or a Service-Area Business under Google’s guidelines—avoiding risky virtual-office suspensions.",
        },
        {
          title: "Clean naming, categories & services",
          text: "We match your legal business name without keyword stuffing, choose accurate primary and secondary categories, and populate real service descriptions and booking/contact URLs.",
        },
        {
          title: "Review ethics & response cadence",
          text: "We set up compliant, post-service workflows inviting genuine customers to leave honest feedback, alongside constructive response templates for both praise and complaints.",
        },
        {
          title: "Tagged links & local destination alignment",
          text: "Profile website and appointment links point to relevant local landing pages with clean campaign parameters so local discovery calls and form enquiries stay measurable.",
        },
      ],
    },
    relatedGuides: [
      {
        label: "Restaurant discovery checklist",
        href: "/resources/restaurant-discovery-checklist/",
      },
      {
        label: "See the restaurant demonstration",
        href: "/sample-projects/restaurant-discovery/",
      },
      { label: "Restaurants & cafés marketing", href: "/industries/restaurants/" },
    ],
    related: ["seo", "social-media-design", "video-production"],
  },
  {
    slug: "whatsapp-marketing",
    name: "WhatsApp marketing",
    category: "Web & systems",
    keyword: "WhatsApp marketing agency in Chennai",
    supporting: [
      "WhatsApp lead follow-up",
      "WhatsApp campaigns for real estate",
      "WhatsApp automation Chennai",
    ],
    title: "WhatsApp Marketing in Chennai | DaaS.media",
    description:
      "Turn opted-in enquiries into useful conversations with WhatsApp campaign planning, lead follow-up flows and reporting from DaaS.media.",
    headline: "Keep the conversation moving, with permission.",
    intro:
      "Help interested prospects get the information they asked for. We plan consent-based WhatsApp journeys that connect enquiries, useful updates and a clear human handoff.",
    problem:
      "A list of phone numbers is not a relationship. We start with how people opt in, what they expect to receive and who will respond. Messages should answer a question or move an agreed conversation forward, with a straightforward way to stop receiving them.",
    deliverables: [
      [
        "Journey and consent design",
        "Map opt-in sources, expected messages and opt-out handling.",
      ],
      [
        "Message planning",
        "Create concise content for acknowledgements, information requests and follow-up.",
      ],
      [
        "Workflow setup",
        "Scope a Business Platform provider, templates and routing where appropriate.",
      ],
      [
        "Handoff and reporting",
        "Assign ownership and review delivery, replies and response gaps.",
      ],
    ],
    steps: [
      [
        "Map the conversation",
        "Identify the moments when a message is helpful and expected.",
      ],
      [
        "Prepare the flow",
        "Agree copy, approval steps, timing and escalation.",
      ],
      [
        "Support the team",
        "Test routing and review real conversation feedback.",
      ],
    ],
    useCase:
      "After a buyer requests a brochure, an approved flow can acknowledge the enquiry, share requested project details and offer a site-visit conversation. Staff remain responsible for availability, pricing and personal advice.",
    fit: "For teams with legitimate enquiry sources and a defined owner for follow-up conversations.",
    faqs: [
      [
        "Do you send bulk messages to purchased databases?",
        "No. We plan around permission-based contact and the rules of the chosen messaging platform.",
      ],
      [
        "Are WhatsApp or provider charges included?",
        "Platform, provider and messaging charges are identified separately in the proposal. Availability and approval requirements are checked before launch.",
      ],
      [
        "Can the flow connect to our CRM?",
        "Integration can be scoped after reviewing your CRM, permissions and lead-handling process. We test field mapping and ownership before live routing.",
      ],
    ],
    relatedGuides: [
      {
        label: "Property launch briefing template",
        href: "/resources/property-launch-brief/",
      },
      {
        label: "Download the enquiry tracker CSV",
        href: "/resources/enquiry-tracker/",
      },
    ],
    related: ["lead-generation", "email-marketing", "analytics"],
  },
  {
    slug: "video-production",
    name: "Video production & shoots",
    category: "Content & identity",
    keyword: "video production agency in Chennai",
    supporting: [
      "real estate video shoot Chennai",
      "property walkthrough video Chennai",
      "reels production Chennai",
    ],
    title: "Video Production & Shoots Chennai | DaaS.media",
    description:
      "Create campaign videos, reels and property content with DaaS.media. Explore shoots planned for digital distribution and business goals.",
    headline: "Shoot with the final audience in mind.",
    intro:
      "A useful video begins before the camera turns on. We plan shoots around the buyer’s questions, the campaign idea and the formats needed for distribution.",
    problem:
      "A long film is difficult to reuse if the shoot never captured the right details. We build a shot list for the intended channels, so the main story, short edits and supporting footage can work together. Permissions, access, contributors and production needs are agreed in advance.",
    deliverables: [
      [
        "Creative and shoot planning",
        "Develop the concept, message, script outline and practical shot list.",
      ],
      [
        "Production coordination",
        "Scope locations, crew, schedule and the equipment the brief needs.",
      ],
      [
        "Property and brand footage",
        "Capture walkthroughs, demonstrations, interviews or campaign scenes.",
      ],
      [
        "Distribution handoff",
        "Organise footage and agreed edits for the intended placements.",
      ],
    ],
    steps: [
      ["Define the story", "Choose the question the video should answer."],
      [
        "Plan and capture",
        "Agree access and shoot the assets needed for the full campaign.",
      ],
      [
        "Prepare for channels",
        "Select edits and versions for each destination.",
      ],
    ],
    useCase:
      "For a residential project, a shoot can explain the route through a home, show the actual condition of shared spaces and capture a spokesperson answering common buyer questions. Unfinished and proposed features should be clearly identified.",
    fit: "For brands, builders and consultants that need original footage rather than a stream of unrelated stock clips.",
    faqs: [
      [
        "Can you shoot outside Chennai?",
        "Location, crew availability, access and travel costs are confirmed for each brief. A listed target market does not by itself confirm an on-ground production team.",
      ],
      [
        "Are drone shots included?",
        "Drone footage is separately scoped and depends on permissions, location suitability and an appropriate operator.",
      ],
      [
        "How many videos will we receive?",
        "The proposal specifies shoot days, primary edits, shorter versions, aspect ratios and revision rounds.",
      ],
    ],
    related: ["video-editing", "meta-ads", "social-media-content"],
  },
  {
    slug: "video-editing",
    name: "Video editing",
    category: "Content & identity",
    keyword: "video editing services in Chennai",
    supporting: [
      "reels editing Chennai",
      "social media video editing",
      "real estate video editing",
    ],
    title: "Video Editing Services Chennai | DaaS.media",
    description:
      "Turn footage into reels, ads and property videos built for your audience’s channels. Explore DaaS.media’s video editing and creative adaptation services.",
    headline: "Give good footage a clear direction.",
    intro:
      "Turn raw footage into a story people can follow. Our video editing service shapes the hook, pacing, message and next step for the channel where the video will appear.",
    problem:
      "The same edit rarely works equally well everywhere. A property walkthrough needs orientation; a short social ad needs a focused reason to watch. We review your footage and plan versions around those different jobs, preserving the facts while making the message easier to understand.",
    deliverables: [
      [
        "Footage review",
        "Assess usable material, gaps, quality and permissions before agreeing outputs.",
      ],
      [
        "Story and pacing",
        "Build the sequence, select key moments and refine the opening.",
      ],
      [
        "Finishing",
        "Scope captions, titles, basic motion, audio treatment and colour correction.",
      ],
      [
        "Format adaptation",
        "Create approved aspect ratios, durations, covers and channel exports.",
      ],
    ],
    steps: [
      [
        "Agree the edit brief",
        "Define audience, references, key facts and deliverables.",
      ],
      [
        "Shape the first cut",
        "Build the narrative and review it against the brief.",
      ],
      [
        "Finish and version",
        "Apply agreed revisions and export for distribution.",
      ],
    ],
    useCase:
      "One property shoot can become a full walkthrough, a location-focused clip and a short feature-led ad. Each version has its own purpose instead of simply being the same timeline cropped three ways.",
    fit: "For teams with usable footage who need consistent, purposeful edits and a manageable review process.",
    faqs: [
      [
        "Can you work with phone-shot footage?",
        "Yes, subject to a quality review. Stable footage, clean audio and enough coverage make the edit more useful. We flag limitations before agreeing the scope.",
      ],
      [
        "Do you add subtitles in Indian languages?",
        "Language versions can be scoped when approved scripts and reliable language review are available. We agree responsibility for translation and accuracy.",
      ],
      [
        "Are music licences and source files included?",
        "Licensing, project files and editable assets are specified in the proposal. Usage rights should match the intended channels.",
      ],
    ],
    related: ["video-production", "meta-ads", "social-media-design"],
  },
  {
    slug: "social-media-design",
    name: "Social media & poster design",
    category: "Content & identity",
    keyword: "social media design agency in Chennai",
    supporting: [
      "social media posters Chennai",
      "ad creative design Chennai",
      "real estate poster design",
    ],
    title: "Social Media & Poster Design Chennai | DaaS.media",
    description:
      "Get social posts, campaign creatives and posters designed around your message, audience and distribution channels with DaaS.media.",
    headline: "A clearer message. A stronger first impression.",
    intro:
      "Make every post and poster part of the same brand story. We design campaign visuals that help people see the offer, understand the details and recognise your business.",
    problem:
      "When every creative starts from scratch, consistency suffers and approvals become slow. We establish a visual direction and information hierarchy, then develop a family of assets that can adapt across channels without losing the message.",
    deliverables: [
      [
        "Creative direction",
        "Agree typography, colour, imagery and references for the campaign.",
      ],
      [
        "Social assets",
        "Design posts, carousels, story formats and covers with a defined purpose.",
      ],
      [
        "Ad and poster adaptations",
        "Prepare approved sizes for paid placements and physical applications.",
      ],
      [
        "Template handoff",
        "Scope reusable templates and clear rules for future updates.",
      ],
    ],
    steps: [
      [
        "Clarify the message",
        "Identify the audience, main point and supporting facts.",
      ],
      [
        "Design the system",
        "Develop a direction that can work across a campaign.",
      ],
      [
        "Adapt and deliver",
        "Prepare versions and organise files for publishing or print.",
      ],
    ],
    useCase:
      "A property campaign may need a launch announcement, floor-plan explainer, location overview and event poster. Each should make room for verified project information and the disclosures supplied by the client.",
    fit: "For brands that need consistent, readable campaign assets and a repeatable approach to design.",
    faqs: [
      [
        "Is copywriting included?",
        "Headline and supporting copy can be included in the scope. The client approves product facts, project details and any required disclosures.",
      ],
      [
        "Do you handle printing?",
        "Print-ready artwork can be provided. Print production, materials, quantities and vendor coordination are separately scoped.",
      ],
      [
        "Can we keep using our current brand identity?",
        "Yes. We can work within your existing guidelines or identify the missing pieces needed for consistent campaign work.",
      ],
    ],
    related: ["branding", "social-media-content", "physical-distribution"],
  },
  {
    slug: "performance-marketing",
    name: "Performance marketing",
    category: "Strategy & reach",
    keyword: "performance marketing agency in Chennai",
    supporting: [
      "paid marketing agency Chennai",
      "conversion campaigns Chennai",
      "performance marketing company Chennai",
    ],
    title: "Performance Marketing Agency Chennai | DaaS.media",
    description:
      "Connect paid campaigns, landing pages and measurement around a clear business objective. Explore DaaS.media’s performance marketing service.",
    headline: "Connect the spend to the next business decision.",
    intro:
      "Build paid campaigns around an agreed outcome and a measurement plan. We bring channel strategy, creative tests, landing pages and sales feedback into one review process.",
    problem:
      "A platform dashboard can show activity without explaining whether the business is benefiting. We define the conversion journey before scaling spend, distinguish useful enquiries from low-value responses and review channel evidence alongside what happens after the lead arrives.",
    deliverables: [
      [
        "Objective and measurement plan",
        "Agree conversion definitions, reporting boundaries and available sales feedback.",
      ],
      [
        "Media allocation",
        "Choose channels and staged tests based on the offer and demand.",
      ],
      [
        "Creative and landing page testing",
        "Prioritise specific hypotheses instead of changing everything at once.",
      ],
      [
        "Performance reviews",
        "Explain findings, limitations and the recommended next actions.",
      ],
    ],
    steps: [
      [
        "Define success",
        "Agree the outcome and the events that can indicate progress.",
      ],
      [
        "Test the system",
        "Launch focused campaigns with aligned creative and capture.",
      ],
      [
        "Allocate with evidence",
        "Refine budget decisions using both campaign and sales feedback.",
      ],
    ],
    useCase:
      "For a developer, reporting can distinguish an initial enquiry, a qualified conversation and a booked site visit. These stages reveal where the campaign or sales handoff needs attention without presenting every form fill as a sale.",
    fit: "For teams with a defined offer, test budget and a willingness to share feedback on enquiry outcomes.",
    faqs: [
      [
        "How is this different from Meta or Google Ads management?",
        "Channel management focuses on a platform. Performance marketing coordinates the offer, multiple channels, landing pages and downstream measurement around a business objective.",
      ],
      [
        "Do you promise a return on ad spend?",
        "No. We define a test plan and reporting approach, but sales outcomes depend on the offer, market, customer experience and follow-up as well as advertising.",
      ],
      [
        "Can you manage channels beyond Google and Meta?",
        "Additional channels can be considered where the audience, platform availability and account eligibility support the brief.",
      ],
    ],
    deepDive: {
      label: "PERFORMANCE SYSTEM",
      heading:
        "Disciplined paid acquisition isolates what changed, separates media noise from sales readiness and reports limitations candidly.",
      blocks: [
        {
          title: "Test budgets before scale thresholds",
          text: "We begin with structured tests around clear offer hypotheses, avoiding premature scaling before landing-page conversion paths and enquiry quality are proven.",
        },
        {
          title: "One change at a time per test cell",
          text: "Changing creative, audience and landing copy simultaneously hides what caused movement. We isolate variables so findings remain reusable across quarters.",
        },
        {
          title: "Pipeline stages over platform-claimed ROAS",
          text: "Self-reported platform conversions often double-count or over-attribute. We pair ad platform metrics with qualified-lead and booked-discussion tallies from your team.",
        },
        {
          title: "High-ticket attribution realism",
          text: "For categories like real estate and B2B services where buying takes weeks and crosses devices, we evaluate blended assist patterns alongside last-click conversions.",
        },
      ],
    },
    relatedGuides: [
      {
        label: "Food & beverage launch marketing",
        href: "/industries/food-beverage/",
      },
      {
        label: "Download the enquiry tracker CSV",
        href: "/resources/enquiry-tracker/",
      },
      { label: "Start with a focused pilot", href: "/pilot/" },
    ],
    related: ["meta-ads", "google-ads", "analytics", "lead-generation"],
  },
  {
    slug: "lead-generation",
    name: "Lead generation",
    category: "Strategy & reach",
    keyword: "lead generation agency in Chennai",
    supporting: [
      "B2B lead generation Chennai",
      "property buyer leads Chennai",
      "real estate lead generation agency",
    ],
    title: "Lead Generation Agency in Chennai | DaaS.media",
    description:
      "Build lead generation campaigns with clear targeting, landing pages, enquiry capture and follow-up. Discuss your customer acquisition goals.",
    headline: "Build a path to relevant conversations.",
    intro:
      "Generate enquiries through a clear offer, a useful destination and a reliable handoff. DaaS.media builds lead generation campaigns around who you need to reach and what your team can act on.",
    problem:
      "A growing spreadsheet is not useful if the entries are unrelated, duplicated or never followed up. We agree qualification criteria, design the capture journey and map the lead’s route to the right person. The aim is a process you can improve, rather than a disconnected batch of contacts.",
    deliverables: [
      [
        "Audience and offer definition",
        "Clarify the buyer, their likely questions and the value of enquiring.",
      ],
      [
        "Campaign and landing page plan",
        "Connect distribution to a focused page, form or messaging destination.",
      ],
      [
        "Qualification and routing",
        "Choose proportionate fields, consent wording and lead ownership.",
      ],
      [
        "Quality review",
        "Review source, relevance, duplicates and response outcomes with your team.",
      ],
    ],
    steps: [
      [
        "Define a useful lead",
        "Agree the information needed and the qualification process.",
      ],
      [
        "Build the enquiry route",
        "Connect campaign messages, capture and follow-up.",
      ],
      [
        "Review lead quality",
        "Use feedback to improve targeting, questions and the offer.",
      ],
    ],
    useCase:
      "A property consultant can invite buyers to discuss a specific requirement and ask about preferred location, budget band and timeline. A clear handoff lets the team respond with relevant inventory instead of a generic broadcast.",
    fit: "For businesses with a genuine offer and the capacity to respond to new enquiries promptly.",
    faqs: [
      [
        "Do you sell property buyer databases?",
        "No. This service builds campaigns and enquiry journeys for your business. We do not present purchased contact lists as qualified leads.",
      ],
      [
        "Can you guarantee a number of site visits?",
        "No. Site visits depend on project fit, buyer interest, availability and the sales process. We can design and measure a journey that supports them.",
      ],
      [
        "Can you help with B2B enquiries?",
        "Yes. We can plan around a specific business audience, offer and sales process, with suitable channels and qualification criteria.",
      ],
    ],
    deepDive: {
      label: "ENQUIRY QUALITY ENGINEERING",
      heading:
        "More form submissions do not help if sales teams spend hours chasing duplicates, wrong-budget clicks or unverified numbers.",
      blocks: [
        {
          title: "Proportionate friction filters bad leads",
          text: "Asking one or two purposeful qualification questions—such as target locality, configuration or project timeline—improves sales relevance without overwhelming real buyers.",
        },
        {
          title: "Immediate response protects lead shelf-life",
          text: "Enquiries cool off quickly. We pair capture forms with clear acknowledgement pages and human or consented messaging handoffs so prospects know who is replying and when.",
        },
        {
          title: "Deduplication & clean taxonomy",
          text: "Test submissions, spam and duplicate phone numbers are flagged separately from genuine prospects so cost-per-qualified-discussion metrics stay honest.",
        },
        {
          title: "Explicit consent & transparent handling",
          text: "Forms explain how enquiry details are used, avoiding dark-pattern checkboxes or reselling lists—supporting durable trust with high-consideration Indian buyers.",
        },
      ],
    },
    relatedGuides: [
      { label: "B2B services marketing scope", href: "/industries/b2b/" },
      {
        label: "Manufacturing & RFQ acquisition",
        href: "/industries/manufacturing/",
      },
      {
        label: "Download campaign enquiry tracker",
        href: "/resources/enquiry-tracker/",
      },
    ],
    related: ["meta-ads", "google-ads", "whatsapp-marketing"],
  },
  ...additionalServices,
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);
