"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useScroll, useTransform, useInView, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import {
  Award, Shield, Clock, CheckCircle2, Users,
  Star, Phone, Mail, MapPin, ArrowRight, ArrowUpRight,
  Building, Hammer, Zap, Heart, Scale, Gem, BadgeCheck,
  Compass, ShieldCheck, Ruler, ClipboardCheck, Wrench,
  Home, TreePine, Eye, Target, Sparkles, Quote,
  ChevronRight, HardHat, Layers, TrendingUp
} from "lucide-react";

// ─── Metadata for SEO ─────────────────────────────────────────────────────────
// (SEO metadata is handled via Next.js generateMetadata in layout or head)

// ─── Animated Counter ─────────────────────────────────────────────────────────
const Counter = ({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(to);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = to / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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

// ─── Marquee ──────────────────────────────────────────────────────────────────
const Marquee = () => {
  const items = [
    { text: "Licensed & Insured", icon: Shield },
    { text: "OSHA-30 Certified", icon: ShieldCheck },
    { text: "NYC Licensed Contractor", icon: Award },
    { text: "20+ Years Experience", icon: Clock },
    { text: "1,000+ Projects Completed", icon: CheckCircle2 },
    { text: "Family Owned Since 2005", icon: Users },
    { text: "Free Detailed Estimates", icon: ClipboardCheck },
    { text: "24/7 Emergency Service", icon: Phone },
  ];
  return (
    <div className="relative overflow-hidden py-5 bg-gradient-to-r from-gray-50 via-white to-gray-50">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
      <div className="marquee-track marquee-track--left">
        {[...items, ...items, ...items].map((item, i) => {
          const IconComp = item.icon;
          return (
            <div key={i} className="flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(195,5,5,0.08)] transition-all duration-300 cursor-default mx-2">
              <IconComp className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span className="text-[11px] font-medium tracking-wide text-gray-600 whitespace-nowrap">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const values = [
    { icon: Scale, title: "Integrity First", desc: "Honest pricing with zero hidden fees. Every quote is transparent, every invoice exact." },
    { icon: Gem, title: "Quality Craftsmanship", desc: "We treat every project like it's our own home — meticulous attention to detail, always." },
    { icon: Zap, title: "Fast & Reliable", desc: "On-time, on-budget delivery with rapid emergency response. We never miss a deadline." },
    { icon: Heart, title: "Family Values", desc: "Family-owned since 2005. We bring care, trust, and personal accountability to every job." },
    { icon: BadgeCheck, title: "Fully Licensed", desc: "NYC licensed general contractor #NYC-2005-8942. Fully insured with $5M comprehensive coverage." },
    { icon: Users, title: "Community Driven", desc: "Proud members of the New York construction community, serving our neighbors for 20+ years." },
  ];

  const stats = [
    { value: 1000, suffix: "+", label: "Projects Completed", icon: Building },
    { value: 20, suffix: "+", label: "Years Experience", icon: Award },
    { value: 98, suffix: "%", label: "Client Satisfaction", icon: Star },
    { value: 10, suffix: "YR", label: "Warranty", icon: Shield },
  ];

  const certs = [
    { cert: "OSHA-30 Certified Crews", icon: Award, color: "from-amber-500/10 to-amber-600/5" },
    { cert: "NY Licensed #NYC-2005-8942", icon: Shield, color: "from-blue-500/10 to-blue-600/5" },
    { cert: "OSHA Certified", icon: BadgeCheck, color: "from-green-500/10 to-green-600/5" },
    { cert: "Fully Insured", icon: ShieldCheck, color: "from-purple-500/10 to-purple-600/5" },
    { cert: "EPA Lead-Safe", icon: CheckCircle2, color: "from-teal-500/10 to-teal-600/5" },
    { cert: "NAHB Member", icon: Building, color: "from-indigo-500/10 to-indigo-600/5" },
  ];

  const processSteps = [
    { num: "01", title: "Free Consultation", desc: "We visit your property, discuss your vision, and assess the scope of work — completely free.", icon: Phone },
    { num: "02", title: "Detailed Estimate", desc: "Receive a transparent, itemized quote within 24 hours. No hidden costs, no surprises.", icon: ClipboardCheck },
    { num: "03", title: "Expert Execution", desc: "Our skilled crews bring your project to life with precision, quality materials, and daily updates.", icon: HardHat },
    { num: "04", title: "Final Walkthrough", desc: "We inspect every detail together, ensuring complete satisfaction before project sign-off.", icon: CheckCircle2 },
  ];

  const serviceAreas = [
    "Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island",
    "Westchester", "Long Island", "New Jersey"
  ];

  const services = [
    { name: "Roofing", icon: Home, desc: "Complete roof installation, repair & replacement" },
    { name: "Siding", icon: Layers, desc: "Premium vinyl, fiber cement & wood siding" },
    { name: "Windows & Doors", icon: Eye, desc: "Energy-efficient window & door solutions" },
    { name: "Decking", icon: TreePine, desc: "Custom wood & composite deck building" },
    { name: "Gutters", icon: Wrench, desc: "Seamless gutter installation & repair" },
    { name: "General Contracting", icon: Building, desc: "Full-service commercial & residential" },
  ];

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen bg-white overflow-hidden select-none">

        {/* ── HERO ───────────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-32 pb-20 blueprint-grid">
          <div className="tech-scanner" />
          <div className="absolute inset-0 bg-black/60 z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* Left Text */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-2"
                >
                  <span className="w-8 h-px bg-red-500" />
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-500">Established 2005 • NYC Contractor</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="heading-lg text-white leading-none tracking-tight text-center lg:text-left"
                >
                  About Our Licensed<br />
                  <span className="text-red-500 font-bold">Construction Company in NYC</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-white/90 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
                >
                  Mega Contracting NY Group delivers state-of-the-art engineering, structural restoration, and general contracting across all 5 boroughs with unmatched craftsmanship and transparent integrity.
                </motion.p>

                {/* Trust Pills */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
                >
                  {[
                    { icon: ShieldCheck, text: "NYC Licensed" },
                    { icon: ShieldCheck, text: "$5M Insured & Bonded" },
                    { icon: ClipboardCheck, text: "10-Year Warranty" },
                  ].map((pill, i) => (
                    <div key={i} className="flex items-center gap-2 px-3.5 py-2 bg-white/10 backdrop-blur-sm border border-white/10 text-[11px] font-bold text-white hover:bg-red-600 hover:text-white transition-all duration-300">
                      <pill.icon className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      {pill.text}
                    </div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
                >
                  <Link href="/contact" className="w-full sm:w-auto">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white font-bold text-lg rounded-none shadow-xl hover:shadow-2xl hover:bg-primary/90 transition-all duration-300 cursor-pointer"
                    >
                      Get Free Estimate <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                  <Link href="/services" className="w-full sm:w-auto">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-lg rounded-none hover:bg-white/20 transition-all duration-300 cursor-pointer"
                    >
                      Our Services
                    </motion.div>
                  </Link>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-5 relative"
              >
                <div className="relative">
                  {/* Main image */}
                  <div className="relative w-full aspect-[4/5] rounded-none overflow-hidden shadow-2xl border-2 border-white/20">
                    <Image
                      src="/assets/megaabout.png"
                      alt="Mega Construction - Premier NYC Contractor Since 2005"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  </div>

                  {/* Floating owner card */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="absolute -bottom-6 -left-6 w-[55%] aspect-[3/4] rounded-none overflow-hidden shadow-2xl border-2 border-white/20 hidden sm:block"
                  >
                    <Image
                      src="/assets/megaownerprinted.png"
                      alt="Adil Shamis - Founder of Mega Contracting NY Group"
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <p className="text-[9px] font-bold uppercase tracking-widest text-red-500">Founder & Owner</p>
                      <p className="text-sm font-bold">Adil Shamis</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MARQUEE ────────────────────────────────────────────── */}
        <Marquee />

        {/* ── STATS ──────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="By the Numbers"
              headline="20 Years of <span class='text-red-600'>Proven Results</span>"
              description="Numbers that reflect our commitment to New York families and businesses."
            />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((s, i) => {
                const IconComp = s.icon;
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative bg-white border border-gray-250 rounded-2xl p-6 lg:p-8 text-center hover:shadow-lg hover:border-red-500/40 transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-none mx-auto mb-4 flex items-center justify-center bg-red-600/[0.06] group-hover:bg-red-600 transition-colors duration-300">
                        <IconComp className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-1 tracking-tight">
                        <Counter to={s.value} suffix={s.suffix} />
                      </div>
                      <div className="text-xs font-bold text-gray-400 tracking-wider uppercase">{s.label}</div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── FOUNDER STORY ──────────────────────────────────────── */}
        <section className="py-24 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              <FadeIn className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl aspect-[4/5]">
                  <Image src="/assets/megaownerprinted.png" alt="Mega Construction - Building Excellence in New York City"
                    fill className="object-cover" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 px-3 py-1.5 bg-white border border-gray-250 text-[10px] font-bold uppercase tracking-widest text-gray-700 shadow-sm">
                    EST. 2005
                  </div>
                  <div className="absolute bottom-5 right-5 px-4 py-2 bg-white border border-gray-250 shadow-sm">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">OSHA-30 Certified</span>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15} className="lg:col-span-7 space-y-6">
                <SectionHeader
                  badge="Our Leadership"
                  headline="Meet the Founder: <span class='text-red-600'>Adil Shamis</span>"
                  description="General Contractor • Founder & Owner"
                  center={false}
                />

                <blockquote className="relative pl-5">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-red-600 rounded-none" />
                  <p className="text-gray-600 text-lg leading-relaxed italic font-normal">
                    &ldquo;Founded on over two decades of dedicated New York City construction trades craftsmanship beginning in 2005, formally incorporated as Mega Contracting NY Group Inc. in August 2023 with corporate headquarters at 3044 Radcliff Ave, Bronx NY.&rdquo;
                  </p>
                </blockquote>

                <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed font-normal">
                  <p>Adil Shamis established our exterior construction and masonry trades craftsmanship in New York City in 2005. To support expanding commercial and municipal operations across the five boroughs, the business was formally incorporated as Mega Contracting NY Group Inc. in New York on August 6, 2023 under founder Adil Shamis, maintaining continuous craftsman leadership and general contractor licensure #NYC-2005-8942 with corporate headquarters at 3044 Radcliff Ave, Bronx, NY 10469.</p>
                  <p>With over two decades of hands-on experience in general contracting, exterior envelope restoration, and commercial construction, Adil personally oversees project scopes to ensure every building meets rigorous NYC Department of Buildings (DOB) and Department of Transportation (DOT) engineering standards.</p>
                  <p>Under Adil's leadership, Mega Contracting NY Group has expanded its capabilities to provide comprehensive specialty services across Greater New York. We are the premier choice for <strong>facade restoration nyc</strong>, <strong>flat roofing nyc</strong>, and emergency <strong>roof leak repair nyc</strong>. Homeowners and property managers trust our expert teams for complex <strong>parapet wall repair nyc</strong>, structural <strong>chimney repair nyc</strong>, <strong>brick pointing nyc</strong>, and certified <strong>fire escape painting nyc</strong> to keep buildings safe and code-compliant.</p>
                  <p>As an established <strong>eifs contractor nyc</strong> and <strong>waterproofing contractor nyc</strong>, we resolve water intrusion and cladding issues on properties of any scale. We also provide professional <strong>stucco repair nyc</strong>, concrete <strong>sidewalk repair nyc</strong>, and structural <strong>foundation repair nyc</strong>. If your building has pending violations, our team performs detailed <strong>building safety assessment nyc</strong> inspections, handling both <strong>dob violation removal nyc</strong> and <strong>dot violation removal nyc</strong> from start to finish.</p>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    { val: "2005", label: "Founded" },
                    { val: "NYC", label: "Headquartered" },
                    { val: "5 Boros", label: "Coverage" },
                  ].map((s, i) => (
                    <div key={i} className="text-center p-3 border border-gray-150 bg-gray-50/50">
                      <div className="text-lg font-bold text-red-600">{s.val}</div>
                      <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a href="mailto:info@megacontractinggroup.com"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-bold text-xs uppercase tracking-wider rounded-none shadow-md hover:bg-primary/95 transition-all duration-300">
                    <Mail className="w-4 h-4" /> Get in Touch
                  </a>
                  <a href="tel:+19148043000"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 text-gray-800 font-bold text-xs uppercase tracking-wider rounded-none hover:bg-gray-200 transition-all duration-300">
                    <Phone className="w-4 h-4" /> Call Us
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Core Values"
              headline="What We <span class='text-red-600'>Stand For</span>"
              description="Our principles guide every decision, every project, and every relationship we build."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => {
                const IconComp = v.icon;
                return (
                  <FadeIn key={i} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ y: -5, transition: { duration: 0.25 } }}
                      className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-lg hover:border-red-500/40 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <div className="w-11 h-11 rounded-none flex items-center justify-center mb-5 bg-red-600/[0.06] group-hover:bg-red-600 transition-colors duration-300">
                        <IconComp className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-normal">{v.desc}</p>
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── OUR MISSION (Dark Panel) ───────────────────────────── */}
        <section className="py-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl"
                style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #111 100%)" }}>
                {/* Subtle glow */}
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-[0.08]"
                  style={{ background: "radial-gradient(circle, #C30505, transparent)" }} />
                <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full blur-[100px] opacity-[0.04]"
                  style={{ background: "radial-gradient(circle, #fff, transparent)" }} />

                <div className="relative p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
                  <div className="text-center lg:text-left space-y-4 max-w-2xl">
                    <p className="text-red-500 text-[11px] font-bold tracking-[0.3em] uppercase">Our Mission</p>
                    <h3 className="text-3xl sm:text-4xl text-white leading-tight font-bold">
                      To Revolutionize<br />
                      <span className="text-red-500">New York Construction</span>
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-normal">
                      We put people first — restoring trust through transparent pricing, exceptional craftsmanship, and an unwavering commitment to doing what's right, every single time.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
                    {[
                      { v: "100%", l: "Customer First" },
                      { v: "0%", l: "Hidden Fees" },
                      { v: "∞", l: "Commitment" },
                    ].map((s, i) => (
                      <div key={i} className="text-center px-4 py-5 border border-white/10 bg-white/[0.04]">
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{s.v}</div>
                        <div className="text-gray-500 text-[10px] uppercase tracking-wider font-bold">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── HOW WE WORK (Process) ──────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Our Process"
              headline="How We <span class='text-red-600'>Work</span>"
              description="From initial consultation to final walkthrough — a seamless, transparent process."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const IconComp = step.icon;
                return (
                  <FadeIn key={i} delay={i * 0.1}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative text-center p-6 lg:p-8 border border-gray-250 rounded-2xl bg-white hover:shadow-lg hover:border-red-500/40 transition-all duration-300"
                    >
                      {/* Step number */}
                      <div className="text-[11px] font-bold text-red-600 tracking-[0.3em] mb-4">{step.num}</div>
                      <div className="w-14 h-14 rounded-none mx-auto mb-5 flex items-center justify-center bg-red-600/[0.06] group-hover:bg-red-600 transition-colors duration-400">
                        <IconComp className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-400" />
                      </div>
                      <h3 className="text-[15px] font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed font-normal">{step.desc}</p>

                      {/* Connector line (except last) */}
                      {i < 3 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-gray-200" />
                      )}
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <SectionHeader
                  badge="Why Choose Us"
                  headline="New York's Most <span class='text-red-600'>Trusted Contractor</span>"
                  description="When you choose Mega Contracting NY Group, you're choosing over two decades of proven expertise, transparent pricing, and a team that treats your property like their own. Here's what sets us apart:"
                  center={false}
                />

                <div className="space-y-4">
                  {[
                    { title: "Transparent Pricing", desc: "Detailed, itemized estimates with zero hidden fees or surprise charges." },
                    { title: "Licensed & Fully Insured", desc: "NYC Licensed contractor #NYC-2005-8942 with comprehensive insurance coverage." },
                    { title: "10-Year Workmanship Warranty", desc: "Industry-leading warranty on all labor — we stand behind our work." },
                    { title: "24/7 Emergency Response", desc: "Storm damage or urgent repairs? Our emergency team is always on call." },
                    { title: "Local, Family-Owned", desc: "Not a franchise — a real family business invested in our community since 2005." },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                      className="flex items-start gap-3.5 group"
                    >
                      <div className="w-6 h-6 rounded-none bg-red-600/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-600 transition-colors duration-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</h4>
                        <p className="text-sm text-gray-500 font-normal leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((svc, i) => {
                      const IconComp = svc.icon;
                      return (
                        <motion.div
                          key={i}
                          whileHover={{ y: -3, scale: 1.02 }}
                          className="group p-5 rounded-2xl bg-white border border-gray-200 hover:border-red-500/40 hover:shadow-md transition-all duration-300"
                        >
                          <div className="w-10 h-10 rounded-none mb-3 flex items-center justify-center bg-red-600/[0.06] group-hover:bg-red-600 transition-colors duration-300">
                            <IconComp className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                          </div>
                          <h4 className="text-sm font-bold text-gray-900 mb-1">{svc.name}</h4>
                          <p className="text-xs text-gray-400 font-normal leading-relaxed">{svc.desc}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ─────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Credentials & Certifications"
              headline="Licensed, Certified <span class='text-red-600'>& Trusted</span>"
              description="Every certification we hold represents our commitment to industry excellence and your peace of mind."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {certs.map((c, i) => {
                const IconComp = c.icon;
                return (
                  <FadeIn key={i} delay={i * 0.06}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      className={`group relative text-center p-5 border border-gray-200 rounded-2xl bg-gradient-to-br ${c.color} hover:shadow-md hover:border-red-500/30 transition-all duration-300 cursor-default`}
                    >
                      <div className="w-12 h-12 rounded-none mx-auto mb-3 flex items-center justify-center bg-white border border-gray-150 shadow-sm group-hover:shadow-md transition-all duration-300">
                        <IconComp className="w-5 h-5 text-red-600" />
                      </div>
                      <p className="text-xs font-bold text-gray-800 leading-tight">{c.cert}</p>
                    </motion.div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SERVICE AREAS ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn>
                <SectionHeader
                  badge="Service Areas"
                  headline="Proudly Serving <span class='text-red-600'>Greater New York</span>"
                  description="From the heart of Manhattan to the neighborhoods of all five boroughs and beyond, Mega Contracting NY Group delivers expert construction services wherever you need us."
                  center={false}
                />

                <div className="flex flex-wrap gap-2.5">
                  {serviceAreas.map((area, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-red-50 hover:border-red-500/50 transition-all duration-300 cursor-default"
                    >
                      <MapPin className="w-3.5 h-3.5 text-red-600" />
                      <span className="text-sm font-bold text-gray-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="relative border border-gray-200 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/assets/megaabout.png"
                    alt="Mega Construction serves all five boroughs of New York City and surrounding areas"
                    fill
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-600 flex items-center justify-center shadow-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-left">
                        <p className="text-sm font-bold">All 5 Boroughs + Surrounding Areas</p>
                        <p className="text-xs text-white/80">Manhattan • Brooklyn • Queens • Bronx • Staten Island</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              badge="Client Testimonials"
              headline="What Our Clients <span class='text-red-600'>Say</span>"
            />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Mega Contracting completely transformed our home. From the initial consultation to the final walkthrough, every step was professional and transparent. Couldn't recommend them more!",
                  name: "Michael R.",
                  location: "Brooklyn, NY",
                  rating: 5,
                },
                {
                  quote: "After storm damage, they responded within hours. Their team worked tirelessly to restore our roof and siding. The 10-year warranty gave us complete peace of mind.",
                  name: "Sarah K.",
                  location: "Queens, NY",
                  rating: 5,
                },
                {
                  quote: "We've used Mega for three projects now — roofing, windows, and a full kitchen renovation. Consistently excellent work, fair pricing, and they always finish on time.",
                  name: "David L.",
                  location: "Manhattan, NY",
                  rating: 5,
                },
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative p-7 border border-gray-250 rounded-2xl bg-white hover:shadow-lg hover:border-red-500/40 transition-all duration-300"
                  >
                    <div className="flex items-center gap-0.5 mb-4">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-red-600/10 mb-3" />
                    <p className="text-gray-600 text-sm leading-relaxed font-normal mb-6">{t.quote}</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-600/[0.06] border border-red-500/10 flex items-center justify-center">
                        <span className="text-sm font-bold text-red-600">{t.name[0]}</span>
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-gray-900">{t.name}</p>
                        <p className="text-xs text-gray-400">{t.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <FadeIn>
              <div className="relative p-10 sm:p-14 rounded-2xl overflow-hidden border border-white/5 shadow-2xl text-center"
                style={{ background: "linear-gradient(135deg, #111 0%, #1a1a1a 50%, #111 100%)" }}>
                {/* Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] blur-[120px] opacity-[0.08]"
                  style={{ background: "radial-gradient(circle, #C30505, transparent)" }} />

                <p className="text-red-500 text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Start Your Project</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight font-bold">
                  Ready to Build<br />
                  <span className="text-red-500">Something Great?</span>
                </h2>
                <p className="text-gray-400 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
                  Get your free, no-obligation estimate today. Our team will visit your property, discuss your vision, and deliver a detailed quote within 24 hours.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm text-white shadow-lg cursor-pointer rounded-none"
                      style={{ background: "linear-gradient(135deg, #C30505, #A00404)", boxShadow: "0 8px 24px rgba(195,5,5,0.3)" }}>
                      Get Free Estimate <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Link>
                  <a href="tel:+19148043000" className="w-full sm:w-auto">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2.5 px-8 py-4 font-bold text-sm text-red-400 bg-white/[0.05] hover:bg-white/10 transition-colors cursor-pointer rounded-none border border-white/20">
                      <Phone className="w-4 h-4" /> +1 (914) 804-3000
                    </motion.div>
                  </a>
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
