"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { site } from "@/content/en/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-ink" aria-label="Gladd home">
          Gladd<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-base font-medium text-ink hover:text-accent">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="inline-flex min-h-11 items-center rounded-lg bg-accent px-5 text-base font-semibold text-white hover:bg-accent-dark"
          >
            {site.ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <Icon name={open ? "close" : "menu"} className="h-7 w-7" />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Main" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto max-w-6xl px-5 py-3">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-lg font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pb-3 pt-2">
              <Link
                href="/contact/"
                className="flex min-h-12 items-center justify-center rounded-lg bg-accent text-lg font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {site.ctaLabel}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
