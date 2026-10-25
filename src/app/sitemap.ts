import { MetadataRoute } from "next";
import { servicesSeoMap } from "@/data/servicesSeoData";
import { blogsData } from "@/data/blogsData";

const BASE_URL = "https://www.megacontractingnyc.com";

/**
 * Clean canonical sitemap generator matching Section D of the Indexing Fix Plan:
 * - Lists ONLY homepage, /about, /services, /contact, /faq, /blog, /projects,
 *   all 52 canonical /services/... pages, and all published blog posts.
 * - Excludes all 51 redirected keyword slugs, /sitemap, /privacy, /terms.
 * - Omits fake build-time lastModified stamps (real dates used only for blog posts).
 * - Excludes changefreq and priority (ignored by Google).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static utility pages (no build timestamp)
  const corePages: MetadataRoute.Sitemap = [
    { url: BASE_URL },
    { url: `${BASE_URL}/about` },
    { url: `${BASE_URL}/services` },
    { url: `${BASE_URL}/contact` },
    { url: `${BASE_URL}/faq` },
    { url: `${BASE_URL}/blog` },
    { url: `${BASE_URL}/projects` },
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

  return [...corePages, ...servicePages, ...blogPages];
}
