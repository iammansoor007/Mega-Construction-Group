"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/data/blogsData";
import {
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Phone,
  HardHat,
  ChevronRight,
  AlertTriangle,
  Info,
  CheckCircle2,
  Bookmark,
  Share2,
  Check,
  Layers,
  Sparkles,
  Building,
  FileCheck2,
  ExternalLink,
} from "lucide-react";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const [readProgress, setReadProgress] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  // Scroll Progress Bar Tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPercent = (totalScroll / windowHeight) * 100;
        setReadProgress(Math.min(100, Math.max(0, scrollPercent)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for Table of Contents highlight
  useEffect(() => {
    const sectionIds = [
      ...post.contentSections.map((s) => s.id),
      "faqs",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [post]);

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* ── TOP READING PROGRESS BAR ────────────────────────────────────── */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-500 transition-[width] duration-150 ease-out shadow-[0_0_12px_rgba(239,68,68,0.8)]"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      <article className="pt-28 sm:pt-32 pb-24 bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white font-sans antialiased">
        {/* ── BREADCRUMB & HEADER HERO ─────────────────────────────────── */}
        <header className="border-b border-white/10 pb-12 sm:pb-16 bg-gradient-to-b from-black via-[#0d0d0d] to-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8 overflow-x-auto whitespace-nowrap"
            >
              <Link href="/" className="hover:text-red-500 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
              <Link href="/blog" className="hover:text-red-500 transition-colors">
                Technical Guides
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />
              <span className="text-red-400 font-semibold truncate max-w-xs">
                {post.category}
              </span>
            </nav>

            {/* Clean Professional Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
              <span className="px-3.5 py-1.5 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm shadow-red-600/30">
                {post.category}
              </span>
              <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/25 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                DOB Code Compliant
              </span>
              <span className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-medium border border-blue-500/25 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5" />
                Local Law 97 Ready
              </span>
              <span className="hidden sm:inline-flex px-3 py-1.5 rounded-full bg-white/5 text-white/70 text-xs font-mono font-medium border border-white/10">
                NYC GC #NYC-2005-8942
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-black uppercase tracking-tight text-white font-heading leading-[1.15] mb-6 max-w-5xl">
              {post.title}
            </h1>

            {/* Excerpt Lead */}
            <p className="text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-4xl mb-8 font-normal">
              {post.excerpt}
            </p>

            {/* Author Strip & Quick Meta */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10 text-xs text-white/60">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-900 border border-red-500/40 flex items-center justify-center text-white font-black text-sm shrink-0 shadow-md shadow-red-900/30">
                  MC
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">
                      {post.author.name}
                    </p>
                    <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="hidden sm:inline-block text-[11px] text-emerald-400 font-mono">
                      Verified Author
                    </span>
                  </div>
                  <p className="text-xs text-white/50">
                    {post.author.role} •{" "}
                    <span className="text-red-400 font-mono">
                      {post.author.license}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs">
                <span className="flex items-center gap-1.5 text-white/70">
                  <Calendar className="w-4 h-4 text-red-500" />
                  {post.formattedDate}
                </span>
                <span className="flex items-center gap-1.5 text-white/70">
                  <Clock className="w-4 h-4 text-red-500" />
                  {post.readTime}
                </span>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all active:scale-95 cursor-pointer ml-auto sm:ml-0"
                  title="Copy link to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5 text-red-400" />
                      <span>Share</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* ── FEATURED HERO IMAGE ──────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-12 sm:mb-16 relative z-10">
          <div className="relative h-[280px] sm:h-[420px] md:h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-black">
            <Image
              src={post.featuredImage}
              alt={post.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-xs text-white/80">
              <p className="font-mono text-[11px] sm:text-xs truncate max-w-xl text-white/70">
                {post.imageAlt}
              </p>
              <span className="shrink-0 bg-black/75 px-3 py-1.5 rounded-lg backdrop-blur-md text-[10px] sm:text-xs uppercase font-mono font-bold text-red-400 border border-red-500/30">
                Verified NYC Field Project
              </span>
            </div>
          </div>
        </div>

        {/* ── TWO-COLUMN ARTICLE LAYOUT (LEFT CONTENT, RIGHT STICKY) ───── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* ── LEFT COLUMN: SCROLLING ARTICLE CONTENT (8 COLS) ───────── */}
            <div className="lg:col-span-8 space-y-12 min-w-0">
              {/* Executive Summary Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#161616] to-[#0f0f0f] border border-red-500/30 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <h2 className="text-xs sm:text-sm uppercase font-mono tracking-widest text-red-400 font-bold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-red-500" />
                    Executive Briefing for NYC Property Owners &amp; Boards
                  </h2>
                  <span className="text-[10px] font-mono text-white/40 uppercase">
                    Key Highlights
                  </span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-white/80">
                  {post.keyTakeaways && post.keyTakeaways.length > 0 ? (
                    post.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">{item.label}:</strong>{" "}
                          {item.text}
                        </span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">DOB Work Permit:</strong>{" "}
                          Mandatory if replacing &gt;50% of the roof surface or
                          stripping down to structural concrete or wood deck.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">
                            Local Law 97 &amp; Energy Code:
                          </strong>{" "}
                          Full tear-offs must integrate minimum R-30 continuous
                          polyiso insulation to reduce carbon penalties.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">Recommended Membrane:</strong>{" "}
                          60-mil hot-air welded TPO delivers highest puncture
                          resistance, Cool Roof credits, and 25–30 year lifespans.
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-white">Parapet Integration:</strong>{" "}
                          Over 80% of building leaks stem from mortar joints and coping
                          stone ties; comprehensive restoration is essential.
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* Dynamic Content Sections */}
              {post.contentSections.map((sec, secIdx) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-28 space-y-6 pt-4"
                >
                  <div className="flex items-baseline gap-3 pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-red-500 tracking-wider">
                      0{secIdx + 1}
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white font-heading">
                      {sec.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {sec.paragraphs.map((p, idx) => (
                      <p
                        key={idx}
                        className="text-sm sm:text-base text-white/75 leading-relaxed sm:leading-loose font-normal [&_a]:text-red-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-300 transition-colors"
                        dangerouslySetInnerHTML={{ __html: p }}
                      />
                    ))}
                  </div>

                  {/* Technical Callout Alert Box */}
                  {sec.callout && (
                    <div
                      className={`p-5 sm:p-6 rounded-2xl border ${
                        sec.callout.type === "warning"
                          ? "bg-amber-950/20 border-amber-500/40 text-amber-200"
                          : sec.callout.type === "code"
                          ? "bg-red-950/25 border-red-500/40 text-red-200"
                          : "bg-blue-950/20 border-blue-500/40 text-blue-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase tracking-wider">
                        {sec.callout.type === "warning" ? (
                          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                        ) : sec.callout.type === "code" ? (
                          <ShieldCheck className="w-4 h-4 text-red-400 shrink-0" />
                        ) : (
                          <Info className="w-4 h-4 text-blue-400 shrink-0" />
                        )}
                        <span className="font-heading">{sec.callout.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed opacity-95">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}

                  {/* Inline Technical Section Image */}
                  {sec.image && (
                    <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                      <div className="relative h-64 sm:h-80 md:h-96 w-full">
                        <Image
                          src={sec.image.src}
                          alt={sec.image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 800px"
                        />
                      </div>
                      {sec.image.caption && (
                        <figcaption className="p-3.5 text-xs text-white/60 bg-[#121212] font-mono border-t border-white/10 flex items-center justify-between">
                          <span>{sec.image.caption}</span>
                          <span className="text-[10px] text-red-400 font-bold uppercase shrink-0">
                            Engineering Blueprint
                          </span>
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {/* High-Contrast Technical Comparison Table */}
                  {sec.table && (
                    <div className="overflow-x-auto my-6 rounded-2xl border border-white/10 bg-[#121212] shadow-md">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-white/5 border-b border-white/10 text-white font-bold uppercase tracking-wider text-[11px] font-mono">
                          <tr>
                            {sec.table.headers.map((h, i) => (
                              <th key={i} className="p-3.5 sm:p-4 whitespace-nowrap">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-white/70">
                          {sec.table.rows.map((row, rIdx) => (
                            <tr
                              key={rIdx}
                              className="hover:bg-white/[0.04] transition-colors"
                            >
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`p-3.5 sm:p-4 ${
                                    cIdx === 0
                                      ? "font-bold text-white whitespace-nowrap"
                                      : ""
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Step-by-Step Technical Process Items */}
                  {sec.listItems && (
                    <ol className="space-y-3.5 my-6">
                      {sec.listItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141414] border border-white/5 text-xs sm:text-sm text-white/80 hover:border-red-500/20 transition-colors"
                        >
                          <span className="w-6 h-6 rounded-lg bg-red-600/20 text-red-400 border border-red-600/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 font-mono">
                            {i + 1}
                          </span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </section>
              ))}

              {/* ── TECHNICAL FAQS ACCORDION ────────────────────────────── */}
              <section
                id="faqs"
                className="scroll-mt-28 pt-8 border-t border-white/10 space-y-6"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-red-600 rounded-full" />
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white font-heading">
                    Frequently Asked Technical Questions
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-white/50">
                  Engineering answers addressing NYC Department of Buildings codes,
                  permits, Local Law 97, and roofing specifications.
                </p>

                <div className="space-y-3 pt-2">
                  {post.faqs.map((faq, i) => {
                    const isOpen = activeFaq === i;
                    return (
                      <div
                        key={i}
                        className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                          isOpen
                            ? "bg-[#161616] border-red-600/50 shadow-lg shadow-red-950/20"
                            : "bg-[#121212] border-white/10 hover:border-white/20"
                        }`}
                      >
                        <button
                          onClick={() => setActiveFaq(isOpen ? null : i)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                          aria-expanded={isOpen}
                        >
                          <span className="font-bold text-sm sm:text-base text-white hover:text-red-400 transition-colors">
                            {faq.question}
                          </span>
                          <span
                            className={`w-7 h-7 rounded-full flex items-center justify-center border text-xs shrink-0 transition-transform ${
                              isOpen
                                ? "rotate-180 bg-red-600 border-red-600 text-white"
                                : "border-white/20 text-white/50"
                            }`}
                          >
                            ↓
                          </span>
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* ── AUTHOR & ENGINEERING TEAM VERIFICATION CARD ───────── */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-red-600 to-black border border-red-600/30 flex items-center justify-center text-white font-black text-xl shrink-0 shadow-xl">
                  MEGA
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-500 block mb-1">
                    Technical Content Verified By
                  </span>
                  <h3 className="text-lg font-bold text-white mb-1.5 font-heading">
                    {post.author.name}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    Licensed NYC General Contractor (#NYC-2005-8942) specializing in
                    commercial flat roofing, parapet wall rebuilding, facade
                    restoration, and DOB compliance across Manhattan, Brooklyn,
                    Queens, the Bronx, and Staten Island since 2005.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-[11px] font-mono text-white/50">
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      OSHA-30 Certified
                    </span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      $5M Liability Coverage
                    </span>
                    <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">
                      EPA Lead-Safe Certified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN: STICKY OUTLINE, OUTCOMES & CTA (4 COLS) ─ */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              {/* 1. Interactive Table of Contents / Outline */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-white/70 font-bold flex items-center gap-2">
                    <Bookmark className="w-3.5 h-3.5 text-red-500" />
                    Guide Outline
                  </h3>
                  <span className="text-[10px] font-mono text-red-400 font-bold">
                    {post.tableOfContents.length} Sections
                  </span>
                </div>

                <nav className="space-y-1 text-xs">
                  {post.tableOfContents.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => scrollToSection(e, item.id)}
                        className={`block px-3 py-2 rounded-lg transition-all line-clamp-1 border-l-2 ${
                          isActive
                            ? "bg-red-600/15 text-red-400 font-bold border-red-500 pl-3.5"
                            : "text-white/60 hover:text-white hover:bg-white/5 border-transparent"
                        }`}
                      >
                        {item.title}
                      </a>
                    );
                  })}
                </nav>
              </div>

              {/* 2. Key Outcomes & Compliance Widget (Dynamic per Post) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#181818] to-[#121212] border border-white/10 shadow-xl">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <h3 className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold flex items-center gap-2">
                    <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                    Key Project Outcomes
                  </h3>
                  <span className="text-[10px] font-mono text-white/40 uppercase">
                    NYC Standards
                  </span>
                </div>

                <div className="space-y-3 text-xs text-white/75">
                  {post.keyOutcomes && post.keyOutcomes.length > 0 ? (
                    post.keyOutcomes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">{item.title}</p>
                          <p className="text-[11px] text-white/60">{item.description}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">DOB Permit Threshold</p>
                          <p className="text-[11px] text-white/60">
                            Required if &gt;50% roof replaced or deck exposed.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">Local Law 97 Mandate</p>
                          <p className="text-[11px] text-white/60">
                            R-30 continuous polyiso insulation compliance.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">TPO Membrane Lifespan</p>
                          <p className="text-[11px] text-white/60">
                            25–30 year durability with Cool Roof rating.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2.5 p-2 rounded-lg bg-white/[0.03]">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-bold text-white">Parapet Tie-in</p>
                          <p className="text-[11px] text-white/60">
                            Coping stones &amp; counterflashing sealed against wind.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* 3. Direct Dispatch Engineering CTA Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#240808] via-[#1a0505] to-[#121212] border border-red-600/40 shadow-2xl text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-red-400 font-bold">
                    {post.ctaBox?.badge || "24/7 Field Engineering"}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-heading leading-tight">
                  {post.ctaBox?.title || "Need an On-Site Roof Inspection?"}
                </h3>
                <p className="text-xs text-white/65 leading-relaxed mb-5">
                  {post.ctaBox?.description || "Our licensed estimators perform thermal moisture scans, structural deck evaluations, and itemized DOB proposals."}
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+19148043000"
                    className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-red-950/40 active:scale-95 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-white" />
                    <span>Call (914) 804-3000</span>
                  </a>
                  <Link
                    href={post.ctaBox?.buttonHref || "/contact"}
                    className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <span>{post.ctaBox?.buttonText || "Request Free Estimate"}</span>
                    <ArrowRight className="w-4 h-4 text-red-400" />
                  </Link>
                </div>
              </div>

              {/* 4. Related NYC Services */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
                <h3 className="text-xs uppercase font-mono tracking-widest text-white/60 font-bold mb-4 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-red-500" />
                  Related Construction Services
                </h3>
                <div className="space-y-2">
                  {post.relatedServices.map((rel, i) => (
                    <Link
                      key={i}
                      href={rel.href}
                      className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] hover:bg-red-600/15 hover:border-red-600/30 border border-transparent transition-all text-xs group"
                    >
                      <div>
                        <p className="font-bold text-white group-hover:text-red-400 transition-colors">
                          {rel.title}
                        </p>
                        <span className="text-[10px] text-white/40 font-mono">
                          {rel.badge}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-red-400 transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
