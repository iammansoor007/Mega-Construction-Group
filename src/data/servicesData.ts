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
  galleryImages?: string[];
  portfolioAvatars?: string[];
  heroHighlight?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
  secondaryImage?: string; // Image for the craftsmanship section
  tag: string;
  features: string[];
  subcategories: SubCategory[];
  categoryBenefits?: Benefit[];
}

// Helper to get assets safely
const getAsset = (id: string) => serviceAssets[id as keyof typeof serviceAssets] || { title: id, image: "/placeholder.svg" };

export const servicesData: Service[] = [
  {
    id: "roofing-services",
    ...getAsset("roofing-services"),
    description: "Professional roofing contractor delivering industrial-grade solutions for NYC's toughest weather conditions and architectural challenges.",
    icon: "CloudRain",
    tag: "Roofing",
    secondaryImage: "/assets/rooffair.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Shingle Roofing", "Flat Roofing", "TPO Roofing", "Leakage Repair", "Replacement", "Installation", "Inspection"],
    categoryBenefits: [
      { title: "20+ Years Experience", description: "Two decades of mastering NY's complex roofing requirements and building codes for absolute peace of mind.", icon: "Award" },
      { title: "Certified Installers", description: "Master Elite status with leading material manufacturers ensuring premium warranty coverage on all installations.", icon: "ShieldCheck" },
      { title: "Rapid Response", description: "Emergency repair teams ready for any weather-related damage with 24/7 availability across all five boroughs.", icon: "Clock" }
    ],
    subcategories: [
      {
        id: "shingle-roofing",
        ...getAsset("shingle-roofing"),
        description: "Premium asphalt and architectural shingle solutions for residential homes and townhouses.",
        longDescription: "Our premium shingle roofing systems provide exceptional durability, aesthetic variety, and long-term protection for your home. Using only top-tier materials from GAF, CertainTeed, and Owens Corning, we ensure your roof withstands NY's harsh winters and humid summers while looking beautiful for decades.",
        features: ["Impact Resistance Rating Class 4", "Algae Protection Technology", "Custom Color Matching", "50-Year Limited Warranty"],
        stats: [{ label: "Wind Rating", value: "130 MPH" }, { label: "Warranty", value: "50 Years" }, { label: "Install Time", value: "2-3 Days" }],
        benefits: [
          { title: "High-Performance Underlayment", description: "Superior water barrier compared to standard felt paper that prevents ice dams and water infiltration.", icon: "Droplets" },
          { title: "Enhanced Ventilation Systems", description: "Optimized airflow to extend the life of your roof by preventing heat and moisture buildup.", icon: "Wind" },
          { title: "GAF Master Elite Certification", description: "Installed by factory-trained professionals using premium materials with full manufacturer warranty.", icon: "Award" }
        ],
        process: ["Initial Consultation & Estimate", "Complete Tear-off & Deck Inspection", "Deck Preparation & Repair", "Underlayment Installation", "Shingle Fastening", "Final Sealing & Cleanup"],
        faqs: [
          { question: "How long does a shingle roof last in NYC?", answer: "A properly installed architectural shingle roof lasts 25-30 years on average, with premium options reaching 50 years with proper maintenance." },
          { question: "Can shingle roofs withstand NYC's high winds?", answer: "Yes, our architectural shingles are rated for winds up to 130 MPH, well above NYC's typical storm conditions." },
          { question: "What's the cost difference between 3-tab and architectural shingles?", answer: "Architectural shingles cost 15-25% more but offer significantly better durability, wind resistance, and curb appeal with longer warranties." },
          { question: "Do you offer financing for roof replacement?", answer: "Yes, we offer flexible financing options with approved credit, making roof replacement affordable for every budget." },
          { question: "How do I know if my roof needs repair or full replacement?", answer: "If your roof has isolated leaks and is under 15 years old, repair may suffice. Widespread issues or roofs over 20 years typically need replacement." }
        ],
        galleryImages: ["/assets/megashingleroof1.jfif", "/assets/megashingleroof2.jfif", "/assets/megashingleroof3.jfif"]
      },
      {
        id: "flat-roofing",
        ...getAsset("flat-roofing"),
        description: "Specialized waterproof membrane systems for modern commercial and residential flat roofs.",
        longDescription: "Expert installation of TPO, EPDM, and modified bitumen membranes designed for maximum longevity and water resistance in urban environments. Our flat roofing solutions are engineered to withstand NY's freeze-thaw cycles, heavy snow loads, and intense summer heat while providing superior energy efficiency.",
        features: ["Heat-Welded Seams", "UV Reflective Coating", "Seamless Waterproof Membrane", "Energy Star Rated Systems"],
        stats: [{ label: "Solar Reflectance", value: "87%" }, { label: "Seam Strength", value: "100%" }, { label: "Average Lifespan", value: "25-30 Years" }],
        benefits: [
          { title: "Superior Thermal Efficiency", description: "White reflective membranes significantly reduce cooling costs by reflecting up to 87% of UV radiation.", icon: "Sun" },
          { title: "Zero Leakage Guarantee", description: "Heat-welded seams create a monolithic surface stronger than the membrane material itself.", icon: "Shield" },
          { title: "Lightweight Structural Design", description: "Minimal load impact perfect for older NYC buildings with structural limitations.", icon: "Scale" }
        ],
        process: ["Roof Surface Cleaning & Prep", "Insulation Board Installation", "Membrane Layout & Cutting", "Heat Welding Seams", "Perimeter Flashing", "Final Quality Testing"],
        faqs: [
          { question: "What's the best flat roofing material for NYC buildings?", answer: "TPO is currently the industry leader for energy efficiency, durability, and cost-effectiveness in NYC's climate." },
          { question: "How long does flat roof installation take?", answer: "A typical flat roof installation takes 3-7 days depending on the size and complexity of your building's roof." },
          { question: "Can flat roofs be walked on for maintenance?", answer: "Yes, all our flat roofing systems are designed to withstand foot traffic for maintenance, though we recommend designated walkway pads for frequent access." },
          { question: "How often should flat roofs be inspected?", answer: "We recommend professional inspections twice annually (spring and fall) plus after any major storm event." },
          { question: "What causes flat roof ponding water and is it harmful?", answer: "Ponding water is caused by inadequate drainage or settling. It accelerates membrane deterioration and can lead to leaks, requiring prompt correction." }
        ]
      },
      {
        id: "tpo-roofing",
        ...getAsset("tpo-roofing"),
        description: "Industrial-grade thermoplastic polyolefin roofing systems for maximum energy efficiency.",
        longDescription: "TPO (Thermoplastic Polyolefin) is the ideal choice for heat-reflective and energy-efficient roofing, providing long-term protection against New York's variable climate. Our TPO systems are heat-welded for superior seam strength and feature enhanced puncture resistance for high-traffic commercial applications.",
        features: ["Energy Star Certified", "Heat-Welded Seam Technology", "100% Recyclable Materials", "Chemical & Grease Resistant"],
        stats: [{ label: "Solar Reflectance", value: "0.87" }, { label: "Tensile Strength", value: "Industrial Grade" }, { label: "Available Thickness", value: "60-80 Mil" }],
        benefits: [
          { title: "Heat-Reflective Technology", description: "Significantly reduces urban heat island effect and building cooling loads, lowering energy bills year-round.", icon: "Zap" },
          { title: "Chemical Resistance", description: "Highly resistant to grease, chemicals, animal fats, and industrial pollutants common in NYC environments.", icon: "FlaskConical" },
          { title: "Eco-Friendly & Sustainable", description: "100% recyclable material with zero VOC emissions, contributing to LEED certification points.", icon: "Leaf" }
        ],
        process: ["Old Roof Removal", "Substrate Preparation", "Insulation Attachment", "TPO Sheet Layout", "Robot Heat Welding", "Perimeter & Penetration Detailing"],
        faqs: [
          { question: "How are TPO seams joined and how strong are they?", answer: "We use robotic hot-air welders to fuse TPO sheets together, creating seams that are stronger than the membrane itself." },
          { question: "Is TPO roofing better than EPDM for NYC?", answer: "TPO offers superior heat reflection and chemical resistance, while EPDM performs better in extreme cold. TPO is generally preferred for commercial NYC buildings." },
          { question: "What thickness of TPO membrane do you recommend?", answer: "We typically recommend 60-mil for residential and 80-mil for commercial applications requiring extra durability and puncture resistance." },
          { question: "Can TPO be installed over an existing roof?", answer: "Yes, in many cases TPO can be installed as a 'recover' system over existing single-ply membranes, saving demolition costs." },
          { question: "What is the lifespan of a professionally installed TPO roof?", answer: "With proper installation and maintenance, TPO roofs typically last 20-30 years in NYC's climate conditions." }
        ],
        galleryImages: ["/assets/megatporoofing1.jfif", "/assets/megatporoofing2.jfif", "/assets/megatporoofing3.jfif"]
      },
      {
        id: "roof-leakage-repair",
        ...getAsset("roof-leakage-repair"),
        description: "Precision leak diagnostics and permanent repair solutions for all roof types.",
        longDescription: "We use advanced thermal imaging technology and expert physical inspections to locate and seal roof leaks before they cause structural damage. Our comprehensive approach ensures we address not just the symptom but the root cause of water infiltration, providing permanent solutions rather than temporary fixes.",
        features: ["FLIR Thermal Imaging", "Flash Point Repairs", "Full Waterproofing", "Emergency Tarping"],
        stats: [{ label: "Emergency Response", value: "Within 24 Hours" }, { label: "Detection Accuracy", value: "98%" }, { label: "Repair Longevity", value: "Permanent" }],
        benefits: [
          { title: "Non-Invasive Moisture Detection", description: "Thermal cameras find hidden moisture without costly and destructive cutting or exploratory work.", icon: "Eye" },
          { title: "Emergency Protection Services", description: "Immediate tarping and temporary repairs to stop active water entry during storms.", icon: "ShieldAlert" },
          { title: "Root Cause Resolution", description: "We identify and eliminate the underlying source of leaks, not just apply surface patches.", icon: "CheckCircle" }
        ],
        process: ["Emergency Mitigation", "FLIR Thermal Scanning", "Defect Location Isolation", "Failed Component Repair", "Water Testing Verification", "Final Documentation"],
        faqs: [
          { question: "Do you use thermal imaging for leak detection?", answer: "Yes, we use professional FLIR thermal cameras to 'see' moisture hidden inside ceilings, walls, and roofing layers without damage." },
          { question: "How quickly can you respond to an emergency roof leak?", answer: "Our emergency response team can be on-site within 24 hours, often same-day for urgent situations." },
          { question: "Will you need to tear apart my ceiling to find the leak?", answer: "Not necessarily. Our thermal imaging often locates leaks externally, though ceiling access may be needed for confirmation in complex cases." },
          { question: "Are temporary roof patches a permanent solution?", answer: "No, temporary patches stop active leaks but require permanent repair within weeks. We provide both emergency and permanent solutions." },
          { question: "What causes most NYC roof leaks?", answer: "Common causes include flashing failures around penetrations, membrane shrinkage at terminations, ponding water, and storm damage." }
        ]
      },
      {
        id: "roof-replacement",
        ...getAsset("roof-replacement"),
        description: "Complete architectural roof teardown and premium system reconstruction.",
        longDescription: "Our full roof replacement service includes thorough structural analysis, complete removal of all existing materials, and installation of a comprehensive multi-layered roofing system. We handle all NYC DOB permits and inspections, ensuring your new roof meets or exceeds all current building codes and energy efficiency requirements.",
        features: ["Structural Load Analysis", "Complete Material Tear-off", "Premium System Rebuild", "DOB Permit Handling"],
        stats: [{ label: "Property Value ROI", value: "+20%" }, { label: "System Longevity", value: "Up to 50 Years" }, { label: "Code Compliance", value: "DOB 100%" }],
        benefits: [
          { title: "Enhanced Structural Integrity", description: "Complete fresh start for your building's primary weather protection system with modern materials.", icon: "Shield" },
          { title: "Full Manufacturer Warranty", description: "Benefit from comprehensive material coverage with 20-50 year warranty protection.", icon: "CheckCircle" },
          { title: "Current Code Compliance", description: "Upgrading your roof to meet modern NYC energy codes and safety standards.", icon: "Scale" }
        ],
        process: ["Initial Structural Assessment", "Full Material Tear-off", "Sheathing & Deck Repair", "Ice & Water Shield Application", "New System Installation", "Ventilation Tuning & Cleanup"],
        faqs: [
          { question: "When is full roof replacement necessary versus repair?", answer: "If your roof is over 20-25 years old, has widespread leaking in multiple areas, or shows significant structural deterioration, replacement is recommended." },
          { question: "Does roof replacement require NYC permits?", answer: "Yes, full roof replacement requires DOB permits. We handle all permit applications, filings, and inspections for you." },
          { question: "How long does a full roof replacement take?", answer: "Typical residential roof replacement takes 2-5 days. Commercial projects may take 1-3 weeks depending on size and complexity." },
          { question: "Can we stay in our home during roof replacement?", answer: "Yes, roof replacement is exterior work with minimal interior disruption. We take precautions to protect your property and minimize noise." },
          { question: "What is the best season for roof replacement in NYC?", answer: "Late spring through early fall (May-October) offers ideal weather conditions, though we work year-round with proper weather precautions." }
        ]
      },
      {
        id: "roof-installation",
        ...getAsset("roof-installation"),
        description: "Professional new construction roofing installation for residential and commercial projects.",
        longDescription: "We provide precision roofing installation services for new construction projects, working directly with architects, developers, and general contractors. Our installation process ensures every component is properly integrated from day one, creating a seamless, long-lasting roofing system that performs optimally for decades.",
        features: ["New Construction Expertise", "Architectural Plan Alignment", "Master Craftsmanship", "System Integration"],
        stats: [{ label: "Installation Precision", value: "99.9%" }, { label: "Project Timeline", value: "Optimized" }, { label: "Aesthetic Quality", value: "Premium" }],
        benefits: [
          { title: "Architectural Integration", description: "Seamless roofing that perfectly complements your new building's design and structural requirements.", icon: "Layout" },
          { title: "Complete System Synergy", description: "All roofing components installed together for maximum efficiency and performance.", icon: "Zap" },
          { title: "Long-term Security Value", description: "Built from day one with industrial-grade standards and full warranty protection.", icon: "Lock" }
        ],
        process: ["Blueprint & Spec Review", "Structural Deck Preparation", "Underlayment System Installation", "Primary Roofing Layer", "Detail & Penetration Sealing", "Final Performance Testing"],
        faqs: [
          { question: "Do you work directly with architects on new builds?", answer: "Yes, we frequently collaborate with architectural and design teams to ensure all technical roofing specifications are perfectly met." },
          { question: "What's the lead time for new construction roofing?", answer: "We typically need 2-4 weeks lead time for material ordering and crew scheduling, depending on project size and complexity." },
          { question: "Do you provide warranties for new installation?", answer: "Yes, we provide comprehensive workmanship warranties plus full manufacturer material warranties on all new roof installations." },
          { question: "Can you install roofing on unusual architectural designs?", answer: "Absolutely. We specialize in complex roofs including domes, green roofs, terraces, and custom architectural features." },
          { question: "How do you coordinate with other trades on new builds?", answer: "We work closely with your GC and other trades to sequence work properly, ensuring roof penetations align with HVAC, plumbing, and electrical rough-ins." }
        ]
      },
      {
        id: "roof-inspection",
        ...getAsset("roof-inspection"),
        description: "Comprehensive technical roof assessments with thermal imaging and certification.",
        longDescription: "Using state-of-the-art thermal imaging technology and detailed physical analysis, we provide comprehensive reports on your roofing system's current health. Our inspections identify potential issues before they become costly problems, serving insurance claims, real estate transactions, and preventative maintenance planning.",
        features: ["FAA Drone Surveys", "FLIR Thermal Imaging", "Detailed Certification Reports", "Maintenance Planning"],
        stats: [{ label: "Detection Detail", value: "Microscopic" }, { label: "Report Delivery", value: "Within 24 Hours" }, { label: "Inspection Technology", value: "Advanced" }],
        benefits: [
          { title: "Early Problem Detection", description: "Finding invisible issues like trapped moisture before they develop into catastrophic failures.", icon: "Search" },
          { title: "Insurance Documentation", description: "Certified inspection reports for storm damage claims and insurance requirements.", icon: "FileText" },
          { title: "Enhanced Property Value", description: "Official roof health certification for real estate transactions and property valuations.", icon: "TrendingUp" }
        ],
        process: ["Exterior Roof Survey", "Thermal Moisture Analysis", "Internal Attic Inspection", "Defect Mapping & Photos", "Comprehensive Report Generation", "Final Client Briefing"],
        faqs: [
          { question: "How often should commercial roofs be professionally inspected?", answer: "We recommend professional inspections at least annually, plus after any major NYC storm event or extreme weather." },
          { question: "What is included in a professional roof inspection?", answer: "Thermal moisture scan, physical inspection of membranes/flashing/flat areas, structural assessment, and detailed photographic documentation." },
          { question: "Do you provide inspection reports for real estate closings?", answer: "Yes, we provide comprehensive, certified inspection reports with remaining life expectancy and repair cost estimates for real estate transactions." },
          { question: "Can inspection identify hidden leaks before they show inside?", answer: "Yes, thermal imaging detects trapped moisture before it penetrates interior ceilings, allowing proactive repairs." },
          { question: "How much does a professional roof inspection cost?", answer: "Residential roof inspections start at $295, commercial inspections vary based on size, but typically range from $500-$2,500 for detailed thermal analysis." }
        ]
      },
      {
        id: "roof-waterproofing",
        ...getAsset("roof-waterproofing"),
        description: "Industrial-grade roof waterproofing and protective coating systems.",
        longDescription: "We provide comprehensive roof waterproofing solutions using advanced liquid membranes and sealants to create monolithic, seamless barriers. Our systems are engineered to prevent water infiltration in critical areas like flashings, penetrations, and joints, extending the life of your roof and preventing interior water damage.",
        features: ["Liquid Membrane Technology", "Seamless Waterproofing", "Penetration Sealing", "UV-Resistant Coatings"],
        stats: [{ label: "Leak Prevention", value: "100%" }, { label: "System Life", value: "15+ Years" }, { label: "Cure Time", value: "Rapid" }],
        benefits: [
          { title: "Seamless Protection", description: "Liquid-applied membranes conform to any geometry, eliminating weak points found in traditional seams.", icon: "Droplets" },
          { title: "Insurance Documentation", description: "Certified inspection reports for storm damage claims and insurance requirements.", icon: "FileText" },
          { title: "Enhanced Property Value", description: "Official roof health certification for real estate transactions and property valuations.", icon: "TrendingUp" }
        ],
        process: ["Surface Cleaning", "Flashing/Joint Prep", "Primer Application", "Membrane Coating", "Topcoat Protection", "Water Testing"],
        faqs: [
          { question: "How often should NYC buildings be waterproofed?", answer: "We recommend re-evaluation every 5-7 years, with maintenance of sealants and coatings as needed to prevent deep structural water entry." }
        ],
        galleryImages: ["/assets/megawaterproofing1.jfif"]
      }
    ]
  },
  {
    id: "masonry-work",
    ...getAsset("masonry-work"),
    description: "Expert masonry restoration and exterior repair services for NYC's iconic architectural structures.",
    icon: "Hammer",
    tag: "Structural",
    secondaryImage: "/assets/brickworkrealmega.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Replacement", "Grinding & Pointing", "Window Caulking", "Lintel Replacement", "Parapet Walls", "Facade Restoration", "Retaining Walls", "Patios", "Steps Repair", "Fire Escape Painting", "Chimneys", "Waterproofing", "Rebuilds"],
    categoryBenefits: [
      { title: "Artisan Craftsmen", description: "Specialized masons trained in historic restoration techniques for landmark and brownstone properties.", icon: "Paintbrush" },
      { title: "Structural Integrity", description: "Masonry repairs that reinforce your building's load-bearing capacity and structural skeleton.", icon: "Lock" },
      { title: "Heritage Grade Materials", description: "Authentic period-appropriate materials for historic landmark and brownstone properties.", icon: "Landmark" }
    ],
    subcategories: [
      {
        id: "brick-replacement",
        ...getAsset("brick-replacement"),
        description: "Precision replacement of damaged, spalling, or deteriorated individual bricks.",
        longDescription: "We identify and replace individual damaged bricks to maintain the structural and aesthetic integrity of your masonry. Our team sources matching vintage bricks for historic properties and provides perfect color-matched mortar to ensure repairs blend seamlessly with existing masonry while restoring full structural strength.",
        features: ["Individual Brick Replacement", "Structural Load Restoration", "Texture & Color Matching", "Water Infiltration Prevention"],
        stats: [{ label: "Visual Match Rate", value: "99%" }, { label: "Weather Protection", value: "100%" }, { label: "Structural Audit", value: "Included" }],
        benefits: [{ title: "Water Protection System", description: "Replacing spalled bricks seals moisture entry points that cause interior damage and structural deterioration.", icon: "Droplets" }],
        process: ["Damaged Brick Extraction", "Cavity Preparation & Cleaning", "New Brick Installation", "Mortar Sealing & Finishing"],
        faqs: [
          { question: "Will new bricks match my historic building's existing bricks?", answer: "We source reclaimed vintage bricks and use custom-pigmented mortar to achieve an invisible match with your existing masonry." },
          { question: "What causes bricks to crumble (spalling)?", answer: "Spalling is caused by water absorption and freeze-thaw cycles, where trapped water freezes, expands, and fractures the brick's surface." },
          { question: "Can individual bricks be replaced without damaging surrounding masonry?", answer: "Yes, skilled masons can carefully extract and replace individual bricks while preserving adjacent masonry perfectly intact." },
          { question: "How many bricks can typically be replaced at once?", answer: "We recommend replacing no more than 10-15% of bricks in a given area to maintain structural integrity during the repair process." },
          { question: "Is brick replacement covered by insurance?", answer: "Coverage depends on cause—storm damage may be covered, while general deterioration from age or neglect typically isn't. We provide documentation for claims." }
        ],
        galleryImages: ["/assets/megabrickwork1.jfif", "/assets/megabrickwork2.jfif", "/assets/megabrickwork3.jfif"]
      },
      {
        id: "brick-grinding-pointing",
        ...getAsset("brick-grinding-pointing"),
        description: "Technical mortar removal and precision re-pointing for deteriorated masonry joints.",
        longDescription: "Our specialized grinding process carefully removes decayed, crumbling mortar joints and replaces them with premium, weather-resistant mortar. This essential maintenance procedure restores the structural integrity of your masonry walls, prevents water infiltration, and extends your building's lifespan by decades.",
        features: ["Deep Joint Grinding", "Custom Mortar Formulation", "Weather-Resistant Sealing", "Structural Reinforcement"],
        stats: [{ label: "Joint Depth", value: "3/4 Inch Minimum" }, { label: "Repair Longevity", value: "25+ Years" }, { label: "Compression Strength", value: "Restored" }],
        benefits: [{ title: "Structural Reinforcement", description: "Professional re-pointing restores the load-bearing capacity of masonry joints, preventing wall failure and collapse.", icon: "Lock" }],
        process: ["Joint Grinding", "Debris Removal & Cleaning", "Custom Mortar Application", "Joint Finishing & Cleanup"],
        faqs: [
          { question: "How long does professional pointing last in NYC climate?", answer: "High-quality pointing performed by experienced masons lasts 25-50 years in New York's freeze-thaw climate conditions." },
          { question: "What's the difference between grinding and chiseling joints?", answer: "Grinding provides cleaner, more uniform joint depth and doesn't damage brick edges like chiseling can. It's our preferred method for quality results." },
          { question: "How deep should mortar joints be ground for repointing?", answer: "Joints should be ground to at least 3/4 inch depth or until sound mortar is reached, whichever is greater, for proper adhesion." },
          { question: "Can repointing fix a bulging or leaning wall?", answer: "Repointing alone cannot fix structural movement issues. Bulging walls require additional structural reinforcement or rebuilding." },
          { question: "Do you use power tools for grinding near historic bricks?", answer: "We use variable-speed grinders with vacuum attachments and skilled operators to prevent damage to adjacent historic bricks." }
        ],
        galleryImages: ["/assets/megagrounding1.jfif", "/assets/megagrounding2.jfif", "/assets/megagrounding3.jfif"]
      },
      {
        id: "parapet-wall",
        ...getAsset("parapet-wall"),
        description: "Structural repair, rebuilding, and capping for roof parapet walls.",
        longDescription: "Parapet walls are critical for roof safety, waterproofing, and building aesthetics. We provide comprehensive parapet services including structural reinforcement, coping stone replacement, and full wall rebuilding. Our certified masons ensure your parapet meets NYC building codes and safely protects your roof perimeter.",
        features: ["Coping Stone Installation", "Structural Wall Rebuilding", "Complete Waterproofing", "Drainage Correction"],
        stats: [{ label: "Safety Compliance", value: "Code A+" }, { label: "Structural Stability", value: "Industrial Grade" }, { label: "Water Testing", value: "Included" }],
        benefits: [{ title: "Roof Perimeter Security", description: "Ensuring your building's roof edge is structurally sound, properly drained, and fully weather-sealed.", icon: "Shield" }],
        process: ["Existing Demolition", "Masonry Wall Rebuilding", "Flashing Installation", "Coping Stone Placement", "Waterproof Seal"],
        faqs: [
          { question: "Why do parapet walls leak at the roof line?", answer: "Parapet leaks are usually caused by cracked coping stones, failed step flashing, or deteriorated membrane terminations at the roof base." },
          { question: "What are the signs of parapet wall failure?", answer: "Bulging or leaning walls, cracked coping stones, interior water stains near roof edges, and crumbling mortar at the base are warning signs." },
          { question: "How often should parapet walls be inspected?", answer: "We recommend parapet inspection during annual roof maintenance and as part of Local Law 11/FISP facade inspections." },
          { question: "What is the typical lifespan of a parapet wall?", answer: "With proper maintenance and timely repointing, parapet walls can last 50-100 years. Coping stones last 30-50 years depending on material." },
          { question: "Do I need a permit for parapet repair in NYC?", answer: "Yes, parapet repairs typically require DOB permits. We handle all permit applications and coordinate required inspections." }
        ],
        galleryImages: ["/assets/megaparapetwall1.jfif", "/assets/megaparapetwall2.jfif", "/assets/megaparapetwall3.jfif", "/assets/megaparapetwall4.jfif"]
      },
      {
        id: "facade-restoration",
        ...getAsset("facade-restoration"),
        description: "Complete revitalization of building exteriors with Local Law 11 compliance.",
        longDescription: "Complete facade restoration including professional cleaning, stone carving repair, masonry replacement, and full FISP (Local Law 11) compliance documentation. Our facade experts navigate NYC DOB regulations while restoring your building's original beauty and structural safety for decades of service.",
        features: ["Local Law 11/FISP Compliance", "Stone Carving & Repair", "Steam & Chemical Cleaning", "Full Safety Documentation"],
        stats: [{ label: "Law 11/FISP Status", value: "Fully Compliant" }, { label: "Restoration Longevity", value: "Extensive" }, { label: "DOB Filing", value: "Handled" }],
        benefits: [{ title: "Regulatory Compliance Experts", description: "Specialized navigation of NYC DOB facade regulations and Landmarks Preservation Commission requirements.", icon: "ClipboardCheck" }],
        process: ["Full Facade Inspection", "Surface Cleaning", "Masonry Repairs", "Stone Carving Details", "Final Sealing & Protection"],
        faqs: [
          { question: "What is Local Law 11 and does my building need compliance?", answer: "Local Law 11 (FISP) is an NYC regulation requiring professional facade inspections every 5 years for buildings over 6 stories tall." },
          { question: "What happens if my building fails Local Law 11 inspection?", answer: "You receive a violation requiring repairs within a specified timeframe. Emergency repairs may be mandated immediately for unsafe conditions." },
          { question: "How long does a full facade restoration take?", answer: "Depending on building size and damage extent, facade restoration typically takes 3-12 months with proper staging and safety provisions." },
          { question: "Can facade restoration be done while building is occupied?", answer: "Yes, we use scaffolding, sidewalk sheds, and protective netting to allow safe building operation during exterior restoration work." },
          { question: "How much does Local Law 11 compliance cost?", answer: "Costs vary widely based on building size and repair needs, from $10,000 for minor repairs to millions for complete facade restoration." }
        ]
      },
      {
        id: "retaining-walls",
        ...getAsset("retaining-walls"),
        description: "Structural masonry retaining walls for soil retention and foundation protection.",
        longDescription: "We engineer and build heavy-duty retaining walls using natural stone, architectural brick, or reinforced concrete. Our retaining walls manage difficult grade changes, prevent soil erosion, protect foundations, and create usable outdoor spaces while meeting all NYC building codes for structural walls.",
        features: ["Soil Retention Engineering", "Integrated Drainage Systems", "Structural Masonry", "Erosion Prevention"],
        stats: [{ label: "Compressive Strength", value: "4000+ PSI" }, { label: "Structural Durability", value: "Lifetime" }, { label: "Drainage Design", value: "Engineered" }],
        benefits: [{ title: "Erosion Control Protection", description: "Professionally engineered walls prevent soil shifting that causes foundation pressure, cracking, and structural failure.", icon: "Activity" }],
        process: ["Site Excavation", "Foundation Footing Pour", "Wall Construction", "Backfill & Drainage Installation"],
        faqs: [
          { question: "Do retaining walls require drainage systems?", answer: "Yes, professional retaining walls absolutely require drainage systems including weep holes and gravel backfill to prevent hydrostatic pressure buildup." },
          { question: "How high can a retaining wall be without engineering?", answer: "In NYC, retaining walls over 4 feet tall require engineered design and DOB permits regardless of construction method." },
          { question: "What's the most durable material for retaining walls?", answer: "Poured reinforced concrete offers maximum structural strength, while natural stone provides aesthetic appeal with good durability." },
          { question: "How deep should retaining wall foundations be?", answer: "Footings should extend below frost line (typically 36-48 inches in NYC) and be as wide as wall height divided by 3." },
          { question: "Can existing failing retaining walls be repaired or must they be replaced?", answer: "Minor cracking and leaning can often be repaired, but severely compromised walls typically require complete replacement for safety." }
        ]
      },
      {
        id: "patios",
        ...getAsset("patios"),
        description: "Luxury masonry patios and outdoor living space construction.",
        longDescription: "Custom-designed masonry patios using premium bluestone, brick pavers, or natural stone. We create beautiful, functional outdoor living spaces that increase property value and provide maintenance-free entertainment areas. Each patio includes proper base preparation and drainage for decades of trouble-free enjoyment.",
        features: ["Premium Bluestone", "Paver Systems", "Custom Layout Design", "Professional Drainage"],
        stats: [{ label: "Property Value ROI", value: "High" }, { label: "Design Options", value: "Bespoke" }, { label: "Durability", value: "Lifetime" }],
        benefits: [{ title: "Outdoor Living Enhancement", description: "Professional patio installation increases usable square footage and creates valuable outdoor entertainment space.", icon: "Sun" }],
        process: ["Site Grading", "Sub-base Preparation", "Stone/Paver Setting", "Joint Finishing & Sealing"],
        faqs: [
          { question: "What is the best way to repair cracked stucco?", answer: "We remove loose material, apply a bonding agent, and use fiber-reinforced base coats before finishing with a custom color-matched texture." },
          { question: "What is the most durable patio material for NYC climate?", answer: "Natural bluestone is highly durable, freeze-thaw resistant, and the classic aesthetic choice for NYC properties." },
          { question: "Do patios need a concrete base?", answer: "Proper patios require compacted gravel and stone dust base—not concrete—which allows drainage and prevents frost heaving." },
          { question: "How long does patio installation take?", answer: "Typical residential patios take 3-7 days depending on size, access, and weather conditions for proper base compaction." },
          { question: "Can patios be installed on uneven ground?", answer: "Yes, we grade and level sites as needed, using retaining walls if necessary to terrace sloped properties." },
          { question: "How do you prevent weeds between patio stones?", answer: "We use polymeric sand that hardens to prevent weed growth while remaining flexible enough for freeze-thaw movement." }
        ],
        galleryImages: ["/assets/megastuccorestoreation1.jfif", "/assets/megastuccorestoreation2.jfif", "/assets/megastuccorestoreation3.jfif", "/assets/megastuccorestoreation4.jfif"]
      },
      {
        id: "steps-repair-construction",
        ...getAsset("steps-repair-construction"),
        description: "Precision repair and structural rebuilding of masonry steps and stoops.",
        longDescription: "We specialize in structural repair and complete reconstruction of front steps (stoops), basement stairs, and entrance landings. Our masons restore proper rise and run measurements, install safety treads, and ensure every step meets NYC building codes for public safety and structural integrity.",
        features: ["Stoop Restoration", "Safety Tread Installation", "Structural Masonry", "Code Compliance"],
        stats: [{ label: "Safety Rating", value: "100%" }, { label: "Finish Quality", value: "Artisan" }, { label: "Permit Handling", value: "Included" }],
        benefits: [{ title: "Curb Appeal Maximization", description: "The front stoop creates crucial first impressions and represents the face of NYC brownstone properties.", icon: "Star" }],
        process: ["Structural Assessment", "Formwork Construction", "Masonry Installation", "Finish Layer", "Safety Coating"],
        faqs: [
          { question: "Can you repair crumbling brownstone steps?", answer: "Yes, we specialize in authentic brownstone patching and reconstruction using period-appropriate materials." },
          { question: "What are NYC step code requirements?", answer: "Rise (height) must be 7-8 inches, run (depth) 11+ inches, and treads must have non-slip surfaces or safety nosings." },
          { question: "Do step repairs require permits in NYC?", answer: "Yes, most step repairs require DOB permits, especially structural work affecting entrance safety or public walkways." },
          { question: "What's the best material for NYC steps?", answer: "Cast stone or pre-cast concrete offers durability and slip resistance. Bluestone treads are popular for historic brownstones." }
        ],
        galleryImages: ["/assets/megastepsrepair1.jfif", "/assets/megastepsrepair2.jfif", "/assets/megastepsrepair3.jfif"]
      },
      {
        id: "window-caulking",
        ...getAsset("window-caulking"),
        description: "Professional exterior window caulking and weather sealing to prevent air and water infiltration.",
        longDescription: "Our professional window caulking services use high-grade silicone and polyurethane sealants to create permanent, flexible barriers against New York's extreme weather. We remove old, failed caulk, clean substrates thoroughly, and apply precision beads that protect your building's interior from water damage, drafts, and energy loss while improving acoustic insulation.",
        features: ["High-Grade Silicone Sealants", "Old Caulk Removal", "Structural Expansion Joints", "Watertight Guarantee"],
        stats: [{ label: "Seal Life", value: "10-15 Years" }, { label: "Energy Savings", value: "15%" }, { label: "Water Protection", value: "100%" }],
        benefits: [{ title: "Energy Loss Prevention", description: "Stopping drafts and air leaks around window perimeters reduces heating and cooling costs significantly.", icon: "Thermometer" }],
        process: ["Surface Cleaning", "Old Sealant Removal", "Backer Rod Installation", "Sealant Application", "Tooling & Finishing"],
        faqs: [
          { question: "How often should window caulking be replaced?", answer: "Standard caulking lasts 5-10 years. We recommend inspection every 3 years to ensure seals remain flexible and watertight." },
          { question: "Do you remove the old caulk before applying new?", answer: "Yes, we always perform full removal of old, failed sealant to ensure proper adhesion and a long-lasting weather seal." },
          { question: "Can window caulking stop air drafts?", answer: "Absolutely. Professional caulking seals the perimeter gaps where most air leakage occurs, dramatically improving comfort and energy efficiency." }
        ]
      },
      {
        id: "lintel-replacement",
        ...getAsset("lintel-replacement"),
        description: "Structural replacement of rusted or failing window and door lintels to prevent masonry collapse.",
        longDescription: "We specialize in the structural replacement of deteriorated steel lintels above windows and doors. Rusted lintels expand (rust jacking), causing bricks to crack and potentially collapse. Our team safely shores the masonry, removes the failed steel, and installs new primed or galvanized steel lintels with proper flashing and weep holes to ensure long-term structural stability.",
        features: ["Structural Shoring", "Galvanized Steel Lintels", "Precision Flashing Installation", "Code-Compliant Support"],
        stats: [{ label: "Structural Rating", value: "Heavy Duty" }, { label: "Corrosion Resistance", value: "High" }, { label: "Permit Requirement", value: "DOB" }],
        benefits: [{ title: "Collapse Prevention", description: "Replacing rusted lintels stops 'rust jacking' that fractures bricks and leads to dangerous structural failure.", icon: "ShieldAlert" }],
        process: ["Structural Shoring", "Masonry Removal", "New Lintel Installation", "Flashing & Weeps", "Brick Restoration"],
        faqs: [
          { question: "What is a lintel and why does it fail?", answer: "A lintel is the steel beam supporting masonry above a window or door. It fails when water causes rust, making the steel expand and 'jack' the bricks above it." },
          { question: "How do I know if my lintels need replacement?", answer: "Look for cracks in the bricks above window corners, or visible rust and flaking metal on the underside of the beam." },
          { question: "Do I need a permit for lintel replacement?", answer: "Yes, because it is structural work, NYC DOB typically requires a permit. We handle the filing and engineering coordination for you." }
        ]
      },
      {
        id: "fire-escape-painting",
        ...getAsset("fire-escape-painting"),
        description: "Masonry repair around fire escape anchors and safety compliance inspections.",
        longDescription: "We repair structural masonry around fire escape anchorage points to ensure emergency exits remain securely fastened to the building. Our team coordinates with licensed fire escape contractors to provide complete safety systems, from anchor reinforcement to full FDNY compliance documentation.",
        features: ["Anchor Point Repair", "Safety Compliance Inspections", "FDNY Coordination", "Structural Reinforcement"],
        stats: [{ label: "Life Safety", value: "Certified" }, { label: "Fire Code Compliance", value: "NYC/FDNY" }, { label: "Anchor Testing", value: "Performed" }],
        benefits: [{ title: "Emergency Life Safety", description: "Ensuring emergency exit points remain structurally secure and accessible for building occupants.", icon: "ShieldAlert" }],
        process: ["Safety Inspection", "Anchor Stabilization", "Masonry Patching", "Final Load Testing"],
        faqs: [
          { question: "Does masonry condition affect fire escape safety?", answer: "Yes, loose crumbling masonry around fire escape anchors is a serious FDNY violation and safety hazard." },
          { question: "How often do fire escapes need inspection in NYC?", answer: "FDNY requires fire escape inspections every 5 years, with immediate repairs required for any safety violations found." },
          { question: "Can you repair fire escape anchors without replacing the entire fire escape?", answer: "Yes, we can rebuild compromised masonry around anchors while preserving functional fire escapes, though severely rusted sections may need replacement." },
          { question: "What are signs of fire escape masonry problems?", answer: "Cracked bricks around anchor bolts, deteriorating mortar, visible gaps between wall and anchor plate, or loose anchor movement." },
          { question: "Do you coordinate with FDNY for fire escape work?", answer: "Yes, we handle all FDNY notifications and coordinate with licensed fire escape contractors for any metal repair or replacement needs." }
        ]
      },
      {
        id: "chimney-caps-rebuilds",
        ...getAsset("chimney-caps-rebuilds"),
        description: "Structural chimney restoration, rebuilding, and weather protection systems.",
        longDescription: "From rebuilding crumbling chimney stacks to installing industrial-grade stainless steel caps, we provide complete chimney restoration. Our services include flue repair, crown rebuilding, and waterproofing to prevent freeze-thaw damage that causes chimney collapse and interior water damage.",
        features: ["Stainless Steel Caps", "Masonry Rebuilding", "Flue Repair & Lining", "Freeze-Thaw Protection"],
        stats: [{ label: "Draft Efficiency", value: "Optimized" }, { label: "Fire Safety Rating", value: "A+" }, { label: "Waterproofing", value: "Complete" }],
        benefits: [{ title: "Fire Prevention Protection", description: "Eliminating cracks and debris that cause chimney fires and carbon monoxide infiltration into living spaces.", icon: "Flame" }],
        process: ["Full Chimney Inspection", "Stack Rebuilding", "Lining Condition Check", "Cap Installation", "Sealing"],
        faqs: [
          { question: "Why are NYC chimneys deteriorating so quickly?", answer: "NYC's repeated freeze-thaw cycles cause water to freeze inside masonry pores, expanding and cracking the structure." },
          { question: "What is the purpose of a chimney cap?", answer: "Caps prevent water entry, keep out animals and debris, stop downdrafts, and prevent sparks from escaping—essential fire protection." },
          { question: "How long does a chimney rebuild last?", answer: "A properly rebuilt chimney with quality materials and waterproofing should last 50+ years with regular maintenance." },
          { question: "Do I need a permit for chimney work in NYC?", answer: "Yes, chimney alterations, especially above roof line or structural work, require DOB permits which we handle for you." },
          { question: "Can a chimney be repaired if it's leaning?", answer: "Minor leaning may be repairable with steel reinforcement, but significant leaning (over 1/2 inch per foot) typically requires complete rebuilding." }
        ]
      },
      {
        id: "waterproofing",
        ...getAsset("waterproofing"),
        description: "Industrial-grade below-grade and facade waterproofing systems.",
        longDescription: "Industrial-grade waterproofing solutions for basements, foundations, and exterior walls. Our comprehensive systems include French drains, sump pumps, liquid membranes, and exterior excavation waterproofing. We stop water infiltration permanently, preventing mold, structural decay, and interior damage.",
        features: ["French Drain Systems", "Liquid Membrane Application", "Exterior Excavation", "Complete Sump Pump Installation"],
        stats: [{ label: "Water Protection", value: "100%" }, { label: "Dryness Guarantee", value: "Written" }, { label: "System Longevity", value: "20-30 Years" }],
        benefits: [{ title: "Mold Prevention Health", description: "Stopping water before it creates hazardous mold conditions and health problems for building occupants.", icon: "CloudRain" }],
        process: ["Site Excavation", "Membrane Application", "Drainage Installation", "Backfill", "Interior Finishing"],
        faqs: [
          { question: "How long does professional foundation waterproofing last?", answer: "Our professional waterproofing systems typically provide 20-30 years of reliable protection with proper maintenance." },
          { question: "Does basement waterproofing increase home value?", answer: "Yes, dry usable basement space can increase property value by 10-15% and dramatically expands usable square footage." },
          { question: "What's the difference between interior and exterior waterproofing?", answer: "Exterior waterproofing stops water before entry (ideal for new construction). Interior drainage manages water after entry (adds sump pump requirements)." },
          { question: "How do you know if your foundation needs waterproofing?", answer: "Signs include visible water entry, musty odors, efflorescence (white deposits), cracking floors/walls, or high humidity despite dehumidifiers." },
          { question: "Can waterproofing be done in winter?", answer: "Yes, though exterior excavation work is weather-dependent. Interior drainage systems can be installed year-round regardless of outside temperature." }
        ]
      },
      {
        id: "reconstruction-rebuilds",
        ...getAsset("reconstruction-rebuilds"),
        description: "Complete structural rebuilding of collapsed or unstable masonry elements.",
        longDescription: "Comprehensive reconstruction services for collapsed parapets, unstable chimneys, bulging walls, and deteriorated foundations. Our structural engineers and master masons work together to safely demolish, engineer, and rebuild compromised masonry to exceed original specifications while matching historic aesthetics.",
        features: ["Complete Structural Rebuild", "Full Code Compliance", "Historical Architectural Accuracy", "Engineered Solutions"],
        stats: [{ label: "Structural Strength", value: "Industrial" }, { label: "Code Compliance", value: "100%" }, { label: "Engineering Oversight", value: "Included" }],
        benefits: [{ title: "Complete Structural Renewal", description: "Restoring the core load-bearing stability of your building with modern engineering and materials.", icon: "HardHat" }],
        process: ["Emergency Stabilization", "Controlled Demolition", "Architectural Rebuilding", "Period Finishing Details"],
        faqs: [
          { question: "Do masonry rebuilds require NYC DOB permits?", answer: "Yes, all major structural masonry rebuilds require approved DOB permits, which we handle completely for you." },
          { question: "How long does a complete masonry rebuild take?", answer: "Timelines vary from 2-3 weeks for small sections to 6-12 months for full facade replacement with scaffolding setup." },
          { question: "Can you match historic architectural details?", answer: "Yes, we specialize in historical replication including molded brick, terra cotta detailing, carved stone, and period cornices." },
          { question: "Is a building safe during masonry reconstruction?", answer: "Absolutely. We use engineered shoring, sidewalk sheds, and protective netting to ensure safety during complete rebuilds." },
          { question: "What causes sudden masonry collapse?", answer: "Common causes include water infiltration/freeze-thaw deterioration, foundation settlement, vehicle impact, or deferred maintenance over many decades." }
        ]
      }
    ]
  },
  {
    id: "concrete-services",
    ...getAsset("concrete-services"),
    description: "Industrial concrete solutions for NYC sidewalks, driveways, foundations, and parking areas.",
    icon: "Square",
    tag: "Concrete",
    secondaryImage: "/assets/concretemega.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Sidewalk Violation Removal", "DOT Violation", "DOB Violation", "Foundation Work", "Backyard Concrete", "Sidewalk Repair", "Sidewalk Replacement", "Driveway Replacement"],
    categoryBenefits: [
      { title: "DOT/DOB Regulatory Experts", description: "Mastery of NYC sidewalk codes, permit requirements, and expedited violation removal processes.", icon: "Scale" },
      { title: "Industrial Strength Concrete", description: "High-PSI concrete mixes with fiber reinforcement for maximum freeze-thaw durability.", icon: "Box" },
      { title: "Precision Leveling Systems", description: "Perfect pitch and ADA-compliant drainage on all exterior concrete surfaces.", icon: "Crosshair" }
    ],
    subcategories: [
      {
        id: "sidewalk-repair",
        ...getAsset("sidewalk-repair"),
        description: "Strategic patching and partial replacement of cracked, settled sidewalk sections.",
        longDescription: "Cost-effective sidewalk solutions addressing individual trip hazard flags rather than full replacement. We target specific damaged sections, addressing tree root elevation, settlement issues, and spalling concrete while leaving intact sections in place. This approach minimizes disruption and cost while maintaining ADA compliance.",
        features: ["Sectional Flag Replacement", "Tree Root Management", "ADA Code Compliance", "Trip Hazard Elimination"],
        stats: [{ label: "Safety Improvement", value: "Restored" }, { label: "NYC Code Status", value: "Compliant" }, { label: "Project Timeline", value: "Minimized" }],
        benefits: [{ title: "Trip Hazard Removal", description: "Immediate elimination of dangerous walking surface defects, instantly making your property safer for pedestrians.", icon: "Shield" }],
        process: ["Damaged Flag Removal", "Sub-base Leveling", "Sectional Concrete Pour", "Professional Broom Finish"],
        faqs: [
          { question: "Do you repair sidewalk damage caused by city trees?", answer: "Yes, we coordinate root pruning with NYC Parks Department guidelines while repairing elevation damage and trip hazards." },
          { question: "How much does sidewalk repair cost per square foot?", answer: "Typically $10-20 per square foot for patch repairs, $15-25 for full flag replacement depending on location and access." },
          { question: "How long do sidewalk repairs take to complete?", answer: "Individual flag repairs take 1-2 days including curing time. Multiple flags may require 3-5 days depending on scope." },
          { question: "Can you match existing sidewalk color and finish?", answer: "Yes, we custom-match concrete mix designs and brooming techniques to blend seamlessly with existing adjacent sidewalk sections." },
          { question: "Do I need a permit for sidewalk repair?", answer: "Yes, sidewalk repairs require DOT permits. We handle all permit applications and coordinate inspections for you." }
        ]
      },
      {
        id: "sidewalk-replacement",
        ...getAsset("sidewalk-replacement"),
        description: "Complete full-scale concrete sidewalk reconstruction for entire properties.",
        longDescription: "Complete removal and comprehensive replacement of existing sidewalks to meet all NYC DOT and DOB standards. Our full replacement service includes proper sub-base preparation, correct concrete thickness, professional finishing, and precise pitch for drainage. We handle all permit filings and coordinate inspections for complete compliance.",
        features: ["Full Property Demo", "NYC DOT Standards", "Professional Hand Finishing", "Permit Filing Included"],
        stats: [{ label: "Concrete Thickness", value: "4 Inches Minimum" }, { label: "Standard Compliance", value: "NYC DOT" }, { label: "Permit Handling", value: "Full Service" }],
        benefits: [{ title: "Long-term Property Value", description: "Fresh, professionally finished sidewalks that will provide decades of maintenance-free service and curb appeal.", icon: "TrendingUp" }],
        process: ["Complete Excavation", "DOT Inspection Prep", "Continuous Concrete Pour", "Precision Pitching & Finishing"],
        faqs: [
          { question: "Does sidewalk replacement require city permits?", answer: "Yes, all sidewalk replacement requires NYC DOT permits which we file and manage completely for you." },
          { question: "How long does full sidewalk replacement take?", answer: "Typical residential property (50-100 feet) takes 3-5 days including excavation, forming, pouring, and curing time." },
          { question: "What is the standard sidewalk thickness requirement?", answer: "NYC DOT requires minimum 4 inches for pedestrian sidewalks, 6 inches for driveways or areas subject to vehicle loading." },
          { question: "Can I choose decorative finishes for my sidewalk?", answer: "Standard sidewalks require broom finish per DOT specs, but stamped or colored concrete may be allowed with special approval." },
          { question: "How much does full sidewalk replacement cost?", answer: "Costs typically range from $15-30 per square foot installed, including permits, excavation, materials, and finishing." }
        ]
      },
      {
        id: "driveway-replacement",
        ...getAsset("driveway-replacement"),
        description: "Heavy-duty concrete driveway restoration and new construction pours.",
        longDescription: "We provide high-strength concrete driveway solutions engineered to support heavy vehicle weight, including delivery trucks and garbage haulers. Our reinforced driveways feature rebar grids, expansion joints, and high-PSI mixes that resist cracking from freeze-thaw cycles and heavy loads for decades of maintenance-free service.",
        features: ["Rebar Reinforcement", "Professional Broom Finish", "Expansion Joint Installation", "High-PSI Mix Design"],
        stats: [{ label: "Compressive Strength", value: "4500+ PSI" }, { label: "Cure Protection", value: "7 Days" }, { label: "Reinforcement", value: "Rebar Grid" }],
        benefits: [{ title: "Heavy Vehicle Support", description: "Reinforced concrete engineered to prevent cracking and settling under garbage trucks and delivery vehicles.", icon: "Truck" }],
        process: ["Sub-base Compaction", "Rebar Grid Installation", "Precision Concrete Pour", "Joint Cutting & Curing"],
        faqs: [
          { question: "Can a residential driveway handle heavy truck traffic?", answer: "Yes, our reinforced 4500+ PSI concrete mix is specifically engineered for heavy vehicle loads and daily truck traffic." },
          { question: "How long does new concrete driveway need to cure?", answer: "Light foot traffic: 24-48 hours. Vehicle traffic: Minimum 7 days, with full strength reached at 28 days." },
          { question: "Why do concrete driveways crack?", answer: "All concrete cracks—we install control joints to direct cracking to straight lines rather than random locations." },
          { question: "What is the best driveway thickness?", answer: "Standard residential: 4 inches. For heavy trucks: 6 inches with rebar reinforcement at 18-inch centers." },
          { question: "Can you pour concrete in cold weather?", answer: "Yes, we use heated concrete, insulated blankets, and accelerators for winter pours, though spring-fall offers optimal curing conditions." }
        ]
      },
      {
        id: "sidewalk-violation-removal",
        ...getAsset("sidewalk-violation-removal"),
        description: "Legal and construction services for DOT sidewalk citation clearance.",
        longDescription: "We specialize in resolving NYC DOT sidewalk violations from initial citation to final sign-off. Our service includes violation review, permit filing, certified repair work, and DOB/DOT inspection coordination. We handle everything needed to clear city liens and restore your property to good legal standing quickly and cost-effectively.",
        features: ["DOT Expediting Service", "Code-compliant Repairs", "City Lien Removal", "Full Documentation"],
        stats: [{ label: "Sign-off Guarantee", value: "100%" }, { label: "Accruing Fines", value: "Stopped" }, { label: "Processing Time", value: "Expedited" }],
        benefits: [{ title: "Title Clearance Protection", description: "Removing city-imposed liens that prevent property sales, refinancing, or ownership transfer.", icon: "FileCheck" }],
        process: ["Violation Review & Plan", "DOT Permit Filing", "Certified Repair Work", "Final Inspection Sign-off"],
        faqs: [
          { question: "How quickly can DOT sidewalk violations be cleared?", answer: "Emergency repairs can be done in 1-2 days, with city processing and sign-off typically taking 4-8 weeks." },
          { question: "What happens if I ignore a sidewalk violation?", answer: "The city will perform repairs at your expense (often 2-3x market rates), place a lien on your property, and add daily fines." },
          { question: "How much are DOT violation penalties?", answer: "Initial violations start around $200 with daily penalties accruing until resolution. City-performed repairs can cost thousands." },
          { question: "Can violations affect property sale or refinancing?", answer: "Yes, open violations and city liens must be resolved before title transfer or mortgage approval by most lenders." },
          { question: "Do you handle protest of unjust violations?", answer: "Yes, we can contest violations where conditions don't match citation or where city trees/utilities caused the damage." }
        ]
      },
      {
        id: "dot-violation-removal",
        ...getAsset("dot-violation-removal"),
        description: "Specialized assistance for Department of Transportation sidewalk citations.",
        longDescription: "Focusing specifically on DOT-issued trip hazard, maintenance, and defective sidewalk violations. We evaluate the specific citation requirements, perform certified repairs to exact city specifications, and manage all paperwork with DOT officials to achieve expedited dismissal of violations and associated penalties.",
        features: ["Trip Hazard Correction", "Proper Pitch Restoration", "DOT Expedited Filing", "Penalty Avoidance"],
        stats: [{ label: "Repair Accuracy", value: "100%" }, { label: "DOT Compliance", value: "Guaranteed" }, { label: "Fine Accumulation", value: "Stopped" }],
        benefits: [{ title: "Financial Penalty Avoidance", description: "Stop the city from performing their own expensive repair work and billing you at inflated municipal rates.", icon: "Gavel" }],
        process: ["DOT Record Search", "On-site Correction", "Affidavit Filing", "City Verification Dismissal"],
        faqs: [
          { question: "What is an Expedited DOT Dismissal?", answer: "A process where we certify repair completion directly to DOT officials, expediting the dismissal of your violation within 2-3 weeks." },
          { question: "What's the difference between DOT and DOB violations?", answer: "DOT handles sidewalk and public way violations; DOB handles structural, building code, and construction-related violations." },
          { question: "Can a sidewalk have multiple active violations?", answer: "Yes, each hazard or code violation generates separate citations, all requiring individual resolution before property status clears." },
          { question: "How do I know if I have a sidewalk violation?", answer: "Check NYC DOB's BIS (Building Information System) online, or we can perform a violation search for your property." },
          { question: "What constitutes a DOT trip hazard?", answer: "Vertical displacement over 1/2 inch, cracks creating unstable surfaces, spalled areas, or missing concrete chunks are all violations." }
        ]
      },
      {
        id: "dob-violation-removal",
        ...getAsset("dob-violation-removal"),
        description: "Professional resolution of Department of Buildings concrete and structural citations.",
        longDescription: "Handling complex DOB violations related to unauthorized concrete work, structural safety issues, and zoning code violations. Our team works with expeditors and structural engineers to navigate the DOB's strict requirements, filing amendments and performing corrective work to achieve full compliance sign-off.",
        features: ["DOB Expediting Service", "Permit Recovery Process", "As-Built Documentation", "Structural Engineering"],
        stats: [{ label: "Violation Status", value: "Cleared" }, { label: "Legal Compliance", value: "Handled" }, { label: "DOB Filing", value: "Complete" }],
        benefits: [{ title: "Safe Property Certification", description: "Ensuring your building meets all DOB safety codes, protecting occupants and avoiding legal liability.", icon: "ShieldCheck" }],
        process: ["Violation Analysis", "Architectural Filing", "Corrective Work", "Final DOB Sign-off & Dismissal"],
        faqs: [
          { question: "Can DOB violations affect mortgage approval?", answer: "Yes, lenders almost always require clear DOB records and violation dismissal before approving property loans or refinancing." },
          { question: "What's the difference between ECB and DOB violations?", answer: "ECB handles administrative hearings and fines for violations; DOB issues the original citations and requires corrective work sign-off." },
          { question: "How long does DOB violation removal take?", answer: "Simple violations: 2-4 weeks. Complex structural violations requiring permits: 3-6 months depending on scope." },
          { question: "What are common concrete-related DOB violations?", answer: "Unpermitted concrete work, foundation modifications without approval, improper sidewalk thickness, and structural safety issues." },
          { question: "Do I need an architect for DOB violation removal?", answer: "Structural violations typically require licensed professional sign-off. We coordinate with architects and expeditors as part of our service." }
        ]
      },
      {
        id: "foundation-work",
        ...getAsset("foundation-work"),
        description: "Structural concrete foundations and building underpinning services.",
        longDescription: "High-strength poured concrete foundations for new construction and structural reinforcement of existing buildings. Our foundation services include building underpinning for basement deepening, foundation wall replacement, and seismic retrofits using high-PSI concrete, rebar engineering, and professional waterproofing integration for maximum structural integrity.",
        features: ["Building Underpinning", "Poured Concrete Foundations", "Integrated Waterproofing", "Structural Engineering"],
        stats: [{ label: "Concrete Strength", value: "4000+ PSI" }, { label: "Structural Grade", value: "Industrial" }, { label: "Waterproofing", value: "Integrated" }],
        benefits: [{ title: "Core Building Stability", description: "The most critical structural element of any building, professionally engineered to support your entire structure.", icon: "Building2" }],
        process: ["Site Excavation", "Formwork Shuttering", "Rebar Reinforcement Grid", "Continuous Concrete Pour"],
        faqs: [
          { question: "Does your company do foundation underpinning?", answer: "Yes, we safely deepen or reinforce existing foundations for basement height increases and structural stabilization." },
          { question: "How deep should foundation footings be in NYC?", answer: "Minimum 36-48 inches below grade to reach below frost line, deeper for larger buildings based on engineering calculations." },
          { question: "What are signs of foundation failure?", answer: "Diagonal wall cracks, sticking windows/doors, uneven floors, water entry, and visible foundation wall bowing or displacement." },
          { question: "How much does foundation repair cost?", answer: "Minor crack repairs: $500-2,000. Major underpinning: $20,000-100,000+ depending on scope and accessibility." },
          { question: "Can you repair foundations without excavating both sides?", answer: "Yes, for minor repairs. Major foundation work typically requires exterior excavation for proper waterproofing and structural access." }
        ],
        galleryImages: ["/assets/megaconcretework1.jfif", "/assets/megaconcretework2.jfif", "/assets/megaconcretewalkwayenterance1.jfif"]
      },
      {
        id: "backyard-concrete",
        ...getAsset("backyard-concrete"),
        description: "Professional backyard concrete slabs, patios, and outdoor spaces.",
        longDescription: "Professional backyard concrete installations including patio slabs, walkways, and outdoor kitchen bases. Our backyard concrete features proper slope for drainage, professional finishing options including exposed aggregate and stamped patterns, and reinforcement for freeze-thaw durability. We transform underutilized outdoor spaces into functional entertainment areas.",
        features: ["Patio Slab Installation", "Integrated Drainage Systems", "Professional Broom Finish", "Stamped Pattern Options"],
        stats: [{ label: "Property Value ROI", value: "Significant" }, { label: "Water Pitch", value: "Optimized" }, { label: "Finish Options", value: "Multiple" }],
        benefits: [{ title: "Low Maintenance Outdoor Living", description: "Durable, clean, easy-maintenance surfaces that expand usable living space and increase property enjoyment.", icon: "RefreshCw" }],
        process: ["Site Leveling", "Sub-base Preparation", "Reinforcement Installation", "Final Concrete Pour & Finish"],
        faqs: [
          { question: "Will my backyard concrete patio drain properly?", answer: "Yes, every concrete project includes a professionally calculated pitch that directs water away from your building." },
          { question: "Can concrete be stamped to look like stone or brick?", answer: "Yes, stamped concrete offers the look of natural stone, brick, or slate at a fraction of the material and installation cost." },
          { question: "How do you prevent concrete from cracking in backyards?", answer: "We use control joints every 8-10 feet, fiber-reinforced mix, proper sub-base compaction, and curing compounds to minimize cracking." },
          { question: "What's the difference between broom finish and smooth finish?", answer: "Broom finish provides slip resistance ideal for wet areas. Smooth finish offers easier cleaning but less traction when wet." },
          { question: "How soon can we use our new concrete patio?", answer: "Light foot traffic after 48 hours, furniture placement after 7 days, and heavy use after full 28-day curing period for maximum strength." }
        ]
      }
    ]
  },
  {
    id: "home-renovation",
    ...getAsset("home-renovation"),
    description: "Complete interior home transformations from kitchens and bathrooms to full gut renovations.",
    icon: "Layout",
    tag: "Interior",
    secondaryImage: "/assets/custom-home.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Kitchen Remodeling", "Bathroom Renovation", "Basement Finishing", "Complete Interior Remodeling"],
    categoryBenefits: [
      { title: "Turnkey Project Solutions", description: "From initial design concepts through final inspection, we handle every aspect of your renovation.", icon: "Key" },
      { title: "Premium Material Sourcing", description: "Access to trade-only suppliers for cabinetry, natural stone, fixtures, and finish materials.", icon: "Gem" },
      { title: "Fixed Timeline Commitment", description: "We respect your schedule with clear timelines and constant communication throughout the project.", icon: "Calendar" }
    ],
    subcategories: [
      {
        id: "kitchen-renovation",
        ...getAsset("kitchen-renovation"),
        description: "Custom cabinetry and modern kitchen layout transformation services.",
        longDescription: "Complete kitchen overhauls including custom cabinetry design and installation, natural stone countertops, under cabinet lighting, and full plumbing/electrical integration. Our kitchen specialists work with professional designers to create beautiful, functional cooking spaces that dramatically increase home value and daily living enjoyment.",
        features: ["Custom Cabinet Design", "Natural Stone Counters", "Modern Plumbing Fixtures", "Under Cabinet Lighting"],
        stats: [{ label: "Property Value ROI", value: "+25%" }, { label: "Design Quality", value: "Bespoke" }, { label: "Project Timeline", value: "6-10 Weeks" }],
        benefits: [{ title: "Maximum Return on Investment", description: "Professional kitchen renovations offer the highest property value return of any home improvement project.", icon: "DollarSign" }],
        process: ["Design Consultation", "Complete Demolition", "Rough-in Work", "Cabinet Installation", "Final Finishing Details"],
        faqs: [
          { question: "How long does a complete kitchen renovation typically take?", answer: "A full kitchen renovation with custom cabinetry and new appliances typically takes 6-10 weeks from demo to completion." },
          { question: "Do I need permits for kitchen renovation in NYC?", answer: "Yes, plumbing, electrical, and structural changes require DOB permits. Cosmetic updates (cabinets, counters, appliances) typically don't." },
          { question: "What is the average cost of kitchen renovation in NYC?", answer: "Basic updates: $20,000-40,000. Mid-range: $40,000-80,000. High-end luxury: $80,000-200,000+ depending on scope and materials." },
          { question: "Can we stay in our home during kitchen renovation?", answer: "Yes, though you'll need a temporary kitchen setup (microwave, mini-fridge). We contain dust and noise to work areas as much as possible." },
          { question: "What's the best kitchen countertop material?", answer: "Quartz offers durability and low maintenance. Granite provides natural beauty but requires sealing. Each has advantages depending on usage." }
        ]
      },
      {
        id: "bathroom-renovation",
        ...getAsset("bathroom-renovation"),
        description: "Luxury bathroom renovations with spa-like features and premium tile work.",
        longDescription: "Comprehensive bathroom renovation including waterproofing systems, premium tile installation, luxury fixture installation, and spa-like feature integration. Our bathroom specialists create relaxing, spa-quality spaces with rain shower systems, soaking tubs, heated floors, and custom vanities that transform daily routines into luxury experiences.",
        features: ["Spa Shower Systems", "Full Waterproofing", "Artisan Tile Work", "Heated Floor Options"],
        stats: [{ label: "Spa Quality Grade", value: "Platinum" }, { label: "Tile Precision", value: "Professional" }, { label: "Waterproofing", value: "Schluter Certified" }],
        benefits: [{ title: "Complete Water Protection", description: "Schluter-certified waterproofing systems that guarantee no moisture penetration behind walls or into subfloors.", icon: "Droplets" }],
        process: ["Area Protection", "Complete Demolition", "Schluter Waterproofing", "Tile Installation", "Fixture Installation"],
        faqs: [
          { question: "Do your bathroom renovations include Schluter waterproofing systems?", answer: "Yes, we are certified Schluter installers, providing industry-leading waterproofing with full warranty coverage." },
          { question: "How long does bathroom renovation take in NYC?", answer: "Standard bathroom: 3-5 weeks. Master bath with luxury features: 5-8 weeks depending on custom elements and complexity." },
          { question: "What bathroom renovations offer best ROI?", answer: "Mid-range bathroom updates typically recoup 60-70% of costs. High-end luxury baths offer lower ROI but greater personal enjoyment." },
          { question: "Can you renovate a bathroom without moving walls?", answer: "Absolutely. We can completely transform finishes, fixtures, and layouts within existing footprints without structural changes or extra permits." },
          { question: "What's the best flooring for bathrooms?", answer: "Porcelain tile offers water resistance and durability. Heated floors provide luxury. Luxury vinyl offers budget-friendly waterproof options." }
        ],
        galleryImages: ["/assets/megabathom1.jfif", "/assets/megabathroom2.jfif", "/assets/megabathroom3.jfif"]
      },
      {
        id: "basement-renovation",
        ...getAsset("basement-renovation"),
        description: "Transforming damp basements into functional, beautiful living spaces.",
        longDescription: "Converting dark, damp, underutilized basements into high-end living areas with full waterproofing integration. Our basement renovations include egress window installation for legal bedrooms, recessed LED lighting, luxury vinyl plank flooring, and comprehensive moisture control systems that create warm, dry, comfortable environments ideal for home theaters, gyms, or guest suites.",
        features: ["Egress Window Installation", "Full Waterproofing Systems", "Recessed LED Lighting", "Moisture Control Guarantee"],
        stats: [{ label: "Usable Space Increase", value: "Maximized" }, { label: "Dryness Guarantee", value: "100%" }, { label: "Compliance", value: "Egress Certified" }],
        benefits: [{ title: "Dramatic Square Footage Increase", description: "Effectively doubling your home's usable living space while significantly increasing property value.", icon: "Layout" }],
        process: ["Waterproofing Installation", "Wall Framing", "Electrical Rough-in", "Insulation Application", "Flooring & Finishing"],
        faqs: [
          { question: "How do you stop basement water infiltration permanently?", answer: "We install comprehensive interior drainage systems with sump pumps that capture and redirect groundwater before it enters your space." },
          { question: "What is required for legal basement bedroom in NYC?", answer: "Egress window meeting size requirements, ceiling height minimums, proper ventilation, and separate means of egress from upper floors." },
          { question: "How much does basement renovation cost in NYC?", answer: "Basic finishing: $30-60 per sq ft. Full high-end: $75-150+ per sq ft depending on bathroom, kitchenette, and other features." },
          { question: "Do I need permits for basement renovation?", answer: "Yes, almost all basement renovations require DOB permits including egress, electrical, plumbing, and occupancy classification changes." },
          { question: "What is the minimum ceiling height for basements?", answer: "NYC code requires 7 feet minimum for habitable spaces, though existing basements may have grandfather clauses for lower heights." }
        ]
      },
      {
        id: "interior-remodeling",
        ...getAsset("interior-remodeling"),
        description: "Full gut renovations and complete apartment transformations.",
        longDescription: "Complete interior remodeling including structural wall removal, high-end finish carpentry, and professional plastering for NYC apartments and homes. Our full gut renovations address every detail from subfloor replacement to crown molding installation, creating cohesive, beautifully finished interiors that reflect your personal style and functional needs.",
        features: ["Structural Wall Removal", "Professional Finish Carpentry", "Venetian Plastering", "Full Gut Capability"],
        stats: [{ label: "Finish Quality", value: "Elite" }, { label: "Carpentry Detail", value: "Artisan" }, { label: "Project Scale", value: "Full Home" }],
        benefits: [{ title: "Completely Custom Living", description: "A home environment tailored exactly to your lifestyle, workflow, and aesthetic preferences.", icon: "Sparkles" }],
        process: ["Comprehensive Planning", "Full Demolition", "Framing & Structure", "Plaster/Drywall Installation", "Flooring & Trim Details"],
        faqs: [
          { question: "Does your company handle NYC co-op board approval requirements?", answer: "Yes, we have extensive experience with co-op and condo board requirements, insurance certificates, and alteration agreements." },
          { question: "How long does a full apartment gut renovation take?", answer: "One-bedroom: 2-3 months. 2-3 bedroom: 3-5 months. Full townhouse: 6-12 months depending on scope and complexity." },
          { question: "What is the cost of full gut renovation in NYC?", answer: "$150-300 per square foot for mid-range finishes. High-end luxury projects can exceed $400-600 per square foot." },
          { question: "Do you need to move out during gut renovation?", answer: "For full gut renovations involving kitchens and baths, temporary relocation is strongly recommended due to lack of essential services." },
          { question: "What's the difference between renovation and restoration?", answer: "Renovation updates to modern standards. Restoration returns property to original historic condition with period-appropriate materials and techniques." }
        ]
      }
    ]
  },
  {
    id: "stucco",
    ...getAsset("stucco"),
    description: "Premium exterior stucco application and California-style finishes for residential and commercial buildings.",
    icon: "PaintBucket",
    tag: "Exterior",
    secondaryImage: "/assets/general-contracting.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Professional Stucco Repair", "Traditional 3-Coat", "Custom Color Matching", "Californian Finish", "EIFS Systems Installation"],
    categoryBenefits: [
      { title: "High Insulation Value", description: "High R-value exterior insulation systems that significantly reduce energy costs.", icon: "Sun" },
      { title: "Crack-Free Flexible Finish", description: "Flexible base coat systems engineered to prevent cracking from building movement.", icon: "Shield" },
      { title: "Artisan Textures", description: "Hand-applied specialty textures that create unique architectural character.", icon: "Palette" }
    ],
    subcategories: [
      {
        id: "stucco-repair",
        ...getAsset("stucco-repair"),
        description: "Precision restoration of cracked, damaged, or deteriorating stucco facades.",
        longDescription: "Precision repair of stucco surfaces to prevent water ingress and structural deterioration. Our comprehensive stucco repair service identifies the source of damage, removes deteriorated material, repairs underlying substrate issues, and applies matching finishes that blend seamlessly with existing stucco while providing superior weather protection for decades of trouble-free service.",
        features: ["Fine Crack Injection", "Exact Color Matching", "Substrate Repair", "Weather Seal Application"],
        stats: [{ label: "Color Match Accuracy", value: "Exact" }, { label: "Water Seal Rating", value: "100%" }, { label: "Repair Longevity", value: "Decades" }],
        benefits: [{ title: "Water Infiltration Prevention", description: "Stopping water intrusion that causes hidden structural rot, mold growth, and interior damage behind stucco.", icon: "ShieldAlert" }],
        process: ["Defect Removal", "Lath Condition Check", "Base/Mesh Application", "Color-matched Patch", "Texture Blend", "Protective Seal"],
        faqs: [
          { question: "Can you color-match aged, faded stucco exactly?", answer: "Yes, we digitally analyze existing color and custom-mix pigments to match even weathered, UV-faded finishes precisely." },
          { question: "How do I know if stucco needs repair?", answer: "Signs include hairline cracks, bulging areas, hollow sounds when tapped, efflorescence (white stains), or visible water staining." },
          { question: "How long does stucco repair take?", answer: "Small repairs: 1-2 days. Large sections: 3-7 days depending on access, weather, and curing requirements." },
          { question: "Can stucco be repaired in winter?", answer: "Yes, using cold-weather additives and protection, though spring through fall offers optimal curing conditions." },
          { question: "What causes stucco to crack?", answer: "Building settlement, temperature fluctuations, freeze-thaw cycles, impact damage, or improper original installation are common causes." }
        ]
      },
      {
        id: "traditional-stucco",
        ...getAsset("traditional-stucco"),
        description: "Authentic 3-coat cementitious stucco for maximum durability and fire resistance.",
        longDescription: "High-durability traditional Portland cement stucco applied in the classic 3-coat system for rock-solid, impact-resistant finishes. Traditional stucco provides unmatched hardness, fire resistance, and longevity, making it ideal for buildings requiring maximum protection. Our experienced applicators ensure proper curing and thickness for lifetime durability.",
        features: ["Professional 3-Coat System", "Class A Fire Resistant", "Impact Resistant", "50+ Year Longevity"],
        stats: [{ label: "Surface Hardness", value: "Industrial" }, { label: "System Longevity", value: "50+ Years" }, { label: "Fire Rating", value: "Class A" }],
        benefits: [{ title: "Maximum Fire Safety", description: "Traditional Portland cement stucco is completely non-combustible, providing superior fire protection for your building.", icon: "ShieldCheck" }],
        process: ["Wire Lath Installation", "Scratch Coat Application", "Brown Coat Application", "Curing Period", "Finish Coat Texturing"],
        faqs: [
          { question: "Is traditional stucco or EIFS better for my building?", answer: "Traditional stucco offers superior hardness and impact resistance; EIFS offers better insulation value. Choose based on your priorities." },
          { question: "How thick is traditional 3-coat stucco?", answer: "Traditional 3-coat system is approximately 7/8 inch total thickness (scratch: 3/8\", brown: 3/8\", finish: 1/8\")." },
          { question: "How long must traditional stucco cure?", answer: "Each coat requires curing time—typically 2-3 days between coats, with final finish needing 7-30 days for complete cure depending on weather." },
          { question: "Can traditional stucco be applied to any surface?", answer: "Traditional stucco requires proper substrate including wire lath and weather-resistant barrier applied over sheathing or masonry." },
          { question: "What maintenance does traditional stucco need?", answer: "Periodic inspection, cleaning every 3-5 years, sealing cracks promptly, and repainting every 8-12 years depending on exposure." }
        ]
      },
      {
        id: "color-matching",
        ...getAsset("color-matching"),
        description: "Scientific digital color matching for invisible stucco and exterior finish repairs.",
        longDescription: "Using digital spectrophotometer analysis and hand-tinted, UV-stable pigments to ensure stucco repairs become completely invisible. Our color matching service captures the exact color characteristics of your existing finish, including undertones and weathering effects, then formulates custom pigments that match perfectly now and age consistently for seamless integration over time.",
        features: ["Digital Spectrophotometer Analysis", "UV-Stable Pigment Formulation", "Weathered Finish Matching", "Seamless Blend Guarantee"],
        stats: [{ label: "Color Accuracy", value: "99%" }, { label: "Repair Seamlessness", value: "Invisible" }, { label: "UV Stability", value: "Premium" }],
        benefits: [{ title: "Truly Invisible Repairs", description: "Maintaining your property's uniform aesthetic without visible patches or mismatched sections.", icon: "Eye" }],
        process: ["Digital Color Sampling", "Pigment Formulation", "Test Swatch Application", "Drying Verification", "Final Approval & Application"],
        faqs: [
          { question: "Will custom-matched colors fade differently than original stucco?", answer: "We use premium UV-stable pigments identical to those used in original stucco manufacturing for consistent aging and fading patterns." },
          { question: "Can you match stucco texture as well as color?", answer: "Yes, we replicate textures using specialized techniques including spray, dash, swirl, or hand-troweled finishes to match existing patterns." },
          { question: "How many test patches do you create?", answer: "We typically create 2-3 test patches with slight variations, allowing you to select the perfect match before full application." },
          { question: "Does color matching cost extra?", answer: "Yes, due to custom pigment formulation and test patches, color matching adds to standard repair costs but ensures invisible results." },
          { question: "Can you match painted stucco?", answer: "Yes, though additional layering may be needed to match paint texture and sheen rather than natural stucco finish." }
        ]
      },
      {
        id: "californian-stucco",
        ...getAsset("californian-stucco"),
        description: "Premium heavy-texture traditional stucco finish for luxury exteriors.",
        longDescription: "A highly textured, artisan-applied traditional stucco finish that provides a unique, dimensional aesthetic for luxury residential and commercial exteriors. The California finish creates dramatic shadow lines and visual depth through hand-troweled techniques, producing a rustic yet refined appearance that distinguishes high-end properties from standard construction with old-world craftsmanship.",
        features: ["Heavy Hand Texture", "Artisan Application Only", "Dramatic Shadow Lines", "Traditional Base Materials"],
        stats: [{ label: "Texture Quality", value: "Hand-Crafted" }, { label: "Aesthetic Grade", value: "Premium" }, { label: "Application Method", value: "Artisan Only" }],
        benefits: [{ title: "Dynamic Architectural Depth", description: "A layered, dimensional look that reacts beautifully with changing natural light throughout the day.", icon: "Sparkles" }],
        process: ["Surface Preparation", "Scratch Coat", "Brown Coat", "Heavy Texture Layer Application", "Proper Curing", "Protective Sealer"],
        faqs: [
          { question: "What exactly is the California stucco finish?", answer: "A heavy, rustic hand-troweled texture that creates deep shadow lines and Mediterranean character, popular for luxury homes." },
          { question: "How much more does California finish cost?", answer: "California finish typically costs 25-40% more than traditional smooth finish due to specialized artisan labor and application time." },
          { question: "Is California stucco more durable?", answer: "The heavy texture provides the same durability as traditional stucco but may trap more dirt requiring periodic power washing." },
          { question: "Can California finish be repaired invisibly?", answer: "Perfectly matching heavy hand textures is challenging. We recommend retaining original materials for best possible match during repairs." },
          { question: "What architectural styles suit California finish?", answer: "Mediterranean, Spanish, Tuscan, Santa Barbara, and Southwestern styles. Not recommended for modern minimalist or traditional colonial designs." }
        ]
      },
      {
        id: "eifs-systems",
        ...getAsset("eifs-systems"),
        description: "Superior exterior insulation and finish systems for energy efficiency.",
        longDescription: "Providing high-performance thermal insulation and durable, beautiful exterior finishes through EIFS (Exterior Insulation and Finish System) technology. Our EIFS systems create a continuous insulation envelope around your building, eliminating thermal bridges while providing design flexibility with virtually unlimited color and texture options for distinctive architectural expression.",
        features: ["Energy Efficiency Optimization", "Crack-Resistant Technology", "Design Flexibility", "Continuous Insulation"],
        stats: [{ label: "Energy Savings", value: "30%" }, { label: "System Longevity", value: "30+ Years" }, { label: "Color Options", value: "Unlimited" }],
        benefits: [{ title: "Thermal Bridge Elimination", description: "Continuous exterior insulation completely prevents heat loss through wall framing, dramatically reducing energy costs.", icon: "Thermometer" }],
        process: ["Substrate Preparation", "Insulation Board Installation", "Base Coat Application", "Reinforcing Mesh", "Finish Coat Texturing"],
        faqs: [
          { question: "Are EIFS stucco systems truly waterproof?", answer: "Yes, with properly installed drainage planes and termination details, EIFS provides excellent water resistance and moisture management." },
          { question: "How does EIFS compare to traditional stucco cost?", answer: "EIFS typically costs 15-25% more than traditional stucco but offers superior insulation and energy savings that offset initial investment." },
          { question: "Can EIFS be installed over existing surfaces?", answer: "Yes, EIFS can be applied over most substrates including existing stucco, concrete, or masonry after proper surface preparation." },
          { question: "Is EIFS impact resistant enough for NYC?", answer: "Modern EIFS systems use reinforced mesh and impact-resistant base coats that meet commercial building standards for durability." },
          { question: "Does EIFS require special maintenance?", answer: "EIFS requires similar maintenance to traditional stucco—annual inspection, cleaning, and prompt repair of any cracks or damage." }
        ]
      }
    ]
  },
  {
    id: "custom-home-building",
    ...getAsset("custom-home-building"),
    description: "Bespoke luxury home construction from initial design through complete project management.",
    icon: "Home",
    tag: "Custom",
    secondaryImage: "/assets/customhome.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Design-Build Services", "Luxury Finish Installation", "Full Project Management", "Smart Home Integration"],
    subcategories: [
      {
        id: "design-build",
        ...getAsset("design-build"),
        description: "Integrated architectural design and construction under one contract.",
        longDescription: "A streamlined design-build approach handling everything from architectural blueprints to final construction under one unified team. This integrated model eliminates communication gaps between designer and builder, accelerates project timelines, controls costs through early collaboration, and delivers cohesive results aligned with your vision from concept through completion without finger-pointing or change order battles.",
        features: ["Full Architectural Services", "Streamlined Workflow", "Single Point Accountability", "Cost Control Systems"],
        stats: [{ label: "Time Savings", value: "30%" }, { label: "Budget Adherence", value: "95%+" }, { label: "Change Orders", value: "Reduced" }],
        benefits: [{ title: "Complete Budget Control", description: "Design developed alongside real-time cost estimation, eliminating surprises and value engineering crises.", icon: "DollarSign" }],
        process: ["Feasibility Study", "Site Analysis", "Design Development", "Permitting", "Construction", "Final Handover"],
        faqs: [
          { question: "What's the advantage of design-build vs. traditional construction?", answer: "Single contract equals single accountability. Design-build eliminates finger-pointing between architect and contractor, typically saving 20-30% of project time." },
          { question: "Do you have in-house architects?", answer: "Yes, our integrated team includes licensed architects, engineers, and construction managers working collaboratively from day one." },
          { question: "Can we bring our own architect?", answer: "Yes, we collaborate with your architect on design-build or offer traditional plan-and-spec construction at your request." },
          { question: "How much does design-build cost per square foot?", answer: "Custom luxury homes typically range $400-800+ per square foot depending on finishes, site conditions, and architectural complexity." },
          { question: "How long does custom home construction take?", answer: "Design phase: 3-6 months. Permitting: 3-8 months. Construction: 12-24 months depending on size, complexity, and site conditions." }
        ]
      },
      {
        id: "luxury-finishes",
        ...getAsset("luxury-finishes"),
        description: "Artisan interior finishes and premium material selection for custom homes.",
        longDescription: "Specializing in exotic natural stones, custom architectural millwork, Venetian plastering, and hand-applied specialty finishes. Our luxury finish team sources materials globally and employs master craftsmen for installations that achieve museum-quality standards, creating distinctive, heirloom-quality interiors that cannot be replicated by standard production builders.",
        features: ["Custom Architectural Millwork", "Exotic Natural Stones", "Venetian Plastering", "Hand-Applied Specialty Finishes"],
        stats: [{ label: "Workmanship Quality", value: "Museum Grade" }, { label: "Material Sourcing", value: "Global" }, { label: "Installation Method", value: "Artisan Only" }],
        benefits: [{ title: "Heirloom Artisan Craftsmanship", description: "Finishes installed by the world's most skilled craftsmen, creating irreplaceable architectural character.", icon: "Award" }],
        process: ["Material Selection", "Shop Drawings", "Mockup Creation", "Precision Installation", "Final Polishing & Sealing"],
        faqs: [
          { question: "Does your firm source materials internationally?", answer: "Yes, we source Italian marble, French limestone, exotic African hardwoods, and other global materials for discerning clients." },
          { question: "What is Venetian plastering?", answer: "A high-end wall finish using burnished lime plaster creating polished marble-like depth with subtle color variations impossible to achieve with paint." },
          { question: "How long do luxury finish installations take?", answer: "Millwork: 4-8 weeks. Stone: 2-4 weeks. Venetian plaster: 1-3 weeks depending on area and complexity of decorative elements." },
          { question: "Can you match existing architectural details?", answer: "Yes, we can replicate period moldings, carvings, and decorative elements by creating custom knives and templates for perfect matches." },
          { question: "What maintenance do luxury finishes require?", answer: "Natural stone needs periodic sealing, millwork occasional polishing or waxing, Venetian plaster none beyond normal cleaning." }
        ]
      },
      {
        id: "project-management",
        ...getAsset("project-management"),
        description: "Professional construction oversight for complex building projects.",
        longDescription: "Professional oversight of all construction aspects including timeline management, subcontractor coordination, quality control, budget tracking, and client communication. Our project managers serve as your single point of contact, handling every detail from permit expediting to final walkthrough, ensuring your project stays on schedule, within budget, and exceeds quality expectations without the stress of managing multiple trades.",
        features: ["Timeline Management Systems", "Quality Control Protocols", "Subcontractor Coordination", "Real-Time Budget Tracking"],
        stats: [{ label: "Schedule Efficiency", value: "+40%" }, { label: "Budget Adherence", value: "95%+" }, { label: "Quality Standard", value: "Verified" }],
        benefits: [{ title: "Stress-Free Construction Experience", description: "We handle all complexity, vendor coordination, and problem-solving so you can focus on your life.", icon: "ShieldCheck" }],
        process: ["Master Scheduling", "Vendor Selection Management", "On-site Supervision", "Progress Reporting", "Quality Verification", "Final Walkthrough"],
        faqs: [
          { question: "Will your project managers handle all subcontractors?", answer: "Yes, we manage every trade on site from demolition to final finishes, coordinating all scheduling, quality control, and payments." },
          { question: "How often will I receive project updates?", answer: "Weekly written reports, bi-weekly on-site meetings, plus immediate notifications for any significant issues, delays, or changes." },
          { question: "What happens if project falls behind schedule?", answer: "We identify causes, implement recovery plans, add resources if needed, and communicate impact and solutions within 48 hours." },
          { question: "How do you handle change orders?", answer: "All changes documented in writing with cost and time impacts before approval. We minimize changes through thorough pre-construction planning." },
          { question: "Do you manage permit expediting?", answer: "Yes, we handle all permit applications, DOB filings, inspections coordination, and certificate of occupancy finalization." }
        ]
      },
      {
        id: "smart-homes",
        ...getAsset("smart-homes"),
        description: "High-tech home automation and integrated security system installation.",
        longDescription: "Building next-generation smart homes with integrated climate control, architectural lighting, entertainment systems, and comprehensive security. Our pre-construction planning ensures proper rough-in for all automation systems, creating seamless technology integration that operates intuitively while remaining invisible when not in use. Control everything from lighting to shades to security from any device anywhere.",
        features: ["Full Home Automation", "Integrated Security Systems", "Climate Control Zones", "Architectural Lighting Design"],
        stats: [{ label: "Energy Efficiency", value: "+30%" }, { label: "Technology Level", value: "Future-Proof" }, { label: "System Integration", value: "Seamless" }],
        benefits: [{ title: "Intelligent Modern Living", description: "A home that anticipates and responds to your needs, managing energy, comfort, and security automatically.", icon: "Cpu" }],
        process: ["System Design & Engineering", "Pre-construction Rough-in", "Device Installation", "Software Configuration", "User Training & Handover"],
        faqs: [
          { question: "Can I control my entire home from my smartphone?", answer: "Yes, our systems are fully integrated with iOS and Android apps for complete remote control of all home functions from anywhere." },
          { question: "Will smart home technology become obsolete quickly?", answer: "We use open protocols and separate control systems from user interfaces, allowing component upgrades without rewiring the entire home." },
          { question: "Can I add smart features to an existing home?", answer: "Yes, though pre-construction integration is cleaner and less expensive. Retrofits are possible with wireless systems in many cases." },
          { question: "How much does whole-home automation cost?", answer: "Basic systems: $10,000-25,000. Comprehensive luxury automation: $50,000-200,000+ depending on home size and feature scope." },
          { question: "Are smart homes more energy efficient?", answer: "Yes, intelligent climate and lighting control typically reduces energy consumption by 20-30% compared to conventional systems." }
        ]
      }
    ]
  },
  {
    id: "emergency-service",
    ...getAsset("emergency-service"),
    description: "24/7 rapid emergency response for structural failures, storm damage, and property security.",
    icon: "Shield",
    tag: "24/7 Support",
    secondaryImage: "/assets/megaemergencyrepair.jpg", // TEMP IMAGE - USER WILL REPLACE
    features: ["Rapid Deployment Teams", "Safety Assessment", "Board-Up Service", "24/7 Availability"],
    subcategories: [
      {
        id: "rapid-deployment",
        ...getAsset("rapid-deployment"),
        description: "Immediate response for urgent property emergencies and structural failures.",
        longDescription: "On-call emergency teams 24/7/365 to address structural failures, storm damage, falling facades, or urgent property security needs. Our rapid deployment units carry comprehensive stabilization equipment including shoring beams, heavy-duty tarps, and communication systems for immediate response. We stabilize dangerous conditions quickly, securing your property and preventing further damage within hours, not days.",
        features: ["Immediate Team Dispatch", "Safety Priority Response", "24/7 Call Center", "Fully Equipped Emergency Trucks"],
        stats: [{ label: "Average Response", value: "60 Minutes" }, { label: "Coverage", value: "24/7/365" }, { label: "Equipment Status", value: "Ready" }],
        benefits: [{ title: "Instant Emergency Stabilization", description: "Professional shoring, bracing, and tarping to prevent collapse and further damage immediately upon arrival.", icon: "Anchor" }],
        process: ["Emergency Call Received", "Team Mobilization", "Site Arrival", "Hazard Mitigation", "Full Stabilization", "Damage Documentation"],
        faqs: [
          { question: "How fast can you arrive for an emergency?", answer: "Our emergency teams typically arrive within 60-90 minutes for NYC locations, faster for critical structural collapse risks." },
          { question: "Do you charge extra for emergency calls?", answer: "Emergency response includes premium dispatch fees plus time and materials. We provide estimates before any non-stabilization work begins." },
          { question: "What constitutes a true emergency?", answer: "Active collapse risk, falling facade hazards, active gas/water leaks, fire damage openings, or property security breaches requiring immediate attention." },
          { question: "Can you handle all emergencies or need specialists?", answer: "Our emergency teams handle stabilization. Licensed plumbers, electricians, or structural engineers join when specific expertise is needed." },
          { question: "Do you coordinate with Fire Department?", answer: "Yes, we work alongside FDNY at active emergencies, securing buildings after fire department completes investigation and scene safety protocols." }
        ]
      },
      {
        id: "safety-assessment",
        ...getAsset("safety-assessment"),
        description: "Professional post-incident structural safety evaluations.",
        longDescription: "Professional structural safety evaluations to determine if your building is safe for occupancy after fire, vehicle impact, severe storms, or suspected structural compromise. Our certified professionals assess load-bearing elements, identify hidden damage, and provide clear documented guidance on immediate safety, necessary repairs, and ongoing monitoring requirements for insurance claims and peace of mind.",
        features: ["Structural Load Evaluation", "Damage Assessment", "Occupancy Determination", "Professional Insurance-Ready Reporting"],
        stats: [{ label: "Assessment Accuracy", value: "100%" }, { label: "Response Time", value: "Within Hours" }, { label: "Documentation", value: "Insurance-Ready" }],
        benefits: [{ title: "Complete Peace of Mind", description: "Knowing exactly where your property stands regarding safety, required repairs, and future risks.", icon: "ShieldCheck" }],
        process: ["Visual Structural Check", "Equipment Testing", "Risk Analysis", "Occupancy Determination", "Detailed Report with Photos", "Recommendations"],
        faqs: [
          { question: "How quickly can your team perform an emergency safety assessment?", answer: "Our emergency assessment teams can be on-site and evaluating your building within 60 minutes of your initial call." },
          { question: "Is your safety assessment accepted by insurance companies?", answer: "Yes, we provide professional, detailed reports with photos that insurance adjusters accept for claim documentation." },
          { question: "What equipment do you use for assessments?", answer: "Thermal cameras, moisture meters, laser levels, structural monitoring tools, and drone technology for inaccessible areas." },
          { question: "Can you determine if a building is safe to occupy?", answer: "Yes, we provide official determination of safe occupancy or recommend temporary relocation based on structural findings." },
          { question: "How much does emergency safety assessment cost?", answer: "Emergency assessment starts at $500-1,500 depending on building size and complexity, credited toward repairs if we perform them." }
        ]
      },
      {
        id: "board-up-service",
        ...getAsset("board-up-service"),
        description: "Emergency property securing with professional boarding and tarping.",
        longDescription: "Immediate securing of broken windows, damaged doors, roof holes, and wall breaches after fire, storms, vandalism, or vehicle impacts. Our board-up service includes measured plywood cutting, mechanical fastening, heavy-duty roof tarping, and weather sealing to create secure, weatherproof barriers that protect your property from theft, water damage, and further deterioration until permanent repairs are completed.",
        features: ["Emergency Boarding", "Roof Tarping Systems", "Complete Weather Sealing", "Theft Prevention Security"],
        stats: [{ label: "Response Speed", value: "Immediate" }, { label: "Security Rating", value: "High" }, { label: "Weather Protection", value: "Complete" }],
        benefits: [{ title: "Theft Prevention Protection", description: "Securing your property, assets, and contents immediately after damage prevents secondary theft and vandalism losses.", icon: "Lock" }],
        process: ["Opening Measurement", "Custom Plywood Cutting", "Mechanical Fastening", "Complete Weather Sealing", "Final Security Check", "Documentation Photos"],
        faqs: [
          { question: "Is board-up service permanent?", answer: "No, board-up provides secure, weatherproof temporary protection until permanent window, door, or roof repairs can be scheduled." },
          { question: "How long does board-up last?", answer: "Professional board-up remains weatherproof for 30-90 days, allowing time for insurance approval and permanent repair scheduling." },
          { question: "Do you match paint or finishes?", answer: "Emergency board-up uses unpainted plywood. Color matching, decorative panels, or security screens cost extra and take 24-48 hours longer." },
          { question: "What about broken glass cleanup?", answer: "Our board-up service includes interior and exterior glass cleanup within accessible areas for immediate safety and security." },
          { question: "Does insurance cover board-up costs?", answer: "Most property insurance policies cover emergency board-up and tarping as part of loss mitigation coverage after covered perils." }
        ]
      },
      {
        id: "emergency-24-7",
        ...getAsset("emergency-24-7"),
        description: "Round-the-clock construction and repair response for any emergency.",
        longDescription: "Full access to our entire pool of construction expertise and equipment at any time of day or night, including weekends and holidays. Our 24/7/365 emergency service ensures you're never alone when disaster strikes, with dedicated emergency coordinators, fully stocked response vehicles, and rotating on-call crews ready to deploy within hours for any structural, weather, or security emergency throughout NYC.",
        features: ["24/7 Call Availability", "Elite Technician Access", "Fully Stocked Response Trucks", "Weekend & Holiday Service"],
        stats: [{ label: "Year-Round Availability", value: "365 Days" }, { label: "Max Response Time", value: "2 Hours" }, { label: "Service Area", value: "All NYC Boroughs" }],
        benefits: [{ title: "Always-On Emergency Partnership", description: "A construction partner that never sleeps and stands ready to protect your property whenever disaster strikes.", icon: "Clock" }],
        process: ["Emergency Intake & Triage", "Expert Technician Dispatch", "On-site Arrival & Assessment", "Immediate Stabilization", "Follow-up Plan & Scheduling"],
        faqs: [
          { question: "Does your emergency team work on major holidays?", answer: "Yes, our emergency response units are fully staffed and operational 24 hours a day, 365 days a year including all holidays." },
          { question: "What's your service area?", answer: "All five NYC boroughs: Manhattan, Brooklyn, Queens, Bronx, Staten Island plus Westchester, Long Island, and Northern NJ." },
          { question: "Do you handle gas leaks or electrical emergencies?", answer: "We stabilize by securing the area, contacting utilities, and coordinating with licensed plumbers/electricians for specialized repairs." },
          { question: "How do I know if I need emergency service?", answer: "If your property is unsafe, insecure, or at risk of further damage, it's an emergency. When unsure, call—we'll help determine urgency." },
          { question: "Can you handle multi-building emergencies?", answer: "Yes, our network of crews allows simultaneous response to multiple emergencies during major storms or widespread incidents." }
        ]
      }
    ]
  }
];

export const getServiceById = (id: string) => servicesData.find(s => s.id === id);
export const getSubCategory = (serviceId: string, subId: string) => {
  const service = getServiceById(serviceId);
  const sub = service?.subcategories.find(sub => sub.id === subId);
  
  if (!sub) return null;

  // AUTO-GENERATE DATA TO AVOID REPETITION IN UI OR DATA FILE
  return {
    ...sub,
    galleryImages: sub.galleryImages || [1, 2, 3].map(num => `/mega${sub.id.toLowerCase().replace(/[^a-z0-9]/g, '')}${num}.png`),
    portfolioAvatars: sub.portfolioAvatars || [
      "https://images.unsplash.com/photo-1541888946425-d81bb1930060?q=60&w=100&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=60&w=100&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=60&w=100&auto=format&fit=crop"
    ],
    heroHighlight: sub.heroHighlight || `Professional ${sub.title.toLowerCase()} solutions for New York's most demanding architectural projects.`
  };
};