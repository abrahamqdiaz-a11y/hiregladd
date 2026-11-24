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
    { label: "Office support", href: "/#office-support" },
    { label: "Industries", href: "/industries/" },
    { label: "About", href: "/about/" },
  ],
  ctaLabel: "Book a call",
  footer: {
    tagline: "Hiring and office support for trade and service companies.",
    parent: "An EchelonFox company",
    privacy: "Privacy policy",
  },
};

export const home = {
  seo: {
    title: "Gladd | Hiring and office support for trade companies",
    description:
      "We hire your crew and run your office for one flat monthly fee. For roofing, HVAC, plumbing, electrical and commercial cleaning companies. English and Spanish.",
  },
  hero: {
    eyebrow: "Hiring and office support for trade and service companies",
    headline: "We hire your crew and run your office. You run the jobs.",
    subhead:
      "Gladd finds the people you need and handles your calls, estimates and invoices, all for one flat monthly fee. For roofing, HVAC, plumbing, electrical and commercial cleaning companies.",
  },
  problem: {
    heading: "Sound familiar?",
    items: [
      {
        icon: "users",
        title: "You're always hiring.",
        body: "Someone quits, someone doesn't show, and you're back to posting ads and sorting through applications.",
      },
      {
        icon: "phone",
        title: "The phone rings while you're on a roof.",
        body: "You miss the call, and the job goes to whoever picked up.",
      },
      {
        icon: "moon",
        title: "The paperwork waits until night.",
        body: "Estimates, invoices and new-hire forms all get done at the kitchen table after a full day.",
      },
    ],
    closer: "You didn't start a company to do all of that yourself. We take it off your plate.",
  },
  offers: {
    heading: "Two ways we help",
    hiring: {
      id: "hiring",
      icon: "hardhat",
      title: "Hiring",
      body: "We find, screen and line up candidates, so you only meet the ones worth your time.",
      points: [
        "Field roles: techs, installers, crew members, cleaners",
        "Office roles: dispatchers, customer service reps, estimators",
        "New-hire paperwork, done before day one",
      ],
    },
    office: {
      id: "office-support",
      icon: "inbox",
      title: "Office support",
      body: "We work as your office team, inside your own phone, email and job software.",
      points: [
        "We follow up on estimates so they turn into jobs",
        "We book appointments and return calls",
        "We chase unpaid invoices so you get paid",
      ],
    },
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
      "PLACEHOLDER: proof section. Add a real client quote with their name, company and permission, or a real result such as roles filled or invoices collected. This section stays hidden on the live site until you fill it in (content/en/site.ts → home.proof.items).",
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
        q: "Do I have to switch software?",
        a: "No. We work inside the phone, email and job software you already use.",
      },
      {
        q: "Can you work with Spanish-speaking candidates and customers?",
        a: "Yes. We work in English and Spanish.",
      },
      {
        q: "Do you only do hiring, or only office work?",
        a: "We do both. Many owners start with whichever one hurts most right now.",
      },
    ],
  },
  finalCta: {
    heading: "Get your evenings back.",
    body: "Book a short call. Tell us what you'd hand off first, and we'll tell you plainly how we'd handle it.",
  },
};

/** Shared "How it works" section, used on the homepage and every industry page. */
export const howItWorks = {
  heading: "How it works",
  steps: [
    {
      title: "A short call.",
      body: "Tell us who you need and what's piling up.",
    },
    {
      title: "We set up inside your tools.",
      body: "We use your phone, email and job software. You don't need to learn anything new.",
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
      "Gladd hires crews and runs the office for roofing, HVAC, plumbing, electrical and commercial cleaning companies with about 8 to 30 people.",
  },
  heading: "Industries we serve",
  intro:
    "We work with owner-run trade and service companies, usually with 8 to 30 people. Pick your trade to see the roles we fill and the office work we take over.",
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
    "Gladd is a hiring and office-support firm for trade and service companies. We find the people our clients need, and we work as their office team so the owner can stay on the jobs.",
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
    "PLACEHOLDER: calendar booking link. Add your link in content/en/site.ts → site.bookingUrl. Hidden on the live site until filled.",
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
    handoffHint: "For example: hiring two techs, returning calls, chasing invoices.",
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
