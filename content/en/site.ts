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
    tagline: "Hiring for growing businesses, with office support when you need it.",
    parent: "An EchelonFox company",
    privacy: "Privacy policy",
    /** A link is shown only if its page exists; otherwise the label shows as plain text. */
    industries: [
      { label: "Cleaning companies", href: "/cleaning-companies/" },
      { label: "Roofing", href: "/industries/roofing/" },
      { label: "HVAC, Plumbing & Electrical", href: "/industries/hvac-plumbing-electrical/" },
    ],
    company: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "FAQ", href: "/#faq" },
      { label: "Book a call", href: "/contact/" },
    ],
  },
};

export const home = {
  seo: {
    title: "HireGladd | Hiring for owner-run businesses",
    description:
      "We find and screen the field and office staff you need, for one flat monthly fee. You only meet people worth your time.",
  },
  hero: {
    eyebrow: "Hiring for growing businesses",
    headline: "We find your people.",
    headlineAccent: "You run your business.",
    subhead:
      "HireGladd finds and screens the field and office staff you need, for one flat monthly fee. You only meet the people worth your time.",
    secondaryCta: "See the roles we fill",
    points: ["One flat monthly fee", "No per-hire fees", "English and Spanish"],
    /** Illustration only: shows what working with us looks like. Not real client data. */
    board: {
      title: "Your open roles",
      caption: "Example of how we track your open roles.",
      rows: [
        { role: "Field technician", status: "Interview set", icon: "calendar" },
        { role: "Cleaner, night shift", status: "Shortlist ready", icon: "sparkle" },
        { role: "Crew lead", status: "Screening", icon: "hardhat" },
        { role: "Office coordinator", status: "Started Monday", icon: "clipboard" },
      ],
    },
  },
  problem: {
    heading: "Sound familiar?",
    items: [
      {
        icon: "users",
        title: "You're always hiring.",
        body: "Someone quits, someone doesn't come back, and you're posting ads again.",
      },
      {
        icon: "chat",
        title: "The story changes in the interview.",
        body: "They said they had the experience. Then you sit down with them and hear something else.",
      },
      {
        icon: "calendar",
        title: "They say yes, then don't show up.",
        body: "You clear your morning for interviews, and no one comes.",
      },
    ],
    closer: "You started a business, not an HR department. We take hiring off your plate.",
  },
  industries: {
    heading: "Built for the businesses that hire the most",
    allLink: "See all industries",
    /**
     * A card links only if its page exists. "/cleaning-companies/" has no page yet,
     * so that card shows without a link until the page is added.
     */
    cards: [
      {
        name: "Cleaning companies",
        icon: "sparkle",
        body: "Cleaners, floor techs and team leads who show up, so you stop covering shifts yourself.",
        href: "/cleaning-companies/",
        linkLabel: "See how we help cleaning companies",
      },
      {
        name: "Roofing",
        icon: "roof",
        body: "Roofers, laborers, crew leads and estimators, hired before your busy season, not during it.",
        href: "/industries/roofing/",
        linkLabel: "See how we help roofers",
      },
      {
        name: "HVAC, Plumbing & Electrical",
        icon: "wrench",
        body: "Techs, apprentices and dispatchers, so your trucks stay on the road.",
        href: "/industries/hvac-plumbing-electrical/",
        linkLabel: "See how we help trade companies",
      },
    ],
    notListedBefore: "Don't see your industry?",
    notListedLink: "Book a call",
    notListedAfter: "and ask.",
  },
  whatYouGet: {
    id: "hiring",
    heading: "People worth meeting, not a pile of applications",
    body: "We find people, talk to them first and only send you the ones who are ready to work. You interview, you decide.",
    points: [
      { icon: "check", text: "Screened before you ever talk to them" },
      { icon: "calendar", text: "Interviews booked on your schedule" },
      { icon: "refresh", text: "If a new hire leaves in their first 30 days, we replace them at no extra cost" },
    ],
  },
  roles: {
    id: "roles",
    heading: "Roles we fill",
    groups: [
      {
        icon: "hardhat",
        title: "Field and frontline",
        points: ["Technicians and installers", "Crew members and crew leads", "Cleaners and janitorial staff", "Helpers and trainees"],
      },
      {
        icon: "users",
        title: "Office",
        points: ["Receptionists and customer service reps", "Dispatchers and schedulers", "Admin assistants and coordinators", "Estimators"],
      },
    ],
  },
  howItWorks: {
    heading: "Three simple steps",
    steps: [
      {
        title: "A short call.",
        body: "Tell us which roles you need to fill and what a good hire looks like for you.",
      },
      {
        title: "We send you people worth meeting.",
        body: "You interview them and make the final call. You run your usual background check, the same as you do now.",
      },
      {
        title: "One flat monthly fee.",
        body: "No per-hire fees and no surprise bills.",
      },
    ],
  },
  promise: {
    heading: "We only win when you do",
    items: [
      {
        icon: "refresh",
        title: "Free replacement.",
        body: "If a new hire leaves in their first 30 days, we find you someone else at no extra cost.",
      },
      {
        icon: "tag",
        title: "Nothing worth your time, no charge.",
        body: "If we don't send you anyone worth interviewing in a month, you don't pay for that month.",
      },
      {
        icon: "shield",
        title: "No charge to job seekers.",
        body: "Candidates never pay us anything, so good people are glad to work with us.",
      },
    ],
  },
  compare: {
    heading: "One flat fee. Not a cut of every hire.",
    columns: ["Typical recruiter", "HireGladd"],
    rows: [
      { label: "How you pay", them: "A share of each new hire's yearly pay", us: "One flat monthly fee" },
      { label: "Hiring several people", them: "A new fee for every hire", us: "Same flat fee" },
      { label: "Someone quits early", them: "Often your problem", us: "We replace them, free" },
      { label: "Office help", them: "Not part of the deal", us: "Available when you need it" },
    ],
  },
  office: {
    id: "office-support",
    icon: "inbox",
    heading: "Need help in the office too?",
    body: "We can also work as your office team, inside your own phone, email and business software.",
    points: [
      "Follow up on quotes and estimates so they turn into work",
      "Book appointments and return calls",
      "Chase unpaid invoices so you get paid",
    ],
    button: "Ask about office support",
  },
  why: {
    label: "Why HireGladd",
    items: [
      {
        icon: "chat",
        title: "English and Spanish.",
        body: "We talk with your candidates and your customers in either language.",
      },
      {
        icon: "tools",
        title: "Nothing new to learn.",
        body: "We work with your phone, your email and the tools you already use.",
      },
      {
        icon: "check",
        title: "You stay in charge.",
        body: "Every hiring decision is yours. We make sure the right people get to your door.",
      },
    ],
  },
  faq: {
    heading: "Questions owners ask",
    items: [
      {
        q: "What kind of businesses do you work with?",
        a: "Owner-run businesses that hire often, mostly cleaning, roofing and HVAC, plumbing and electrical companies.",
      },
      {
        q: "How much does it cost?",
        a: "One flat monthly fee, based on how many people you need. We'll give you the price on a short call. No per-hire fees.",
      },
      {
        q: "What roles do you hire for?",
        a: "Field roles like technicians, crew members and cleaners, and office roles like dispatchers, receptionists and estimators.",
      },
      {
        q: "What if someone quits early?",
        a: "If they leave in their first 30 days, we find a replacement at no extra cost.",
      },
      {
        q: "Who runs background checks?",
        a: "You do, the same way you do now. You make every hiring decision.",
      },
      { q: "Do job seekers pay anything?", a: "No. Never." },
      {
        q: "Can you hire Spanish-speaking candidates?",
        a: "Yes. We talk with candidates in English and Spanish.",
      },
      {
        q: "Can you help with office work too?",
        a: "Yes. We can follow up on quotes, book appointments and chase unpaid invoices, using your own phone and email.",
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
  eyebrow: "How it works",
  heading: "Three simple steps",
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
      "HireGladd hires techs, crews and office staff for roofing, HVAC, plumbing, electrical and commercial cleaning companies with about 8 to 30 people.",
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
    title: "About HireGladd",
    description:
      "HireGladd is a hiring and office-support firm for owner-run businesses. One flat monthly fee, English and Spanish. An EchelonFox company.",
  },
  heading: "About HireGladd",
  intro:
    "HireGladd is a hiring firm for owner-run businesses, and we know trade and service companies especially well. We find the people our clients need, and when they want it, we work as their office team too, so the owner can stay on the jobs.",
  sections: [
    {
      heading: "Why we exist",
      body: [
        "Owners of roofing, HVAC, plumbing, electrical and cleaning companies are some of the hardest-working people we know. Most of them are on job sites all day, short on people, and doing office work at night.",
        "Big companies have a hiring team and an office staff. A company with 15 people usually has the owner. We built HireGladd to be that team for them.",
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
      body: ["HireGladd is an EchelonFox company."],
    },
  ],
  founder: {
    heading: "Who's behind HireGladd",
    /** Replace with your real bio. While it's a placeholder, it's hidden on the live site. */
    name: "[YOUR NAME]",
    role: "[YOUR TITLE]",
    bio: "[YOUR BIO: a few sentences on who you are, your background, and why you started HireGladd.]",
  },
};

export const contact = {
  seo: {
    title: "Book a call",
    description:
      "Book a short call with HireGladd. Tell us who you need to hire and what office work you'd hand off first. We'll tell you plainly how we'd handle it.",
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
    description: "Thanks for reaching out to HireGladd.",
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
