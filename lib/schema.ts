import { SITE_NAME, SITE_URL, PARENT_COMPANY, absoluteUrl } from "./site";
import type { FAQ, Industry } from "./types";

const ORG_ID = `${SITE_URL}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: absoluteUrl("/icon.png"),
    description:
      "Hiring and office support for owner-run trade and service companies: roofing, HVAC, plumbing, electrical and commercial cleaning.",
    knowsLanguage: ["en", "es"],
    parentOrganization: { "@type": "Organization", name: PARENT_COMPANY },
  };
}

function service(name: string, description: string, audience: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: name,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", name: audience },
    availableLanguage: ["English", "Spanish"],
    url: absoluteUrl(path),
  };
}

export function homeServicesSchema() {
  const audience = "Owner-run trade and service companies";
  return [
    service(
      "Hiring for trade and service companies",
      "We find, screen and line up candidates for field and office roles, and handle new-hire paperwork. One flat monthly fee, no per-hire commissions.",
      audience,
      "/#hiring",
    ),
    service(
      "Office support for trade and service companies",
      "We work inside your phone, email and job software as your office team: following up on estimates, booking appointments and chasing unpaid invoices.",
      audience,
      "/#office-support",
    ),
  ];
}

export function industryServiceSchema(i: Industry) {
  return service(
    `Hiring and office support for ${i.name.toLowerCase()} companies`,
    i.seo.description,
    `${i.name} companies`,
    `/industries/${i.slug}/`,
  );
}

export function faqSchema(items: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
