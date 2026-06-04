import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import DetailClient from "./_components/DetailClient";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = servicesData.find((s) => s.id === category);
  const subCategory = service?.subcategories.find((sub) => sub.id === slug);

  if (!service || !subCategory) {
    return {
      title: "Service Details | Mega Construction NYC",
    };
  }

  // Beast Mode Custom Titles targeting exact user search structures
  const title = `${subCategory.title} Services in NYC | Mega Construction NYC`;
  const description = `Looking for ${subCategory.title.toLowerCase()} in NYC? Mega Construction NYC offers professional, licensed, and guaranteed ${subCategory.title.toLowerCase()} for residential and commercial buildings across all NYC boroughs.`;

  // Specific high density local keywords optimized for NYC borough and category searches
  const keywords = [
    `${subCategory.title} NYC`,
    `${subCategory.title} Brooklyn`,
    `${subCategory.title} Queens`,
    `${subCategory.title} Manhattan`,
    `${subCategory.title} Bronx`,
    `${subCategory.title} Staten Island`,
    `best ${subCategory.title.toLowerCase()} contractor`,
    `how to repair ${subCategory.title.toLowerCase()}`,
    "Mega Construction NYC",
    "NYC construction experts",
    "DOB code compliant contractor",
    "licensed construction company NYC"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://megaconstructiongroup.com/services/${category}/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://megaconstructiongroup.com/services/${category}/${slug}`,
      siteName: "Mega Construction NYC",
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
      title,
      description,
      images: [subCategory.image || service.image],
    },
  };
}

export default async function Page({ params }: Props) {
  const resolvedParams = await params;
  const { category, slug } = resolvedParams;
  const service = servicesData.find((s) => s.id === category);
  const subCategory = service?.subcategories.find((sub) => sub.id === slug);

  if (!service || !subCategory) {
    return <DetailClient categoryId={category} slug={slug} />;
  }

  // Schema definitions: Service details, FAQ Page markup, and Breadcrumbs
  const schemas: any[] = [
    // 1. Service Schema
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": subCategory.title,
      "description": subCategory.description,
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
          "item": `https://megaconstructiongroup.com/services/${category}`
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": subCategory.title,
          "item": `https://megaconstructiongroup.com/services/${category}/${slug}`
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
