import {
  Wrench, Home, Building2, Sun, CloudRain, Shield, TreePine,
  Droplets, Hammer, Square, Layout, Building, Truck, Ruler,
  PaintBucket, HardHat, Landmark, AlertTriangle, Zap, Wind,
  Award, Scale, FlaskConical, Leaf, Eye, ShieldAlert, CheckCircle,
  Paintbrush, Lock, Sparkles, ClipboardCheck, TrendingUp, Key, Gem,
  Calendar, DollarSign, ChefHat, Thermometer, Cloud, FileCheck,
  FastForward, Gavel, RefreshCw, Box, Anchor, Microscope, Search,
  Compass, Target, Settings, Activity, FileText, ChevronRight,
  Layers, LayoutGrid, Info, Cpu, Microscope as MicroscopeIcon,
  Construction, Ruler as RulerIcon, Hammer as HammerIcon
} from "lucide-react";

// Import the simple asset mapping
import { serviceAssets } from "./serviceAssets";

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

// Helper to get assets safely
const getAsset = (id: string) => serviceAssets[id as keyof typeof serviceAssets] || { title: id, image: "" };

export const servicesData: Service[] = [
  {
    id: "roofing-services",
    ...getAsset("roofing-services"),
    description: "Industrial-grade roofing solutions from complete replacement to precision inspection and repair.",
    icon: "CloudRain",
    tag: "Roofing",
    features: ["Shingle Roofing", "Flat Roofing", "TPO Roofing", "Leakage Repair", "Replacement", "Installation", "Inspection"],
    categoryBenefits: [
      { title: "20+ Years Experience", description: "Two decades of mastering NY's complex roofing requirements.", icon: "Award" },
      { title: "Certified Installers", description: "Master Elite status with leading material manufacturers.", icon: "ShieldCheck" },
      { title: "Rapid Response", description: "Emergency repair teams ready for any weather-related damage.", icon: "Clock" }
    ],
    subcategories: [
      {
        id: "shingle-roofing",
        ...getAsset("shingle-roofing"),
        description: "Premium asphalt and wood shingle solutions for residential homes.",
        longDescription: "Our shingle roofing provides exceptional durability and aesthetic variety, ensuring your home is protected and beautiful.",
        features: ["Impact Resistance", "Algae Protection", "Custom Colors"],
        stats: [{ label: "Wind Rating", value: "130 MPH" }, { label: "Warranty", value: "50 Years" }, { label: "Install Time", value: "2-3 Days" }],
        benefits: [
          { title: "High-Performance Underlayment", description: "Superior water barrier compared to standard felt paper.", icon: "Droplets" },
          { title: "Enhanced Ventilation", description: "Optimized airflow to extend the life of your roof.", icon: "Wind" },
          { title: "GAF Certified", description: "Installed by factory-trained professionals using premium materials.", icon: "Award" }
        ],
        process: ["Tear-off & Inspection", "Deck Preparation", "Underlayment Install", "Shingle Fastening", "Final Sealing"],
        faqs: [{ question: "How long does a shingle roof last?", answer: "25-30 years on average, with premium options reaching 50 years." }]
      },
      {
        id: "flat-roofing",
        ...getAsset("flat-roofing"),
        description: "Specialized systems for modern commercial and residential flat roofs.",
        longDescription: "Expert installation of TPO and EPDM membranes designed for maximum longevity and water resistance in urban environments.",
        features: ["Waterproof Membrane", "UV Protection", "Seamless Finish"],
        stats: [{ label: "Reflectivity", value: "85%" }, { label: "Seamlessness", value: "100%" }, { label: "Avg Lifespan", value: "25 Years" }],
        benefits: [
          { title: "Thermal Efficiency", description: "White membranes reflect UV rays, lowering cooling costs.", icon: "Sun" },
          { title: "Zero Leakage Guarantee", description: "Heat-welded seams are stronger than the material itself.", icon: "Shield" },
          { title: "Lightweight Design", description: "Minimal structural load for urban buildings.", icon: "Scale" }
        ],
        process: ["Cleaning & Levelling", "Insulation Install", "Membrane Layout", "Heat Welding", "Detailing"],
        faqs: [{ question: "What is the best material for flat roofs?", answer: "TPO is currently the industry leader for efficiency and durability in NYC." }]
      },
      {
        id: "tpo-roofing",
        ...getAsset("tpo-roofing"),
        description: "Industrial-grade thermoplastic roofing systems for efficiency.",
        longDescription: "TPO is the ideal choice for heat-reflective and energy-efficient roofing, providing long-term protection against New York's variable climate.",
        features: ["Energy Efficient", "Heat Welding", "Sustainability"],
        stats: [{ label: "Solar Reflectance", value: "0.87" }, { label: "Strength", value: "Industrial" }, { label: "Thickness", value: "60-80 Mil" }],
        benefits: [
          { title: "Heat-Reflective", description: "Reduces 'Urban Heat Island' effect and cooling loads.", icon: "Zap" },
          { title: "Chemical Resistance", description: "Resistant to grease, chemicals, and industrial pollutants.", icon: "FlaskConical" },
          { title: "Eco-Friendly", description: "100% recyclable material with zero VOC emissions.", icon: "Leaf" }
        ],
        process: ["Removal & Prep", "Insulation Attachment", "Sheet Layout", "Heat Weld Seaming", "Perimeter Flashing"],
        faqs: [{ question: "How are TPO seams joined?", answer: "We use robotic hot-air welders to fuse the sheets together." }]
      },
      {
        id: "roof-leakage-repair",
        ...getAsset("roof-leakage-repair"),
        description: "Precision diagnostics and repair for all types of roof leaks.",
        longDescription: "We use thermal imaging and expert inspections to locate and seal leaks before they cause structural damage.",
        features: ["Thermal Imaging", "Flash Repairs", "Waterproofing"],
        stats: [{ label: "Response", value: "24 Hours" }, { label: "Accuracy", value: "98%" }, { label: "Repairs", value: "Permanent" }],
        benefits: [
          { title: "Non-Invasive Detection", description: "Thermal cameras find moisture without invasive cutting.", icon: "Eye" },
          { title: "Emergency Tarping", description: "Immediate protection to stop water entry.", icon: "ShieldAlert" },
          { title: "Permanent Fixes", description: "We address the root cause, not just the symptom.", icon: "CheckCircle" }
        ],
        process: ["Mitigation", "Diagnostic Scanning", "Defect Isolation", "Component Repair", "Testing Verification"],
        faqs: [{ question: "Do you use thermal imaging?", answer: "Yes, we use FLIR thermal cameras to 'see' moisture inside ceilings and walls." }]
      },
      {
        id: "roof-replacement",
        ...getAsset("roof-replacement"),
        description: "Complete architectural roof teardown and reconstruction.",
        longDescription: "Our full replacement service includes complete structural analysis, removal of old materials, and installation of a comprehensive multi-layered roofing system.",
        features: ["Structural Analysis", "Full Teardown", "Premium Rebuild"],
        stats: [{ label: "ROI", value: "+20%" }, { label: "Longevity", value: "50 Years" }, { label: "Compliance", value: "DOB 100%" }],
        benefits: [
          { title: "Structural Integrity", description: "A fresh start for your building's primary protection.", icon: "Shield" },
          { title: "New Material Warranty", description: "Benefit from full manufacturer coverage.", icon: "CheckCircle" },
          { title: "Code Compliance", description: "Upgrading your roof to meet modern NY safety standards.", icon: "Scale" }
        ],
        process: ["Full Tear-off", "Sheathing Repair", "Ice & Water Shield", "New System Install", "Ventilation Tuning"],
        faqs: [{ question: "When should a roof be replaced?", answer: "If your roof is over 20-25 years old or has widespread leaking." }]
      },
      {
        id: "roof-installation",
        ...getAsset("roof-installation"),
        description: "Professional new construction roofing installation.",
        longDescription: "We provide precision roofing installation for new builds, working directly with architects and developers.",
        features: ["New Construction", "Architectural Alignment", "Master Craftsmanship"],
        stats: [{ label: "Precision", value: "99.9%" }, { label: "Speed", value: "Optimized" }, { label: "Aesthetic", value: "Premium" }],
        benefits: [
          { title: "Architectural Integration", description: "Roofing that perfectly complements your new design.", icon: "Layout" },
          { title: "System Synergy", description: "All components installed together for maximum efficiency.", icon: "Zap" },
          { title: "Long-term Security", description: "Built from day one with industrial-grade standards.", icon: "Lock" }
        ],
        process: ["Blueprint Review", "Structural Prep", "System Layering", "Detail Sealing", "Performance Testing"],
        faqs: [{ question: "Do you work with architects?", answer: "Yes, we frequently collaborate with design teams to ensure technical specifications are met perfectly." }]
      },
      {
        id: "roof-inspection",
        ...getAsset("roof-inspection"),
        description: "Comprehensive technical roof assessments and certification.",
        longDescription: "Using thermal imaging and physical analysis, we provide detailed reports on the health of your roofing system.",
        features: ["Drone Surveys", "Thermal Imaging", "Certification Reports"],
        stats: [{ label: "Detail", value: "Microscopic" }, { label: "Reporting", value: "24 Hours" }, { label: "Tech", value: "Advanced" }],
        benefits: [
          { title: "Early Detection", description: "Finding invisible problems before they become catastrophes.", icon: "Search" },
          { title: "Insurance Proof", description: "Certified documentation for storm damage claims.", icon: "FileText" },
          { title: "Property Value", description: "Official certification of roof health for real estate transfers.", icon: "TrendingUp" }
        ],
        process: ["Exterior Survey", "Thermal Analysis", "Internal Attic Check", "Defect Mapping", "Final Briefing"],
        faqs: [{ question: "How often should a roof be inspected?", answer: "We recommend at least once a year, or after any major NYC storm event." }]
      }
    ]
  },
  {
    id: "masonry-work",
    ...getAsset("masonry-work"),
    description: "Expert masonry and exterior restoration services for NYC's iconic structures.",
    icon: "Hammer",
    tag: "Structural",
    features: ["Brick Work", "Replacement", "Grinding & Pointing", "Parapet Walls", "Facade Restoration", "Retaining Walls", "Patios", "Steps Repair", "Fire Escapes", "Chimneys", "Waterproofing", "Rebuilds"],
    categoryBenefits: [
      { title: "Artisan Craftsmen", description: "Specialized masons trained in historic restoration.", icon: "Paintbrush" },
      { title: "Structural Integrity", description: "Repairs that reinforce your building's skeleton.", icon: "Lock" },
      { title: "Heritage Grade", description: "Authentic materials for landmark properties.", icon: "Landmark" }
    ],
    subcategories: [
      {
        id: "brick-work",
        ...getAsset("brick-work"),
        description: "Expert bricklaying and heritage brick restoration.",
        longDescription: "From new brick construction to historic building restoration, our masons deliver precise and durable brick work.",
        features: ["Heritage Restoration", "Tuck Pointing"],
        stats: [{ label: "Match Accuracy", value: "99%" }, { label: "Experience", value: "15+ Years" }],
        benefits: [{ title: "Structural Re-pointing", description: "Restoring compressive strength to old walls.", icon: "Layers" }],
        process: ["Surface Prep", "Mortar Matching", "Pointing", "Cleaning"],
        faqs: [{ question: "What is tuckpointing?", answer: "The process of replacing old mortar to restore structural integrity." }]
      },
      {
        id: "brick-replacement",
        ...getAsset("brick-replacement"),
        description: "Precision replacement of damaged or spalling bricks.",
        longDescription: "We identify and replace individual damaged bricks to maintain the structural and aesthetic integrity of your masonry.",
        features: ["Structural Integrity", "Matching Textures"],
        stats: [{ label: "Match Rate", value: "99%" }, { label: "Weather Proof", value: "100%" }],
        benefits: [{ title: "Water Protection", description: "Seals entry points for moisture.", icon: "Droplets" }],
        process: ["Extraction", "Cavity Prep", "Installation", "Sealing"],
        faqs: [{ question: "Will the new bricks match?", answer: "We source reclaimed bricks and custom-pigment mortar for a perfect match." }]
      },
      {
        id: "brick-grinding-pointing",
        ...getAsset("brick-grinding-pointing"),
        description: "Technical mortar removal and precision re-pointing.",
        longDescription: "Our specialized grinding process removes decayed mortar joints and replaces them with premium mortar.",
        features: ["Deep Grinding", "Custom Mortar"],
        stats: [{ label: "Joint Depth", value: "3/4 Inch" }, { label: "Longevity", value: "25+ Years" }],
        benefits: [{ title: "Reinforcement", description: "Restores load-bearing capacity of joints.", icon: "Lock" }],
        process: ["Grinding", "Joint Cleaning", "Pointing", "Cleanup"],
        faqs: [{ question: "How long does pointing last?", answer: "High-quality pointing lasts 25-50 years in NYC." }]
      },
      {
        id: "parapet-wall",
        ...getAsset("parapet-wall"),
        description: "Structural repair and capping for roof parapet walls.",
        longDescription: "Parapet walls are critical for roof safety and waterproofing.",
        features: ["Coping Stones", "Structural Rebuild", "Waterproofing"],
        stats: [{ label: "Safety", value: "Code A+" }, { label: "Stability", value: "Industrial" }],
        benefits: [{ title: "Roof Security", description: "Ensures the perimeter of your roof is structurally sound.", icon: "Shield" }],
        process: ["Demolition", "Masonry Rebuild", "Flashing Install", "Coping Placement"],
        faqs: [{ question: "Why do parapet walls leak?", answer: "Usually due to cracked coping stones or failed flashing." }]
      },
      {
        id: "facade-restoration",
        ...getAsset("facade-restoration"),
        description: "Complete revitalization of building exteriors.",
        longDescription: "Complete facade restoration including cleaning, stone carving, and FISP (Local Law 11) compliance.",
        features: ["Law 11 Compliance", "Stone Carving", "Steam Cleaning"],
        stats: [{ label: "Law 11", value: "Compliant" }, { label: "Longevity", value: "Extensive" }],
        benefits: [{ title: "Compliance Experts", description: "Navigating NYC DOB and Landmark regulations.", icon: "ClipboardCheck" }],
        process: ["Inspection", "Cleaning", "Repairs", "Detailing", "Sealing"],
        faqs: [{ question: "What is Local Law 11?", answer: "An NYC regulation requiring safety inspections for buildings over 6 stories." }]
      },
      {
        id: "retaining-walls",
        ...getAsset("retaining-walls"),
        description: "Structural masonry walls for soil retention and landscaping.",
        longDescription: "We build heavy-duty retaining walls using stone, brick, or reinforced concrete.",
        features: ["Soil Retention", "Drainage Systems", "Structural Masonry"],
        stats: [{ label: "PSI", value: "4000+" }, { label: "Durability", value: "Life-long" }],
        benefits: [{ title: "Erosion Control", description: "Prevents soil shifting and foundation pressure.", icon: "Activity" }],
        process: ["Excavation", "Footing Pour", "Wall Construction", "Backfill & Drainage"],
        faqs: [{ question: "Do retaining walls need drainage?", answer: "Yes, 'weep holes' and gravel backfill are essential." }]
      },
      {
        id: "patios",
        ...getAsset("patios"),
        description: "Luxury masonry patios and outdoor living spaces.",
        longDescription: "Custom-designed patios using bluestone, pavers, or brick.",
        features: ["Bluestone", "Paver Systems", "Custom Layouts"],
        stats: [{ label: "ROI", value: "High" }, { label: "Style", value: "Bespoke" }],
        benefits: [{ title: "Outdoor Living", description: "Increases usable square footage and property value.", icon: "Sun" }],
        process: ["Grading", "Sub-base Prep", "Stone Setting", "Joint Finishing"],
        faqs: [{ question: "What is the best material for a patio?", answer: "Natural bluestone is highly durable and a classic NYC aesthetic choice." }]
      },
      {
        id: "steps-repair-construction",
        ...getAsset("steps-repair-construction"),
        description: "Precision repair and rebuilding of masonry steps.",
        longDescription: "We specialize in the structural repair and complete reconstruction of front steps (stoops).",
        features: ["Stoop Restoration", "Safety Treads", "Structural Masonry"],
        stats: [{ label: "Safety", value: "100%" }, { label: "Finish", value: "Artisan" }],
        benefits: [{ title: "Curb Appeal", description: "The front stoop is the face of an NYC brownstone.", icon: "Star" }],
        process: ["Structural Demo", "Formwork/Masonry", "Finish Layer", "Safety Coating"],
        faqs: [{ question: "Can you fix crumbling brownstone steps?", answer: "Yes, we specialize in authentic brownstone patching." }]
      },
      {
        id: "fire-escapes",
        ...getAsset("fire-escapes"),
        description: "Masonry repair around fire escape anchors and safety inspections.",
        longDescription: "We repair the structural masonry around fire escape anchors to ensure they are securely fastened.",
        features: ["Anchor Repair", "Safety Inspection", "Compliance"],
        stats: [{ label: "Safety", value: "Certified" }, { label: "Compliance", value: "NYC Fire" }],
        benefits: [{ title: "Life Safety", description: "Ensuring emergency exit points are structurally secure.", icon: "ShieldAlert" }],
        process: ["Inspection", "Anchor Stabilization", "Masonry Patching", "Final Testing"],
        faqs: [{ question: "Does masonry affect fire escape safety?", answer: "Yes, loose or crumbling bricks around anchors are a major violation." }]
      },
      {
        id: "chimney-caps-rebuilds",
        ...getAsset("chimney-caps-rebuilds"),
        description: "Structural chimney restoration and weather protection.",
        longDescription: "From rebuilding crumbling chimney stacks to installing industrial-grade caps.",
        features: ["Stainless Steel Caps", "Masonry Rebuild", "Flue Repair"],
        stats: [{ label: "Draft", value: "Optimized" }, { label: "Safety", value: "A+" }],
        benefits: [{ title: "Fire Prevention", description: "Eliminating cracks and debris that cause chimney fires.", icon: "Flame" }],
        process: ["Inspection", "Stack Rebuild", "Lining Check", "Cap Installation"],
        faqs: [{ question: "Why is my chimney crumbling?", answer: "Usually due to 'freeze-thaw' cycles." }]
      },
      {
        id: "waterproofing",
        ...getAsset("waterproofing"),
        description: "Below-grade and facade waterproofing systems.",
        longDescription: "Industrial-grade waterproofing for basements, foundations, and exterior walls.",
        features: ["French Drains", "Liquid Membranes", "Exterior Sealing"],
        stats: [{ label: "Protection", value: "100%" }, { label: "Dryness", value: "Guaranteed" }],
        benefits: [{ title: "Mold Prevention", description: "Stopping water before it creates health hazards.", icon: "CloudRain" }],
        process: ["Excavation", "Membrane Apply", "Drainage Install", "Backfill"],
        faqs: [{ question: "How long does waterproofing last?", answer: "Our professional systems typically provide 20-30 years of protection." }]
      },
      {
        id: "reconstruction-rebuilds",
        ...getAsset("reconstruction-rebuilds"),
        description: "Complete structural rebuilding of masonry elements.",
        longDescription: "Comprehensive reconstructing for collapsed or unstable masonry walls and foundations.",
        features: ["Full Rebuild", "Code Compliance", "Historical Accuracy"],
        stats: [{ label: "Strength", value: "Industrial" }, { label: "Compliance", value: "100%" }],
        benefits: [{ title: "Structural Renewal", description: "Restoring the core stability of your building.", icon: "HardHat" }],
        process: ["Stabilization", "Demolition", "Architectural Rebuild", "Finishing"],
        faqs: [{ question: "Do rebuilds require permits?", answer: "Yes, all major structural masonry rebuilds require NYC DOB permits." }]
      }
    ]
  },
  {
    id: "concrete-services",
    ...getAsset("concrete-services"),
    description: "Industrial concrete solutions for NYC sidewalks, driveways, and foundations.",
    icon: "Square",
    tag: "Concrete",
    features: ["Driveway Repair", "Sidewalk Repair", "Sidewalk Replacement", "Sidewalk Violation Removal", "DOT Violation", "DOB Violation", "Foundation Work", "Backyard Concrete"],
    categoryBenefits: [
      { title: "DOT/DOB Experts", description: "Mastery of NYC sidewalk codes and violation removal.", icon: "Scale" },
      { title: "Industrial Strength", description: "High-PSI concrete for maximum durability.", icon: "Box" },
      { title: "Precision Levelling", description: "Perfect pitch and drainage on all surfaces.", icon: "Crosshair" }
    ],
    subcategories: [
      {
        id: "driveway-repair",
        ...getAsset("driveway-repair"),
        description: "Heavy-duty concrete driveway restoration and new pours.",
        longDescription: "We provide high-strength concrete driveway solutions designed to support vehicle weight.",
        features: ["Rebar Reinforcement", "Broom Finish", "Expansion Joints"],
        stats: [{ label: "PSI", value: "4500" }, { label: "Cure Time", value: "7 Days" }],
        benefits: [{ title: "Vehicle Support", description: "Reinforced to prevent cracking under weight.", icon: "Truck" }],
        process: ["Base Compaction", "Rebar Grid", "Precision Pour", "Joint Cutting"],
        faqs: [{ question: "Can a driveway handle a truck?", answer: "Yes, our reinforced 4500 PSI mix is engineered for heavy loads." }]
      },
      {
        id: "sidewalk-repair",
        ...getAsset("sidewalk-repair"),
        description: "Patching and partial replacement of cracked sidewalks.",
        longDescription: "Cost-effective solutions for individual sidewalk flags.",
        features: ["Section Replacement", "Root Management", "Code Compliance"],
        stats: [{ label: "Safety", value: "Restored" }, { label: "Code", value: "NYC Compliant" }],
        benefits: [{ title: "Trip Hazard Removal", description: "Instantly making your property safe for pedestrians.", icon: "Shield" }],
        process: ["Damaged Flag Demo", "Sub-base Leveling", "Sectional Pour", "Broom Finish"],
        faqs: [{ question: "Do you fix tree root damage?", answer: "Yes, we work with the NYC Parks Dept guidelines." }]
      },
      {
        id: "sidewalk-replacement",
        ...getAsset("sidewalk-replacement"),
        description: "Full-scale concrete sidewalk reconstruction.",
        longDescription: "Complete removal and replacement of existing sidewalks to meet all NYC DOT and DOB standards.",
        features: ["Full Demo", "DOT Standards", "Hand Finishing"],
        stats: [{ label: "Thickness", value: "4 Inch" }, { label: "Standard", value: "NYC DOT" }],
        benefits: [{ title: "Long-term Value", description: "A fresh, durable sidewalk that will last decades.", icon: "TrendingUp" }],
        process: ["Complete Excavation", "DOT Inspection Prep", "Continuous Pour", "Precision Pitching"],
        faqs: [{ question: "Does a new sidewalk need a permit?", answer: "Yes, we handle all DOT sidewalk permits and inspections for you." }]
      },
      {
        id: "sidewalk-violation-removal",
        ...getAsset("sidewalk-violation-removal"),
        description: "Legal and construction services for DOT sidewalk citations.",
        longDescription: "We specialize in resolving DOT sidewalk violations, handling everything from permit filing to final sign-off.",
        features: ["DOT Expediting", "Code Repair", "Lien Removal"],
        stats: [{ label: "Sign-off", value: "Guaranteed" }, { label: "Fines", value: "Stopped" }],
        benefits: [{ title: "Title Clearance", description: "Removing city liens that prevent property sales.", icon: "FileCheck" }],
        process: ["Violation Review", "DOT Permit Filing", "Certified Repair", "Inspector Walkthrough"],
        faqs: [{ question: "How fast can you clear a DOT violation?", answer: "Repairs take 1-2 days; city processing usually takes 4-8 weeks." }]
      },
      {
        id: "dot-violation-removal",
        ...getAsset("dot-violation-removal"),
        description: "Specialized assistance for Department of Transportation notices.",
        longDescription: "Focusing specifically on DOT-issued trip hazard and maintenance violations.",
        features: ["Trip Hazard Fix", "Pitch Correction", "DOT Filing"],
        stats: [{ label: "Accuracy", value: "100%" }, { label: "Compliance", value: "NYC DOT" }],
        benefits: [{ title: "Penalty Avoidance", description: "Stop the city from repairing the sidewalk at your expense.", icon: "Gavel" }],
        process: ["DOT Record Search", "Site Correction", "Affidavit Filing", "City Verification"],
        faqs: [{ question: "What is an Expedited Dismissal?", answer: "A process where we certify the repair directly to the DOT." }]
      },
      {
        id: "dob-violation-removal",
        ...getAsset("dob-violation-removal"),
        description: "Resolving Department of Buildings concrete and structural citations.",
        longDescription: "Handling complex DOB violations related to illegal concrete work or structural safety issues.",
        features: ["DOB Expediting", "Permit Recovery", "As-Built Filings"],
        stats: [{ label: "Status", value: "Cleared" }, { label: "Legal", value: "Handled" }],
        benefits: [{ title: "Safe Property", description: "Ensuring your building meets all DOB safety codes.", icon: "ShieldCheck" }],
        process: ["Violation Analysis", "Architectural Filing", "Corrective Work", "Final DOB Sign-off"],
        faqs: [{ question: "Can a DOB violation stop my mortgage?", answer: "Yes, lenders usually require clear DOB records before approving loans." }]
      },
      {
        id: "foundation-work",
        ...getAsset("foundation-work"),
        description: "Structural concrete foundations and underpinning.",
        longDescription: "High-strength poured concrete foundations for new builds and structural reinforcement.",
        features: ["Underpinning", "Poured Foundations", "Waterproofing"],
        stats: [{ label: "PSI", value: "4000+" }, { label: "Strength", value: "Industrial" }],
        benefits: [{ title: "Core Stability", description: "The most critical structural element of any building.", icon: "Building2" }],
        process: ["Excavation", "Shuttering", "Rebar Reinforcement", "Concrete Pour"],
        faqs: [{ question: "Do you do underpinning?", answer: "Yes, we safely deepen or reinforce foundations." }]
      },
      {
        id: "backyard-concrete",
        ...getAsset("backyard-concrete"),
        description: "Custom backyard concrete slabs and patios.",
        longDescription: "Professional backyard concrete installations including specialized drainage systems.",
        features: ["Patio Slabs", "Drainage Systems", "Broom Finish"],
        stats: [{ label: "ROI", value: "High" }, { label: "Pitch", value: "Optimized" }],
        benefits: [{ title: "Low Maintenance", description: "Durable, clean outdoor surfaces.", icon: "RefreshCw" }],
        process: ["Leveling", "Base Prep", "Reinforcement", "Final Pour"],
        faqs: [{ question: "Will my backyard drain properly?", answer: "Yes, every project includes a calculated pitch." }]
      }
    ]
  },
  {
    id: "home-renovation",
    ...getAsset("home-renovation"),
    description: "Complete interior transformation from kitchens to full gut renovations.",
    icon: "Layout",
    tag: "Interior",
    features: ["Kitchen", "Bathroom", "Basement", "Interior Remodeling"],
    categoryBenefits: [
      { title: "Turnkey Solutions", description: "From design to final inspection, we handle it all.", icon: "Key" },
      { title: "Quality Materials", description: "Sourcing premium woods, stones, and fixtures.", icon: "Gem" },
      { title: "Fixed Timelines", description: "We respect your schedule and your home.", icon: "Calendar" }
    ],
    subcategories: [
      {
        id: "kitchen-renovation",
        ...getAsset("kitchen-renovation"),
        description: "Custom cabinetry and modern kitchen layouts.",
        longDescription: "Complete kitchen overhauls including custom cabinetry, stone countertops, and plumbing/electrical integration.",
        features: ["Custom Cabinets", "Stone Counters", "Modern Plumbing"],
        stats: [{ label: "Value", value: "+25%" }, { label: "Design", value: "Bespoke" }],
        benefits: [{ title: "ROI", description: "Kitchens offer the highest return on investment.", icon: "DollarSign" }],
        process: ["Design", "Demolition", "Rough-in", "Cabinet Install", "Finishing"],
        faqs: [{ question: "How long does it take?", answer: "A full kitchen renovation typically takes 6-10 weeks." }]
      },
      {
        id: "bathroom-renovation",
        ...getAsset("bathroom-renovation"),
        description: "Luxury bathroom tiling and spa-like features.",
        longDescription: "Comprehensive bathroom renovation including waterproofing, premium tile work, and luxury fixture installation.",
        features: ["Spa Systems", "Waterproofing", "Tile Artistry"],
        stats: [{ label: "Spa Grade", value: "Platinum" }, { label: "Tiling", value: "Precision" }],
        benefits: [{ title: "Waterproofing", description: "Schluter-certified systems for life-long protection.", icon: "Droplets" }],
        process: ["Protection", "Demolition", "Waterproofing", "Tiling", "Fixtures"],
        faqs: [{ question: "Do you use Schluter systems?", answer: "Yes, we are certified installers." }]
      },
      {
        id: "basement-renovation",
        ...getAsset("basement-renovation"),
        description: "Transforming basements into functional living spaces.",
        longDescription: "Converting dark, damp basements into high-end living areas with full waterproofing.",
        features: ["Egress Windows", "Waterproofing", "Recessed Lighting"],
        stats: [{ label: "Space", value: "Maximized" }, { label: "Dryness", value: "100%" }],
        benefits: [{ title: "Increased Square Footage", description: "Doubling your home's usable living space.", icon: "Layout" }],
        process: ["Waterproofing", "Framing", "Electrical", "Insulation", "Finishing"],
        faqs: [{ question: "How do you stop basement leaks?", answer: "We use internal French drains and sump pumps." }]
      },
      {
        id: "interior-remodeling",
        ...getAsset("interior-remodeling"),
        description: "Full gut renovations and apartment transformations.",
        longDescription: "Complete interior remodeling including wall removal and high-end finish carpentry for NYC apartments.",
        features: ["Structural Changes", "Finish Carpentry", "Plastering"],
        stats: [{ label: "Quality", value: "Elite" }, { label: "Details", value: "Artisan" }],
        benefits: [{ title: "Custom Living", description: "A home tailored exactly to your lifestyle.", icon: "Sparkles" }],
        process: ["Planning", "Demolition", "Framing", "Plaster/Drywall", "Flooring/Trim"],
        faqs: [{ question: "Do you handle Co-op boards?", answer: "Yes, we handle all management paperwork and insurance." }]
      }
    ]
  },
  {
    id: "stucco",
    ...getAsset("stucco"),
    description: "Premium exterior stucco application and Californian finishes.",
    icon: "PaintBucket",
    tag: "Exterior",
    features: ["EIFS Systems", "Repair", "Traditional", "Color Matching", "Californian Stucco"],
    categoryBenefits: [
      { title: "Insulation Grade", description: "High-R value exterior insulation.", icon: "Sun" },
      { title: "Crack-Free Finish", description: "Flexible base coats that prevent cracks.", icon: "Shield" },
      { title: "Custom Textures", description: "Artisan hand-applied textures.", icon: "Palette" }
    ],
    subcategories: [
      {
        id: "eifs-systems",
        ...getAsset("eifs-systems"),
        description: "Superior exterior insulation and finish systems.",
        longDescription: "Providing high-performance thermal insulation and durable exterior finishes.",
        features: ["Energy Efficiency", "Crack Resistance"],
        benefits: [{ title: "Thermal Bridge Elimination", description: "Continuous insulation prevents heat loss.", icon: "Thermometer" }],
        process: ["Substrate Prep", "Insulation Install", "Base Coat", "Finish Application"],
        faqs: [{ question: "Is EIFS waterproof?", answer: "Yes, with proper drainage planes, it is highly water-secure." }]
      },
      {
        id: "stucco-repair",
        ...getAsset("stucco-repair"),
        description: "Restoration of cracked or damaged stucco facades.",
        longDescription: "Precision repair of stucco surfaces to prevent water ingress.",
        features: ["Crack Injection", "Color Matching"],
        stats: [{ label: "Match", value: "Exact" }, { label: "Seal", value: "100%" }],
        benefits: [{ title: "Water Ingress Stop", description: "Preventing structural rot behind the stucco.", icon: "ShieldAlert" }],
        process: ["Defect Removal", "Lath Check", "Base/Mesh", "Color Match Patch"],
        faqs: [{ question: "Can you match old stucco color?", answer: "Yes, we custom-mix pigments to match weathered finishes." }]
      },
      {
        id: "traditional-stucco",
        ...getAsset("traditional-stucco"),
        description: "Authentic 3-coat cementitious stucco systems.",
        longDescription: "High-durability traditional portland cement stucco for a rock-solid finish.",
        features: ["3-Coat System", "Fire Resistant"],
        stats: [{ label: "Strength", value: "Industrial" }, { label: "Longevity", value: "50+ Years" }],
        benefits: [{ title: "Fire Safety", description: "Traditional stucco is non-combustible.", icon: "ShieldCheck" }],
        process: ["Wire Lath", "Scratch Coat", "Brown Coat", "Finish Coat"],
        faqs: [{ question: "Is traditional stucco better than EIFS?", answer: "Traditional is harder and more impact resistant." }]
      },
      {
        id: "color-matching",
        ...getAsset("color-matching"),
        description: "Scientific color matching for exterior finishes.",
        longDescription: "Using digital analysis and hand-tinted pigments to ensure repair work is invisible.",
        features: ["Digital Analysis", "UV Stable Pigments"],
        stats: [{ label: "Accuracy", value: "99%" }, { label: "Blend", value: "Seamless" }],
        benefits: [{ title: "Invisible Repairs", description: "Maintains the uniform aesthetic of your property.", icon: "Eye" }],
        process: ["Color Sampling", "Pigment Tuning", "Test Swatch", "Final Application"],
        faqs: [{ question: "Does color fade over time?", answer: "We use high-grade UV-stable pigments." }]
      },
      {
        id: "californian-stucco",
        ...getAsset("californian-stucco"),
        description: "Premium heavy-texture traditional stucco finish.",
        longDescription: "A highly textured, artisan-applied finish that provides a unique aesthetic for luxury exteriors.",
        features: ["Heavy Texture", "Artisan Style"],
        stats: [{ label: "Texture", value: "Hand-Crafted" }, { label: "Style", value: "Premium" }],
        benefits: [{ title: "Dynamic Depth", description: "A layered look that reacts to natural light.", icon: "Sparkles" }],
        process: ["Base Prep", "Scratch Coat", "Heavy Texture Layer", "Curing", "Sealing"],
        faqs: [{ question: "What is California finish?", answer: "A heavy, rustic texture that's very popular." }]
      }
    ]
  },
  {
    id: "custom-home-building",
    ...getAsset("custom-home-building"),
    description: "Bespoke luxury construction from design to project management.",
    icon: "Home",
    tag: "Custom",
    features: ["Design-Build", "Luxury Finishes", "Project Management", "Smart Homes"],
    subcategories: [
      {
        id: "design-build",
        ...getAsset("design-build"),
        description: "Integrated architectural design and construction.",
        longDescription: "A streamlined approach handling everything from blueprints to final build under one elite team.",
        features: ["Architectural Services", "Streamlined Workflow"],
        benefits: [{ title: "Budget Control", description: "Design developed alongside cost estimation.", icon: "DollarSign" }],
        process: ["Feasibility", "Design", "Permitting", "Construction", "Handover"]
      },
      {
        id: "luxury-finishes",
        ...getAsset("luxury-finishes"),
        description: "Artisan interior finishes and premium material selection.",
        longDescription: "Specializing in exotic stones, custom millwork, and high-end plastering.",
        features: ["Custom Millwork", "Exotic Stones"],
        stats: [{ label: "Quality", value: "Museum Grade" }],
        benefits: [{ title: "Artisan Craft", description: "Finishes applied by the world's best craftsmen.", icon: "Award" }],
        process: ["Selection", "Shop Drawings", "Precision Install", "Final Polishing"],
        faqs: [{ question: "Do you source materials globally?", answer: "Yes, we source marble from Italy and hardwoods globally." }]
      },
      {
        id: "project-management",
        ...getAsset("project-management"),
        description: "Professional oversight of complex construction projects.",
        longDescription: "Managing timelines, sub-contractors, and quality control.",
        features: ["Timeline Tracking", "Quality Control"],
        stats: [{ label: "Efficiency", value: "+40%" }],
        benefits: [{ title: "Zero Stress", description: "We handle the complexity so you don't have to.", icon: "ShieldCheck" }],
        process: ["Scheduling", "Vendor Management", "On-site Oversight", "Reporting"],
        faqs: [{ question: "Do you handle all sub-contractors?", answer: "Yes, we manage every trade on site from start to finish." }]
      },
      {
        id: "smart-homes",
        ...getAsset("smart-homes"),
        description: "Integration of high-tech home automation and security.",
        longDescription: "Building next-generation homes with integrated climate, lighting, and security systems.",
        features: ["Automation", "Security Integration"],
        stats: [{ label: "Efficiency", value: "+30%" }],
        benefits: [{ title: "Modern Living", description: "A home that anticipates your needs.", icon: "Cpu" }],
        process: ["Network Design", "Hardware Rough-in", "Device Install", "Software Setup"],
        faqs: [{ question: "Can I control my home from my phone?", answer: "Yes, all systems are fully integrated." }]
      }
    ]
  },
  {
    id: "emergency-service",
    ...getAsset("emergency-service"),
    description: "24/7 rapid response for structural and property emergencies.",
    icon: "Shield",
    tag: "24/7 Support",
    features: ["Rapid Deployment", "Safety Assessment", "Board-Up", "24/7 Service"],
    subcategories: [
      {
        id: "rapid-deployment",
        ...getAsset("rapid-deployment"),
        description: "Immediate response for urgent property emergencies.",
        longDescription: "On-call 24/7 to address structural failures, storm damage, or urgent property security.",
        features: ["Immediate Dispatch", "Safety First"],
        benefits: [{ title: "Instant Stabilization", description: "Shoring to prevent collapse.", icon: "Anchor" }],
        process: ["Hotline Call", "Mobilization", "Hazard Mitigation", "Stabilization"]
      },
      {
        id: "safety-assessment",
        ...getAsset("safety-assessment"),
        description: "Urgent structural health checks after an incident.",
        longDescription: "Professional structural evaluation to determine if a building is safe for entry.",
        features: ["Structural Evaluation", "Load Analysis"],
        stats: [{ label: "Accuracy", value: "100%" }],
        benefits: [{ title: "Peace of Mind", description: "Knowing exactly where your property stands safety-wise.", icon: "ShieldCheck" }],
        process: ["Visual Check", "Equipment Testing", "Risk Analysis", "Report"],
        faqs: [{ question: "How fast can you assess a building?", answer: "Our emergency teams can be on site within 60 minutes." }]
      },
      {
        id: "board-up-service",
        ...getAsset("board-up-service"),
        description: "Immediate securing of compromised property openings.",
        longDescription: "Securing broken windows, doors, and roof holes after fire or storm.",
        features: ["Secure Boarding", "Roof Tarping"],
        stats: [{ label: "Speed", value: "Instant" }],
        benefits: [{ title: "Theft Prevention", description: "Securing your assets immediately after an event.", icon: "Lock" }],
        process: ["Opening Measurement", "Custom Cutting", "Mechanical Fastening", "Weather Proofing"],
        faqs: [{ question: "Is this temporary?", answer: "Yes, it is a secure temporary measure." }]
      },
      {
        id: "emergency-24-7",
        ...getAsset("emergency-24-7"),
        description: "Round-the-clock construction and repair response.",
        longDescription: "Full access to our entire expertise pool at any time of day or night.",
        features: ["All-hours Access", "Elite Technicians"],
        stats: [{ label: "Availability", value: "365 Days" }],
        benefits: [{ title: "Always Ready", description: "A partner that never sleeps.", icon: "Clock" }],
        process: ["Intake", "Dispatch", "On-site Response", "Stabilization"],
        faqs: [{ question: "Do you work on holidays?", answer: "Yes, our emergency units are active 24/7/365." }]
      }
    ]
  }
];

export const getServiceById = (id: string) => servicesData.find(s => s.id === id);
export const getSubCategory = (serviceId: string, subId: string) => {
  const service = getServiceById(serviceId);
  return service?.subcategories.find(sub => sub.id === subId);
};
