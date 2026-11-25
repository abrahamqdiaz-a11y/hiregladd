import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui";
import { UnsubscribeForm } from "@/components/UnsubscribeForm";

export const metadata = pageMetadata({
  title: "Unsubscribe",
  description: "Stop getting emails from HireGladd.",
  path: "/unsubscribe/",
  noindex: true,
});

export default function UnsubscribePage() {
  return (
    <section className="bg-wash dots-light py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-line bg-white p-6 shadow-xl shadow-accent/5 sm:p-10">
          <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">Unsubscribe from our emails</h1>
          <p className="mt-4 text-lg text-muted">
            Enter your email address and we&apos;ll take you off our email list.
          </p>
          <div className="mt-8">
            <UnsubscribeForm />
          </div>
          <p className="mt-8 text-base text-muted">
            Questions about your information? See our{" "}
            <Link href="/privacy/" className="font-medium text-accent underline underline-offset-2">
              privacy policy
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
