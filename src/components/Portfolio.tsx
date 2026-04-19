"use client";

import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
  useInView
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMousePosition } from "../hooks/useMousePosition";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import completeData from "@/data/completeData.json";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const imageMap = {
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5
};

const Icons = {
  HardHat: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14h16v4H4v-4z" />
      <path d="M6 14v-3a6 6 0 0112 0v3" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  ),
  Location: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
  Arrow: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Star: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
};

const MarqueeItem = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { springX: globalX, springY: globalY } = useMousePosition();

  // Optimized tilt effect using global mouse values to avoid getBoundingClientRect layout thrashes
  const rotateX = useTransform(globalY, [0, 1000], [4, -4]); 
  const rotateY = useTransform(globalX, [0, 1000], [-4, 4]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000,
        scale: isHovered ? 1.02 : 1,
      }}
      className="relative w-[200px] sm:w-[240px] md:w-[280px] h-[280px] sm:h-[320px] md:h-[360px] flex-shrink-0 cursor-pointer smooth-gpu"
    >
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border-2 border-gray-200">
        <Image
          src={imageMap[project.image as keyof typeof imageMap]}
          alt={project.title}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Construction Frame Border */}
        {isHovered && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.rect
              x="3"
              y="3"
              width="calc(100% - 6px)"
              height="calc(100% - 6px)"
              fill="none"
              stroke="#DC2626"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            {/* Corner accents */}
            <motion.path
              d="M 3 15 L 3 3 L 15 3"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
            <motion.path
              d="M 21 9 L 21 21 L 9 21"
              fill="none"
              stroke="#DC2626"
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            />
          </svg>
        )}

        <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-end">
          {/* Category Badge */}
          <span className="inline-flex items-center gap-1.5 bg-red-600 px-2.5 py-1 rounded-md w-fit mb-2 shadow-lg">
            <Icons.HardHat />
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider text-white uppercase">
              {project.category}
            </span>
          </span>

          <h3 className="text-base sm:text-lg font-black text-white mb-1 leading-tight">
            {project.title}
          </h3>

          <div className="flex items-center gap-2 text-white/80 text-[10px] sm:text-xs mb-1">
            <span className="flex items-center gap-1">
              <Icons.Location />
              <span className="truncate max-w-[80px] sm:max-w-none">{project.location}</span>
            </span>
            <span className="w-1 h-1 rounded-full bg-red-600" />
            <span>{project.year}</span>
          </div>

          <AnimatePresence mode="wait">
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="text-white/90 text-[9px] sm:text-[10px] leading-relaxed mb-2 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="hidden xs:block">
                    <span className="text-white/50 text-[7px] sm:text-[8px] uppercase tracking-wider">Scope</span>
                    <p className="text-white text-[9px] sm:text-[10px] font-medium truncate max-w-[80px] sm:max-w-none">
                      {project.scope}
                    </p>
                  </div>
                  <motion.button
                    className="px-3 py-1 bg-white text-red-600 rounded-md text-[9px] sm:text-[10px] font-bold flex items-center gap-1 hover:bg-red-50 transition-colors shadow-md"
                    whileHover={{ x: 3 }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    View Project
                    <Icons.Arrow />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Project Number */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-md">
          <span className="text-white text-xs font-black">{project.number}</span>
        </div>
      </div>
    </motion.div>
  );
};

const InfiniteMarquee = ({ projects, direction = "left" }: { projects: any[]; direction?: "left" | "right" }) => {
  // Quadruple the items — animation moves -50% (2 sets), always wider than the viewport
  const quadrupled = useMemo(() => [
    ...projects, ...projects, ...projects, ...projects
  ], [projects]);

  return (
    <div className="marquee-wrapper py-3 sm:py-4 md:py-6">
      <div className={`marquee-track gap-3 md:gap-4 ${direction === "left" ? "marquee-track--left" : "marquee-track--right"}`}>
        {quadrupled.map((project, index) => (
          <MarqueeItem
            key={`${project.number}-${index}`}
            project={project}
          />
        ))}
      </div>
    </div>
  );
};

const PremiumLightbox = ({ image, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center cursor-pointer p-3 sm:p-4 md:p-6"
      onClick={onClose}
    >
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="absolute top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 z-50 bg-red-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-bold hover:bg-red-700 transition-all shadow-lg"
        onClick={onClose}
      >
        Close
      </motion.button>

      <motion.div
        className="relative w-full max-w-4xl h-[80vh]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
      >
        <Image
          src={image}
          alt="Project preview"
          className="object-contain rounded-lg shadow-2xl"
          fill
        />
      </motion.div>
    </motion.div>
  );
};

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001
  });

  const headerParallax = useTransform(smoothProgress, [0, 1], [0, -30]);

  const { section, projects, button } = completeData.portfolio;

  const row1 = projects.slice(0, 3);
  const row2 = projects.slice(2, 5);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 nitro-iso"
    >
      {/* Construction Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23DC2626' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-red-50/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-red-50/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div style={{ y: headerParallax }}>
          <SectionHeader
            badge={section.badge}
            headline={section.headline}
          />
        </motion.div>

        {/* Marquee Rows */}
        <div className="space-y-1 sm:space-y-2 md:space-y-0">
          <InfiniteMarquee projects={row1} direction="left" />
          <InfiniteMarquee projects={row2} direction="right" />
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-8 sm:mt-10 md:mt-12"
        >
          <button
            onClick={() => setLightbox(portfolio1)}
            className="group px-6 py-3 bg-red-600 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
          >
            {button.text}
            <Icons.Arrow />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <PremiumLightbox
            image={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="relative block w-full h-8 sm:h-10 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#portfolioWaveGradient)"
            d="M0,24L60,26.7C120,29,240,34,360,34C480,34,600,29,720,26.7C840,24,960,24,1080,26.7C1200,29,1320,34,1380,36.7L1440,39L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"
          />
          <defs>
            <linearGradient id="portfolioWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.03" />
              <stop offset="50%" stopColor="#DC2626" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.03" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;