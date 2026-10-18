
import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-rose-xi-j1o06k0ryt.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
