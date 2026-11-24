import { about, home } from "@/content/en/site";
import { pageMetadata } from "@/lib/seo";
import { isPlaceholder } from "@/lib/site";
import { Section, H2, Placeholder } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/sections";

export const metadata = pageMetadata({
  title: about.seo.title,
  description: about.seo.description,
  path: "/about/",
});

export default function AboutPage() {
  const { founder } = about;
  const bioReady = !isPlaceholder(founder.bio) && !isPlaceholder(founder.name);

  return (
    <>
      <PageHero eyebrow="About us" title={about.heading} intro={about.intro} />

      <Section labelledBy="about-body">
        <h2 id="about-body" className="sr-only">About us</h2>
        <div className="mx-auto max-w-3xl space-y-14">
          {about.sections.map((s) => (
            <div key={s.heading}>
              <H2>{s.heading}</H2>
              {s.body.map((p) => (
                <p key={p} className="mt-4 text-lg text-muted">{p}</p>
              ))}
            </div>
          ))}

          {bioReady ? (
            <div>
              <H2>{founder.heading}</H2>
              <p className="mt-4 text-lg font-semibold">
                {founder.name}
                {!isPlaceholder(founder.role) && <span className="font-normal text-muted">, {founder.role}</span>}
              </p>
              <p className="mt-3 text-lg text-muted">{founder.bio}</p>
            </div>
          ) : (
            <Placeholder>
              {founder.heading}: add your name, title and bio in content/en/site.ts → about.founder. This section
              stays hidden on the live site until you fill it in.
            </Placeholder>
          )}
        </div>
      </Section>

      <CtaBand heading={home.finalCta.heading} body={home.finalCta.body} />
    </>
  );
}
