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
              Our Construction <span className="text-red-500">Services</span>
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

