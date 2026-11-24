import Link from "next/link";
import { site } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { isPlaceholder } from "@/lib/site";

export function SiteFooter() {
  const industries = getIndustries();
  const year = new Date().getFullYear();
  const email = isPlaceholder(site.contactEmail) ? null : site.contactEmail;
  const phone = isPlaceholder(site.contactPhone) ? null : site.contactPhone;

  return (
    <footer className="border-t border-line bg-wash">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-ink">
            Gladd<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-sm text-muted">{site.footer.tagline}</p>
          {(email || phone) && (
            <ul className="mt-4 space-y-1 text-base">
              {phone && (
                <li>
                  <a className="font-medium text-ink hover:text-accent" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                    {phone}
                  </a>
                </li>
              )}
              {email && (
                <li>
                  <a className="font-medium text-ink hover:text-accent" href={`mailto:${email}`}>
                    {email}
                  </a>
                </li>
              )}
            </ul>
          )}
        </div>

        <nav aria-label="Industries">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Industries</h2>
          <ul className="mt-3 space-y-2 text-base">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}/`} className="text-ink hover:text-accent">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-bold uppercase tracking-wide text-muted">Company</h2>
          <ul className="mt-3 space-y-2 text-base">
            <li><Link href="/about/" className="text-ink hover:text-accent">About</Link></li>
            <li><Link href="/contact/" className="text-ink hover:text-accent">{site.ctaLabel}</Link></li>
            <li><Link href="/privacy/" className="text-ink hover:text-accent">{site.footer.privacy}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-sm text-muted sm:flex-row sm:justify-between sm:px-8">
          <p>© {year} Gladd. All rights reserved.</p>
          <p>{site.footer.parent}</p>
        </div>
      </div>
    </footer>
  );
}
