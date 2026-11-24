import { industriesIndex, site } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { Section, H2, ButtonLink } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { IndustryCards } from "@/components/IndustryCards";
import { HowItWorks, CtaBand } from "@/components/sections";

export const metadata = pageMetadata({
  title: industriesIndex.seo.title,
  description: industriesIndex.seo.description,
  path: "/industries/",
});

export default function IndustriesPage() {
  const industries = getIndustries();
  return (
    <>
      <PageHero eyebrow="Industries" title={industriesIndex.heading} intro={industriesIndex.intro} />

      <Section labelledBy="list-heading" className="!pt-6 sm:!pt-10">
        <h2 id="list-heading" className="sr-only">Industries</h2>
        <IndustryCards industries={industries} linkLabel={industriesIndex.cardLink} />
      </Section>

      <HowItWorks tone="wash" showButton={false} />

      <CtaBand heading={industriesIndex.notListed.heading} body={industriesIndex.notListed.body} />
    </>
  );
}
