/**
 * SERVICE IMAGES — Unified with Service Assets
 *
 * This file is now synced with serviceAssets.ts.
 * Change your images in serviceAssets.ts and they will update here too.
 */

import { serviceAssets } from "./serviceAssets";

// Fallback image in case something is missing
const FALLBACK_IMAGE = "/assets/megaroofingreal.jpeg";

/**
 * Safe image lookup — works for both service IDs and sub-category IDs.
 * Pulls directly from the simplified serviceAssets.ts file.
 */
export const getServiceImage = (id: string): string => {
  const asset = serviceAssets[id as keyof typeof serviceAssets];
  return asset?.image || FALLBACK_IMAGE;
};

// Also export the registry if needed by other components
export const serviceImages = serviceAssets;
