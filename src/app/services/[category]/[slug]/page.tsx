"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldCheck, Clock, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const slug = params.slug as string;
  
  const service = servicesData.find((s) => s.id === categoryId);
  const subCategory = service?.subcategories.find((sub) => sub.id === slug);

  if (!service || !subCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Detail Page Not Found</h1>
          <Link href={`/services/${categoryId}`} className="text-red-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Category
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Dynamic Detail Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={subCategory.image}
            alt={subCategory.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <Link 
                href={`/services/${categoryId}`}
                className="inline-flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-[0.2em] mb-8 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to {service.title}
              </Link>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                {subCategory.title}
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                {subCategory.longDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Highlights</h3>
                <div className="space-y-6">
                  {subCategory.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-red-600" />
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 py-4 bg-red-600 text-white font-bold rounded-none hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                  GET A FREE QUOTE
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Content Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
                Why Choose Our <span className="text-red-600">{subCategory.title}</span> Solution?
              </h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Maximum Protection</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We use multi-layered protection systems to ensure your project stands the test of time and New York's harsh elements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Timely Completion</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our signature project management process ensures minimal disruption and on-time delivery for every phase.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Certified Excellence</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Licesed, insured, and backed by a 10-year workmanship warranty on all professional services.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={subCategory.image}
                alt={subCategory.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-lg font-medium opacity-90 uppercase tracking-widest">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Ready to Start Your {subCategory.title} Project?
          </h2>
          <p className="text-red-50 text-xl mb-12 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Contact Mega Contracting NY Group today for a free, no-obligation consultation and transparent estimate.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-5 bg-white text-red-600 font-bold shadow-2xl hover:bg-gray-50 transition-all uppercase tracking-wider">
              Request Free Estimate
            </button>
            <button className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold hover:bg-white hover:text-red-600 transition-all uppercase tracking-wider">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
