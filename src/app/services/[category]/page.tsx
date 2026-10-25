import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { getServiceCategorySeo } from "@/data/servicesSeoData";
import CategoryClient from "./_components/CategoryClient";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  const service = servicesData.find((s) => s.id === categoryId);
  const seo = getServiceCategorySeo(categoryId);

  if (!service) {
    return {
      title: { absolute: "Service Division | Mega Contracting NY Group" },
    };
  }

  const keywords = [
    seo.primaryKeyword,
    `${service.title} NYC`,
    `best ${service.title.toLowerCase()} contractor new york`,
    `licensed ${service.title.toLowerCase()} services`,
    "Mega Contracting NY Group",
    "NYC general contractor",
    "exterior building restoration NYC",
  ];

  return {
    title: {
      absolute: seo.seoTitle,
    },
    description: seo.metaDescription,
    keywords,
    alternates: {
      canonical: `https://www.megacontractingnyc.com/services/${categoryId}`,
    },
    openGraph: {
      title: seo.seoTitle,
      description: seo.metaDescription,
      url: `https://www.megacontractingnyc.com/services/${categoryId}`,
      siteName: "Mega Contracting NY Group",
      images: [
        {
          url: service.image || "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg",
          width: 1200,
          height: 630,
          alt: `${seo.h1} - Mega Contracting NY Group`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@megacontractingny",
      creator: "@megacontractingny",
      title: seo.seoTitle,
      description: seo.metaDescription,
      images: [service.image || "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg"],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  const service = servicesData.find((s) => s.id === categoryId);
  const seo = getServiceCategorySeo(categoryId);

  if (!service) return <CategoryClient categoryId={categoryId} />;

  // Composite Schemas for maximum local crawlability & indexability
  const schemas = [
    // 1. Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seo.h1,
      "description": seo.metaDescription,
      "provider": {
        "@type": "GeneralContractor",
        "name": "Mega Contracting NY Group",
        "image": "https://www.megacontractingnyc.com/favicon.png",
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
          "item": "https://www.megacontractingnyc.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.megacontractingnyc.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": seo.h1,
          "item": `https://www.megacontractingnyc.com/services/${categoryId}`
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
