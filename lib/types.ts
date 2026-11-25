export type Locale = "en"; // Add "es" here when the Spanish version is ready.

export type FAQ = { q: string; a: string };

export type Role = { title: string; note: string };

export type Industry = {
  /** URL slug, e.g. "roofing" → /industries/roofing/ */
  slug: string;
  /** Order on the industries index, homepage row and form dropdown. */
  order: number;
  name: string;
  /** Icon name from components/Icon.tsx */
  icon: string;
  /** One line for cards on the homepage and industries index. */
  summary: string;
  seo: { title: string; description: string };
  hero: { headline: string; subhead: string };
  roles: { field: Role[]; office: Role[] };
  officeTasks: { title: string; detail: string }[];
  /** Exactly 3 pain points, written the way an owner would say them. */
  pains: string[];
  faqs: FAQ[];
  cta: { heading: string; body: string };
};

/** A city pillar page, e.g. /cleaning-companies/los-angeles/. One JSON file per city. */
export type City = {
  slug: string;
  order: number;
  /** Industry slug this page belongs to (links back to /industries/<industry>/). */
  industry: string;
  /** Short name for cards and breadcrumbs, e.g. "Los Angeles". */
  name: string;
  /** Longer place name for headings, e.g. "Los Angeles County". */
  region: string;
  summary: string;
  seo: { title: string; description: string };
  hero: { eyebrow: string; headline: string; subhead: string };
  intro: string[];
  /** Exactly 3, in the owner's own words. */
  pains: string[];
  challenges: { heading: string; items: { icon: string; title: string; body: string }[] };
  roles: Role[];
  areas: string[];
  areasNote: string;
  officeTasks: { title: string; detail: string }[];
  faqs: FAQ[];
  cta: { heading: string; body: string };
};
