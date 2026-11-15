import { Metadata } from "next";
import AboutClient from "./_components/AboutClient";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "About Our Licensed Construction Company | Bronx NY",
  },
  description:
    "Licensed & insured construction company serving the Bronx, Brooklyn, Queens, Manhattan & Staten Island. Family-owned. All services. Free estimates.",

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
    title: "About Our Licensed Construction Company | Bronx NY",
    description:
      "Family-owned. Mega Contracting NY Group is NYC's licensed general contractor — roofing, masonry, concrete, and full renovations across all 5 boroughs.",
    url: "https://www.megacontractingnyc.com/about",
    siteName: "Mega Contracting NY Group",
    images: [
      {
        url: "https://www.megacontractingnyc.com/assets/megaabout.png",
        width: 1200,
        height: 630,
        alt: "About Our Licensed Construction Company in Bronx NY",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "About Our Licensed Construction Company | Bronx NY",
    description:
      "Family-owned. NYC's licensed general contractor — roofing, masonry, concrete, and full renovations across all 5 boroughs.",
    images: ["https://www.megacontractingnyc.com/assets/megaabout.png"],
  },
};

export default function AboutPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    ...(business.legalName ? { "legalName": business.legalName } : {}),
    "image": "https://www.megacontractingnyc.com/assets/megaabout.png",
    "telephone": business.phoneE164,
    "email": business.email,
    ...(business.foundingYear ? { "foundingDate": String(business.foundingYear) } : {}),
    ...(business.licenseLines.length > 0 ? {
      "license": `${business.licenseLines[0].label} ${business.licenseLines[0].number}`
    } : {}),
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
    "url": "https://www.megacontractingnyc.com",
    "areaServed": [...business.boroughs],
    "sameAs": [
      business.social.instagram,
      business.social.linkedin,
      business.social.facebook,
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
