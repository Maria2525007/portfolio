export const site = {
  name: "Maria Makhmudova",
  role: "Software engineer",
  url: "https://daysnotweeks.vercel.app",
  telegram: "just_cause_21",
  email: "makhmudovamaria25@gmail.com",
  github: "https://github.com/Maria2525007",
} as const;

export const hero = {
  eyebrow: "Websites · Telegram bots · Remote",
  headlineLead: "Sites and bots that ship in",
  headlineAccent: "days",
  headlineTail: ", not weeks.",
  lede: "I design and build landing pages, websites, and Telegram bots for small brands, creators, and studios. Most projects go live within a week of the first message.",
} as const;

export const about = [
  "I’m a software engineer with a computer science background at ITMO University, and I’ve built production sites for an agency and for direct clients.",
  "I use AI tooling — Claude and ChatGPT — as part of the build, which compresses weeks of production work into days. The design decisions, the code review, and the final quality stay mine.",
  "I work in English and Russian, fully remote.",
] as const;

export type Service = {
  index: string;
  title: string;
  summary: string;
  includes: readonly string[];
  priceUsd: string;
  priceRub: string;
  timeline: string;
};

export const services: readonly Service[] = [
  {
    index: "01",
    title: "Landing page",
    summary:
      "One focused page built to turn a visitor into an enquiry. Structure, design, copy layout, and the build itself.",
    includes: [
      "Responsive design, mobile first",
      "SEO basics and social preview images",
      "Deployed and live on your domain",
      "Two rounds of revisions",
    ],
    priceUsd: "from $120",
    priceRub: "≈ 9 500 ₽",
    timeline: "3 days",
  },
  {
    index: "02",
    title: "Telegram bot",
    summary:
      "A bot that answers, collects, or sells — orders, bookings, FAQ, lead capture, notifications straight to you.",
    includes: [
      "Conversation flow designed with you",
      "Admin notifications or Google Sheets",
      "Hosting configured and running",
      "Two rounds of revisions",
    ],
    priceUsd: "from $200",
    priceRub: "≈ 15 900 ₽",
    timeline: "5 days",
  },
  {
    index: "03",
    title: "Website or web app",
    summary:
      "When one page is not enough — several pages, a catalogue, forms, a simple dashboard.",
    includes: [
      "Up to five pages or screens",
      "Forms, integrations, analytics",
      "Content you can edit yourself",
      "Two rounds of revisions",
    ],
    priceUsd: "from $350",
    priceRub: "≈ 27 800 ₽",
    timeline: "7 days",
  },
];

export type Project = {
  index: string;
  title: string;
  client: string;
  kind: string;
  year: string;
  image: string;
  alt: string;
  challenge: string;
  approach: string;
  outcome: string;
  live: string;
  source: string;
};

export const projects: readonly Project[] = [
  {
    index: "01",
    title: "Time League",
    client: "Raketa watch manufactory — via agency",
    kind: "Landing page",
    year: "2026",
    image: "/case-raketa.jpg",
    alt: "Time League landing page for the Raketa watch manufactory — dark cosmic hero with the Raketa logotype",
    challenge:
      "Raketa, a watch manufactory operating since 1721, needed a page for a private club for its collectors. It had to carry the weight of the brand — heritage, precision, restraint — and still move a cold visitor to apply for membership.",
    approach:
      "A dark, cosmic single page built around the brand’s own logotype and red. Privileges, event calendar, residencies, and a membership form, with scroll-triggered reveals pacing the descent. Hand-written HTML and CSS, no framework.",
    outcome:
      "Ships as a single static HTML file plus images — no framework, no build step, and it runs on any host.",
    live: "https://maria2525007.github.io/raketa/",
    source: "https://github.com/Maria2525007/raketa",
  },
  {
    index: "02",
    title: "AMA Community",
    client: "Private members’ club",
    kind: "Concept site",
    year: "2026",
    image: "/case-ama.jpg",
    alt: "AMA Community concept site — full-screen forest scene with a serif headline",
    challenge:
      "A closed community for people who travel, collect culture, and care how they live. The first stage had one job: convince the founders to commission the full site. Selling memberships came later, so the usual pricing blocks had to go.",
    approach:
      "Scrollytelling instead of stacked sections. Every scene pins to the viewport and a scroll engine maps progress to parallax, photo cross-fades, rotating type, and a mask reveal. Deep green dominates, sand is the rare light, sienna is the only accent.",
    outcome:
      "The whole scroll engine is 139 lines of vanilla JavaScript — no animation library, nothing to keep updated.",
    live: "https://maria2525007.github.io/ama/",
    source: "https://github.com/Maria2525007/ama",
  },
];

export const process = [
  {
    index: "01",
    title: "Brief",
    body: "A short call or a written brief — what the page has to achieve, who it speaks to, what already works. Half an hour is usually enough.",
  },
  {
    index: "02",
    title: "A working page in one day",
    body: "Within 24 hours you open a real page in your browser, on a real link. Not a flat mock-up, not a slide deck.",
  },
  {
    index: "03",
    title: "Revisions",
    body: "Two rounds are included. Leave comments in Telegram, in a doc, or point at the thing on the page — whichever is faster for you.",
  },
  {
    index: "04",
    title: "Launch",
    body: "Deployed to your domain with analytics connected, and handed over so you are never locked to me.",
  },
] as const;
