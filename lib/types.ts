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
