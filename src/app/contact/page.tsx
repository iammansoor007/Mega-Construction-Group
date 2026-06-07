"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Shield,
  Star,
  Zap,
} from "lucide-react";

// ─── Floating particles (light) ───────────────────────────────────────────────
const Particles = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? "#C30505" : "#f87171",
            opacity: 0.12 + Math.random() * 0.15,
          }}
          animate={{ y: [0, -(25 + Math.random() * 35), 0], opacity: [0.08, 0.28, 0.08] }}
          transition={{ duration: 7 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

// ─── Input ────────────────────────────────────────────────────────────────────
interface InputProps {
  icon: React.ReactNode;
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}
const FormInput = ({ icon, label, type = "text", name, value, onChange, required }: InputProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  return (
    <div className="relative group">
      <motion.div
        animate={{ opacity: focused ? 0.18 : 0, scale: focused ? 1.03 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-0.5 rounded-xl blur-md pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C30505, #ff4444)" }}
      />
      <div
        className="relative flex items-center rounded-xl border transition-all duration-400"
        style={{
          background: focused ? "#fff" : "#f9fafb",
          borderColor: focused ? "#C30505" : hasValue ? "rgba(195,5,5,0.35)" : "#e5e7eb",
          boxShadow: focused ? "0 0 0 3px rgba(195,5,5,0.08)" : "none",
        }}
      >
        <div className="absolute left-4 transition-colors duration-300" style={{ color: focused || hasValue ? "#C30505" : "#9ca3af" }}>
          {icon}
        </div>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={label}
          required={required}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-12 pr-4 py-4 bg-transparent text-gray-800 text-sm placeholder-gray-400 focus:outline-none rounded-xl"
        />
        {focused && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
            style={{ background: "linear-gradient(90deg, #C30505, #ff6b6b)" }}
            transition={{ duration: 0.35 }}
          />
        )}
      </div>
    </div>
  );
};

// ─── Textarea ─────────────────────────────────────────────────────────────────
interface TextareaProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}
const FormTextarea = ({ icon, label, name, value, onChange, required }: TextareaProps) => {
  const [focused, setFocused] = useState(false);
  const hasValue = value.length > 0;
  return (
    <div className="relative group">
      <motion.div
        animate={{ opacity: focused ? 0.18 : 0, scale: focused ? 1.01 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-0.5 rounded-xl blur-md pointer-events-none"
        style={{ background: "linear-gradient(135deg, #C30505, #ff4444)" }}
      />
      <div
        className="relative rounded-xl border transition-all duration-400"
        style={{
          background: focused ? "#fff" : "#f9fafb",
          borderColor: focused ? "#C30505" : hasValue ? "rgba(195,5,5,0.35)" : "#e5e7eb",
          boxShadow: focused ? "0 0 0 3px rgba(195,5,5,0.08)" : "none",
        }}
      >
        <div className="absolute left-4 top-4 transition-colors duration-300" style={{ color: focused || hasValue ? "#C30505" : "#9ca3af" }}>
          {icon}
        </div>
        <textarea
          name={name}
          value={value}
          placeholder={label}
          rows={6}
          required={required}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-12 pr-4 py-4 bg-transparent text-gray-800 text-sm placeholder-gray-400 focus:outline-none resize-none rounded-xl"
        />
      </div>
    </div>
  );
};

// ─── Success Modal ─────────────────────────────────────────────────────────────
const SuccessModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(6px)" }}
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.88, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.88, y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="relative rounded-3xl shadow-2xl max-w-md w-full overflow-hidden bg-white"
            style={{ border: "1px solid #fee2e2" }}
          >
            <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "linear-gradient(90deg, #C30505, #ff6b6b, #C30505)" }} />
            <div className="relative p-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 28, delay: 0.15 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center shadow-xl"
                style={{ background: "linear-gradient(135deg, #C30505, #A00404)", boxShadow: "0 8px 32px rgba(195,5,5,0.3)" }}
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-2xl font-bold text-gray-900 mb-3"
              >
                Message Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-gray-500 text-sm leading-relaxed mb-2"
              >
                Thank you for reaching out to Mega Construction NY Group.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="font-bold mb-8 text-red-600"
              >
                We'll respond within 4–8 hours.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
                onClick={onClose}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="px-10 py-3 rounded-full font-bold text-sm uppercase tracking-widest text-white"
                style={{ background: "linear-gradient(135deg, #C30505, #A00404)", boxShadow: "0 8px 24px rgba(195,5,5,0.3)" }}
              >
                Close
              </motion.button>
            </div>
            <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-red-200 rounded-tl" />
            <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-red-200 rounded-br" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── Info Card ─────────────────────────────────────────────────────────────────
interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  lines: string[];
  delay?: number;
}
const InfoCard = ({ icon, title, subtitle, lines, delay = 0 }: InfoCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.3 } }}
    className="relative group overflow-hidden rounded-2xl bg-white"
    style={{ border: "1px solid #f1f5f9", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
  >
    {/* Red top border on hover */}
    <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"
      style={{ background: "linear-gradient(90deg, #C30505, #ff6b6b)" }} />
    {/* Bottom shimmer */}
    <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
      style={{ background: "linear-gradient(90deg, transparent, #C30505, transparent)" }} />

    <div className="relative p-7">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
        style={{ background: "linear-gradient(135deg, rgba(195,5,5,0.1), rgba(195,5,5,0.04))" }}>
        <div style={{ color: "#C30505" }}>{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors duration-300">{title}</h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed">{subtitle}</p>
      <div className="space-y-2 pt-4 border-t border-gray-100">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#C30505" }} />
            <span className="text-gray-600 font-mono text-xs">{line}</span>
          </div>
        ))}
      </div>
    </div>
    <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-red-100" />
    <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-red-100" />
  </motion.div>
);

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const emailBody = `
🏗️ MEGA CONSTRUCTION NY GROUP — CONTACT FORM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name:    ${formData.name}
📧 Email:   ${formData.email}
📞 Phone:   ${formData.phone}
📋 Subject: ${formData.subject}

📝 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ Submitted: ${new Date().toLocaleString()}
    `;
    try {
      const res = await fetch("https://formsubmit.co/ajax/info@megacontractinggroup.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🏗️ New Contact: ${formData.subject} — Mega Construction NY`,
          name: formData.name, email: formData.email, phone: formData.phone,
          subject: formData.subject, message: formData.message,
          _template: "table", _captcha: "false",
        }),
      });
      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitting(false);
        return;
      }
    } catch { /* fallback */ }
    window.location.href = `mailto:info@megacontractinggroup.com?subject=${encodeURIComponent(`Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailBody)}`;
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen overflow-hidden bg-gray-50">
        <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
          <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `linear-gradient(rgba(195,5,5,1) 1px, transparent 1px), linear-gradient(90deg, rgba(195,5,5,1) 1px, transparent 1px)`,
                backgroundSize: "64px 64px",
              }}
            />
            {/* Light red glow at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[100px] opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(195,5,5,0.4) 0%, transparent 70%)" }} />
          </motion.div>

          <Particles />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, transparent, #C30505)" }} />
              <span className="text-xs font-mono tracking-[0.3em] uppercase font-bold text-red-600">Contact Us</span>
              <div className="w-12 h-px" style={{ background: "linear-gradient(90deg, #C30505, transparent)" }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight"
            >
              Let's Build{" "}
              <span className="text-red-600" style={{ textShadow: "0 0 40px rgba(195,5,5,0.15)" }}>
                Together
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind or need a free estimate? Our expert team is ready to help.
              Fill out the form below and we'll get back to you within 4–8 hours.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-8"
            >
              {[
                { icon: <Shield className="w-3.5 h-3.5" />, text: "Licensed & Insured" },
                { icon: <Star className="w-3.5 h-3.5" />, text: "Free Estimates" },
                { icon: <Zap className="w-3.5 h-3.5" />, text: "24/7 Emergency" },
                { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "20+ Years Experience" },
              ].map((badge, i) => (
                <div key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-gray-700 bg-white border border-gray-200 shadow-sm hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-red-600">{badge.icon}</span>
                  {badge.text}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Info Cards ────────────────────────────────────────── */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard
              icon={<Phone className="w-7 h-7" />}
              title="Call Us"
              subtitle="Speak directly with our team during business hours"
              lines={["+1 (917) 295-7776", "Mon – Sat: 8am – 7pm", "Emergency: 24/7 available"]}
              delay={0}
            />
            <InfoCard
              icon={<Mail className="w-7 h-7" />}
              title="Email Us"
              subtitle="We respond to every message within 4–8 hours"
              lines={["info@megacontractinggroup.com", "Free estimates by email", "24/7 support available"]}
              delay={0.1}
            />
            <InfoCard
              icon={<MapPin className="w-7 h-7" />}
              title="Our Location"
              subtitle="Serving all five boroughs and greater NY area"
              lines={["3044 Radcliff Ave, Bronx NY 10469", "Manhattan • Brooklyn • Queens", "Westchester • Long Island"]}
              delay={0.2}
            />
          </div>
        </section>

        {/* ── Contact Form ──────────────────────────────────────── */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* Left — Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-px" style={{ background: "linear-gradient(90deg, transparent, #C30505)" }} />
                  <span className="text-xs font-mono tracking-[0.25em] uppercase font-bold text-red-600">Get In Touch</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Request Your<br />
                  <span className="text-red-600">Free Estimate</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  No obligation. No pressure. Just honest answers and professional guidance from New York's most
                  trusted construction and roofing team since 2005.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, title: "Fast Response", desc: "Reply within 4–8 hours, guaranteed" },
                  { icon: <Star className="w-4 h-4" />, title: "Free Detailed Quote", desc: "Itemized estimate with no hidden fees" },
                  { icon: <Shield className="w-4 h-4" />, title: "Fully Licensed", desc: "NYC-2005-8942 · BBB A+ Rated" },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: "1,000+ Projects Done", desc: "Family-owned since 2005, 98% satisfaction" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(195,5,5,0.08)", color: "#C30505" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-sm">{item.title}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Direct contact links */}
              <div className="space-y-3 pt-2">
                <a href="tel:19172957776"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm group hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-red-600" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest">Call directly</p>
                    <p className="text-gray-900 font-bold text-sm">+1 (917) 295-7776</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
                <a href="mailto:info@megacontractinggroup.com"
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm group hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0 text-red-600" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest">Email directly</p>
                    <p className="text-gray-900 font-bold text-sm">info@megacontractinggroup.com</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <div className="relative rounded-3xl overflow-hidden bg-white"
                style={{ border: "1px solid #f1f5f9", boxShadow: "0 20px 80px rgba(0,0,0,0.08)" }}
              >
                {/* Red accent top bar */}
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #C30505 0%, #ff6b6b 50%, #C30505 100%)" }} />

                {/* Animated dashed border */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                  <motion.rect
                    x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)"
                    rx="22" fill="none"
                    stroke="rgba(195,5,5,0.12)" strokeWidth="1.5"
                    strokeDasharray="10 8"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                </svg>

                <div className="relative p-6 sm:p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Send Us a Message</h3>
                    <p className="text-gray-400 text-sm">All fields required. We'll reach out shortly.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput icon={<User className="w-4 h-4" />} label="Full name" name="name" value={formData.name} onChange={handleChange} required />
                      <FormInput icon={<Mail className="w-4 h-4" />} label="Email address" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput icon={<Phone className="w-4 h-4" />} label="Phone number" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                      <FormInput icon={<MessageSquare className="w-4 h-4" />} label="Subject (e.g. Roofing Quote)" name="subject" value={formData.subject} onChange={handleChange} required />
                    </div>
                    <FormTextarea icon={<MessageSquare className="w-4 h-4" />} label="Tell us about your project..." name="message" value={formData.message} onChange={handleChange} required />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Shield className="w-3.5 h-3.5 shrink-0 text-red-600" />
                        Your information is 100% secure and confidential.
                      </div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.04 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
                        className="relative flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white shrink-0 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                        style={{ background: "linear-gradient(135deg, #C30505, #A00404)", boxShadow: "0 8px 32px rgba(195,5,5,0.35)" }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4" />
                          </>
                        )}
                        <motion.div
                          className="absolute inset-0 opacity-0 pointer-events-none"
                          whileHover={{ opacity: 1 }}
                          style={{ background: "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.15) 50%, transparent 65%)" }}
                        />
                      </motion.button>
                    </div>
                  </form>
                </div>

                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-red-100" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-red-100" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Service Areas ─────────────────────────────────────── */}
        <section className="relative overflow-hidden">
          {/* Red gradient banner header */}
          <div className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #C30505 0%, #8B0000 100%)" }}>
            {/* Decorative grid overlay */}
            <div className="absolute inset-0 opacity-[0.06]" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }} />
            {/* Glow blobs */}
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-[100px] opacity-25" style={{ background: "rgba(255,100,100,0.6)" }} />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-[80px] opacity-20" style={{ background: "rgba(255,255,255,0.3)" }} />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Left — text */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="w-8 h-px bg-white/40" />
                    <span className="text-xs font-mono tracking-[0.3em] uppercase text-white/70 font-bold">Coverage</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                    Proudly Serving<br />
                    <span className="text-red-200">All of New York</span>
                  </h2>
                  <p className="text-white/65 text-sm sm:text-base max-w-md leading-relaxed">
                    From Manhattan skyscrapers to Long Island homes — our licensed crews cover the entire New York metro area with the same commitment to excellence.
                  </p>
                </motion.div>

                {/* Right — stats */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="grid grid-cols-3 gap-4 lg:gap-6"
                >
                  {[
                    { value: "9+", label: "Areas Covered" },
                    { value: "1,000+", label: "Projects Done" },
                    { value: "20+", label: "Years Serving NY" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center px-4 py-5 rounded-2xl" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                      <div className="text-2xl sm:text-3xl font-bold text-white leading-none mb-1">{stat.value}</div>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Area cards grid */}
          <div className="bg-gray-50 py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { name: "Manhattan", detail: "All neighborhoods" },
                  { name: "Brooklyn", detail: "Full borough coverage" },
                  { name: "Queens", detail: "All districts" },
                  { name: "The Bronx", detail: "Complete coverage" },
                  { name: "Staten Island", detail: "Island-wide" },
                  { name: "Long Island", detail: "Nassau & Suffolk" },
                  { name: "Westchester", detail: "County-wide" },
                  { name: "Nassau County", detail: "All townships" },
                  { name: "Rockland County", detail: "Full coverage" },
                  { name: "& Surrounding Areas", detail: "Call to confirm" },
                ].map((area, i) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.25 } }}
                    className="group relative bg-white rounded-2xl p-5 text-center cursor-default overflow-hidden"
                    style={{ border: "1px solid #f1f5f9", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    {/* Red top bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-400 rounded-t-2xl"
                      style={{ background: "linear-gradient(90deg, #C30505, #ff6b6b)" }} />

                    {/* Map pin icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ background: "rgba(195,5,5,0.07)" }}>
                      <svg className="w-5 h-5" style={{ color: "#C30505" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>

                    <p className="font-bold text-gray-900 text-sm leading-tight mb-1 group-hover:text-red-600 transition-colors duration-300">{area.name}</p>
                    <p className="text-gray-400 text-[11px]">{area.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
                style={{ background: "linear-gradient(135deg, rgba(195,5,5,0.05) 0%, rgba(195,5,5,0.02) 100%)", border: "1px solid rgba(195,5,5,0.12)" }}
              >
                <div className="text-center sm:text-left">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Not sure if we cover your area?</h3>
                  <p className="text-gray-500 text-sm">Call us or send a message — we'll let you know right away.</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href="tel:19172957776"
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg, #C30505, #A00404)", boxShadow: "0 6px 24px rgba(195,5,5,0.3)" }}
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="mailto:info@megacontractinggroup.com"
                    className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-red-600 bg-white border border-red-200 transition-all duration-300 hover:scale-105 hover:bg-red-50"
                  >
                    <Mail className="w-4 h-4" />
                    Email Us
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
