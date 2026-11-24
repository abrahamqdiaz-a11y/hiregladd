export const SITE_URL = "https://hiregladd.com";
export const SITE_NAME = "HireGladd";
export const PARENT_COMPANY = "EchelonFox";

/** True in local builds and Netlify deploy previews; false on the live site. */
export const SHOW_PLACEHOLDERS = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false";

/** A content value counts as "not filled in" while it still looks like [SOMETHING]. */
export function isPlaceholder(value: string | null | undefined): boolean {
  return !value || /^\[.*\]$/.test(value.trim());
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
