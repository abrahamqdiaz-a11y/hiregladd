import Link from "next/link";
import { LogoMark } from "./LogoMark";

/**
 * HireGladd logo. `dark` = for dark backgrounds (light-purple mark).
 * `id` must be unique on the page (the header and footer each pass their own).
 */
export function Logo({ dark = false, id }: { dark?: boolean; id: string }) {
  return (
    <Link href="/" aria-label="HireGladd home" className="inline-flex items-center gap-2.5">
      <LogoMark id={id} className={`h-11 w-11 ${dark ? "text-accent-glow" : "text-accent"}`} />
      <span className={`text-2xl font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        <span className={dark ? "text-accent-glow" : "text-accent"}>Hire</span>Gladd
      </span>
    </Link>
  );
}
