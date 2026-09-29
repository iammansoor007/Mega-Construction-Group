import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { projectsData } from "@/data/projectsData";
import {
  ShieldCheck, CheckCircle2, Phone, ArrowRight,
  ChevronRight, MapPin, Calendar, Wrench, Layers, Award
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    return { title: "Project Not Found | Mega Contracting NY Group" };
  }

  const canonicalUrl = `https://www.megacontractingnyc.com/projects/${project.slug}`;

  return {
    title: { absolute: `${project.title} | Case Study | Mega Contracting NY Group` },
    description: `Case study: ${project.title} in ${project.location}. Diagnostic problem, materials used, NYC DOB code compliance, and final result by Mega Contracting NY Group Inc.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.problem,
      url: canonicalUrl,
      siteName: "Mega Contracting NY Group",
      images: [{ url: `https://www.megacontractingnyc.com${project.image}`, width: 1200, height: 630 }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projectsData[slug];

  if (!project) {
    notFound();
  }

  const BASE_URL = "https://www.megacontractingnyc.com";

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": `${BASE_URL}/projects` },
        { "@type": "ListItem", "position": 3, "name": project.title, "item": `${BASE_URL}/projects/${project.slug}` }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "contentUrl": `${BASE_URL}${project.image}`,
      "description": project.title,
      "name": project.title,
      "author": {
        "@type": "GeneralContractor",
        "name": "Mega Contracting NY Group Inc."
      }
    }
  ];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      <Navbar />

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-600 selection:text-white">
        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden pt-36 pb-16 bg-gray-950 text-white">
          <div className="absolute inset-0 select-none grayscale opacity-25 z-0">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left">
            <div className="max-w-4xl space-y-6">
              {/* Breadcrumb */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-widest text-white/60 font-bold">
                <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <Link href="/projects" className="hover:text-red-500 transition-colors">Projects</Link>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                <span className="text-red-500">{project.borough}</span>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Case Study</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>{project.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
                  <Calendar className="w-3.5 h-3.5 text-red-500" />
                  <span>Completed {project.completionDate}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase leading-[1.15] font-heading">
                {project.title}
              </h1>

              <p className="text-sm uppercase font-bold tracking-widest text-gray-300">
                Project Classification: <span className="text-white">{project.projectType}</span>
              </p>
            </div>
          </div>
        </section>

        {/* ── CASE STUDY DETAILS GRID ────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">

              {/* Left Column: Full Project Narrative */}
              <div className="lg:col-span-8 space-y-12">

                {/* Problem Statement */}
                <div className="p-8 rounded-3xl bg-red-50/50 border border-red-200/60 space-y-3">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-600 block">
                    Diagnostic Challenge
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 font-heading">
                    The Problem &amp; Initial Inspection Findings
                  </h2>
                  <p className="text-base text-gray-700 leading-relaxed font-normal">
                    {project.problem}
                  </p>
                </div>

                {/* Scope of Work */}
                <div className="space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-600 block">
                    Contracted Scope
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-950 font-heading">
                    Comprehensive Scope of Work
                  </h2>
                  <div className="space-y-3 pt-2">
                    {project.scope.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-gray-800 font-normal leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phased Process Execution */}
                <div className="space-y-6">
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-red-600 block">
                    Technical Execution
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-gray-950 font-heading">
                    Phased Construction Methodology
                  </h2>
                  <div className="space-y-4">
                    {project.process.map((p, idx) => (
                      <div key={idx} className="p-6 rounded-2xl border border-gray-200 bg-white">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                          <span className="w-7 h-7 rounded-lg bg-red-600 text-white text-xs font-mono flex items-center justify-center font-bold">
                            {idx + 1}
                          </span>
                          <span>{p.step}</span>
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed pl-9 font-normal">
                          {p.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Final Result */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-2xl border border-gray-200 bg-white space-y-2">
                    <h3 className="text-base font-bold uppercase font-heading text-gray-900">
                      Engineering Challenges
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {project.challenges}
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl border border-green-200 bg-green-50/30 space-y-2">
                    <h3 className="text-base font-bold uppercase font-heading text-green-900">
                      Final Verified Result
                    </h3>
                    <p className="text-xs sm:text-sm text-green-800 leading-relaxed font-normal">
                      {project.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Spec Box & Quick Contact */}
              <div className="lg:col-span-4 space-y-8">
                {/* Photo Card */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Materials Used Spec Box */}
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-200 space-y-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600">
                    <Layers className="w-4 h-4" />
                    <span>Materials &amp; Products Deployed</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {project.materialsUsed.map((mat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                        <span>{mat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Associated Services */}
                <div className="p-6 rounded-3xl bg-white border border-gray-200 space-y-3">
                  <p className="text-xs uppercase font-bold tracking-wider text-gray-500">
                    Contracted Service Divisions:
                  </p>
                  <div className="space-y-2">
                    {project.servicesUsed.map((s, i) => (
                      <Link
                        key={i}
                        href={s.href}
                        className="flex items-center justify-between p-3 rounded-xl bg-gray-50 hover:bg-red-50 text-gray-900 hover:text-red-600 text-xs font-bold transition-all group"
                      >
                        <span>{s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA Card */}
                <div className="p-8 rounded-3xl bg-gray-950 text-white space-y-4 shadow-xl">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-red-500">
                    Similar Scope Needed?
                  </span>
                  <h3 className="text-xl font-bold font-heading">
                    Schedule an On-Site Diagnostic Inspection
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    Mega Contracting NY Group Inc. provides transparent itemized estimates with full DOB permit coordination across all 5 boroughs.
                  </p>
                  <div className="space-y-2 pt-2">
                    <Link
                      href="/contact"
                      className="block w-full py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest text-center rounded-xl transition-all shadow-md"
                    >
                      Request Free Quote
                    </Link>
                    <a
                      href="tel:+19148043000"
                      className="block w-full py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest text-center rounded-xl border border-white/20 transition-all"
                    >
                      (914) 804-3000
                    </a>
                  </div>
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
