import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import { locationsData } from "@/data/locationsData";
import { MapPin, ArrowRight, ShieldCheck, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "NYC Construction Service Areas & Locations | Mega Contracting NY Group",
  },
  description:
    "Explore our licensed general contracting locations across all five NYC boroughs — The Bronx, Brooklyn, Manhattan, Queens, and Staten Island.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/locations",
  },
  openGraph: {
    title: "NYC Construction Locations | Mega Contracting NY Group",
    description:
      "Licensed general contracting across all 5 NYC boroughs. Roofing, masonry, concrete, and renovation services.",
    url: "https://www.megacontractingnyc.com/locations",
  },
};

export default function LocationsIndexPage() {
  const boroughs = Object.values(locationsData);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 pt-36 pb-20 selection:bg-red-600 selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" />
              <span>All 5 NYC Boroughs Covered</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-gray-900 font-heading mb-4">
              NYC Construction Service Areas &amp; Borough Hubs
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Mega Contracting NY Group Inc. is an active NYC corporation headquartered at 3044 Radcliff Ave, Bronx NY. We provide licensed, insured, DOB-compliant exterior and interior construction services across every community in New York City.
            </p>
          </div>

          {/* Borough Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {boroughs.map((b) => (
              <div
                key={b.slug}
                className="p-8 rounded-3xl border border-gray-200 bg-white hover:border-red-600/50 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2 font-heading group-hover:text-red-600 transition-colors">
                    {b.boroughName}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 font-normal">
                    {b.intro}
                  </p>

                  <div className="pt-3 border-t border-gray-100 mb-6">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-gray-400 mb-2">
                      Active Neighborhoods:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {b.neighborhoods.slice(0, 5).map((n, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] bg-gray-100 text-gray-700"
                        >
                          {n}
                        </span>
                      ))}
                      <span className="text-[11px] text-gray-400 self-center">+more</span>
                    </div>
                  </div>
                </div>

                <Link
                  href={`/locations/${b.slug}`}
                  className="inline-flex items-center justify-between w-full p-3.5 rounded-xl bg-gray-50 group-hover:bg-red-600 text-gray-900 group-hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Explore {b.boroughName} Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Service Area Statement */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs uppercase font-bold tracking-widest text-red-500">
                Official NYC Presence
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Need Licensed Construction in Your Neighborhood?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-normal">
                Our estimators visit properties daily across all five boroughs. We provide comprehensive on-site inspections, photo diagnostics, and transparent itemized estimates within 24 hours.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all text-center"
              >
                Request Consultation
              </Link>
              <a
                href="tel:+19148043000"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl border border-white/20 transition-all text-center"
              >
                (914) 804-3000
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
