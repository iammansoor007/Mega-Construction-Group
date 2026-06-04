import { Metadata } from "next";
import HomeClient from "./_components/HomeClient";

export const metadata: Metadata = {
  title: "Mega Construction NYC | General Contractor & Construction Services in New York",
  description: "Mega Construction NYC provides residential and commercial construction, remodeling, roofing, renovations, and general contracting services across New York City.",
  keywords: [
    "Mega Construction NYC",
    "General Contractor New York",
    "Construction Services NYC",
    "Roofing Contractor Brooklyn",
    "Commercial Remodeling Manhattan",
    "Facade Restoration NYC",
    "DOT Sidewalk Violation Removal"
  ],
  alternates: {
    canonical: "https://megaconstructiongroup.com",
  },
  openGraph: {
    title: "Mega Construction NYC | General Contractor & Construction Services in New York",
    description: "Mega Construction NYC provides residential and commercial construction, remodeling, roofing, renovations, and general contracting services across New York City.",
    url: "https://megaconstructiongroup.com",
    siteName: "Mega Construction NYC",
    images: [
      {
        url: "/assets/Mega-Contracting-Logo.png",
        width: 800,
        height: 600,
        alt: "Mega Construction NYC Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mega Construction NYC | General Contractor & Construction Services in New York",
    description: "Mega Construction NYC provides residential and commercial construction, remodeling, roofing, renovations, and general contracting services across New York City."
  }
};

export default function Home() {
  const schemas = [
    // 1. GeneralContractor / LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "name": "Mega Construction NYC",
      "url": "https://megaconstructiongroup.com",
      "telephone": "CALL OFFICE",
      "image": "https://megaconstructiongroup.com/assets/Mega-Contracting-Logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "priceRange": "$$",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Manhattan" },
        { "@type": "AdministrativeArea", "name": "Brooklyn" },
        { "@type": "AdministrativeArea", "name": "Queens" },
        { "@type": "AdministrativeArea", "name": "Bronx" },
        { "@type": "AdministrativeArea", "name": "Staten Island" }
      ]
    },
    // 2. WebSite Schema (Search Box Support)
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": "https://megaconstructiongroup.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://megaconstructiongroup.com/services?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <HomeClient />
    </>
  );
}
