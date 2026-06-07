import { Metadata } from "next";
import AboutClient from "./_components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | Mega Construction NYC",
  description:
    "Learn about Mega Contracting NY Group — family-owned since 2005, NYC licensed general contractor with 20+ years of experience in roofing, masonry, concrete, and renovation across all five boroughs.",
  keywords: [
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
    "Waterproofing Contractor NYC",
    "About Mega Construction NYC",
    "NYC Licensed General Contractor",
    "Family Owned Construction Company New York",
    "Adil Shamis Contractor",
    "BBB A+ Contractor NYC",
    "Roofing Contractor NYC",
    "Construction Company New York Since 2005",
  ],
  alternates: {
    canonical: "https://www.megacontractingnyc.com/about",
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
    title: "About Us | Mega Construction NYC",
    description:
      "Family-owned since 2005. Mega Contracting NY Group is NYC's most trusted licensed general contractor — roofing, masonry, concrete, and full renovations across all 5 boroughs.",
    url: "https://www.megacontractingnyc.com/about",
    siteName: "Mega Construction NYC",
    images: [
      {
        url: "https://www.megacontractingnyc.com/assets/megaabout.png",
        width: 1200,
        height: 630,
        alt: "Mega Construction NYC - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "About Us | Mega Construction NYC",
    description:
      "Family-owned since 2005. NYC's most trusted licensed general contractor — roofing, masonry, concrete, and full renovations across all 5 boroughs.",
    images: ["https://www.megacontractingnyc.com/assets/megaabout.png"],
  },
};

export default function AboutPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mega Contracting NY Group",
    "image": "https://www.megacontractingnyc.com/assets/megaabout.png",
    "telephone": "+1 (914) 804-3000",
    "email": "info@megacontractinggroup.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3044 Radcliff Ave",
      "addressLocality": "Bronx",
      "addressRegion": "NY",
      "postalCode": "10469",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.886071,
      "longitude": -73.861787
    },
    "url": "https://www.megacontractingnyc.com",
    "priceRange": "$$",
    "areaServed": [
      "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island",
      "Westchester", "Long Island"
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <AboutClient />
    </>
  );
}
