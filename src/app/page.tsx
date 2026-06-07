import { Metadata } from "next";
import HomeClient from "./_components/HomeClient";

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
  title: "General Contractor NYC | Mega Contracting NY Group",
  description:
    "Mega Contracting NY Group — NYC's #1 licensed general contractor. Specializing in facade restoration, roof leak repair, flat roofing, chimney repair, brick pointing, DOB/DOT violation removal, sidewalk repair, waterproofing & more across all 5 boroughs. Free estimates.",
  keywords: [
    "General Contractor NYC",
    "General Contractor New York",
    "Mega Construction NYC",
    "Construction Services NYC",
    "Roofing Contractor Brooklyn",
    "Commercial Remodeling Manhattan",
    ...HOT_KEYWORDS,
    "Licensed Contractor Bronx",
    "NYC Building Contractor",
    "Masonry Contractor NYC",
  ],
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
      "NYC's #1 licensed general contractor. Facade restoration, roof repair, brick pointing, DOB/DOT violation removal, waterproofing & more. Free estimates. All 5 boroughs.",
    url: BASE_URL,
    siteName: "Mega Construction NYC",
    images: [
      {
        url: `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
        width: 1200,
        height: 630,
        alt: "Mega Construction NYC - General Contractor New York",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "General Contractor NYC | Mega Contracting NY Group",
    description:
      "NYC's #1 licensed general contractor. Facade restoration, roof repair, brick pointing, DOB/DOT violation removal, waterproofing & more. Free estimates.",
    images: [`${BASE_URL}/assets/Mega-Contracting-Logo.png`],
  },
};

export default function Home() {
  const schemas = [
    // ── 1. LocalBusiness / GeneralContractor (beast mode) ──────────────────────
    {
      "@context": "https://schema.org",
      "@type": ["GeneralContractor", "LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${BASE_URL}/#business`,
      "name": "Mega Contracting NY Group",
      "alternateName": ["General Contractor NYC", "Mega Construction NYC", "Mega Contracting Group"],
      "description":
        "Mega Contracting NY Group is NYC's #1 licensed general contractor specializing in facade restoration, roof leak repair, flat roofing, chimney repair, fire escape painting, parapet wall repair, stucco repair, EIFS, DOB violation removal, DOT violation removal, sidewalk repair, building safety assessments, brick pointing, foundation repair, and waterproofing across all 5 boroughs.",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
        "width": 400,
        "height": 400,
      },
      "image": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
      "telephone": "+19148043000",
      "email": "info@megacontractinggroup.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3044 Radcliff Ave",
        "addressLocality": "Bronx",
        "addressRegion": "NY",
        "postalCode": "10469",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "40.8731",
        "longitude": "-73.8644",
      },
      "hasMap": "https://maps.google.com/?q=3044+Radcliff+Ave+Bronx+NY+10469",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "19:00",
        },
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1",
      },
      "priceRange": "$$",
      "paymentAccepted": "Cash, Credit Card, Check",
      "currenciesAccepted": "USD",
      "areaServed": [
        { "@type": "City", "name": "New York City", "sameAs": "https://www.wikidata.org/wiki/Q60" },
        { "@type": "AdministrativeArea", "name": "Manhattan" },
        { "@type": "AdministrativeArea", "name": "Brooklyn" },
        { "@type": "AdministrativeArea", "name": "Queens" },
        { "@type": "AdministrativeArea", "name": "Bronx" },
        { "@type": "AdministrativeArea", "name": "Staten Island" },
        { "@type": "AdministrativeArea", "name": "Long Island" },
        { "@type": "AdministrativeArea", "name": "Westchester" },
      ],
      "sameAs": [
        "https://www.instagram.com/megacontractingny",
        "https://www.linkedin.com/company/mega-contracting-ny-group",
        "https://www.facebook.com/megacontractingnygroup",
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
      "founder": {
        "@type": "Person",
        "name": "Adil Shamis",
        "jobTitle": "Founder & General Contractor",
        "worksFor": { "@type": "Organization", "name": "Mega Contracting NY Group" },
      },
      "foundingDate": "2005",
      "award": "BBB A+ Accredited Business",
      "license": "NYC License #NYC-2005-8942",
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 20, "maxValue": 100 },
    },

    // ── 2. WebSite schema (search box support) ─────────────────────────────────
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "url": BASE_URL,
      "name": "Mega Construction NYC",
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
      "name": "Mega Contracting NY Group",
      "url": BASE_URL,
      "logo": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-914-804-3000",
        "contactType": "customer service",
        "areaServed": "US-NY",
        "availableLanguage": "English",
      },
      "sameAs": [
        "https://www.instagram.com/megacontractingny",
        "https://www.linkedin.com/company/mega-contracting-ny-group",
        "https://www.facebook.com/megacontractingnygroup",
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
