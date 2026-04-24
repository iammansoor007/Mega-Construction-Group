"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Briefcase, ChevronRight, Zap, Target, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useRef } from "react";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const service = servicesData.find((s) => s.id === categoryId);

  const containerRef = useRef(null);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-heading">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tighter uppercase">DIVISION_NOT_FOUND</h1>
          <Link href="/" className="text-red-600 hover:underline flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="w-4 h-4" /> RE-INITIALIZE DIRECTORY
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.12] pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* ====================== */}
        {/* TECHNICAL LUXURY HERO */}
        {/* ====================== */}
        <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div className="inline-flex items-center gap-4 bg-red-600/10 px-6 py-3 border-l-4 border-red-600">
                            <Zap className="text-red-600 w-5 h-5" />
                            <span className="text-red-600 uppercase tracking-[0.3em] text-[10px] font-bold">ACTIVE DIVISION</span>
                        </div>

                        <div className="space-y-6">
                            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] font-heading uppercase italic">
                                {service.title.split(' ')[0]} <br />
                                <span className="text-red-600 not-italic">{service.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <div className="flex gap-2">
                                <div className="w-24 h-2 bg-red-600" />
                                <div className="w-12 h-2 bg-red-400" />
                                <div className="w-6 h-2 bg-red-300" />
                            </div>
                        </div>

                        <p className="text-gray-500 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                            {service.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-8 pt-4">
                            <div className="flex items-center gap-6 group cursor-pointer border-b border-gray-100 pb-4">
                                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-500">
                                    <Target className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Precision Engineering</div>
                                    <div className="text-lg font-bold tracking-tight">Industrial Standards</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group cursor-pointer border-b border-gray-100 pb-4">
                                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-500">
                                    <Activity className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-1">Live Deployment</div>
                                    <div className="text-lg font-bold tracking-tight">Active Sites NYC</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[3/4] rounded-[60px] overflow-hidden border-[12px] border-white shadow-[0_50px_100px_rgba(0,0,0,0.15)] group">
                            <Image 
                                src={service.image} 
                                alt={service.title} 
                                fill 
                                className="object-cover group-hover:scale-110 transition-transform duration-[6s]" 
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent" />
                        </div>
                        {/* Technical Badges */}
                        <div className="absolute -top-10 -right-10 bg-white p-12 shadow-2xl rounded-[40px] border border-gray-50 flex flex-col items-center">
                            <div className="text-6xl font-bold text-red-600 tracking-tighter mb-2">20+</div>
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center leading-tight">Years Of <br /> Operational <br /> Excellence</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ====================== */}
        {/* ENGINEERING MATRIX GRID */}
        {/* ====================== */}
        <section className="py-32 bg-gray-50/50 border-y border-gray-100 relative">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div>
                        <span className="text-red-600 font-bold text-xs uppercase tracking-[0.6em] mb-4 block">Division Specializations</span>
                        <h2 className="text-5xl md:text-8xl font-bold text-gray-900 tracking-tighter font-heading leading-none">
                            Operational <span className="text-red-600 italic">Capabilities</span>
                        </h2>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Systems Active</div>
                        <div className="flex gap-2 justify-end">
                            <div className="w-12 h-1 bg-red-600" />
                            <div className="w-6 h-1 bg-red-400" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 border border-gray-200 bg-gray-200">
                    {service.subcategories.map((sub, index) => (
                        <Link 
                            key={sub.id} 
                            href={`/services/${categoryId}/${sub.id}`}
                            className="group block"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="h-full bg-white p-12 hover:bg-gray-900 transition-all duration-700 relative overflow-hidden"
                            >
                                {/* Hover background image (faint) */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
                                    <Image src={sub.image} alt="Hover" fill className="object-cover" />
                                </div>
                                
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start mb-12">
                                            <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">
                                                <Zap className="w-6 h-6 text-red-600 group-hover:text-white" />
                                            </div>
                                            <div className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em] group-hover:text-red-600/50 transition-colors">CAPABILITY_0{index+1}</div>
                                        </div>
                                        
                                        <h3 className="text-3xl font-bold text-gray-900 group-hover:text-white transition-colors mb-6 tracking-tighter leading-tight font-heading">
                                            {sub.title}
                                        </h3>
                                        <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed mb-10 font-light">
                                            {sub.description}
                                        </p>

                                        <div className="space-y-4 mb-12">
                                            {sub.features.slice(0, 3).map((feature, i) => (
                                                <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white/60">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-10 border-t border-gray-100 group-hover:border-white/10">
                                        <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.5em] group-hover:tracking-[0.8em] transition-all duration-500">
                                            EXPLORE_SPEC
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        {/* ====================== */}
        {/* DIVISION EXPERTISE CTA */}
        {/* ====================== */}
        <section className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-7">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-[0.8em] mb-10 block">Division Command</span>
                        <h2 className="text-5xl md:text-[7rem] font-bold text-gray-900 tracking-tighter leading-[0.85] font-heading uppercase italic mb-12">
                            Ready For <br /> <span className="text-red-600 not-italic">Survey?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-12 pt-4">
                            <button className="px-16 py-8 bg-red-600 text-white font-bold hover:bg-black transition-all duration-700 uppercase tracking-[0.5em] text-[10px] shadow-2xl">
                                Initialize Request
                            </button>
                            <div className="text-left border-l border-gray-100 pl-12">
                                <div className="text-gray-900 text-3xl font-bold tracking-tight">(718) 555-0123</div>
                                <div className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">DIRECT DIVISION LINE</div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="bg-gray-50 p-16 rounded-[60px] border border-gray-100 relative overflow-hidden group">
                            <div className="relative z-10 space-y-12">
                                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl">
                                    <ShieldCheck className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 tracking-tighter font-heading">The Mega Guarantee</h3>
                                <p className="text-gray-500 font-light text-lg leading-relaxed">
                                    All {service.title.toLowerCase()} projects are backed by our industrial-grade warranty and 20+ years of NYC engineering excellence.
                                </p>
                            </div>
                            {/* Abstract Decor */}
                            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:rotate-45 transition-transform duration-1000">
                                <Briefcase className="w-48 h-48" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
        </div>
    </main>
  );
}
