import { useRef, useEffect, useState, lazy, Suspense, memo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import serviceDetail from "../assets/megaprintedimage2.png";
import vectoroverlay from "../assets/Frame - Copy.png";

import {
  Wrench,
  Home,
  Building2,
  Sun,
  CloudRain,
  Shield,
  TreePine,
  Droplets,
  Hammer,
  Square,
  Award,
  ArrowRight,
  Layout,
  Building,
  CheckCircle,
  Star,
  Truck,
  Ruler,
  PaintBucket,
  HardHat,
  Landmark,
  AlertTriangle,
} from "lucide-react";
import completeData from "@/data/completeData.json";

gsap.registerPlugin(ScrollTrigger);

// Lazy load images only when they come into view
const LazyImage = memo(({ src, alt, className, onError }: { src: any; alt: string; className: string; onError: () => void }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "1000px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`relative w-full h-full ${className}`}>
      {inView && (
        <>
          {!loaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
          )}
          <img
            src={typeof src === 'string' ? src : src.src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"
              }`}
            onLoad={() => setLoaded(true)}
            onError={onError}
            loading="lazy"
            decoding="async"
          />
        </>
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// Image paths mapping - using dynamic imports for code splitting
const serviceImagePaths: Record<string, () => Promise<{ default: any }>> = {
  "general-contracting": () => import("@/assets/general-contracting.jpg"),
  "kitchen-bath": () => import("@/assets/kitchen-bath.jpg"),
  "home-renovation": () => import("@/assets/home-renovation.jpg"),
  "commercial-construction": () => import("@/assets/commercial-construction.jpg"),
  "excavation": () => import("@/assets/excavation.jpg"),
  "concrete-masonry": () => import("@/assets/concrete-masonry.jpg"),
  "roofing": () => import("@/assets/roofing.jpg"),
  "historic-restoration": () => import("@/assets/historic-restoration.jpg"),
  "emergency-repairs": () => import("@/assets/emergency-repairs.jpg"),
  "custom-home": () => import("@/assets/custom-home.jpg"),
};

// Optimized Counter with reduced re-renders
const Counter = memo(({ value, suffix = "" }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const animRef = useRef<number>();

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const duration = 1500; // Reduced duration for faster counting

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 2); // Simpler easing
      const current = Math.floor(value * eased);
      setDisplay(current);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      if (animRef.current) {
        cancelAnimationFrame(animRef.current);
      }
    };
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
});

Counter.displayName = "Counter";

const iconMap: Record<string, any> = {
  Wrench, Home, Building2, Sun, CloudRain, Shield, TreePine,
  Droplets, Hammer, Square, Layout, Building, Truck, Ruler,
  PaintBucket, HardHat, Landmark, AlertTriangle,
};

// Memoized Compact Service Card
const CompactServiceCard = memo(({ service }: { service: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ServiceIcon = iconMap[service.icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-300" />
      <div className="relative bg-white rounded-2xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 overflow-hidden shadow-md hover:shadow-xl p-6">
        <div className="relative z-10 flex items-start gap-4">
          <div className="p-2 rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
            <ServiceIcon className="w-6 h-6 text-red-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {service.title}
              </h4>
              <span className="text-xs font-mono text-red-600 bg-red-50 px-2 py-1 rounded-full">
                {service.number}
              </span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
              {service.description}
            </p>
            <motion.div
              className="flex items-center gap-2 mt-4"
              animate={isHovered ? { x: 5 } : { x: 0 }}
            >
              <span className="text-xs font-semibold tracking-wider uppercase text-red-600">
                Learn more
              </span>
              <ArrowRight className="w-3 h-3 text-red-600" />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

CompactServiceCard.displayName = "CompactServiceCard";

// Optimized Service Card with lazy image loading
const ServiceCard = memo(({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState<any>(null);
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: "200px" });
  const ServiceIcon = iconMap[service.icon] || Wrench;

  // Load image only when card comes into view
  useEffect(() => {
    if (!inView || !service.image || imageError) return;

    const imageKey = service.image;
    const imageLoader = serviceImagePaths[imageKey];

    if (imageLoader) {
      imageLoader().then(module => {
        setImageSrc(module.default);
      }).catch(() => {
        setImageError(true);
      });
    }
  }, [inView, service.image, imageError]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 100, damping: 10 });
  const springY = useSpring(y, { stiffness: 100, damping: 10 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = (cardRef.current as HTMLElement).getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / rect.width - 0.5) * 0.3;
    const yPct = (mouseY / rect.height - 0.5) * 0.3;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur group-hover:blur-md" />

      <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 group-hover:border-red-300 transition-all duration-300 shadow-md hover:shadow-lg">
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-red-50 to-gray-100">
          {inView && imageSrc && !imageError ? (
            <LazyImage
              src={imageSrc}
              alt={service.title}
              className="w-full h-full"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {!inView ? (
                <div className="w-full h-full bg-gray-100 animate-pulse" />
              ) : (
                <ServiceIcon className="w-16 h-16 text-red-300" />
              )}
            </div>
          )}

          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-red-600 border border-red-200 shadow-md">
              {service.tag}
            </div>
          </div>

          <div className="absolute bottom-4 right-4 z-10">
            <div className="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shadow-lg">
              {service.number}
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1 rounded-lg bg-red-50">
              <ServiceIcon className="w-4 h-4 text-red-600" />
            </div>
            <h3 className="text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-1">
              {service.title}
            </h3>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
            {service.description}
          </p>

          <div className="space-y-1.5 mb-4">
            {service.features?.slice(0, 3).map((feature: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle className="w-3 h-3 text-red-600 flex-shrink-0" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ x: 3 }}
            className="w-full py-2 rounded-lg bg-red-50 hover:bg-red-600 text-red-600 hover:text-white border border-red-200 hover:border-red-600 transition-all duration-200 text-sm font-semibold flex items-center justify-center gap-2"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

// Main Services Component
const Services = () => {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    restDelta: 0.001,
  });

  const clipPathLeftToRight = useTransform(
    smoothProgress,
    [0, 0.15],
    ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
  );

  const imageScale = useTransform(smoothProgress, [0, 0.15], [1.1, 1]);

  const { badge, headline, description, stats, services, cta } = completeData.services;
  const featuredService = services[0];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current || !isClient) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".split-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);



  return (
    <section
      ref={sectionRef}
      className="relative bg-white overflow-visible py-16 md:py-24"
    >
      {/* Simplified background - reduced DOM elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(220,38,38,0.05),transparent_60%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-red-50 px-4 py-2 rounded-full border border-red-200 mb-5">
                <HardHat className="w-4 h-4 text-red-600" />
                <span className="text-red-600 uppercase tracking-wider text-xs font-semibold">
                  {badge}
                </span>
              </div>

              <div className="overflow-hidden mb-5">
                <h2 className="split-text text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15]">
                  {headline.prefix}
                  <br />
                  <span className="text-red-600">{headline.highlight}</span>
                  <br />
                  <span className="text-gray-900">{headline.suffix}</span>
                </h2>
              </div>

              <div className="space-y-3 mb-6">
                {description.slice(0, 1).map((text: string, idx: number) => (
                  <p
                    key={idx}
                    className="text-gray-600 text-base leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 pt-4 border-t border-gray-200">
                {stats.map((stat: any) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <CompactServiceCard service={featuredService} />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="relative rounded-3xl overflow-visible">
                <motion.div
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                  style={{ clipPath: clipPathLeftToRight }}
                >
                  <motion.img
                    src={serviceDetail.src}
                    alt="Mega Contracting NY Group"
                    className="w-full h-full object-cover"
                    style={{ scale: imageScale }}
                    loading="eager"
                    decoding="async"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="absolute bottom-0 left-0 z-10"
                  >
                    <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-3 md:px-6 md:py-4 rounded-tr-2xl shadow-xl">
                      <div className="flex items-end gap-2">
                        <div className="text-3xl md:text-4xl font-black leading-none">20+</div>
                        <div className="text-left">
                          <div className="text-xs font-semibold uppercase tracking-wider opacity-90">
                            Years of
                          </div>
                          <div className="text-base md:text-lg font-bold leading-tight">
                            Excellence
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ x: -100, y: -100, opacity: 0, rotate: -20 }}
                  animate={{ x: 0, y: 0, opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.6, duration: 0.8, type: "spring", stiffness: 40, damping: 8 }}
                  className="absolute z-[100] pointer-events-none"
                  style={{ top: "-10%", left: "-10%" }}
                >
                  <img
                    src={vectoroverlay.src}
                    alt="Vector Overlay"
                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                    style={{ filter: "drop-shadow(0 15px 20px rgba(0,0,0,0.2))" }}
                    loading="eager"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-0.5 bg-gradient-to-r from-red-600 to-red-400" />
              <span className="text-sm font-semibold tracking-wider uppercase text-red-600">
                Our Services
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(1).map((service: any, index: number) => (
              <ServiceCard key={service.number} service={service} index={index} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative bg-gradient-to-r from-red-50 via-white to-gray-50 rounded-2xl p-10 border border-red-200 shadow-md">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {cta.title}
            </h3>
            <p className="text-gray-600 text-base max-w-2xl mx-auto mb-6">
              {cta.description}
            </p>
            <motion.a
              href={cta.buttonLink}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:bg-red-700 transition-all duration-200"
            >
              <span>{cta.buttonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;