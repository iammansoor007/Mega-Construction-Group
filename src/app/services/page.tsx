import { Metadata } from "next";
import ServicesClient from "./_components/ServicesClient";

export const metadata: Metadata = {
  title: "Construction Services in NYC | Mega Construction NYC",
  description: "Explore our elite construction services including certified roofing, masonry restoration, concrete paving, interior remodeling, and stucco repair in NYC.",
  keywords: [
    "Construction Services NYC",
    "General Contracting New York",
    "Roofing Services NYC",
    "Masonry Work Brooklyn",
    "Concrete Paving Queens",
    "Home Renovation Bronx",
    "Stucco Contractor Staten Island"
  ],
  openGraph: {
    title: "Construction Services in NYC | Mega Construction NYC",
    description: "Explore our elite construction services including certified roofing, masonry restoration, concrete paving, interior remodeling, and stucco repair in NYC.",
    url: "https://megaconstructiongroup.com/services",
    siteName: "Mega Construction NYC",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mega Construction NYC Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Services in NYC | Mega Construction NYC",
    description: "Explore our elite construction services including certified roofing, masonry restoration, concrete paving, interior remodeling, and stucco repair in NYC."
  }
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Mega Construction NYC",
    "url": "https://megaconstructiongroup.com/services",
    "telephone": "CALL OFFICE",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=1200&auto=format&fit=crop",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "areaServed": [
      "Manhattan",
      "Brooklyn",
      "Queens",
      "Bronx",
      "Staten Island",
      "Long Island"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <ServicesClient />
    </>
  );
}
