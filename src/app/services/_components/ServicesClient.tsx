"use client";

import { servicesData } from "@/data/servicesData";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Activity, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCTA from "@/components/ServiceCTA";
import MarqueeSection from "@/components/MarqueeSection";
import { useState } from "react";

export default function ServicesClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.subcategories.some((sub) => sub.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white font-body overflow-x-hidden relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=80&w=1200&auto=format&fit=crop"
            alt="Mega Construction NYC Services"
            fill
            className="object-cover opacity-20 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900" />
        </div>

        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-8">
              <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 opacity-30" />
              <span className="text-red-500">Services</span>
            </div>

            <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
              <span className="w-8 h-px bg-red-500" />
              <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
                Elite Trade Matrix
              </span>
            </div>

            <h1 className="text-4xl xs:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] md:leading-tight">
              Our Construction <span className="text-red-500">Services</span>
            </h1>

            <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              Professional general contracting, certified roofing, masonry restoration, and luxury interior renovation across New York City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Marquee */}
      <MarqueeSection text="NYC Certified Contractor â€¢ Fully Licensed & Insured â€¢ Over 1,000 Projects Completed â€¢ 10-Year Workmanship Warranty â€¢" />

      {/* Services Grid Section */}
      <section className="py-24 md:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 md:px-8">
          
          {/* Live Search Filter */}
          <div className="mb-16 max-w-md mx-auto md:mx-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search services or trades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 border-2 border-black text-black bg-white focus:outline-none focus:border-red-600 transition-colors font-medium rounded-none"
              />
            </div>
            {searchQuery && (
              <p className="text-xs text-gray-500 mt-2">
                Showing {filteredServices.length} results matching "{searchQuery}"
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredServices.map((service, index) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="group block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:shadow-red-600/30 group-hover:scale-[1.01] border border-black/5"
                >
                  {/* Full Bleed Image */}
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                  />
                  
                  {/* Deep Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Inner shimmer */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1.5s] ease-in-out bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 xs:p-8 md:p-12 flex flex-col justify-end">
                    <div className="relative z-10">
                      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-red-600/30 backdrop-blur-md border border-red-500/40 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-xl">
                        <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />
                        {service.tag} Division
                      </div>
                      
                      <h3 className="text-2xl xs:text-3xl md:text-5xl font-bold text-white mb-2 leading-none tracking-tighter group-hover:text-red-400 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-200 text-xs md:text-base leading-relaxed line-clamp-2 max-w-md mb-6">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-white/10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-700 shadow-2xl">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-[10px] md:text-[12px] font-bold text-white uppercase tracking-[0.3em]">
                            View Division Specializations
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Inner border */}
                  <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 group-hover:border-red-600/30 transition-colors duration-700 pointer-events-none" />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <ServiceCTA
            cta={{
              title: "Need Custom Construction Solutions in NYC?",
              description: "Our certified engineers and project managers are ready to consult on your residential or commercial requirements. Schedule an onsite inspection today.",
              buttons: [
                { text: "Request Free Estimate", href: "/contact", primary: true },
                { text: "Contact Office", href: "/contact", primary: false }
              ]
            }}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}

