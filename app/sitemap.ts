import type { MetadataRoute } from "next";
import { getIndustries } from "@/lib/industries";
import { getCities, cityPath } from "@/lib/cities";
import { getArticles, articlePath } from "@/lib/articles";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = ["/", "/industries/", "/articles/", "/about/", "/contact/", "/privacy/"];
  return [
    ...pages.map((p) => ({
      url: absoluteUrl(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.7,
    })),
    ...getIndustries().map((i) => ({
      url: absoluteUrl(`/industries/${i.slug}/`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getCities().map((c) => ({
      url: absoluteUrl(cityPath(c)),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getArticles().filter((a) => !a.draft).map((a) => ({
      url: absoluteUrl(articlePath(a)),
      lastModified: new Date(a.updated ?? a.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
