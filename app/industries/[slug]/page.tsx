import { notFound } from "next/navigation";
import { getIndustries, getIndustry } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { industryServiceSchema, faqSchema } from "@/lib/schema";
import { site } from "@/content/en/site";
import { Container, Section, H2, ButtonLink, IconBadge } from "@/components/ui";
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

function RoleList({ title, roles }: { title: string; roles: Role[] }) {
  return (
    <div className="rounded-xl border border-line bg-white p-6 sm:p-8">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-5 space-y-4">
        {roles.map((r) => (
          <li key={r.title} className="flex gap-3">
            <Icon name="check" className="mt-1 h-5 w-5 flex-none text-accent" />
            <span>
              <strong className="block font-semibold">{r.title}</strong>
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

  return (
    <>
      <section aria-labelledby="hero-heading" className="border-b border-line bg-gradient-to-b from-accent-soft to-white">
        <Container className="py-14 sm:py-24">
          <p className="flex items-center gap-2 text-base font-semibold text-accent">
            <Icon name={industry.icon} className="h-5 w-5" />
            {industry.name}
          </p>
          <h1 id="hero-heading" className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {industry.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{industry.hero.subhead}</p>
          <div className="mt-10">
            <ButtonLink href="/contact/">
              {site.ctaLabel}
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Pain points, in the owner's own words */}
      <Section labelledBy="pains-heading">
        <H2 id="pains-heading">Sound familiar?</H2>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {industry.pains.map((p) => (
            <li key={p} className="rounded-xl border-l-4 border-accent bg-accent-soft p-6 sm:p-8">
              <Icon name="quote" className="h-7 w-7 text-accent" />
              <p className="mt-3 text-lg font-medium">“{p}”</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Roles */}
      <Section tone="wash" labelledBy="roles-heading" id="hiring">
        <div className="flex items-start gap-4">
          <IconBadge name="hardhat" />
          <div>
            <H2 id="roles-heading">Roles we hire for</H2>
            <p className="mt-3 max-w-2xl text-lg text-muted">
              We find, screen and line up candidates, and handle the new-hire paperwork.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <RoleList title="In the field" roles={industry.roles.field} />
          <RoleList title="In the office" roles={industry.roles.office} />
        </div>
        <div className="mt-10">
          <ButtonLink href="/contact/">{site.ctaLabel}</ButtonLink>
        </div>
      </Section>

      <HowItWorks tone="white" showButton={false} />

      {/* Office support: smaller, second offer */}
      <section id="office-support" aria-labelledby="tasks-heading" className="bg-paper pb-16 sm:pb-24">
        <Container>
          <div className="rounded-xl border-2 border-accent-line bg-accent-soft p-6 sm:p-10">
            <div className="flex items-start gap-4">
              <IconBadge name="inbox" />
              <div>
                <h2 id="tasks-heading" className="text-2xl font-bold sm:text-3xl">Need help in the office too?</h2>
                <p className="mt-2 text-lg text-muted">
                  We can also work as your office team, inside your own phone, email and job software.
                </p>
              </div>
            </div>
            <ul className="mt-8 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {industry.officeTasks.map((t) => (
                <li key={t.title} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 flex-none text-accent" />
                  <span>
                    <strong className="block font-semibold">{t.title}</strong>
                    <span className="text-base text-muted">{t.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <FaqList heading={`${industry.name}: common questions`} items={industry.faqs} />
      <CtaBand heading={industry.cta.heading} body={industry.cta.body} />

      <JsonLd data={[industryServiceSchema(industry), faqSchema(industry.faqs)]} />
    </>
  );
}
