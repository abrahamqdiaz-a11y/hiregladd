import { thankYou } from "@/content/en/site";
import { pageMetadata } from "@/lib/seo";
import { Container, ButtonLink } from "@/components/ui";
import { BookingLink } from "@/components/BookingLink";
import { Icon } from "@/components/Icon";

export const metadata = pageMetadata({
  title: thankYou.seo.title,
  description: thankYou.seo.description,
  path: "/thank-you/",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white">
          <Icon name="check" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">{thankYou.heading}</h1>
        <p className="mt-5 text-lg text-muted sm:text-xl">{thankYou.body}</p>
        <div className="mt-10">
          <BookingLink body={thankYou.bookingBody} />
        </div>
        <div className="mt-10">
          <ButtonLink href="/" variant="secondary">{thankYou.back}</ButtonLink>
        </div>
      </div>
    </Container>
  );
}
