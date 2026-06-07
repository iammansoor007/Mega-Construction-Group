import { Metadata } from "next";
import FAQClient from "./_components/FAQClient";

export const metadata: Metadata = {
  title: "FAQs | Mega Construction NYC",
  description:
    "Have questions about our construction services? Browse frequently asked questions about roofing, masonry, concrete, renovation, and more. Mega Contracting NY Group — NYC's trusted contractor.",
  keywords: [
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
    "Construction FAQ NYC",
    "Roofing Questions New York",
    "How Much Does Roofing Cost NYC",
    "Construction Contractor FAQ",
    "Mega Construction FAQ",
    "NYC Contractor Questions",
    "Home Renovation FAQ New York",
  ],
  alternates: {
    canonical: "https://www.megacontractingnyc.com/faq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Frequently Asked Questions | Mega Construction NYC",
    description:
      "Get answers to common questions about our NYC construction services — roofing, masonry, concrete, renovation, pricing, timelines, and more.",
    url: "https://www.megacontractingnyc.com/faq",
    siteName: "Mega Construction NYC",
    images: [
      {
        url: "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
        width: 1200,
        height: 630,
        alt: "Mega Construction NYC FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "Frequently Asked Questions | Mega Construction NYC",
    description:
      "Answers to common questions about NYC construction services — roofing, masonry, concrete, renovation, pricing, and more.",
    images: ["https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png"],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you provide facade restoration in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, facade restoration is one of our core specialties. We handle full exterior building restoration including brick repointing, parapet wall repair, coping replacement, waterproofing, and structural repairs for residential and commercial buildings across all NYC boroughs. As a licensed facade restoration contractor, we're fully compliant with NYC Local Law 11 (FISP) requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Can you fix a roof leak in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Roof leak repair is one of the most common services we provide in NYC. We identify and fix leaks in flat roofs, pitched roofs, chimneys, skylights, gutters, and flashings. Our emergency roof leak repair team is available 24/7 for urgent situations. We work on all roof types including TPO, EPDM, modified bitumen, shingles, and built-up roofing."
        }
      },
      {
        "@type": "Question",
        "name": "What is flat roofing and do you install it in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flat roofing systems are standard for most commercial buildings and many residential properties in NYC. We install and repair all flat roofing systems including TPO (Thermoplastic Polyolefin), EPDM (rubber roofing), modified bitumen, and built-up roofing (BUR). Our flat roofing NYC services include installation, repair, restoration, and full replacement with manufacturer warranties."
        }
      },
      {
        "@type": "Question",
        "name": "Do you handle chimney repair in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide comprehensive chimney repair services throughout NYC — including chimney repointing (tuckpointing), chimney cap replacement, crown repair, flashing replacement, waterproofing, liner installation, and full chimney rebuilding. Damaged chimneys are a common source of water infiltration and structural risk. We address all issues quickly and safely."
        }
      },
      {
        "@type": "Question",
        "name": "What is fire escape painting and certification in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fire escapes in NYC must be inspected, repaired, and painted regularly to comply with the NYC Administrative Code (§27-371). We provide full fire escape services including rust removal, structural repair, painting with rust-inhibiting primer and topcoat, and compliance documentation. Building owners face violations for deteriorated or unpainted fire escapes — we handle end-to-end compliance."
        }
      },
      {
        "@type": "Question",
        "name": "What is parapet wall repair and when is it needed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A parapet wall is the low protective wall at the edge of a rooftop. In NYC, parapet walls are subject to Local Law 11 (FISP) inspection and must be maintained in safe condition. Signs you need parapet wall repair include crumbling mortar, cracked bricks, displaced coping stones, and water infiltration. We repair and restore parapet walls across all NYC boroughs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do stucco repair in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we are a licensed stucco repair and installation contractor in NYC. We work with traditional Portland cement stucco, EIFS (Exterior Insulation and Finish System), and California-style stucco. Our stucco services include crack repair, patch work, full re-stucco, color matching, and waterproofing. We restore stucco on houses, commercial buildings, and historic properties across all five boroughs."
        }
      },
      {
        "@type": "Question",
        "name": "What is an EIFS contractor and do you provide EIFS in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EIFS (Exterior Insulation and Finish System) is a multi-layer exterior cladding system that provides insulation and a decorative finish. We are certified EIFS contractors in NYC, handling installation, repair, remediation, and replacement of EIFS systems for commercial and residential buildings. EIFS is popular for its energy efficiency and design flexibility."
        }
      },
      {
        "@type": "Question",
        "name": "Can you handle DOB violation removal in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in full DOB (Department of Buildings) violation removal in NYC. This includes identifying the violation, performing all required repairs, filing necessary paperwork with the NYC DOB, and obtaining a Certificate of Correction. Common violations we resolve include facade defects (Local Law 11), roofing issues, structural deficiencies, and fire escape violations. We handle the entire process from start to close."
        }
      },
      {
        "@type": "Question",
        "name": "Do you remove DOT violations and repair sidewalks in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in DOT (Department of Transportation) violation removal and sidewalk repair in NYC. Under NYC Local Law 49, property owners are responsible for maintaining the sidewalk adjacent to their property. We perform concrete sidewalk repair and replacement, file all required permits, and obtain sign-off from the NYC DOT — handling the full violation removal process."
        }
      },
      {
        "@type": "Question",
        "name": "What is a building safety assessment in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A building safety assessment is a comprehensive inspection of your building's exterior, structural components, roof, and critical systems to identify unsafe conditions, DOB violations, and maintenance priorities. Under NYC Local Law 11 (FISP), all buildings taller than 6 stories must undergo facade inspections every 5 years. We provide thorough safety assessments for residential and commercial properties citywide."
        }
      },
      {
        "@type": "Question",
        "name": "What is brick pointing and do you do it in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brick pointing (also called tuckpointing or repointing) is the process of removing deteriorated mortar from joints between bricks and replacing it with fresh mortar. Over time, mortar erodes due to weather exposure, allowing water penetration and structural damage. We provide professional brick pointing services for brownstones, townhouses, commercial buildings, and high-rises throughout NYC."
        }
      },
      {
        "@type": "Question",
        "name": "Do you do foundation repair in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we handle foundation repair for residential and commercial buildings in NYC. Foundation issues are often caused by soil settlement, water infiltration, aging concrete, or nearby excavation. Our foundation repair services include crack sealing, waterproofing, underpinning, and structural reinforcement. Early foundation repair prevents far more costly structural damage — contact us for a free assessment."
        }
      },
      {
        "@type": "Question",
        "name": "Are you a waterproofing contractor in NYC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, waterproofing is one of our most in-demand services in New York. We provide interior and exterior waterproofing for basements, foundations, rooftops, terraces, retaining walls, and building envelopes. Our solutions include crystalline waterproofing, elastomeric coatings, drainage systems, and full membrane applications. Proper waterproofing protects your property from water damage, mold, and structural deterioration."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient />
    </>
  );
}
