import fs from "node:fs";
import path from "node:path";
import type { Industry, Locale } from "./types";

/**
 * Industry pages are driven entirely by JSON files in content/<locale>/industries/.
 * Add a new file there and the page, the industries index, the homepage row,
 * the contact form dropdown and the sitemap all pick it up. No layout changes needed.
 */
const REQUIRED: (keyof Industry)[] = [
  "slug", "order", "name", "icon", "summary", "seo", "hero",
  "roles", "officeTasks", "pains", "faqs", "cta",
];

function load(locale: Locale): Industry[] {
  const dir = path.join(process.cwd(), "content", locale, "industries");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8")) as Industry;
      const missing = REQUIRED.filter((k) => data[k] === undefined);
      if (missing.length) {
        throw new Error(`content/${locale}/industries/${file} is missing: ${missing.join(", ")}`);
      }
      if (data.pains.length !== 3) {
        throw new Error(`content/${locale}/industries/${file} needs exactly 3 pains`);
      }
      if (data.faqs.length < 4 || data.faqs.length > 5) {
        throw new Error(`content/${locale}/industries/${file} needs 4–5 FAQs`);
      }
      return data;
    })
    .sort((a, b) => a.order - b.order);
}

export function getIndustries(locale: Locale = "en"): Industry[] {
  return load(locale);
}

export function getIndustry(slug: string, locale: Locale = "en"): Industry | undefined {
  return load(locale).find((i) => i.slug === slug);
}
