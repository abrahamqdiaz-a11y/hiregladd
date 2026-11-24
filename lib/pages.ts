import fs from "node:fs";
import path from "node:path";
import { getIndustry } from "./industries";

/**
 * True if the site has a page at this internal path (checked at build time).
 * Used so links to pages that don't exist yet show as plain text instead.
 */
export function pageExists(href: string): boolean {
  const clean = href.split("#")[0].replace(/^\/+|\/+$/g, "");
  const industry = clean.match(/^industries\/([^/]+)$/);
  if (industry) return Boolean(getIndustry(industry[1]));
  return fs.existsSync(path.join(process.cwd(), "app", clean, "page.tsx"));
}
