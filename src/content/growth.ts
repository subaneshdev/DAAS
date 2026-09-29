export type GrowthPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  eyebrow: string;
  headline: string;
  intro: string;
  sections: { title: string; text: string; points?: string[] }[];
  questions: [string, string][];
  links: { label: string; href: string }[];
  download?: { href: string; label: string };
};
export const industries: GrowthPage[] = [
  {
    slug: "restaurants",
    name: "Restaurants & cafés",
    title: "Restaurant Marketing Agency Chennai | DaaS.media",
    description:
      "Plan restaurant discovery, menu content, local search and repeat-visit communication with DaaS.media. Explore a focused restaurant marketing brief.",
    eyebrow: "RESTAURANTS / CAFÉS / CLOUD KITCHENS",
    headline: "Restaurant marketing. Make the next meal easier to choose.",
    intro:
      "Restaurant marketing connects local discovery with a clear reason to visit or order. DaaS.media scopes search, menu content, food storytelling and customer communication around your actual location, operating hours and service model.",
    sections: [
      {
        title: "Start with the occasion, not the platform",
        text: "A weekday lunch, a family celebration and a delivery order are different decisions. We begin with your menu, catchment, capacity and the occasions you can reliably serve. A café may need better neighbourhood discovery; a cloud kitchen may need clearer product and ordering information. We agree one priority before producing content.",
        points: [
          "Identify the dining occasion and customer catchment.",
          "Check that opening hours, menu and ordering destinations agree.",
          "Choose a useful next action: reserve, view the menu, order or enquire.",
        ],
      },
      {
        title: "A practical restaurant discovery scope",
        text: "An initial engagement can cover a review of your website and eligible Google Business Profile, one menu or occasion page, a content brief and an enquiry path. Photography, filming, creator participation and local activations are separately scoped. We do not assume those activities can be delivered without a production budget.",
        points: [
          "Readable menus and useful location information.",
          "Original dish descriptions and a planned food-content shoot.",
          "An honest review-request process for actual customers.",
          "Permission-based follow-up for customers who choose to hear from you.",
        ],
      },
      {
        title: "Digital discovery, physical consistency",
        text: "The promise online should match the experience at the table. A printed menu, table card or takeaway insert can point to a useful menu or feedback page. Any printing, placement and restaurant permissions must be agreed first. We do not claim an existing network of food creators or guaranteed placements.",
      },
      {
        title: "Measure the actions you can verify",
        text: "Record reservations, attributable enquiries and order enquiries separately from profile views or website visits. Compare equivalent operating periods and note changes in opening hours, promotions and availability. A higher view count does not prove that marketing caused an increase in revenue.",
      },
      {
        title: "What we need from the restaurant",
        text: "Share the current menu, service hours, approved photography, ordering links and the person responsible for enquiries. Tell us whether you serve dine-in, delivery or both. For Chennai shoots or activations, we confirm travel, availability and production costs before committing.",
      },
    ],
    questions: [
      [
        "Can we begin without paying for ads?",
        "Yes. The first scope can focus on accurate information, useful pages, content and an enquiry journey. Production and implementation still require time and may have costs.",
      ],
      [
        "Do you manage delivery-platform operations?",
        "That is not part of this standard scope. Any platform-specific work must be discussed and agreed separately.",
      ],
      [
        "Do you have restaurant client results?",
        "We are building our portfolio. Our restaurant demonstration shows a proposed approach, not a completed client campaign or a performance claim.",
      ],
    ],
    links: [
      {
        label: "See the restaurant demonstration",
        href: "/sample-projects/restaurant-discovery/",
      },
      {
        label: "Use the restaurant discovery checklist",
        href: "/resources/restaurant-discovery-checklist/",
      },
      {
        label: "Explore local profile support",
        href: "/services/google-business-profile/",
      },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & engineering",
    title: "Manufacturing Marketing Chennai | DaaS.media",
    description:
      "Connect technical content, searchable capabilities and clearer RFQ journeys. Explore DaaS.media’s marketing approach for manufacturers in Chennai and India.",
    eyebrow: "MANUFACTURERS / ENGINEERING / INDUSTRIAL SUPPLIERS",
    headline: "Manufacturing marketing. Turn capability into enquiries.",
    intro:
      "Manufacturing marketing helps prospective buyers understand what you can make, whether your capabilities fit their requirement and how to request a quote. We scope technical content and distribution around those decisions.",
    sections: [
      {
        title: "Build around the buying requirement",
        text: "An engineer checking tolerances needs different information from a procurement manager evaluating a supplier. We map the product, process, application and buyer questions before choosing search topics. We keep technical claims subject to review by your engineering or commercial team.",
        points: [
          "Processes, materials and supported applications.",
          "Capacity, minimum quantities and lead times only when verified.",
          "Certifications with accurate scope and current supporting evidence.",
          "A clear route for drawings, specifications and commercial questions.",
        ],
      },
      {
        title: "Make the catalogue useful on the web",
        text: "A PDF brochure can support a conversation, but each important capability also needs an accessible explanation. We can structure capability pages, product descriptions, application notes and process videos. Search topics should reflect what buyers actually need rather than a long list of unrelated industrial keywords.",
      },
      {
        title: "Design the request-for-quote journey",
        text: "An RFQ page should explain which information is needed, what happens next and who will respond. Collect only the initial details required to qualify the request. Confidential drawings need an agreed secure transfer process; the first enquiry should not ask prospects to upload sensitive material casually.",
        points: [
          "Product or process required and intended application.",
          "Indicative quantity and target delivery region.",
          "A contact person and a realistic response workflow.",
          "A named owner for qualification and follow-up.",
        ],
      },
      {
        title: "Connect publishing with sales activity",
        text: "Technical explainers can support organic search, company posts and direct sharing by the sales team. Exhibition materials can link to the matching capability page. Participation in trade publications, events or associations requires actual access and approval; we do not imply that DaaS already owns those relationships.",
      },
      {
        title: "Define a useful result before launch",
        text: "Count qualified RFQs, relevant buyer conversations and progression to quotations. Separate unsuitable enquiries from opportunities. We would document the baseline, content changes and sales feedback, without attributing every order to a page view. Remote delivery is available across India; factory shoots depend on site permissions and the brief.",
      },
    ],
    questions: [
      [
        "Do you already have manufacturing case studies?",
        "No manufacturing client outcomes are claimed here. This page describes our proposed scope and the inputs needed to deliver it.",
      ],
      [
        "Can you guarantee export orders?",
        "No. Marketing can support discovery and enquiry quality; orders also depend on product fit, pricing, capacity and the sales process.",
      ],
      [
        "Will you write technical claims without our input?",
        "No. Your team must approve specifications, certifications, applications and production claims before publication.",
      ],
    ],
    links: [
      { label: "Explore SEO services", href: "/services/seo/" },
      { label: "Plan a focused pilot", href: "/pilot/" },
      { label: "Use the enquiry tracker", href: "/resources/enquiry-tracker/" },
    ],
  },
  {
    slug: "b2b",
    name: "B2B services",
    title: "B2B Marketing Agency Chennai | DaaS.media",
    description:
      "Plan B2B content, service pages and lead qualification with DaaS.media. Connect business expertise to useful enquiries and sales conversations.",
    eyebrow: "B2B SERVICES / CONSULTANCIES / BUSINESS SOLUTIONS",
    headline: "B2B marketing. Make the next step clear.",
    intro:
      "B2B marketing connects your expertise with the people evaluating a business purchase. Our proposed approach brings service positioning, useful content and enquiry qualification into one manageable scope.",
    sections: [
      {
        title: "Identify the decision and the people involved",
        text: "Begin with the problem your service solves, the customer it fits and the reasons someone might delay a decision. A buyer may need to explain the purchase to a finance lead, technical reviewer or business owner. The page should help that conversation without promising results your team cannot substantiate.",
      },
      {
        title: "Build a useful service explanation",
        text: "Make the scope, inputs, process and exclusions visible. Explain when a prospect should choose a small engagement and when a larger programme makes sense. Where pricing depends on requirements, explain those variables instead of displaying a fabricated starting price.",
        points: [
          "A specific customer problem and service fit.",
          "Deliverables and ownership on both sides.",
          "A sample output clearly labelled as illustrative.",
          "Questions that help the prospect assess suitability.",
        ],
      },
      {
        title: "Publish expertise you can stand behind",
        text: "An interview with your subject expert can become a practical article, a short video and several useful posts. Each format should answer a real question. If there are no customer results yet, publish methods, worked examples and transparent experiments rather than case-study-shaped fiction.",
      },
      {
        title: "Make the enquiry worth following up",
        text: "Ask for enough context to identify the problem, decision timeline and service interest. Agree what qualifies as a relevant enquiry and where it will be recorded. Follow-up messaging should help the prospect decide; it should not become an unrelated broadcast list.",
        points: [
          "Capture the stated need and how the buyer found you.",
          "Assign an owner and next action.",
          "Record a booked discussion separately from an initial message.",
          "Review lost opportunities for gaps in the offer or explanation.",
        ],
      },
      {
        title: "Start with a defined pilot",
        text: "We can begin with one service page, one supporting resource and a measurement plan. A pilot tests the clarity of the offer and the working relationship. It does not promise a fixed pipeline or short sales cycle. Remote campaigns are available across India, with local production agreed separately.",
      },
    ],
    questions: [
      [
        "Is this the same as buying a contact list?",
        "No. This scope centres on useful content, discoverability and enquiries from relevant prospects. Purchased lists are not part of the standard offer.",
      ],
      [
        "Do we need to publish every week?",
        "A realistic publishing schedule matters more than a volume target. Start with the questions closest to an actual buying decision.",
      ],
      [
        "Can you promise a number of qualified leads?",
        "No. We agree deliverables and measurement, then assess actual enquiries and their quality.",
      ],
    ],
    links: [
      { label: "Lead generation scope", href: "/services/lead-generation/" },
      { label: "A small pilot engagement", href: "/pilot/" },
      {
        label: "Enquiry tracking template",
        href: "/resources/enquiry-tracker/",
      },
    ],
  },
  {
    slug: "food-beverage",
    name: "Food & beverage brands",
    title: "Food & Beverage Marketing Services | DaaS.media",
    description:
      "Plan food-brand storytelling, product discovery and launch content with DaaS.media. Explore a practical approach for emerging food and beverage businesses.",
    eyebrow: "FOOD / BEVERAGES / EMERGING CONSUMER BRANDS",
    headline: "Food marketing. Give people a reason to try.",
    intro:
      "Food and beverage marketing connects product information, usage occasions and a clear place to buy or enquire. This scope focuses on packaged products and brand discovery; restaurant services have a separate page.",
    sections: [
      {
        title: "Explain the product before building the campaign",
        text: "Clarify what the product is, who it is intended for and how people use it. Work from approved product information, packaging and available stock. Ingredients, allergen information and any nutrition or health claims must come from verified business material and appropriate review, not from creative invention.",
      },
      {
        title: "Build content around actual use",
        text: "A serving suggestion, preparation demonstration or packaging walkthrough can answer a useful customer question. We plan which assets belong on a product page, which can become short videos and which help a retailer explain the product.",
        points: [
          "Approved product descriptions and clear pack photography.",
          "Usage or preparation content reviewed by the business.",
          "Availability and buying links that stay accurate.",
          "A launch message with a clear audience and occasion.",
        ],
      },
      {
        title: "Connect discovery to availability",
        text: "Someone who sees the product needs a reliable next step. The plan can route visitors to an existing store, a stockist enquiry or a business contact. We do not imply marketplace listings, quick-commerce access or retail placement are included. Those require separate arrangements with the relevant operators.",
      },
      {
        title: "Scope physical sampling honestly",
        text: "A sampling idea needs stock, handling arrangements, venue permission, staffing and an agreed cost. It is not a free extension of an organic content plan. We can scope the communication and follow-up around an agreed activation, subject to feasibility and the brief.",
      },
      {
        title: "Measure learning as well as interest",
        text: "Record product questions, relevant enquiries and attributable next actions. If you test messages, note the channel, dates and differences between the versions. Feedback from a small sample is useful learning, not proof of demand across an entire city. Client results are not claimed on this page.",
      },
    ],
    questions: [
      [
        "Do you distribute stock to shops?",
        "Stock distribution, warehousing and delivery are not included in this marketing scope.",
      ],
      [
        "Can a food brand begin without ads?",
        "Yes, with useful product content and existing owned channels. Organic reach is uncertain, and photography or sampling may still require a budget.",
      ],
      [
        "How is this different from FMCG marketing?",
        "This page focuses on food-specific product understanding and usage. Our FMCG page covers broader consumer-brand and retailer-facing communication.",
      ],
    ],
    links: [
      { label: "FMCG communication and activation", href: "/industries/fmcg/" },
      { label: "Restaurant marketing", href: "/industries/restaurants/" },
      { label: "Video production scope", href: "/services/video-production/" },
    ],
  },
  {
    slug: "fmcg",
    name: "FMCG & consumer brands",
    title: "FMCG Marketing & Brand Activation | DaaS.media",
    description:
      "Explore consumer-brand content, retailer-facing materials and scoped FMCG activations with DaaS.media. Plan clear messages and measurable enquiry journeys.",
    eyebrow: "FMCG / CONSUMER PRODUCTS / TRADE COMMUNICATION",
    headline: "FMCG marketing. Connect the consumer and trade story.",
    intro:
      "FMCG marketing often needs to explain a product to both consumers and business buyers. DaaS.media can scope those communication journeys separately, then connect them through consistent content and practical distribution planning.",
    sections: [
      {
        title: "Separate consumer and trade needs",
        text: "A household shopper may need a clear product benefit and where to buy. A retailer may need a range overview and a route to the commercial team. Putting both audiences into one generic campaign can leave neither with enough information.",
        points: [
          "Consumer pages explain the product and availability.",
          "Trade materials explain the range using approved facts.",
          "Separate calls to action route questions to the right team.",
          "Commercial terms are supplied and approved by your business.",
        ],
      },
      {
        title: "Create assets that survive handoff",
        text: "An agreed product story can inform web pages, short videos, sales sheets and point-of-sale artwork. Version control matters: pack sizes, product names and availability should agree across formats. We can build a reusable content structure rather than treating every post as a disconnected task.",
      },
      {
        title: "Plan activations around actual feasibility",
        text: "A retailer event, product demonstration or community activity needs an approved location, staff, materials and reporting method. Any production, sampling stock or placement costs are agreed separately. We do not claim a pre-existing retail network, guaranteed shelf space or access to distributors.",
      },
      {
        title: "Capture interest without confusing it with sales",
        text: "Trade enquiries should include the business type, market and product interest. Consumer questions need a different response path. Record the source and next action, then review which enquiries progressed. A QR scan, video view or leaflet handout is not a sale.",
      },
      {
        title: "What the first brief should establish",
        text: "Share the approved range, priority market, available materials and who handles commercial enquiries. Tell us whether the immediate need is consumer awareness, retailer communication or a specific activation. We can begin with one defined deliverable; wider rollout depends on evidence, capacity and budget.",
      },
    ],
    questions: [
      [
        "Are you an FMCG distributor?",
        "This is a marketing and communication service. We do not offer stock purchase, warehousing, logistics or guaranteed retail placement through this page.",
      ],
      [
        "Can you create a distributor enquiry campaign?",
        "We can discuss messaging and enquiry capture. We cannot guarantee distributor appointments or claim relationships we have not established.",
      ],
      [
        "Do you have FMCG campaign results to publish?",
        "No client performance claims are made here. We are building our portfolio through clearly scoped work.",
      ],
    ],
    links: [
      { label: "Food and beverage brands", href: "/industries/food-beverage/" },
      {
        label: "Physical distribution scope",
        href: "/services/physical-distribution/",
      },
      { label: "Brand identity services", href: "/services/branding/" },
    ],
  },
];
export const projects: GrowthPage[] = [
  {
    slug: "property-launch",
    name: "A property launch, connected",
    title: "Property Launch Demonstration Project | DaaS.media",
    description:
      "Explore a fictional property-launch distribution plan, sample content and enquiry journey. A DaaS.media demonstration, not client work or campaign results.",
    eyebrow: "DEMONSTRATION PROJECT — NOT CLIENT WORK",
    headline: "One property brief. A connected buyer journey.",
    intro:
      "This fictional residential-project exercise shows how we would connect project information, neighbourhood questions, content and follow-up. It has not run as a live campaign. No developer, property inventory, audience network or results are represented.",
    sections: [
      {
        title: "The fictional brief",
        text: "Assume a developer wants to explain a residential project to prospective buyers researching a move. Project name, location, pricing, availability and regulatory details are deliberately unspecified. Before any live publication, the developer would supply and approve these facts.",
      },
      {
        title: "Audience questions to investigate",
        text: "Start by interviewing the sales team and reviewing actual buyer questions. Separate people comparing neighbourhoods from those ready to arrange a visit. Do not infer demand from a corridor name alone.",
        points: [
          "What information do buyers need before considering a visit?",
          "Which project facts can be verified and published?",
          "What reasons cause enquiries to stop progressing?",
          "Who follows up, and how is a relevant enquiry recorded?",
        ],
      },
      {
        title: "Sample landing-page message",
        text: "“Understand the project before you plan a visit.” The supporting page would show approved project facts, current availability, original site imagery and a clear enquiry route. A placeholder such as [approved project location] stays in the internal brief until verified; it never becomes a fabricated public claim.",
      },
      {
        title: "Sample content sequence",
        text: "These are creative directions, not published advertisements.",
        points: [
          "A walkthrough outline: entrance, room layout and practical questions, filmed with permission.",
          "A neighbourhood explainer: map the buyer’s actual questions and cite current evidence.",
          "A project-information carousel: one verified fact per card, with a date where relevant.",
          "A sales handoff sheet: enquiry source, buyer question, owner and next agreed action.",
        ],
      },
      {
        title: "Digital and physical touchpoints",
        text: "The landing page would be the common destination for useful organic posts and approved site-visit material. Local media or creator participation would be researched and negotiated separately. A printed handout could use a labelled link or QR destination; printing and placement are not assumed to be free.",
      },
      {
        title: "Measurement plan, not results",
        text: "Before launch, record the baseline and agree what qualifies an enquiry. Track enquiry, qualified discussion, visit scheduled and visit completed as separate stages. No traffic, leads or sales figures are supplied because this is a demonstration.",
      },
    ],
    questions: [
      [
        "Was this a real developer campaign?",
        "No. It is a fictional planning exercise created to show our approach.",
      ],
      [
        "Can this become a pilot?",
        "Yes, after a real business supplies project facts, approves the scope and agrees ownership, costs and measurement.",
      ],
    ],
    links: [
      {
        label: "Download the property briefing template",
        href: "/resources/property-launch-brief/",
      },
      {
        label: "Real estate distribution service",
        href: "/real-estate-marketing/",
      },
      { label: "Discuss a pilot", href: "/pilot/" },
    ],
  },
  {
    slug: "restaurant-discovery",
    name: "A neighbourhood restaurant, discoverable",
    title: "Restaurant Discovery Demonstration | DaaS.media",
    description:
      "See a fictional restaurant discovery plan with sample content and an enquiry path. Clearly labelled demonstration work with no invented client results.",
    eyebrow: "DEMONSTRATION PROJECT — NOT CLIENT WORK",
    headline: "From a local search to a useful next step.",
    intro:
      "A fictional independent restaurant wants to make its menu and dining offer easier to understand. This exercise demonstrates the work we would propose. It is not a client engagement, a live restaurant listing or evidence of increased bookings.",
    sections: [
      {
        title: "The fictional brief",
        text: "Assume a restaurant serves dine-in customers and receives occasional group-booking questions. Its address, menu, hours and capacity are not invented here. The first task is to collect accurate information and choose whether the priority is menu discovery or group enquiries.",
      },
      {
        title: "Sample page structure",
        text: "The page starts with the dining occasion and a readable menu, then explains location, hours and the enquiry process. All details come from the restaurant before publication.",
        points: [
          "A short introduction describing the actual cuisine and service model.",
          "A mobile-readable menu with current prices supplied by the owner.",
          "Directions and accessibility details checked with the venue.",
          "A group-enquiry route asking for date, party size and contact details.",
        ],
      },
      {
        title: "Sample creative concepts",
        text: "“Planning a meal together? See the menu before you decide.” This is illustrative copy, not a claim about a real venue. A short video could show the approach to the restaurant, the dining space and one dish being prepared, provided each scene is approved and representative.",
      },
      {
        title: "A simple content and distribution plan",
        text: "Start with information customers can act on, then use the restaurant’s existing channels. Creator visits, filming and promotions need separate agreement.",
        points: [
          "Publish a current menu and verify all existing profile links.",
          "Create one original dish story using approved photography.",
          "Answer a genuine question about group dining or service hours.",
          "Use a table card or takeaway insert only with the owner’s permission.",
        ],
      },
      {
        title: "An honest review process",
        text: "Invite actual customers to share their experience without offering rewards or requesting only positive feedback. Respond usefully to questions and complaints. Do not create reviews, open a fictitious business listing or present this exercise as a restaurant endorsement.",
      },
      {
        title: "Measurement plan, not results",
        text: "Record attributable group enquiries and completed bookings separately from profile views. Note changes to menu, hours and offers during the period. This demonstration contains no measured uplift, customer testimonials or completed-campaign claims.",
      },
    ],
    questions: [
      [
        "Can I visit this restaurant?",
        "No. The restaurant is fictional and exists only as a demonstration brief.",
      ],
      [
        "Does the plan require paid ads?",
        "The initial scope can use the website and existing organic channels. Any production, printing or creator work may still have costs.",
      ],
    ],
    links: [
      {
        label: "Use the discovery checklist",
        href: "/resources/restaurant-discovery-checklist/",
      },
      { label: "Restaurant marketing scope", href: "/industries/restaurants/" },
      { label: "Discuss a pilot", href: "/pilot/" },
    ],
  },
];
export const resources: GrowthPage[] = [
  {
    slug: "property-launch-brief",
    name: "Property launch briefing template",
    title: "Property Launch Marketing Brief Template | DaaS.media",
    description:
      "Use a practical property-launch briefing template to organise project facts, buyer questions, content approvals and enquiry follow-up before a campaign.",
    eyebrow: "FREE RESOURCE / NO EMAIL REQUIRED",
    headline: "A clearer brief before the first creative.",
    intro:
      "Use this editable Markdown template to collect the facts and decisions a property campaign needs. It is a planning worksheet, not legal advice or a substitute for project approvals.",
    sections: [
      {
        title: "1. Establish the project facts",
        text: "Record the project name, approved location, current availability and the source of each public claim. Assign a person to approve price, imagery, project status and required disclosures. Leave unknowns marked for review rather than guessing.",
      },
      {
        title: "2. Describe the buyer decision",
        text: "List the questions buyers ask before making contact. Identify the audience you intend to reach and why the project might fit their requirement. Separate verified evidence from assumptions you want to test.",
      },
      {
        title: "3. Agree channels and costs",
        text: "Select a small set of channels with a clear role for each. Record who owns content, what requires production and whether media, printing or creator fees are involved. A no-ad-spend plan can still have delivery costs.",
      },
      {
        title: "4. Design the handoff",
        text: "Name the enquiry owner, required initial fields and next action. Define the difference between a new enquiry, a qualified discussion and a scheduled visit. Do not put personal buyer records in a publicly shared brief.",
      },
      {
        title: "5. Decide what to review",
        text: "Record the starting position, observation period and changes made. Review relevant enquiries and sales feedback alongside traffic. Use the same definitions throughout so a rise in low-quality enquiries is not mistaken for success.",
      },
    ],
    questions: [
      [
        "How do I edit the file?",
        "Open the Markdown file in a text editor or copy its sections into your document tool. Replace the bracketed prompts with approved information.",
      ],
      [
        "Do I need to submit my email?",
        "No. The template is available directly without a signup.",
      ],
    ],
    links: [
      {
        label: "See the property demonstration",
        href: "/sample-projects/property-launch/",
      },
      {
        label: "Explore real estate distribution",
        href: "/real-estate-marketing/",
      },
    ],
    download: {
      href: "/resources/property-launch-brief.md",
      label: "Download editable brief (.md)",
    },
  },
  {
    slug: "restaurant-discovery-checklist",
    name: "Restaurant discovery checklist",
    title: "Restaurant Online Discovery Checklist | DaaS.media",
    description:
      "Check menus, hours, location information, booking links and customer communication with this practical restaurant discovery checklist. Free download.",
    eyebrow: "FREE RESOURCE / NO EMAIL REQUIRED",
    headline: "Can a customer find the next step?",
    intro:
      "Work through this checklist on a phone using your restaurant’s real pages. It helps identify information gaps; it is not a ranking score or a promise of more bookings.",
    sections: [
      {
        title: "Check the basics customers act on",
        text: "Compare the restaurant name, hours, menu and contact details across the website and existing profiles. Test menu links and ordering destinations. Ask the owner to verify seasonal hours, accessibility information and the current service model.",
      },
      {
        title: "Review the mobile menu",
        text: "Can someone read dish names and prices without repeatedly zooming? Is the menu current? Confirm dietary and allergen information with the business rather than inferring it from dish names. Keep important information available as readable text where practical.",
      },
      {
        title: "Follow the booking journey",
        text: "Try the route from the homepage to a booking or group enquiry. Record broken links, confusing choices or missing information. Test with clearly labelled test details and avoid creating a real booking accidentally.",
      },
      {
        title: "Review original content and permissions",
        text: "Check whether images represent the current food and space. Confirm permission to use photography and identifiable customer images. Remove outdated offers and do not imply creator endorsements that were never agreed.",
      },
      {
        title: "Make an improvement list",
        text: "Prioritise incorrect information and broken actions before cosmetic changes. Assign an owner and date to each item. After changes, repeat the journey and document what improved; use actual booking and enquiry records to assess business outcomes.",
      },
    ],
    questions: [
      [
        "Should I create a Google Business Profile for a fictional restaurant?",
        "No. Only represent a genuine eligible business with owner authorisation.",
      ],
      [
        "Can this checklist prove SEO success?",
        "No. It identifies practical issues; search visibility and customer outcomes require separate measurement.",
      ],
    ],
    links: [
      {
        label: "See the restaurant demonstration",
        href: "/sample-projects/restaurant-discovery/",
      },
      { label: "Restaurant marketing scope", href: "/industries/restaurants/" },
    ],
    download: {
      href: "/resources/restaurant-discovery-checklist.md",
      label: "Download checklist (.md)",
    },
  },
  {
    slug: "enquiry-tracker",
    name: "Campaign enquiry tracker",
    title: "Free Campaign Enquiry Tracker Template | DaaS.media",
    description:
      "Download a simple CSV enquiry tracker. Separate organic search, referrals and social enquiries, record qualification and follow up with clear next actions.",
    eyebrow: "FREE RESOURCE / NO EMAIL REQUIRED",
    headline: "Track conversations, not just clicks.",
    intro:
      "This CSV template helps a small team record actual enquiries and their progress. It contains a header row only, with no fictional customers or inflated results. Open it in your preferred spreadsheet tool.",
    sections: [
      {
        title: "Choose consistent source labels",
        text: "Use Organic search, Organic social, Referral, Direct, Offline or Unknown. Record the source as reported by the prospect or supported by your own measurement. Do not force an attribution when it is unclear. A click on an email link is not proof that an enquiry arrived.",
      },
      {
        title: "Agree what qualified means",
        text: "Define the customer type, service need and delivery fit before classifying enquiries. Use New, Reviewing, Qualified, Not a fit, Discussion booked, Won or Closed as stages. Record the qualification reason so two people do not apply different rules.",
      },
      {
        title: "Assign an owner and next action",
        text: "The useful part of a tracker is the next step. Record who responds, what they need to do and when. Use a reference ID rather than storing sensitive customer details in a broadly shared spreadsheet.",
      },
      {
        title: "Review rates with the right denominator",
        text: "Calculate qualification rate as qualified enquiries divided by total genuine enquiries for a defined period. Count booked discussions and won work separately. Exclude tests and spam, document exclusions and avoid comparing a partial month with a full one.",
      },
      {
        title: "Keep access limited",
        text: "The template is a file on your device; downloading it does not submit information to DaaS.media. If you use it for real enquiries, agree access and retention with your team. Avoid entering confidential buyer records or sharing the sheet publicly.",
      },
    ],
    questions: [
      [
        "Does this connect to my CRM automatically?",
        "No. It is an editable CSV worksheet for manual tracking. CRM integration would be a separate scope.",
      ],
      [
        "Are there example leads inside?",
        "No. The file starts empty so demonstrations cannot be mistaken for real business results.",
      ],
    ],
    links: [
      { label: "B2B marketing approach", href: "/industries/b2b/" },
      { label: "Discuss a focused pilot", href: "/pilot/" },
    ],
    download: {
      href: "/resources/enquiry-tracker.csv",
      label: "Download enquiry tracker (.csv)",
    },
  },
];
export const growthPaths = [
  "/distribution/",
  "/industries/",
  "/sample-projects/",
  "/resources/",
  "/pilot/",
  ...industries.map((p) => `/industries/${p.slug}/`),
  ...projects.map((p) => `/sample-projects/${p.slug}/`),
  ...resources.map((p) => `/resources/${p.slug}/`),
];
