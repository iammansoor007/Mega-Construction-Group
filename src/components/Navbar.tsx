"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  X,
  Menu,
  Quote,
  Star,
  Shield,
  Zap,
  Calendar,
  Building2,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Phone,
  FileText,
  CheckCircle,
  Wrench,
  ClipboardCheck,
  Clock,
  CloudRain,
  Hammer,
  Square,
  Layout,
  AlertTriangle,
  PaintBucket,
} from "lucide-react";
import logo from "../assets/Mega-Contracting-Logo.png";
import logo2nd from "../assets/Mega-Contracting-Logo.png";
import { getServiceImage } from "@/data/serviceImages";
import completeData from "@/data/completeData.json";
import { servicesData } from "@/data/servicesData";

// Icon mapping
const iconMap = {
  Home: () => <Home className="h-4 w-4 transition-colors duration-300" />,
  Briefcase: () => <Briefcase className="h-4 w-4 transition-colors duration-300" />,
  Users: () => <Users className="h-4 w-4 transition-colors duration-300" />,
  MessageSquare: () => <MessageSquare className="h-4 w-4 transition-colors duration-300" />,
  Phone: () => <Phone className="h-4 w-4 transition-colors duration-300" />,
  ClipboardCheck: () => <ClipboardCheck className="h-4 w-4 transition-colors duration-300" />,
  Star: () => <Star className="h-4 w-4 transition-colors duration-300" />,
  Clock: () => <Clock className="h-4 w-4 transition-colors duration-300" />,
  Shield: () => <Shield className="h-4 w-4 transition-colors duration-300" />,
};

const serviceIconMap = {
  Home: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Home
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  Building2: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Building2
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  Wrench: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Wrench
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  CloudRain: ({ isHovered = false }: { isHovered?: boolean }) => (
    <CloudRain
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  Hammer: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Hammer
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  Square: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Square
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  Layout: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Layout
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  AlertTriangle: ({ isHovered = false }: { isHovered?: boolean }) => (
    <AlertTriangle
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  PaintBucket: ({ isHovered = false }: { isHovered?: boolean }) => (
    <PaintBucket
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
  Shield: ({ isHovered = false }: { isHovered?: boolean }) => (
    <Shield
      className={`h-5 w-5 ${isHovered ? "text-white" : "text-primary"} transition-colors duration-300`}
    />
  ),
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isHoveringMegaMenu, setIsHoveringMegaMenu] = useState(false);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { services, companyLinks, stats, cta } = completeData.navbar;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMegaMenu("services");
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!isHoveringMegaMenu) {
        setActiveMegaMenu(null);
      }
    }, 100);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsHoveringMegaMenu(true);
    setActiveMegaMenu("services");
  };

  const handleMegaMenuMouseLeave = () => {
    setIsHoveringMegaMenu(false);
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
      setHoveredService(null);
    }, 100);
  };

  const handleLinkClick = () => {
    setActiveMegaMenu(null);
    setIsMenuOpen(false);
    setHoveredService(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target as Node)
      ) {
        setActiveMegaMenu(null);
        setHoveredService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setActiveMegaMenu(null);
        setHoveredService(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled
          ? "bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-white/20 py-4"
          : "py-3"
          }`}
        style={scrolled ? { background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 100%)' } : {}}
      >
        {/* Glass shimmer line at top */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        )}
        {/* Red accent glow line at bottom on scroll */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        )}
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex logooo items-center space-x-3 group relative text-stable"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="h-16 w-32 sm:h-20 sm:w-48 rounded-2xl flex items-center justify-center overflow-hidden relative z-10 transition-all duration-300">
                  <Image
                    src={logo}
                    alt="Mega Construction NY Group Logo"
                    className="companylogo h-full w-full object-contain p-1 drop-shadow-2xl smooth-gpu"
                    priority
                    width={192}
                    height={80}
                  />
                </div>
              </Link>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-2">
              <div className="relative">
                <motion.button
                  ref={servicesButtonRef}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  className={`flex items-center space-x-2 px-6 py-3 font-bold rounded-none relative group transition-all duration-500 overflow-hidden ${scrolled
                    ? "text-gray-900 hover:text-red-600"
                    : "text-white"
                    }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Premium Hover Background */}
                  <motion.div 
                    className={`absolute inset-0 transition-opacity duration-500 -z-10 ${scrolled ? 'bg-red-50' : 'bg-white/10'}`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Glossy line accent */}
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                  <span className="flex items-center space-x-2 relative z-10 text-[13px] uppercase tracking-[0.15em]">
                    <Wrench className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" />
                    <span>Services</span>
                  </span>
                  <motion.span
                    animate={{ rotate: activeMegaMenu === "services" ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ChevronDown className="h-3.5 w-3.5 ml-1 opacity-60 group-hover:opacity-100 transition-colors" />
                  </motion.span>
                </motion.button>
              </div>

              <div className="flex items-center space-x-1 ml-2">
                {companyLinks.slice(1).map((link) => {
                  const LinkIcon =
                    iconMap[link.icon as keyof typeof iconMap] || iconMap.Home;
                  return (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center"
                    >
                      <Link
                        href={link.href}
                        onClick={handleLinkClick}
                        onMouseEnter={() => setActiveMegaMenu(null)}
                        className={`flex items-center space-x-2 px-5 py-3 font-bold rounded-none relative group transition-all duration-300 ${scrolled
                          ? "text-gray-900 hover:text-red-600"
                          : "text-white/90 hover:text-white"
                          }`}
                      >
                         <motion.div 
                          className={`absolute inset-0 transition-opacity duration-300 -z-10 rounded-xl ${scrolled ? 'bg-red-50' : 'bg-white/10'}`}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        />
                        <span className="relative z-10 flex items-center space-x-2 text-[13px] uppercase tracking-[0.15em]">
                          <LinkIcon />
                          <span>{link.label}</span>
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="hidden lg:flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                onClick={handleLinkClick}
                onMouseEnter={() => setActiveMegaMenu(null)}
                className={`
                  group relative px-9 py-4 rounded-none font-bold text-[12px] uppercase tracking-[0.2em]
                  transition-all duration-500 ease-out overflow-hidden
                  ${scrolled
                    ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-[0_15px_30px_-5px_rgba(220,38,38,0.4)]"
                    : "bg-white text-red-600 shadow-2xl"
                  }
                `}
              >
                {/* Shine Animation Effect */}
                <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)]">
                  <span className="relative h-full w-8 bg-white/20 blur-xl animate-shine-slow" />
                </span>

                {/* Internal Glow for Non-Scrolled */}
                {!scrolled && (
                  <div className="absolute inset-0 bg-red-500/5 group-hover:bg-red-500/10 transition-colors duration-500" />
                )}

                {/* Animated Inner Shine Border */}
                <span className="absolute inset-0 rounded-none border border-white/20 group-hover:border-white/40 transition-colors duration-500" />
                
                <span className="relative z-10 flex items-center justify-center space-x-2.5">
                  <Calendar className={`h-4 w-4 transition-transform duration-500 group-hover:scale-110 ${scrolled ? "" : "text-red-600"}`} />
                  <span className="leading-none">{cta.buttonText}</span>
                </span>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-4 lg:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2.5 rounded-xl transition-all duration-300 border ${scrolled
                  ? "bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30"
                  : "bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20"
                  }`}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <Menu className={`h-6 w-6 ${scrolled ? "text-gray-900" : "text-white"}`} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {activeMegaMenu === "services" && (
          <motion.div
            ref={megaMenuRef}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.99 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
            className="fixed inset-x-0 mx-auto top-[95px] w-[95vw] max-w-7xl bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-gray-100 p-12 hidden lg:block overflow-hidden"
            style={{ zIndex: 1000 }}
          >
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Left Side: Services Navigation */}
              <div className="w-full lg:w-1/4 space-y-2">
                <div className="mb-8">
                  <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-red-600 mb-2">Core Specialization</h2>
                  <p className="text-2xl font-bold text-gray-900 leading-tight">Roofing & <br/>Masonry Masters</p>
                </div>
                
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={`/services/${service.id}`}
                      onMouseEnter={() => setHoveredService(service.title)}
                      onClick={handleLinkClick}
                      className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                        hoveredService === service.title ? "bg-gray-900 text-white shadow-xl" : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-bold text-sm tracking-wide">{service.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${hoveredService === service.title ? "-rotate-90" : "opacity-0"}`} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Side: Dynamic Content */}
              <div className="flex-1 min-h-[400px] border-l border-gray-100 pl-16">
                <AnimatePresence mode="popLayout" initial={false}>
                  {(() => {
                    const navbarService = services.find(s => s.title === (hoveredService || services[0].title));
                    if (!navbarService) return null;
                    
                    const fullService = servicesData.find(s => s.id === navbarService.id);
                    if (!fullService) return null;
                    
                    return (
                      <motion.div
                        key={fullService.id}
                        initial={{ opacity: 0, filter: "blur(4px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(4px)" }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="grid grid-cols-2 gap-x-12 gap-y-10"
                      >
                        {/* Detailed Sub-services Grid */}
                        <div className="col-span-1 space-y-8">
                          <div>
                            <Link 
                              href={`/services/${fullService.id}`}
                              onClick={handleLinkClick}
                              className="group/title inline-block"
                            >
                              <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover/title:text-red-600 transition-colors flex items-center gap-2">
                                {fullService.title}
                                <ChevronDown className="h-4 w-4 -rotate-90 opacity-0 group-hover/title:opacity-100 group-hover/title:translate-x-1 transition-all" />
                              </h4>
                            </Link>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              {fullService.description}
                            </p>
                          </div>

                          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {fullService.subcategories.map((sub) => (
                              <Link
                                key={sub.id}
                                href={`/services/${fullService.id}/${sub.id}`}
                                onClick={handleLinkClick}
                                className="group/item flex items-center p-2.5 rounded-xl hover:bg-red-50 transition-colors"
                              >
                                <div className="h-1.5 w-1.5 rounded-full bg-red-600 mr-3 opacity-30 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all" />
                                <span className="text-[13px] font-semibold text-gray-700 group-hover/item:text-red-700">{sub.title}</span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <Link 
                          href={`/services/${fullService.id}`}
                          onClick={handleLinkClick}
                          className="col-span-1 self-start block group/img-link"
                        >
                          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group/img shadow-2xl transition-all duration-500 group-hover/img-link:shadow-red-500/20 group-hover/img-link:scale-[1.01]">
                            <Image
                              src={getServiceImage(fullService.id)}
                              alt={fullService.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/img-link:opacity-100 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-600/20 backdrop-blur-md border border-red-500/30 text-white text-[10px] font-black uppercase tracking-widest mb-4">
                                {fullService.tag} Excellence
                              </div>
                              <h4 className="text-2xl font-bold leading-tight group-hover/img-link:text-red-400 transition-colors">
                                Professional {fullService.title.split(' ')[0]} <br/>
                                Solutions in NY
                              </h4>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })()}
                </AnimatePresence>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm text-gray-500 font-medium">
                Looking for something specific? <Link href="/#contact" className="text-red-600 font-bold hover:underline">Speak with an expert</Link>
              </p>
              <Link
                href={cta.buttonLink}
                onClick={handleLinkClick}
                className="bg-gray-900 text-white px-10 py-4 rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-red-600 transition-all duration-500 shadow-xl"
              >
                {cta.buttonText}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 lg:hidden shadow-2xl border-l border-gray-200 overflow-hidden"
            >
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-200 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="h-16 w-26 rounded-none flex items-center justify-center overflow-hidden">
                        <Image
                          src={logo2nd}
                          alt="Company Logo"
                          className="h-full w-full object-contain"
                          width={104}
                          height={64}
                        />
                      </div>
                    </div>
                    <motion.button
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      whileHover={{ rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="h-5 w-5 text-gray-900" />
                    </motion.button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Our Services
                      </h3>
                      <div className="space-y-3">
                        {services.map((service) => {
                          const ServiceIcon =
                            serviceIconMap[
                            service.icon as keyof typeof serviceIconMap
                            ] || serviceIconMap.Home;
                          return (
                            <Link
                              key={service.title}
                              href={`/services/${service.id}`}
                              onClick={() => setIsMenuOpen(false)}
                              className="block p-4 rounded-none border border-gray-200 hover:border-primary/30 hover:bg-gray-50 transition-all duration-300 active:scale-[0.98]"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                  <ServiceIcon isHovered={false} />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 text-base">
                                    {service.title}
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Quick Links
                      </h3>
                      <div className="space-y-2">
                        {companyLinks.map((link) => {
                          const LinkIcon =
                            iconMap[link.icon as keyof typeof iconMap] ||
                            iconMap.Home;
                          return (
                            <motion.a
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center space-x-3 p-3 rounded-none hover:bg-gray-50 transition-all duration-300 active:scale-[0.98]"
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="text-gray-700">
                                <LinkIcon />
                              </div>
                              <span className="font-semibold text-gray-900 text-base">
                                {link.label}
                              </span>
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-200 bg-gray-50 flex-shrink-0">
                  <div className="space-y-4">
                    <motion.a
                      href="#quote"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-5 bg-red-600 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-none text-center shadow-lg shadow-red-600/20 hover:bg-red-700 transition-all duration-300"
                    >
                      Get Free Quote Now
                    </motion.a>
                    <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                      <Star className="h-3 w-3 text-primary" />
                      <span>Premium Service Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hidden Image Preloader for instant Mega Menu transitions */}
      <div className="hidden lg:block absolute -z-[999] opacity-0 pointer-events-none size-0 overflow-hidden" aria-hidden="true">
        {services.map((s) => (
          <Image
            key={`preload-${s.id}`}
            src={getServiceImage(s.id)}
            alt=""
            width={10}
            height={10}
            loading="eager"
          />
        ))}
      </div>
    </>
  );
};

export default Navbar;
