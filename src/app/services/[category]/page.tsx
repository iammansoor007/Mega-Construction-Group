"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import MarqueeSection from "@/components/MarqueeSection";
import { useRef } from "react";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const service = servicesData.find((s) => s.id === categoryId);

  const containerRef = useRef(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-heading px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tighter uppercase italic">Division_Missing</h1>
          <Link href="/" className="text-red-600 hover:underline flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-4 h-4" /> Return to Command Center
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl flex flex-col items-center md:items-start text-center md:text-left mx-auto md:mx-0"
          >
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-6 md:w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">
                {service.tag}
              </span>
              <span className="w-6 md:w-8 h-px bg-red-500 md:hidden" />
            </div>
            <h1 className="text-4xl xs:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] md:leading-tight">
              {service.title}
            </h1>
            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DYNAMIC MARQUEE */}
      <MarqueeSection text={`Industrial Grade ${service.tag}`} />

      {/* ====================== */}
      {/* SERVICE SPECIALIZATIONS */}
      {/* ====================== */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-20 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 text-center md:text-left">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-red-600 flex items-center justify-center text-white shadow-2xl shrink-0">
                    <Activity className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div>
                    <span className="text-red-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] mb-1 md:mb-2 block">Technical Capabilities</span>
                    <h2 className="text-3xl xs:text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter font-heading leading-none">
                        Our <span className="text-red-600">Matrix</span>
                    </h2>
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {service.subcategories.map((sub, index) => (
              <Link 
                key={sub.id} 
                href={`/services/${categoryId}/${sub.id}`}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-red-600/30 group-hover:scale-[1.01] border border-white/10"
                >
                  {/* Full Bleed Image Background */}
                  <Image
                    src={sub.image}
                    alt={sub.title}
                    fill
                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  
                  {/* Cinematic Deep Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shine Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                  </div>

                  {/* Content Matrix */}
                  <div className="absolute inset-0 p-6 xs:p-8 md:p-12 flex flex-col justify-end">
                    <div className="relative z-10">
                      <div className="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-red-600/30 backdrop-blur-md border border-red-500/40 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 md:mb-6 shadow-xl">
                        <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
                        Technical Excellence
                      </div>
                      
                      <h3 className="text-2xl xs:text-3xl md:text-5xl font-bold text-white mb-2 md:mb-4 leading-none tracking-tighter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] group-hover:text-red-400 transition-colors capitalize">
                        {sub.title}
                      </h3>
                      
                      <p className="text-gray-200 text-xs md:text-base leading-relaxed line-clamp-2 max-w-md drop-shadow-md mb-6 md:mb-8">
                        {sub.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-700 shadow-2xl">
                            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                          </div>
                          <span className="text-[10px] md:text-[12px] font-bold text-white uppercase tracking-[0.2em] md:tracking-[0.3em]">
                            Explore Service
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inner Glow Border */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 group-hover:border-red-600/30 transition-colors duration-700 pointer-events-none" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* CINEMATIC CTA SECTION */}
      {/* ====================== */}
      <section className="pb-24 md:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ServiceCTA
            cta={{
              title: `Expert ${service.tag} Solutions Ready for Deployment`,
              description: `Our specialized teams are equipped to handle your most complex ${service.tag.toLowerCase()} requirements in NYC. Get an industrial-grade survey and estimate today.`,
              buttons: [
                { text: "Request Free Quote", href: "#", primary: true },
                { text: "Consult Division Leader", href: "#", primary: false }
              ]
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
