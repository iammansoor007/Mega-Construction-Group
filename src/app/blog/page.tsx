import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllBlogPosts } from "@/data/blogsData";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Tag,
  Search,
  CheckCircle2,
  Phone,
  HardHat,
  Award,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "NYC Construction & Roofing Blog | Technical Guides & DOB Codes | Mega Contracting NY Group",
  },
  description:
    "Technical construction insights, NYC DOB code updates, Local Law 97 energy compliance guides, and commercial roofing best practices from Mega Contracting NY Group Inc.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/blog",
  },
  openGraph: {
    title: "NYC Construction & Roofing Engineering Guides | Mega Contracting NY Group",
    description:
      "Expert contractor guides covering flat roof replacement, DOB work permits, masonry restoration, and Local Law 97 compliance across New York City.",
    url: "https://www.megacontractingnyc.com/blog",
    siteName: "Mega Contracting NY Group",
    locale: "en_US",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mega Contracting NY Group Construction & Engineering Blog",
    description: "Technical guides and building code analysis for NYC property owners, co-op boards, and facility managers.",
    url: "https://www.megacontractingnyc.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Mega Contracting NY Group Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://www.megacontractingnyc.com/assets/Mega-Contracting-Logo.png",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.megacontractingnyc.com" },
        { "@type": "ListItem", "position": 2, "name": "Technical Blog & Guides", "item": "https://www.megacontractingnyc.com/blog" },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white font-sans">
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative pt-36 pb-20 bg-gradient-to-b from-black via-[#0d0d0d] to-[#0a0a0a] border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                <span>NYC Building Code &amp; Construction Engineering</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white font-heading leading-tight mb-6">
                Construction Insights &amp; <span className="text-red-600">Technical Guides</span>
              </h1>
              <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal mb-8">
                In-depth technical analysis for NYC property managers, building owners, and co-op boards. Covering Department of Buildings (DOB) permitting, Local Law 97 compliance, commercial roofing systems, and exterior restoration methods.
              </p>

              {/* Quick Trust Badges */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-white/50">
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-red-500" />
                  DOB Code Verified
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <Award className="w-4 h-4 text-red-500" />
                  Written by Licensed Engineers
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                  <HardHat className="w-4 h-4 text-red-500" />
                  NYC General Contractor #NYC-2005-8942
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED POST ────────────────────────────────────────────────── */}
        {featuredPost && (
          <section className="py-16 bg-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-xs uppercase font-mono tracking-widest text-red-500 font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  Featured Technical Guide
                </span>
                <span className="text-xs text-white/40 font-mono">Latest Publication</span>
              </div>

              <article className="group relative rounded-3xl bg-[#141414] border border-white/10 hover:border-red-600/50 transition-all duration-300 overflow-hidden shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-black">
                    <Image
                      src={featuredPost.featuredImage}
                      alt={featuredPost.imageAlt}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#141414]/30 lg:to-[#141414]" />

                    {/* Badge Overlay */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-red-600/90 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                        {featuredPost.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/75 text-white/90 text-xs font-semibold backdrop-blur-md border border-white/15">
                        Local Law 97 Ready
                      </span>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                    <div>
                      {/* Meta stats */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-white/50 mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-red-500" />
                          {featuredPost.formattedDate}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-red-500" />
                          {featuredPost.readTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white group-hover:text-red-400 transition-colors font-heading leading-tight mb-4">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          {featuredPost.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-sm text-white/60 leading-relaxed font-normal mb-6">
                        {featuredPost.excerpt}
                      </p>

                      {/* Keywords covered */}
                      <div className="mb-6 pt-4 border-t border-white/5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mb-2">
                          Key Compliance Topics Covered:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {featuredPost.supportingKeywords.slice(0, 4).map((kw, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] text-white/70"
                            >
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Author & CTA */}
                    <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-600/30 flex items-center justify-center text-red-500 font-bold text-xs shrink-0">
                          MC
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white leading-none">
                            {featuredPost.author.name}
                          </p>
                          <p className="text-[10px] text-white/40 mt-1 font-mono">
                            {featuredPost.author.license}
                          </p>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 self-start sm:self-auto shadow-lg shadow-red-900/30"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}

        {/* ── ADDITIONAL ARTICLES (GRID) ──────────────────────────────────── */}
        {remainingPosts.length > 0 && (
          <section className="py-16 bg-[#111111] border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-white mb-8 font-heading flex items-center gap-3">
                <span className="w-3 h-3 bg-red-600 rounded-full" />
                More Technical Construction Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {remainingPosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-2xl bg-[#181818] border border-white/10 hover:border-red-600/50 transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-black">
                      <Image
                        src={post.featuredImage}
                        alt={post.imageAlt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-[11px] font-mono text-white/50 mb-2">
                          <span>{post.formattedDate}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors font-heading mb-3">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-white/5 group-hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider transition-all"
                      >
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── TOPICAL CALLOUT BANNER ───────────────────────────────────────── */}
        <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="rounded-3xl p-10 md:p-14 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #1c0202 0%, #111111 50%, #1c0202 100%)",
                border: "1px solid rgba(220, 38, 38, 0.25)",
              }}
            >
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Facing a DOB Violation or Roof Failure?
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-heading">
                  Get an On-Site Diagnostic<br />Inspection in NYC
                </h2>
                <p className="text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
                  Our licensed estimators and project managers visit your property across Manhattan, Brooklyn, Queens, the Bronx, or Staten Island, provide moisture scans, and deliver an itemized quote with full DOB permit coordination.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    <span>Request Free On-Site Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+19148043000"
                    className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/15 transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>(914) 804-3000</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
