import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ShieldAlert, FileText, CheckCircle, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Terms of Service | Mega Contracting NY Group",
  },
  description:
    "Review the terms and conditions for contracting services with Mega Contracting NY Group, covering project estimates, payment schedules, change orders, and warranties.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Mega Contracting NY Group",
    description: "Review the terms and conditions for contracting services with Mega Contracting NY Group, covering project estimates, payment schedules, change orders, and warranties.",
    url: "https://www.megacontractingnyc.com/terms",
    siteName: "Mega Contracting NY Group",
    locale: "en_US",
    type: "website",
  },
};

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service & Contracting Agreement",
    "description": "Terms of service and contracting standards for Mega Contracting NY Group.",
    "url": "https://www.megacontractingnyc.com/terms",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.megacontractingnyc.com" },
        { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.megacontractingnyc.com/terms" }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Navbar />

      <section className="relative pt-36 pb-20 bg-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-red-600" />
            <span className="text-red-500 uppercase tracking-widest text-xs font-bold">
              Legal &amp; Contractual Terms
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight font-heading mb-6">
            Terms of <span className="text-red-600">Service</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Please read these terms and conditions carefully before engaging Mega Contracting NY Group for residential,
            commercial, or exterior restoration services across New York City.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">1. Scope of Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms &amp; Conditions govern all proposals, estimates, contracts, and general construction services provided by Mega Contracting NY Group (&ldquo;Contractor&rdquo;) to property owners, authorized agents, or commercial clients (&ldquo;Client&rdquo;). By authorizing a proposal or contract, the Client agrees to be bound by these provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">2. Estimates, Proposals &amp; Change Orders</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All written estimates and proposals are valid for thirty (30) days from issuance unless otherwise specified. Any deviation, unforeseen site condition (including hidden substrate rot, structural masonry degradation, or asbestos/lead presence), or Client-requested alteration shall constitute a written Change Order requiring mutual agreement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              NYC Department of Buildings (DOB) and Department of Transportation (DOT) permit fees, engineering filings, architectural stamps, and expeditor charges are specified in each custom agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">3. Permits, Licensing &amp; NYC Code Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              Mega Contracting NY Group holds active NYC General Contractor licenses and carries comprehensive General Liability and Workers&rsquo; Compensation insurance. Contractor will obtain all agreed municipal permits required for legal execution of work under NYC Building Code, FISP/Local Law 11, and DOT Highway rules.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">4. Payment Terms &amp; Milestone Billing</h2>
            <p className="text-gray-700 leading-relaxed">
              Payments are structured according to project milestones outlined in the signed agreement (typically an initial mobilization deposit, progress disbursements upon defined phase completion, and a final payment upon punch list completion and inspection sign-off).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">5. Warranties &amp; Guarantees</h2>
            <p className="text-gray-700 leading-relaxed">
              We stand behind our craftsmanship. Roofing systems, masonry repointing, facade waterproofing, and structural repairs include designated Contractor workmanship warranties in addition to manufacturer material warranties (such as GAF, Firestone, Carlisle, or Parex).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">6. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For inquiries regarding contracts, billing, or legal notices, contact our headquarters:
            </p>
            <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 text-sm space-y-2">
              <p><strong>Mega Contracting NY Group</strong></p>
              <p>3044 Radcliff Ave, Bronx, NY 10469</p>
              <p>Phone: <a href="tel:+19148043000" className="text-red-600 font-bold hover:underline">+1 (914) 804-3000</a></p>
              <p>Email: <a href="mailto:info@megacontractinggroup.com" className="text-red-600 font-bold hover:underline">info@megacontractinggroup.com</a></p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  </>
);
}
