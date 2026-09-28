import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Lock, ShieldCheck, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Mega Contracting NY Group",
  },
  description:
    "Read the privacy policy of Mega Contracting NY Group regarding information collection, client data privacy protection, New York SHIELD Act compliance, and quote requests.",
  alternates: {
    canonical: "https://www.megacontractingnyc.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Mega Contracting NY Group",
    description: "Read the privacy policy of Mega Contracting NY Group regarding information collection, client data privacy protection, New York SHIELD Act compliance, and quote requests.",
    url: "https://www.megacontractingnyc.com/privacy",
    siteName: "Mega Contracting NY Group",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Privacy policy and client data protection practices for Mega Contracting NY Group.",
    "url": "https://www.megacontractingnyc.com/privacy",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.megacontractingnyc.com" },
        { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.megacontractingnyc.com/privacy" }
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
              Data Protection &amp; Confidentiality
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight font-heading mb-6">
            Privacy <span className="text-red-600">Policy</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Your privacy is of utmost importance to us. This policy details how Mega Contracting NY Group collects,
            safeguards, and manages your personal information when requesting estimates or engaging our contracting services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you submit a contact request, request an on-site consultation, or engage our construction services, we may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Contact details: Name, email address, telephone number, and mailing address.</li>
              <li>Project details: Job site address, building type, scope of work, architectural drawings, and violation notices.</li>
              <li>Technical usage data: Browser type, IP address, page views, and analytical session data to optimize website performance.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We collect information strictly for legitimate commercial and project execution purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Preparing accurate written construction estimates and proposals.</li>
              <li>Scheduling site visits, inspections, and project milestone consultations.</li>
              <li>Filing mandatory municipal building permits with NYC DOB and DOT on your behalf.</li>
              <li>Direct customer service communications regarding your project status.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">3. We Never Sell Your Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Mega Contracting NY Group will never sell, lease, or monetize your personal or property information to third-party advertisers. Data is shared solely with necessary licensed professionals (such as expeditors, structural engineers, or municipal inspectors) required to complete your permitted project.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We employ industry-standard encryption, SSL protocols, and secure cloud storage to protect your contact records and property documents against unauthorized access, loss, or disclosure. Administrative access is restricted solely to authorized project management personnel.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">5. New York SHIELD Act Compliance</h2>
            <p className="text-gray-700 leading-relaxed">
              Mega Contracting NY Group maintains full compliance with the New York Stop Hacks and Improve Electronic Data Security (SHIELD) Act. We implement reasonable administrative, technical, and physical safeguards to protect private information of New York residents, including employee training, risk assessments, and vendor confidentiality agreements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">6. Record Retention &amp; Client Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              In accordance with NYC Department of Buildings (DOB) and Department of Consumer and Worker Protection (DCWP) licensing requirements, contract and permit documents are retained for standard statutory compliance periods. You have the right to request a summary of the personal data we hold or request record updates at any time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-950 uppercase font-heading mb-4">7. Contact Our Privacy Team</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions regarding your data or to request record deletion, please contact:
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
