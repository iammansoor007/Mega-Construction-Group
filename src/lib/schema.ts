import { business } from "@/config/business";

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": business.name,
  ...(business.legalName ? { "legalName": business.legalName } : {}),
  "url": "https://www.megacontractingnyc.com",
  "logo": "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
  "telephone": business.phoneE164,
  "email": business.email,
  ...(business.foundingYear ? { "foundingDate": String(business.foundingYear) } : {}),
  ...(business.founderStatement ? {
    "founder": {
      "@type": "Person",
      "name": "Adil Shamis",
      "jobTitle": "Managing Principal & Founder"
    }
  } : {}),
  ...(business.licenseLines.length > 0 ? {
    "license": `${business.licenseLines[0].label} ${business.licenseLines[0].number}`
  } : {}),
  "description": `Licensed general contractor serving all 5 boroughs of NYC. Family-owned general contracting firm incorporated as ${business.name}`,
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
    "latitude": 40.8795,
    "longitude": -73.8662
  },
  "hasMap": "https://share.google/cQGmz8WB5ogZiDLnE",
  "areaServed": business.boroughs.map((b) => ({
    "@type": "Borough",
    "name": b
  })),
  "sameAs": [
    business.social.instagram,
    business.social.linkedin,
    business.social.facebook
  ]
};
