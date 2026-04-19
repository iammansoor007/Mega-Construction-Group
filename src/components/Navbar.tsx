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
} from "lucide-react";
import logo from "../assets/Mega-Contracting-Logo.png";
import logo2nd from "../assets/Mega-Contracting-Logo.png";
import completeData from "@/data/completeData.json";

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
    }, 150);
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
    }, 150);
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
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex logooo items-center space-x-3 group relative text-stable"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href="/" className="flex items-center space-x-3" onClick={handleLinkClick}>
                {/* Logo Glow Effect */}
                <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="h-20 w-48 rounded-2xl flex items-center justify-center overflow-hidden relative z-10">
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
                  className={`flex items-center space-x-2 px-5 py-2 font-semibold rounded-full relative group transition-all duration-300 ${scrolled
                    ? "text-gray-900 hover:bg-white/60 hover:shadow-md hover:shadow-black/5 border border-transparent hover:border-white/40"
                    : "text-white/90 hover:bg-white/15 hover:text-white border border-transparent hover:border-white/20"
                    }`}
                  style={{ backdropFilter: 'blur(0px)' }}
                  whileHover={{ scale: 1.03, backdropFilter: 'blur(8px)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="flex items-center space-x-2">
                    <Wrench className="h-4 w-4" />
                    <span>Services</span>
                  </span>
                  <motion.span
                    animate={{ rotate: activeMegaMenu === "services" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </motion.span>
                </motion.button>

                <AnimatePresence>
                  {activeMegaMenu === "services" && (
                    <motion.div
                      ref={megaMenuRef}
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      onMouseEnter={handleMegaMenuMouseEnter}
                      onMouseLeave={handleMegaMenuMouseLeave}
                      className="absolute left-1/2 transform -translate-x-1/2 xl:left-0 xl:transform-none top-full mt-2 w-[90vw] max-w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 overflow-hidden"
                      style={{ zIndex: 1000 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {services.map((service) => {
                          const ServiceIcon =
                            serviceIconMap[
                            service.icon as keyof typeof serviceIconMap
                            ] || serviceIconMap.Home;
                          return (
                            <motion.div
                              key={service.title}
                              whileHover={{ y: -3 }}
                              className="flex"
                            >
                              <Link
                                href="#services"
                                onClick={handleLinkClick}
                                onMouseEnter={() => {
                                  setHoveredService(service.title);
                                  setIsHoveringMegaMenu(true);
                                }}
                                onMouseLeave={() => {
                                  setHoveredService(null);
                                }}
                                className="group block p-5 rounded-xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white"
                              >
                                <div className="flex items-start space-x-3 mb-4">
                                  <div
                                    className={`h-10 w-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${hoveredService === service.title
                                      ? "bg-primary"
                                      : "bg-primary/10 group-hover:bg-primary"
                                      }`}
                                  >
                                    <ServiceIcon
                                      isHovered={hoveredService === service.title}
                                    />
                                  </div>
                                  <div>
                                    <h3
                                      className={`font-bold text-base mb-1 transition-colors ${hoveredService === service.title
                                        ? "text-primary"
                                        : "text-gray-900 group-hover:text-primary"
                                        }`}
                                    >
                                      {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-xs">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>

                                <div className="space-y-2 mb-4">
                                  {service.items.map((item) => (
                                    <div
                                      key={item}
                                      className="flex items-center text-sm transition-colors"
                                    >
                                      <ChevronDown
                                        className={`h-3 w-3 mr-2 rotate-90 flex-shrink-0 transition-colors ${hoveredService === service.title
                                          ? "text-primary"
                                          : "text-gray-400 group-hover:text-primary"
                                          }`}
                                      />
                                      <span
                                        className={`truncate transition-colors ${hoveredService === service.title
                                          ? "text-primary"
                                          : "text-gray-700 group-hover:text-primary"
                                          }`}
                                      >
                                        {item}
                                      </span>
                                    </div>
                                  ))}
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                  {service.features.map((feature) => (
                                    <span
                                      key={feature}
                                      className={`px-2 py-1 text-xs rounded-full border transition-colors ${hoveredService === service.title
                                        ? "bg-primary/10 text-primary border-primary/20"
                                        : "bg-primary/10 text-primary border-primary/20 group-hover:bg-primary/20"
                                        }`}
                                    >
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      <div className="pt-6 border-t border-gray-200">
                        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-primary to-primary/80 rounded-xl p-5">
                          <div className="flex items-center space-x-3 mb-4 md:mb-0">
                            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center">
                              <Quote className="h-5 w-5 text-primary" />
                            </div>
                            <div className="text-white">
                              <h4 className="font-bold text-base">
                                {cta.title}
                              </h4>
                              <p className="text-white/80 text-sm">
                                {cta.description}
                              </p>
                            </div>
                          </div>
                          <Link
                            href={cta.buttonLink}
                            onClick={handleLinkClick}
                            className="bg-white text-primary px-5 py-2.5 rounded-lg font-semibold hover:shadow-xl hover:bg-white/90 transition-all duration-300 inline-flex items-center space-x-2"
                          >
                            <FileText className="h-4 w-4" />
                            <span>{cta.buttonText}</span>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                        className={`flex items-center space-x-2 px-5 py-2 font-semibold rounded-full relative group transition-all duration-300 ${scrolled
                          ? "text-gray-900 hover:bg-white/60 hover:shadow-md hover:shadow-black/5 border border-transparent hover:border-white/40"
                          : "text-white/90 hover:bg-white/15 hover:text-white border border-transparent hover:border-white/20"
                          }`}
                      >
                        <LinkIcon />
                        <span>{link.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="hidden lg:flex items-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="#contact"
                onClick={handleLinkClick}
                onMouseEnter={() => setActiveMegaMenu(null)}
                className={`
                  group relative px-6 py-2.5 rounded-full font-bold text-sm
                  transition-all duration-300
                  ${scrolled
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 hover:from-red-700 hover:to-red-600 border border-red-400/30"
                    : "bg-white/15 backdrop-blur-md text-white border border-white/30 hover:bg-white/25 hover:border-white/50 shadow-lg shadow-black/10"
                  }
                `}
              >
                {/* Shimmer overlay */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Get Free Quote</span>
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
                      <div className="h-16 w-26 rounded-xl flex items-center justify-center overflow-hidden">
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
                            <motion.a
                              key={service.title}
                              href="#services"
                              onClick={() => setIsMenuOpen(false)}
                              className="block p-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-gray-50 transition-all duration-300 active:scale-[0.98]"
                              whileTap={{ scale: 0.98 }}
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
                            </motion.a>
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
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 active:scale-[0.98]"
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
                    <a
                      href="#quote"
                      onClick={() => setIsMenuOpen(false)}
                      className="block w-full py-4 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-xl text-center hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
                    >
                      Get Free Quote Now
                    </a>
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
    </>
  );
};

export default Navbar;
