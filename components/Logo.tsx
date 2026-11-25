import Link from "next/link";

/** HireGladd wordmark. `dark` = for use on dark backgrounds. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="HireGladd home" className="inline-flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-mark.svg" alt="" width={36} height={36} className="h-9 w-9 rounded-lg" />
      <span className={`text-2xl font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        <span className={dark ? "text-accent-glow" : "text-accent"}>Hire</span>Gladd
      </span>
    </Link>
  );
}
