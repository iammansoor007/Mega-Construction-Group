import { Metadata } from "next";
import HomeClient from "./_components/HomeClient";
import { business } from "@/config/business";

const BASE_URL = "https://www.megacontractingnyc.com";

const HOT_KEYWORDS = [
  "General Contractor NYC",
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
];

export const metadata: Metadata = {
  title: {
    absolute: "General Contractor NYC | Mega Contracting NY Group",
  },
  description:
    "NYC trusted general contractor — roofing, masonry, renovation, sidewalks & violations. Licensed & insured. All 5 boroughs. Free estimate!",

  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "General Contractor NYC | Mega Contracting NY Group",
    description:
      "NYC trusted general contractor — roofing, masonry, renovation, sidewalks & violations. Licensed & insured. All 5 boroughs. Free estimate!",
    url: BASE_URL,
    siteName: "Mega Contracting NY Group",
    images: [
      {
        url: `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
        width: 1200,
        height: 630,
        alt: "Mega Contracting NY Group - General Contractor NYC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "General Contractor NYC | Licensed Construction Company",
    description:
      "NYC trusted general contractor — roofing, masonry, renovation, sidewalks & violations. Licensed & insured. All 5 boroughs. Free estimate!",
    images: [`${BASE_URL}/assets/Mega-Contracting-Logo.png`],
  },
};

export default function Home() {
  const schemas = [
    // ── 1. LocalBusiness / GeneralContractor ──────────────────────
    {
      "@context": "https://schema.org",
      "@type": ["GeneralContractor", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${BASE_URL}/#business`,
      "name": business.name,
      ...(business.legalName ? { "legalName": business.legalName } : {}),
      "alternateName": ["General Contractor NYC", "Mega Contracting NY", "Mega Contracting Group"],
      "description":
        "Mega Contracting NY Group is NYC's licensed general contractor specializing in facade restoration, roof leak repair, flat roofing, chimney repair, fire escape painting, parapet wall repair, stucco repair, EIFS, DOB violation removal, DOT violation removal, sidewalk repair, building safety assessments, brick pointing, foundation repair, and waterproofing across all 5 boroughs.",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
        "width": 400,
        "height": 400,
      },
      "image": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
      "telephone": business.phoneE164,
      "email": business.email,
      ...(business.foundingYear ? { "foundingDate": String(business.foundingYear) } : {}),
      "address": {
        "@type": "PostalAddress",
        "streetAddress": business.address.street,
        "addressLocality": business.address.city,
        "addressRegion": business.address.state,
        "postalCode": business.address.zip,
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.8731",
        "longitude": "-73.8644",
      },
      "hasMap": "https://share.google/cQGmz8WB5ogZiDLnE",
      "paymentAccepted": "Cash, Credit Card, Check",
      "currenciesAccepted": "USD",
      "areaServed": business.boroughs.map((b) => ({
        "@type": "AdministrativeArea",
        "name": b,
      })),
      "sameAs": [
        business.social.instagram,
        business.social.linkedin,
        business.social.facebook,
      ],
      "knowsAbout": [
        ...HOT_KEYWORDS,
        "General Contractor NYC",
        "General Contracting NYC",
        "Roofing Contractor NYC",
        "Masonry Contractor NYC",
        "Home Renovation NYC",
        "Commercial Construction NYC",
        "NYC Local Law 11 Compliance",
        "FISP Inspection NYC",
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "NYC Construction & Restoration Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facade Restoration NYC", "url": `${BASE_URL}/services/masonry-work` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Leak Repair NYC", "url": `${BASE_URL}/services/roofing-services` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Roofing NYC", "url": `${BASE_URL}/services/roofing-services` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Chimney Repair NYC", "url": `${BASE_URL}/services/masonry-work` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire Escape Painting NYC", "url": `${BASE_URL}/contact` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Parapet Wall Repair NYC", "url": `${BASE_URL}/services/masonry-work` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Stucco Repair NYC", "url": `${BASE_URL}/services/stucco` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EIFS Contractor NYC", "url": `${BASE_URL}/services/stucco` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DOB Violation Removal NYC", "url": `${BASE_URL}/contact` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DOT Violation Removal NYC", "url": `${BASE_URL}/services/concrete-services` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sidewalk Repair NYC", "url": `${BASE_URL}/services/concrete-services` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Building Safety Assessment NYC", "url": `${BASE_URL}/contact` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brick Pointing NYC", "url": `${BASE_URL}/services/masonry-work` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Foundation Repair NYC", "url": `${BASE_URL}/contact` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Waterproofing Contractor NYC", "url": `${BASE_URL}/contact` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Home Renovation NYC", "url": `${BASE_URL}/services/home-renovation` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Home Building NYC", "url": `${BASE_URL}/services/custom-home-building` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Construction NYC", "url": `${BASE_URL}/services/emergency-service` } },
        ],
      },
      ...(business.founderStatement ? {
        "founder": {
          "@type": "Person",
          "name": "Adil Shamis",
          "jobTitle": "Founder & General Contractor",
          "worksFor": { "@type": "Organization", "name": business.name },
        }
      } : {}),
      ...(business.licenseLines.length > 0 ? {
        "license": `${business.licenseLines[0].label} ${business.licenseLines[0].number}`
      } : {}),
    },

    // ── 2. WebSite schema (search box support) ─────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": BASE_URL,
      "name": business.name,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${BASE_URL}/services?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },

    // ── 3. Organization schema (sitewide authority) ────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": business.name,
      "url": BASE_URL,
      "logo": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": business.phoneE164,
        "contactType": "customer service",
        "areaServed": "US-NY",
        "availableLanguage": "English",
      },
      "sameAs": [
        business.social.instagram,
        business.social.linkedin,
        business.social.facebook,
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HomeClient />
    </>
  );
}
