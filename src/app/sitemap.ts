import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1 },
    { path: "/services/", priority: 0.9 },
    ...services.map((service) => ({
      path: `/services/${service.slug}/`,
      priority: 0.8,
    })),
    { path: "/about/", priority: 0.7 },
    { path: "/portfolio/", priority: 0.7 },
    { path: "/contact/", priority: 0.8 },
    { path: "/privacy-policy/", priority: 0.2 },
    { path: "/terms/", priority: 0.2 },
  ];

  return pages.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: priority >= 0.7 ? "monthly" : "yearly",
    priority,
  }));
}
