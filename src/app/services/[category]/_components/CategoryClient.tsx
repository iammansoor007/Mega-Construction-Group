"use client";

import { resolveCategory } from "@/lib/servicesResolver";
import { getServiceCategorySeo } from "@/data/servicesSeoData";
import { getHubContent } from "@/data/hubsContentData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronRight, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import MarqueeSection from "@/components/MarqueeSection";
import SectionHeader from "@/components/SectionHeader";
import { business } from "@/config/business";
import { useRef } from "react";

export default function CategoryClient({ categoryId }: { categoryId: string }) {
  const service = resolveCategory(categoryId);
  const seo = getServiceCategorySeo(categoryId);
  const hubContent = getHubContent(categoryId);
  const containerRef = useRef(null);

  return (
    <main ref={containerRef} className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32 pb-20 blueprint-grid">
        <div className="tech-scanner" />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-40 text-white" />
              <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 opacity-40 text-white" />
              <span className="text-red-500">{service.tag}</span>
            </div>

            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
                {service.tag} Division
              </span>
            </div>

            <h1 className="heading-lg text-white leading-none tracking-tight">
              {seo.h1}
            </h1>

            <p className="text-base md:text-xl text-white/95 leading-relaxed max-w-2xl font-normal">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href={`/contact?service=${categoryId}`}
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300 min-h-[44px] flex items-center justify-center"
              >
                Request estimate
              </Link>
              <a
                href={`tel:${business.phoneE164}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-2xl border border-white/20 transition-all duration-300 min-h-[44px] flex items-center justify-center"
              >
                Call {business.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC MARQUEE */}
      <MarqueeSection text={`Industrial Grade ${service.tag} • Licensed NYC Contractors •`} />

      {/* ====================== */}
      {/* HUB OVERVIEW & DIRECTORY */}
      {/* ====================== */}
      {hubContent && (
        <section className="py-12 md:py-16 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-left">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-red-600" />
                <span className="text-red-600 uppercase tracking-widest text-xs font-bold">
                  Overview & Scope of Work
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-heading mb-6">
                Comprehensive {service.title} in New York City
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-8">
                {hubContent.intro}
              </p>

              {/* Child Services Directory */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider mb-4 font-heading">
                  Available Service Divisions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {hubContent.childServices.map((child) => (
                    <Link
                      key={child.id}
                      href={child.href}
                      className="group p-4 rounded-2xl bg-white border border-gray-200 hover:border-red-500/50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                            {child.title}
                          </h4>
                          <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed font-normal">
                          {child.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ====================== */}
      {/* SERVICE SPECIALIZATIONS */}
      {/* ====================== */}
      <section className="py-8 md:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
          <SectionHeader
            badge="Technical Capabilities"
            headline="Our <span class='text-red-600'>Specializations</span>"
            description={`Explore our target divisions and expertise under the ${service.title} capabilities.`}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {service.subcategories.map((sub, index) => (
              <Link
                key={sub.id}
                href={`/services/${categoryId}/${sub.id}`}
                className="block h-full group/card"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="relative h-full bg-white rounded-3xl overflow-hidden border border-gray-200 group-hover/card:border-red-500/50 transition-all duration-500 shadow-lg group-hover/card:shadow-2xl flex flex-col smooth-gpu"
                >
                  {/* Top Image Container */}
                  <div className="relative h-60 overflow-hidden bg-gray-100">
                    <Image
                      src={sub.image || "/placeholder.svg"}
                      alt={`${sub.title} field installation and construction`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                    
                    {/* Floating tag badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-bold text-white border border-white/30 uppercase tracking-widest shadow-xl">
                        Specialization
                      </div>
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6 xs:p-8 flex-1 flex flex-col justify-between text-left">
                    <div className="space-y-4">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                        Licensed Contractor
                      </span>
                      
                      <h3 className="text-xl xs:text-2xl font-bold text-gray-900 group-hover/card:text-red-600 transition-colors leading-tight">
                        {sub.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                        {sub.description}
                      </p>

                      {/* Benefits bullet list */}
                      {sub.benefits && (
                        <div className="space-y-2.5 pt-2 flex-1">
                          {sub.benefits.slice(0, 3).map((benefit: any, i: number) => (
                            <div key={i} className="flex items-center gap-3 text-xs text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                              <span className="font-medium">{benefit.title}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between group/link">
                      <span className="text-xs font-bold uppercase tracking-widest text-red-600 group-hover/card:tracking-[0.2em] transition-all duration-500">
                        EXPLORE SPECIALIZATION
                      </span>
                      <ArrowRight className="w-5 h-5 text-red-600" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* TECHNICAL FAQS (<details>) */}
      {/* ====================== */}
      {hubContent && hubContent.faqs && (
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 xs:px-6 md:px-8 text-left">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-6 h-px bg-red-600" />
              <span className="text-red-600 uppercase tracking-widest text-xs font-bold">
                Common Technical Inquiries
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-heading mb-8">
              Frequently Asked Questions About {service.title}
            </h2>

            <div className="space-y-4">
              {hubContent.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-gray-200 bg-gray-50/50 p-5 open:bg-white open:shadow-md transition-all duration-200 cursor-pointer"
                >
                  <summary className="text-base font-bold text-gray-900 flex items-center justify-between gap-4 select-none list-none font-heading">
                    <span>{faq.question}</span>
                    <span className="text-red-600 text-lg group-open:rotate-45 transition-transform duration-200 shrink-0 font-mono">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal border-t border-gray-100 pt-3">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====================== */}
      {/* CINEMATIC CTA SECTION */}
      {/* ====================== */}
      <section className="pb-8 md:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ServiceCTA
            cta={{
              title: `Expert ${service.tag} Solutions Ready for Deployment`,
              description: `Our specialized teams are equipped to handle your most complex ${service.tag.toLowerCase()} requirements in NYC. Get an industrial-grade survey and estimate today.`,
              buttons: [
                { text: "Request Free Quote", href: "/contact", primary: true },
                { text: `Call ${business.phone}`, href: `tel:${business.phoneE164}`, primary: false }
              ]
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
