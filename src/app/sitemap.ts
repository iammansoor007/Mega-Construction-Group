import { MetadataRoute } from "next";
import { servicesData } from "@/data/servicesData";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://megaconstructiongroup.com";

  // Base routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];

  // Dynamic service category routes
  servicesData.forEach((service) => {
    routes.push({
      url: `${baseUrl}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    // Dynamic service subcategory detail routes
    service.subcategories.forEach((sub) => {
      routes.push({
        url: `${baseUrl}/services/${service.id}/${sub.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return routes;
}
