"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, ShieldCheck,
  Clock, Award, Plus, Minus, Shield,
  Briefcase, Star, ChevronDown,
  Phone, Mail, MessageSquare,
  CheckCircle, Zap, Target, Activity,
  Search, Settings, HardHat, FileText,
  ChevronRight, Layers, LayoutGrid, Info,
  Cpu, Compass, Microscope, Ruler,
  Hammer, Construction, Building2
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
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tighter uppercase">RESOURCE_OFFLINE</h1>
          <Link href={`/services/${categoryId}`} className="text-red-600 hover:underline flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-[10px]">
            <ArrowLeft className="w-4 h-4" /> Re-initialize Division
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = ({ name, className }: { name: string, className?: string }) => {
    const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
    return <LucideIcon className={className} />;
  };

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      {/* CONSTRUCTION BLUEPRINT GRID */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.08] lg:opacity-[0.12] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />

        {/* ====================== */}
        {/* HERO (Construction & Renovation Focused) */}
        {/* ====================== */}
        <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 md:space-y-8"
              >
                <div className="inline-flex items-center gap-3 bg-red-600/5 px-4 py-2 rounded-none border-l-4 border-red-600">
                  <HardHat className="text-red-600 w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-red-600 uppercase tracking-[0.2em] text-[10px] font-bold">Industrial Renovation Division</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1] md:leading-[0.9] font-heading uppercase break-words">
                    <span className="block text-gray-900">{subCategory.title.split(' ')[0]}</span>
                    <span className="block text-red-600">
                      {subCategory.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h1>
                  <div className="flex gap-2 items-center">
                    <div className="w-20 md:w-32 h-1.5 md:h-2 bg-red-600 rounded-sm" />
                    <Ruler className="w-4 h-4 text-gray-300" />
                    <div className="w-5 md:w-8 h-1.5 md:h-2 bg-red-300 rounded-sm" />
                  </div>
                </div>

                <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl font-light">
                  {subCategory.longDescription}
                </p>

                {/* Construction Specs Grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-y-6 xs:gap-y-0 gap-x-4 md:gap-x-6 border-y border-gray-100 py-8 md:py-10">
                  {subCategory.stats?.map((stat, i) => (
                    <div key={i} className="flex flex-col border-b xs:border-b-0 xs:border-r border-gray-100 last:border-0 pb-4 xs:pb-0 pr-4">
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</div>
                      <div className="text-xl md:text-2xl font-bold text-gray-900 tracking-tighter">{stat.value}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                  <button className="group px-8 py-5 md:px-12 md:py-6 bg-red-600 text-white font-bold hover:bg-black transition-all duration-700 shadow-xl hover:shadow-black/20 flex items-center justify-center gap-4 uppercase tracking-[0.3em] text-[10px] w-full sm:w-auto">
                    Start Renovation <Hammer className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </button>
                  <div className="flex items-center justify-center gap-4 px-6 py-5 md:px-8 md:py-6 border border-gray-100 bg-gray-50/50 w-full sm:w-auto group cursor-pointer">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-red-600 group-hover:scale-110 transition-transform" />
                    <span className="text-xs md:text-sm font-bold text-gray-900">Get Free Estimate</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative mt-12 lg:mt-0"
              >
                <div className="relative rounded-[32px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 md:border-[12px] border-white group">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={subCategory.image}
                      alt={subCategory.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-[8s]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 via-transparent to-transparent" />
                  </div>
                  {/* Structural Compliance Badge */}
                  <div className="absolute top-4 right-4 xs:top-6 xs:right-6 md:top-10 md:right-10 bg-white p-3 xs:p-4 md:p-8 shadow-2xl rounded-xl xs:rounded-2xl md:rounded-3xl border border-gray-50">
                    <Building2 className="w-6 h-6 md:w-8 md:h-8 text-red-600 mb-1 md:mb-2" />
                    <div className="text-xl xs:text-2xl md:text-4xl font-bold text-red-600 tracking-tighter">NY-A+</div>
                    <div className="text-[6px] md:text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-tight mt-1">Structural <br /> Grade Certified</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-64 md:h-64 border-l-[1px] border-b-[1px] border-red-600/20 pointer-events-none rounded-bl-[40px] md:rounded-bl-[80px] z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* DYNAMIC MARQUEE */}
        <MarqueeSection text={`${subCategory.title} Standard`} />

        {/* ====================== */}
        {/* CONSTRUCTION TIMELINE (Operational Matrix) */}
        {/* ====================== */}
        {subCategory.process && (
          <section className="py-20 lg:py-40 bg-white relative overflow-hidden border-y border-gray-100">
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] md:h-[2px] bg-red-600/10 z-20 pointer-events-none"
            />
            <div className="absolute inset-0 blueprint-grid opacity-[0.06] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="grid lg:grid-cols-12 gap-10 md:gap-20 items-start mb-16 md:mb-32">
                <div className="lg:col-span-6">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-[0.5em] md:tracking-[1em] mb-4 md:mb-6 block">Build Execution Protocol</span>
                  <h2 className="text-4xl xs:text-5xl md:text-8xl font-bold text-gray-900 tracking-tighter font-heading leading-none uppercase">
                    Project <br /><span className="text-red-600">Roadmap</span>
                  </h2>
                </div>
                <div className="lg:col-span-6 lg:pt-12">
                  <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                    Our renovation cycle is engineered for durability. We manage every structural variable to ensure your {subCategory.title.toLowerCase()} project stands the test of time.
                  </p>
                </div>
              </div>

              <div className="space-y-1">
                {subCategory.process.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="group relative"
                  >
                    {/* Background Blueprint Number */}
                    <div className="absolute -left-2 xs:-left-4 lg:-left-20 top-1/2 -translate-y-1/2 text-[4rem] xs:text-[8rem] sm:text-[12rem] lg:text-[20rem] font-bold text-gray-900/[0.02] group-hover:text-red-600/[0.03] transition-colors pointer-events-none select-none font-heading leading-none">
                      0{i + 1}
                    </div>

                    <div className="relative z-10 grid lg:grid-cols-12 items-center py-10 md:py-16 border-b border-gray-100 group-hover:border-red-600/30 transition-all duration-700">
                      <div className="lg:col-span-1 hidden lg:block text-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-none border border-gray-200 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                          <Construction className="w-4 h-4 md:w-5 md:h-5" />
                        </div>
                      </div>

                      <div className="lg:col-span-5 relative">
                        <div className="text-red-600 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-1 md:mb-2 opacity-50 group-hover:opacity-100 transition-opacity">BUILD_PHASE_0{i + 1}</div>
                        <h3 className="text-2xl xs:text-3xl md:text-5xl font-bold text-gray-900 uppercase tracking-tighter group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-700 font-heading leading-tight">
                          {step}
                        </h3>
                      </div>

                      <div className="lg:col-span-4 pt-4 lg:pt-0">
                        <div className="flex items-center gap-4 md:gap-6">
                          <div className="w-px h-8 md:h-10 bg-gray-100 group-hover:bg-red-600/50 transition-colors" />
                          <p className="text-gray-400 group-hover:text-gray-600 transition-colors text-[10px] md:text-sm font-medium tracking-tight leading-relaxed">
                            Executed by master-grade technicians with oversight from NYC renovation project managers.
                          </p>
                        </div>
                      </div>

                      <div className="lg:col-span-2 text-right hidden lg:block">
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="inline-flex items-center gap-2 md:gap-3 text-gray-200 group-hover:text-red-600 transition-colors"
                        >
                          <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest">ON_SITE</span>
                          <Activity className="w-3 h-3 md:w-4 md:h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====================== */}
        {/* CRAFTSMANSHIP & MATERIALS */}
        {/* ====================== */}
        <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative aspect-square rounded-[32px] md:rounded-[40px] overflow-hidden shadow-2xl border-2 border-gray-50">
                  <Image
                    src={service.secondaryImage || subCategory.image}
                    alt="Quality Standard"
                    fill
                    className="object-cover grayscale-[10%]"
                  />
                  <div className="absolute inset-0 bg-red-600/5 mix-blend-multiply" />
                </div>
                {/* Construction Seal */}
                <div className="absolute -bottom-4 -right-4 xs:-bottom-6 xs:-right-6 md:-bottom-12 md:-right-12 bg-white p-4 xs:p-6 md:p-10 shadow-2xl rounded-2xl md:rounded-3xl max-w-[140px] xs:max-w-[200px] md:max-w-xs border border-gray-50">
                  <div className="flex items-center gap-2 xs:gap-3 md:gap-4 mb-2 md:mb-6">
                    <div className="w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 rounded-none bg-red-600 flex items-center justify-center shadow-lg shrink-0">
                      <ShieldCheck className="w-4 h-4 xs:w-5 xs:h-5 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 uppercase tracking-widest text-[7px] md:text-[10px]">Material Grade A+</div>
                  </div>
                  <p className="text-gray-500 text-[9px] xs:text-xs md:text-sm leading-relaxed italic">
                    "Our renovation engineering strictly follows industrial quality control and premium material sourcing."
                  </p>
                </div>
              </div>

              <div className="space-y-8 md:space-y-12 order-1 lg:order-2 text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Craftsmanship Standards</span>
                  <h2 className="text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter leading-[1] md:leading-[0.9] font-heading mb-6 md:mb-8 uppercase break-words">
                    Industrial <br /><span className="text-red-600">Integrity</span>
                  </h2>
                  <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    Every renovation project is managed by division leaders with decades of NYC construction field expertise.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                  {subCategory.benefits?.map((benefit, i) => (
                    <div key={i} className="flex gap-4 md:gap-6 group p-4 md:p-6 hover:bg-gray-50 transition-all duration-500 border-l-2 border-transparent hover:border-red-600 bg-white sm:bg-transparent shadow-sm sm:shadow-none rounded-xl sm:rounded-none">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-none bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-all duration-500">
                        <IconComponent name={benefit.icon} className="w-5 h-5 md:w-6 md:h-6 text-red-600 group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1 md:mb-2 uppercase tracking-tight text-xs md:text-sm">{benefit.title}</h4>
                        <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================== */}
        {/* THE BRIEFING (Construction FAQ) */}
        {/* ====================== */}
        {subCategory.faqs && (
          <section className="py-20 lg:py-40 bg-gray-50 relative overflow-hidden border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
                <div className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-[0.6em] mb-4 block">Division Intel</span>
                  <h2 className="text-4xl xs:text-5xl md:text-[5rem] font-bold text-gray-900 tracking-tighter font-heading leading-none mb-6 md:mb-10 uppercase">
                    The <br /> <span className="text-red-600">Briefing</span>
                  </h2>
                  <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-12">
                    Technical documentation regarding our construction and renovation standards.
                  </p>
                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex items-center gap-4 md:gap-6 p-4 xs:p-6 md:p-8 bg-white border border-gray-100 shadow-xl rounded-xl xs:rounded-2xl md:rounded-[32px] justify-center lg:justify-start">
                      <div className="w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 rounded-none bg-red-600 flex items-center justify-center text-white shadow-lg flex-shrink-0">
                        <Construction className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6" />
                      </div>
                      <div>
                        <div className="text-gray-900 font-bold tracking-tight text-xs md:text-base">Project Hotline</div>
                        <div className="text-red-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">Active 24/7</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3 md:space-y-4">
                  {subCategory.faqs.map((faq, i) => (
                    <div key={i} className="group overflow-hidden bg-white border border-gray-100 hover:border-red-600 transition-all duration-500 rounded-none shadow-sm">
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full px-4 py-6 xs:px-6 xs:py-8 md:px-10 md:py-10 flex items-center justify-between text-left"
                      >
                        <span className={`text-base xs:text-lg md:text-2xl font-bold tracking-tighter transition-colors ${activeFaq === i ? 'text-red-600' : 'text-gray-900'} pr-4`}>
                          {faq.question}
                        </span>
                        <div className={`w-8 h-8 xs:w-10 xs:h-10 md:w-12 md:h-12 rounded-none flex items-center justify-center flex-shrink-0 transition-all ${activeFaq === i ? 'bg-red-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                          <ChevronDown className="w-3 h-3 xs:w-4 xs:h-4 md:w-5 md:h-5" />
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
                            <div className="px-4 pb-6 xs:px-6 xs:pb-8 md:px-10 md:pb-12 text-gray-500 text-sm xs:text-base md:text-xl font-light leading-relaxed border-t border-gray-50 pt-4 xs:pt-6 md:pt-8 max-w-3xl">
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

        {/* ====================== */}
        {/* RELATED CAPABILITIES */}
        {/* ====================== */}
        {recommendedServices && recommendedServices.length > 0 && (
          <section className="py-20 lg:py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-12 md:mb-20 gap-6">
                <div className="text-center md:text-left flex flex-col items-center md:items-start">
                  <span className="text-red-600 font-bold text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">Renovation Ecosystem</span>
                  <h2 className="text-3xl xs:text-4xl md:text-7xl font-bold text-gray-900 tracking-tighter font-heading leading-none uppercase break-words">
                    Related <br /><span className="text-red-600">Units</span>
                  </h2>
                </div>
                <Link href={`/services/${categoryId}`} className="group flex items-center gap-4 text-gray-400 hover:text-red-600 transition-colors border-b border-gray-100 pb-2">
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">Full Division Map</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {recommendedServices.map((rec, i) => (
                  <Link href={`/services/${categoryId}/${rec.id}`} key={rec.id} className="group relative block overflow-hidden rounded-none bg-gray-100 shadow-lg">
                    <div className="aspect-[4/5] sm:aspect-[3/4] relative">
                      <Image src={rec.image} alt={rec.title} fill className="object-cover transition-transform duration-[6s] group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                        <div className="text-red-600 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-4 md:mb-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                          Open Build Spec
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter leading-[1] mb-3 md:mb-4 font-heading uppercase">{rec.title}</h3>
                        <div className="flex items-center gap-3">
                          <div className="w-8 md:w-10 h-[1px] bg-red-600" />
                          <span className="text-white/40 text-[8px] md:text-[9px] font-bold uppercase tracking-widest">{service.tag} Sector</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ====================== */}
        {/* CINEMATIC SERVICE CTA */}
        {/* ====================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ServiceCTA
              cta={{
                title: `Initialize Your ${subCategory.title} Renovation`,
                description: `Our specialized construction teams are standing by. Secure your NYC property with the industrial-grade ${subCategory.title.toLowerCase()} standard today.`,
                buttons: [
                  { text: "Start Free Estimate", href: "#", primary: true },
                  { text: "Talk to Project Manager", href: "#", primary: false }
                ]
              }}
            />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
