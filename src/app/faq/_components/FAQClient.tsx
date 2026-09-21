"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import completeData from "@/data/completeData.json";
import {
  Search, ChevronDown, Phone, Mail, ArrowRight,
  Shield, Star, Clock, CheckCircle2, Award,
  HelpCircle, MessageCircle, FileText, Users,
  Home, Wrench, Building, MapPin, Sparkles,
  BadgeCheck, ShieldCheck, ClipboardCheck, Zap
} from "lucide-react";

// ─── Fade-in wrapper ──────────────────────────────────────────────────────────
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ─── Section Label ────────────────────────────────────────────────────────────
const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-5">
    <div className="w-8 h-[1.5px] bg-gradient-to-r from-red-600 to-red-400" />
    <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-red-600">{text}</span>
  </div>
);

// ─── Category icon map ────────────────────────────────────────────────────────
const categoryIcons: Record<string, any> = {
  Home, Tools: Wrench, Shield, Building, Storm: Zap
};

// ─── Accordion Item ───────────────────────────────────────────────────────────
const AccordionItem = ({ item, index, isOpen, onToggle }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div
        className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${
          isOpen
            ? "bg-white shadow-xl border-red-600/30 border-l-4"
            : "bg-white shadow-sm hover:shadow-md border-gray-200"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full text-left p-6 sm:p-8 focus:outline-none relative z-10"
          aria-expanded={isOpen}
        >
          <div className="flex items-center justify-between gap-6">
            <h3 className={`text-base md:text-lg lg:text-xl font-normal transition-all duration-500 text-left ${
              isOpen
                ? "text-red-600 font-bold"
                : "text-gray-800 group-hover:text-red-600"
            }`}>
              {item.question}
            </h3>

            <div className="relative flex-shrink-0">
              <motion.div
                animate={isOpen ? {
                  rotate: 180,
                  scale: 1.1,
                  backgroundColor: '#dc2626',
                  borderColor: '#dc2626',
                } : {
                  rotate: 0,
                  scale: 1,
                  backgroundColor: 'white',
                  borderColor: isHovered ? '#dc2626' : '#e2e8f0',
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300"
                >
                  <path
                    d={isOpen ? "M5 12h14" : "M12 5v14M5 12h14"}
                    stroke={isOpen ? 'white' : isHovered ? '#dc2626' : '#94a3b8'}
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <div className="relative pl-6 border-l-2 border-red-600/20">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5 font-normal text-left">
                    {item.answer}
                  </p>

                  {item.metadata && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                      {item.metadata.map((meta: any, i: number) => (
                        <div key={i} className="flex items-center gap-2 text-xs">
                          <span className="w-1 h-1 bg-red-600 rounded-full" />
                          <span className="text-gray-500 font-bold">{meta.label}:</span>
                          <span className="font-bold text-gray-700">{meta.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.links && (
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-red-600/10">
                      {item.links.map((link: any, i: number) => (
                        <Link
                          key={i}
                          href={link.url}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors group/link"
                        >
                          <span>{link.label}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  const { categories, items, knowledgeCard } = completeData.faq;

  const filteredItems = items.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleToggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Quick info items for SEO
  const quickInfo = [
    { icon: Phone, label: "Call Us", value: "+1 (914) 804-3000", href: "tel:+19148043000" },
    { icon: Mail, label: "Email", value: "info@megacontractinggroup.com", href: "mailto:info@megacontractinggroup.com" },
    { icon: Clock, label: "Response Time", value: "Within 24 Hours", href: null },
    { icon: MapPin, label: "Service Area", value: "All 5 NYC Boroughs", href: null },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white overflow-hidden select-none">

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-32 pb-20 blueprint-grid">
          <div className="tech-scanner" />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 mb-2"
              >
                <span className="w-8 h-px bg-red-500" />
                <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-500">Knowledge Base</span>
                <span className="w-8 h-px bg-red-500" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="heading-lg text-white leading-none tracking-tight text-center"
              >
                Frequently Asked<br />
                <span className="text-red-500 font-bold">Questions</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/90 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal text-center"
              >
                Expert answers to common questions about our construction, renovation, and contracting services across New York.
              </motion.p>

              {/* Search */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-lg mx-auto"
              >
                <div className={`relative flex items-center bg-white rounded-none border transition-all duration-300 ${
                  searchFocused
                    ? "shadow-lg border-red-500"
                    : "shadow-md hover:shadow-lg border-gray-200"
                }`}>
                  <Search className="absolute left-4 w-4.5 h-4.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="w-full pl-11 pr-4 py-3.5 bg-transparent rounded-none text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── QUICK INFO STRIP ───────────────────────────────────── */}
        <section className="py-6 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickInfo.map((info, i) => {
                const IconComp = info.icon;
                const Wrapper = info.href ? "a" : "div";
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Wrapper
                      {...(info.href ? { href: info.href } : {})}
                      className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-red-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <div className="w-9 h-9 bg-red-600/[0.06] flex items-center justify-center shrink-0">
                        <IconComp className="w-4 h-4 text-red-600" />
                      </div>
                      <div className="min-w-0 text-left">
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{info.label}</p>
                        <p className="text-xs font-bold text-gray-800 truncate">{info.value}</p>
                      </div>
                    </Wrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FAQ MAIN CONTENT ───────────────────────────────────── */}
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Category Filter */}
            <FadeIn className="mb-10">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((cat, i) => {
                  const CatIcon = cat.icon ? categoryIcons[cat.icon] : null;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setOpenItems([]);
                      }}
                      className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                        activeCategory === cat.id
                          ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                          : "text-gray-500 hover:text-gray-800 bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {CatIcon && <CatIcon className="w-3.5 h-3.5" />}
                        {cat.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </FadeIn>

            {/* FAQ Items */}
            <div className="space-y-3">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    item={item}
                    index={index}
                    isOpen={openItems.includes(index)}
                    onToggle={() => handleToggle(index)}
                  />
                ))
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                  <HelpCircle className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm mb-3">No questions found matching your criteria.</p>
                  <button
                    onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
                    className="text-xs text-red-600 hover:text-red-700 font-medium"
                  >
                    Clear filters
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* ── HELPFUL RESOURCES (SEO Section) ────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Helpful Resources"
              headline="Everything You Need <span class='text-red-600'>to Know</span>"
              description="Explore our comprehensive guides and resources to help you make informed decisions about your construction project."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileText,
                  title: "Free Project Estimates",
                  desc: "Get a detailed, transparent quote for your construction project within 24 hours — completely free, no obligation.",
                  link: "/contact",
                  linkText: "Request Estimate",
                },
                {
                  icon: Shield,
                  title: "Licensing & Insurance",
                  desc: "We are fully licensed (NYC-2005-8942), insured, and BBB A+ accredited. Your project is protected from start to finish.",
                  link: "/about",
                  linkText: "View Credentials",
                },
                {
                  icon: ClipboardCheck,
                  title: "10-Year Warranty",
                  desc: "Every project comes with our industry-leading 10-year workmanship warranty, plus full manufacturer warranties on all materials.",
                  link: "/contact",
                  linkText: "Learn More",
                },
                {
                  icon: Zap,
                  title: "Emergency Services",
                  desc: "Storm damage? Roof leak? Our 24/7 emergency team responds rapidly to protect your property and start repairs immediately.",
                  link: "/contact",
                  linkText: "Emergency Contact",
                },
                {
                  icon: Building,
                  title: "Commercial Projects",
                  desc: "From office build-outs to retail renovations, we deliver commercial construction projects on time and within budget.",
                  link: "/services",
                  linkText: "View Services",
                },
                {
                  icon: Users,
                  title: "Our Team & Story",
                  desc: "Family-owned since 2005, learn how Mega Contracting has become one of NYC's most trusted construction companies.",
                  link: "/about",
                  linkText: "About Us",
                },
              ].map((card, i) => {
                const IconComp = card.icon;
                return (
                  <FadeIn key={i} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group p-6 rounded-2xl bg-white border border-gray-200 hover:border-red-500/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-11 h-11 rounded-none mb-4 flex items-center justify-center bg-red-600/[0.06] group-hover:bg-red-600 transition-colors duration-300">
                        <IconComp className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-gray-500 font-normal leading-relaxed mb-4">{card.desc}</p>
                      <Link href={card.link}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 group-hover:gap-2.5 transition-all duration-300">
                        {card.linkText} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TRUST INDICATORS (SEO Section) ──────────────────────── */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Why Choose Mega Contracting"
              headline="NYC's Most <span class='text-red-600'>Trusted Contractor</span>"
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, value: "20+", label: "Years Experience", sub: "Family-owned since 2005" },
                { icon: Star, value: "BBB A+", label: "Accredited", sub: "Highest rating achievable" },
                { icon: CheckCircle2, value: "1,000+", label: "Projects Done", sub: "Across all 5 boroughs" },
                { icon: ShieldCheck, value: "10 Year", label: "Warranty", sub: "On all workmanship" },
              ].map((item, i) => {
                const IconComp = item.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="group text-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-red-500/50 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-none mx-auto mb-4 flex items-center justify-center bg-red-600/[0.06] group-hover:bg-red-600 transition-colors duration-300">
                        <IconComp className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-0.5">{item.value}</div>
                      <div className="text-xs font-bold text-gray-700 mb-1">{item.label}</div>
                      <div className="text-[10px] text-gray-400 font-normal">{item.sub}</div>
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── ALL SERVICES (SEO Section) ─────────────────────────── */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Our Services"
              headline="Expert Construction <span class='text-red-600'>Services</span>"
              description="Comprehensive construction, renovation, and restoration services across the New York metro area."
            />

            {/* Top row: 3 featured cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {[
                { icon: Home, name: "Roofing", desc: "Shingle, flat & TPO roofing — installation, repair & full replacement for residential and commercial properties.", href: "/services/roofing-services", image: "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg" },
                { icon: Building, name: "Masonry Work", desc: "Expert brick replacement, pointing, facade restoration, parapet walls, chimneys & waterproofing.", href: "/services/masonry-work", image: "/assets/updatedservicesassets/megabrickworkgridningpoiting.jpeg" },
                { icon: Wrench, name: "Concrete & Sidewalk", desc: "Driveways, sidewalks, foundations, DOT & DOB violation removal across NYC.", href: "/services/concrete-services", image: "/assets/updatedservicesassets/megaconcretesidewalk.jpeg" },
              ].map((svc, i) => {
                const IconComp = svc.icon;
                return (
                  <FadeIn key={i} delay={i * 0.08}>
                    <Link href={svc.href}>
                      <motion.div
                        whileHover={{ y: -5 }}
                        className="group relative rounded-2xl overflow-hidden h-[280px] cursor-pointer shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-500"
                      >
                        {/* BG image */}
                        <div className="absolute inset-0">
                          <img src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-500" />
                        </div>
                        {/* Content */}
                        <div className="relative z-10 h-full flex flex-col justify-end p-6">
                          <div className="w-10 h-10 rounded-none mb-3 flex items-center justify-center bg-white/15 backdrop-blur-sm group-hover:bg-red-600 transition-all duration-400">
                            <IconComp className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-1.5 text-left">{svc.name}</h3>
                          <p className="text-white/70 text-xs leading-relaxed line-clamp-2 font-normal text-left">{svc.desc}</p>
                          <div className="flex items-center gap-1.5 mt-3 text-red-400 text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                            View Services <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>

            {/* Bottom row: 4 compact cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Sparkles, name: "Home Renovation", desc: "Kitchen, bathroom, basement & interior remodeling", href: "/services/home-renovation", image: "/assets/updatedservicesassets/megafullhouserenovation1.jpeg" },
                { icon: MapPin, name: "Stucco Services", desc: "EIFS, traditional & Californian stucco application", href: "/services/stucco", image: "/assets/megastuccorestoreation1.jpg" },
                { icon: BadgeCheck, name: "Custom Home Building", desc: "Design-build, luxury finishes & smart homes", href: "/services/custom-home-building", image: "/assets/updatedservicesassets/megafullhouserenovation1.jpeg" },
                { icon: Zap, name: "Emergency Service", desc: "24/7 rapid deployment & safety assessment", href: "/services/emergency-service", image: "/assets/megaemergencyrepair.jpg" },
              ].map((svc, i) => {
                const IconComp = svc.icon;
                return (
                  <FadeIn key={i} delay={0.1 + i * 0.06}>
                    <Link href={svc.href}>
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl overflow-hidden h-[220px] cursor-pointer shadow-sm hover:shadow-xl border border-gray-200 transition-all duration-500"
                      >
                        <div className="absolute inset-0">
                          <img src={svc.image} alt={svc.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-all duration-500" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-end p-5">
                          <div className="w-9 h-9 rounded-none mb-2.5 flex items-center justify-center bg-white/15 backdrop-blur-sm group-hover:bg-red-600 transition-all duration-400">
                            <IconComp className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="text-sm font-bold text-white mb-1 text-left">{svc.name}</h3>
                          <p className="text-white/60 text-[11px] leading-relaxed font-normal line-clamp-2 text-left">{svc.desc}</p>
                        </div>
                      </motion.div>
                    </Link>
                  </FadeIn>
                );
              })}
            </div>

            <FadeIn delay={0.3} className="text-center mt-10">
              <Link href="/services" className="inline-block">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-bold text-sm shadow-md hover:shadow-lg hover:bg-gray-800 transition-all duration-300 cursor-pointer rounded-none border border-gray-800"
                >
                  View All Services <ArrowRight className="w-4 h-4" />
                </motion.div>
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* ── CTA (Split Panel) ─────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <FadeIn>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl"
                style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)" }}>
                {/* Glows */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] blur-[140px] opacity-[0.07]"
                  style={{ background: "radial-gradient(circle, #C30505, transparent)" }} />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] blur-[120px] opacity-[0.04]"
                  style={{ background: "radial-gradient(circle, #fff, transparent)" }} />

                <div className="relative z-10 grid lg:grid-cols-2 gap-0">
                  {/* Left - Contact Info */}
                  <div className="p-8 sm:p-12 lg:p-14 space-y-8">
                    <div>
                      <p className="text-red-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Get In Touch</p>
                      <h2 className="text-3xl sm:text-4xl text-white leading-tight mb-3 font-bold text-left">
                        Still Have<br />
                        <span className="text-red-500">Questions?</span>
                      </h2>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal text-left">
                        Our team is ready to help with your specific project needs. Get a free, no-obligation consultation.
                      </p>
                    </div>

                    {/* Contact cards */}
                    <div className="space-y-3">
                      <a href="tel:+19148043000" className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 group rounded-2xl">
                        <div className="w-11 h-11 bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                          <Phone className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Call Us Anytime</p>
                          <p className="text-white font-bold text-sm">+1 (914) 804-3000</p>
                        </div>
                      </a>
                      <a href="mailto:info@megacontractinggroup.com" className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.04] hover:bg-white/[0.08] transition-all duration-300 group rounded-2xl">
                        <div className="w-11 h-11 bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                          <Mail className="w-5 h-5 text-red-500 group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="text-left">
                          <p className="text-[10px] text-gray-500 uppercase tracking-wider font-bold">Email Us</p>
                          <p className="text-white font-bold text-sm">info@megacontractinggroup.com</p>
                        </div>
                      </a>
                    </div>

                    {/* Trust row */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        { icon: Shield, text: "Licensed & Insured" },
                        { icon: Star, text: "BBB A+ Rated" },
                        { icon: Clock, text: "24/7 Available" },
                      ].map((badge, i) => {
                        const IconComp = badge.icon;
                        return (
                          <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/[0.04] border border-white/5 rounded-none">
                            <IconComp className="w-3 h-3 text-red-500/60" />
                            <span className="text-[10px] text-gray-500 font-bold">{badge.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right - CTA Action */}
                  <div className="relative p-8 sm:p-12 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-red-600 via-red-600 to-red-700 rounded-none">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-[80px] opacity-20 bg-white pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[60px] opacity-10 bg-red-900 pointer-events-none" />

                    <div className="relative z-10 space-y-7">
                      {/* Heading */}
                      <div className="text-left">
                        <p className="text-red-200/60 text-[10px] font-bold tracking-[0.3em] uppercase mb-3">Free Consultation</p>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">Get Your Project<br />Started Today</h3>
                      </div>

                      {/* Feature list */}
                      <div className="space-y-3">
                        {[
                          "Free on-site property assessment",
                          "Detailed estimate within 24 hours",
                          "No obligation, no hidden fees",
                          "10-year workmanship warranty",
                        ].map((feat, i) => (
                          <div key={i} className="flex items-center gap-2.5">
                            <div className="w-5 h-5 rounded-none bg-white/20 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-white/90 text-sm font-normal text-left">{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="space-y-3 pt-1">
                        <Link href="/contact" className="block">
                          <motion.div
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-none bg-white text-red-600 font-bold text-sm shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
                          >
                            Get Free Estimate <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </Link>
                        <a href="tel:+19148043000" className="block">
                          <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center justify-center gap-2.5 w-full px-8 py-4 rounded-none bg-white/10 text-white font-bold text-sm cursor-pointer hover:bg-white/15 transition-all duration-300 border border-white/20"
                          >
                            <Phone className="w-4 h-4" /> Call +1 (914) 804-3000
                          </motion.div>
                        </a>
                      </div>

                      <p className="text-red-200/40 text-[10px] font-bold text-center tracking-wide">Response guaranteed within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
