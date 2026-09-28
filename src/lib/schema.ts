export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "name": "Mega Contracting NY Group",
  "url": "https://www.megacontractingnyc.com",
  "logo": "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
  "telephone": "+19148043000",
  "email": "info@megacontractinggroup.com",
  "foundingDate": "2005",
  "description": "Licensed general contractor serving all 5 boroughs of NYC since 2005",
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
    "latitude": 40.8795,
    "longitude": -73.8662
  },
  "hasMap": "https://share.google/cQGmz8WB5ogZiDLnE",
  "areaServed": [
    { "@type": "Borough", "name": "Bronx" },
    { "@type": "Borough", "name": "Brooklyn" },
    { "@type": "Borough", "name": "Queens" },
    { "@type": "Borough", "name": "Manhattan" },
    { "@type": "Borough", "name": "Staten Island" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "100"
  },
  "sameAs": [
    "https://www.instagram.com/megacontractingny",
    "https://www.linkedin.com/company/mega-contracting-ny-group",
    "https://www.facebook.com/megacontractingnygroup"
  ]
};
