import { site, contact } from "@/content/en/site";
import { isPlaceholder } from "@/lib/site";
import { ButtonLink, Placeholder } from "./ui";
import { Icon } from "./Icon";

/** Calendar booking button. Shows a marked placeholder until site.bookingUrl is set. */
export function BookingLink({ body = contact.bookingBody }: { body?: string }) {
  if (isPlaceholder(site.bookingUrl)) {
    return <Placeholder>{contact.bookingPlaceholderNote}</Placeholder>;
  }
  return (
    <div className="rounded-xl border border-line bg-white p-6">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        <Icon name="calendar" className="h-6 w-6 text-accent" />
        {contact.bookingHeading}
      </h2>
      <p className="mt-2 text-muted">{body}</p>
      <ButtonLink href={site.bookingUrl} variant="secondary" external className="mt-5">
        {contact.bookingButton}
        <span className="sr-only"> (opens in a new tab)</span>
      </ButtonLink>
    </div>
  );
}
