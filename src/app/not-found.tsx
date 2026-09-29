import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Home, Wrench, Building, HardHat, Phone,
  ArrowRight, ShieldCheck, Search, HelpCircle
} from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 pt-36 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>404 — Page Not Found</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight font-heading uppercase mb-4">
            Looking for Construction Services in NYC?
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            The page you requested may have moved or been updated. Mega Contracting NY Group Inc. provides licensed roofing, masonry, concrete, and renovation services across all 5 boroughs.
          </p>

          {/* Quick Hub Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left mb-12">
            {[
              {
                title: "Roofing Division",
                desc: "Flat roofing, leak repair, shingles & commercial TPO.",
                href: "/roofing",
                icon: Home,
              },
              {
                title: "Masonry Division",
                desc: "Brick pointing, facade restoration, parapets & chimneys.",
                href: "/masonry",
                icon: Building,
              },
              {
                title: "Renovation Services",
                desc: "Complete interior, kitchen, bathroom & basement remodeling.",
                href: "/renovation",
                icon: HardHat,
              },
              {
                title: "Concrete & Sidewalks",
                desc: "DOT violation removal, sidewalk replacement & foundations.",
                href: "/concrete-services",
                icon: Wrench,
              },
              {
                title: "Project Case Studies",
                desc: "Explore documented exterior and interior NYC projects.",
                href: "/projects",
                icon: ShieldCheck,
              },
              {
                title: "All Construction Services",
                desc: "View our comprehensive 49+ specialized division offerings.",
                href: "/services",
                icon: Search,
              },
            ].map((hub, idx) => {
              const Icon = hub.icon;
              return (
                <Link
                  key={idx}
                  href={hub.href}
                  className="p-5 rounded-2xl border border-gray-200 bg-white hover:border-red-600/50 hover:shadow-lg transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-3 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">
                    {hub.title}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    {hub.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
            >
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md"
            >
              Request Free Estimate
            </Link>
            <a
              href="tel:+19148043000"
              className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold text-xs uppercase tracking-widest rounded-xl border border-gray-300 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-red-600" />
              <span>Call (914) 804-3000</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
