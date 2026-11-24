import type { Metadata } from "next";
import { SITE_NAME, absoluteUrl } from "./site";

/** Builds a page's unique title, description, canonical URL and Open Graph tags. */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  noindex?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: absoluteUrl(path),
      title: fullTitle,
      description,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "HireGladd: we find your people. You run your business." }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og.png"],
    },
  };
}
