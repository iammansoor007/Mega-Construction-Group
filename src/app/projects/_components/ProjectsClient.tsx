"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyData } from "@/data/projectsData";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Search,
  Filter,
  CheckCircle2,
  HardHat,
  Layers,
  Wrench,
  AlertCircle,
} from "lucide-react";

interface ProjectsClientProps {
  projects: CaseStudyData[];
}

const CATEGORIES = [
  { id: "All", label: "All Projects" },
  { id: "roofing-services", label: "Roofing" },
  { id: "masonry-work", label: "Masonry & Facade" },
  { id: "home-renovation", label: "Home Renovation" },
  { id: "concrete-services", label: "Concrete & Sidewalk" },
  { id: "stucco", label: "Stucco" },
  { id: "custom-home-building", label: "Custom Building" },
  { id: "emergency-service", label: "Emergency Repairs" },
];

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedBorough, setSelectedBorough] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const boroughs = useMemo(() => {
    const validProjects = projects.filter((p) => p.approvedForPublic !== false);
    const unique = Array.from(new Set(validProjects.map((p) => p.borough).filter(Boolean)));
    return ["All", ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      if (project.approvedForPublic === false) return false;

      const matchesCategory =
        selectedCategory === "All" ||
        project.serviceCategory === selectedCategory ||
        (project.servicesUsed && project.servicesUsed.some((s) => s.href.includes(selectedCategory)));

      const matchesBorough =
        selectedBorough === "All" ||
        (project.borough && project.borough.toLowerCase() === selectedBorough.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.projectType.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        (project.neighborhood && project.neighborhood.toLowerCase().includes(query)) ||
        (project.challenge && project.challenge.toLowerCase().includes(query)) ||
        (project.result && project.result.toLowerCase().includes(query)) ||
        (project.workPerformed && project.workPerformed.some((w) => w.toLowerCase().includes(query))) ||
        (project.materialsUsed && project.materialsUsed.some((m) => m.toLowerCase().includes(query)));

      return matchesCategory && matchesBorough && matchesQuery;
    });
  }, [projects, selectedCategory, selectedBorough, searchQuery]);

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Container */}
        <div className="space-y-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-3 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
            <span className="text-xs uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mr-2 pl-2">
              <Filter className="w-3.5 h-3.5 text-red-500" />
              Category:
            </span>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Secondary Controls Bar: Borough + Search */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
            {/* Borough Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mr-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Borough:
              </span>
              {boroughs.map((borough) => (
                <button
                  key={borough}
                  onClick={() => setSelectedBorough(borough as string)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wider transition-all duration-200 ${
                    selectedBorough === borough
                      ? "bg-white text-black font-bold"
                      : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {borough}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[260px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search scope, materials, scope..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <p className="text-xs font-mono uppercase tracking-wider text-white/50">
            Showing <span className="text-red-500 font-bold">{filteredProjects.length}</span> documented case studies
          </p>
          {(selectedCategory !== "All" || selectedBorough !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBorough("All");
                setSearchQuery("");
              }}
              className="text-xs text-red-400 hover:text-red-300 underline underline-offset-4 font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 rounded-3xl bg-[#141414] border border-white/10 text-center max-w-xl mx-auto my-12">
            <HardHat className="w-12 h-12 text-red-500/60 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2 font-heading uppercase">
              No matching projects found
            </h3>
            <p className="text-sm text-white/50 mb-6">
              Try adjusting your category filter, selecting a different borough, or clearing search keywords.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSelectedBorough("All");
                setSearchQuery("");
              }}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              View All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p) => {
              const displayImage = p.photos?.[0]?.src || p.image;
              const displayAlt = p.photos?.[0]?.alt || `${p.title} - ${p.projectType}`;

              return (
                <article
                  key={p.slug}
                  className="group rounded-2xl bg-[#141414] border border-white/10 hover:border-red-600/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:shadow-red-950/20"
                >
                  {/* Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-black/80">
                    <Image
                      src={displayImage}
                      alt={displayAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      {p.borough && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-white border border-white/15">
                          <MapPin className="w-3 h-3 text-red-500" />
                          {p.neighborhood ? `${p.neighborhood}, ${p.borough}` : p.borough}
                        </span>
                      )}
                      {p.year && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white">
                          <Calendar className="w-3 h-3 text-red-400" />
                          {p.year}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content (Only renders fields that exist) */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {p.projectType && (
                        <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-400 block mb-2">
                          {p.projectType}
                        </span>
                      )}

                      <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug mb-3 font-heading">
                        {p.title}
                      </h3>

                      {p.challenge && (
                        <div className="mb-4">
                          <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1 mb-1">
                            <AlertCircle className="w-3 h-3 text-amber-500" />
                            Challenge:
                          </p>
                          <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">
                            {p.challenge}
                          </p>
                        </div>
                      )}

                      {p.workPerformed && p.workPerformed.length > 0 && (
                        <div className="mb-4 pt-3 border-t border-white/5 space-y-1.5">
                          <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            Work Performed:
                          </p>
                          <p className="text-xs text-white/70 line-clamp-2">
                            {p.workPerformed[0]}
                          </p>
                        </div>
                      )}

                      {p.result && (
                        <div className="mb-4 pt-2 border-t border-white/5">
                          <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider mb-1">
                            Outcome:
                          </p>
                          <p className="text-xs text-emerald-400/90 line-clamp-2 leading-relaxed">
                            {p.result}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                      {/* Link to service page when serviceSlug is set */}
                      {p.serviceSlug && p.serviceCategory && (
                        <Link
                          href={`/services/${p.serviceCategory}/${p.serviceSlug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Wrench className="w-3 h-3" />
                          <span>Related Service Division</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}

                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white hover:text-red-400 transition-colors pt-2"
                      >
                        <span>View Documented Case Study</span>
                        <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
