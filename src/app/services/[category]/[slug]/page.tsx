import { Metadata } from "next";
import { resolveCategory, resolveSubcategory } from "@/lib/servicesResolver";
import { getServiceDetailSeo } from "@/data/servicesSeoData";
import DetailClient from "./_components/DetailClient";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = resolveCategory(category);
  const subCategory = service ? resolveSubcategory(service, slug) : undefined;
  const seo = getServiceDetailSeo(category, slug);

  if (!service || !subCategory) {
    return {
      title: { absolute: "Service Details | Mega Contracting NY Group" },
    };
  }

  const keywords = [
    seo.primaryKeyword,
    subCategory.title,
    `${subCategory.title} NYC`,
    `${subCategory.title} Bronx`,
    `${subCategory.title} Brooklyn`,
    `${subCategory.title} Queens`,
    "Mega Contracting NY Group",
    "NYC General Contractor",
    "Licensed Construction Contractor NYC",
  ];

  return {
    title: {
      absolute: seo.seoTitle,
    },
    description: seo.metaDescription,
    keywords,
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
  const subCategory = service ? resolveSubcategory(service, slug) : undefined;
  const seo = getServiceDetailSeo(category, slug);

  if (!service || !subCategory) {
    return <DetailClient categoryId={category} slug={slug} />;
  }

  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seo.h1,
      "description": seo.metaDescription,
      "provider": {
        "@type": "GeneralContractor",
        "name": "Mega Contracting NY Group",
        "legalName": "Mega Contracting NY Group Inc.",
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
        }
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Manhattan" },
        { "@type": "AdministrativeArea", "name": "Brooklyn" },
        { "@type": "AdministrativeArea", "name": "Queens" },
        { "@type": "AdministrativeArea", "name": "Bronx" },
        { "@type": "AdministrativeArea", "name": "Staten Island" }
      ]
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

  if (subCategory.faqs && subCategory.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": subCategory.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

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
