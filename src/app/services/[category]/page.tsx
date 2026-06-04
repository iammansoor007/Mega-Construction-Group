import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import CategoryClient from "./_components/CategoryClient";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  const service = servicesData.find((s) => s.id === categoryId);

  if (!service) {
    return {
      title: "Service Division | Mega Construction NYC",
    };
  }

  // Beast Mode Local SEO Keywords (High-Density & High-Intent)
  const keywords = [
    `${service.title} NYC`,
    `best ${service.title.toLowerCase()} contractor new york`,
    `licensed ${service.title.toLowerCase()} services`,
    "Mega Construction NYC",
    "NYC general contractor",
    "exterior building restoration NYC",
  ];

  if (categoryId === "roofing-services") {
    keywords.push(
      "roof replacement NYC", "flat roof repair New York", "shingle roofing contractor Brooklyn",
      "TPO roofing NYC", "commercial roofing Queens", "emergency roof repair Bronx", "certified roofer Staten Island"
    );
  } else if (categoryId === "masonry-work") {
    keywords.push(
      "brick pointing NYC", "parapet wall repair Brooklyn", "historic brownstone restoration",
      "window caulking New York", "tuckpointing NYC", "structural masonry restoration", "lintel replacement NYC"
    );
  } else if (categoryId === "concrete-services") {
    keywords.push(
      "sidewalk repair NYC", "concrete driveway installation", "DOT violation removal",
      "paver patio builder Brooklyn", "concrete contractor Queens", "sidewalk replacement NYC", "concrete foundations Bronx"
    );
  } else if (categoryId === "stucco") {
    keywords.push(
      "stucco repair NYC", "california stucco finish", "EIFS systems installation",
      "exterior stucco contractor Brooklyn", "stucco remediation Queens", "color-matched stucco repair NYC"
    );
  }

  const title = `${service.title} Contractor NYC | Mega Construction NYC`;
  const description = `${service.description} Rely on Mega Construction NYC for certified, premium ${service.tag.toLowerCase()} engineering and restoration in NYC. Get a free estimate today!`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://megaconstructiongroup.com/services/${categoryId}`,
    },
    openGraph: {
      title,
      description,
      url: `https://megaconstructiongroup.com/services/${categoryId}`,
      siteName: "Mega Construction NYC",
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} NYC - Mega Construction NYC`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  const service = servicesData.find((s) => s.id === categoryId);

  if (!service) return <CategoryClient categoryId={categoryId} />;

  // Composite Schemas for maximum local crawlability & indexability
  const schemas = [
    // 1. Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${service.title} Contractor NYC`,
      "description": service.description,
      "provider": {
        "@type": "GeneralContractor",
        "name": "Mega Construction NYC",
        "image": "https://megaconstructiongroup.com/favicon.png",
        "telephone": "CALL OFFICE",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "priceRange": "$$"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Manhattan" },
        { "@type": "AdministrativeArea", "name": "Brooklyn" },
        { "@type": "AdministrativeArea", "name": "Queens" },
        { "@type": "AdministrativeArea", "name": "Bronx" },
        { "@type": "AdministrativeArea", "name": "Staten Island" }
      ]
    },
    // 2. BreadcrumbList Schema
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://megaconstructiongroup.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://megaconstructiongroup.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": service.title,
          "item": `https://megaconstructiongroup.com/services/${categoryId}`
        }
      ]
    }
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
      <CategoryClient categoryId={categoryId} />
    </>
  );
}
