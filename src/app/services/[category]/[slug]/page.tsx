"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, ShieldCheck, 
  Clock, Award, Plus, Minus, Shield,
  Briefcase, Star, ChevronDown, 
  Phone, Mail, MessageSquare,
  CheckCircle, Zap, Target, Activity,
  Search, Settings, HardHat, FileText
} from "lucide-react";
import * as Icons from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect, memo } from "react";
import { useInView } from "framer-motion";

// --- REUSABLE COUNTER ---
const Counter = memo(({ value, suffix = "" }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(value * eased));
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
});

// --- MAIN PAGE COMPONENT ---

export default function ServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const slug = params.slug as string;
  
  const service = servicesData.find((s) => s.id === categoryId);
  const subCategory = service?.subcategories.find((sub) => sub.id === slug);

  // Recommended Services
  const recommendedServices = service?.subcategories.filter((sub) => sub.id !== slug).slice(0, 3);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  if (!service || !subCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-heading">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tighter">RESOURCE_OFFLINE</h1>
          <Link href={`/services/${categoryId}`} className="text-red-600 hover:underline flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="w-4 h-4" /> Re-initialize Division
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = ({ name, className }: { name: string, className?: string }) => {
    const LucideIcon = (Icons as any)[name] || Icons.HelpCircle;
    return <LucideIcon className={className} />;
  };

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      {/* GLOBAL GRID BACKGROUND */}
      <div className="absolute inset-0 blueprint-grid opacity-[0.12] pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Navbar />
      
      {/* ====================== */}
      {/* HERO (Restored) */}
      {/* ====================== */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-red-600/10 px-5 py-2.5 rounded-none border-l-4 border-red-600">
                <Briefcase className="text-red-600 w-5 h-5" />
                <span className="text-red-600 uppercase tracking-[0.2em] text-xs font-bold">{service.tag} DIVISION</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[0.95] font-heading">
                  <span className="block text-gray-900">{subCategory.title.split(' ')[0]}</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
                    {subCategory.title.split(' ').slice(1).join(' ')}
                  </span>
                </h1>
                <div className="flex gap-1">
                    <div className="w-20 h-1.5 bg-red-600 rounded-sm" />
                    <div className="w-10 h-1.5 bg-red-400 rounded-sm" />
                    <div className="w-5 h-1.5 bg-red-300 rounded-sm" />
                </div>
              </div>

              <p className="text-gray-700 text-xl leading-relaxed max-w-xl font-medium">
                {subCategory.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-sm border border-gray-100">
                      <ShieldCheck className="w-5 h-5 text-red-600" />
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-sm border border-gray-100">
                      <Star className="w-5 h-5 text-red-600" />
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">A+ BBB Rated</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 shadow-sm border border-gray-100">
                      <Clock className="w-5 h-5 text-red-600" />
                      <span className="text-[10px] font-bold text-gray-800 uppercase tracking-widest">24/7 Response</span>
                  </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="group px-10 py-5 bg-red-600 text-white font-bold hover:bg-red-700 transition-all shadow-2xl hover:shadow-red-600/30 flex items-center justify-center gap-3 uppercase tracking-widest text-xs">
                  Request Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-10 py-5 bg-white text-gray-900 border-2 border-gray-200 font-bold hover:border-red-600 hover:text-red-600 transition-all uppercase tracking-widest text-xs">
                  Call Experts Now
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
                <div className="aspect-[4/5] relative">
                    <Image
                      src={subCategory.image}
                      alt={subCategory.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-[6s]"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10">
                    <div className="flex items-center gap-6">
                        <div className="w-24 h-24 bg-red-600 rounded-2xl flex flex-col items-center justify-center shadow-2xl">
                            <span className="text-white text-4xl font-bold">20</span>
                            <span className="text-white/80 text-[8px] font-bold uppercase tracking-[0.2em] text-center">Years in NY</span>
                        </div>
                        <div className="text-white">
                            <p className="text-sm font-bold uppercase tracking-[0.3em] opacity-80 mb-1">Division Leader</p>
                            <p className="text-3xl font-bold tracking-tighter leading-none">Industrial Grade <br /> Reliability</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border-l-[12px] border-b-[12px] border-red-600 pointer-events-none rounded-bl-[60px] z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* HIGH-END METRIC ROW (RE-IMAGINED) */}
      {/* ====================== */}
      {subCategory.stats && (
        <section className="py-24 bg-white border-y border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
                    {subCategory.stats.map((stat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex-1 flex items-center gap-8 group"
                        >
                            <div className="w-20 h-20 rounded-full border-2 border-red-600/20 flex items-center justify-center group-hover:border-red-600 transition-all duration-500">
                                <Zap className="w-8 h-8 text-red-600 group-hover:scale-125 transition-transform" />
                            </div>
                            <div>
                                <div className="text-5xl font-bold text-gray-900 tracking-tighter font-heading leading-none mb-2">
                                    <Counter value={parseInt(stat.value.replace(/[^0-9]/g, '')) || 0} suffix={stat.value.replace(/[0-9]/g, '')} />
                                </div>
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{stat.label}</div>
                            </div>
                            {i < subCategory.stats.length - 1 && (
                                <div className="hidden lg:block w-px h-12 bg-gray-200 ml-auto" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* ====================== */}
      {/* RESTORED "WHY CHOOSE MEGA" */}
      {/* ====================== */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-2 border-gray-50">
                <Image 
                  src={subCategory.image} 
                  alt="Quality Standard" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-red-600/10 mix-blend-multiply" />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-white p-10 shadow-[0_50px_100px_rgba(0,0,0,0.1)] rounded-[32px] max-w-xs hidden md:block border border-gray-50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="font-bold text-gray-900 uppercase tracking-widest text-xs">Premium Security</div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  "Every project is a testament to our engineering heritage and commitment to New York property safety."
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Uncompromising Quality</span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-[0.9] font-heading mb-8">
                  The <span className="text-red-600 italic">Mega Standard</span> Of Excellence
                </h2>
                <p className="text-gray-500 text-xl font-light leading-relaxed">
                  We don't just build; we engineer lasting value. Our {subCategory.title.toLowerCase()} division is built on decades of NYC fieldwork.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subCategory.benefits?.slice(0, 4).map((benefit, i) => (
                  <div key={i} className="flex gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 group-hover:scale-110 transition-all duration-500 shadow-sm group-hover:shadow-red-600/20">
                      <IconComponent name={benefit.icon} className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-tight">{benefit.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== */}
      {/* FAQ SECTION (Approved as "Okay") */}
      {/* ====================== */}
      {subCategory.faqs && (
        <section className="py-40 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-5">
                        <span className="text-red-600 font-bold text-xs uppercase tracking-[0.6em] mb-4 block">Knowledge Center</span>
                        <h2 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tighter font-heading leading-none mb-10">
                            Expert <br /> <span className="text-red-600">Guidance</span>
                        </h2>
                        <p className="text-gray-500 text-xl font-light leading-relaxed mb-12">
                            Direct intel from our senior technical group regarding your NYC property requirements.
                        </p>
                        <div className="p-8 bg-white border border-gray-100 shadow-xl rounded-[32px] flex items-center gap-6">
                            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-white">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-gray-900 font-bold tracking-tight">Technical Support</div>
                                <div className="text-red-600 text-[10px] font-bold uppercase tracking-widest">Available 24/7</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        {subCategory.faqs.map((faq, i) => (
                            <div key={i} className="group overflow-hidden bg-white border border-gray-100 hover:border-red-600 transition-all duration-500 rounded-2xl">
                                <button 
                                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                    className="w-full px-10 py-10 flex items-center justify-between text-left"
                                >
                                    <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors ${activeFaq === i ? 'text-red-600' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === i ? 'bg-red-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {activeFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-10 pb-10 text-gray-500 text-xl font-light leading-relaxed border-t border-gray-50 pt-8">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* ====================== */}
      {/* RECOMMENDED SERVICES */}
      {/* ====================== */}
      {recommendedServices && recommendedServices.length > 0 && (
        <section className="py-40 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="flex items-end justify-between mb-20">
                    <div>
                        <span className="text-red-600 font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Expand Capability</span>
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter font-heading leading-none">
                            Related <span className="text-red-600 italic">Services</span>
                        </h2>
                    </div>
                    <Link href={`/services/${categoryId}`} className="group flex items-center gap-4 text-gray-400 hover:text-red-600 transition-colors">
                        <span className="text-[10px] font-bold uppercase tracking-widest">All Division Services</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {recommendedServices.map((rec, i) => (
                        <Link href={`/services/${categoryId}/${rec.id}`} key={rec.id} className="group relative block overflow-hidden rounded-[32px] bg-gray-100">
                            <div className="aspect-[4/5] relative">
                                <Image src={rec.image} alt={rec.title} fill className="object-cover transition-transform duration-[4s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                    <div className="text-red-500 font-bold text-[10px] uppercase tracking-widest mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        View Details
                                    </div>
                                    <h3 className="text-3xl font-bold text-white tracking-tighter leading-tight mb-2">{rec.title}</h3>
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-[1px] bg-red-600" />
                                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest">{service.tag} Division</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* ====================== */}
      {/* SIGNATURE GLASS CTA (RE-IMAGINED) */}
      {/* ====================== */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div className="relative rounded-[60px] overflow-hidden group shadow-2xl">
                  {/* Background Image with Parallax-like feel */}
                  <div className="absolute inset-0 h-[120%] -top-[10%]">
                      <Image 
                        src={subCategory.image} 
                        alt="Final Impact" 
                        fill 
                        className="object-cover transition-transform duration-[10s] group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-black/40" />
                  </div>
                  
                  {/* Floating Content Board */}
                  <div className="relative z-10 p-12 md:p-32 flex flex-col md:flex-row items-center justify-between gap-20">
                      <div className="max-w-2xl text-center md:text-left">
                          <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                          >
                              <span className="text-white font-bold text-[10px] uppercase tracking-[1em] mb-10 block">Mission Critical Deployment</span>
                              <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] font-heading uppercase mb-12">
                                Initialize <br /> <span className="text-red-600">The Project</span>
                              </h2>
                              <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-16">
                                Secure your site with NYC's elite {subCategory.title.toLowerCase()} systems. Engineering response active.
                              </p>
                          </motion.div>
                      </div>

                      <div className="glass-heavy p-10 md:p-16 rounded-[40px] border-l-8 border-red-600 max-w-md w-full backdrop-blur-3xl bg-white/10 space-y-12 shadow-2xl">
                          <div className="space-y-8">
                              <div className="flex items-center gap-6 group/item">
                                  <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-white shadow-lg group-hover/item:scale-110 transition-transform">
                                      <Phone className="w-6 h-6" />
                                  </div>
                                  <div>
                                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Direct Engineering</div>
                                      <div className="text-white text-2xl font-bold tracking-tighter">(718) 555-0123</div>
                                  </div>
                              </div>
                              <div className="flex items-center gap-6 group/item">
                                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover/item:bg-red-600 transition-all">
                                      <Mail className="w-6 h-6" />
                                  </div>
                                  <div>
                                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-1">Secure Request</div>
                                      <div className="text-white text-xl font-medium tracking-tight">deploy@megany.com</div>
                                  </div>
                              </div>
                          </div>
                          <button className="w-full py-7 bg-red-600 text-white font-bold hover:bg-white hover:text-black transition-all duration-700 uppercase tracking-[0.5em] text-[10px] shadow-2xl">
                              Request Free Survey
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
      </div>
    </main>
  );
}
