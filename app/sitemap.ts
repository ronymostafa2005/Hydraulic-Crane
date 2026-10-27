import type { MetadataRoute } from "next";
import { assertGeoIntegrity, indexablePages } from "@/lib/geo";
import { absUrl, staticIndexablePaths } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const errors = assertGeoIntegrity();
  if (errors.length) {
    throw new Error(`SEO geo integrity failed: ${errors.join("; ")}`);
  }

  const { areas, services, guides } = indexablePages();
  const entries: MetadataRoute.Sitemap = [
    ...staticIndexablePaths.map((page) => ({
      url: absUrl(page.pathname),
      lastModified: new Date(page.lastModified),
      changeFrequency: "weekly" as const,
    })),
    ...areas.map((area) => ({
      url: absUrl(area.pathname),
      lastModified: new Date(area.lastModified),
      changeFrequency: "weekly" as const,
    })),
    ...services.map((service) => ({
      url: absUrl(service.pathname),
      lastModified: new Date(service.lastModified),
      changeFrequency: "weekly" as const,
    })),
    ...guides.map((guide) => ({
      url: absUrl(guide.pathname),
      lastModified: new Date(guide.lastModified),
      changeFrequency: "monthly" as const,
    })),
  ];

  const seen = new Set<string>();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
