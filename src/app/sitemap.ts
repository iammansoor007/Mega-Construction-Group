import { MetadataRoute } from "next";
import { servicesSeoMap } from "@/data/servicesSeoData";
import { blogsData } from "@/data/blogsData";
import { projectsData } from "@/data/projectsData";
import { locationsData } from "@/data/locationsData";

const BASE_URL = "https://www.megacontractingnyc.com";

/**
 * Clean canonical sitemap generator:
 * - Lists ALL real content pages: homepage, core utility pages, all 52 canonical /services/... pages,
 *   all 22 published blog posts, all 5 project case studies, and 5 borough location pages.
 * - Excludes all 51 redirected keyword slugs, /sitemap, /privacy, /terms.
 * - Omits fake build-time lastModified stamps (real dates used only when known).
 * - Excludes changefreq and priority (ignored by Google).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static utility & index pages (no fake build timestamp)
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/services` },
    { url: `${BASE_URL}/contact` },
    { url: `${BASE_URL}/faq` },
    { url: `${BASE_URL}/licenses` },
    { url: `${BASE_URL}/blog` },
    { url: `${BASE_URL}/projects` },
    { url: `${BASE_URL}/locations` },
  ];

  // All 52 canonical /services/... pages from Section C (7 hubs + 45 subcategory services)
  const servicePages: MetadataRoute.Sitemap = Object.keys(servicesSeoMap).map((path) => ({
    url: `${BASE_URL}${path}`,
  }));

  // All published blog posts with real publication / update dates
  const blogPages: MetadataRoute.Sitemap = Object.values(blogsData).map((post) => {
    const entry: MetadataRoute.Sitemap[number] = {
      url: `${BASE_URL}/blog/${post.slug}`,
    };
    const dateStr = post.editDate || post.publishDate;
    if (dateStr) {
      entry.lastModified = new Date(dateStr);
    }
    return entry;
  });

  // Real project case study pages
  const projectPages: MetadataRoute.Sitemap = Object.keys(projectsData).map((slug) => ({
    url: `${BASE_URL}/projects/${slug}`,
  }));

  // Borough location pages
  const locationPages: MetadataRoute.Sitemap = Object.keys(locationsData).map((borough) => ({
    url: `${BASE_URL}/locations/${borough}`,
  }));

  return [...corePages, ...servicePages, ...blogPages, ...projectPages, ...locationPages];
}
