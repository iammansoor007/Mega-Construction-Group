import { servicesData, Service, SubCategory } from "@/data/servicesData";
import { bronxSeoPages } from "@/data/bronxSeoPages";

// Category alias dictionary
export const categoryAliases: Record<string, string> = {
  roofing: "roofing-services",
  "roofing-services": "roofing-services",
  masonry: "masonry-work",
  "masonry-work": "masonry-work",
  concrete: "concrete-services",
  "concrete-services": "concrete-services",
  "home-renovation": "home-renovation",
  renovation: "home-renovation",
  stucco: "stucco",
  waterproofing: "waterproofing",
  commercial: "commercial-construction",
  "commercial-construction": "commercial-construction",
};

// Subcategory alias dictionary
export const subcategoryAliases: Record<string, string> = {
  "roof-repair": "roof-leakage-repair",
  "roof-leak-repair": "roof-leakage-repair",
  "roof-waterproofing": "flat-roofing",
  "roof-leakage-repair": "roof-leakage-repair",
  "flat-roofing": "flat-roofing",
  "tpo-roofing": "tpo-roofing",
  "shingle-roofing": "shingle-roofing",
  "roof-replacement": "roof-replacement",
  "roof-installation": "roof-installation",
  "roof-inspection": "roof-inspection",
  "brick-pointing": "brick-pointing",
  "brick-replacement": "brick-replacement",
  "parapet-wall-repair": "parapet-wall-repair",
  "facade-restoration": "facade-restoration",
  "chimney-repair": "chimney-repair",
  "lintel-replacement": "lintel-replacement",
  "fire-escape-painting": "fire-escape-painting",
  "sidewalk-repair": "sidewalk-repair",
};

export function resolveCategory(rawCategory: string): Service | undefined {
  const normalizedCategory = categoryAliases[rawCategory.toLowerCase()] || rawCategory;
  return servicesData.find((s) => s.id === normalizedCategory || s.id === rawCategory);
}

export function resolveSubcategory(
  service: Service,
  rawSlug: string
): SubCategory | undefined {
  const normalizedSlug = subcategoryAliases[rawSlug.toLowerCase()] || rawSlug;
  return service.subcategories.find(
    (sub) => sub.id === normalizedSlug || sub.id === rawSlug
  );
}

/**
 * Searches across all categories if a slug is passed as category (single segment /services/[slug])
 */
export function findSubcategoryAnywhere(slug: string): {
  service: Service;
  subCategory: SubCategory;
} | undefined {
  const normalizedSlug = subcategoryAliases[slug.toLowerCase()] || slug;
  for (const service of servicesData) {
    const found = service.subcategories.find(
      (sub) => sub.id === normalizedSlug || sub.id === slug
    );
    if (found) return { service, subCategory: found };
  }
  return undefined;
}

export const bronxSlugRedirectMap: Record<string, string> = {
  // Hubs
  "roofing": "/services/roofing-services",
  "masonry": "/services/masonry-work",
  "renovation": "/services/home-renovation",
  "concrete-services": "/services/concrete-services",
  "waterproofing": "/services/masonry-work/waterproofing",
  "violations": "/services/concrete-services",

  // Roofing
  "roof-replacement-bronx-ny": "/services/roofing-services/roof-replacement",
  "roof-installation-bronx": "/services/roofing-services/roof-installation",
  "roof-inspection-bronx": "/services/roofing-services/roof-inspection",
  "shingle-roofing-bronx": "/services/roofing-services/shingle-roofing",
  "flat-roof-contractor-bronx": "/services/roofing-services/flat-roofing",
  "flat-roofing-nyc": "/services/roofing-services/flat-roofing",
  "roof-leak-repair-nyc": "/services/roofing-services/roof-leakage-repair",
  "chimney-repair-bronx": "/services/masonry-work/chimney-caps-rebuilds",

  // Masonry & Facade
  "brick-pointing-bronx": "/services/masonry-work/brick-grinding-pointing",
  "brick-repair-bronx": "/services/masonry-work/brick-replacement",
  "facade-restoration-nyc": "/services/masonry-work/facade-restoration",
  "lintel-repair-bronx": "/services/masonry-work/lintel-replacement",
  "parapet-repair-bronx": "/services/masonry-work/parapet-wall",
  "local-law-11-brooklyn": "/services/masonry-work/facade-restoration",
  "stoop-repair-brooklyn": "/services/masonry-work/steps-repair-construction",
  "stucco-repair-brooklyn": "/services/stucco/stucco-repair",
  "stucco-contractor-brooklyn": "/services/stucco/traditional-stucco",
  "stucco-restoration-brooklyn": "/services/stucco/stucco-repair",
  "eifs-contractor-brooklyn": "/services/stucco/eifs-systems",
  "smooth-stucco-brooklyn": "/services/stucco/californian-stucco",
  "fire-escape-painting-nyc": "/services/masonry-work/fire-escape-painting",

  // Renovation & Emergency
  "kitchen-renovation-bronx": "/services/home-renovation/kitchen-renovation",
  "bathroom-renovation-bronx": "/services/home-renovation/bathroom-renovation",
  "basement-renovation-bronx": "/services/home-renovation/basement-renovation",
  "interior-remodeling-bronx": "/services/home-renovation/interior-remodeling",
  "luxury-renovation-brooklyn": "/services/custom-home-building/luxury-finishes",
  "commercial-renovation-bronx": "/services/home-renovation/interior-remodeling",
  "emergency-building-repair-bronx": "/services/emergency-service/emergency-24-7",
  "emergency-contractor-bronx": "/services/emergency-service/rapid-deployment",
  "emergency-board-up-bronx": "/services/emergency-service/board-up-service",
  "construction-company-bronx": "/services/custom-home-building/design-build",
  "general-contractor-bronx": "/services/custom-home-building/project-management",

  // Concrete & Hardscaping
  "outdoor-concrete-bronx": "/services/concrete-services/backyard-concrete",
  "sidewalk-repair-bronx": "/services/concrete-services/sidewalk-repair",
  "sidewalk-replacement-bronx": "/services/concrete-services/sidewalk-replacement",
  "driveway-bronx": "/services/concrete-services/driveway-replacement",
  "patio-contractor-bronx": "/services/masonry-work/patios",
  "retaining-wall-bronx": "/services/masonry-work/retaining-walls",

  // Waterproofing & Foundation
  "waterproofing-bronx": "/services/masonry-work/waterproofing",
  "window-caulking-bronx": "/services/masonry-work/window-caulking",
  "foundation-repair-brooklyn": "/services/concrete-services/foundation-work",

  // Violations & Specialty
  "dot-violation-removal-nyc": "/services/concrete-services/dot-violation-removal",
  "sidewalk-violation-bronx": "/services/concrete-services/sidewalk-violation-removal",
  "dob-violation-brooklyn": "/services/concrete-services/dob-violation-removal",
  "smart-home-brooklyn": "/services/custom-home-building/smart-homes"
};

