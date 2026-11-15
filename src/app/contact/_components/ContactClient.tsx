"use client";

import { useRef, useEffect, useState, Suspense } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { business } from "@/config/business";
import {
  trackGenerateLead,
  trackPhoneClick,
  trackEmailClick,
  trackEmergencyClick,
} from "@/lib/analytics";
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
  ExternalLink,
  AlertTriangle,
  Building,
  Home,
  Layers,
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

// ─── Form Input Component ──────────────────────────────────────────────────────
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

// ─── Form Select Component ─────────────────────────────────────────────────────
interface SelectProps {
  icon: React.ReactNode;
  label: string;
  name: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
}
const FormSelect = ({ icon, label, name, value, options, onChange, required }: SelectProps) => {
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
        className="relative flex items-center rounded-xl border transition-all duration-400 bg-white"
        style={{
          background: focused ? "#fff" : "#f9fafb",
          borderColor: focused ? "#C30505" : hasValue ? "rgba(195,5,5,0.35)" : "#e5e7eb",
          boxShadow: focused ? "0 0 0 3px rgba(195,5,5,0.08)" : "none",
        }}
      >
        <div className="absolute left-4 transition-colors duration-300 pointer-events-none" style={{ color: focused || hasValue ? "#C30505" : "#9ca3af" }}>
          {icon}
        </div>
        <select
          name={name}
          value={value}
          required={required}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full pl-12 pr-10 py-4 bg-transparent text-gray-800 text-sm focus:outline-none rounded-xl appearance-none cursor-pointer"
        >
          <option value="" disabled>{label} *</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-gray-900 bg-white">
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronRight className="w-4 h-4 text-gray-400 absolute right-4 rotate-90 pointer-events-none" />
      </div>
    </div>
  );
};

// ─── Form Textarea Component ───────────────────────────────────────────────────
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
          rows={5}
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
                Estimate Request Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-gray-500 text-sm leading-relaxed mb-2"
              >
                Thank you for contacting Mega Contracting NY Group. Our estimators will review your project details and contact you promptly.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="font-bold mb-8 text-red-600"
              >
                Direct dispatch: {business.phone}
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

// ─── Info Card ────────────────────────────────────────────────────────────────
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
    <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"
      style={{ background: "linear-gradient(90deg, #C30505, #ff6b6b)" }} />
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
            {line === business.phone ? (
              <a href={`tel:${business.phoneE164}`} onClick={trackPhoneClick} className="text-gray-600 font-mono text-xs hover:text-red-600 underline underline-offset-2">
                {line}
              </a>
            ) : line === business.email ? (
              <a href={`mailto:${business.email}`} onClick={trackEmailClick} className="text-gray-600 font-mono text-xs hover:text-red-600 underline underline-offset-2">
                {line}
              </a>
            ) : (
              <span className="text-gray-600 font-mono text-xs">{line}</span>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-red-100" />
    <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-red-100" />
  </motion.div>
);

// ─── Select Options Definitions ────────────────────────────────────────────────
const PROJECT_TYPES = [
  { value: "Roofing Services", label: "Roofing Services" },
  { value: "Masonry Work", label: "Masonry Work" },
  { value: "Home Renovation", label: "Home Renovation" },
  { value: "Concrete Services", label: "Concrete Services" },
  { value: "Stucco Services", label: "Stucco Services" },
  { value: "Custom Home Building", label: "Custom Home Building" },
  { value: "Emergency Repairs", label: "Emergency Repairs" },
  { value: "Other", label: "Other" },
];

const BOROUGHS = [
  { value: "Manhattan", label: "Manhattan" },
  { value: "Brooklyn", label: "Brooklyn" },
  { value: "Queens", label: "Queens" },
  { value: "Bronx", label: "Bronx" },
  { value: "Staten Island", label: "Staten Island" },
  { value: "Other / Outside NYC", label: "Other / Outside NYC" },
];

const PROPERTY_TYPES = [
  { value: "Residential", label: "Residential" },
  { value: "Multi-family", label: "Multi-family" },
  { value: "Commercial", label: "Commercial" },
  { value: "Other", label: "Other" },
];

const URGENCY_OPTIONS = [
  { value: "Emergency", label: "Emergency" },
  { value: "This week", label: "This week" },
  { value: "Within a month", label: "Within a month" },
  { value: "Just planning", label: "Just planning" },
];

// ─── Inner Form Component (Consumes searchParams) ──────────────────────────────
function ContactFormContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const searchParams = useSearchParams();
  const serviceParam = searchParams ? searchParams.get("service") : null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    borough: "",
    addressOrNeighborhood: "",
    propertyType: "",
    urgency: "",
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Urgent repair block state
  const [urgentData, setUrgentData] = useState({ name: "", phone: "", issue: "" });
  const [isUrgentSubmitting, setIsUrgentSubmitting] = useState(false);
  const [urgentSuccess, setUrgentSuccess] = useState(false);

  // Prefill project type from ?service=
  useEffect(() => {
    if (!serviceParam) return;
    const p = serviceParam.toLowerCase();
    if (p.includes("roof")) {
      setFormData((prev) => ({ ...prev, projectType: "Roofing Services" }));
    } else if (p.includes("masonry") || p.includes("brick") || p.includes("facade") || p.includes("parapet") || p.includes("lintel")) {
      setFormData((prev) => ({ ...prev, projectType: "Masonry Work" }));
    } else if (p.includes("renovation") || p.includes("kitchen") || p.includes("bathroom") || p.includes("basement") || p.includes("interior")) {
      setFormData((prev) => ({ ...prev, projectType: "Home Renovation" }));
    } else if (p.includes("concrete") || p.includes("sidewalk") || p.includes("foundation") || p.includes("driveway")) {
      setFormData((prev) => ({ ...prev, projectType: "Concrete Services" }));
    } else if (p.includes("stucco")) {
      setFormData((prev) => ({ ...prev, projectType: "Stucco Services" }));
    } else if (p.includes("custom") || p.includes("design-build") || p.includes("project-management")) {
      setFormData((prev) => ({ ...prev, projectType: "Custom Home Building" }));
    } else if (p.includes("emergency") || p.includes("water-damage") || p.includes("fire")) {
      setFormData((prev) => ({ ...prev, projectType: "Emergency Repairs", urgency: "Emergency" }));
    } else {
      setFormData((prev) => ({ ...prev, projectType: "Other" }));
    }
  }, [serviceParam]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      // Spam honeypot triggered: silently succeed
      setShowSuccess(true);
      return;
    }

    setIsSubmitting(true);
    const emailBody = `
🏗️ MEGA CONTRACTING NY GROUP — ESTIMATE REQUEST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Name:        ${formData.name}
📧 Email:       ${formData.email}
📞 Phone:       ${formData.phone}
🛠️ Project:     ${formData.projectType}
🏙️ Borough:     ${formData.borough}
📍 Location:    ${formData.addressOrNeighborhood || "Not specified"}
🏢 Property:    ${formData.propertyType}
⏱️ Urgency:     ${formData.urgency}

📝 DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.message}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ Submitted:   ${new Date().toLocaleString()}
    `;

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${business.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🏗️ Estimate Request: ${formData.projectType} (${formData.borough}) — Mega Contracting NY Group`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          project_type: formData.projectType,
          borough: formData.borough,
          address_or_neighborhood: formData.addressOrNeighborhood || "N/A",
          property_type: formData.propertyType,
          urgency: formData.urgency,
          description: formData.message,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        trackGenerateLead(formData.projectType, formData.borough, formData.urgency);
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          borough: "",
          addressOrNeighborhood: "",
          propertyType: "",
          urgency: "",
          message: "",
        });
        setIsSubmitting(false);
        return;
      }
    } catch {
      /* fallback */
    }

    // Mailto fallback
    trackGenerateLead(formData.projectType, formData.borough, formData.urgency);
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(`Estimate: ${formData.projectType} (${formData.borough})`)}&body=${encodeURIComponent(emailBody)}`;
    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      borough: "",
      addressOrNeighborhood: "",
      propertyType: "",
      urgency: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleUrgentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUrgentSubmitting(true);
    trackEmergencyClick();
    trackGenerateLead("Emergency Repairs", "NYC Urgent", "Emergency");

    try {
      await fetch(`https://formsubmit.co/ajax/${business.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `🚨 URGENT REPAIR CALLBACK: ${urgentData.name} (${urgentData.phone})`,
          name: urgentData.name,
          phone: urgentData.phone,
          urgent_issue: urgentData.issue,
          urgency: "Emergency",
          _template: "table",
          _captcha: "false",
        }),
      });
    } catch {
      /* fallback */
    }

    setUrgentSuccess(true);
    setIsUrgentSubmitting(false);
    setUrgentData({ name: "", phone: "", issue: "" });
  };

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="min-h-screen overflow-hidden bg-gray-50">
        <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28 bg-white">
          <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `linear-gradient(rgba(195,5,5,1) 1px, transparent 1px), linear-gradient(90deg, rgba(195,5,5,1) 1px, transparent 1px)`,
                backgroundSize: "64px 64px",
              }}
            />
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[100px] opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(195,5,5,0.4) 0%, transparent 70%)" }}
            />
          </motion.div>

          <Particles />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
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
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight uppercase font-heading"
            >
              Get Your Free{" "}
              <span className="text-red-600" style={{ textShadow: "0 0 40px rgba(195,5,5,0.15)" }}>
                Construction Estimate in NYC Today
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Have a project in mind or need a free estimate? Our team is ready to help.
              Fill out the form below and we'll review your scope promptly.
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
                ...(business.emergency247 ? [{ icon: <Zap className="w-3.5 h-3.5" />, text: "24/7 Emergency" }] : []),
                { icon: <CheckCircle2 className="w-3.5 h-3.5" />, text: "All 5 NYC Boroughs" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700"
                >
                  <span className="text-red-600">{badge.icon}</span>
                  <span>{badge.text}</span>
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
              lines={[business.phone, "Mon – Sat: 8am – 7pm", ...(business.emergency247 ? ["Emergency: 24/7 available"] : [])]}
              delay={0}
            />
            <InfoCard
              icon={<Mail className="w-7 h-7" />}
              title="Email Us"
              subtitle="We respond to every message promptly"
              lines={[business.email, "Free estimates by email", ...(business.emergency247 ? ["24/7 support available"] : [])]}
              delay={0.1}
            />
            <InfoCard
              icon={<MapPin className="w-7 h-7" />}
              title="Our Location"
              subtitle="Serving all five boroughs and greater NY area"
              lines={[business.address.formatted, "Manhattan • Brooklyn • Queens", "Bronx • Staten Island"]}
              delay={0.2}
            />
          </div>
        </section>

        {/* ── Contact Form Section ──────────────────────────────── */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {/* Urgent repair block */}
          <div className="mb-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-neutral-950 via-neutral-900 to-red-950 border border-red-500/40 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/50 text-red-400 text-xs font-bold uppercase tracking-widest">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>Immediate Action Required</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading uppercase text-white">
                  Urgent Repair?
                </h2>
                <p className="text-gray-300 text-sm max-w-2xl leading-relaxed">
                  Active roof leak, facade hazard, emergency sidewalk trip hazard, or urgent DOB/DOT notice? Call our direct line immediately or request priority dispatch below.
                </p>
              </div>
              <a
                href={`tel:${business.phoneE164}`}
                onClick={() => {
                  trackPhoneClick();
                  trackEmergencyClick();
                }}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-3 shrink-0"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {business.phone}</span>
              </a>
            </div>

            {urgentSuccess ? (
              <div className="p-4 rounded-xl bg-green-500/20 border border-green-500/40 text-green-300 text-sm flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-green-400" />
                <span>Urgent callback request received! A dispatch coordinator will contact you promptly.</span>
              </div>
            ) : (
              <form onSubmit={handleUrgentSubmit} className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-4 gap-3">
                <input
                  type="text"
                  placeholder="Your Name *"
                  required
                  value={urgentData.name}
                  onChange={(e) => setUrgentData({ ...urgentData, name: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  required
                  value={urgentData.phone}
                  onChange={(e) => setUrgentData({ ...urgentData, phone: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500"
                />
                <input
                  type="text"
                  placeholder="Urgent Issue (e.g. Active Leak) *"
                  required
                  value={urgentData.issue}
                  onChange={(e) => setUrgentData({ ...urgentData, issue: e.target.value })}
                  className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  disabled={isUrgentSubmitting}
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all disabled:opacity-50"
                >
                  {isUrgentSubmitting ? "Dispatching..." : "Request Urgent Callback"}
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Left Info Column */}
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
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight font-heading uppercase">
                  Request Your<br />
                  <span className="text-red-600">Free Estimate</span>
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  No obligation. No pressure. Professional guidance and clear project scopes from New York's dedicated construction and roofing team.
                </p>
              </div>

              {/* Feature list */}
              <div className="space-y-3">
                {[
                  { icon: <Clock className="w-4 h-4" />, title: "Prompt Response", desc: "Coordinated evaluation" },
                  { icon: <Star className="w-4 h-4" />, title: "Free Detailed Quote", desc: "Itemized estimate with defined scope" },
                  { icon: <Shield className="w-4 h-4" />, title: "Fully Licensed", desc: `${business.licenseLines[0]?.number || "NYC DOB"} · Licensed & Insured` },
                  { icon: <CheckCircle2 className="w-4 h-4" />, title: "Dedicated Team", desc: "Family-owned since founding" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:border-red-100 hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: "rgba(195,5,5,0.08)", color: "#C30505" }}
                    >
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
                <a
                  href={`tel:${business.phoneE164}`}
                  onClick={trackPhoneClick}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm group hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4 shrink-0 text-red-600" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest">Call directly</p>
                    <p className="text-gray-900 font-bold text-sm">{business.phone}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
                <a
                  href={`mailto:${business.email}`}
                  onClick={trackEmailClick}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 shadow-sm group hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <Mail className="w-4 h-4 shrink-0 text-red-600" />
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-widest">Email directly</p>
                    <p className="text-gray-900 font-bold text-sm">{business.email}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 ml-auto text-gray-300 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              </div>
            </motion.div>

            {/* Right Detailed Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-3"
            >
              <div
                className="relative rounded-3xl overflow-hidden bg-white"
                style={{ border: "1px solid #f1f5f9", boxShadow: "0 20px 80px rgba(0,0,0,0.08)" }}
              >
                {/* Red accent top bar */}
                <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #C30505 0%, #ff6b6b 50%, #C30505 100%)" }} />

                <div className="relative p-6 sm:p-8 md:p-10">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 font-heading uppercase">Project Scope &amp; Details</h3>
                    <p className="text-gray-400 text-sm">Fill in your specifications below to receive an itemized estimate.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Spam honeypot field (hidden from legitimate users) */}
                    <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                      <input
                        type="text"
                        name="_hp_company"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>

                    {/* Contact basics */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput
                        icon={<User className="w-4 h-4" />}
                        label="Full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        icon={<Mail className="w-4 h-4" />}
                        label="Email address"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormInput
                        icon={<Phone className="w-4 h-4" />}
                        label="Phone number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        icon={<MapPin className="w-4 h-4" />}
                        label="Neighborhood or Street (Optional)"
                        name="addressOrNeighborhood"
                        value={formData.addressOrNeighborhood}
                        onChange={handleChange}
                      />
                    </div>

                    {/* Project classification dropdowns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormSelect
                        icon={<Layers className="w-4 h-4" />}
                        label="Project type"
                        name="projectType"
                        value={formData.projectType}
                        options={PROJECT_TYPES}
                        onChange={handleChange}
                        required
                      />
                      <FormSelect
                        icon={<MapPin className="w-4 h-4" />}
                        label="Borough"
                        name="borough"
                        value={formData.borough}
                        options={BOROUGHS}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <FormSelect
                        icon={<Building className="w-4 h-4" />}
                        label="Property type"
                        name="propertyType"
                        value={formData.propertyType}
                        options={PROPERTY_TYPES}
                        onChange={handleChange}
                        required
                      />
                      <FormSelect
                        icon={<Clock className="w-4 h-4" />}
                        label="Urgency"
                        name="urgency"
                        value={formData.urgency}
                        options={URGENCY_OPTIONS}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Description textarea */}
                    <FormTextarea
                      icon={<MessageSquare className="w-4 h-4" />}
                      label="Describe your project, timeline, or any violation / inspection details..."
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-400 text-xs">
                        <Shield className="w-3.5 h-3.5 shrink-0 text-red-600" />
                        <span>Confidential and secure transmission.</span>
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
                            Submitting…
                          </>
                        ) : (
                          <>
                            Request Estimate
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Service Areas & Map ─────────────────────────────────── */}
        <section className="relative overflow-hidden">
          <div className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #C30505 0%, #8B0000 100%)" }}>
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
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
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 font-heading uppercase">
                    Proudly Serving<br />
                    <span className="text-red-200">All of New York</span>
                  </h2>
                  <p className="text-white/65 text-sm sm:text-base max-w-md leading-relaxed">
                    From Manhattan skyscrapers to Bronx brownstones and commercial centers — our licensed crews cover the NYC metro area.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="grid grid-cols-3 gap-4 lg:gap-6"
                >
                  {[
                    { value: "5", label: "NYC Boroughs" },
                    ...(business.foundingYear
                      ? [{ value: String(business.foundingYear), label: "Established" }]
                      : [{ value: "Family", label: "Owned" }]),
                    { value: "Licensed", label: "& Insured" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="text-center px-4 py-5 rounded-2xl"
                      style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white leading-none mb-1">{stat.value}</div>
                      <div className="text-white/60 text-xs uppercase tracking-wider font-medium">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Google Maps Headquarters Embed */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <div className="p-6 sm:p-8 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-600 block mb-1">
                    Headquarters &amp; Dispatch Facility
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-heading">
                    {business.address.formatted}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    Serving all 5 NYC boroughs{business.emergency247 ? " 24/7" : ""} • Licensed NYC General Contractor {business.licenseLines[0]?.number}
                  </p>
                </div>
                <a
                  href="https://share.google/cQGmz8WB5ogZiDLnE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-md"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="relative w-full h-[360px] sm:h-[450px]">
                <iframe
                  title="Mega Contracting NY Group Bronx Headquarters"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address.formatted)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// ─── Main Export Wrapped in Suspense for App Router SSG ────────────────────────
export default function ContactClient() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ContactFormContent />
    </Suspense>
  );
}
