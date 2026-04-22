"use client";

import { useParams } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const service = servicesData.find((s) => s.id === categoryId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link href="/" className="text-red-600 hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-30 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
                {service.tag}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Subcategories Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-12 h-1 bg-red-600 rounded-sm" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-tight">
              Our <span className="text-red-600">Specializations</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {service.subcategories.map((sub, index) => (
              <Link 
                key={sub.id} 
                href={`/services/${categoryId}/${sub.id}`}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative h-full bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:border-red-500/30 transition-all duration-500 shadow-xl hover:shadow-2xl flex flex-col md:flex-row"
                >
                  {/* Left: Image Side */}
                  <div className="relative md:w-2/5 min-h-[300px] overflow-hidden">
                    <Image
                      src={sub.image}
                      alt={sub.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent group-hover:from-black/40 transition-all duration-500" />
                    <div className="absolute top-6 left-6 z-10">
                      <div className="bg-red-600 text-white p-3 rounded-2xl shadow-xl">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Right: Content Side */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between bg-white">
                    <div>
                      <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-50 border border-red-100">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.1em]">Specialized Solution</span>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-4 leading-tight">
                        {sub.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
                        {sub.description}
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {sub.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                            <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                            </div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                      <span className="text-xs font-bold text-red-600 uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-500">
                        VIEW DETAILS
                      </span>
                      <div className="w-12 h-12 rounded-full bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-500">
                        <ArrowRight className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
