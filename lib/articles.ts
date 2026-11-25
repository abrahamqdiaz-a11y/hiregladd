import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";
import type { Locale } from "./types";

/**
 * Articles are Markdown files in content/<locale>/articles/<slug>.md with this front matter:
 *
 * ---
 * title: "How to hire cleaners who actually show up"
 * description: "One or two sentences for Google and social previews (under 160 characters)."
 * date: 2026-11-25          # first published
 * updated: 2026-11-25       # optional, last meaningful edit
 * industries: [commercial-cleaning]   # optional: shows the article on these industry and city pages
 * draft: false              # true = hidden on the live site
 * ---
 *
 * Use ## for section headings; they become the "In this article" list.
 */
export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  industries: string[];
  draft: boolean;
  html: string;
  headings: { id: string; text: string }[];
  minutes: number;
};

const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const isoDate = (v: unknown) => (v instanceof Date ? v.toISOString().slice(0, 10) : v ? String(v) : undefined);

function render(md: string) {
  const headings: Article["headings"] = [];
  const renderer = new marked.Renderer();
  renderer.heading = ({ tokens, depth }) => {
    const text = tokens.map((t) => ("text" in t ? t.text : "")).join("");
    const inner = marked.Parser.parseInline(tokens);
    if (depth === 2) {
      const id = slugify(text);
      headings.push({ id, text });
      return `<h2 id="${id}">${inner}</h2>`;
    }
    return `<h${depth}>${inner}</h${depth}>`;
  };
  const html = marked.parse(md, { renderer, async: false }) as string;
  return { html, headings };
}

function load(locale: Locale): Article[] {
  const dir = path.join(process.cwd(), "content", locale, "articles");
  if (!fs.existsSync(dir)) return [];
  const showDrafts = process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS !== "false";
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(dir, file), "utf8"));
      const where = `content/${locale}/articles/${file}`;
      for (const k of ["title", "description", "date"]) if (!data[k]) throw new Error(`${where} is missing "${k}"`);
      const { html, headings } = render(content);
      return {
        slug: file.replace(/\.md$/, ""),
        title: String(data.title),
        description: String(data.description),
        date: isoDate(data.date)!,
        updated: isoDate(data.updated),
        industries: (data.industries as string[]) ?? [],
        draft: Boolean(data.draft),
        html,
        headings,
        minutes: Math.max(1, Math.round(content.split(/\s+/).length / 220)),
      };
    })
    .filter((a) => showDrafts || !a.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticles(locale: Locale = "en"): Article[] {
  return load(locale);
}

export function getArticle(slug: string, locale: Locale = "en"): Article | undefined {
  return load(locale).find((a) => a.slug === slug);
}

export function articlesFor(industry: string, locale: Locale = "en"): Article[] {
  return load(locale).filter((a) => a.industries.includes(industry));
}

export const articlePath = (a: { slug: string }) => `/articles/${a.slug}/`;

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}
