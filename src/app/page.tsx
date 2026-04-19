"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LoadingScreen from "@/components/LoadingScreen";

// Dynamic imports for bundle splitting
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Portfolio = dynamic(() => import("@/components/Portfolio"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: true });
const QuickQuote = dynamic(() => import("@/components/QuickQuote"), { ssr: false });
const LeadCapture = dynamic(() => import("@/components/LeadCapture"), { ssr: true });
const Mission = dynamic(() => import("@/components/Mission"), { ssr: true });
const TeamValues = dynamic(() => import("@/components/TeamValues"), { ssr: true });
const QAForm = dynamic(() => import("@/components/QAForm"), { ssr: true });
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const AggressiveRoofingSection = dynamic(() => import("@/components/RoofingExperts"), { ssr: true });
const HowWeWork = dynamic(() => import("@/components/HowWeWork"), { ssr: true });

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // EMERGENCY FAILSAFE: Force clear loading after 5 seconds
    const failsafe = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(failsafe);
  }, []);

  return (
    <main className="relative overflow-x-hidden min-h-screen">
      {/* ====================== */}
      {/* SUBTLE BLUE GRID BACKGROUND */}
      {/* ====================== */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #2563eb 1px, transparent 1px),
              linear-gradient(to bottom, #2563eb 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #3b82f6 1px, transparent 1px),
              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
            backgroundPosition: '30px 30px',
          }}
        />
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-blue-50/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-[50vh] bg-gradient-to-t from-blue-50/10 to-transparent pointer-events-none" />
      </div>

      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar />
        <Hero />
        
          <section id="roofingexperts">
            <AggressiveRoofingSection />
          </section>
          <section id="services">
            <Services />
          </section>
          <TeamValues />
          <section id="portfolio">
            <Portfolio />
          </section>
          <Testimonials />
          <section id="about">
            <HowWeWork />
          </section>

          <section id="contact">
            <QAForm />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <Footer />

        <QuickQuote />
      </motion.div>
    </main>
  );
}
