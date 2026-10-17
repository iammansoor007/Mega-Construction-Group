import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectsData } from "@/data/projectsData";
import {
  ShieldCheck, MapPin, Calendar, ArrowRight,
  Layers, Award, FileCheck, HardHat,
  Building2, TrendingUp, Star
} from "lucide-react";
import ProjectsClient from "./_components/ProjectsClient";

export const metadata: Metadata = {
  title: {
    absolute: "Documented Construction Projects & Case Studies NYC | Mega Contracting NY Group",
  },
  description:
    "Explore real, documented construction case studies across NYC. Roofing tear-offs, facade restorations, brownstone repointing, and luxury renovations by Mega Contracting NY Group Inc.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/projects",
  },
  openGraph: {
    title: "Documented Projects & Case Studies | Mega Contracting NY Group",
    description: "Verified project evidence, materials used, and NYC DOB code compliance sign-offs.",
    url: "https://www.megacontractingnyc.com/projects",
  },
};

const STATS = [
  { value: "500+", label: "Projects Completed", icon: "HardHat" },
  { value: "10yr", label: "Workmanship Warranty", icon: "ShieldCheck" },
  { value: "5", label: "NYC Boroughs Covered", icon: "MapPin" },
  { value: "100%", label: "DOB Code Compliant", icon: "FileCheck" },
];

export default function ProjectsIndexPage() {
  const projects = Object.values(projectsData);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-red-600 selection:text-white font-sans">

        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-36 pb-20">
          <div className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse 80% 50% at 50% -20%, rgba(220,38,38,0.18) 0%, transparent 60%),
                linear-gradient(180deg, #0a0a0a 0%, #111111 100%)
              `
            }}
          />
          <div className="absolute inset-0 z-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "60px 60px"
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-600/30 bg-red-600/10 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>E-E-A-T Documented Case Studies</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white mb-6 font-heading">
                NYC Construction<br />
                <span style={{ WebkitTextFillColor: "transparent", WebkitBackgroundClip: "text", backgroundImage: "linear-gradient(135deg, #ef4444, #dc2626)", backgroundClip: "text" } as React.CSSProperties}>
                  Case Studies
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl font-normal mb-10">
                Every project is real. Real diagnostic findings, real materials, real DOB sign-offs. Browse verified case studies from roofing tear-offs and facade restorations to luxury interior transformations across all five NYC boroughs.
              </p>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
                {STATS.map((s, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-600/15 border border-red-600/20 text-red-500 flex items-center justify-center text-xs">
                      {s.icon === "HardHat" && <HardHat className="w-4 h-4" />}
                      {s.icon === "ShieldCheck" && <ShieldCheck className="w-4 h-4" />}
                      {s.icon === "MapPin" && <MapPin className="w-4 h-4" />}
                      {s.icon === "FileCheck" && <FileCheck className="w-4 h-4" />}
                    </div>
                    <div>
                      <p className="text-xl font-black text-white leading-none">{s.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold">{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive filtered cards */}
        <ProjectsClient projects={projects} />

        {/* ── TRUST STRIP ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-[#111111] border-t border-white/8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <Award className="w-6 h-6" />, title: "Fully Documented Projects", desc: "Every case study includes verified scopes, materials used, and final NYC DOB sign-off documentation." },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Proven Structural Outcomes", desc: "Zero post-construction moisture failures. Our thermal-welded systems last decades beyond code minimums." },
                { icon: <Building2 className="w-6 h-6" />, title: "All Property Classes", desc: "From pre-war residential co-ops to active commercial facades — we've engineered solutions for every building type." },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#181818] border border-white/8 flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-red-600/15 border border-red-600/20 text-red-500 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DARK CTA ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-[#0a0a0a] border-t border-white/8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
              className="rounded-3xl p-12 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1a0000 0%, #0f0f0f 40%, #1a0000 100%)", border: "1px solid rgba(220,38,38,0.2)" }}
            >
              <div className="relative z-10">
                <span className="inline-block px-4 py-1.5 rounded-full border border-red-600/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
                  Similar Scope Needed?
                </span>
                <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 font-heading">
                  Schedule an On-Site<br />Diagnostic Inspection
                </h2>
                <p className="text-base text-white/50 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
                  Our estimators visit your building, perform moisture and structural diagnostics, and deliver a transparent itemized quote with full DOB permit coordination across all 5 boroughs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-xl transition-all duration-200 inline-flex items-center justify-center gap-2"
                  >
                    <span>Request Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+19148043000"
                    className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/15 transition-all duration-200"
                  >
                    (914) 804-3000
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
