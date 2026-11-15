import { Metadata } from "next";
import FAQClient from "./_components/FAQClient";

export const metadata: Metadata = {
  title: {
    absolute: "NYC Contractor FAQ | Construction Questions Answered",
  },
  description:
    "Get answers to your NYC construction questions — costs, permits, timelines & violations. Free consultation available.",
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
    title: "Frequently Asked Questions | Mega Contracting NY Group",
    description:
      "Get answers to common questions about our NYC construction services — roofing, masonry, concrete, renovation, pricing, timelines, and more.",
    url: "https://www.megacontractingnyc.com/faq",
    siteName: "Mega Contracting NY Group",
    images: [
      {
        url: "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
        width: 1200,
        height: 630,
        alt: "Mega Contracting NY Group FAQ",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@megacontractingny",
    creator: "@megacontractingny",
    title: "Frequently Asked Questions | Mega Contracting NY Group",
    description:
      "Answers to common questions about NYC construction services — roofing, masonry, concrete, renovation, pricing, and more.",
    images: ["https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png"],
  },
};

export default function FAQPage() {
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Frequently Asked Questions | Mega Contracting NY Group",
    "url": "https://www.megacontractingnyc.com/faq",
    "description":
      "Answers to common questions about NYC construction services — roofing, masonry, concrete, renovation, pricing, and more.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <FAQClient />
    </>
  );
}
