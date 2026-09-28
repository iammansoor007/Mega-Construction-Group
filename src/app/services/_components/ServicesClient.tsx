"use client";

import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import * as Icons from "lucide-react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import MarqueeSection from "@/components/MarqueeSection";
import { bronxSeoPages } from "@/data/bronxSeoPages";
import { useState } from "react";

export default function ServicesClient() {


  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32 pb-20 blueprint-grid">
        <div className="tech-scanner" />
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center md:justify-start gap-2 text-[10px] uppercase tracking-[0.3em] text-white/50 font-bold">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-40 text-white" />
              <span className="text-red-500">Services</span>
            </div>

            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
                Our Service Divisions
              </span>
            </div>

            <h1 className="heading-lg text-white leading-none tracking-tight">
              Construction Services in the Bronx NY — <span className="text-red-500">All Services</span>
            </h1>

            <p className="text-base md:text-xl text-white/95 leading-relaxed max-w-2xl font-normal">
              Professional general contracting, certified roofing, masonry restoration, and luxury interior renovation across New York City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Marquee */}
      <MarqueeSection text="NYC Certified Contractor • Fully Licensed & Insured • Over 1,000 Projects Completed • 10-Year Workmanship Warranty •" />

      {/* Services Grid Section */}
      <section className="py-8 md:py-12 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((service, index) => {
              const ServiceIcon = (Icons as any)[service.icon] || Icons.Hammer;
              return (
                <Link 
                  key={service.id} 
                  href={`/services/${service.id}`}
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
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover/card:scale-110"
                        sizes="(max-w-768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" />
                      
                      {/* Floating division tag */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="bg-black/40 backdrop-blur-xl px-4 py-1.5 rounded-full text-[10px] font-bold text-white border border-white/30 uppercase tracking-widest shadow-xl">
                          {service.tag} Division
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-6 left-6 z-10">
                        <div className="p-3 rounded-2xl bg-red-600 shadow-xl border border-red-500/20 group-hover/card:scale-110 transition-transform duration-500 flex items-center justify-center text-white">
                          <ServiceIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Card Body Content */}
                    <div className="p-6 xs:p-8 flex-1 flex flex-col justify-between text-left">
                      <div className="space-y-4">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">
                          {service.subcategories.length} Core Services
                        </span>
                        
                        <h3 className="text-xl xs:text-2xl font-bold text-gray-900 group-hover/card:text-red-600 transition-colors leading-tight">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                          {service.description}
                        </p>

                        {/* Features bullet list */}
                        <div className="space-y-2.5 pt-2 flex-1">
                          {service.features?.slice(0, 4).map((feature: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 text-xs text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between group/link">
                        <span className="text-xs font-bold uppercase tracking-widest text-red-600 group-hover/card:tracking-[0.2em] transition-all duration-500">
                          EXPLORE DIVISION
                        </span>
                        <ArrowRight className="w-5 h-5 text-red-600" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COMPLETE BRONX & NYC SERVICE DIRECTORY (ALL 45+ SERVICES) ─────── */}
      <section className="py-16 md:py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-red-600 block mb-2">
              Complete NYC &amp; Bronx Master Directory
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-gray-950 font-heading">
              All 45+ Specialized <span className="text-red-600">Contracting Services</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
              Explore our full directory of certified commercial and residential services across the Bronx, Brooklyn, Queens, Manhattan, and Staten Island. Every project is executed by licensed crews under full NYC DOB compliance.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                title: "Roofing Division & Emergency Leak Repairs",
                hubSlug: "/roofing",
                slugs: [
                  "roof-replacement-bronx-ny",
                  "roof-installation-bronx",
                  "roof-inspection-bronx",
                  "shingle-roofing-bronx",
                  "flat-roof-contractor-bronx",
                  "flat-roofing-nyc",
                  "roof-leak-repair-nyc",
                  "chimney-repair-bronx"
                ]
              },
              {
                title: "Masonry, Facade & Local Law 11 Restoration",
                hubSlug: "/masonry",
                slugs: [
                  "brick-pointing-bronx",
                  "brick-repair-bronx",
                  "facade-restoration-nyc",
                  "lintel-repair-bronx",
                  "parapet-repair-bronx",
                  "local-law-11-brooklyn",
                  "stoop-repair-brooklyn",
                  "stucco-repair-brooklyn",
                  "stucco-contractor-brooklyn",
                  "stucco-restoration-brooklyn",
                  "eifs-contractor-brooklyn",
                  "smooth-stucco-brooklyn",
                  "fire-escape-painting-nyc"
                ]
              },
              {
                title: "Renovation, Remodeling & Emergency Damage Restoration",
                hubSlug: "/renovation",
                slugs: [
                  "kitchen-renovation-bronx",
                  "bathroom-renovation-bronx",
                  "basement-renovation-bronx",
                  "interior-remodeling-bronx",
                  "luxury-renovation-brooklyn",
                  "commercial-renovation-bronx",
                  "emergency-building-repair-bronx",
                  "emergency-contractor-bronx",
                  "emergency-board-up-bronx",
                  "construction-company-bronx",
                  "general-contractor-bronx"
                ]
              },
              {
                title: "Concrete, Sidewalks, Driveways & Hardscaping",
                hubSlug: "/concrete-services",
                slugs: [
                  "outdoor-concrete-bronx",
                  "sidewalk-repair-bronx",
                  "sidewalk-replacement-bronx",
                  "driveway-bronx",
                  "patio-contractor-bronx",
                  "retaining-wall-bronx"
                ]
              },
              {
                title: "Waterproofing, Foundation & Sealing Solutions",
                hubSlug: "/waterproofing",
                slugs: [
                  "waterproofing-bronx",
                  "window-caulking-bronx",
                  "foundation-repair-brooklyn"
                ]
              },
              {
                title: "NYC DOB & DOT Violation Removal & Specialty",
                hubSlug: "/violations",
                slugs: [
                  "dot-violation-removal-nyc",
                  "sidewalk-violation-bronx",
                  "dob-violation-brooklyn",
                  "smart-home-brooklyn"
                ]
              }
            ].map((group, gIdx) => (
              <div key={gIdx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm text-left">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-100 gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-gray-900 font-heading">
                    {group.title}
                  </h3>
                  <Link
                    href={group.hubSlug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors"
                  >
                    <span>View Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.slugs.map((slug) => {
                    const page = bronxSeoPages[slug];
                    if (!page) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/${slug}`}
                        className="p-4 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:border-red-500/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600">
                              {page.keyword}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-red-600 transition-colors" />
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1 mb-1">
                            {page.h1}
                          </h4>
                          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                            {page.metaDesc}
                          </p>
                        </div>
                        <div className="pt-3 mt-3 border-t border-gray-200/50 flex items-center justify-between text-[11px] font-bold text-gray-400 group-hover:text-red-600 uppercase tracking-wider">
                          <span>Read Full Details</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-8 md:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ServiceCTA
            cta={{
              title: "Need Custom Construction Solutions in NYC?",
              description: "Our certified engineers and project managers are ready to consult on your residential or commercial requirements. Schedule an onsite inspection today.",
              buttons: [
                { text: "Request Free Estimate", href: "/contact", primary: true },
                { text: "Contact Office", href: "/contact", primary: false }
              ]
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

