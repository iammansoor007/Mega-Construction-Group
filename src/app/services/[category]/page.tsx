import { Metadata } from "next";
import { resolveCategory } from "@/lib/servicesResolver";
import { getServiceCategorySeo } from "@/data/servicesSeoData";
import CategoryClient from "./_components/CategoryClient";
import { business } from "@/config/business";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category;
  const service = resolveCategory(categoryId);
  const seo = getServiceCategorySeo(categoryId);

  return {
    title: {
      absolute: seo.seoTitle,
    },
    description: seo.metaDescription,
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
  const service = resolveCategory(categoryId);
  const seo = getServiceCategorySeo(categoryId);

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
        "name": business.name,
        "image": "https://www.megacontractingnyc.com/favicon.png",
        "telephone": business.phoneE164,
        "email": business.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": business.address.street,
          "addressLocality": business.address.city,
          "addressRegion": business.address.state,
          "postalCode": business.address.zip,
          "addressCountry": "US"
        }
      },
      "areaServed": business.boroughs.map((b) => ({
        "@type": "AdministrativeArea",
        "name": b
      }))
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
