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
} from "lucide-react";

interface ProjectsClientProps {
  projects: CaseStudyData[];
}

export default function ProjectsClient({ projects }: ProjectsClientProps) {
  const [selectedBorough, setSelectedBorough] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const boroughs = useMemo(() => {
    const unique = Array.from(new Set(projects.map((p) => p.borough)));
    return ["All", ...unique];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesBorough =
        selectedBorough === "All" ||
        project.borough.toLowerCase() === selectedBorough.toLowerCase();
      const matchesQuery =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.projectType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.materialsUsed.some((m) =>
          m.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesBorough && matchesQuery;
    });
  }, [projects, selectedBorough, searchQuery]);

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12 p-4 rounded-2xl bg-[#141414] border border-white/10 shadow-lg">
          {/* Borough Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase font-bold text-white/40 tracking-wider flex items-center gap-1.5 mr-2">
              <Filter className="w-3.5 h-3.5 text-red-500" />
              Borough:
            </span>
            {boroughs.map((borough) => (
              <button
                key={borough}
                onClick={() => setSelectedBorough(borough)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                  selectedBorough === borough
                    ? "bg-red-600 text-white shadow-md shadow-red-900/30"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
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
              placeholder="Search by keyword, scope, material..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/60 border border-white/10 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
          <p className="text-xs font-mono uppercase tracking-wider text-white/50">
            Showing <span className="text-red-500 font-bold">{filteredProjects.length}</span> documented case studies
          </p>
          {(selectedBorough !== "All" || searchQuery) && (
            <button
              onClick={() => {
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
              Try adjusting your search terms or selecting a different NYC borough.
            </p>
            <button
              onClick={() => {
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
            {filteredProjects.map((p) => (
              <article
                key={p.slug}
                className="group rounded-2xl bg-[#141414] border border-white/10 hover:border-red-600/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-2xl hover:shadow-red-950/20"
              >
                {/* Image & Badges */}
                <div className="relative h-56 w-full overflow-hidden bg-black/80">
                  <Image
                    src={p.image}
                    alt={`${p.title} - ${p.projectType} in ${p.location} by Mega Contracting NY Group`}
                    title={`${p.title} - ${p.projectType} NYC Project`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-black/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-bold text-white border border-white/15">
                      <MapPin className="w-3 h-3 text-red-500" />
                      {p.borough}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-600/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-wider text-white">
                      DOB Verified
                    </span>
                  </div>

                  {/* Date badge */}
                  <div className="absolute bottom-3 left-3.5 flex items-center gap-1 text-[11px] text-white/80 font-medium">
                    <Calendar className="w-3 h-3 text-red-400" />
                    <span>Completed {p.completionDate}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-red-400 block mb-2">
                      {p.projectType}
                    </span>
                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug mb-3 font-heading">
                      {p.title}
                    </h3>
                    <p className="text-xs text-white/60 line-clamp-2 leading-relaxed mb-4">
                      {p.problem}
                    </p>

                    {/* Scope Highlight */}
                    {p.scope && p.scope.length > 0 && (
                      <div className="mb-4 pt-3 border-t border-white/5 space-y-1.5">
                        <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider">
                          Key Deliverable:
                        </p>
                        <p className="text-xs text-white/70 line-clamp-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{p.scope[0]}</span>
                        </p>
                      </div>
                    )}

                    {/* Materials tags */}
                    {p.materialsUsed && p.materialsUsed.length > 0 && (
                      <div className="mb-5 space-y-1.5">
                        <p className="text-[10px] uppercase font-bold text-white/40 tracking-wider flex items-center gap-1">
                          <Layers className="w-3 h-3 text-red-500" />
                          Materials Spec:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {p.materialsUsed.slice(0, 2).map((mat, i) => (
                            <span
                              key={i}
                              className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-white/70 border border-white/5 line-clamp-1 max-w-[200px]"
                            >
                              {mat}
                            </span>
                          ))}
                          {p.materialsUsed.length > 2 && (
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-white/5 text-white/40">
                              +{p.materialsUsed.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Read Case Study Button */}
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/5 group-hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider border border-white/10 group-hover:border-red-600 transition-all duration-200 mt-2"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
