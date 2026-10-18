
import type { MetadataRoute } from "next";

const siteUrl = "https://portfolio-rose-xi-j1o06k0ryt.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
