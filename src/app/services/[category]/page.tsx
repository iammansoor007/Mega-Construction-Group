"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, Target, Activity, LayoutGrid, Zap } from "lucide-react";
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.05]);

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
      {/* GLOBAL GRID BACKGROUND */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.08] pointer-events-none z-0" />
      
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

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
                {service.tag}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* DYNAMIC MARQUEE */}
      <MarqueeSection text={`Industrial Grade ${service.tag}`} />

      {/* ====================== */}
      {/* SPECIALIZATIONS GRID */}
      {/* ====================== */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-red-600 flex items-center justify-center text-white shadow-2xl">
                    <LayoutGrid className="w-8 h-8" />
                </div>
                <div>
                    <span className="text-red-600 font-bold text-[10px] uppercase tracking-[0.5em] mb-2 block">Available Capabilities</span>
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter font-heading leading-none uppercase">
                        Our <span className="text-red-600">Matrix</span>
                    </h2>
                </div>
            </div>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-xs text-right hidden md:block">
                Select a specialized unit to view technical specifications and project blueprints.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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
                  className="relative h-full bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:border-red-600/20 transition-all duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_rgba(220,38,38,0.08)] flex flex-col sm:flex-row"
                >
                  {/* Left: Image Side (300px Responsive) */}
                  <div className="relative sm:w-2/5 min-h-[300px] sm:min-h-full overflow-hidden">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover transition-transform duration-[4s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent group-hover:from-red-600/20 transition-all duration-700" />
                    <div className="absolute top-6 left-6 z-10">
                      <div className="bg-white/95 backdrop-blur-md text-red-600 p-4 rounded-2xl shadow-xl border border-white/20">
                        <Activity className="w-5 h-5" />
                      </div>
                    </div>
                    {/* Status Pulse */}
                    <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[8px] font-bold text-white uppercase tracking-widest">DEPLOY_READY</span>
                    </div>
                  </div>

                  {/* Right: Content Side */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between bg-white relative">
                    {/* Background ID */}
                    <div className="absolute top-10 right-10 text-6xl font-bold text-gray-50 pointer-events-none select-none group-hover:text-red-50/[0.8] transition-colors">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>

                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-red-600" />
                        <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.3em]">SPEC_NODE_{index + 1}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-6 leading-[1.1] font-heading uppercase">
                        {sub.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-8 text-sm md:text-base font-light line-clamp-3">
                        {sub.description}
                      </p>
                      
                      <div className="grid grid-cols-1 gap-4 mb-10">
                        {sub.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-4 text-xs font-bold text-gray-700 group-hover:translate-x-2 transition-transform duration-500">
                            <Zap className="w-4 h-4 text-red-600" />
                            <span className="uppercase tracking-tight">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-gray-100 group-hover:border-red-600/30 transition-colors relative z-10">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] group-hover:text-red-600 group-hover:tracking-[0.4em] transition-all duration-500">
                        Open Specification
                      </span>
                      <div className="w-14 h-14 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-500 shadow-sm">
                        <ArrowRight className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
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
