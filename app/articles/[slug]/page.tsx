import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles, getArticle, articlePath, formatDate } from "@/lib/articles";
import { getIndustry } from "@/lib/industries";
import { getCities, cityPath } from "@/lib/cities";
import { pageMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/content/en/site";
import { Container, ButtonLink } from "@/components/ui";
import { CtaBand } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";

export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({
    title: a.title,
    description: a.description,
    path: articlePath(a),
    type: "article",
    published: a.date,
    modified: a.updated,
    noindex: a.draft,
  });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const path = articlePath(a);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles/" },
    { name: a.title, path },
  ];
  const industries = a.industries.map((s) => getIndustry(s)).filter(Boolean);
  const cities = getCities().filter((c) => a.industries.includes(c.industry));

  return (
    <>
      <article>
        <header className="hero-dark on-dark text-white">
          <Container className="py-14 sm:py-20">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/75">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/articles/" className="hover:text-white">Articles</Link></li>
              </ol>
            </nav>
            <h1 className="mt-6 max-w-4xl text-[2.2rem] font-extrabold leading-[1.1] sm:text-5xl">{a.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80 sm:text-xl">{a.description}</p>
            <p className="mt-6 text-sm font-semibold text-white/75">
              By the HireGladd team · <time dateTime={a.date}>{formatDate(a.date)}</time>
              {a.updated && a.updated !== a.date && (
                <> · Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time></>
              )}
              {" "}· {a.minutes} min read
            </p>
          </Container>
        </header>

        <Container className="grid grid-cols-1 gap-12 py-14 sm:py-20 lg:grid-cols-[1fr_18rem]">
          <div className="min-w-0 max-w-3xl">
            {a.draft && (
              <p role="note" className="mb-8 rounded-xl border-2 border-dashed border-amber-500 bg-amber-50 p-4 text-base text-amber-950">
                <strong>DRAFT.</strong> This article is hidden on the live site until you set <code>draft: false</code>.
              </p>
            )}
            <div className="prose" dangerouslySetInnerHTML={{ __html: a.html }} />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="Article sidebar">
            {a.headings.length > 2 && (
              <nav aria-label="In this article" className="rounded-2xl border border-line bg-wash p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">In this article</p>
                <ol className="mt-4 space-y-2 text-base">
                  {a.headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-ink hover:text-accent">{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <div className="on-dark rounded-2xl bg-gradient-to-br from-accent to-accent-dark p-6 text-white">
              <p className="text-xl font-extrabold">Need people now?</p>
              <p className="mt-2 text-white/85">We find and screen them for one flat monthly fee. You only meet people worth your time.</p>
              <ButtonLink href="/contact/" variant="inverse" className="mt-5 w-full">
                {site.ctaLabel}
              </ButtonLink>
            </div>
            {(industries.length > 0 || cities.length > 0) && (
              <nav aria-label="Related pages" className="rounded-2xl border border-line p-6">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">Related</p>
                <ul className="mt-4 space-y-2 text-base">
                  {industries.map((i) => (
                    <li key={i!.slug}>
                      <Link href={`/industries/${i!.slug}/`} className="inline-flex items-center gap-2 text-ink hover:text-accent">
                        <Icon name={i!.icon} className="h-4 w-4 text-accent" />
                        Hiring for {i!.name.toLowerCase()}
                      </Link>
                    </li>
                  ))}
                  {cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={cityPath(c)} className="inline-flex items-center gap-2 text-ink hover:text-accent">
                        <Icon name="pin" className="h-4 w-4 text-accent" />
                        Hiring cleaners in {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </aside>
        </Container>
      </article>

      <CtaBand
        heading="Rather have someone else do the hiring?"
        body="Book a short call. Tell us which roles you need to fill, and we'll tell you plainly how we'd fill them."
      />

      <JsonLd data={[articleSchema(a, path), breadcrumbSchema(crumbs)]} />
    </>
  );
}
