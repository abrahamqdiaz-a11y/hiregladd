import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { SHOW_PLACEHOLDERS } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

type Tone = "white" | "wash" | "night" | "dots";

export function Section({
  children,
  id,
  tone = "white",
  labelledBy,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  labelledBy?: string;
  className?: string;
}) {
  const bg = {
    white: "bg-paper",
    wash: "bg-wash",
    dots: "bg-wash dots-light",
    night: "hero-dark text-white on-dark",
  }[tone];
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${bg} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Small label above a heading. */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] ${
        dark ? "text-accent-glow" : "text-accent"
      }`}
    >
      <span aria-hidden="true" className={`h-0.5 w-6 rounded ${dark ? "bg-accent-glow" : "bg-accent"}`} />
      {children}
    </p>
  );
}

export function H2({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`text-3xl font-extrabold leading-tight sm:text-5xl ${className}`}>
      {children}
    </h2>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "inverse" | "secondary" | "ghost-dark";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-dark hover:-translate-y-0.5",
    inverse: "bg-white text-accent shadow-lg shadow-black/20 hover:bg-accent-soft hover:-translate-y-0.5",
    secondary: "border-2 border-accent text-accent hover:bg-accent-soft",
    "ghost-dark": "border-2 border-white/30 text-white hover:border-white hover:bg-white/10",
  }[variant];
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 py-3 text-lg font-bold transition ${styles} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** Clearly marked placeholder box. Only rendered on local builds and deploy previews. */
export function Placeholder({ children }: { children: ReactNode }) {
  if (!SHOW_PLACEHOLDERS) return null;
  return (
    <div
      role="note"
      className="rounded-xl border-2 border-dashed border-amber-500 bg-amber-50 p-5 text-base text-amber-950"
    >
      <strong className="block font-bold uppercase tracking-wide">Placeholder</strong>
      {children}
    </div>
  );
}

export function CheckList({ items, className = "", dark = false }: { items: string[]; className?: string; dark?: boolean }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            className={`mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full ${
              dark ? "bg-white/15 text-white" : "bg-accent-soft text-accent"
            }`}
          >
            <Icon name="check" className="h-4 w-4" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function IconBadge({ name, size = "md", dark = false }: { name: string; size?: "md" | "lg"; dark?: boolean }) {
  const dim = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-12 w-12 rounded-xl";
  const color = dark
    ? "bg-white/10 text-accent-glow ring-1 ring-white/15"
    : "bg-gradient-to-br from-accent to-accent-dark text-white shadow-md shadow-accent/25";
  return (
    <span className={`inline-flex flex-none items-center justify-center ${dim} ${color}`}>
      <Icon name={name} className={size === "lg" ? "h-7 w-7" : "h-6 w-6"} />
    </span>
  );
}
