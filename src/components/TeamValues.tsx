import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ceo from "../assets/megaownerprinted.png";
import vectoroverlay from "../assets/Frame.png";
import completeData from "@/data/completeData.json";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const Icons = {
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 8h4v12H4V8z" stroke="currentColor" strokeWidth="2" />
      <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 8h4v2c.6-.8 1.5-2 3-2 2.5 0 4 1.5 4 4v8h-4v-6c0-1.5-.5-2-2-2s-2 .5-2 2v6h-4V8z" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M22 7l-10 7L2 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  Quote: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 2v6M18 13v6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 17v-6M14 17v-6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  HardHat: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 14h16v4H4v-4z" />
      <path d="M6 14v-3a6 6 0 0112 0v3" />
      <circle cx="12" cy="8" r="2" />
    </svg>
  ),
  Award: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="6" />
      <path d="M8 14l-2 6 6-2 6 2-2-6" />
    </svg>
  ),
  Star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  ),
};

const CeoPortrait = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const { ceo: ceoData } = completeData.leadership;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Construction frame effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 via-red-500/10 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />

        <div className="relative rounded-lg overflow-visible shadow-2xl">
          {/* Image Container */}
          <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
            <Image
              src={ceo}
              alt={ceoData.alt}
              className="w-full h-[500px] md:h-[600px] object-cover"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="absolute top-6 left-6 z-10"
            >
              <div className="bg-red-600 text-white px-5 py-2.5 rounded-lg shadow-xl flex items-center gap-2">
                <Icons.HardHat />
                <span className="text-sm font-bold tracking-wide">
                  {ceoData.badges.top}
                </span>
              </div>
            </motion.div>

            {/* Bottom Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="absolute bottom-6 left-6 right-6 z-10"
            >
              <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-lg shadow-xl border border-red-200">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-red-600 border-2 border-white flex items-center justify-center">
                        <Icons.Star />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Certifications</p>
                    <p className="text-sm font-bold text-red-600">{ceoData.badges.bottom}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Floating Vector Overlay - Top Right Corner */}
          <motion.div
            initial={{ x: 80, y: -80, opacity: 0, rotate: -15 }}
            animate={inView ? { x: 0, y: 0, opacity: 1, rotate: 0 } : {}}
            transition={{
              delay: 0.5,
              duration: 0.9,
              type: "spring",
              stiffness: 45,
              damping: 10
            }}
            whileHover={{
              scale: 1.08,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            className="absolute z-[100] pointer-events-none"
            style={{
              top: "-6%",
              right: "-8%",
            }}
          >
            <Image
              src={vectoroverlay}
              alt="Mega Contracting"
              className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain pointer-events-auto"
              style={{
                filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.35))',
              }}
            />
            {/* Glow effect behind the vector */}
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl -z-10 scale-150" />
          </motion.div>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute -bottom-3 -left-3 w-16 h-16 border-l-4 border-b-4 border-red-600 rounded-bl-2xl pointer-events-none" />
        <div className="absolute -top-3 -right-3 w-16 h-16 border-t-4 border-r-4 border-red-600 rounded-tr-2xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ label, value }: { label: string; value: string }) => {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white p-4 rounded-xl border-l-4 border-red-600 shadow-md"
    >
      <p className="text-2xl font-black text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">{label}</p>
    </motion.div>
  );
};

const Leadership = () => {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const { section, ceo } = completeData.leadership;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !isClient) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.leadership-reveal',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);



  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-50 py-16 md:py-20 lg:py-24 overflow-visible"
    >
      {/* Construction Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='none' stroke='%23DC2626' stroke-width='2'/%3E%3C/svg%3E")`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Red accent background elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-50/80 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-red-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        {/* Section Header */}
        <SectionHeader
          badge={section.badge}
          headline={section.headline}
          description={section.description}
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Portrait */}
          <div className="leadership-reveal">
            <CeoPortrait />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 leadership-reveal">
            {/* Name and Title */}
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-gray-900">
                {ceo.name}
              </h3>
              <p className="text-red-600 font-bold text-lg mt-1">
                {ceo.title}
              </p>
            </div>

            {/* Quote Section */}
            <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-200">

              {ceo.quotes.map((quote, idx) => (
                <p key={idx} className="text-gray-700 text-base leading-relaxed italic">
                  "{quote}"
                </p>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4">
              {ceo.description.map((desc, idx) => (
                <p key={idx} className="text-gray-600 text-base leading-relaxed">
                  {desc}
                </p>
              ))}
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <AchievementCard label="Experience" value="20+ Years" />
              <AchievementCard label="Projects" value="$30M+" />
              <AchievementCard label="Clients" value="1000+" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          className="relative block w-full h-10 md:h-12"
          preserveAspectRatio="none"
        >
          <path
            fill="url(#leadershipGradient)"
            d="M0,24L60,26.7C120,29,240,34,360,34C480,34,600,29,720,26.7C840,24,960,24,1080,26.7C1200,29,1320,34,1380,36.7L1440,39L1440,60L1380,60C1320,60,1200,60,1080,60C960,60,840,60,720,60C600,60,480,60,360,60C240,60,120,60,60,60L0,60Z"
          />
          <defs>
            <linearGradient id="leadershipGradient" x1="0%" y1="0%" x2="100%" y2="0%">
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

export default Leadership;