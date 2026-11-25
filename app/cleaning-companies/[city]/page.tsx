import Link from "next/link";
import { notFound } from "next/navigation";
import { getCities, getCity, cityPath } from "@/lib/cities";
import { getIndustry } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { cityServiceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { home, site } from "@/content/en/site";
import { Container, Section, H2, Eyebrow, ButtonLink, IconBadge } from "@/components/ui";
import { HowItWorks, FaqList, CtaBand, FeatureGrid } from "@/components/sections";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";

/** One template for every city pillar page. Content: content/en/cities/<slug>.json */

export const dynamicParams = false;

export function generateStaticParams() {
  return getCities().map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return pageMetadata({ title: city.seo.title, description: city.seo.description, path: cityPath(city) });
}

const TOC = [
  { id: "challenges", label: "Why it's hard" },
  { id: "roles", label: "Roles we fill" },
  { id: "areas", label: "Areas" },
  { id: "how-it-works", label: "How it works" },
  { id: "faq", label: "FAQ" },
];

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const industry = getIndustry(city.industry);
  const industryPath = `/industries/${city.industry}/`;
  const others = getCities().filter((c) => c.slug !== city.slug && c.industry === city.industry);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Cleaning companies", path: industryPath },
    { name: city.name, path: cityPath(city) },
  ];

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="hero-dark on-dark overflow-hidden text-white">
        <Container className="relative py-14 sm:py-20 lg:py-24">
          <span aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 text-white/[0.06] lg:block">
            <Icon name="pin" className="h-[24rem] w-[24rem]" strokeWidth={1} />
          </span>
          <nav aria-label="Breadcrumb" className="relative">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/75">
              {crumbs.map((c, i) => (
                <li key={c.path} className="flex items-center gap-2">
                  {i < crumbs.length - 1 ? (
                    <>
                      <Link href={c.path} className="hover:text-white">{c.name}</Link>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span aria-current="page" className="font-semibold text-white">{c.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold">
            <Icon name="pin" className="h-4 w-4 text-accent-glow" />
            {city.hero.eyebrow}
          </p>
          <h1 id="hero-heading" className="relative mt-6 max-w-4xl text-[2.4rem] font-extrabold leading-[1.08] sm:text-6xl">
            {city.hero.headline}
          </h1>
          <p className="relative mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">{city.hero.subhead}</p>
          <div className="relative mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact/" variant="inverse">
              {site.ctaLabel}
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
            <ButtonLink href="#roles" variant="ghost-dark">See the roles we fill</ButtonLink>
          </div>
        </Container>
      </section>

      {/* On this page */}
      <nav aria-label="On this page" className="border-b border-line bg-white">
        <Container className="flex gap-2 overflow-x-auto py-4">
          {TOC.map((t) => (
            <a key={t.id} href={`#${t.id}`} className="whitespace-nowrap rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-accent hover:text-accent">
              {t.label}
            </a>
          ))}
        </Container>
      </nav>

      {/* Intro + pains */}
      <Section labelledBy="intro-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{city.name}</Eyebrow>
            <H2 id="intro-heading">Hiring cleaners in {city.region}</H2>
            {city.intro.map((p) => (
              <p key={p} className="mt-5 text-lg text-muted">{p}</p>
            ))}
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-accent">What owners tell us</p>
            <ul className="mt-5 space-y-6">
              {city.pains.map((p) => (
                <li key={p} className="relative rounded-2xl bg-accent-soft p-6 pl-16">
                  <span className="absolute left-5 top-6 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
                    <Icon name="quote" className="h-5 w-5" />
                  </span>
                  <p className="text-lg font-semibold leading-snug">“{p}”</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Local challenges */}
      <Section tone="wash" labelledBy="challenges-heading" id="challenges">
        <H2 id="challenges-heading" className="max-w-3xl">{city.challenges.heading}</H2>
        <FeatureGrid items={city.challenges.items} cols={4} />
      </Section>

      {/* Roles */}
      <Section labelledBy="roles-heading" id="roles">
        <div className="max-w-2xl">
          <Eyebrow>Hiring</Eyebrow>
          <H2 id="roles-heading">Roles we fill in {city.name}</H2>
          <p className="mt-5 text-lg text-muted sm:text-xl">
            We find people, talk to them first and only send you the ones who are ready to work. You interview, you decide.
          </p>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {city.roles.map((r) => (
            <li key={r.title} className="flex gap-4 rounded-2xl border border-line bg-white p-6 shadow-sm">
              <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <span>
                <strong className="block text-lg font-bold">{r.title}</strong>
                <span className="text-muted">{r.note}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/contact/">
            {site.ctaLabel}
            <Icon name="arrow" className="h-5 w-5" />
          </ButtonLink>
        </div>
      </Section>

      {/* Areas */}
      <Section tone="dots" labelledBy="areas-heading" id="areas">
        <div className="flex items-start gap-4">
          <IconBadge name="pin" />
          <H2 id="areas-heading">Where we hire</H2>
        </div>
        <ul className="mt-8 flex flex-wrap gap-2">
          {city.areas.map((a) => (
            <li key={a} className="rounded-full border border-accent-line bg-white px-4 py-2 text-base font-semibold text-accent-dark shadow-sm">
              {a}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-lg text-muted">{city.areasNote}</p>
      </Section>

      <HowItWorks showButton={false} content={home.howItWorks} />

      {/* Promise */}
      <Section tone="wash" labelledBy="promise-heading">
        <H2 id="promise-heading">{home.promise.heading}</H2>
        <FeatureGrid items={home.promise.items} cols={3} />
      </Section>

      {/* Office support (smaller, second offer) */}
      <section aria-labelledby="office-heading" className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="on-dark relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-dark p-6 text-white sm:p-10">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative flex items-start gap-4">
              <IconBadge name="inbox" dark />
              <div>
                <h2 id="office-heading" className="text-3xl font-extrabold sm:text-4xl">{home.office.heading}</h2>
                <p className="mt-2 text-lg text-white/85">{home.office.body}</p>
              </div>
            </div>
            <ul className="relative mt-8 grid gap-4 md:grid-cols-3">
              {city.officeTasks.map((t) => (
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
            <ButtonLink href="/contact/" variant="inverse" className="relative mt-8">
              {home.office.button}
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <FaqList heading={`Hiring cleaners in ${city.name}: common questions`} items={city.faqs} />

      {/* Other cities + back to the industry page */}
      <Section labelledBy="more-heading">
        <H2 id="more-heading">We also hire for cleaning companies in</H2>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {others.map((c) => (
            <li key={c.slug}>
              <Link href={cityPath(c)} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10">
                <span className="flex items-center gap-2 text-xl font-extrabold">
                  <Icon name="pin" className="h-5 w-5 text-accent" />
                  {c.name}
                </span>
                <span className="mt-2 flex-1 text-muted">{c.summary}</span>
                <span className="mt-4 inline-flex items-center gap-2 font-bold text-accent">
                  Hiring cleaners in {c.name}
                  <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        {industry && (
          <p className="mt-8 text-lg text-muted">
            Somewhere else?{" "}
            <Link href={industryPath} className="font-bold text-accent underline underline-offset-4 hover:text-accent-dark">
              See how we help cleaning companies
            </Link>{" "}
            or{" "}
            <Link href="/contact/" className="font-bold text-accent underline underline-offset-4 hover:text-accent-dark">
              book a call
            </Link>
            .
          </p>
        )}
      </Section>

      <CtaBand heading={city.cta.heading} body={city.cta.body} />

      <JsonLd data={[cityServiceSchema(city, cityPath(city)), faqSchema(city.faqs), breadcrumbSchema(crumbs)]} />
    </>
  );
}
