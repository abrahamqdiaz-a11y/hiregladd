import { Container } from "./ui";

export function PageHero({ title, intro }: { title: string; intro?: string }) {
  return (
    <section aria-labelledby="page-heading" className="border-b border-line bg-gradient-to-b from-accent-soft to-white">
      <Container className="py-14 sm:py-20">
        <h1 id="page-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">{intro}</p>}
      </Container>
    </section>
  );
}
