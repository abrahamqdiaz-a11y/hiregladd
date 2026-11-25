import fs from "node:fs";
import path from "node:path";
import type { City, Locale } from "./types";

/**
 * City pillar pages come from JSON files in content/<locale>/cities/.
 * Add a file there and the page, the sitemap, the cross-links between cities
 * and the "Where we hire" list on its industry page all update. No layout changes.
 */
const REQUIRED: (keyof City)[] = [
  "slug", "order", "industry", "name", "region", "summary", "seo", "hero", "intro", "pains",
  "challenges", "roles", "areas", "areasNote", "officeTasks", "faqs", "cta",
];

function load(locale: Locale): City[] {
  const dir = path.join(process.cwd(), "content", locale, "cities");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((file) => {
      const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")) as City;
      const where = `content/${locale}/cities/${file}`;
      const missing = REQUIRED.filter((k) => data[k] === undefined);
      if (missing.length) throw new Error(`${where} is missing: ${missing.join(", ")}`);
      if (data.pains.length !== 3) throw new Error(`${where} needs exactly 3 pains`);
      if (data.faqs.length < 4 || data.faqs.length > 7) throw new Error(`${where} needs 4–7 FAQs`);
      return data;
    })
    .sort((a, b) => a.order - b.order);
}

export function getCities(locale: Locale = "en"): City[] {
  return load(locale);
}

export function getCity(slug: string, locale: Locale = "en"): City | undefined {
  return load(locale).find((c) => c.slug === slug);
}

/** URL of a city page. Cleaning cities live under /cleaning-companies/. */
export function cityPath(c: City): string {
  return `/cleaning-companies/${c.slug}/`;
}
