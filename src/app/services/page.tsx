import { Metadata } from "next";
import ServicesClient from "./_components/ServicesClient";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "Construction Services Bronx NY | All Services — Licensed Contractor",
  },
  description: "Full range of construction services in the Bronx NY. Roofing, masonry, renovation, sidewalks, waterproofing, violations & more. Licensed. Free estimate!",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/services",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Construction Services in NYC | Mega Contracting NY Group",
    description: "Explore our construction services including roofing, masonry restoration, concrete paving, interior remodeling, and stucco repair in NYC.",
    url: "https://www.megacontractingnyc.com/services",
    siteName: "Mega Contracting NY Group",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Mega Contracting NY Group Services"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "Construction Services in NYC | Mega Contracting NY Group",
    description: "Explore our construction services including roofing, masonry restoration, concrete paving, interior remodeling, and stucco repair in NYC.",
    images: ["https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=1200&auto=format&fit=crop"],
  }
};

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": business.name,
    "url": "https://www.megacontractingnyc.com/services",
    "telephone": business.phoneE164,
    "email": business.email,
    ...(business.licenseLines.length > 0 ? {
      "license": `${business.licenseLines[0].label} ${business.licenseLines[0].number}`
    } : {}),
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=1200&auto=format&fit=crop",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.886071,
      "longitude": -73.861787
    },
    "areaServed": [...business.boroughs],
    "knowsAbout": [
      "Facade Restoration NYC",
      "Roof Leak Repair NYC",
      "Flat Roofing NYC",
      "Chimney Repair NYC",
      "Fire Escape Painting NYC",
      "Parapet Wall Repair NYC",
      "Stucco Repair NYC",
      "EIFS Contractor NYC",
      "DOB Violation Removal NYC",
      "DOT Violation Removal NYC",
      "Sidewalk Repair NYC",
      "Building Safety Assessment NYC",
      "Brick Pointing NYC",
      "Foundation Repair NYC",
      "Waterproofing Contractor NYC"
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
