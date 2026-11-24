import Link from "next/link";
import { home, site } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { homeServicesSchema, faqSchema } from "@/lib/schema";
import { Container, Section, H2, Eyebrow, ButtonLink, CheckList, IconBadge, Placeholder } from "@/components/ui";
import { HowItWorks, FaqList, CtaBand, FeatureGrid } from "@/components/sections";
import { IndustryCards } from "@/components/IndustryCards";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";

export const metadata = pageMetadata({
  title: home.seo.title,
  description: home.seo.description,
  path: "/",
  absoluteTitle: true,
});

/** Illustration of an open-roles board. Example only, not real client data. */
function RoleBoard() {
  const { board } = home.hero;
  return (
    <figure className="relative min-w-0">
      <div aria-hidden="true" className="absolute -inset-4 rounded-[2rem] bg-accent/30 blur-2xl" />
      <div className="relative rounded-3xl border border-white/15 bg-white p-5 text-ink shadow-2xl shadow-black/40 sm:p-7">
        <div className="flex items-center justify-between">
          <p className="text-lg font-extrabold">{board.title}</p>
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
            {board.tag}
          </span>
        </div>
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
      <figcaption className="sr-only">Example of how we track your open roles.</figcaption>
    </figure>
  );
}

export default function HomePage() {
  const industries = getIndustries();
  const { hero, problem, hiring, office, compare, why } = home;

  return (
    <>
      {/* Hero */}
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
              <ButtonLink href="/#hiring" variant="ghost-dark">
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

      {/* The problem */}
      <Section labelledBy="problem-heading">
        <div className="max-w-2xl">
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <H2 id="problem-heading">{problem.heading}</H2>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {problem.items.map((item, i) => (
            <li key={item.title} className="relative overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <span aria-hidden="true" className="absolute -right-2 -top-6 text-[7rem] font-extrabold leading-none text-accent-soft">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <IconBadge name={item.icon} />
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
                <p className="mt-2 text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 rounded-2xl bg-accent px-6 py-5 text-xl font-bold text-white sm:px-8 sm:text-2xl">
          {problem.closer}
        </p>
      </Section>

      {/* Hiring: the main offer */}
      <Section tone="dots" labelledBy="hiring-heading" id={hiring.id}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <Eyebrow>{hiring.eyebrow}</Eyebrow>
            <H2 id="hiring-heading">{hiring.heading}</H2>
            <p className="mt-5 text-lg text-muted sm:text-xl">{hiring.body}</p>
            <ul className="mt-8 space-y-3">
              {hiring.results.map((r) => (
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
          <div className="grid gap-5 self-start sm:grid-cols-2 sm:items-start lg:grid-cols-1 xl:grid-cols-2">
            {hiring.groups.map((g) => (
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
        </div>
      </Section>

      <HowItWorks showButton={false} />

      {/* Office support: the smaller, second offer */}
      <section id={office.id} aria-labelledby="office-heading" className="bg-paper pb-16 sm:pb-24">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-dark p-6 text-white on-dark sm:p-10 md:flex md:items-center md:gap-12">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative md:w-1/2">
              <IconBadge name={office.icon} dark />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-accent-glow">{office.eyebrow}</p>
              <h2 id="office-heading" className="mt-2 text-3xl font-extrabold sm:text-4xl">{office.heading}</h2>
              <p className="mt-3 text-lg text-white/85">{office.body}</p>
            </div>
            <CheckList items={office.points} dark className="relative mt-8 text-lg font-semibold md:mt-0 md:w-1/2" />
          </div>
        </Container>
      </section>

      {/* Why us: flat fee vs commission, plus other reasons */}
      <Section tone="wash" labelledBy="why-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <Eyebrow>{compare.eyebrow}</Eyebrow>
            <H2 id="why-heading">{compare.heading}</H2>
            <p className="mt-5 text-lg text-muted sm:text-xl">{compare.body}</p>
          </div>
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
        <FeatureGrid items={why.items} cols={3} />
      </Section>

      {/* Industries */}
      <Section labelledBy="industries-heading">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow>{home.industries.eyebrow}</Eyebrow>
            <H2 id="industries-heading">{home.industries.heading}</H2>
            <p className="mt-4 text-lg text-muted">{home.industries.body}</p>
          </div>
          <Link href="/industries/" className="inline-flex items-center gap-2 text-lg font-bold text-accent hover:text-accent-dark">
            {home.industries.allLink}
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </div>
        <IndustryCards industries={industries} linkLabel="See how we help" />
      </Section>

      {/* Proof: hidden on the live site until real items are added */}
      {home.proof.items.length > 0 ? (
        <Section tone="wash" labelledBy="proof-heading">
          <H2 id="proof-heading">{home.proof.heading}</H2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {home.proof.items.map((p) => (
              <li key={p.name + p.company}>
                <figure className="h-full rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
                  <Icon name="quote" className="h-8 w-8 text-accent" />
                  <blockquote className="mt-4 text-lg">{p.quote}</blockquote>
                  <figcaption className="mt-5 text-base">
                    <strong>{p.name}</strong>, {p.company}
                    {p.industry ? <span className="text-muted"> · {p.industry}</span> : null}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Section>
      ) : (
        <div className="bg-paper pb-10">
          <Container>
            <Placeholder>{home.proof.placeholderNote}</Placeholder>
          </Container>
        </div>
      )}

      <FaqList heading={home.faq.heading} items={home.faq.items} eyebrow={home.faq.eyebrow} aside={home.faq.aside} />
      <CtaBand heading={home.finalCta.heading} body={home.finalCta.body} />

      <JsonLd data={[...homeServicesSchema(), faqSchema(home.faq.items)]} />
    </>
  );
}
