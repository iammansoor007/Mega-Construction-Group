import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { locationsData } from "@/data/locationsData";
import {
  ShieldCheck, CheckCircle2, Phone, ArrowRight,
  ChevronRight, MapPin, Building, Wrench, Clock, Star
} from "lucide-react";

interface Props {
  params: Promise<{ borough: string }>;
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((borough) => ({
    borough,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { borough } = await params;
  const data = locationsData[borough];

  if (!data) {
    return { title: "Location Not Found | Mega Contracting NY Group" };
  }

  const canonicalUrl = `https://www.megacontractingnyc.com/locations/${data.slug}`;

  return {
    title: { absolute: data.title },
    description: data.metaDesc,
    keywords: [
      `general contractor ${data.boroughName.toLowerCase()}`,
      `roofing contractor ${data.boroughName.toLowerCase()}`,
      `masonry contractor ${data.boroughName.toLowerCase()}`,
      `brick pointing ${data.boroughName.toLowerCase()}`,
      `facade restoration ${data.boroughName.toLowerCase()}`,
      "Mega Contracting NY Group Inc.",
      "Licensed NYC Contractor",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: data.title,
      description: data.metaDesc,
      url: canonicalUrl,
      siteName: "Mega Contracting NY Group",
      images: [{ url: "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDesc,
    },
  };
}

export default async function BoroughLocationPage({ params }: Props) {
  const { borough } = await params;
  const data = locationsData[borough];

  if (!data) {
    notFound();
  }

  const BASE_URL = "https://www.megacontractingnyc.com";

  // LocalBusiness + BreadcrumbList Schema for Borough
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "GeneralContractor",
      "name": `Mega Contracting NY Group - ${data.boroughName} Division`,
      "legalName": "Mega Contracting NY Group Inc.",
      "url": `${BASE_URL}/locations/${data.slug}`,
      "telephone": "+19148043000",
      "email": "info@megacontractinggroup.com",
      "foundingDate": "2005",
      "founder": {
        "@type": "Person",
        "name": "Adil Shamis",
        "jobTitle": "Managing Principal & Founder"
      },
      "license": "NYC Department of Buildings #NYC-2005-8942",
      "hasMap": "https://share.google/cQGmz8WB5ogZiDLnE",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3044 Radcliff Ave",
        "addressLocality": "Bronx",
        "addressRegion": "NY",
        "postalCode": "10469",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": data.boroughName
      },
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "100"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Locations", "item": `${BASE_URL}/locations` },
        { "@type": "ListItem", "position": 3, "name": data.boroughName, "item": `${BASE_URL}/locations/${data.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    }
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <Navbar />

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-600 selection:text-white">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-36 pb-20 bg-gray-950 text-white">
          <div className="absolute inset-0 select-none grayscale opacity-25 z-0">
            <Image
              src={data.image}
              alt={`${data.boroughName} Construction Services`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
            <div className="flex flex-col items-start space-y-6 max-w-4xl">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-white/60 font-bold">
                <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <Link href="/locations" className="hover:text-red-500 transition-colors">Locations</Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <span className="text-red-500">{data.boroughName}</span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>NYC Licensed General Contractor #NYC-2005-8942</span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight uppercase leading-[1.1] font-heading">
                {data.h1}
              </h1>

              {/* Intro */}
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal max-w-3xl">
                {data.intro}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-xl transition-all duration-300"
                >
                  Request {data.boroughName} Estimate
                </Link>
                <a
                  href="tel:+19148043000"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-2xl border border-white/25 transition-all duration-300 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>Call (914) 804-3000</span>
                </a>
              </div>

              {/* Neighborhoods tags */}
              <div className="pt-4 border-t border-white/10 w-full">
                <p className="text-[10px] uppercase font-bold tracking-widest text-white/50 mb-2">
                  Neighborhoods We Actively Serve in {data.boroughName}:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {data.neighborhoods.map((n, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-xs font-medium"
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── LOCAL BUILDING CONSIDERATIONS (Audit Requirement) ───────────── */}
        <section className="py-16 md:py-20 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <SectionHeader
              badge="Local Expertise"
              headline={`Architectural & Code Challenges in <span class='text-red-600'>${data.boroughName}</span>`}
              description={`Every NYC borough presents unique zoning, historic preservation, and climate stresses. Here is how we engineer solutions for ${data.boroughName} properties.`}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.localBuildingConsiderations.map((c, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center font-bold mb-4 font-mono">
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRIMARY SERVICES IN THIS BOROUGH ───────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <SectionHeader
              badge="Core Services"
              headline={`Specialized Services We Perform in <span class='text-red-600'>${data.boroughName}</span>`}
              description={`From urgent structural repairs to turn-key building renovations, our crews deliver licensed craftsmanship across ${data.boroughName}.`}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.primaryServices.map((svc, i) => (
                <Link
                  key={i}
                  href={svc.href}
                  className="p-6 rounded-2xl border border-gray-200 hover:border-red-600/50 hover:shadow-lg transition-all bg-white flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {svc.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 mt-4 group-hover:gap-2.5 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── RECENT BOROUGH PROJECTS ────────────────────────────────────── */}
        {data.recentProjects.length > 0 && (
          <section className="py-16 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
              <SectionHeader
                badge="Documented Evidence"
                headline={`Recent Work Completed in <span class='text-red-600'>${data.boroughName}</span>`}
                description="Real local case studies with verified scopes of work and engineering sign-offs."
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.recentProjects.map((proj, i) => (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{proj.location}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 font-heading">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                        {proj.scope}
                      </p>
                    </div>
                    <Link
                      href={proj.href}
                      className="inline-flex items-center gap-2 text-xs font-bold text-red-600 hover:text-red-700 uppercase tracking-widest"
                    >
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BOROUGH FAQS (Visible in HTML) ─────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
            <SectionHeader
              badge="FAQ"
              headline={`Frequently Asked Questions: <span class='text-red-600'>${data.boroughName} Contracting</span>`}
              description="Common questions about local permits, historical landmarks, insurance, and turnaround times."
            />

            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  open={i === 0}
                  className="group rounded-2xl border border-gray-200 p-6 bg-white shadow-sm transition-all"
                >
                  <summary className="cursor-pointer font-bold text-base md:text-lg text-gray-900 group-hover:text-red-600 list-none flex items-center justify-between gap-4">
                    <span>{faq.question}</span>
                    <span className="text-red-600 font-mono text-sm shrink-0">+</span>
                  </summary>
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4 font-normal">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICE AREA STATEMENT & CTA ───────────────────────────────── */}
        <section className="py-16 bg-gray-950 text-white border-t border-gray-900 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-red-500">
                Official NYC Service Area Statement
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading">
                Dependable Construction Contracting in {data.boroughName}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Mega Contracting NY Group Inc. is an active New York corporation headquartered at 3044 Radcliff Ave, Bronx, NY 10469, operating under NYC General Contractor License #NYC-2005-8942. We serve all residential, commercial, and multi-family property owners throughout {data.boroughName} with $5,000,000 liability insurance and 24/7 emergency dispatch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+19148043000"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/20 transition-all text-center"
              >
                (914) 804-3000
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
