"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Shield, Flame, Wrench, AlertTriangle, Building2, 
  Layers, Droplets, Home, Hammer, ArrowUpRight, 
  Sparkles, CheckSquare, FileText, Activity, Compass
} from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  icon: any;
  index: number;
}

const specialistServices = [
  {
    title: "Facade Restoration NYC",
    description: "Complete brownstone, brick, and historic facade restoration compliant with NYC Local Law 11 (FISP) standards.",
    link: "/services/masonry-work",
    icon: Building2
  },
  {
    title: "Roof Leak Repair NYC",
    description: "Rapid, 24/7 leak identification and weather-proofing repairs to protect your residential or commercial property.",
    link: "/services/roofing-services",
    icon: Droplets
  },
  {
    title: "Flat Roofing NYC",
    description: "Expert installation and maintenance of durable TPO, EPDM, and modified bitumen hot-tar flat roof systems.",
    link: "/services/roofing-services",
    icon: Home
  },
  {
    title: "Chimney Repair NYC",
    description: "Professional chimney rebuilding, repointing, cap installation, and structural integrity restorations.",
    link: "/services/masonry-work",
    icon: Flame
  },
  {
    title: "Fire Escape Painting NYC",
    description: "Full scrap-and-paint services utilizing rust-preventative coatings to satisfy NYC building code requirements.",
    link: "/services/masonry-work",
    icon: Activity
  },
  {
    title: "Parapet Wall Repair NYC",
    description: "Restoring decaying mortar, brickwork, and coping stones on rooftop safety barriers to pass municipal inspections.",
    link: "/services/masonry-work",
    icon: Shield
  },
  {
    title: "Stucco Repair NYC",
    description: "Expert patching, color matching, and full restoration of traditional Portland cement stucco systems.",
    link: "/services/stucco",
    icon: Sparkles
  },
  {
    title: "EIFS Contractor NYC",
    description: "Certified design and installation of energy-efficient Exterior Insulation and Finish Systems (synthetic stucco).",
    link: "/services/stucco",
    icon: Layers
  },
  {
    title: "DOB Violation Removal NYC",
    description: "End-to-end resolution of Department of Buildings violations, from required repairs to filing Certificates of Correction.",
    link: "/contact",
    icon: FileText
  },
  {
    title: "DOT Violation Removal NYC",
    description: "Fast concrete sidewalk replacement and violation clearance to resolve NYC Department of Transportation notices.",
    link: "/services/concrete-services",
    icon: CheckSquare
  },
  {
    title: "Sidewalk Repair NYC",
    description: "Precision sidewalk pouring and joint repairs ensuring ADA compliance and pedestrian safety.",
    link: "/services/concrete-services",
    icon: Wrench
  },
  {
    title: "Building Safety Assessment NYC",
    description: "Proactive inspections of exterior envelopes and load-bearing structures to ensure compliance and identify hazards.",
    link: "/contact",
    icon: Compass
  },
  {
    title: "Brick Pointing NYC",
    description: "Meticulous tuckpointing and repointing services to replace deteriorated mortar joints and prevent water entry.",
    link: "/services/masonry-work",
    icon: Hammer
  },
  {
    title: "Foundation Repair NYC",
    description: "Structural underpinning, crack injection, and moisture barrier systems to protect building load integrity.",
    link: "/contact",
    icon: AlertTriangle
  },
  {
    title: "Waterproofing Contractor NYC",
    description: "High-grade basement, roof, terrace, and building envelope waterproofing utilizing premium membrane systems.",
    link: "/contact",
    icon: Droplets
  }
];

const ServiceCard = ({ title, description, link, icon: Icon, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative bg-gradient-to-b from-gray-900 to-gray-950 p-6 border border-gray-800 hover:border-red-600/50 transition-all duration-300 flex flex-col justify-between rounded-none overflow-hidden"
    >
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-500" />
      
      {/* Glow Effect */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/10 transition-colors pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 bg-red-600/10 rounded-none flex items-center justify-center border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
            <Icon className="w-5 h-5 text-red-500 group-hover:text-white transition-all duration-300" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-red-500 uppercase">NYC SPECIALIST</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-red-500 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed font-light mb-6">
          {description}
        </p>
      </div>

      <Link href={link} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-red-500 group-hover:text-red-400 transition-colors mt-auto">
        Learn More <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </Link>
    </motion.div>
  );
};

export default function NYCSpecialistServices() {
  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20zM40 40V20L20 40z' fill='%23DC2626'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-red-600" />
            <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-red-500">NYC CODE & CODE COMPLIANCE</span>
            <div className="w-8 h-[1px] bg-red-600" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-6">
            NYC Specialist <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Restoration & Repair</span>
          </h2>
          
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6" />
          
          <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
            From emergency repairs and sidewalk violation removals to historic masonry facade restorations. Mega Contracting NY Group is NYC's fully licensed, code-compliant contracting team serving all five boroughs.
          </p>
        </div>

        {/* Grid of 15 specialist services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialistServices.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              link={service.link}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Quick CTA */}
        <div className="text-center mt-16 md:mt-20">
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm tracking-wider uppercase rounded-none shadow-xl shadow-red-950/20 hover:from-red-700 hover:to-red-800 transition-all duration-300 cursor-pointer"
            >
              Request A Free Site Inspection
            </motion.div>
          </Link>
        </div>

      </div>
    </section>
  );
}
