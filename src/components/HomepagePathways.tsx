import Link from "next/link";
import { Building2, Home, AlertTriangle, ArrowRight } from "lucide-react";

export default function HomepagePathways() {
  const pathways = [
    {
      title: "For building owners & property managers",
      icon: Building2,
      links: [
        { label: "Facade Restoration", href: "/services/masonry-work/facade-restoration" },
        { label: "Parapet Wall Repair", href: "/services/masonry-work/parapet-wall" },
        { label: "Brick Pointing & Grinding", href: "/services/masonry-work/brick-grinding-pointing" },
        { label: "Foundation Work", href: "/services/concrete-services/foundation-work" },
        { label: "Sidewalk Repair", href: "/services/concrete-services/sidewalk-repair" },
        { label: "Roof Leak Repair", href: "/services/roofing-services/roof-leakage-repair" },
      ],
    },
    {
      title: "For homeowners",
      icon: Home,
      links: [
        { label: "Kitchen Renovation", href: "/services/home-renovation/kitchen-renovation" },
        { label: "Bathroom Renovation", href: "/services/home-renovation/bathroom-renovation" },
        { label: "Basement Renovation", href: "/services/home-renovation/basement-renovation" },
        { label: "Interior Remodeling", href: "/services/home-renovation/interior-remodeling" },
      ],
    },
    {
      title: "Emergency repairs",
      icon: AlertTriangle,
      links: [
        { label: "24/7 Emergency Repairs", href: "/services/emergency-service/emergency-24-7" },
        { label: "Rapid Deployment Response", href: "/services/emergency-service/rapid-deployment" },
        { label: "Emergency Board-Up Service", href: "/services/emergency-service/board-up-service" },
        { label: "Building Safety Assessment", href: "/services/emergency-service/safety-assessment" },
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, idx) => {
            const IconComp = pathway.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="p-3 rounded-xl bg-red-50 text-red-600">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-950 font-heading uppercase tracking-tight">
                      {pathway.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {pathway.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors group"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform shrink-0" />
                          <span>{link.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

