import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

const BASE_URL = "https://www.megacontractingnyc.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // ─── Static routes ────────────────────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  // ─── Dynamic service category & subcategory routes ────────────────────────────
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  servicesData.forEach((service) => {
    // Category page (e.g. /services/roofing-services)
    dynamicRoutes.push({
      url: `${BASE_URL}/services/${service.id}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    });

    // Subcategory / detail pages (e.g. /services/roofing-services/shingle-roofing)
    service.subcategories.forEach((sub) => {
      dynamicRoutes.push({
        url: `${BASE_URL}/services/${service.id}/${sub.id}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return [...staticRoutes, ...dynamicRoutes];
}
