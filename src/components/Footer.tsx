"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence
} from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import completeData from "@/data/completeData.json";

gsap.registerPlugin(ScrollTrigger);

const Icons = {
  Linkedin: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Twitter: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.8 9 5-.2-2.2.6-4.5 2.5-6 2.5-2 6-1.5 7.5 1 1.1-.2 2.2-.6 3-1 0 0-.5 1.7-2 3 1.1-.1 2-.5 3-1 0 0-.5 1.6-2 3z" />
    </svg>
  ),
  Instagram: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  Mail: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Phone: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Location: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  Sparkle: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
    </svg>
  ),
  Infinity: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13.833 9.167C14.5 8.5 15.3 8 16.5 8C18.5 8 20 9.5 20 12C20 14.5 18.5 16 16.5 16C14.5 16 13 14.5 13 12C13 9.5 11.5 8 9.5 8C7.5 8 6 9.5 6 12C6 14.5 7.5 16 9.5 16C10.7 16 11.5 15.5 12.167 14.833" />
    </svg>
  ),
};

const iconMap = {
  Linkedin: Icons.Linkedin,
  Twitter: Icons.Twitter,
  Instagram: Icons.Instagram
};

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative group">
        <div className={`
          relative flex items-center bg-[#111] border-2 transition-all duration-300
          ${isFocused ? 'border-primary shadow-[0_0_20px_rgba(195,5,5,0.1)]' : 'border-white/10'}
        `}>
          <input
            type="email"
            placeholder="Structural Insights Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="w-full bg-transparent px-3 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder:text-white/30 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="px-4 sm:px-6 py-3 sm:py-4 bg-primary text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300"
          >
            Join
          </button>
        </div>
      </form>
      <AnimatePresence>
        {isSubscribed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -bottom-8 left-0 text-[10px] text-primary font-bold uppercase tracking-tighter"
          >
            Transmission Successful
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  const sectionRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const { company, quickLinks, bottom, services, contact, certifications } = completeData.footer;

  useEffect(() => {
    setIsClient(true);
  }, []);



  return (
    <footer ref={sectionRef} className="relative bg-[#050505] text-white overflow-hidden border-t-4 border-primary">
      {/* Structural Blueprint Grid (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none blueprint-grid" />
      
      {/* Dynamic Quantum Blobs (Visual Depth) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-primary/40 blur-[100px] rounded-full"
        />
      </div>

      {/* Massive Background Text */}
      <div className="absolute -bottom-10 md:-bottom-20 -left-10 md:-left-20 text-[15vw] md:text-[20vw] font-bold text-white/[0.02] select-none pointer-events-none leading-none">
        MEGA
      </div>

      <div className="max-w-7xl mx-auto px-4 xs:px-5 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xs:gap-10 md:gap-12 py-8 xs:py-12 md:py-24">
          
          {/* Column 1: Identity */}
          <div className="space-y-6 xs:space-y-8">
            <div className="flex items-center gap-3 xs:gap-4">
              <div className="w-10 h-10 xs:w-12 xs:h-12 md:w-16 md:h-16 bg-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg md:text-2xl">MC</span>
              </div>
              <div>
                <h2 className="text-base xs:text-lg md:text-xl font-bold tracking-tighter uppercase leading-none">{company.name}</h2>
                <div className="h-1 w-10 xs:w-12 bg-primary mt-2" />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              {company.description}
            </p>
            <div className="flex gap-4">
              {completeData.footer.social.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] || Icons.Linkedin;
                return (
                  <Link key={social.platform} href={social.href} className="p-3 bg-white/5 border border-white/10 hover:bg-primary transition-all duration-300 text-white/50 hover:text-white smooth-gpu">
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-l-4 border-primary pl-4">
              {services.title}
            </h4>
            <div className="grid gap-3">
              {services.main.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group text-stable">
                  <span className="w-1.5 h-1.5 bg-primary group-hover:w-3 transition-all duration-300" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-l-4 border-primary pl-4">
              Direct Contact
            </h4>
            <div className="space-y-5">
              <a href={`tel:${contact.phone}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                  <Icons.Phone />
                </div>
                <span className="text-sm font-bold">{contact.phone}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center group-hover:bg-primary transition-all">
                  <Icons.Mail />
                </div>
                <span className="text-sm font-bold">{contact.email}</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center">
                  <Icons.Location />
                </div>
                <span className="text-xs text-gray-400 font-medium leading-relaxed">{contact.address}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter & Trust */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-primary border-l-4 border-primary pl-4">
              Accreditations
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {certifications.slice(0, 4).map((cert, i) => (
                <div key={i} className="p-1.5 xs:p-2 sm:p-3 bg-white/5 border border-white/10 text-center">
                  <span className="text-[8px] xs:text-[9px] sm:text-[10px] font-bold block text-white/80">{cert.cert}</span>
                  <span className="text-[6px] xs:text-[7px] sm:text-[8px] text-primary uppercase tracking-tighter mt-0.5 xs:mt-1 block">Verified</span>
                </div>
              ))}
            </div>
            <div className="pt-2 sm:pt-4">
              <NewsletterForm />
            </div>
          </div>

        </div>

        {/* Dynamic Legacy Marquee (Grounded) */}
        <div className="py-12 border-y border-white/5 bg-[#080808] group/marquee">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-12">
                <span className="text-[14px] font-bold uppercase tracking-[0.6em] text-white/10 italic transition-colors duration-500 group-hover/marquee:text-white">
                  Structural Performance Certified
                </span>
                <div className="w-3 h-3 bg-primary rotate-45" />
                <span className="text-[14px] font-bold uppercase tracking-[0.6em] text-white/10 italic transition-colors duration-500 group-hover/marquee:text-white">
                  Mega Construction NY Group
                </span>
                <div className="w-3 h-3 bg-primary rotate-45" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 xs:py-8 md:py-10 text-[8px] xs:text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] gap-4 md:gap-0 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>{bottom.copyright}</span>
            <div className="hidden sm:block w-1 h-1 bg-primary rounded-full" />
            <span>{bottom.rights}</span>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 xs:gap-8 mt-2 xs:mt-4 md:mt-0">
            {bottom.links.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-primary transition-colors text-stable">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;