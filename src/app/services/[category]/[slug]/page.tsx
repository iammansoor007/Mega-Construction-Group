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
  Camera, Maximize2, Star
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

Counter.displayName = "Counter";

// --- MAIN PAGE COMPONENT ---

export default function ServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const slug = params.slug as string;

  const service = servicesData.find((s) => s.id === categoryId);

  // Use the enriched data helper if possible, or manual find
  const subCategory = service?.subcategories.find((sub) => sub.id === slug);

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

  // Enforce data-driven defaults if missing
  const galleryImages = subCategory.galleryImages || [1, 2, 3].map(num => `/mega${slug.toLowerCase().replace(/[^a-z0-9]/g, '')}${num}.png`);
  const portfolioAvatars = subCategory.portfolioAvatars || [
    "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=60&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=60&w=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=60&w=100&auto=format&fit=crop"
  ];
  const heroHighlight = subCategory.heroHighlight || `Professional ${subCategory.title.toLowerCase()} solutions for New York's most demanding architectural projects.`;

  const renderIcon = (iconName: string, className?: string) => {
    const Icon = (Icons as any)[iconName] || Hammer;
    return <Icon className={className} />;
  };

  // Recommended Services
  const recommendedServices = service.subcategories.filter((sub) => sub.id !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      <Navbar />

      {/* ====================== */}
      {/* 1. BREADCRUMB BANNER (MATCHED TO CATEGORY PAGE) */}
      {/* ====================== */}
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
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-4 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white/40 font-bold mb-8">
              <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
              <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 opacity-30" />
              <Link href={`/services/${categoryId}`} className="hover:text-red-500 transition-colors whitespace-nowrap">{service.title}</Link>
              <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 opacity-30" />
              <span className="text-red-500 whitespace-nowrap">{subCategory.title}</span>
            </div>

            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-6 md:w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-[10px] md:text-xs font-bold">
                {service.tag} Division
              </span>
              <span className="w-6 md:w-8 h-px bg-red-500 md:hidden" />
            </div>

            <h1 className="text-4xl xs:text-5xl md:text-7xl font-bold text-white mb-4 md:mb-6 leading-[1.1] md:leading-tight">
              {subCategory.title}
            </h1>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {heroHighlight}
            </p>
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
              className="lg:col-span-3 space-y-8 sm:space-y-12 text-center md:text-left"
            >
              <div className="inline-block md:block">
                <div className="text-[10px] sm:text-xs text-red-600 uppercase tracking-widest font-bold border-l-4 border-red-600 pl-4 text-left">
                  Service Overview
                </div>
              </div>
              <p className="text-black text-lg xs:text-xl md:text-xl leading-relaxed font-normal">
                {subCategory.longDescription}
              </p>

              {/* IMPROVED STATS READABILITY */}
              <div className="space-y-6 pt-4 sm:pt-8">
                {subCategory.stats?.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between border-b-2 border-black/5 pb-4 group">
                    <span className="text-[11px] sm:text-xs text-black/60 uppercase tracking-[0.2em] font-bold group-hover:text-red-600 transition-colors">
                      {stat.label}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tighter">
                      {stat.value}
                    </span>
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
              className="lg:col-span-6 relative aspect-[4/3] xs:aspect-[16/9] lg:aspect-auto lg:h-[700px] overflow-hidden border-2 border-black group"
            >
              <Image
                src={subCategory.image || "/placeholder.svg"}
                alt={subCategory.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[10s]"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 border border-white/20 pointer-events-none" />
            </motion.div>

            {/* Column 3: Actions & Meta */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-3 h-full flex flex-col justify-between space-y-12 lg:space-y-0"
            >
              <div className="space-y-6 text-center md:text-left">
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] text-black/30 font-bold mb-4">Immediate Response</div>

                <div className="flex flex-col gap-4">
                  <Link
                    href="#contact"
                    className="group relative flex items-center justify-between w-full p-6 xs:p-8 bg-black text-white overflow-hidden transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-red-600 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                    <span className="relative z-10 text-[10px] xs:text-[11px] uppercase tracking-[0.3em] font-bold">Get Free Quote</span>
                    <ArrowRight className="relative z-10 w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="group flex items-center justify-between w-full p-6 xs:p-8 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500"
                  >
                    <span className="text-[10px] xs:text-[11px] uppercase tracking-[0.3em] font-bold">Request Estimate</span>
                    <FileText className="w-4 h-4 xs:w-5 xs:h-5 group-hover:rotate-12 transition-transform" />
                  </Link>
                </div>

                {/* RELOCATED BENEFITS */}
                <div className="space-y-6 pt-8 pb-4 text-left">
                  <div className="text-[10px] uppercase tracking-widest text-red-600 font-bold mb-2">Key Advantages</div>
                  <div className="space-y-5">
                    {subCategory.benefits?.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-4 group">
                        <div className="p-2.5 bg-black text-white group-hover:bg-red-600 transition-colors mt-1 shrink-0">
                          {renderIcon(benefit.icon, "w-4 h-4")}
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs xs:text-sm font-bold text-black uppercase tracking-tight">{benefit.title}</span>
                          <p className="text-sm xs:text-sm text-black/80 leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col xs:flex-row items-center justify-center md:justify-start gap-4 px-2 pt-6">
                  <div className="flex -space-x-3">
                    {portfolioAvatars.map((url, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-red-600 overflow-hidden relative z-[5] shadow-md">
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
                  <div className="text-[10px] uppercase tracking-[0.2em] text-black font-bold">
                    <span className="text-red-600 text-sm">150+</span> Successful Projects
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
                src={galleryImages[0] || subCategory.image || "/placeholder.svg"}
                alt="Main Project"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white border-2 border-black px-4 sm:px-6 py-2 sm:py-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                <span className="text-[10px] sm:text-[12px] uppercase tracking-widest font-medium text-black">Primary_Reference_01</span>
              </div>
            </motion.div>

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
                    src={img || "/placeholder.svg"}
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

      {/* HOW WE WORK (PHASES) */}
      {subCategory.process && (
        <section className="py-12 sm:py-24 lg:py-40 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 sm:mb-24 gap-8 sm:gap-12 text-center lg:text-left">
              <div className="max-w-2xl">
                <span className="text-red-600 text-[10px] sm:text-xs uppercase tracking-[0.5em] sm:tracking-[1em] mb-4 sm:mb-6 block font-bold">Our Process</span>
                <h2 className="text-4xl sm:text-5xl md:text-8xl font-bold text-black tracking-tighter uppercase font-heading leading-none">
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

      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-24 lg:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16 sm:mb-32 space-y-6 sm:space-y-8">
            <div className="w-16 sm:w-24 h-px bg-red-600" />
            <h2 className="text-4xl sm:text-6xl md:text-9xl font-medium text-black tracking-tighter uppercase font-heading leading-none">
              Why <span className="text-red-600">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-center sm:text-left">
            {subCategory.benefits?.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 sm:p-12 border-2 border-black/5 hover:border-red-600 transition-all duration-500 space-y-6 sm:space-y-8 group hover:bg-black/5"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-black group-hover:text-red-600 group-hover:scale-110 transition-all mx-auto sm:mx-0">
                  {renderIcon(benefit.icon, "w-8 h-8 sm:w-10 sm:h-10")}
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-xl sm:text-2xl font-bold text-black uppercase tracking-tighter">{benefit.title}</h4>
                  <p className="text-black/80 text-lg sm:text-xl font-normal leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {subCategory.faqs && (
        <section className="py-24 sm:py-40 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">

              {/* Left Side: Context & Support Widget */}
              <div className="lg:col-span-4 space-y-12 text-center lg:text-left">
                <div className="space-y-6">
                  <span className="text-red-600 text-[10px] sm:text-xs uppercase tracking-[0.8em] font-bold block">Information Support</span>
                  <h2 className="text-4xl sm:text-7xl font-bold text-black tracking-tighter uppercase font-heading leading-tight">
                    Critical <br /><span className="text-red-600">Inquiries</span>
                  </h2>
                  <p className="text-black/40 text-lg sm:text-xl font-normal leading-relaxed max-w-sm mx-auto lg:mx-0">
                    Detailed answers to technical and procedural questions regarding our {subCategory.title.toLowerCase()} services.
                  </p>
                </div>

                <div className="relative p-8 sm:p-10 border-2 border-black group overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-black flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest text-black font-medium">Support Available</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-black/40 font-medium">Project Hotline</div>
                      <div className="text-2xl sm:text-3xl font-medium text-black tracking-tighter">CALL OFFICE</div>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-4 text-[10px] uppercase tracking-widest text-red-600 font-medium hover:text-black transition-colors">
                      [ CONTACT EXPERTS ] <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side: Accordion Grid */}
              <div className="lg:col-span-8">
                <div className="space-y-6">
                  {subCategory.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`group border-2 transition-all duration-500 ${activeFaq === i ? 'border-red-600 shadow-[20px_20px_0px_rgba(220,38,38,0.05)]' : 'border-black/10 hover:border-black'}`}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full px-6 sm:px-10 py-8 sm:py-12 flex items-center justify-between text-left relative overflow-hidden"
                      >
                        <div className="flex items-start gap-6 sm:gap-10 relative z-10">
                          <span className={`text-xs font-medium uppercase tracking-widest mt-1 sm:mt-2 ${activeFaq === i ? 'text-red-600' : 'text-black/20 group-hover:text-black'}`}>
                            Q.0{i + 1}
                          </span>
                          <span className={`text-xl sm:text-2xl md:text-3xl font-medium tracking-tight transition-colors ${activeFaq === i ? 'text-black' : 'text-black/60 group-hover:text-black'} uppercase pr-4`}>
                            {faq.question}
                          </span>
                        </div>

                        <div className={`w-8 h-8 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center transition-all duration-500 relative z-10 ${activeFaq === i ? 'bg-red-600 text-white rotate-180' : 'bg-black/5 text-black group-hover:bg-black group-hover:text-white'}`}>
                          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>

                        <div className={`absolute inset-0 bg-red-600/5 transition-transform duration-700 ease-out ${activeFaq === i ? 'translate-x-0' : '-translate-x-full'}`} />
                      </button>

                      <AnimatePresence>
                        {activeFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: "circOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-10 pb-10 sm:pb-16 pt-0 ml-0 sm:ml-20 mr-6 sm:mr-12">
                              <div className="h-px w-full bg-black/5 mb-8" />
                              <p className="text-black/70 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
                                {faq.answer}
                              </p>
                              <div className="mt-8 flex items-center gap-4">
                                <div className="w-8 h-1 bg-red-600" />
                                <span className="text-[10px] uppercase tracking-widest font-medium text-black/30 whitespace-nowrap">Technical Clarification</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      {recommendedServices && recommendedServices.length > 0 && (
        <section className="py-12 sm:py-24 lg:py-40 bg-white">
          <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 sm:mb-24 gap-6 sm:gap-8 text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black tracking-tighter uppercase font-heading">
                Related <span className="text-red-600">Services</span>
              </h2>
              <Link href={`/services/${categoryId}`} className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-red-600 hover:text-black transition-colors font-bold">
                [ ALL SERVICES ] <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-2 border-black">
              {recommendedServices.map((rec) => (
                <Link href={`/services/${categoryId}/${rec.id}`} key={rec.id} className="group relative block overflow-hidden border-black border-b-2 sm:border-b-0 sm:border-r-2 last:border-b-0 last:border-r-0 transition-colors">
                  <div className="aspect-[3/4] relative">
                    <Image src={rec.image || "/placeholder.svg"} alt={rec.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
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
