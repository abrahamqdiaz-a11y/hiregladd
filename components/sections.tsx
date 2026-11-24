import Link from "next/link";
import { Section, H2, ButtonLink, IconBadge, Eyebrow } from "./ui";
import { Icon } from "./Icon";
import { howItWorks, site } from "@/content/en/site";
import type { FAQ } from "@/lib/types";

export function HowItWorks({
  tone = "white",
  showButton = true,
  content = howItWorks,
}: {
  tone?: "white" | "wash";
  showButton?: boolean;
  /** Defaults to the shared copy used on industry pages. */
  content?: { eyebrow?: string; heading: string; steps: { title: string; body: string }[] };
}) {
  return (
    <Section tone={tone} labelledBy="how-heading" id="how-it-works">
      <div className="max-w-2xl">
        {content.eyebrow && <Eyebrow>{content.eyebrow}</Eyebrow>}
        <H2 id="how-heading">{content.heading}</H2>
      </div>
      <ol className="relative mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
        <span
          aria-hidden="true"
          className="absolute left-[2.25rem] right-[2.25rem] top-9 hidden h-0.5 bg-gradient-to-r from-accent via-accent-line to-accent md:block"
        />
        {content.steps.map((step, i) => (
          <li key={step.title} className="relative rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none">
            <span
              className="relative inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-dark text-3xl font-extrabold text-white shadow-lg shadow-accent/30 ring-8 ring-white"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <h3 className="mt-6 text-2xl font-extrabold">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-lg text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      {showButton && (
        <div className="mt-12">
          <ButtonLink href="/contact/">
            {site.ctaLabel}
            <Icon name="arrow" className="h-5 w-5" />
          </ButtonLink>
        </div>
      )}
    </Section>
  );
}

export function FaqList({
  heading,
  items,
  id = "faq",
  eyebrow = "FAQ",
  aside = "Don't see your question? Ask us on a short call.",
}: {
  heading: string;
  items: FAQ[];
  id?: string;
  /** Pass null to hide. */
  eyebrow?: string | null;
  /** Pass null to hide the side note and its Book a call link. */
  aside?: string | null;
}) {
  return (
    <Section tone="wash" labelledBy={`${id}-heading`} id={id}>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <H2 id={`${id}-heading`}>{heading}</H2>
          {aside && (
            <>
              <p className="mt-5 text-lg text-muted">{aside}</p>
              <Link href="/contact/" className="mt-4 inline-flex items-center gap-2 text-lg font-bold text-accent hover:text-accent-dark">
                {site.ctaLabel}
                <Icon name="arrow" className="h-5 w-5" />
              </Link>
            </>
          )}
        </div>
        <div className="space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-line bg-white px-5 shadow-sm open:border-accent-line open:shadow-md sm:px-6">
              <summary className="flex min-h-14 cursor-pointer items-center justify-between gap-4 py-4 text-lg font-bold">
                {item.q}
                <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon name="chevron" className="faq-chevron h-5 w-5 transition-transform" />
                </span>
              </summary>
              <p className="pb-5 text-lg text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CtaBand({ heading, body }: { heading: string; body: string }) {
  return (
    <section aria-labelledby="cta-heading" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="hero-dark on-dark relative overflow-hidden rounded-3xl px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <h2 id="cta-heading" className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/85 sm:text-xl">{body}</p>
          <div className="mt-9">
            <ButtonLink href="/contact/" variant="inverse">
              {site.ctaLabel}
              <Icon name="arrow" className="h-5 w-5" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({
  items,
  cols = 3,
}: {
  items: { icon: string; title: string; body: string }[];
  cols?: 2 | 3 | 4;
}) {
  const grid = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-2 lg:grid-cols-4" }[cols];
  return (
    <ul className={`mt-10 grid gap-5 ${grid}`}>
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-7">
          <IconBadge name={item.icon} />
          <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
          <p className="mt-2 text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
