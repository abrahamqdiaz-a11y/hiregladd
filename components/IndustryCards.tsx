import Link from "next/link";
import { Icon } from "./Icon";
import type { Industry } from "@/lib/types";

export function IndustryCards({ industries, linkLabel }: { industries: Industry[]; linkLabel: string }) {
  return (
    <ul className="mt-10 grid gap-5 md:grid-cols-3">
      {industries.map((i) => (
        <li key={i.slug}>
          <Link
            href={`/industries/${i.slug}/`}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10 sm:p-8"
          >
            <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-accent to-accent-glow" />
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent group-hover:text-white">
              <Icon name={i.icon} className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-2xl font-extrabold">{i.name}</h3>
            <p className="mt-2 flex-1 text-muted">{i.summary}</p>
            <span className="mt-6 inline-flex items-center gap-2 font-bold text-accent">
              {linkLabel}
              <span className="sr-only">: {i.name}</span>
              <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
