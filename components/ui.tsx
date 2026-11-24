import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
import { SHOW_PLACEHOLDERS } from "@/lib/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  tone = "white",
  labelledBy,
  className = "",
}: {
  children: ReactNode;
  id?: string;
  tone?: "white" | "wash" | "accent";
  labelledBy?: string;
  className?: string;
}) {
  const bg = { white: "bg-paper", wash: "bg-wash", accent: "bg-accent text-white" }[tone];
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${bg} py-16 sm:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function H2({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <h2 id={id} className={`text-3xl font-bold tracking-tight sm:text-4xl ${className}`}>
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
  variant?: "primary" | "inverse" | "secondary";
  className?: string;
  external?: boolean;
}) {
  const styles = {
    primary: "bg-accent text-white hover:bg-accent-dark",
    inverse: "bg-white text-accent hover:bg-accent-soft",
    secondary: "border-2 border-accent text-accent hover:bg-accent-soft",
  }[variant];
  const cls = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold transition-colors ${styles} ${className}`;
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
      className="rounded-lg border-2 border-dashed border-amber-500 bg-amber-50 p-5 text-base text-amber-950"
    >
      <strong className="block font-bold uppercase tracking-wide">Placeholder</strong>
      {children}
    </div>
  );
}

export function CheckList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon name="check" className="mt-1 h-5 w-5 flex-none text-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function IconBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-accent-soft text-accent">
      <Icon name={name} className="h-6 w-6" />
    </span>
  );
}
