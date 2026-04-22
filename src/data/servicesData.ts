import {
  Wrench, Home, Building2, Sun, CloudRain, Shield, TreePine,
  Droplets, Hammer, Square, Layout, Building, Truck, Ruler,
  PaintBucket, HardHat, Landmark, AlertTriangle
} from "lucide-react";

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  tag: string;
  features: string[];
  subcategories: SubCategory[];
}

export const servicesData: Service[] = [
  {
    id: "roofing-services",
    title: "Roofing Commercial and Residential",
    description: "Professional roofing solutions including shingle, flat, and TPO roofing with specialized leakage repair.",
    icon: "CloudRain",
    image: "/assets/megaroofingreal.jpeg",
    tag: "Roofing",
    features: ["Shingle Roofing", "Flat Roofing", "TPO Roofing", "Leakage Repair"],
    subcategories: [
      {
        id: "shingle-roofing",
        title: "Shingle Roofing",
        description: "Premium asphalt and wood shingle solutions for residential homes.",
        longDescription: "Our shingle roofing provides exceptional durability and aesthetic variety, ensuring your home is protected and beautiful.",
        features: ["Impact Resistance", "Algae Protection", "Custom Colors"],
        image: "/assets/roofingmain.jpg"
      },
      {
        id: "flat-roofing",
        title: "Flat Roofing",
        description: "Specialized systems for modern commercial and residential flat roofs.",
        longDescription: "Expert installation of TPO and EPDM membranes designed for maximum longevity and water resistance in urban environments.",
        features: ["Waterproof Membrane", "UV Protection", "Seamless Finish"],
        image: "/assets/rooffair.jpg"
      },
      {
        id: "tpo-roofing",
        title: "TPO Roofing",
        description: "Industrial-grade thermoplastic roofing systems for efficiency and durability.",
        longDescription: "TPO is the ideal choice for heat-reflective and energy-efficient roofing, perfect for large-scale commercial structures.",
        features: ["Energy Efficient", "Heat Welding", "Sustainability"],
        image: "/assets/megaservice7.jpg"
      },
      {
        id: "leakage-repair",
        title: "Leakage Repair",
        description: "Precision diagnostics and repair for all types of roof leaks.",
        longDescription: "We use thermal imaging and expert inspections to locate and seal leaks before they cause structural damage.",
        features: ["Thermal Imaging", "Flash Repairs", "Waterproofing"],
        image: "/assets/roofing.jpg"
      }
    ]
  },
  {
    id: "masonry-work",
    title: "Masonry Work",
    description: "Expert masonry and exterior restoration services including brick work, concrete, and heritage facade repair.",
    icon: "Hammer",
    image: "/assets/merabrickwork.jpeg",
    tag: "Structural",
    features: ["Brick Work", "Concrete Work", "Paver Driveway", "Concrete Sidewalk"],
    subcategories: [
      {
        id: "brick-work",
        title: "Brick Work",
        description: "Expert bricklaying and heritage brick restoration for residential and commercial properties.",
        longDescription: "From new brick construction to historic building restoration, our masons deliver precise and durable brick work with meticulous attention to detail.",
        features: ["Heritage Restoration", "Custom Brick Patterns", "Tuck Pointing"],
        image: "/assets/merabrickwork.jpeg"
      },
      {
        id: "concrete-work",
        title: "Concrete Work",
        description: "High-quality concrete installation and repair for structural and decorative applications.",
        longDescription: "Our concrete specialists handle everything from structural foundations to decorative surfaces, ensuring strength and longevity.",
        features: ["Reinforced Concrete", "Stamped Concrete", "Structural Repairs"],
        image: "/assets/concrete-masonry.jpg"
      },
      {
        id: "paver-driveway",
        title: "Paver Driveway",
        description: "Premium paver driveway installation and restoration for lasting curb appeal.",
        longDescription: "We install and restore paver driveways using high-quality materials that withstand New York weather while enhancing your property's value.",
        features: ["Custom Paver Patterns", "Durable Materials", "Drainage Solutions"],
        image: "/assets/megaservice4.jpg"
      },
      {
        id: "concrete-sidewalk",
        title: "Concrete Sidewalk",
        description: "DOB-compliant concrete sidewalk installation and repair across New York.",
        longDescription: "We handle all aspects of sidewalk repair and replacement, including DOB compliance, violation removal, and premium concrete finishing.",
        features: ["DOB Compliance", "Violation Removal", "ADA Standards"],
        image: "/assets/excavation.jpg"
      },
      {
        id: "parapet-wall",
        title: "Parapet Wall",
        description: "Restoration and reinforcement of building parapets for safety and aesthetics.",
        longDescription: "We specialize in the structural repair of parapet walls, ensuring compliance with local safety codes and architectural integrity.",
        features: ["Structural Reinforcement", "Coping Stone Replacement", "Waterproofing"],
        image: "/assets/megaservice6.jpg"
      },
      {
        id: "facade-restoration",
        title: "Facade Restoration",
        description: "Complete revitalization of building exteriors to their original glory.",
        longDescription: "Our facade restoration services include cleaning, brick replacement, and stone carving for historic and modern buildings.",
        features: ["Stone Carving", "Steam Cleaning", "Brick Tinting"],
        image: "/assets/megaservice8.jpg"
      }
    ]
  },
  {
    id: "concrete-services",
    title: "Concrete Services Commercial and Residential",
    description: "Comprehensive concrete solutions and specialized DOB violation removal services.",
    icon: "Square",
    image: "/assets/excavation.jpg",
    tag: "Concrete",
    features: ["DOB Violation Removal", "Sidewalk Repairs", "Foundations", "Driveways"],
    subcategories: [
      {
        id: "dob-violation-removal",
        title: "DOB Violation Removal",
        description: "Expert assistance and construction to resolve Department of Buildings violations.",
        longDescription: "We specialize in fixing sidewalk, foundation, and structural issues that lead to DOB citations, handling everything from construction to sign-off.",
        features: ["Permit Filing", "Code Compliance", "Expedited Repairs"],
        image: "/assets/megaservice5.jpg"
      }
    ]
  },
  {
    id: "home-renovation",
    title: "Home Renovation",
    description: "Complete home and interior transformation services from kitchen and bathroom renovation to full basement finishing.",
    icon: "Layout",
    image: "/assets/home-renovation.jpg",
    tag: "Interior",
    features: ["Kitchen Renovation", "Bathroom Renovation", "Basement Renovation", "Interior Remodeling"],
    subcategories: [
      {
        id: "kitchen-renovation",
        title: "Kitchen Renovation",
        description: "Transforming your kitchen with custom cabinetry, modern layouts, and premium finishes.",
        longDescription: "Complete kitchen overhauls from plumbing and electrical to the final installation of cabinets, countertops, and backsplash.",
        features: ["Custom Cabinets", "Stone Counters", "Modern Plumbing"],
        image: "/assets/kitchen-bath.jpg"
      },
      {
        id: "bathroom-renovation",
        title: "Bathroom Renovation",
        description: "Spa-like bathroom renovations with luxury tiling, modern fixtures, and waterproofing.",
        longDescription: "Comprehensive bathroom renovation including waterproofing, luxury tile work, and premium fixture installation for the ultimate bathroom experience.",
        features: ["Shower Systems", "Waterproofing", "Tile Artistry"],
        image: "/assets/megabathroom.jpeg"
      },
      {
        id: "basement-renovation",
        title: "Basement Renovation",
        description: "Transform your basement into a premium living, entertainment, or utility space.",
        longDescription: "From waterproofing and framing to full finishing with flooring and lighting, we turn underutilized basements into stunning liveable spaces.",
        features: ["Waterproofing", "Insulation", "Full Finishing"],
        image: "/assets/megaservice3.jpg"
      },
      {
        id: "interior-remodeling",
        title: "Interior Remodeling",
        description: "Comprehensive interior remodeling including sheet rock, painting, and custom flooring.",
        longDescription: "Our interior remodeling services cover everything from framing and drywall to premium paint finishes and bespoke flooring solutions.",
        features: ["Sheet Rock & Framing", "Premium Painting", "Custom Flooring"],
        image: "/assets/megaservice2.jpg"
      }
    ]
  },

  {
    id: "stucco",
    title: "Stucco Services",
    description: "Premium stucco application and repair for modern exterior finishes.",
    icon: "PaintBucket",
    image: "/assets/general-contracting.jpg",
    tag: "Exterior",
    features: ["EIFS Systems", "Stucco Repair", "Traditional Stucco", "Color Matching"],
    subcategories: [
      {
        id: "stucco-installation",
        title: "Stucco Installation",
        description: "Expert application of EIFS and traditional stucco systems.",
        longDescription: "Highly durable and aesthetic exterior finishes that provide excellent insulation and weather protection.",
        features: ["Mesh Reinforcement", "Finish Coatings", "Architectural Details"],
        image: "/assets/megaservice1.jpg"
      }
    ]
  },
  {
    id: "custom-home-building",
    title: "Custom Home Building",
    description: "Bespoke luxury home construction tailored to your exact specifications.",
    icon: "Home",
    image: "/assets/custom-home.jpg",
    tag: "Custom",
    features: ["Design-Build", "Luxury Finishes", "Smart Integration", "Project Management"],
    subcategories: [
      {
        id: "luxury-residences",
        title: "Luxury Residences",
        description: "Bespoke homes built to the highest architectural standards.",
        longDescription: "We guide you from blueprints to reality, building high-end custom homes that are as unique as their owners.",
        features: ["Architectural Design", "Premium Sourcing", "Smart Home Tech"],
        image: "/assets/megacustomhome.jpg"
      }
    ]
  },
  {
    id: "emergency-service",
    title: "Emergency Service",
    description: "24/7 dedicated support for all your emergency construction and repair needs.",
    icon: "Shield",
    image: "/assets/general-contracting.jpg",
    tag: "24/7 Support",
    features: ["24/7 Availability", "Rapid Deployment", "Board-up", "Power Failures"],
    subcategories: [
      {
        id: "24-7-response",
        title: "24/7 Response",
        description: "Dedicated round-the-clock team for any construction emergency.",
        longDescription: "Our emergency service team is always on standby to handle structural failures, fire damage, or urgent security board-ups.",
        features: ["Immediate Dispatch", "On-site Assessment", "Safety First"],
        image: "/assets/megaemergencyrepair.jpg"
      }
    ]
  }
];

export const getServiceById = (id: string) => servicesData.find(s => s.id === id);
export const getSubCategory = (serviceId: string, subId: string) => {
  const service = getServiceById(serviceId);
  return service?.subcategories.find(sub => sub.id === subId);
};
