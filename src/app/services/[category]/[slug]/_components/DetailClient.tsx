"use client";

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
  Maximize2, Star
} from "lucide-react";
import * as Icons from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import MarqueeSection from "@/components/MarqueeSection";
import SectionHeader from "@/components/SectionHeader";
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

export default function DetailClient({ categoryId, slug }: { categoryId: string; slug: string }) {
  const service = servicesData.find((s) => s.id === categoryId);
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

  // Enforce data-driven defaults if missing with real existing assets
  const fallbackGallery = [
    subCategory.image,
    service.secondaryImage || service.image || "/assets/megaroofingreal.jpeg",
    service.image || "/assets/portfolio-1.jpg"
  ].filter(Boolean) as string[];

  const galleryImages = (subCategory.galleryImages && subCategory.galleryImages.length > 0)
    ? subCategory.galleryImages
    : fallbackGallery;

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

      {/* Hero Section */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-36 pb-20 bg-gray-950">
        <div className="absolute inset-0 select-none grayscale opacity-40 z-0">
          <Image
            src={subCategory.image || "/placeholder.svg"}
            alt={`${subCategory.title} - Mega Contracting NY Group`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start space-y-6 max-w-4xl"
          >
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-widest text-white/60 font-bold">
              <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <Link href={`/services/${categoryId}`} className="hover:text-red-500 transition-colors">{service.title}</Link>
              <ChevronRight className="w-3 h-3 text-white/40" />
              <span className="text-red-500">{subCategory.title}</span>
            </div>

            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-[2px] bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
                {service.tag} Division
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none font-heading">
              {subCategory.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-normal max-w-2xl">
              {heroHighlight}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact" className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-lg transition-all duration-300">
                Get Free Quote
              </Link>
              <a href="tel:+19148043000" className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-2xl border border-white/20 transition-all duration-300">
                Call +1 (914) 804-3000
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
            {/* Column 1: Copy, Feature Matrix, and CTA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6 flex flex-col justify-center"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-[10px] font-semibold uppercase tracking-wider self-start">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Crystal Clear Compliance</span>
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black tracking-tight leading-[1.1] font-heading uppercase">
                {subCategory.title.split(" ").length > 1 ? (
                  <>
                    {subCategory.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-red-600 block sm:inline">
                      {subCategory.title.split(" ").slice(-1)[0]}
                    </span>
                  </>
                ) : (
                  <span className="text-red-600">{subCategory.title}</span>
                )}
              </h2>

              {/* Description paragraph */}
              <div
                className="text-black text-sm sm:text-base leading-relaxed font-normal space-y-4"
                dangerouslySetInnerHTML={{ __html: subCategory.longDescription }}
              />

              {/* Features Matrix Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4">
                {subCategory.benefits?.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-semibold text-black">{benefit.title}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-red-600 hover:bg-red-750 text-white font-bold text-xs uppercase tracking-widest rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Column 2: Stretch Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 w-full h-full flex flex-col justify-stretch"
            >
              <div className="relative w-full h-full min-h-[320px] lg:min-h-full overflow-hidden rounded-[24px] md:rounded-[32px] shadow-2xl border border-gray-100 group">
                <Image
                  src={subCategory.image || "/placeholder.svg"}
                  alt={`${subCategory.title} NYC Expert Craftsmanship`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-[5s] group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeSection text={`${subCategory.title} • Free Estimates • NYC Certified • Quality Guaranteed • Professional Construction •`} />

      {/* ====================== */}
      {/* 3. BENTO PROJECT GALLERY */}
      {/* ====================== */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Portfolio"
            headline="Work <span class='text-red-600'>Gallery</span>"
            description="Real project examples across NYC."
          />

          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8">
            {/* FEATURED LARGE IMAGE */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden border border-gray-250 group rounded-2xl"
            >
              <Image
                src={galleryImages[0] || subCategory.image || "/placeholder.svg"}
                alt={`${subCategory.title} Primary NYC Project Reference`}
                fill
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover transition-transform duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white border border-gray-200 px-4 sm:px-6 py-2 sm:py-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 rounded-2xl shadow-md">
                <span className="text-[10px] sm:text-[12px] uppercase tracking-widest font-bold text-black">Primary Reference</span>
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
                  className="relative aspect-[4/3] sm:aspect-auto sm:h-full min-h-[200px] overflow-hidden border border-gray-250 group rounded-2xl"
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${subCategory.title} Project Detail View ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
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
        <section className="py-4 md:py-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Our Process"
              headline="How <span class='text-red-600'>We Work</span>"
              description="Our step-by-step approach ensures your project is completed with absolute precision."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {subCategory.process.map((step, i) => {
                const title = typeof step === "string" ? step : step.title;
                const description = typeof step === "string"
                  ? "Our experienced crews handle every phase with meticulous quality control."
                  : step.description;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 border border-gray-200 hover:border-red-500/35 hover:shadow-lg bg-white hover:bg-red-50/10 group transition-all duration-300 relative overflow-hidden rounded-2xl flex flex-col justify-between min-h-[220px] text-left"
                  >
                    <div className="relative z-10 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-red-600 text-[9px] sm:text-xs font-bold uppercase tracking-widest">Step 0{i + 1}</span>
                        <span className="text-3xl font-black text-black/5 absolute -top-2 -right-2 transition-all select-none">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-black leading-tight">
                          {title}
                        </h3>
                        <p className="text-xs text-gray-600 leading-relaxed font-normal">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="w-8 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500 mt-4" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      {/* WHY CHOOSE US */}
      <section className="py-4 md:py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Why Choose Us"
            headline="Why Clients <span class='text-red-600'>Trust Us</span>"
            description="Our structural integrity, licensing, and experience set us apart."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subCategory.benefits?.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-gray-200 hover:border-red-500/50 hover:shadow-md hover:bg-gray-50 transition-all duration-300 space-y-6 group rounded-2xl"
              >
                <div className="w-12 h-12 flex items-center justify-center text-red-650 bg-red-600/[0.06] group-hover:scale-110 transition-all mx-auto sm:mx-0">
                  {renderIcon(benefit.icon, "w-6 h-6 text-red-600")}
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-gray-900 uppercase tracking-tight">{benefit.title}</h4>
                  <p className="text-black text-sm leading-relaxed font-normal">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      {subCategory.faqs && (
        <section className="py-4 md:py-6 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">

              {/* Left Side */}
              <div className="lg:col-span-4 space-y-8 text-center lg:text-left">
                <div className="space-y-4">
                  <span className="text-red-600 text-[10px] uppercase tracking-[0.25em] font-bold block">Information Support</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
                    Critical <br /><span className="text-red-600">Inquiries</span>
                  </h2>
                  <p className="text-black text-sm sm:text-base font-normal leading-relaxed max-w-sm mx-auto lg:mx-0">
                    Detailed answers to technical and procedural questions regarding our {subCategory.title.toLowerCase()} services.
                  </p>
                </div>

                <div className="relative p-8 border border-gray-250 bg-white group overflow-hidden rounded-2xl text-left">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gray-900 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="space-y-5 relative z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Support Available</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Project Hotline</div>
                      <div className="text-xl font-bold text-black tracking-tighter">+1 (914) 804-3000</div>
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-red-600 font-bold hover:text-red-700 transition-colors">
                      <span>Contact Experts</span> <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Side: Accordion */}
              <div className="lg:col-span-8">
                <div className="space-y-4">
                  {subCategory.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className={`relative rounded-none overflow-hidden border transition-all duration-300 ${activeFaq === i
                        ? "bg-white shadow-lg border-red-600/30 border-l-4"
                        : "bg-white shadow-sm hover:shadow-md border-gray-200"
                        }`}
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                        className="w-full text-left p-6 sm:p-8 focus:outline-none relative z-10"
                        aria-expanded={activeFaq === i}
                      >
                        <div className="flex items-center justify-between gap-6">
                          <h3 className={`text-base md:text-lg lg:text-xl font-normal transition-all duration-500 text-left ${activeFaq === i
                            ? "text-red-600 font-bold"
                            : "text-gray-800 group-hover:text-red-600"
                            }`}>
                            {faq.question}
                          </h3>

                          <div className="relative flex-shrink-0">
                            <motion.div
                              animate={activeFaq === i ? {
                                rotate: 180,
                                scale: 1.1,
                                backgroundColor: '#dc2626',
                                borderColor: '#dc2626',
                              } : {
                                rotate: 0,
                                scale: 1,
                                backgroundColor: 'white',
                                borderColor: '#e2e8f0',
                              }}
                              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500"
                            >
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                className="transition-transform duration-300"
                              >
                                <path
                                  d={activeFaq === i ? "M5 12h14" : "M12 5v14M5 12h14"}
                                  stroke={activeFaq === i ? 'white' : '#94a3b8'}
                                  strokeWidth="1.8"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </motion.div>
                          </div>
                        </div>
                      </button>

                      <AnimatePresence initial={false}>
                        {activeFaq === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                              <div className="relative pl-6 border-l-2 border-red-600/20">
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal text-left">
                                  {faq.answer}
                                </p>
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
        <section className="py-4 md:py-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-12 gap-6 text-center sm:text-left">
              <SectionHeader
                badge="Related Services"
                headline="<span class='text-gray-950'>Explore </span><span class='text-red-600'>Related Services</span>"
                center={false}
                className="mb-0 text-left"
              />
              <Link href={`/services/${categoryId}`} className="inline-flex items-center gap-2 text-xs text-red-600 hover:text-red-700 transition-colors font-bold uppercase tracking-widest">
                <span>All Services</span> <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedServices.map((rec) => (
                <Link
                  href={`/services/${categoryId}/${rec.id}`}
                  key={rec.id}
                  className="group block overflow-hidden border border-gray-200 hover:border-red-500/35 hover:shadow-lg transition-all duration-300 rounded-2xl bg-white"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={rec.image || "/placeholder.svg"}
                      alt={`${rec.title} NYC - Mega Contracting NY Group`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 bg-white text-left space-y-3">
                    <div className="text-red-600 text-[9px] font-bold uppercase tracking-[0.2em]">
                      View Specialization
                    </div>
                    <h3 className="text-base md:text-lg font-bold uppercase tracking-tight text-gray-950 transition-colors group-hover:text-red-600 leading-tight">
                      {rec.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="pb-4 lg:pb-8 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCTA
            cta={{
              title: `Ready for Your Free Estimate?`,
              description: `Our team is ready to help you with your next ${subCategory.title.toLowerCase()} project in New York.`,
              buttons: [
                { text: "Get Free Quote", href: "/contact", primary: true },
                { text: "Call (914) 804-3000", href: "tel:+19148043000", primary: false }
              ]
            }}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
