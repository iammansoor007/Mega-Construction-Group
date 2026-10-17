import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";
import { projectsData } from "@/data/projectsData";
import { locationsData } from "@/data/locationsData";
import { blogsData } from "@/data/blogsData";

const BASE_URL = "https://www.megacontractingnyc.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/licenses`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/sitemap`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    // Projects & Case Studies
    { url: `${BASE_URL}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Locations index
    { url: `${BASE_URL}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    // Blog & Technical Guides
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
  ];

  const dynamicRoutes: MetadataRoute.Sitemap = [];

  // Service categories + subcategories
  servicesData.forEach((service) => {
    dynamicRoutes.push({ url: `${BASE_URL}/services/${service.id}`, lastModified: now, changeFrequency: "monthly", priority: 0.85 });
    service.subcategories.forEach((sub) => {
      dynamicRoutes.push({ url: `${BASE_URL}/services/${service.id}/${sub.id}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
    });
  });

  // Individual project / case study pages
  Object.keys(projectsData).forEach((slug) => {
    dynamicRoutes.push({ url: `${BASE_URL}/projects/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  });

  // Individual location / borough pages
  Object.keys(locationsData).forEach((borough) => {
    dynamicRoutes.push({ url: `${BASE_URL}/locations/${borough}`, lastModified: now, changeFrequency: "monthly", priority: 0.82 });
  });

  // Blog & Technical guides pages
  Object.keys(blogsData).forEach((slug) => {
    dynamicRoutes.push({ url: `${BASE_URL}/blog/${slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 });
  });

  return [...staticRoutes, ...dynamicRoutes];
}
