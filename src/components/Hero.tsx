"use client";

import { motion, useTransform, useMotionValue } from "framer-motion";
import { useRef, memo, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import heroBg from '../assets/megaprintedimage5.png';
import { FiArrowRight, FiChevronDown, FiStar, FiThumbsUp } from "react-icons/fi";
import { RiBuildingLine, RiShieldCheckLine } from "react-icons/ri";
import completeData from "@/data/completeData.json";
import { useMousePosition } from "../hooks/useMousePosition";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { springX, springY } = useMousePosition();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Diamond-Grade: Decode the heavy 3.5MB background before complex particles start
  useEffect(() => {
    const img = new window.Image();
    img.src = typeof heroBg === 'string' ? heroBg : heroBg.src;
    img.decode().then(() => {
      setImageLoaded(true);
    }).catch(() => {
      setImageLoaded(true); // Fallback
    });
  }, []);

  // Normalize mouse values relative to center for parallax
  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;

  const mouseRelX = useTransform(springX, (val) => (val - centerX) * 0.012);
  const mouseRelY = useTransform(springY, (val) => (val - centerY) * 0.012);

  // Parallax transforms using shared spring values
  const x03 = useTransform(mouseRelX, (val) => val * 0.3);
  const y03 = useTransform(mouseRelY, (val) => val * 0.3);
  const xNeg02 = useTransform(mouseRelX, (val) => val * -0.2);
  const yNeg02 = useTransform(mouseRelY, (val) => val * -0.2);
  const x04 = useTransform(mouseRelX, (val) => val * 0.4);
  const y04 = useTransform(mouseRelY, (val) => val * 0.4);
  const x025 = useTransform(mouseRelX, (val) => val * 0.25);
  const y025 = useTransform(mouseRelY, (val) => val * 0.25);
  const xNeg03 = useTransform(mouseRelX, (val) => val * -0.3);
  const yNeg03 = useTransform(mouseRelY, (val) => val * -0.3);

  const { badge, headlines, description, buttons, stats } = completeData.hero;



  const iconComponents = {
    FiArrowRight: FiArrowRight,
    RiBuildingLine: RiBuildingLine,
    FiStar: FiStar,
    FiThumbsUp: FiThumbsUp,
    RiShieldCheckLine: RiShieldCheckLine
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end overflow-hidden isolate md:items-center md:justify-center blueprint-grid"
    >
      <div className="tech-scanner" />
      {/* Background Image Container with GPU Boost */}
      <div className={`absolute inset-0 -z-10 transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Image
          src={heroBg}
          alt="Mega Construction NY Group - Construction Services"
          className="w-full h-full object-cover smooth-gpu"
          priority
          onLoad={() => setImageLoaded(true)}
          fill
        />
      </div>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-black/30 z-0" />

      {/* Decorative Animated Elements - Logic Gate: only animate once image is ready to avoid main-thread congestion */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {imageLoaded && (
          <>
            <motion.div
              className="absolute top-[20%] right-[15%] w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                x: x03,
                y: y03,
              }}
            />
            <motion.div
              className="absolute bottom-[10%] left-[10%] w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.03, 0.07, 0.03],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                x: xNeg02,
                y: yNeg02,
              }}
            />
          </>
        )}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="modernGrid"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernGrid)" />
        </svg>
      </div>

      {/* Decorative Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          className="absolute top-[20%] right-[12%] w-40 h-40 border border-white/10 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
          style={{
            x: x04,
            y: y04,
          }}
        />
        <motion.div
          className="absolute top-[12%] right-[5%] w-72 h-72 border border-white/5 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 1.0 }}
          style={{
            x: x025,
            y: y025,
          }}
        />
        <motion.div
          className="absolute bottom-[25%] left-[8%] w-56 h-56 border border-white/5 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, delay: 1.2 }}
          style={{
            x: xNeg03,
            y: yNeg03,
          }}
        />
      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 bg-white/20 rounded-full blur-[1px]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.35, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="section-padding w-full relative z-20 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto lg:mx-0 lg:max-w-6xl">
          <motion.div
            className="flex items-center gap-2 mb-2 mt-8 md:-mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="w-8 h-px bg-white/60 md:w-16" />
            <span className="font-body text-white/90 text-xs md:text-sm uppercase tracking-[0.3em] font-light">
              {badge}
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl font-bold text-white mb-2 leading-[1.1] tracking-tight drop-shadow-lg">
            {headlines.map((line, i) => (
              <motion.span
                key={i}
                className="block overflow-hidden"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + 0.2 * i,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="text-m sm:text-l md:text-xl text-white/90 max-w-2xl mb-6 leading-relaxed font-light drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
          >
            {buttons.map((button, idx) => {
              const Icon = iconComponents[button.icon as keyof typeof iconComponents];
              return button.primary ? (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex"
                >
                  <Link
                    href={button.href}
                    className="group bg-primary text-white px-8 py-4 font-medium text-lg inline-flex items-center justify-center gap-3 rounded-md hover:bg-primary/90 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  >
                    {button.text}
                    {Icon && <Icon className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />}
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex"
                >
                  <Link
                    href={button.href}
                    className="group backdrop-blur-sm bg-white/10 border border-white/30 text-white px-8 py-4 font-medium text-lg inline-flex items-center justify-center gap-3 rounded-md hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                  >
                    {button.text}
                    {Icon && <Icon className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 md:gap-14 lg:gap-20 mt-8 md:mt-12 pt-6 border-t border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            {stats.map((stat, idx) => {
              const StatIcon = iconComponents[stat.icon as keyof typeof iconComponents];
              return (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-4"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {StatIcon && <StatIcon className="w-7 h-7 md:w-8 md:h-8 text-primary drop-shadow-md" />}
                  <div>
                    <span className="block font-heading text-white text-2xl md:text-3xl lg:text-3xl font-bold leading-tight drop-shadow-md">
                      {stat.value}
                    </span>
                    <span className="font-body text-white/80 text-xs uppercase tracking-wider">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute hidden sm:flex bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-3 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-light">
          Discover
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FiChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default memo(Hero);