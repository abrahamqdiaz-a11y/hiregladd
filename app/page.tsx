import Link from "next/link";
import { home, site } from "@/content/en/site";
import { pageMetadata } from "@/lib/seo";
import { pageExists } from "@/lib/pages";
import { homeServicesSchema, faqSchema } from "@/lib/schema";
import { Container, Section, H2, ButtonLink, CheckList, IconBadge } from "@/components/ui";
import { HowItWorks, FaqList, CtaBand, FeatureGrid } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";

export const metadata = pageMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/",
  absoluteTitle: true,
});

/** 2. Example tracker card. Illustration only, not real client data. */
function RoleBoard() {
  const { board } = home.hero;
  return (
    <figure className="relative min-w-0">
      <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-accent/30 blur-2xl" />
      <div className="relative rounded-3xl border border-white/15 bg-white p-5 text-ink shadow-2xl shadow-black/40 sm:p-7">
        <p className="text-lg font-extrabold">{board.title}</p>
        <ul className="mt-5 space-y-3">
          {board.rows.map((r) => (
            <li key={r.role} className="flex items-center gap-4 rounded-2xl border border-line bg-wash p-3 sm:p-4">
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white text-accent shadow-sm">
                <Icon name={r.icon} className="h-6 w-6" />
              </span>
              <span className="flex min-w-0 flex-1 flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                <span className="font-bold leading-snug">{r.role}</span>
                <span className="inline-flex flex-none items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-xs font-bold text-white sm:text-sm">
                  <Icon name="check" className="h-4 w-4" />
                  {r.status}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <figcaption className="relative mt-4 text-center text-sm text-white/75">{board.caption}</figcaption>
    </figure>
  );
}

export default function HomePage() {
  const { hero, problem, industries, whatYouGet, roles, promise, compare, office, why } = home;

  return (
    <>
      {/* 1. Hero (with 2. example tracker card) */}
      <section aria-labelledby="hero-heading" className="hero-dark on-dark overflow-hidden text-white">
        <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:py-28">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent-glow" />
              {hero.eyebrow}
            </p>
            <h1 id="hero-heading" className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] sm:text-7xl">
              {hero.headline}{" "}
              <span className="bg-gradient-to-r from-accent-glow to-white bg-clip-text text-transparent">
                {hero.headlineAccent}
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">{hero.subhead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact/" variant="inverse">
                {site.ctaLabel}
                <Icon name="arrow" className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink href={`/#${roles.id}`} variant="ghost-dark">
                {hero.secondaryCta}
              </ButtonLink>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold text-white/85">
              {hero.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Icon name="check" className="h-5 w-5 text-accent-glow" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <RoleBoard />
        </Container>
      </section>

      {/* 3. The problem */}
      <Section labelledBy="problem-heading">
        <H2 id="problem-heading">{problem.heading}</H2>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {problem.items.map((item, i) => (
            <li key={item.title} className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <span aria-hidden="true" className="absolute -right-2 -top-6 text-[7rem] font-extrabold leading-none text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <IconBadge name={item.icon} />
                <h3 className="mt-5 text-xl font-extrabold">
                  <span className="sr-only">{String(i + 1).padStart(2, "0")}. </span>
                  {item.title}
                </h3>
                <p className="mt-2 text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-2xl bg-accent px-6 py-5 text-xl font-bold text-white sm:px-8 sm:text-2xl">
          {problem.closer}
        </p>
      </Section>

      {/* 4. Industries */}
      <Section tone="wash" labelledBy="industries-heading">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <H2 id="industries-heading" className="max-w-2xl">{industries.heading}</H2>
          {pageExists("/industries/") && (
            <Link href="/industries/" className="inline-flex items-center gap-2 text-lg font-bold text-accent hover:text-accent-dark">
              {industries.allLink}
              <Icon name="arrow" className="h-5 w-5" />
            </Link>
          )}
        </div>
        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {industries.cards.map((c) => (
            <li key={c.name}>
              <IndustryCard card={c} linked={pageExists(c.href)} />
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg text-muted">
          {industries.notListedBefore}{" "}
          <Link href="/contact/" className="font-bold text-accent underline underline-offset-4 hover:text-accent-dark">
            {industries.notListedLink}
          </Link>{" "}
          {industries.notListedAfter}
        </p>
      </Section>

      {/* 5. What you get */}
      <Section labelledBy="get-heading" id={whatYouGet.id}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <H2 id="get-heading">{whatYouGet.heading}</H2>
            <p className="mt-5 text-lg text-muted sm:text-xl">{whatYouGet.body}</p>
          </div>
          <div>
            <ul className="space-y-3">
              {whatYouGet.points.map((r) => (
                <li key={r.text} className="flex items-center gap-4 rounded-2xl bg-white p-4 font-bold shadow-sm ring-1 ring-line">
                  <IconBadge name={r.icon} />
                  {r.text}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/contact/">
                {site.ctaLabel}
                <Icon name="arrow" className="h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Roles we fill */}
      <Section tone="dots" labelledBy="roles-heading" id={roles.id}>
        <H2 id="roles-heading">{roles.heading}</H2>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 md:items-start">
          {roles.groups.map((g) => (
            <div key={g.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-4">
                <IconBadge name={g.icon} size="lg" />
                <h3 className="text-2xl font-extrabold">{g.title}</h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {g.points.map((p) => (
                  <li key={p} className="rounded-full border border-accent-line bg-accent-soft px-4 py-2 text-base font-semibold text-accent-dark">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. How it works */}
      <HowItWorks showButton={false} content={home.howItWorks} />

      {/* 8. Our promise */}
      <Section tone="wash" labelledBy="promise-heading">
        <H2 id="promise-heading">{promise.heading}</H2>
        <FeatureGrid items={promise.items} cols={3} />
      </Section>

      {/* 9. Comparison table */}
      <Section labelledBy="compare-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center lg:gap-16">
          <H2 id="compare-heading">{compare.heading}</H2>
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-sm">
            <table className="w-full table-fixed text-left text-sm sm:text-base">
              <caption className="sr-only">Typical recruiter compared with HireGladd</caption>
              <thead>
                <tr>
                  <td className="w-[30%] p-3 sm:p-4" />
                  <th scope="col" className="p-3 font-bold text-muted sm:p-4">{compare.columns[0]}</th>
                  <th scope="col" className="bg-accent p-3 font-extrabold text-white sm:p-4">{compare.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {compare.rows.map((r) => (
                  <tr key={r.label} className="border-t border-line">
                    <th scope="row" className="p-3 font-bold sm:p-4">{r.label}</th>
                    <td className="p-3 text-muted sm:p-4">
                      <span className="flex gap-2">
                        <Icon name="x" className="mt-0.5 hidden h-5 w-5 flex-none text-gray-500 sm:block" />
                        {r.them}
                      </span>
                    </td>
                    <td className="bg-accent-soft p-3 font-bold text-accent-dark sm:p-4">
                      <span className="flex gap-2">
                        <Icon name="check" className="mt-0.5 hidden h-5 w-5 flex-none text-accent sm:block" />
                        {r.us}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* 10. Office support */}
      <section id={office.id} aria-labelledby="office-heading" className="bg-paper pb-16 sm:pb-24">
        <Container>
          <div className="on-dark relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-dark p-6 text-white sm:p-10 md:flex md:items-center md:gap-12">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative md:w-1/2">
              <IconBadge name={office.icon} dark />
              <h2 id="office-heading" className="mt-5 text-3xl font-extrabold sm:text-4xl">{office.heading}</h2>
              <p className="mt-3 text-lg text-white/85">{office.body}</p>
            </div>
            <div className="relative mt-8 md:mt-0 md:w-1/2">
              <CheckList items={office.points} dark className="text-lg font-semibold" />
              <ButtonLink href="/contact/" variant="inverse" className="mt-7">
                {office.button}
                <Icon name="arrow" className="h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* 11. Why HireGladd */}
      <section aria-label={why.label} className="bg-paper pb-16 sm:pb-24">
        <Container>
          <FeatureGrid items={why.items} cols={3} />
        </Container>
      </section>

      {/* 12. FAQ */}
      <FaqList heading={home.faq.heading} items={home.faq.items} eyebrow={null} aside={null} />

      {/* 13. Final call to action */}
      <CtaBand heading={home.finalCta.heading} body={home.finalCta.body} />

      <JsonLd data={[...homeServicesSchema(), faqSchema(home.faq.items)]} />
    </>
  );
}

type Card = (typeof home.industries.cards)[number];

/** Industry card. Same design as the industries page cards; unlinked if the page doesn't exist yet. */
function IndustryCard({ card, linked }: { card: Card; linked: boolean }) {
  const inner = (
    <>
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent to-accent-glow" />
      <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
        <Icon name={card.icon} className="h-7 w-7" />
      </span>
      <h3 className="mt-6 text-2xl font-extrabold">{card.name}</h3>
      <p className="mt-2 flex-1 text-muted">{card.body}</p>
      {linked && (
        <span className="mt-6 inline-flex items-center gap-2 font-bold text-accent">
          {card.linkLabel}
          <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  );
  const base = "relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8";
  if (!linked) return <div className={base}>{inner}</div>;
  return (
    <Link
      href={card.href}
      className={`group ${base} transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10`}
    >
      {inner}
    </Link>
  );
}
