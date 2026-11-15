import { Metadata } from "next";
import ContactClient from "./_components/ContactClient";
import { business } from "@/config/business";

export const metadata: Metadata = {
  title: {
    absolute: "Free Estimate | Contact Our Contractor — Bronx NYC 24/7",
  },
  description:
    "Get a free construction estimate in NYC. Call anytime — 24/7. Serving all 5 boroughs. Licensed & insured.",
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
    title: "Contact Us | Mega Contracting NY Group",
    description:
      "Request a free estimate or contact Mega Contracting NY Group directly. Fast response, transparent pricing, serving all NYC boroughs.",
    url: "https://www.megacontractingnyc.com/contact",
    siteName: "Mega Contracting NY Group",
    images: [
      {
        url: "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Mega Contracting NY Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "Contact Us | Mega Contracting NY Group",
    description:
      "Request a free estimate or contact Mega Contracting NY Group. Fast response, serving all NYC boroughs.",
    images: ["https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png"],
  },
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "image": "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
    "telephone": business.phoneE164,
    "email": business.email,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
