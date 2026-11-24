import { notFound as copy } from "@/content/en/site";
import { Container, ButtonLink } from "@/components/ui";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="text-4xl font-extrabold tracking-tight">{copy.heading}</h1>
      <p className="mt-4 text-lg text-muted">{copy.body}</p>
      <div className="mt-8">
        <ButtonLink href="/">{copy.back}</ButtonLink>
      </div>
    </Container>
  );
}
