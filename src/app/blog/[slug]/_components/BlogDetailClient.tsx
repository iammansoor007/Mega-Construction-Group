"use client";

import { useState } from "react";
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
  FileText,
  Layers,
  Award,
  Bookmark,
  Share2,
} from "lucide-react";

interface BlogDetailClientProps {
  post: BlogPost;
}

export default function BlogDetailClient({ post }: BlogDetailClientProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <article className="pt-32 pb-24 bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white font-sans">
      {/* ── BREADCRUMB & HEADER ────────────────────────────────────────── */}
      <header className="border-b border-white/10 pb-12 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <Link href="/blog" className="hover:text-red-500 transition-colors">Technical Guides</Link>
            <ChevronRight className="w-3 h-3 text-white/30 shrink-0" />
            <span className="text-red-500 truncate max-w-xs">{post.category}</span>
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-mono font-medium border border-white/10">
              Primary Keyword: {post.primaryKeyword}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/20">
              DOB Code Compliant
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-heading leading-tight mb-6">
            {post.title}
          </h1>

          {/* Excerpt / Lead */}
          <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-4xl mb-8 font-normal">
            {post.excerpt}
          </p>

          {/* Author Strip & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-6 pt-6 border-t border-white/10 text-xs text-white/60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500 font-bold text-sm shrink-0">
                MC
              </div>
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <p className="text-xs text-white/50">{post.author.role} • <span className="text-red-400">{post.author.license}</span></p>
              </div>
            </div>

            <div className="flex items-center gap-6 font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-red-500" />
                {post.formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-red-500" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* ── FEATURED HERO IMAGE ────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 mb-16 relative z-10">
        <div className="relative h-[340px] sm:h-[480px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black">
          <Image
            src={post.featuredImage}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1000px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs text-white/70">
            <p className="font-mono text-[11px] truncate">{post.imageAlt}</p>
            <span className="shrink-0 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md text-[10px] uppercase font-bold text-red-400">
              Verified Project Photo
            </span>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT WITH SIDEBAR ─────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Article Body (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Executive Highlights Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141414] border border-red-600/30 shadow-lg">
              <h3 className="text-xs uppercase font-mono tracking-widest text-red-500 font-bold mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Executive Summary for NYC Building Owners
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-white/80">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>DOB Work Permit:</strong> Required if replacing &gt;50% of roof area or removing down to structural concrete/wood deck.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Local Law 97 &amp; Energy Code:</strong> Full replacements must meet minimum R-30 continuous insulation, reducing heating/cooling loss.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Recommended Membrane:</strong> 60-mil hot-air welded TPO delivers highest puncture resistance, UV Cool Roof credits, and 25-30 year lifespans.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Parapet Integration:</strong> 80% of leaks stem from mortar joints and flashing; parapet repointing and coping stone tie-backs are essential.</span>
                </li>
              </ul>
            </div>

            {/* Content Sections */}
            {post.contentSections.map((sec) => (
              <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-heading border-b border-white/10 pb-3">
                  {sec.title}
                </h2>

                {sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                    {p}
                  </p>
                ))}

                {/* Callout Box */}
                {sec.callout && (
                  <div
                    className={`p-6 rounded-2xl border ${
                      sec.callout.type === "warning"
                        ? "bg-amber-950/20 border-amber-500/40 text-amber-200"
                        : sec.callout.type === "code"
                        ? "bg-red-950/20 border-red-500/40 text-red-200"
                        : "bg-blue-950/20 border-blue-500/40 text-blue-200"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 font-bold text-xs uppercase tracking-wider">
                      {sec.callout.type === "warning" ? (
                        <AlertTriangle className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Info className="w-4 h-4 text-red-400" />
                      )}
                      <span>{sec.callout.title}</span>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed opacity-90">{sec.callout.text}</p>
                  </div>
                )}

                {/* Inline Section Image */}
                {sec.image && (
                  <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 bg-black">
                    <div className="relative h-64 sm:h-80 w-full">
                      <Image
                        src={sec.image.src}
                        alt={sec.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                    {sec.image.caption && (
                      <figcaption className="p-3 text-xs text-white/50 bg-[#121212] font-mono border-t border-white/5">
                        {sec.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}

                {/* Comparison Table */}
                {sec.table && (
                  <div className="overflow-x-auto my-6 rounded-2xl border border-white/10 bg-[#121212]">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-white/5 border-b border-white/10 text-white font-bold uppercase tracking-wider text-[11px]">
                        <tr>
                          {sec.table.headers.map((h, i) => (
                            <th key={i} className="p-3.5 sm:p-4">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5 text-white/70">
                        {sec.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/5 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className={`p-3.5 sm:p-4 ${
                                  cIdx === 0 ? "font-bold text-white" : ""
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

                {/* List Items */}
                {sec.listItems && (
                  <ol className="space-y-3.5 my-6">
                    {sec.listItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 p-4 rounded-xl bg-[#141414] border border-white/5 text-xs sm:text-sm text-white/80">
                        <span className="w-6 h-6 rounded-lg bg-red-600/20 text-red-500 border border-red-600/30 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            ))}

            {/* ── TECHNICAL FAQS ACCORDION ──────────────────────────────── */}
            <section id="faqs" className="scroll-mt-28 pt-8 border-t border-white/10 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-red-600 rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white font-heading">
                  Frequently Asked Questions
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-white/50">
                Technical answers addressing NYC Department of Buildings codes, permitting, and waterproofing practices.
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
                        className="w-full p-5 text-left flex items-center justify-between gap-4"
                        aria-expanded={isOpen}
                      >
                        <span className="font-bold text-sm sm:text-base text-white hover:text-red-400 transition-colors">
                          {faq.question}
                        </span>
                        <span className={`w-7 h-7 rounded-full flex items-center justify-center border text-xs shrink-0 transition-transform ${
                          isOpen ? "rotate-180 bg-red-600 border-red-600 text-white" : "border-white/20 text-white/50"
                        }`}>
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

            {/* ── AUTHOR BIO BOX ────────────────────────────────────────── */}
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-black border border-red-600/30 flex items-center justify-center text-white font-black text-xl shrink-0 shadow-xl">
                MEGA
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-500 block mb-1">
                  Article Verified By
                </span>
                <h3 className="text-lg font-bold text-white mb-2 font-heading">
                  {post.author.name}
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-3">
                  Licensed NYC General Contractor (#NYC-2005-8942) specializing in commercial flat roofing, parapet wall rebuilding, brownstone historic preservation, and DOB compliance across all 5 NYC boroughs since 2005.
                </p>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start text-[11px] font-mono text-white/50">
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">OSHA-30 Certified</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">$5M Liability Coverage</span>
                  <span className="bg-white/5 px-2.5 py-1 rounded border border-white/5">EPA Lead-Safe Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Technical Sidebar (4 cols) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            {/* Table of Contents */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
              <h3 className="text-xs uppercase font-mono tracking-widest text-white/50 font-bold mb-4 flex items-center gap-2">
                <Bookmark className="w-3.5 h-3.5 text-red-500" />
                Guide Table of Contents
              </h3>
              <nav className="space-y-2 text-xs">
                {post.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-colors line-clamp-1"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Direct Dispatch Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1a0505] to-[#121212] border border-red-600/30 shadow-xl text-left">
              <span className="text-[10px] uppercase tracking-widest text-red-400 font-bold block mb-1">
                24/7 Field Engineering
              </span>
              <h3 className="text-lg font-bold text-white mb-2 font-heading">
                Need an On-Site Roof Inspection?
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-5">
                Our licensed estimators perform thermal moisture scans, structural deck evaluations, and itemized DOB-compliant proposals.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+19148043000"
                  className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-lg shadow-red-900/30"
                >
                  <Phone className="w-4 h-4" />
                  <span>(914) 804-3000</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Related Services */}
            <div className="p-6 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
              <h3 className="text-xs uppercase font-mono tracking-widest text-white/50 font-bold mb-4 flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-red-500" />
                Related Construction Services
              </h3>
              <div className="space-y-2.5">
                {post.relatedServices.map((rel, i) => (
                  <Link
                    key={i}
                    href={rel.href}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-red-600/20 hover:border-red-600/40 border border-transparent transition-all text-xs group"
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
  );
}
