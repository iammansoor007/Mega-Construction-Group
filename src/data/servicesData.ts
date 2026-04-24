import {
  Wrench, Home, Building2, Sun, CloudRain, Shield, TreePine,
  Droplets, Hammer, Square, Layout, Building, Truck, Ruler,
  PaintBucket, HardHat, Landmark, AlertTriangle
} from "lucide-react";

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
  benefits?: Benefit[];
  process?: string[];
  faqs?: FAQ[];
  stats?: { label: string; value: string }[];
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
  categoryBenefits?: Benefit[];
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
    categoryBenefits: [
      { title: "20+ Years Experience", description: "Two decades of mastering NY's complex roofing requirements.", icon: "Award" },
      { title: "Certified Installers", description: "Master Elite status with leading material manufacturers.", icon: "ShieldCheck" },
      { title: "Rapid Response", description: "Emergency repair teams ready for any weather-related damage.", icon: "Clock" }
    ],
    subcategories: [
      {
        id: "shingle-roofing",
        title: "Shingle Roofing",
        description: "Premium asphalt and wood shingle solutions for residential homes.",
        longDescription: "Our shingle roofing provides exceptional durability and aesthetic variety, ensuring your home is protected and beautiful. We utilize advanced multi-layer systems that exceed industry standards for wind and impact resistance.",
        features: ["Impact Resistance", "Algae Protection", "Custom Colors"],
        image: "/assets/roofingmain.jpg",
        stats: [
          { label: "Wind Rating", value: "130 MPH" },
          { label: "Warranty", value: "50 Years" },
          { label: "Install Time", value: "2-3 Days" }
        ],
        benefits: [
          { title: "High-Performance Underlayment", description: "Superior water barrier compared to standard felt paper.", icon: "Droplets" },
          { title: "Enhanced Ventilation", description: "Optimized airflow to extend the life of your roof and reduce energy costs.", icon: "Wind" },
          { title: "GAF Certified", description: "Installed by factory-trained professionals using premium materials.", icon: "Award" }
        ],
        process: [
          "Complete Tear-off & Inspection",
          "Deck Preparation & Repair",
          "Underlayment & Drip Edge Installation",
          "Shingle Layout & Fastening",
          "Ridge Vent & Final Sealing"
        ],
        faqs: [
          { question: "How long does a shingle roof last?", answer: "Modern architectural shingles typically last 25-30 years, with some premium options reaching 50 years." },
          { question: "Can you install shingles over my existing roof?", answer: "While possible, we recommend a full tear-off to inspect the underlying structure for rot or damage." }
        ]
      },
      {
        id: "flat-roofing",
        title: "Flat Roofing",
        description: "Specialized systems for modern commercial and residential flat roofs.",
        longDescription: "Expert installation of TPO and EPDM membranes designed for maximum longevity and water resistance in urban environments. We handle complex drainage and HVAC curb integration for commercial properties.",
        features: ["Waterproof Membrane", "UV Protection", "Seamless Finish"],
        image: "/assets/rooffair.jpg",
        stats: [
          { label: "Reflectivity", value: "85%" },
          { label: "Seamlessness", value: "100%" },
          { label: "Avg Lifespan", value: "25 Years" }
        ],
        benefits: [
          { title: "Thermal Efficiency", description: "White membranes reflect UV rays, significantly lowering cooling costs.", icon: "Sun" },
          { title: "Zero Leakage Guarantee", description: "Heat-welded seams are stronger than the material itself.", icon: "Shield" },
          { title: "Lightweight Design", description: "Minimal structural load compared to traditional gravel roofs.", icon: "Scale" }
        ],
        process: [
          "Substrate Cleaning & Levelling",
          "Insulation Board Installation",
          "Membrane Layout & Mechanical Fastening",
          "Robot Heat Welding of Seams",
          "Detailing Flashings & Penetrations"
        ],
        faqs: [
          { question: "What is the best material for flat roofs?", answer: "TPO (Thermoplastic Polyolefin) is currently the industry leader for energy efficiency and durability." },
          { question: "Do flat roofs drain well?", answer: "We install tapered insulation systems to create positive drainage and eliminate ponding water." }
        ]
      },
      {
        id: "tpo-roofing",
        title: "TPO Roofing",
        description: "Industrial-grade thermoplastic roofing systems for efficiency and durability.",
        longDescription: "TPO is the ideal choice for heat-reflective and energy-efficient roofing. It's particularly effective for large-scale commercial structures needing long-term protection against New York's variable climate.",
        features: ["Energy Efficient", "Heat Welding", "Sustainability"],
        image: "/assets/megaservice7.jpg",
        stats: [
          { label: "Solar Reflectance", value: "0.87" },
          { label: "Strength", value: "Industrial" },
          { label: "Thickness", value: "60-80 Mil" }
        ],
        benefits: [
          { title: "Heat-Reflective Surface", description: "Reduces 'Urban Heat Island' effect and cooling loads.", icon: "Zap" },
          { title: "Chemical Resistance", description: "Resistant to grease, chemicals, and industrial pollutants.", icon: "FlaskConical" },
          { title: "Eco-Friendly", description: "100% recyclable material with zero VOC emissions during install.", icon: "Leaf" }
        ],
        process: [
          "Old Roof Removal & Prep",
          "Insulation Attachment",
          "TPO Sheet Layout",
          "Mechanical & Heat Weld Seaming",
          "Perimeter Flashing & Details"
        ]
      },
      {
        id: "leakage-repair",
        title: "Leakage Repair",
        description: "Precision diagnostics and repair for all types of roof leaks.",
        longDescription: "We use thermal imaging and expert inspections to locate and seal leaks before they cause structural damage. Our rapid-response teams are equipped with the latest diagnostic tools.",
        features: ["Thermal Imaging", "Flash Repairs", "Waterproofing", "Roof Repairs"],
        image: "/assets/roofing.jpg",
        stats: [
          { label: "Response", value: "24 Hours" },
          { label: "Accuracy", value: "98%" },
          { label: "Repairs", value: "Permanent" }
        ],
        benefits: [
          { title: "Non-Invasive Detection", description: "Thermal cameras find moisture trapped behind walls without cutting.", icon: "Eye" },
          { title: "Emergency Tarping", description: "Immediate protection to stop active water entry during storms.", icon: "ShieldAlert" },
          { title: "Permanent Fixes", description: "We address the root cause, not just the symptom.", icon: "CheckCircle" }
        ],
        process: [
          "Emergency Water Mitigation",
          "Diagnostic Thermal Scanning",
          "Defect Isolation & Prep",
          "Component Repair or Replace",
          "Water Testing Verification"
        ]
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
    categoryBenefits: [
      { title: "Artisan Craftsmen", description: "Specialized masons trained in historic restoration techniques.", icon: "Paintbrush" },
      { title: "Structural Integrity", description: "Repairs that reinforce and protect your building's skeleton.", icon: "Lock" },
      { title: "Heritage Grade", description: "Authentic materials used for landmark-protected properties.", icon: "Landmark" }
    ],
    subcategories: [
      {
        id: "brick-work",
        title: "Brick Work",
        description: "Expert bricklaying and heritage brick restoration.",
        longDescription: "From new brick construction to historic building restoration, our masons deliver precise and durable brick work with meticulous attention to detail. We specialize in matching mortar colors and brick textures for seamless repairs.",
        features: ["Heritage Restoration", "Custom Brick Patterns", "Tuck Pointing"],
        image: "/assets/merabrickwork.jpeg",
        stats: [
          { label: "Mortar Strength", value: "Grade S" },
          { label: "Match Accuracy", value: "99%" },
          { label: "Experience", value: "15+ Years" }
        ],
        benefits: [
          { title: "Structural Re-pointing", description: "Removal of decayed mortar to restore compressive strength.", icon: "Layers" },
          { title: "Aesthetic Continuity", description: "Specialized color matching for historic NYC brownstones.", icon: "Palette" },
          { title: "Water Repellency", description: "Siloxane-based sealants to prevent efflorescence and spalling.", icon: "Droplets" }
        ],
        process: [
          "Surface Grinding & Preparation",
          "Mortar Color Customization",
          "Precision Pointing Application",
          "Brick Replacement (as needed)",
          "Acid Wash & Sealant Treatment"
        ]
      },
      {
        id: "facade-restoration",
        title: "Facade Restoration",
        description: "Complete revitalization of building exteriors.",
        longDescription: "Our facade restoration services include cleaning, brick replacement, and stone carving for historic and modern buildings. We handle FISP (Local Law 11) compliance and safety inspections.",
        features: ["Stone Carving", "Steam Cleaning", "Brick Tinting", "Facade Repair"],
        image: "/assets/megaservice8.jpg",
        stats: [
          { label: "Law 11", value: "Compliant" },
          { label: "Aesthetics", value: "Restored" },
          { label: "Longevity", value: "Extensive" }
        ],
        benefits: [
          { title: "Curb Appeal Boost", description: "Restore the original majesty of your building's exterior.", icon: "Sparkles" },
          { title: "Compliance Experts", description: "Navigating NYC DOB and Landmark Commission regulations.", icon: "ClipboardCheck" },
          { title: "Long-term Value", description: "Prevents water infiltration that leads to structural decay.", icon: "TrendingUp" }
        ],
        process: [
          "Code Compliance Inspection",
          "Steam & Chemical Cleaning",
          "Structural Masonry Repairs",
          "Architectural Detailing",
          "Protection & Sealing"
        ]
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
    categoryBenefits: [
      { title: "Turnkey Solutions", description: "From design to final inspection, we handle every detail.", icon: "Key" },
      { title: "Quality Materials", description: "Sourcing premium woods, stones, and fixtures.", icon: "Gem" },
      { title: "Fixed Timelines", description: "We respect your home and your schedule.", icon: "Calendar" }
    ],
    subcategories: [
      {
        id: "kitchen-renovation",
        title: "Kitchen Renovation",
        description: "Transforming your kitchen with custom cabinetry and modern layouts.",
        longDescription: "Complete kitchen overhauls from plumbing and electrical to the final installation of cabinets, countertops, and backsplash. We focus on ergonomic flow and premium aesthetics.",
        features: ["Custom Cabinets", "Stone Counters", "Modern Plumbing"],
        image: "/assets/kitchen-bath.jpg",
        stats: [
          { label: "Home Value", value: "+25%" },
          { label: "Efficiency", value: "High" },
          { label: "Design", value: "Bespoke" }
        ],
        benefits: [
          { title: "Increased ROI", description: "Kitchen upgrades offer the highest return on home value.", icon: "DollarSign" },
          { title: "Optimized Workflow", description: "Designed for the modern chef and family living.", icon: "ChefHat" },
          { title: "Energy-Efficient Tech", description: "Integration of smart, low-consumption appliances.", icon: "Zap" }
        ],
        process: [
          "Initial Design & Planning",
          "Demolition & Structural Prep",
          "Plumbing & Electrical ROUGH-IN",
          "Cabinetry & Countertop Install",
          "Finish Carpentry & Appliances"
        ]
      },
      {
        id: "bathroom-renovation",
        title: "Bathroom Renovation",
        description: "Spa-like bathroom renovations with luxury tiling.",
        longDescription: "Comprehensive bathroom renovation including waterproofing, luxury tile work, and premium fixture installation. We specialize in curbless showers and custom wet rooms.",
        features: ["Shower Systems", "Waterproofing", "Tile Artistry"],
        image: "/assets/megabathroom.jpeg",
        stats: [
          { label: "Spa Grade", value: "Platinum" },
          { label: "Waterproofing", value: "Certified" },
          { label: "Tiling", value: "Precision" }
        ],
        benefits: [
          { title: "Zero-Leak Wetrooms", description: "Schluter-System certified waterproofing for life-long protection.", icon: "Droplets" },
          { title: "Luxury Heated Floors", description: "Electric radiant heating for ultimate comfort.", icon: "Thermometer" },
          { title: "Water Conservation", description: "High-efficiency fixtures that don't compromise on pressure.", icon: "Cloud" }
        ],
        process: [
          "Protection & Demolition",
          "Subfloor & Wall Prep",
          "Waterproofing & Flood Test",
          "Luxury Tile Installation",
          "Fixture Fitting & Trim"
        ]
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
    categoryBenefits: [
      { title: "DOB Experts", description: "Deep knowledge of NYC building codes and violation removal.", icon: "Scale" },
      { title: "Industrial Strength", description: "High-PSI concrete mixes for maximum durability.", icon: "Box" },
      { title: "Precision Levelling", description: "Ensuring perfect pitch and drainage on all surfaces.", icon: "Crosshair" }
    ],
    subcategories: [
      {
        id: "dob-violation-removal",
        title: "DOB Violation Removal",
        description: "Expert assistance to resolve Department of Buildings violations.",
        longDescription: "We specialize in fixing sidewalk, foundation, and structural issues that lead to DOB citations. We handle the entire process from filing permits to the final sign-off inspection.",
        features: ["Permit Filing", "Code Compliance", "Expedited Repairs"],
        image: "/assets/megaservice5.jpg",
        stats: [
          { label: "Sign-off", value: "Guaranteed" },
          { label: "Fines", value: "Eliminated" },
          { label: "Permits", value: "Expedited" }
        ],
        benefits: [
          { title: "Lien Removal", description: "Clear your property title and avoid mounting fines.", icon: "FileCheck" },
          { title: "Expedited Service", description: "Priority scheduling for time-sensitive violation windows.", icon: "FastForward" },
          { title: "Legal Representation", description: "We work directly with inspectors to satisfy requirements.", icon: "Gavel" }
        ],
        process: [
          "Violation Analysis & Search",
          "DOB/DOT Permit Filing",
          "Correctional Construction",
          "Final Inspection Call",
          "Dismissal of Violation"
        ]
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
        id: "eifs-systems",
        title: "EIFS Systems",
        description: "Exterior Insulation and Finish Systems for superior thermal protection.",
        longDescription: "We specialize in EIFS, providing high-performance insulation and durable, attractive exterior finishes. This modern solution drastically reduces energy costs.",
        features: ["Energy Efficiency", "Crack Resistance", "Modern Aesthetics"],
        image: "/assets/megaservice1.jpg",
        benefits: [
          { title: "Thermal Bridge Elimination", description: "Continuous insulation layer prevents heat loss through studs.", icon: "Thermometer" },
          { title: "Crack Resistance", description: "Flexible base coats accommodate building movement.", icon: "RefreshCw" },
          { title: "Design Flexibility", description: "Architectural shapes and details are easily incorporated.", icon: "Box" }
        ]
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
        id: "design-build",
        title: "Design-Build",
        description: "Seamless integration of architectural design and expert construction.",
        longDescription: "Our design-build approach streamlines your custom home project, handling everything from initial blueprints to final construction under one roof.",
        features: ["Architectural Services", "Streamlined Workflow", "Single Point of Contact"],
        image: "/assets/megacustomhome.jpg",
        benefits: [
          { title: "Reduced Timeline", description: "Construction can begin while final design details are refined.", icon: "Zap" },
          { title: "Budget Control", description: "Design is developed in parallel with construction cost estimates.", icon: "DollarSign" },
          { title: "Accountability", description: "One team responsible for both the design and the build.", icon: "CheckCircle" }
        ]
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
        id: "rapid-deployment",
        title: "Rapid Deployment",
        description: "Immediate response team for urgent construction emergencies.",
        longDescription: "Our rapid deployment team is on call 24/7 to address structural failures, fire damage, or any urgent property security needs.",
        features: ["Immediate Dispatch", "On-site Assessment", "Safety First"],
        image: "/assets/megaemergencyrepair.jpg",
        benefits: [
          { title: "Instant Stabilization", description: "Shoring and bracing to prevent further collapse.", icon: "Anchor" },
          { title: "Water Extraction", description: "Commercial-grade pumps for sudden flooding events.", icon: "Droplets" },
          { title: "Security Restoration", description: "Boarding up compromised access points immediately.", icon: "Lock" }
        ]
      }
    ]
  }
];

export const getServiceById = (id: string) => servicesData.find(s => s.id === id);
export const getSubCategory = (serviceId: string, subId: string) => {
  const service = getServiceById(serviceId);
  return service?.subcategories.find(sub => sub.id === subId);
};
