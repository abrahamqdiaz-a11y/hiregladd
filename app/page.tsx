import Link from "next/link";
import { home, site } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { homeServicesSchema, faqSchema } from "@/lib/schema";
import { Container, Section, H2, ButtonLink, CheckList, IconBadge, Placeholder } from "@/components/ui";
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

export default function HomePage() {
  const industries = getIndustries();
  const { hiring, office } = home.offers;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="border-b border-line bg-gradient-to-b from-accent-soft to-white">
        <Container className="py-16 sm:py-28">
          <p className="text-base font-semibold text-accent">{home.hero.eyebrow}</p>
          <h1 id="hero-heading" className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{home.hero.subhead}</p>
          <div className="mt-10">
            <ButtonLink href="/contact/">
              {site.ctaLabel}
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* The problem */}
      <Section labelledBy="problem-heading">
        <H2 id="problem-heading">{home.problem.heading}</H2>
        <FeatureGrid items={home.problem.items} />
        <p className="mt-12 max-w-3xl border-l-4 border-accent pl-5 text-xl font-semibold">{home.problem.closer}</p>
      </Section>

      {/* Two offers */}
      <Section tone="wash" labelledBy="offers-heading">
        <H2 id="offers-heading">{home.offers.heading}</H2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[hiring, office].map((offer) => (
            <article
              key={offer.id}
              id={offer.id}
              aria-labelledby={`${offer.id}-title`}
              className="rounded-xl border border-line bg-white p-6 sm:p-10"
            >
              <IconBadge name={offer.icon} />
              <h3 id={`${offer.id}-title`} className="mt-5 text-2xl font-bold">{offer.title}</h3>
              <p className="mt-3 text-lg text-muted">{offer.body}</p>
              <CheckList items={offer.points} className="mt-6" />
            </article>
          ))}
        </div>
      </Section>

      <HowItWorks tone="white" />

      {/* Why us */}
      <Section tone="wash" labelledBy="why-heading">
        <H2 id="why-heading">{home.why.heading}</H2>
        <FeatureGrid items={home.why.items} cols={4} />
      </Section>

      {/* Industries */}
      <Section labelledBy="industries-heading">
        <H2 id="industries-heading">{home.industries.heading}</H2>
        <IndustryCards industries={industries} linkLabel="See how we help" />
        <p className="mt-8">
          <Link href="/industries/" className="inline-flex items-center gap-2 text-lg font-semibold text-accent hover:text-accent-dark">
            {home.industries.allLink}
            <Icon name="arrow" className="h-5 w-5" />
          </Link>
        </p>
      </Section>

      {/* Proof: hidden on the live site until real items are added */}
      {home.proof.items.length > 0 ? (
        <Section tone="wash" labelledBy="proof-heading">
          <H2 id="proof-heading">{home.proof.heading}</H2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {home.proof.items.map((p) => (
              <li key={p.name + p.company}>
                <figure className="h-full rounded-xl border border-line bg-white p-6 sm:p-8">
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
        <div className="bg-wash py-10">
          <Container>
            <Placeholder>{home.proof.placeholderNote}</Placeholder>
          </Container>
        </div>
      )}

      <FaqList heading={home.faq.heading} items={home.faq.items} />
      <CtaBand heading={home.finalCta.heading} body={home.finalCta.body} />

      <JsonLd data={[...homeServicesSchema(), faqSchema(home.faq.items)]} />
    </>
  );
}
