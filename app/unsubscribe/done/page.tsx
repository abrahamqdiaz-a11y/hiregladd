import { pageMetadata } from "@/lib/seo";
import { Container, ButtonLink } from "@/components/ui";
import { Icon } from "@/components/Icon";

export const metadata = pageMetadata({
  title: "You've been unsubscribed",
  description: "Your unsubscribe request was received.",
  path: "/unsubscribe/done/",
  noindex: true,
});

export default function UnsubscribeDonePage() {
  return (
    <section className="bg-wash dots-light py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-6 shadow-xl shadow-accent/5 sm:p-10">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
            <Icon name="check" className="h-8 w-8" />
          </span>
          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">Got it. We&apos;ve received your request.</h1>
          <p className="mt-4 text-lg text-muted">
            We&apos;ll take you off our email list. If you unsubscribed by mistake, just reply to any of our emails or
            book a call, and we&apos;ll add you back.
          </p>
          <div className="mt-8">
            <ButtonLink href="/" variant="secondary">Back to the homepage</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
