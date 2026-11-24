import { Section, H2, ButtonLink, IconBadge } from "./ui";
import { Icon } from "./Icon";
import { howItWorks, site } from "@/content/en/site";
import type { FAQ } from "@/lib/types";

export function HowItWorks({ tone = "wash" as "wash" | "white", showButton = true }) {
  return (
    <Section tone={tone} labelledBy="how-heading" id="how-it-works">
      <H2 id="how-heading">{howItWorks.heading}</H2>
      <ol className="mt-10 grid gap-6 md:grid-cols-3">
        {howItWorks.steps.map((step, i) => (
          <li key={step.title} className="rounded-xl border border-line bg-white p-6 sm:p-8">
            <span
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-bold text-white"
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <h3 className="mt-5 text-xl font-bold">
              <span className="sr-only">Step {i + 1}: </span>
              {step.title}
            </h3>
            <p className="mt-2 text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
      {showButton && (
        <div className="mt-10">
          <ButtonLink href="/contact/">{site.ctaLabel}</ButtonLink>
        </div>
      )}
    </Section>
  );
}

export function FaqList({ heading, items, id = "faq" }: { heading: string; items: FAQ[]; id?: string }) {
  return (
    <Section labelledBy={`${id}-heading`} id={id}>
      <div className="mx-auto max-w-3xl">
        <H2 id={`${id}-heading`}>{heading}</H2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-2">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-4 py-3 text-lg font-semibold">
                {item.q}
                <Icon name="chevron" className="faq-chevron h-5 w-5 flex-none text-accent transition-transform" />
              </summary>
              <p className="pb-4 text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function CtaBand({ heading, body }: { heading: string; body: string }) {
  return (
    <Section tone="accent" labelledBy="cta-heading">
      <div className="mx-auto max-w-3xl text-center">
        <H2 id="cta-heading">{heading}</H2>
        <p className="mt-4 text-lg text-white/90 sm:text-xl">{body}</p>
        <div className="mt-8">
          <ButtonLink href="/contact/" variant="inverse">
            {site.ctaLabel}
            <Icon name="arrow" className="h-5 w-5" />
          </ButtonLink>
        </div>
      </div>
    </Section>
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
    <ul className={`mt-10 grid gap-8 ${grid}`}>
      {items.map((item) => (
        <li key={item.title}>
          <IconBadge name={item.icon} />
          <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
          <p className="mt-2 text-muted">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
