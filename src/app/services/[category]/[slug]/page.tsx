import { Metadata } from "next";
import { resolveCategory, resolveSubcategory } from "@/lib/servicesResolver";
import { getServiceDetailSeo } from "@/data/servicesSeoData";
import DetailClient from "./_components/DetailClient";
import { business } from "@/config/business";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = resolveCategory(category);
  const subCategory = resolveSubcategory(service, slug);
  const seo = getServiceDetailSeo(category, slug);

  return {
    title: {
      absolute: seo.seoTitle,
    },
    description: seo.metaDescription,
    alternates: {
      canonical: `https://www.megacontractingnyc.com/services/${category}/${slug}`,
    },
    openGraph: {
      title: seo.seoTitle,
      description: seo.metaDescription,
      url: `https://www.megacontractingnyc.com/services/${category}/${slug}`,
      siteName: "Mega Contracting NY Group",
      images: [
        {
          url: subCategory.image || service.image || "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg",
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
      images: [subCategory.image || service.image || "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg"],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = resolveCategory(category);
  const subCategory = resolveSubcategory(service, slug);
  const seo = getServiceDetailSeo(category, slug);

  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seo.h1,
      "description": seo.metaDescription,
      "url": `https://www.megacontractingnyc.com/services/${category}/${slug}`,
      "provider": {
        "@type": "GeneralContractor",
        "name": business.name,
        ...(business.legalName ? { "legalName": business.legalName } : {}),
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
          "name": service.title,
          "item": `https://www.megacontractingnyc.com/services/${category}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": seo.h1,
          "item": `https://www.megacontractingnyc.com/services/${category}/${slug}`
        }
      ]
    }
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <DetailClient categoryId={category} slug={slug} />
    </>
  );
}
