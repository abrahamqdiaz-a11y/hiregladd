/**
 * All shared English copy lives here. A Spanish version can be added as
 * content/es/site.ts with the same shape, and served under /es/ later.
 *
 * Anything in [SQUARE BRACKETS] is a placeholder for you to fill in.
 * Placeholders show on local builds and deploy previews, and are hidden on the
 * live site until filled.
 */

export const site = {
  /** Your calendar booking link (Calendly, Cal.com, etc.). */
  bookingUrl: "[BOOKING LINK]",
  /** Optional public contact details for the footer. Leave as-is to hide. */
  contactEmail: "[CONTACT EMAIL]",
  contactPhone: "[CONTACT PHONE]",

  nav: [
    { label: "Hiring", href: "/#hiring" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Industries", href: "/industries/" },
    { label: "About", href: "/about/" },
  ],
  ctaLabel: "Book a call",
  footer: {
    tagline: "Hiring for trade and service companies, with office support when you need it.",
    parent: "An EchelonFox company",
    privacy: "Privacy policy",
  },
};

export const home = {
  seo: {
    title: "Gladd | Hiring for trade and service companies",
    description:
      "We find, screen and line up techs, installers, crews and office staff for roofing, HVAC, plumbing, electrical and cleaning companies. One flat monthly fee.",
  },
  hero: {
    eyebrow: "Hiring for trade and service companies",
    headline: "We find your crew. You run the jobs.",
    subhead:
      "Gladd finds, screens and lines up the techs, installers, crews and office staff you need, for one flat monthly fee. No per-hire commissions. We can run your office too.",
  },
  problem: {
    heading: "Sound familiar?",
    items: [
      {
        icon: "users",
        title: "You're always hiring.",
        body: "Someone quits, someone doesn't show, and you're back to posting ads again.",
      },
      {
        icon: "phone",
        title: "There's no time to sort through people.",
        body: "Applications pile up while you're on the job, and the good ones take another offer before you call back.",
      },
      {
        icon: "moon",
        title: "New-hire paperwork waits until night.",
        body: "Forms, documents and first-day details all get done at the kitchen table after a full day.",
      },
    ],
    closer: "You didn't start a company to spend your nights hiring. We take it off your plate.",
  },
  hiring: {
    id: "hiring",
    heading: "We fill your open roles",
    body: "We find, screen and line up candidates, so you only meet the ones worth your time. Then we handle the new-hire paperwork before day one.",
    groups: [
      {
        icon: "hardhat",
        title: "In the field",
        points: ["Service techs and installers", "Crew members and crew leads", "Helpers and apprentices", "Cleaners and floor techs"],
      },
      {
        icon: "users",
        title: "In the office",
        points: ["Dispatchers", "Customer service reps", "Estimators", "Office coordinators"],
      },
    ],
    results: [
      "Screened candidates, not a stack of applications",
      "Interviews set up on your schedule",
      "New-hire paperwork done before day one",
    ],
  },
  office: {
    id: "office-support",
    icon: "inbox",
    heading: "Need help in the office too?",
    body: "We can also work as your office team, inside your own phone, email and job software.",
    points: [
      "Follow up on estimates so they turn into jobs",
      "Book appointments and return calls",
      "Chase unpaid invoices so you get paid",
    ],
  },
  why: {
    heading: "Why Gladd",
    items: [
      {
        icon: "tag",
        title: "One flat fee, not commissions.",
        body: "Recruiters often charge 10–20% of a new hire's yearly salary. We charge one flat monthly fee, however many roles we fill.",
      },
      {
        icon: "shield",
        title: "We never charge job seekers.",
        body: "Candidates never pay us anything, so good people are glad to work with us.",
      },
      {
        icon: "chat",
        title: "English and Spanish.",
        body: "We talk with your candidates and your customers in either language.",
      },
      {
        icon: "tools",
        title: "We work in the tools you already use.",
        body: "Your phone number, your email and your job software. Nothing changes for your customers.",
      },
    ],
  },
  industries: {
    heading: "Built for trade and service companies",
    allLink: "See all industries",
  },
  proof: {
    heading: "What owners say",
    /**
     * Add REAL quotes or results only, with the client's permission.
     * Example: { quote: "…", name: "Jane Doe", company: "Doe Roofing", industry: "Roofing" }
     * While this list is empty, the section is hidden on the live site.
     */
    items: [] as { quote: string; name: string; company: string; industry?: string }[],
    placeholderNote:
      "Proof section. Add a real client quote with their name, company and permission, or a real result such as roles filled or invoices collected. This section stays hidden on the live site until you fill it in (content/en/site.ts → home.proof.items).",
  },
  faq: {
    heading: "Questions owners ask",
    items: [
      {
        q: "What kind of companies do you work with?",
        a: "Owner-run trade and service companies, usually with 8 to 30 people: roofing, HVAC, plumbing, electrical and commercial cleaning.",
      },
      {
        q: "How much does it cost?",
        a: "One flat monthly fee, based on what you need. We'll give you the number on our first call. There are no per-hire commissions.",
      },
      { q: "Do job seekers pay anything?", a: "No, never." },
      {
        q: "What roles do you hire for?",
        a: "Field roles like techs, installers, crew members and cleaners, and office roles like dispatchers, customer service reps and estimators.",
      },
      {
        q: "Can you hire Spanish-speaking candidates?",
        a: "Yes. We work in English and Spanish, with candidates and with your customers.",
      },
      {
        q: "Can you help with office work too?",
        a: "Yes. We can also work as your office team, inside the phone, email and job software you already use: following up on estimates, booking appointments and chasing unpaid invoices.",
      },
    ],
  },
  finalCta: {
    heading: "Stop spending your nights hiring.",
    body: "Book a short call. Tell us which roles you need to fill, and we'll tell you plainly how we'd fill them.",
  },
};

/** Shared "How it works" section, used on the homepage and every industry page. */
export const howItWorks = {
  heading: "How it works",
  steps: [
    {
      title: "A short call.",
      body: "Tell us which roles you need to fill, and anything else that's piling up.",
    },
    {
      title: "We line up candidates.",
      body: "You meet only the people worth your time. We work in your own tools, so there's nothing new to learn.",
    },
    {
      title: "One flat monthly fee.",
      body: "No per-hire commissions and no surprise bills.",
    },
  ],
};

export const industriesIndex = {
  seo: {
    title: "Industries we serve",
    description:
      "Gladd hires techs, crews and office staff for roofing, HVAC, plumbing, electrical and commercial cleaning companies with about 8 to 30 people.",
  },
  heading: "Industries we serve",
  intro:
    "We hire for owner-run trade and service companies, usually with 8 to 30 people. Pick your trade to see the roles we fill.",
  cardLink: "See how we help",
  notListed: {
    heading: "Don't see your trade?",
    body: "If you run a field service company with a small office, we may still be a fit. Book a call and ask.",
  },
};

export const about = {
  seo: {
    title: "About Gladd",
    description:
      "Gladd is a hiring and office-support firm for owner-run trade and service companies. One flat monthly fee, English and Spanish. An EchelonFox company.",
  },
  heading: "About Gladd",
  intro:
    "Gladd is a hiring firm for trade and service companies. We find the people our clients need, and when they want it, we work as their office team too, so the owner can stay on the jobs.",
  sections: [
    {
      heading: "Why we exist",
      body: [
        "Owners of roofing, HVAC, plumbing, electrical and cleaning companies are some of the hardest-working people we know. Most of them are on job sites all day, short on people, and doing office work at night.",
        "Big companies have a hiring team and an office staff. A company with 15 people usually has the owner. We built Gladd to be that team for them.",
      ],
    },
    {
      heading: "How we work with you",
      body: [
        "We're a firm, not a freelancer. When you work with us, you get a team that knows your company, your roles and your customers.",
        "We work inside the phone, email and job software you already use, in English and Spanish. You pay one flat monthly fee, with no per-hire commissions. We never charge job seekers.",
      ],
    },
    {
      heading: "Part of EchelonFox",
      body: ["Gladd is an EchelonFox company."],
    },
  ],
  founder: {
    heading: "Who's behind Gladd",
    /** Replace with your real bio. While it's a placeholder, it's hidden on the live site. */
    name: "[YOUR NAME]",
    role: "[YOUR TITLE]",
    bio: "[YOUR BIO: a few sentences on who you are, your background, and why you started Gladd.]",
  },
};

export const contact = {
  seo: {
    title: "Book a call",
    description:
      "Book a short call with Gladd. Tell us who you need to hire and what office work you'd hand off first. We'll tell you plainly how we'd handle it.",
  },
  heading: "Book a call",
  intro:
    "Tell us a little about your company and what you'd hand off first. We'll get back to you to set up a short call.",
  bookingHeading: "Rather pick a time yourself?",
  bookingBody: "Use our calendar to book a call directly.",
  bookingButton: "Open our calendar",
  bookingPlaceholderNote:
    "Calendar booking link. Add your link in content/en/site.ts → site.bookingUrl. Hidden on the live site until filled.",
  form: {
    name: "Your name",
    company: "Company name",
    industry: "Industry",
    industryPrompt: "Choose one",
    industryOther: "Other",
    teamSize: "Team size",
    teamSizePrompt: "Choose one",
    teamSizes: ["1–7 people", "8–15 people", "16–30 people", "31 or more"],
    phone: "Phone",
    email: "Email",
    handoff: "What's the one thing you'd hand off first?",
    handoffHint: "For example: hiring two techs, finding a dispatcher, or returning calls.",
    required: "Required",
    submit: "Send",
    sending: "Sending…",
    error: "Something went wrong and your message wasn't sent. Please try again.",
    privacyNote: "We only use your details to reply to you. See our",
    privacyLink: "privacy policy",
  },
};

export const thankYou = {
  seo: {
    title: "Thanks, we got it",
    description: "Thanks for reaching out to Gladd.",
  },
  heading: "Thanks. We got your message.",
  body: "We'll get back to you soon to set up a short call.",
  bookingBody: "If you'd like to pick a time now, you can book directly on our calendar.",
  back: "Back to the homepage",
};

export const notFound = {
  heading: "We couldn't find that page.",
  body: "The page may have moved. Try the homepage or get in touch.",
  back: "Go to the homepage",
};
