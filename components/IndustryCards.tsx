import Link from "next/link";
import { Icon } from "./Icon";
import { IconBadge } from "./ui";
import type { Industry } from "@/lib/types";

export function IndustryCards({ industries, linkLabel }: { industries: Industry[]; linkLabel: string }) {
  return (
    <ul className="mt-10 grid gap-6 md:grid-cols-3">
      {industries.map((i) => (
        <li key={i.slug}>
          <Link
            href={`/industries/${i.slug}/`}
            className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-accent sm:p-8"
          >
            <IconBadge name={i.icon} />
            <h3 className="mt-5 text-xl font-bold group-hover:text-accent">{i.name}</h3>
            <p className="mt-2 flex-1 text-muted">{i.summary}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-semibold text-accent">
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
