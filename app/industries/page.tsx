import { industriesIndex, site } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { Container, Section, H2, ButtonLink } from "@/components/ui";
import { IndustryCards } from "@/components/IndustryCards";
import { HowItWorks } from "@/components/sections";

export const metadata = pageMetadata({
  title: industriesIndex.seo.title,
  description: industriesIndex.seo.description,
  path: "/industries/",
});

export default function IndustriesPage() {
  const industries = getIndustries();
  return (
    <>
      <section aria-labelledby="page-heading" className="border-b border-line bg-gradient-to-b from-accent-soft to-white">
        <Container className="py-14 sm:py-20">
          <h1 id="page-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            {industriesIndex.heading}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">{industriesIndex.intro}</p>
        </Container>
      </section>

      <Section labelledBy="list-heading" className="!pt-6 sm:!pt-10">
        <h2 id="list-heading" className="sr-only">Industries</h2>
        <IndustryCards industries={industries} linkLabel={industriesIndex.cardLink} />
      </Section>

      <HowItWorks showButton={false} />

      <Section labelledBy="other-heading">
        <div className="max-w-2xl">
          <H2 id="other-heading">{industriesIndex.notListed.heading}</H2>
          <p className="mt-4 text-lg text-muted">{industriesIndex.notListed.body}</p>
          <div className="mt-8">
            <ButtonLink href="/contact/">{site.ctaLabel}</ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
