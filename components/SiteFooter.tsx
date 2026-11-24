import Link from "next/link";
import { site } from "@/content/en/site";
import { getIndustries } from "@/lib/industries";
import { isPlaceholder } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  const industries = getIndustries();
  const year = new Date().getFullYear();
  const email = isPlaceholder(site.contactEmail) ? null : site.contactEmail;
  const phone = isPlaceholder(site.contactPhone) ? null : site.contactPhone;
  const link = "text-white/80 hover:text-white";

  return (
    <footer className="on-dark bg-night text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo dark />
          <p className="mt-4 max-w-sm text-white/75">{site.footer.tagline}</p>
          {(email || phone) && (
            <ul className="mt-4 space-y-1 text-base">
              {phone && (
                <li>
                  <a className={`font-semibold ${link}`} href={`tel:${phone.replace(/[^\d+]/g, "")}`}>{phone}</a>
                </li>
              )}
              {email && (
                <li>
                  <a className={`font-semibold ${link}`} href={`mailto:${email}`}>{email}</a>
                </li>
              )}
            </ul>
          )}
          <Link
            href="/contact/"
            className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-white px-5 text-base font-bold text-accent hover:bg-accent-soft"
          >
            {site.ctaLabel}
          </Link>
        </div>

        <nav aria-label="Industries">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-accent-glow">Industries</h2>
          <ul className="mt-4 space-y-2 text-base">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link href={`/industries/${i.slug}/`} className={link}>{i.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-accent-glow">Company</h2>
          <ul className="mt-4 space-y-2 text-base">
            <li><Link href="/about/" className={link}>About</Link></li>
            <li><Link href="/contact/" className={link}>{site.ctaLabel}</Link></li>
            <li><Link href="/privacy/" className={link}>{site.footer.privacy}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-6 text-sm text-white/70 sm:flex-row sm:justify-between sm:px-8">
          <p>© {year} HireGladd. All rights reserved.</p>
          <p>{site.footer.parent}</p>
        </div>
      </div>
    </footer>
  );
}
