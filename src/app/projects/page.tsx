import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { projectsData } from "@/data/projectsData";
import { ShieldCheck, MapPin, Calendar, ArrowRight, Award } from "lucide-react";

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

export default function ProjectsIndexPage() {
  const projects = Object.values(projectsData);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 pt-36 pb-20 selection:bg-red-600 selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>E-E-A-T Documented Case Studies</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-gray-900 font-heading mb-4">
              NYC Construction Case Studies &amp; Project Evidence
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Every project represents real diagnostic problem-solving, structural engineering compliance, and verified craftsmanship. Explore our recent exterior restorations, roofing tear-offs, and luxury interior transformations across New York City.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((p) => (
              <div
                key={p.slug}
                className="rounded-3xl border border-gray-200 bg-white overflow-hidden hover:border-red-600/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                        {p.borough}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-red-600 font-bold uppercase tracking-wider mb-2">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{p.location}</span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 mb-2 font-heading group-hover:text-red-600 transition-colors">
                      {p.title}
                    </h2>

                    <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 font-normal">
                      {p.problem}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-gray-100">
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Core Materials Used:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {p.materialsUsed.slice(0, 2).map((m, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] bg-gray-100 text-gray-700"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center justify-between w-full p-3 rounded-xl bg-gray-50 group-hover:bg-red-600 text-gray-900 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-red-500">
                Ready to Build?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Request a Diagnostic Inspection for Your Property
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Our estimators visit your building, perform structural and moisture diagnostics, and deliver an itemized quote backed by our 10-year workmanship warranty.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all text-center"
              >
                Get Free Estimate
              </Link>
              <a
                href="tel:+19148043000"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/20 transition-all text-center"
              >
                (914) 804-3000
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
