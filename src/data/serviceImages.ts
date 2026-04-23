/**
 * SERVICE IMAGES — Single Source of Truth
 *
 * All service images (top-level AND sub-category) are declared ONCE here.
 * Any change made here is automatically reflected in:
 *   - Navbar mega menu (service hover + sub-service hover)
 *   - Homepage service cards (Services.tsx)
 *   - Service detail pages
 *
 * Keys must match the `id` field in servicesData.ts and completeData.json
 */

// ─── Top-Level Service Images ────────────────────────────────────────────────
import imgRoofing        from "@/assets/megaroofingreal.jpeg";
import imgMasonry        from "@/assets/merabrickwork.jpeg";
import imgConcrete       from "@/assets/excavation.jpg";
import imgHomeRenovation from "@/assets/megabathroom.jpeg";
import imgStucco         from "@/assets/general-contracting.jpg";
import imgCustomHome     from "@/assets/custom-home.jpg";
import imgEmergency      from "@/assets/megaemergencyrepair.jpg";

// ─── Roofing Sub-Categories ───────────────────────────────────────────────────
import imgShingleRoofing from "@/assets/roofingmain.jpg";
import imgFlatRoofing    from "@/assets/rooffair.jpg";
import imgTpoRoofing     from "@/assets/roofing.jpg";
import imgLeakageRepair  from "@/assets/roofingexperience.webp";

// ─── Masonry Sub-Categories ───────────────────────────────────────────────────
import imgBrickWork       from "@/assets/merabrickwork.jpeg";
import imgConcreteWork    from "@/assets/concrete-masonry.jpg";
import imgParapetWall     from "@/assets/megaservice6.jpg";
import imgFacadeRestoration from "@/assets/historic-restoration.jpg";

// ─── Concrete Sub-Categories ──────────────────────────────────────────────────
import imgDobViolation   from "@/assets/megaservice4.jpg";
import imgPaverDriveway  from "@/assets/portfolio-hero.jpg";
import imgSidewalk       from "@/assets/concrete-masonry.jpg";

// ─── Home Renovation Sub-Categories ──────────────────────────────────────────
import imgKitchenRenovation  from "@/assets/kitchen-bath.jpg";
import imgBathroomRenovation from "@/assets/megabathroom.jpeg";
import imgBasementRenovation from "@/assets/megaservice3.jpg";
import imgInteriorRemodeling from "@/assets/megaservice2.jpg";

// ─── Stucco Sub-Categories ────────────────────────────────────────────────────
import imgStuccoInstall  from "@/assets/general-contracting.jpg";

// ─── Custom Home Sub-Categories ───────────────────────────────────────────────
import imgLuxuryResidence from "@/assets/megacustomhome.jpg";

// ─── Emergency Sub-Categories ─────────────────────────────────────────────────
import imgEmergencyResponse from "@/assets/megaemergencyrepair.jpg";

// Fallback
import imgFallback from "@/assets/megaroofingreal.jpeg";

// ─── Registry ─────────────────────────────────────────────────────────────────
export const serviceImages: Record<string, any> = {
  // Top-level services (keyed by service ID)
  "roofing-services":     imgRoofing,
  "masonry-work":         imgMasonry,
  "concrete-services":    imgConcrete,
  "home-renovation":      imgHomeRenovation,
  "stucco":               imgStucco,
  "custom-home-building": imgCustomHome,
  "emergency-service":    imgEmergency,

  // Roofing sub-categories
  "shingle-roofing": imgShingleRoofing,
  "flat-roofing":    imgFlatRoofing,
  "tpo-roofing":     imgTpoRoofing,
  "leakage-repair":  imgLeakageRepair,
  "roof-replacement": imgRoofing,
  "roof-installation": imgShingleRoofing,
  "roof-inspection": imgFlatRoofing,

  // Masonry sub-categories
  "brick-work":         imgBrickWork,
  "parapet-wall":       imgParapetWall,
  "facade-restoration": imgFacadeRestoration,
  "driveway-repair":    imgPaverDriveway,
  "retaining-walls":    imgConcreteWork,
  "patios":             imgPaverDriveway,
  "stair-repair-building": imgBrickWork,
  "fire-escapes":       imgParapetWall,
  "chimney-caps-rebuilds": imgRoofing,
  "waterproofing-solutions": imgStucco,

  // Concrete sub-categories
  "dob-violation-removal": imgDobViolation,
  "sidewalk-violation-removal": imgDobViolation,
  "sidewalk-installation": imgSidewalk,
  "sidewalk-replacement": imgSidewalk,
  "sidewalk-repair": imgSidewalk,

  // Home Renovation sub-categories
  "kitchen-renovation":  imgKitchenRenovation,
  "bathroom-renovation": imgBathroomRenovation,
  "basement-renovation": imgBasementRenovation,
  "interior-remodeling": imgInteriorRemodeling,

  // Stucco sub-categories
  "stucco-installation": imgStuccoInstall,
  "eifs-systems": imgStucco,
  "stucco-repair": imgStucco,
  "traditional-stucco": imgStucco,
  "color-matching": imgStucco,

  // Custom Home sub-categories
  "luxury-residences": imgLuxuryResidence,
  "design-build": imgCustomHome,
  "luxury-finishes": imgCustomHome,
  "project-management": imgCustomHome,
  "smart-homes": imgCustomHome,

  // Emergency sub-categories
  "24-7-response": imgEmergencyResponse,
  "rapid-deployment": imgEmergencyResponse,
  "safety-assessment": imgEmergencyResponse,
  "board-up-service": imgEmergencyResponse,
  "24-7-availability": imgEmergencyResponse,
};

/**
 * Safe image lookup — works for both service IDs and sub-category IDs.
 * Falls back gracefully if the key is not found.
 */
export const getServiceImage = (id: string): any =>
  serviceImages[id] ?? imgFallback;
