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
        features: ["Thermal Imaging", "Flash Repairs", "Waterproofing", "Roof Repairs"],
        image: "/assets/roofing.jpg"
      },
      {
        id: "roof-replacement",
        title: "Roof Replacement",
        description: "Professional roof replacement for aging or damaged systems.",
        longDescription: "Our full roof replacement services ensure your property is protected with the highest quality materials and expert craftsmanship.",
        features: ["Full Gut & Replace", "Premium Shingles", "Warranty Protected"],
        image: "/assets/megaroofingreal.jpeg"
      },
      {
        id: "roof-installation",
        title: "Roof Installation",
        description: "Expert installation of new roofing systems for all types of buildings.",
        longDescription: "We specialize in new roof installations for residential and commercial projects, ensuring long-term durability and efficiency.",
        features: ["New Construction", "Additions", "Certified Installers"],
        image: "/assets/roofingmain.jpg"
      },
      {
        id: "roof-inspection",
        title: "Roof Inspection",
        description: "Comprehensive roof health assessments and diagnostics.",
        longDescription: "Regular roof inspections help identify issues early, saving you from costly repairs down the line. We provide detailed reports and recommendations.",
        features: ["Structural Assessment", "Drainage Check", "Drone Inspection"],
        image: "/assets/rooffair.jpg"
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
    features: ["Brick Work"],
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
        features: ["Stone Carving", "Steam Cleaning", "Brick Tinting", "Facade Repair", "Structural & Interior Restoration"],
        image: "/assets/megaservice8.jpg"
      },
      {
        id: "retaining-walls",
        title: "Retaining Walls",
        description: "Structural and decorative retaining wall construction.",
        longDescription: "We design and build durable retaining walls that manage landscapes, prevent erosion, and enhance your property's aesthetics.",
        features: ["Stone Walls", "Concrete Blocks", "Erosion Control"],
        image: "/assets/concrete-masonry.jpg"
      },
      {
        id: "patios",
        title: "Patios",
        description: "Custom patio design and installation for outdoor living.",
        longDescription: "Transform your outdoor space with premium paver, stone, or concrete patios built for comfort and durability.",
        features: ["Paver Patios", "Stone Work", "Outdoor Living"],
        image: "/assets/megaservice4.jpg"
      },
      {
        id: "stair-repair-building",
        title: "Stair Repair & Building",
        description: "Safe and durable stair construction and restoration.",
        longDescription: "From building new concrete stairs to restoring historic entryways, we ensure safety and aesthetic appeal.",
        features: ["Concrete Stairs", "Stone Steps", "Safety Rails"],
        image: "/assets/merabrickwork.jpeg"
      },
      {
        id: "fire-escapes",
        title: "Fire Escapes",
        description: "Professional repair and maintenance of building fire escapes.",
        longDescription: "We ensure your fire escapes are safe, secure, and compliant with local safety codes through expert repair and painting.",
        features: ["Structural Repair", "Safety Inspection", "Scraping & Painting"],
        image: "/assets/megaservice6.jpg"
      },
      {
        id: "chimney-caps-rebuilds",
        title: "Chimney Caps & Rebuilds",
        description: "Expert chimney restoration and structural rebuilding.",
        longDescription: "Our masons specialize in chimney repair, from installing new caps to full structural rebuilds for safety and performance.",
        features: ["Chimney Caps", "Brick Rebuilding", "Liner Installation"],
        image: "/assets/megaservice7.jpg"
      },
      {
        id: "waterproofing-solutions",
        title: "Waterproofing",
        description: "Comprehensive waterproofing for walls, masonry, and balconies.",
        longDescription: "Protect your structure from water damage with our specialized waterproofing solutions for all exterior and interior surfaces.",
        features: ["Wall Waterproofing", "Masonry Waterproofing", "Exterior Waterproofing", "Basement Waterproofing", "Balcony Waterproofing"],
        image: "/assets/megaroofingreal.jpeg"
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
    features: ["DOB Violation Removal", "Sidewalk Repairs", "Foundations", "Driveway Repair"],
    subcategories: [
      {
        id: "dob-violation-removal",
        title: "DOB Violation Removal",
        description: "Expert assistance and construction to resolve Department of Buildings violations.",
        longDescription: "We specialize in fixing sidewalk, foundation, and structural issues that lead to DOB citations, handling everything from construction to sign-off.",
        features: ["Permit Filing", "Code Compliance", "Expedited Repairs", "Sidewalk Violation Removal"],
        image: "/assets/megaservice5.jpg"
      },
      {
        id: "driveway-repair",
        title: "Driveway Repair",
        description: "Premium driveway installation and restoration services.",
        longDescription: "We specialize in driveway repair and installation, using high-quality materials to ensure durability and lasting curb appeal for your property.",
        features: ["Custom Paver Patterns", "Concrete Driveways", "Drainage Solutions", "Resurfacing"],
        image: "/assets/megaservice4.jpg"
      },
      {
        id: "sidewalk-violation-removal",
        title: "Sidewalk Violation Removal",
        description: "Expert assistance for Department of Buildings sidewalk violations.",
        longDescription: "We specialize in resolving NYC DOT and DOB sidewalk violations, handling everything from permit filing to final inspection and sign-off.",
        features: ["Permit Filing", "Code Compliance", "Expedited Repairs", "DOT Sign-off"],
        image: "/assets/megaservice5.jpg"
      },
      {
        id: "sidewalk-installation",
        title: "Sidewalk Installation",
        description: "New concrete sidewalk construction and installation.",
        longDescription: "Our team provides professional sidewalk installation for new construction and property additions, ensuring full compliance with NYC standards.",
        features: ["New Construction", "Reinforced Concrete", "Standard Compliance"],
        image: "/assets/excavation.jpg"
      },
      {
        id: "sidewalk-replacement",
        title: "Sidewalk Replacement",
        description: "Complete removal and replacement of damaged sidewalks.",
        longDescription: "We provide full-scale sidewalk replacement services, removing old, cracked, or hazardous concrete and replacing it with premium, durable surfaces.",
        features: ["Full Gut & Replace", "Safety Standards", "Durable Finish"],
        image: "/assets/concrete-masonry.jpg"
      },
      {
        id: "sidewalk-repair",
        title: "Sidewalk Repair",
        description: "Precision repair for cracks, trips, and localized sidewalk damage.",
        longDescription: "Our sidewalk repair services address localized issues like cracks and uneven surfaces to ensure safety and prevent further deterioration.",
        features: ["Crack Filling", "Leveling", "Patch Work"],
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
        features: [
          "Shower Systems", "Waterproofing", "Tile Artistry",
          "Bathroom vanity & cabinet installation", "Shower & tub installation",
          "Bathroom tile installation", "Small bathroom remodeling", "Full bathroom renovation"
        ],
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
