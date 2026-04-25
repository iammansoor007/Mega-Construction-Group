import {
  Wrench, Home, Building2, Sun, CloudRain, Shield, TreePine,
  Droplets, Hammer, Square, Layout, Building, Truck, Ruler,
  PaintBucket, HardHat, Landmark, AlertTriangle, Zap, Wind, 
  Award, Scale, FlaskConical, Leaf, Eye, ShieldAlert, CheckCircle,
  Paintbrush, Lock, Sparkles, ClipboardCheck, TrendingUp, Key, Gem,
  Calendar, DollarSign, ChefHat, Thermometer, Cloud, FileCheck,
  FastForward, Gavel, RefreshCw, Box, Anchor, Microscope, Search,
  Compass
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
          { question: "How long does a shingle roof last?", answer: "Modern architectural shingles typically last 25-30 years, with some premium options reaching 50 years with proper maintenance." },
          { question: "Can you install shingles over my existing roof?", answer: "While possible, we recommend a full tear-off to inspect the underlying structure for rot or damage, which is required by NYC building codes in most cases." },
          { question: "What is the best brand of shingles you use?", answer: "We are GAF Master Elite contractors, meaning we use GAF's top-tier architectural shingles, but we also install Owens Corning and CertainTeed products." },
          { question: "Do you provide a warranty for shingle roofs?", answer: "Yes, we provide both a manufacturer's material warranty and our own 10-year workmanship guarantee." },
          { question: "How do I know if my shingles need replacing?", answer: "Look for curling edges, bald spots (granule loss), or cracked shingles. If your roof is over 20 years old, it's time for an inspection." }
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
          { question: "What is the best material for flat roofs?", answer: "TPO (Thermoplastic Polyolefin) is currently the industry leader for energy efficiency and durability in NYC." },
          { question: "Do flat roofs drain well?", answer: "We install tapered insulation systems to create positive drainage and eliminate ponding water, which is the main cause of flat roof failure." },
          { question: "How often should a flat roof be inspected?", answer: "We recommend bi-annual inspections (Spring and Fall) to clear drains and check for membrane punctures." },
          { question: "Can a flat roof handle heavy snow?", answer: "Yes, our industrial-grade flat roofs are engineered to support NY's snow loads, provided the underlying structure is sound." },
          { question: "What is EPDM vs TPO?", answer: "EPDM is a durable rubber membrane (black), while TPO is a heat-reflective thermoplastic (white). TPO is generally more energy-efficient." }
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
        ],
        faqs: [
          { question: "Is TPO roofing worth the cost?", answer: "Absolutely. The energy savings from its reflective properties often pay for the roof within 7-10 years." },
          { question: "How are TPO seams joined?", answer: "We use robotic hot-air welders to fuse the sheets together, creating a permanent, waterproof bond stronger than the sheet itself." },
          { question: "Does TPO puncture easily?", answer: "While flexible, TPO is highly tear and puncture-resistant. We use reinforced membranes for high-traffic commercial roofs." },
          { question: "Is TPO eco-friendly?", answer: "Yes, it is 100% recyclable and contains no toxic chemicals or plasticizers that leach out over time." },
          { question: "Can TPO be installed in winter?", answer: "Yes, TPO can be installed in cold weather, though heat-welding requires calibrated equipment for NY winters." }
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
        ],
        faqs: [
          { question: "How much does a roof leak repair cost?", answer: "Minor repairs start at $300, but the total depends on the leak's complexity and internal damage. We provide free on-site estimates." },
          { question: "Can a roof leak fix itself?", answer: "Never. Leaks only grow worse over time, leading to mold, rot, and eventual structural collapse." },
          { question: "Do you use thermal imaging?", answer: "Yes, we use FLIR thermal cameras to 'see' moisture inside ceilings and walls that isn't visible to the naked eye." },
          { question: "Will insurance cover my roof leak?", answer: "Usually, if the leak was caused by a sudden event like a storm. We assist with documentation for your insurance claim." },
          { question: "How fast can you respond to an emergency leak?", answer: "We offer 24/7 emergency response and aim to have a technician on-site within 2-4 hours in NYC." }
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
        ],
        faqs: [
          { question: "What is tuckpointing?", answer: "It's the process of removing old, crumbling mortar from joints and replacing it with new mortar to restore structural integrity." },
          { question: "How do you match 100-year-old bricks?", answer: "We source reclaimed bricks from specialized NYC yards and use custom-pigmented lime mortars to match the original heritage look." },
          { question: "Is brick repair expensive?", answer: "Small areas are affordable, but entire facade restoration is an investment. It significantly increases your property value." },
          { question: "How long does new brick work take to cure?", answer: "Initial set occurs in 24 hours, but full structural strength is reached at 28 days." },
          { question: "Can you fix cracked bricks?", answer: "Yes, we carefully remove individual damaged bricks (tooth-in) and replace them without affecting the surrounding structure." }
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
        ],
        faqs: [
          { question: "What is Local Law 11?", answer: "It's an NYC regulation requiring buildings over 6 stories to have their facades inspected every 5 years for safety." },
          { question: "Do you handle scaffolding permits?", answer: "Yes, we handle all DOT and DOB permits for sidewalk sheds and pipe scaffolding required for facade work." },
          { question: "How do you clean historic stone?", answer: "We use low-pressure steam and specialized non-acidic detergents to protect the stone's natural patina." },
          { question: "What is facade 'spalling'?", answer: "It's when the outer layer of stone or brick flakes off due to water freezing inside. We repair this with specialized breathable mortars." },
          { question: "Can you restore decorative terra cotta?", answer: "Yes, we specialize in repairing and replicating intricate terra cotta ornaments found on NYC's historic buildings." }
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
        ],
        faqs: [
          { question: "How long does a kitchen renovation take?", answer: "A full gut renovation typically takes 6-10 weeks depending on custom cabinet lead times." },
          { question: "Do I need a permit for a kitchen remodel?", answer: "If you're moving plumbing or gas lines, NYC requires a DOB permit. We handle all filing for you." },
          { question: "Can you help with the design layout?", answer: "Yes, our in-house designers create 3D renderings to help you visualize the workflow and material choices." },
          { question: "What is the best countertop material?", answer: "Quartz is currently the most popular for its durability and low maintenance, but we also install granite and marble." },
          { question: "Will I have a working kitchen during renovation?", answer: "Generally, no. We recommend setting up a temporary kitchen area during the main construction phase." }
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
        ],
        faqs: [
          { question: "How long is a bathroom out of commission?", answer: "A standard master bath renovation takes 3-4 weeks from start to finish." },
          { question: "What is a curbless shower?", answer: "It's a modern walk-in shower where the floor is flush with the rest of the bathroom, requiring advanced drainage engineering." },
          { question: "Do you use Schluter-KERDI?", answer: "Yes, we are certified Schluter installers, ensuring your bathroom is 100% waterproof and mold-resistant." },
          { question: "Can you move the toilet location?", answer: "Yes, but it requires significant plumbing work. We will assess the joist structure to see if it's feasible." },
          { question: "Is radiant floor heating expensive?", answer: "The installation is moderate, and it's very efficient to run. It's one of the top-requested features in NY renovations." }
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
        ],
        faqs: [
          { question: "How fast can you remove a DOB violation?", answer: "Repairs take days, but the DOB sign-off process can take several weeks. We expedite all filings to minimize this time." },
          { question: "What is a DOT sidewalk violation?", answer: "It's a notice that your sidewalk is a trip hazard. If not fixed, the city may repair it and bill you a premium." },
          { question: "Do you handle the paperwork?", answer: "Yes, we handle everything from hiring the engineer to filing the 'Certificate of Correction' with the DOB." },
          { question: "Will my property have a lien?", answer: "Unresolved violations can result in a lien. We work to resolve the issue before it affects your property's sale or refinancing." },
          { question: "Can I ignore a DOB violation?", answer: "No. Fines accrue daily, and it can prevent you from selling the property or obtaining a mortgage." }
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
    categoryBenefits: [
      { title: "Insulation Grade", description: "High-R value exterior insulation systems.", icon: "Sun" },
      { title: "Crack-Free Finish", description: "Flexible base coats that prevent hairline cracks.", icon: "Shield" },
      { title: "Custom Textures", description: "From smooth modern to traditional rustic finishes.", icon: "Palette" }
    ],
    subcategories: [
      {
        id: "eifs-systems",
        title: "EIFS Systems",
        description: "Exterior Insulation and Finish Systems for superior thermal protection.",
        longDescription: "We specialize in EIFS, providing high-performance insulation and durable, attractive exterior finishes. This modern solution drastically reduces energy costs.",
        features: ["Energy Efficiency", "Crack Resistance", "Modern Aesthetics"],
        image: "/assets/megaservice1.jpg",
        stats: [
          { label: "Energy Savings", value: "up to 40%" },
          { label: "R-Value", value: "High" },
          { label: "Warranty", value: "15 Years" }
        ],
        benefits: [
          { title: "Thermal Bridge Elimination", description: "Continuous insulation layer prevents heat loss through studs.", icon: "Thermometer" },
          { title: "Crack Resistance", description: "Flexible base coats accommodate building movement.", icon: "RefreshCw" },
          { title: "Design Flexibility", description: "Architectural shapes and details are easily incorporated.", icon: "Box" }
        ],
        process: [
          "Substrate Preparation",
          "Adhesive & Insulation Board Install",
          "Base Coat & Mesh Reinforcement",
          "Primer & Finish Coat Application",
          "Sealant Installation"
        ],
        faqs: [
          { question: "What is EIFS?", answer: "It's a multi-layered exterior wall system that provides superior insulation and water resistance compared to traditional stucco." },
          { question: "Is EIFS waterproof?", answer: "Yes, when installed with a proper drainage plane (EIFS with Drainage), it is one of the most water-secure systems available." },
          { question: "Can EIFS be applied over brick?", answer: "Yes, it can be mechanically fastened or adhesively attached to stable masonry surfaces." },
          { question: "How do you prevent cracks?", answer: "We use fiberglass reinforcement mesh embedded in a polymer-modified base coat to absorb building stress." },
          { question: "Does it come in different colors?", answer: "Thousands. The finish coat is acrylic-based and holds color much longer than traditional paint." }
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
    categoryBenefits: [
      { title: "Single Source", description: "One team from architecture to landscaping.", icon: "Compass" },
      { title: "Bespoke Design", description: "No templates, every home is a unique masterpiece.", icon: "Microscope" },
      { title: "Elite Craftsmanship", description: "Utilizing NY's finest master builders.", icon: "Award" }
    ],
    subcategories: [
      {
        id: "design-build",
        title: "Design-Build",
        description: "Seamless integration of architectural design and expert construction.",
        longDescription: "Our design-build approach streamlines your custom home project, handling everything from initial blueprints to final construction under one roof.",
        features: ["Architectural Services", "Streamlined Workflow", "Single Point of Contact"],
        image: "/assets/megacustomhome.jpg",
        stats: [
          { label: "Efficiency", value: "+30%" },
          { label: "ROI", value: "Premium" },
          { label: "Quality", value: "Elite" }
        ],
        benefits: [
          { title: "Reduced Timeline", description: "Construction can begin while final design details are refined.", icon: "Zap" },
          { title: "Budget Control", description: "Design is developed in parallel with construction cost estimates.", icon: "DollarSign" },
          { title: "Accountability", description: "One team responsible for both the design and the build.", icon: "CheckCircle" }
        ],
        process: [
          "Pre-Construction & Feasibility",
          "Architectural Design & Engineering",
          "Permit Acquisition & Zoning",
          "Structural Construction",
          "Interior Finishing & Handover"
        ],
        faqs: [
          { question: "What is Design-Build?", answer: "It's a method where one firm handles both the design and construction, reducing costs and communication errors." },
          { question: "How long to build a custom home?", answer: "Typically 12-18 months depending on the size, complexity, and NYC permit timelines." },
          { question: "Can I bring my own architect?", answer: "Yes, we often work with external architects while providing our build-expertise to ensure the design is constructible." },
          { question: "Do you handle zoning issues?", answer: "Yes, our team specializes in NY zoning and landmark regulations to maximize your buildable area." },
          { question: "How are costs managed?", answer: "We provide detailed, transparent cost estimates at every stage of the design to prevent budget overruns." }
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
    categoryBenefits: [
      { title: "Immediate Response", description: "Trucks loaded and ready for 24/7 dispatch.", icon: "FastForward" },
      { title: "Safety Secured", description: "Preventing further damage and securing the site.", icon: "Lock" },
      { title: "Insurance Direct", description: "We work directly with your adjuster to start claims.", icon: "FileText" }
    ],
    subcategories: [
      {
        id: "rapid-deployment",
        title: "Rapid Deployment",
        description: "Immediate response team for urgent construction emergencies.",
        longDescription: "Our rapid deployment team is on call 24/7 to address structural failures, fire damage, or any urgent property security needs.",
        features: ["Immediate Dispatch", "On-site Assessment", "Safety First"],
        image: "/assets/megaemergencyrepair.jpg",
        stats: [
          { label: "Dispatch", value: "< 60 Min" },
          { label: "Availability", value: "24/7/365" },
          { label: "Team Size", value: "Elite" }
        ],
        benefits: [
          { title: "Instant Stabilization", description: "Shoring and bracing to prevent further collapse.", icon: "Anchor" },
          { title: "Water Extraction", description: "Commercial-grade pumps for sudden flooding events.", icon: "Droplets" },
          { title: "Security Restoration", description: "Boarding up compromised access points immediately.", icon: "Lock" }
        ],
        process: [
          "Emergency Hotline Activation",
          "Mobilization & Dispatch",
          "On-site Hazard Mitigation",
          "Structural Stabilization",
          "Insurance Documentation"
        ],
        faqs: [
          { question: "What counts as a construction emergency?", answer: "Any event that compromises safety or security: collapsed roofs, major water main breaks, or fire damage." },
          { question: "Do you work on holidays?", answer: "Yes, our emergency teams are active 365 days a year, including Thanksgiving and Christmas." },
          { question: "How fast is 'rapid'?", answer: "We aim for under 60-minute dispatch from our NYC headquarters." },
          { question: "Do you work with insurance companies?", answer: "Yes, we are preferred vendors for many carriers and provide the necessary forensic documentation." },
          { question: "Can you secure a building after a fire?", answer: "Yes, we specialize in board-ups, shoring, and emergency cleaning to preserve the structure." }
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
