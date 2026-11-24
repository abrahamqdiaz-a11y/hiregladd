import { contact } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { pageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { BookingLink } from "@/components/BookingLink";

export const metadata = pageMetadata({
  title: contact.seo.title,
  description: contact.seo.description,
  path: "/contact/",
});

export default function ContactPage() {
  const industries = getIndustries().map((i) => i.name);
  return (
    <>
      <PageHero eyebrow="Get started" title={contact.heading} intro={contact.intro} />
      <Section tone="dots" className="!pt-10 sm:!pt-14">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="rounded-3xl border border-line bg-white p-6 shadow-xl shadow-accent/5 sm:p-10 lg:col-span-2">
            <ContactForm industries={industries} />
          </div>
          <div className="lg:pt-1">
            <BookingLink />
          </div>
        </div>
      </Section>
    </>
  );
}
