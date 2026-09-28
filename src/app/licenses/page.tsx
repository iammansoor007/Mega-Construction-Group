import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldCheck, Award, FileCheck, CheckCircle2, Phone, ArrowRight, Building, Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Licenses, Certifications & Insurance Credentials | Mega Contracting NY",
  },
  description:
    "Verify our full New York City contractor licensing credentials, DOB license #NYC-2005-8942, DOT permit qualifications, and $5,000,000 commercial liability insurance.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/licenses",
  },
  openGraph: {
    title: "Licenses, Certifications & Insurance Credentials | Mega Contracting NY",
    description:
      "Verify our full New York City contractor licensing credentials, DOB license #NYC-2005-8942, DOT permit qualifications, and $5,000,000 commercial liability insurance.",
    url: "https://www.megacontractingnyc.com/licenses",
    siteName: "Mega Contracting NY Group",
    locale: "en_US",
    type: "website",
  },
};

export default function LicensesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contractor Licenses & Insurance Credentials",
    "description": "Official licenses, insurances, and compliance credentials of Mega Contracting NY Group.",
    "url": "https://www.megacontractingnyc.com/licenses",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.megacontractingnyc.com" },
        { "@type": "ListItem", "position": 2, "name": "Licenses & Credentials", "item": "https://www.megacontractingnyc.com/licenses" }
      ]
    }
  };
  const credentials = [
    {
      title: "NYC Department of Buildings (DOB) License",
      number: "GC License #NYC-2005-8942",
      issuer: "NYC Department of Buildings",
      desc: "Authorized to pull general contracting, structural masonry, roofing, facade restoration, and scaffolding permits throughout NYC.",
      badge: "Verified Active",
    },
    {
      title: "NYC Department of Transportation (DOT) Permitting",
      number: "DOT Permit Acc. #NY-DOT-449102",
      issuer: "NYC Department of Transportation",
      desc: "Certified for sidewalk violation removals, curb cuts, roadway paving, street opening, and pedestrian ramp compliance.",
      badge: "Fully Certified",
    },
    {
      title: "Comprehensive General Liability Insurance",
      number: "Policy Limit: $5,000,000 Aggregate",
      issuer: "A+ Rated Commercial Underwriters",
      desc: "Full comprehensive general liability and completed operations insurance protecting clients, property owners, and job sites.",
      badge: "Insured",
    },
    {
      title: "Workers' Compensation & Disability Coverage",
      number: "Statutory Coverage (NY State Compliant)",
      issuer: "NYS Workers' Compensation Board",
      desc: "All technicians, crews, and project managers are 100% covered under NY State statutory workers' compensation standards.",
      badge: "Compliant",
    },
    {
      title: "OSHA 30-Hour Construction Safety Certification",
      number: "SST & Site Safety Cards Active",
      issuer: "U.S. Occupational Safety and Health Administration",
      desc: "Mandatory site safety training (SST) and OSHA 30 standards enforced on 100% of residential, commercial, and high-rise work sites.",
      badge: "Safety First",
    },
    {
      title: "EPA Lead-Safe Certified Firm (RRP)",
      number: "EPA Certification #NAT-F192841-1",
      issuer: "U.S. Environmental Protection Agency",
      desc: "Certified lead-safe firm authorized for renovation, repair, and painting in historic pre-1978 NYC residential and public properties.",
      badge: "EPA Certified",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-red-600" />
            <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
              Official Verification & Compliance
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight font-heading mb-6">
            Our Licenses, <span className="text-red-600">Certifications &amp; Credentials</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Mega Contracting NY Group operates with strict adherence to New York City building codes, 
            Department of Buildings (DOB) regulations, and industry safety standards. Every project is fully bonded, 
            permitted, and backed by comprehensive multi-million dollar liability insurance.
          </p>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-red-600">100% Insured &amp; Bonded</span>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-gray-950 mt-2 font-heading">
              Our Active Regulatory Credentials
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              We provide formal Certificates of Insurance (COI) naming building owners, landlords, architects, 
              and property managers as additional insured before commencement of any project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:border-red-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-xl bg-red-50 text-red-600">
                      <ShieldCheck className="w-6 h-6" />
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200">
                      {cred.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{cred.title}</h3>
                  <div className="text-xs font-mono font-bold text-red-600 mb-3 bg-red-50/50 p-2 rounded border border-red-100">
                    {cred.number}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{cred.desc}</p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span>Authority:</span>
                  <span className="font-semibold text-gray-800">{cred.issuer}</span>
                </div>
              </div>
            ))}
          </div>

          {/* COI Request Callout */}
          <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-3">
              Need a Certificate of Insurance (COI) for your building?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              We generate same-day custom Certificates of Insurance specifying your management company, building address, and required endorsement language.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-md"
              >
                Request COI &amp; Estimate
              </Link>
              <a
                href="tel:+19148043000"
                className="px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
              >
                Call +1 (914) 804-3000
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </>
);
}
