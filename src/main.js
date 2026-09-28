import "./style.css";

const email = import.meta.env.VITE_CONTACT_EMAIL || "contact@daas.media";
const arrow = '<span aria-hidden="true">↗</span>';
const star =
  '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M43 0h14v32L80 9l10 10-23 24h33v14H67l23 24-10 10-23-23v32H43V68L20 91 10 81l23-24H0V43h33L10 19 20 9l23 23z" fill="currentColor"/></svg>';

const services = [
  {
    n: "01",
    name: "Digital distribution",
    tag: "ON EVERY SCREEN",
    intro: "Turn attention into your next customer.",
    text: "Put your brand in the right feeds, searches and conversations. We connect content, creators and paid media into a distribution plan built around your audience.",
    items: [
      "Social & content distribution",
      "Paid media & performance",
      "Creator & community partnerships",
      "Search, email & remarketing",
    ],
  },
  {
    n: "02",
    name: "Physical distribution",
    tag: "IN THE REAL WORLD",
    intro: "Make your brand impossible to walk past.",
    text: "Bring your brand into everyday life. From a product in someone’s hand to a presence on their high street, we plan and coordinate experiences that create real connections.",
    items: [
      "Sampling & product seeding",
      "Retail & point-of-sale visibility",
      "Outdoor & local media",
      "Pop-ups, events & on-ground activations",
    ],
  },
  {
    n: "03",
    name: "Connected campaigns",
    tag: "BETTER TOGETHER",
    intro: "One idea. Every touchpoint.",
    text: "Make your online presence and physical experience work together. A shared strategy, coordinated rollout and measurement plan keep every channel moving toward the same goal.",
    items: [
      "Go-to-market & launch strategy",
      "Creative adaptation across channels",
      "QR-to-digital customer journeys",
      "Campaign reporting & optimisation",
    ],
  },
];

document.querySelector("#app").innerHTML = `
<header class="header">
  <a class="wordmark" href="#" aria-label="DAAS home">daas<span>™</span></a>
  <span class="brand-definition">DISTRIBUTION<br>AS A SERVICE</span>
  <span class="availability"><i></i> Built to move brands.</span>
  <button class="header-cta" data-project>Let’s talk ${arrow}</button>
</header>
<main id="main">
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-top"><span class="eyebrow">INDEPENDENT DISTRIBUTION AGENCY</span><span class="edition">DIGITAL + PHYSICAL / ALL CONNECTED</span></div>
    <h1 id="hero-title">Get seen.<br><span>Everywhere.</span></h1>
    <div class="hero-sticker" aria-hidden="true">${star}<span>GOOD BRANDS<br>DESERVE TO<br>GET OUT THERE.</span></div>
    <div class="hero-bottom"><p>From the first scroll to the last mile.<br>We take your brand where your people are.</p><a class="text-link" href="#services">Explore what we do <span aria-hidden="true">↓</span></a><span class="hero-index">SCROLL TO DISTRIBUTE</span></div>
  </section>
  <div class="ticker" aria-hidden="true"><div>${Array(4).fill("<span>ON SCREENS</span><b>↗</b><span>ON STREETS</span><b>↗</b><span>ON SHELVES</span><b>↗</b><span>ON MINDS</span><b>↗</b>").join("")}</div></div>
  <section class="intro section-pad" id="about">
    <div class="section-label"><span>(01 — THE IDEA)</span><span>A LITTLE ABOUT US</span></div>
    <div class="intro-main"><h2>A great brand deserves<br>more than a <em>great launch.</em></h2><div class="intro-copy"><span class="mini-star">${star}</span><div><p>It deserves to show up. In the feed. Around the corner. In the right hands.</p><p>We’re DAAS. Your distribution partner for the digital world and the real one. We bring strategy, creative thinking and execution together to turn a brand into a presence.</p><a class="text-link dark-link" href="#approach">Meet your next move ${arrow}</a></div></div></div>
  </section>
  <section class="services section-pad" id="services">
    <div class="section-label"><span>(02 — WHAT WE DO)</span><span>REACH IS ONLY THE BEGINNING.</span></div>
    <div class="section-heading"><h2>Different channels.<br>Same <em>ambition.</em></h2><p>Your audience doesn’t live in one place.<br>Your brand shouldn’t either.</p></div>
    <div class="service-list">${services.map((s, i) => `<details class="service" ${i === 0 ? "open" : ""}><summary><span class="service-number">${s.n}</span><h3>${s.name}</h3><span class="service-tag">${s.tag}</span><span class="expand" aria-hidden="true">+</span></summary><div class="service-content"><div><h4>${s.intro}</h4><p>${s.text}</p><button class="text-link" data-project data-service="${s.name}">Let’s make it happen ${arrow}</button></div><ul>${s.items.map((t) => `<li>${t}<span aria-hidden="true">↗</span></li>`).join("")}</ul></div></details>`).join("")}</div>
  </section>
  <section class="possibilities section-pad" id="possibilities">
    <div class="section-label"><span>(03 — OUT IN THE WORLD)</span><span>THINK BIG. SHOW UP EVERYWHERE.</span></div>
    <div class="section-heading"><h2>From <em>scroll-stopping</em><br>to street-stopping.</h2><p>A few ways your next campaign<br>could come to life.</p></div>
    <div class="showcase-grid">
      <button class="showcase showcase-digital" data-example="digital" aria-label="Explore the Feed to following campaign concept"><div class="art digital-art"><div class="art-note">DAAS™ / DIGITAL CULTURE</div><div class="phone phone-back"><div class="phone-status">9:41 <span>•••</span></div><div class="phone-head">daas™ <span>↗</span></div><div class="phone-poster"><span>NOT<br>FOR<br>EVERY<br>ONE.</span><small>FOR YOUR PEOPLE.</small></div><div class="phone-footer">♡ &nbsp; ◯ &nbsp; ↗<br><small>Find your people. Make your move.</small></div></div><div class="floating-card"><span>↗</span>THE RIGHT<br>PEOPLE.<br><em>ON REPEAT.</em></div><span class="art-caption">LESS NOISE. MORE CONNECTION.</span></div><div class="showcase-caption"><div><h3>From feed to following.</h3><p>CONTENT · CREATORS · COMMUNITY</p></div><span class="circle-arrow">↗</span></div></button>
      <button class="showcase showcase-physical" data-example="physical" aria-label="Explore the Real world presence campaign concept"><div class="art physical-art"><div class="art-note">DAAS™ / STREET PRESENCE</div><div class="poster-wall"><div class="street-poster poster-one"><small>DAAS™ PRESENTS</small><strong>HELLO,<br>REAL<br>WORLD<span>↗</span></strong><span class="poster-bottom">MEET YOUR NEXT FAVOURITE.</span></div><div class="street-poster poster-two"><small>GET OUT.<br>GET SEEN.</small>${star}<strong>HERE.<br>THERE.<br>EVERY<br>WHERE.</strong></div></div><div class="street-line"></div><span class="art-caption">MAKE AN IMPRESSION. IN PERSON.</span></div><div class="showcase-caption"><div><h3>Real world. Real presence.</h3><p>ACTIVATIONS · SAMPLING · OUTDOOR</p></div><span class="circle-arrow">↗</span></div></button>
    </div><p class="concept-note">Illustrative campaign concepts. Built to show what’s possible.</p>
  </section>
  <section class="bridge"><span class="eyebrow">THE WORLD ISN’T ONLINE OR OFFLINE.</span><h2>It’s <span>both.</span></h2><div class="bridge-bottom"><span>DIGITAL THINKING.</span>${star}<span>PHYSICAL IMPACT.</span></div></section>
  <section class="approach section-pad" id="approach"><div class="section-label"><span>(04 — HOW WE MOVE)</span><span>LESS BACK-AND-FORTH. MORE FORWARD.</span></div><div class="section-heading"><h2>A clear plan.<br>A bigger <em>presence.</em></h2><button class="text-link dark-link" data-project>Put us on your team ${arrow}</button></div><div class="steps"><article><span>01 / DISCOVER</span><h3>Find your people.</h3><p>We get to know your brand, audience and ambitions. Then we map where attention can become action.</p></article><article><span>02 / DESIGN</span><h3>Make the right moves.</h3><p>We shape the message, choose the channels and build a practical rollout around your goals and budget.</p></article><article><span>03 / DISTRIBUTE</span><h3>Take it out there.</h3><p>We coordinate digital campaigns and physical touchpoints, keeping the experience connected.</p></article><article><span>04 / DEVELOP</span><h3>Keep getting better.</h3><p>We review agreed measures, learn what resonates and refine the next wave of your distribution.</p></article></div></section>
  <section class="faq section-pad"><div class="section-label"><span>(05 — GOOD QUESTIONS)</span><span>A FEW THINGS TO KNOW</span></div><div class="faq-grid"><h2>Before we<br><em>make moves.</em></h2><div><details><summary>What does Distribution as a Service mean?<span>+</span></summary><p>It means having a partner to plan and coordinate how your brand reaches people. DAAS brings digital channels and physical activations together, with the scope tailored to your business.</p></details><details><summary>Can we start with just digital or physical?<span>+</span></summary><p>Absolutely. Start with the channels that make sense for your goal. We can focus on a single campaign or create a connected digital and physical rollout.</p></details><details><summary>Do you offer logistics and order fulfilment?<span>+</span></summary><p>Our focus is brand and marketing distribution: activations, sampling, retail visibility and digital reach. Any shipping, warehousing or specialist fulfilment requirements are discussed and scoped separately.</p></details><details><summary>How do budgets and timelines work?<span>+</span></summary><p>Every brief is different. We define the scope, channels, deliverables, timeline and fees together before work begins. Media spend, production and third-party costs are identified separately.</p></details></div></div></section>
  <section class="contact section-pad" id="contact"><div class="section-label"><span>GOOD THINGS START WITH A CONVERSATION.</span><span>YOUR NEXT MOVE ↙</span></div><button class="big-cta" data-project>Let’s get<br><em>you out there.</em><span aria-hidden="true">↗</span></button><div class="contact-bottom"><p>Have a launch, a challenge, or a big what-if?<br>We’d love to hear it.</p><a href="mailto:${email}">${email} ${arrow}</a></div></section>
</main>
<footer><a class="wordmark" href="#" aria-label="Back to top">daas<span>™</span></a><span>DISTRIBUTION AS A SERVICE.</span><span>© ${new Date().getFullYear()} DAAS</span><button class="privacy-link" id="privacy-open">Privacy</button><a href="#" aria-label="Back to top">BACK TO TOP ↑</a></footer>
<nav class="floating-nav" aria-label="Main navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#possibilities">Possibilities</a><a href="#approach">Approach</a><button data-project>Let’s talk ${arrow}</button></nav>
<dialog id="project-dialog" aria-labelledby="project-title"><div class="dialog-head"><span class="eyebrow">YOUR NEXT CHAPTER</span><button class="close-dialog" aria-label="Close project enquiry">×</button></div><h2 id="project-title">Let’s make<br><em>some moves.</em></h2><p class="dialog-intro">Tell us a little about your brand. We’ll take it from there.</p><form id="project-form"><div class="form-row"><label>Your name<input name="name" autocomplete="name" required maxlength="100" placeholder="Alex, for example"></label><label>Email address<input name="email" type="email" autocomplete="email" required maxlength="200" placeholder="you@yourbrand.com"></label></div><label>Brand / company<input name="brand" autocomplete="organization" required maxlength="150" placeholder="Who are we getting out there?"></label><fieldset><legend>What are you thinking?</legend>${services.map((s) => `<label class="choice"><input type="checkbox" name="services" value="${s.name}"><span>${s.name}</span></label>`).join("")}</fieldset><div class="form-row"><label>Indicative budget<input name="budget" maxlength="100" placeholder="Amount + currency, or let’s discuss"></label><label>Ideal timeline<select name="timeline"><option>Let’s discuss</option><option>Within a month</option><option>1–3 months</option><option>3+ months</option></select></label></div><label>A little about the project<textarea name="message" rows="3" required maxlength="4000" placeholder="Your audience, your ambition, your next big thing…"></textarea></label><p class="form-note">This opens an email draft to ${email}. Review and send it from your email app. Your details aren’t stored by this website.</p><div class="form-actions"><button class="solid-button" type="submit">Create email draft ${arrow}</button><button class="download-button" type="button" id="download-brief">Download brief ↓</button></div><p role="status" id="form-status"></p></form></dialog>
<dialog id="example-dialog" aria-labelledby="example-title"><div class="dialog-head"><span class="eyebrow">CAMPAIGN CONCEPT</span><button class="close-dialog" aria-label="Close campaign concept">×</button></div><h2 id="example-title"></h2><p id="example-description"></p><ul id="example-points"></ul><p class="form-note">An illustrative approach, not a client case study. Scope and outcomes depend on your brief.</p><button class="solid-button" id="example-cta">Build something like this ${arrow}</button></dialog>
<dialog id="privacy-dialog" aria-labelledby="privacy-title"><div class="dialog-head"><span class="eyebrow">THE DETAILS</span><button class="close-dialog" aria-label="Close privacy information">×</button></div><h2 id="privacy-title">Your privacy.</h2><p>This site does not use analytics, tracking cookies, or a contact database. The enquiry form prepares a draft in your email app; nothing is sent until you send that email. Downloading a brief creates a text file on your device.</p><p>If you email us, the details you choose to share are used to discuss and respond to your enquiry. Your email provider and the website’s hosting provider may process standard connection information under their own policies.</p><p>For questions about your information, contact <a href="mailto:${email}">${email}</a>.</p></dialog>
`;

const projectDialog = document.querySelector("#project-dialog");
const form = document.querySelector("#project-form");
let lastTrigger;
function openDialog(dialog, trigger) {
  lastTrigger = trigger;
  dialog.showModal();
  document.body.classList.add("dialog-open");
}
function closeDialog(dialog) {
  dialog.close();
}
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog
    .querySelector(".close-dialog")
    .addEventListener("click", () => closeDialog(dialog));
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      const r = dialog.getBoundingClientRect();
      if (
        event.clientX < r.left ||
        event.clientX > r.right ||
        event.clientY < r.top ||
        event.clientY > r.bottom
      )
        closeDialog(dialog);
    }
  });
  dialog.addEventListener("close", () => {
    if (!document.querySelector("dialog[open]")) {
      document.body.classList.remove("dialog-open");
      lastTrigger?.focus();
    }
  });
});
document.querySelectorAll("[data-project]").forEach((button) =>
  button.addEventListener("click", () => {
    if (button.dataset.service)
      form.querySelectorAll('[name="services"]').forEach((input) => {
        input.checked = input.value === button.dataset.service;
      });
    openDialog(projectDialog, button);
  }),
);
function createBrief() {
  const data = new FormData(form);
  return {
    brand: data.get("brand").trim(),
    text: `Hello DAAS,\n\nI’d like to discuss a distribution project.\n\nName: ${data.get("name").trim()}\nEmail: ${data.get("email").trim()}\nBrand: ${data.get("brand").trim()}\nServices: ${data.getAll("services").join(", ") || "Let’s discuss"}\nBudget: ${data.get("budget").trim() || "Let’s discuss"}\nTimeline: ${data.get("timeline")}\n\nProject brief:\n${data.get("message").trim()}\n`,
  };
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const brief = createBrief();
  const mailto = `mailto:${email}?subject=${encodeURIComponent(`DAAS project enquiry — ${brief.brand}`)}&body=${encodeURIComponent(brief.text)}`;
  if (mailto.length > 7500) {
    document.querySelector("#form-status").textContent =
      "Your brief is too long for some email apps. Download it and attach it to an email to " +
      email +
      ".";
    return;
  }
  window.location.href = mailto;
  document.querySelector("#form-status").textContent =
    "Email draft requested. If your email app didn’t open, download your brief and email it to " +
    email +
    ". Nothing has been sent by this website.";
});
document.querySelector("#download-brief").addEventListener("click", () => {
  if (!form.reportValidity()) return;
  const brief = createBrief();
  const url = URL.createObjectURL(
    new Blob([brief.text], { type: "text/plain;charset=utf-8" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = "DAAS-project-brief.txt";
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector("#form-status").textContent =
    "Your brief has been downloaded. Email it to " +
    email +
    " when you’re ready.";
});
const examples = {
  digital: {
    title: "From feed to following.",
    description:
      "An audience-first digital launch that gives people a reason to stop, connect and come back.",
    points: [
      "Start with audience and channel research.",
      "Build a content series with a consistent creative idea.",
      "Bring relevant creators into the conversation.",
      "Use paid distribution to test and extend the strongest content.",
      "Review engagement, qualified traffic and agreed conversion measures.",
    ],
  },
  physical: {
    title: "Real world. Real presence.",
    description:
      "A local activation that puts your product and story into people’s everyday lives.",
    points: [
      "Choose locations around the audience you want to reach.",
      "Coordinate outdoor creative, retail materials and sampling.",
      "Give the on-ground team a clear brand story and playbook.",
      "Connect physical moments to a digital destination with trackable QR links.",
      "Review participation, sample uptake and the onward digital journey.",
    ],
  },
};
document.querySelectorAll("[data-example]").forEach((button) =>
  button.addEventListener("click", () => {
    const example = examples[button.dataset.example];
    document.querySelector("#example-title").textContent = example.title;
    document.querySelector("#example-description").textContent =
      example.description;
    document.querySelector("#example-points").replaceChildren(
      ...example.points.map((point) => {
        const item = document.createElement("li");
        item.textContent = point;
        return item;
      }),
    );
    openDialog(document.querySelector("#example-dialog"), button);
  }),
);
document.querySelector("#example-cta").addEventListener("click", () => {
  document.querySelector("#example-dialog").close();
  openDialog(projectDialog, document.querySelector("[data-project]"));
});
document
  .querySelector("#privacy-open")
  .addEventListener("click", (event) =>
    openDialog(document.querySelector("#privacy-dialog"), event.currentTarget),
  );
const navLinks = [...document.querySelectorAll(".floating-nav a")];
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          const active = link.hash === "#" + entry.target.id;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    }),
  { rootMargin: "-15% 0px -55% 0px" },
);
navLinks.forEach((link) => observer.observe(document.querySelector(link.hash)));
