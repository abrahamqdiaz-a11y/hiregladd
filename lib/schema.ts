import { SITE_NAME, SITE_URL, PARENT_COMPANY, absoluteUrl } from "./site";
import type { City, FAQ, Industry } from "./types";

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
      "Hiring, plus office support, for owner-run businesses, especially trade and service companies.",
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
  const audience = "Owner-run businesses";
  return [
    service(
      "Hiring for growing businesses",
      "We find, screen and line up candidates for field and office roles, and handle new-hire paperwork. One flat monthly fee, no per-hire commissions.",
      audience,
      "/#hiring",
    ),
    service(
      "Office support for growing businesses",
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

export function cityServiceSchema(c: City, path: string) {
  return {
    ...service(`Hiring for cleaning companies in ${c.region}`, c.seo.description, "Cleaning companies", path),
    areaServed: [{ "@type": "AdministrativeArea", name: c.region }, ...c.areas.map((a) => ({ "@type": "Place", name: a }))],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}
