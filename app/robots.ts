import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/thank-you/", "/unsubscribe/", "/__forms.html"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
