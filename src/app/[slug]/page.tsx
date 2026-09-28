import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import MarqueeSection from "@/components/MarqueeSection";
import ServiceCTA from "@/components/ServiceCTA";
import { bronxSeoPages } from "@/data/bronxSeoPages";
import {
  ShieldCheck, CheckCircle2, Phone, ArrowRight,
  ChevronRight, Award, Clock, Star, MapPin, Hammer
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(bronxSeoPages).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = bronxSeoPages[slug];

  if (!page) {
    return {
      title: "Page Not Found | Mega Contracting NY Group",
    };
  }

  const BASE_URL = "https://www.megacontractingnyc.com";

  return {
    title: {
      absolute: page.seoTitle,
    },
    description: page.metaDesc,
    keywords: [
      page.keyword,
      page.h1,
      "Mega Contracting NY Group",
      "Licensed Contractor NYC",
      "Bronx General Contractor",
      "Brooklyn Contractor",
      "DOB Compliant Contractor NYC",
    ],
    alternates: {
      canonical: `${BASE_URL}/${page.slug}`,
    },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDesc,
      url: `${BASE_URL}/${page.slug}`,
      siteName: "Mega Contracting NY Group",
      images: [
        {
          url: `${BASE_URL}${page.image}`,
          width: 1200,
          height: 630,
          alt: `${page.h1} - Mega Contracting NY Group`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@megacontractingny",
      creator: "@megacontractingny",
      title: page.seoTitle,
      description: page.metaDesc,
      images: [`${BASE_URL}${page.image}`],
    },
  };
}

export default async function BronxSeoPage({ params }: Props) {
  const { slug } = await params;
  const page = bronxSeoPages[slug];

  if (!page) {
    notFound();
  }

  const BASE_URL = "https://www.megacontractingnyc.com";

  // Schema definitions: Service, LocalBusiness, Breadcrumbs, FAQPage
  const schemas: any[] = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": page.h1,
      "serviceType": page.keyword,
      "description": page.metaDesc,
      "url": `${BASE_URL}/${page.slug}`,
      "image": `${BASE_URL}${page.image}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Mega Contracting NY Group",
        "url": BASE_URL,
        "telephone": "+19148043000",
        "email": "info@megacontractinggroup.com",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "3044 Radcliff Ave",
          "addressLocality": "Bronx",
          "addressRegion": "NY",
          "postalCode": "10469",
          "addressCountry": "US",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.8731,
          "longitude": -73.8644,
        },
        "hasMap": "https://share.google/cQGmz8WB5ogZiDLnE",
        "areaServed": ["Bronx", "Brooklyn", "Queens", "Manhattan", "Staten Island"],
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Bronx" },
        { "@type": "AdministrativeArea", "name": "Brooklyn" },
        { "@type": "AdministrativeArea", "name": "Manhattan" },
        { "@type": "AdministrativeArea", "name": "Queens" },
        { "@type": "AdministrativeArea", "name": "Staten Island" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": ["GeneralContractor", "LocalBusiness"],
      "name": "Mega Contracting NY Group",
      "url": `${BASE_URL}/${page.slug}`,
      "logo": `${BASE_URL}/assets/Mega-Contracting-Logo.png`,
      "image": `${BASE_URL}${page.image}`,
      "telephone": "+19148043000",
      "email": "info@megacontractinggroup.com",
      "priceRange": "$$",
      "hasMap": "https://share.google/cQGmz8WB5ogZiDLnE",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3044 Radcliff Ave",
        "addressLocality": "Bronx",
        "addressRegion": "NY",
        "postalCode": "10469",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.8731,
        "longitude": -73.8644,
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Bronx" },
        { "@type": "AdministrativeArea", "name": "Brooklyn" },
        { "@type": "AdministrativeArea", "name": "Manhattan" },
        { "@type": "AdministrativeArea", "name": "Queens" },
        { "@type": "AdministrativeArea", "name": "Staten Island" },
      ],
      "knowsAbout": [page.keyword, page.h1, "General Contractor NYC"],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": page.categoryHubTitle,
          "item": `${BASE_URL}${page.categoryHub}`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": page.h1,
          "item": `${BASE_URL}/${page.slug}`,
        },
      ],
    },
  ];

  if (page.faqs && page.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    });
  }

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-600 selection:text-white">
        <Navbar />

        {/* ── HERO SECTION ──────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-36 pb-20 bg-gray-950 text-white">
          <div className="absolute inset-0 select-none grayscale opacity-35 z-0">
            <Image
              src={page.image}
              alt={`${page.keyword} service in New York by Mega Contracting NY Group`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
            <div className="flex flex-col items-start space-y-6 max-w-4xl">
              {/* Breadcrumb Navigation */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-white/60 font-bold">
                <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <Link href={page.categoryHub} className="hover:text-red-500 transition-colors">{page.categoryHubTitle}</Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <span className="text-red-500">{page.keyword}</span>
              </div>

              {/* Division Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-red-500" />
                <span>Licensed NYC General Contractor #NYC-2005-8942</span>
              </div>

              {/* Exact H1 Tag from Master List */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase leading-[1.1] font-heading">
                {page.h1}
              </h1>

              {/* Primary Keyword in First Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl">
                Looking for trusted <strong className="text-white font-semibold">{page.keyword}</strong>? {page.heroHighlight}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+19148043000"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-2xl border border-white/25 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call (914) 804-3000</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-white/80">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>$5M Commercial Liability</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-red-400" />
                  <span>BBB A+ Accredited</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>24/7 Rapid Response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Marquee */}
        <MarqueeSection text={`${page.keyword.toUpperCase()} • LICENSED NYC GENERAL CONTRACTOR • FREE ESTIMATES • FULL CODE COMPLIANCE • GUARANTEED WORKMANSHIP •`} />

        {/* ── CORE FEATURES GRID ─────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Why Choose Us"
              headline={`Expertise in <span class='text-red-600'>${page.keyword}</span>`}
              description="Engineered solutions built to endure New York City climate conditions and strict municipal building codes."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{feature}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Executed by licensed, factory-certified craftsmen with full NYC Department of Buildings compliance.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 600+ WORDS DETAILED CONTRACTOR CONTENT ───────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Rich Long-Form Copy */}
              <div className="lg:col-span-8 space-y-10 text-left">
                {page.contentSections.map((section, idx) => (
                  <div key={idx} className="space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-950 font-heading">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-gray-700 leading-relaxed text-base sm:text-lg font-normal">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}

                {/* Local Area Service Authority Block */}
                <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
                  <h3 className="text-xl font-bold uppercase font-heading text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span>Serving All Five Boroughs &amp; Surrounding Areas</span>
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Mega Contracting NY Group provides prompt, licensed service across the Bronx (Riverdale, Throggs Neck, Pelham Bay, Morris Park, City Island, Kingsbridge), Brooklyn (Park Slope, Bay Ridge, Williamsburg, DUMBO, Bushwick), Manhattan, Queens, Staten Island, Long Island, and Westchester County.
                  </p>
                </div>
              </div>

              {/* Right Column: Visual Showcase & Sticky Lead Callout */}
              <div className="lg:col-span-4 space-y-8">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src={page.image}
                    alt={`${page.h1} Project Photo`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-8 rounded-3xl bg-gray-950 text-white space-y-6 shadow-2xl">
                  <div className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Free Consultation
                  </div>
                  <h3 className="text-2xl font-bold uppercase font-heading leading-tight">
                    Ready to discuss your {page.keyword} project?
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Get an itemized quote within 24 hours. Our estimators visit your site, inspect structural conditions, and provide transparent pricing.
                  </p>
                  <div className="space-y-3 pt-2">
                    <Link
                      href="/contact"
                      className="block w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest text-center rounded-xl shadow-lg transition-all"
                    >
                      Request Free Quote
                    </Link>
                    <a
                      href="tel:+19148043000"
                      className="block w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest text-center rounded-xl border border-white/20 transition-all"
                    >
                      Call (914) 804-3000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION (Matches PDF & Google Rich Results) ───────────── */}
        {page.faqs && page.faqs.length > 0 && (
          <section className="py-16 md:py-20 bg-gray-50 border-t border-gray-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader
                badge="FAQ"
                headline={`Frequently Asked Questions About <span class='text-red-600'>${page.keyword}</span>`}
                description="Common questions about costs, permits, timelines, and municipal code compliance."
              />

              <div className="space-y-4 text-left">
                {page.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5 flex items-start gap-3">
                      <span className="text-red-600 font-mono text-sm shrink-0 mt-0.5">Q{idx + 1}.</span>
                      <span>{faq.question}</span>
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED SILO PAGES (PDF Silo Architecture) ────────────────── */}
        {page.relatedPages && page.relatedPages.length > 0 && (
          <section className="py-14 bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-red-600">Explore More Services</span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-950 font-heading mt-1">
                    Related Specialized Divisions
                  </h2>
                </div>
                <Link
                  href={page.categoryHub}
                  className="inline-flex items-center gap-2 text-xs text-red-600 hover:text-red-700 font-bold uppercase tracking-widest"
                >
                  <span>View {page.categoryHubTitle}</span> <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {page.relatedPages.map((rel, idx) => (
                  <Link
                    key={idx}
                    href={`/${rel.slug}`}
                    className="p-4 rounded-xl border border-gray-200 hover:border-red-500/40 hover:shadow-md transition-all duration-300 bg-white flex items-center justify-between group"
                  >
                    <span className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {rel.title}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── FINAL HIGH-CONVERTING CTA ──────────────────────────────────── */}
        <section className="pb-12 md:pb-20 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ServiceCTA
              cta={{
                title: `Get Your Free Estimate For ${page.keyword}`,
                description: `Contact our licensed general contracting team today for dependable ${page.keyword.toLowerCase()} services in New York.`,
                buttons: [
                  { text: "Get Free Estimate", href: "/contact", primary: true },
                  { text: "Call (914) 804-3000", href: "tel:+19148043000", primary: false },
                ],
              }}
            />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
