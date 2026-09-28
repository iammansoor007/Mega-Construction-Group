import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { servicesData } from "@/data/servicesData";
import { ChevronRight, ArrowRight, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "HTML Website Sitemap & Service Directory | Mega Contracting NY Group",
  },
  description:
    "Complete navigation directory and HTML sitemap of all construction services, borough hubs, technical licensing, and customer service pages for Mega Contracting NY Group.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/sitemap",
  },
  openGraph: {
    title: "HTML Website Sitemap & Service Directory | Mega Contracting NY Group",
    description: "Complete navigation directory and HTML sitemap of all construction services, borough hubs, technical licensing, and customer service pages for Mega Contracting NY Group.",
    url: "https://www.megacontractingnyc.com/sitemap",
    siteName: "Mega Contracting NY Group",
    locale: "en_US",
    type: "website",
  },
};

export default function SitemapPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "HTML Sitemap & Complete Service Directory",
    "description": "Full directory of NYC contracting services, subcategories, and company resources.",
    "url": "https://www.megacontractingnyc.com/sitemap",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.megacontractingnyc.com" },
        { "@type": "ListItem", "position": 2, "name": "HTML Sitemap", "item": "https://www.megacontractingnyc.com/sitemap" }
      ]
    }
  };
  const mainPages = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "All Services", href: "/services" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact & Free Quote", href: "/contact" },
    { name: "Licenses & Certifications", href: "/licenses" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "XML Sitemap", href: "/sitemap.xml" },
  ];

  const highPrioritySeoPages = [
    { name: "Chimney Repair Bronx NY", href: "/chimney-repair-bronx" },
    { name: "Stucco Repair Brooklyn NY", href: "/stucco-repair-brooklyn" },
    { name: "Smart Home & Home Automation Brooklyn", href: "/smart-home-brooklyn" },
    { name: "Facade Restoration NYC", href: "/facade-restoration-nyc" },
    { name: "DOT Sidewalk Violation Removal NYC", href: "/dot-violation-removal-nyc" },
    { name: "Fire Escape Painting NYC", href: "/fire-escape-painting-nyc" },
    { name: "Emergency Roof Leak Repair NYC", href: "/roof-leak-repair-nyc" },
    { name: "Foundation Repair Brooklyn NY", href: "/foundation-repair-brooklyn" },
    { name: "Flat Roofing NYC", href: "/flat-roofing-nyc" },
    { name: "Bathroom Renovation Bronx NY", href: "/bathroom-renovation-bronx" },
    { name: "Concrete Contractor Bronx NY", href: "/outdoor-concrete-bronx" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />

      <section className="relative pt-36 pb-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-red-600" />
            <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
              Site Index &amp; Structure
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight font-heading mb-6">
            Mega Contracting NY Group <span className="text-red-600">Website Sitemap</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Easily navigate all service specializations, borough landing pages, licenses, and company information across megacontractingnyc.com.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Main Pages */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-tight font-heading text-gray-950 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-full" /> Main Pages &amp; Legal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {mainPages.map((page, i) => (
                <Link
                  key={i}
                  href={page.href}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors border border-gray-100 text-sm font-semibold text-gray-800"
                >
                  <span>{page.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>
          </div>

          {/* High Priority SEO Borough Pages */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold uppercase tracking-tight font-heading text-gray-950 mb-6 flex items-center gap-2">
              <span className="w-3 h-3 bg-red-600 rounded-full" /> Priority Specialized &amp; Borough Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {highPrioritySeoPages.map((page, i) => (
                <Link
                  key={i}
                  href={page.href}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors border border-gray-100 text-sm font-semibold text-gray-800"
                >
                  <span>{page.name}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}
            </div>
          </div>

          {/* All Construction Service Categories & Subcategories */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold uppercase tracking-tight font-heading text-gray-950 text-center">
              Comprehensive Service Divisions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {servicesData.map((service) => (
                <div key={service.id} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                      <Link
                        href={`/services/${service.id}`}
                        className="text-xl font-bold text-gray-950 hover:text-red-600 uppercase font-heading transition-colors"
                      >
                        {service.title}
                      </Link>
                      <Link
                        href={`/services/${service.id}`}
                        className="text-xs font-bold uppercase tracking-wider text-red-600 hover:underline flex items-center gap-1"
                      >
                        Division Overview <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400 mb-3">Specialized Sub-Services:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.subcategories.map((sub) => (
                          <Link
                            key={sub.id}
                            href={`/services/${service.id}/${sub.id}`}
                            className="p-2.5 rounded-lg bg-gray-50 hover:bg-red-50 hover:text-red-600 transition-colors text-xs font-medium text-gray-700 flex items-center justify-between"
                          >
                            <span>{sub.title}</span>
                            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </>
);
}
