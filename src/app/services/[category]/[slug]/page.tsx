import { Metadata } from "next";
import { resolveCategory, resolveSubcategory } from "@/lib/servicesResolver";
import DetailClient from "./_components/DetailClient";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = resolveCategory(category);
  const subCategory = service ? resolveSubcategory(service, slug) : undefined;

  if (!service || !subCategory) {
    return {
      title: "Service Details | Mega Contracting NY Group",
    };
  }

  const title = `${subCategory.title} Services in NYC | Mega Contracting NY Group`;
  const description = `Looking for ${subCategory.title.toLowerCase()} in NYC? Mega Contracting NY Group Inc. offers professional, licensed, and guaranteed ${subCategory.title.toLowerCase()} for residential and commercial buildings across all NYC boroughs.`;

  const keywords = [
    `${subCategory.title} NYC`,
    `${subCategory.title} Brooklyn`,
    `${subCategory.title} Queens`,
    `${subCategory.title} Manhattan`,
    `${subCategory.title} Bronx`,
    `${subCategory.title} Staten Island`,
    `best ${subCategory.title.toLowerCase()} contractor`,
    `how to repair ${subCategory.title.toLowerCase()}`,
    "Mega Contracting NY Group",
    "NYC construction experts",
    "DOB code compliant contractor",
    "licensed construction company NYC"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://www.megacontractingnyc.com/services/${category}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.megacontractingnyc.com/services/${category}/${slug}`,
      siteName: "Mega Contracting NY Group",
      images: [
        {
          url: subCategory.image || service.image,
          width: 1200,
          height: 630,
          alt: `${subCategory.title} NYC`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@megacontractingny",
      creator: "@megacontractingny",
      title,
      description,
      images: [subCategory.image || service.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = resolveCategory(category);
  const subCategory = service ? resolveSubcategory(service, slug) : undefined;

  if (!service || !subCategory) {
    return <DetailClient categoryId={category} slug={slug} />;
  }

  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": subCategory.title,
      "description": subCategory.description,
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
          "name": subCategory.title,
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
