# HireGladd — hiregladd.com

Marketing site for HireGladd, built with Next.js (App Router) + Tailwind CSS, exported as static HTML and hosted on Netlify.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in out/
```

## Before launch: fill these in

| What | Where |
|---|---|
| Calendar booking link `[BOOKING LINK]` | `content/en/site.ts` → `site.bookingUrl` |
| Contact email / phone (optional, footer + privacy) | `content/en/site.ts` → `site.contactEmail`, `site.contactPhone` |
| Your name, title and bio | `content/en/site.ts` → `about.founder` |
| Real proof (quotes / results, with permission) | `content/en/site.ts` → `home.proof.items` |
| Privacy policy review (draft) | `app/privacy/page.tsx` |

Placeholders show as yellow dashed boxes on local builds and Netlify deploy previews. On the live production site they're hidden until filled in.

## Editing copy

All wording lives in `content/en/`:

- `content/en/site.ts`: homepage, about, contact, thank-you and shared copy (nav, footer, How it works).
- `content/en/industries/*.json`: one file per industry page.

### Adding an industry

Copy one of the files in `content/en/industries/`, give it a new `slug`, `order` and content, and save it. The new page at `/industries/<slug>/`, the industries index, the homepage row, the footer, the form's industry dropdown and the sitemap all update automatically. The build fails with a clear message if a field is missing, if there aren't exactly 3 pains, or if there aren't 4–5 FAQs.

Each industry must have its own roles, tasks, pains and FAQs. Don't copy text and only swap the industry name.

## Contact form (Netlify Forms)

- The form is `components/ContactForm.tsx`.
- Netlify detects it from the plain-HTML copy in `public/__forms.html`. **If you add, remove or rename a field, update both files.**
- Spam protection: a hidden honeypot field (`bot-field`).
- After sending, visitors land on `/thank-you/`.
- Submissions appear in Netlify → Site → Forms. Set up email notifications there.

## Spanish later

Copy lives under `content/en/`, and `lib/types.ts` has a `Locale` type. To add Spanish: create `content/es/` with the same shape, add `"es"` to `Locale`, and add `/es/` routes that read from it.

## SEO

- Unique title, description, canonical URL and Open Graph tags per page (`lib/seo.ts`).
- Organization schema on every page; Service and FAQ schema on the homepage and industry pages (`lib/schema.ts`).
- `sitemap.xml` and `robots.txt` are generated at build time.
- Social share image: `public/og.png` (regenerate with `node scripts/make-images.mjs`).

## Deploy (Netlify)

`netlify.toml` sets build command `npm run build` and publish directory `out`. Connect this GitHub repo in Netlify, and it deploys on every push.
