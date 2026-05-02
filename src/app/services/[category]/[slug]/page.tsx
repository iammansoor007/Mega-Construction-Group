"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ShieldCheck,
  ChevronDown, CheckCircle,
  FileText, ChevronRight, Construction,
  Activity, ShieldAlert, Phone,
  Hammer, Settings, Zap, Target,
  Crosshair, Layers, Box, Cpu, ArrowLeft,
  Camera, Maximize2
} from "lucide-react";
import * as Icons from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import MarqueeSection from "@/components/MarqueeSection";
import { useState, useRef, useEffect, memo } from "react";
import { useInView } from "framer-motion";

// --- REUSABLE COUNTER ---
const Counter = memo(({ value, suffix = "" }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
});

// --- MAIN PAGE COMPONENT ---

export default function ServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const slug = params.slug as string;

  const service = servicesData.find((s) => s.id === categoryId);
  const subCategory = service?.subcategories.find((sub) => sub.id === slug);

  // Recommended Services
  const recommendedServices = service?.subcategories.filter((sub) => sub.id !== slug).slice(0, 3);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!service || !subCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-heading px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-medium text-black mb-4 tracking-tighter uppercase">PAGE_NOT_FOUND</h1>
          <Link href={`/services/${categoryId}`} className="text-red-600 hover:underline font-medium uppercase tracking-[0.3em] text-[10px] sm:text-[12px]">
            [ BACK TO SERVICES ]
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = ({ name, className }: { name: string, className?: string }) => {
    const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
    return <LucideIcon className={className} />;
  };

  // Generate simple gallery image names
  const galleryImages = [1, 2, 3].map(num => `/mega${slug.toLowerCase().replace(/[^a-z0-9]/g, '')}${num}.png`);

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      <Navbar />

      {/* ====================== */}
      {/* 1. BREADCRUMB BANNER */}
      {/* ====================== */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900" />
        </div>

        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* Breadcrumb */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-red-500 font-medium mb-6 sm:mb-8">
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 opacity-30" />
              <Link href={`/services/${categoryId}`} className="hover:text-white transition-colors whitespace-nowrap">{service.title}</Link>
              <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 opacity-30" />
              <span className="text-white/40 whitespace-nowrap">{subCategory.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-8xl font-medium text-white mb-6 leading-tight sm:leading-none tracking-normal uppercase font-heading">
              {service.title} <span className="text-red-600">Services</span>
            </h1>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 sm:w-12 h-px bg-red-600" />
              <p className="text-white/40 text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">NYC Certified • Professional Results</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====================== */}
      {/* 2. 3-COLUMN HERO */}
      {/* ====================== */}
      <section className="relative pt-12 sm:pt-24 lg:pt-32 pb-12 sm:pb-20 bg-white overflow-hidden">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Column 1: Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 space-y-6 sm:space-y-8"
            >
              <div className="text-[10px] sm:text-xs text-red-600 uppercase tracking-widest font-medium border-l-4 border-red-600 pl-4">
                Service Overview
              </div>
              <p className="text-black text-base sm:text-lg md:text-xl leading-relaxed font-normal">
                {subCategory.longDescription}
              </p>
              <div className="space-y-4 pt-6 sm:pt-8">
                {subCategory.stats?.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-black/10 pb-3 sm:pb-4 group">
                    <span className="text-[9px] sm:text-[10px] text-black/40 uppercase tracking-widest font-medium group-hover:text-red-600 transition-colors">{stat.label}</span>
                    <span className="text-lg sm:text-xl font-medium text-black uppercase tracking-tighter">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Large Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="lg:col-span-6 relative aspect-[16/9] lg:aspect-auto lg:h-[650px] overflow-hidden border-2 border-black group"
            >
              <Image
                src={subCategory.image}
                alt={subCategory.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[10s]"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-4 sm:inset-8 border border-white/20 pointer-events-none" />
            </motion.div>

            {/* Column 3: Actions & Meta (IMPROVED CTAS) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-3 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-black/30 font-medium mb-4 sm:mb-6">Immediate Response</div>

                <Link
                  href="#contact"
                  className="group relative flex items-center justify-between w-full p-6 sm:p-8 bg-black text-white overflow-hidden transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium">Get Free Quote</span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="group flex items-center justify-between w-full p-6 sm:p-8 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500"
                >
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium">Request Estimate</span>
                  <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                </Link>

                <div className="flex items-center gap-3 sm:gap-4 px-2 pt-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=60&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=60&w=100&auto=format&fit=crop",
                      "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=60&w=100&auto=format&fit=crop"
                    ].map((url, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-red-600 overflow-hidden relative z-[5] shadow-sm">
                        <img
                          src={url}
                          alt="Project"
                          className="w-full h-full object-cover block"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.style.backgroundColor = '#ef4444';
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-[9px] uppercase tracking-widest text-black font-medium">
                    <span className="text-red-600">150+</span> Projects
                  </div>
                </div>
              </div>

              <div className="relative mt-12 p-6 sm:p-10 bg-white border-2 border-black overflow-hidden group">
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rotate-45 translate-x-6 sm:translate-x-8 -translate-y-6 sm:-translate-y-8" />

                <div className="relative z-10 space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 text-red-600">
                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10" />
                    <div className="h-8 sm:h-10 w-px bg-black/10" />
                    <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em] leading-tight font-medium">
                      NYC Registered <br /> Contractor
                    </div>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-medium leading-[0.9] uppercase tracking-tighter text-black">Verified <br /> Standards</h3>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <div key={s} className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-600" />
                      ))}
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-medium">A+ Rating</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-black py-1">
        <MarqueeSection text={`${subCategory.title} • Free Estimates • NYC Certified • Quality Guaranteed • Professional Construction •`} />
      </div>

      {/* ====================== */}
      {/* 3. BENTO PROJECT GALLERY */}
      {/* ====================== */}
      <section className="py-12 sm:py-24 lg:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 sm:mb-24 gap-6 sm:gap-8">
            <div>
              <span className="text-red-600 text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[1em] mb-3 sm:mb-4 block font-medium">Portfolio</span>
              <h2 className="text-4xl sm:text-5xl md:text-8xl font-medium text-black tracking-tighter uppercase font-heading leading-none">
                Work <span className="text-red-600">Gallery</span>
              </h2>
            </div>
            <p className="text-black/40 text-base sm:text-xl font-normal max-w-sm">
              Real project examples across NYC.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            {/* FEATURED LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden border-2 border-black group"
            >
              <Image
                src={galleryImages[0]}
                alt="Main Project"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white border-2 border-black px-4 sm:px-6 py-2 sm:py-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] sm:text-[12px] uppercase tracking-widest font-medium text-black">Primary_Reference_01</span>
              </div>
            </motion.div>

            {/* SIDE STACKED IMAGES */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              {galleryImages.slice(1, 3).map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] overflow-hidden border-2 border-black group"
                >
                  <Image
                    src={img}
                    alt="Project Detail"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all">
                    <Maximize2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* HOW WE WORK (PHASES) */}
      {/* ====================== */}
      {subCategory.process && (
        <section className="py-12 sm:py-24 lg:py-40 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 sm:mb-24 gap-8 sm:gap-12">
              <div className="max-w-2xl text-left">
                <span className="text-red-600 text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[1em] mb-4 sm:mb-6 block font-medium">Our Process</span>
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-medium text-black tracking-tighter uppercase font-heading leading-none">
                  How <span className="text-red-600">We Work</span>
                </h2>
              </div>
              <p className="text-black text-lg sm:text-xl font-normal leading-relaxed max-w-md">
                Our step-by-step approach ensures your project is completed with absolute precision.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-black">
              {subCategory.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 sm:p-10 lg:p-16 border-black border-r-0 sm:border-r-2 last:border-r-0 border-b-2 sm:last:border-b-0 lg:border-b-0 hover:bg-black group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="text-[4rem] sm:text-[7rem] lg:text-[7rem] font-heading font-medium text-black opacity-[0.05] absolute -top-4 -right-4 group-hover:text-red-600 group-hover:opacity-20 transition-all pointer-events-none">
                    0{i + 1}
                  </div>
                  <div className="text-red-600 text-[9px] sm:text-xs font-medium uppercase tracking-widest mb-8 sm:mb-12 relative z-10 group-hover:text-red-500">Step 0{i + 1}</div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tighter leading-tight mb-8 sm:mb-12 relative z-10 text-black group-hover:text-white transition-colors">
                    {step}
                  </h3>
                  <div className="w-8 sm:w-12 h-1 bg-red-600 group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====================== */}
      {/* WHY CHOOSE US */}
      {/* ====================== */}
      <section className="py-12 sm:py-24 lg:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16 sm:mb-32 space-y-6 sm:space-y-8">
            <div className="w-16 sm:w-24 h-px bg-red-600" />
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-medium text-black tracking-tighter uppercase font-heading leading-none">
              Why <span className="text-red-600">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {subCategory.benefits?.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 sm:p-12 border-l-4 border-black hover:border-red-600 transition-all duration-500 space-y-6 sm:space-y-8 group hover:bg-black/5"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-black group-hover:text-red-600 group-hover:scale-110 transition-all">
                  <IconComponent name={benefit.icon} className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-xl sm:text-2xl font-medium text-black uppercase tracking-tighter">{benefit.title}</h4>
                  <p className="text-black/60 text-base sm:text-lg font-normal leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {subCategory.faqs && (
        <section className="py-12 sm:py-24 lg:py-40 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
              <div className="lg:col-span-5 space-y-6 sm:space-y-8">
                <span className="text-red-600 text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[1em] font-medium block">Questions?</span>
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-medium text-black tracking-tighter uppercase font-heading leading-tight">
                  Common <br /><span className="text-red-600">Inquiries</span>
                </h2>
                <div className="pt-6 sm:pt-12">
                  <div className="flex items-center gap-4 sm:gap-6 p-6 sm:p-10 border-2 border-black group hover:border-red-600 transition-colors">
                    <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-red-600 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-black text-xs sm:text-sm font-medium uppercase tracking-widest">Call Our Office</div>
                      <div className="text-black/40 text-[9px] sm:text-[10px] uppercase tracking-widest mt-1">Available Mon-Sat</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {subCategory.faqs.map((faq, i) => (
                  <div key={i} className="border-2 border-black hover:border-red-600 transition-all duration-300">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full px-4 sm:px-8 py-6 sm:py-10 flex items-center justify-between text-left group"
                    >
                      <span className={`text-lg sm:text-xl md:text-2xl font-medium tracking-tight transition-colors ${activeFaq === i ? 'text-red-600' : 'text-black group-hover:text-red-600'} pr-4 uppercase`}>
                        {faq.question}
                      </span>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center transition-all ${activeFaq === i ? 'bg-red-600 text-white' : 'bg-black text-white'}`}>
                        <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-4 sm:px-8 pb-8 sm:pb-12 text-black/60 text-base sm:text-lg lg:text-xl font-normal leading-relaxed pt-4 sm:pt-6 border-t border-black/10 mx-4 sm:mx-8">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      {recommendedServices && recommendedServices.length > 0 && (
        <section className="py-12 sm:py-24 lg:py-40 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-24 gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-medium text-black tracking-tighter uppercase font-heading">
                Related <span className="text-red-600">Services</span>
              </h2>
              <Link href={`/services/${categoryId}`} className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-red-600 hover:text-black transition-colors font-medium">
                [ ALL SERVICES ] <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
              {recommendedServices.map((rec) => (
                <Link href={`/services/${categoryId}/${rec.id}`} key={rec.id} className="group relative block overflow-hidden border-black border-b-2 sm:border-b-0 sm:border-r-2 last:border-b-0 last:border-r-0 transition-colors">
                  <div className="aspect-[3/4] relative">
                    <Image src={rec.image} alt={rec.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 bg-white border-t-2 border-black group-hover:bg-black group-hover:text-white transition-all duration-500">
                      <div className="text-red-600 text-[9px] font-medium uppercase tracking-[0.2em] mb-3">View Service</div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase tracking-tighter leading-none mb-4">
                        {rec.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-red-600 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="py-4 sm:py-6  bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <ServiceCTA
            cta={{
              title: `Ready for Your Free Estimate?`,
              description: `Our team is ready to help you with your next ${subCategory.title.toLowerCase()} project in New York.`,
              buttons: [
                { text: "Get Free Quote", href: "#", primary: true },
                { text: "Contact Us", href: "#", primary: false }
              ]
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
