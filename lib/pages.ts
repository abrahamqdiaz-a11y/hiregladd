import fs from "node:fs";
import path from "node:path";
import { getIndustry } from "./industries";

const norm = (href: string) => href.split("#")[0].replace(/^\/+|\/+$/g, "");

/** Redirects from public/_redirects (the file Netlify uses), as normalized from → to. */
function redirects(): Map<string, string> {
  const file = path.join(process.cwd(), "public", "_redirects");
  const map = new Map<string, string>();
  if (!fs.existsSync(file)) return map;
  for (const line of fs.readFileSync(file, "utf8").split("\n")) {
    const [from, to] = line.trim().split(/\s+/);
    if (!from || from.startsWith("#") || !to || !to.startsWith("/")) continue;
    map.set(norm(from), to);
  }
  return map;
}

/**
 * True if the site has a page at this internal path (checked at build time),
 * either directly or through a redirect in public/_redirects.
 * Used so links to pages that don't exist yet show as plain text instead.
 */
export function pageExists(href: string, depth = 0): boolean {
  const clean = norm(href);
  const industry = clean.match(/^industries\/([^/]+)$/);
  if (industry) return Boolean(getIndustry(industry[1]));
  if (fs.existsSync(path.join(process.cwd(), "app", clean, "page.tsx"))) return true;
  const target = redirects().get(clean);
  return Boolean(target && depth < 3 && pageExists(target, depth + 1));
}
