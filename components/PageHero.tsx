import type { ReactNode } from "react";
import { Container, Eyebrow } from "./ui";

export function PageHero({ title, intro, eyebrow, children }: { title: string; intro?: string; eyebrow?: string; children?: ReactNode }) {
  return (
    <section aria-labelledby="page-heading" className="hero-dark on-dark text-white">
      <Container className="py-16 sm:py-24">
        {eyebrow && <Eyebrow dark>{eyebrow}</Eyebrow>}
        <h1 id="page-heading" className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl">{title}</h1>
        {intro && <p className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl">{intro}</p>}
        {children}
      </Container>
    </section>
  );
}
