import { notFound } from "next/navigation";
import { getIndustries, getIndustry } from "@/lib/industries";
import { getCities, cityPath } from "@/lib/cities";
import { articlesFor, articlePath } from "@/lib/articles";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { industryServiceSchema, faqSchema } from "@/lib/schema";
import { site } from "@/content/en/site";
import { Container, Section, H2, Eyebrow, ButtonLink, IconBadge } from "@/components/ui";
import { HowItWorks, FaqList, CtaBand } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import type { Role } from "@/lib/types";

/** One template for every industry. Content comes from content/en/industries/<slug>.json */

export const dynamicParams = false;

export function generateStaticParams() {
  return getIndustries().map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({
    title: industry.seo.title,
    description: industry.seo.description,
    path: `/industries/${industry.slug}/`,
  });
}

function RoleList({ title, icon, roles }: { title: string; icon: string; roles: Role[] }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-4">
        <IconBadge name={icon} size="lg" />
        <h3 className="text-2xl font-extrabold">{title}</h3>
      </div>
      <ul className="mt-6 divide-y divide-line">
        {roles.map((r) => (
          <li key={r.title} className="flex gap-3 py-4 first:pt-0 last:pb-0">
            <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon name="check" className="h-4 w-4" />
            </span>
            <span>
              <strong className="block text-lg font-bold">{r.title}</strong>
              <span className="text-muted">{r.note}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const cities = getCities().filter((c) => c.industry === industry.slug);
  const related = articlesFor(industry.slug);

  return (
    <>
      <section aria-labelledby="hero-heading" className="hero-dark on-dark overflow-hidden text-white">
        <Container className="relative py-16 sm:py-24 lg:py-28">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 text-white/[0.06] lg:block"
          >
            <Icon name={industry.icon} className="h-[26rem] w-[26rem]" strokeWidth={1} />
          </span>
          <p className="relative inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            <Icon name={industry.icon} className="h-4 w-4 text-accent-glow" />
            {industry.name}
          </p>
          <h1 id="hero-heading" className="relative mt-6 max-w-4xl text-[2.6rem] font-extrabold leading-[1.05] sm:text-7xl">
            {industry.hero.headline}
          </h1>
          <p className="relative mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">{industry.hero.subhead}</p>
          <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact/" variant="inverse">
              {site.ctaLabel}
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="#hiring" variant="ghost-dark">See the roles we fill</ButtonLink>
          </div>
        </Container>
      </section>

      {/* Pain points, in the owner's own words */}
      <Section labelledBy="pains-heading">
        <div className="max-w-2xl">
          <Eyebrow>What we hear</Eyebrow>
          <H2 id="pains-heading">Sound familiar?</H2>
        </div>
        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {industry.pains.map((p) => (
            <li key={p} className="relative rounded-2xl bg-accent-soft p-6 pt-10 sm:p-8 sm:pt-12">
              <span className="absolute -top-5 left-6 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-white shadow-lg shadow-accent/30 sm:left-8">
                <Icon name="quote" className="h-6 w-6" />
              </span>
              <p className="text-xl font-semibold leading-snug">“{p}”</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Roles */}
      <Section tone="dots" labelledBy="roles-heading" id="hiring">
        <div className="max-w-2xl">
          <Eyebrow>Hiring</Eyebrow>
          <H2 id="roles-heading">Roles we hire for</H2>
          <p className="mt-5 text-lg text-muted sm:text-xl">
            We find, screen and line up candidates, and handle the new-hire paperwork.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <RoleList title="In the field" icon="hardhat" roles={industry.roles.field} />
          <RoleList title="In the office" icon="users" roles={industry.roles.office} />
        </div>
        <div className="mt-10">
          <ButtonLink href="/contact/">
            {site.ctaLabel}
            <Icon name="arrow" className="h-5 w-5" />
          </ButtonLink>
        </div>
      </Section>

      <HowItWorks showButton={false} />

      {/* Office support: smaller, second offer */}
      <section id="office-support" aria-labelledby="tasks-heading" className="bg-paper pb-16 sm:pb-24">
        <Container>
          <div className="on-dark relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-dark p-6 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative flex items-start gap-4">
              <IconBadge name="inbox" dark />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent-glow">Office support</p>
                <h2 id="tasks-heading" className="mt-1 text-3xl font-extrabold sm:text-4xl">Need help in the office too?</h2>
                <p className="mt-2 text-lg text-white/85">
                  We can also work as your office team, inside your own phone, email and job software.
                </p>
              </div>
            </div>
            <ul className="relative mt-8 grid gap-4 md:grid-cols-2">
              {industry.officeTasks.map((t) => (
                <li key={t.title} className="flex gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/20">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  <span>
                    <strong className="block font-bold">{t.title}</strong>
                    <span className="text-base text-white/80">{t.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {cities.length > 0 && (
        <Section tone="wash" labelledBy="cities-heading" id="cities">
          <Eyebrow>Cities</Eyebrow>
          <H2 id="cities-heading">Where we hire</H2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={cityPath(c)} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10">
                  <span className="flex items-center gap-2 text-xl font-extrabold">
                    <Icon name="pin" className="h-5 w-5 text-accent" />
                    {c.name}
                  </span>
                  <span className="mt-2 flex-1 text-muted">{c.summary}</span>
                  <span className="mt-4 inline-flex items-center gap-2 font-bold text-accent">
                    See {c.name}
                    <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {related.length > 0 && (
        <Section labelledBy="reading-heading">
          <Eyebrow>Articles</Eyebrow>
          <H2 id="reading-heading">Read next</H2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {related.map((a) => (
              <li key={a.slug}>
                <Link href={articlePath(a)} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10">
                  <span className="text-xl font-extrabold group-hover:text-accent">{a.title}</span>
                  <span className="mt-2 flex-1 text-muted">{a.description}</span>
                  <span className="mt-4 inline-flex items-center gap-2 font-bold text-accent">
                    Read the article
                    <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <FaqList heading={`${industry.name}: common questions`} items={industry.faqs} />
      <CtaBand heading={industry.cta.heading} body={industry.cta.body} />

      <JsonLd data={[industryServiceSchema(industry), faqSchema(industry.faqs)]} />
    </>
  );
}
