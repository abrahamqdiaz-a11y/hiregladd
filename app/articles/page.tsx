import Link from "next/link";
import { getArticles, articlePath, formatDate } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections";
import { Icon } from "@/components/Icon";

export const metadata = pageMetadata({
  title: "Articles on hiring for owner-run businesses",
  description: "Plain advice for owners of cleaning, roofing and HVAC, plumbing and electrical companies on hiring, keeping good people and running the office.",
  path: "/articles/",
});

export default function ArticlesPage() {
  const articles = getArticles();
  return (
    <>
      <PageHero
        eyebrow="Articles"
        title="Hiring advice for busy owners"
        intro="Short, practical reads on finding good people, getting them to show up and keeping them."
      />
      <Section tone="dots" labelledBy="list-heading">
        <h2 id="list-heading" className="sr-only">All articles</h2>
        <ul className="grid gap-5 md:grid-cols-2">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={articlePath(a)}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 sm:p-8"
              >
                <span className="text-sm font-semibold text-muted">
                  {formatDate(a.date)} · {a.minutes} min read{a.draft ? " · DRAFT" : ""}
                </span>
                <h3 className="mt-3 text-2xl font-extrabold leading-snug group-hover:text-accent">{a.title}</h3>
                <p className="mt-3 flex-1 text-muted">{a.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-bold text-accent">
                  Read the article
                  <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand
        heading="Rather have someone else do the hiring?"
        body="Book a short call. Tell us which roles you need to fill, and we'll tell you plainly how we'd fill them."
      />
    </>
  );
}
