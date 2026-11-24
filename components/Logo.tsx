import Link from "next/link";

/** HireGladd wordmark. `dark` = for use on dark backgrounds. */
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" aria-label="HireGladd home" className="inline-flex items-center gap-2.5">
      <span
        aria-hidden="true"
        className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-lg font-extrabold ${
          dark ? "bg-white text-accent" : "bg-accent text-white"
        }`}
      >
        H
      </span>
      <span className={`text-2xl font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>
        <span className={dark ? "text-accent-glow" : "text-accent"}>Hire</span>Gladd
      </span>
    </Link>
  );
}
