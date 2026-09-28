import { Metadata } from "next";
import ContactClient from "./_components/ContactClient";

export const metadata: Metadata = {
  title: {
    absolute: "Free Estimate | Contact Our Contractor — Bronx NYC 24/7",
  },
  description:
    "Get a free construction estimate in NYC. Call anytime — 24/7. Serving all 5 boroughs. Licensed & insured.",
  keywords: [
    "free estimate contractor nyc",
    "Get Your Free Construction Estimate in NYC Today",
    "Free Estimate NYC Contractor",
    "Mega Contracting NY Group",
    "Licensed Contractor Bronx NY",
    "Roofing Estimate New York",
    "Construction Quote NYC",
    "Call NYC Contractor",
    "Facade Restoration NYC",
    "Roof Leak Repair NYC",
    "Flat Roofing NYC",
    "Chimney Repair NYC",
    "DOB Violation Removal NYC",
    "DOT Violation Removal NYC",
    "Sidewalk Repair NYC",
    "Brick Pointing NYC",
    "Waterproofing Contractor NYC",
  ],
  alternates: {
    canonical: "https://www.megacontractingnyc.com/contact",
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
    title: "Contact Us | Mega Construction NYC",
    description:
      "Request a free estimate or contact Mega Contracting NY Group directly. Fast response, transparent pricing, serving all NYC boroughs.",
    url: "https://www.megacontractingnyc.com/contact",
    siteName: "Mega Construction NYC",
    images: [
      {
        url: "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Mega Construction NYC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "Contact Us | Mega Construction NYC",
    description:
      "Request a free estimate or contact Mega Contracting NY Group. Fast response, serving all NYC boroughs.",
    images: ["https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png"],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mega Contracting NY Group",
    "image": "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
