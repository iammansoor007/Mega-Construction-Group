import { Service, SubCategory, Benefit, FAQ } from "./servicesData";

// Trade-specific Process Steps (6 steps each)
const categoryProcessMap: Record<string, { title: string; description: string }[]> = {
  "roofing-services": [
    {
      title: "Diagnostic Inspection & Thermal Leak Scan",
      description: "Infrared thermal imaging, core sampling, and structural deck assessment to pinpoint all moisture entry points and insulation decay."
    },
    {
      title: "DOB Permit Filing & Safety Containment",
      description: "Acquiring NYC DOB roofing permits, establishing perimeter parapet tie-offs, and setting up ground pedestrian protection."
    },
    {
      title: "Complete Tear-Off & Substrate Repair",
      description: "Stripping degraded layers down to sound tongue-and-groove or corrugated steel decking; replacing all rotted structural timbers."
    },
    {
      title: "High-Performance Underlayment & Vapor Barrier",
      description: "Installing self-adhering SBS ice-and-water shield barriers, R-30 polyiso insulation, and reinforced seam tape."
    },
    {
      title: "Precision Membrane & Shingle Application",
      description: "Heat-welding commercial TPO/EPDM seams at 1,000°F or pneumatic-fastening architectural shingles rated for 130 MPH winds."
    },
    {
      title: "Flashing Detailing, Water Test & Written Warranty",
      description: "Fabricating 24-gauge commercial counter-flashing, performing electronic flood testing, and delivering our written multi-year warranty."
    }
  ],
  "masonry-work": [
    {
      title: "Facade Condition Survey & Sounding Test",
      description: "Hammer-sounding masonry, drone inspection, and ultrasonic assessment to identify hollow brick, spalling stone, and rusted lintels."
    },
    {
      title: "Scaffolding Erection & Sidewalk Shed Setup",
      description: "Permitting and deploying DOB-certified pipe scaffolding, heavy-duty debris netting, and code-compliant illuminated sidewalk bridges."
    },
    {
      title: "Dustless HEPA Grinding & Joint Raking",
      description: "Raking deteriorated mortar to 3/4-inch depth using vacuum-shrouded grinders strictly compliant with OSHA silica standards."
    },
    {
      title: "Brick Replacement & Stainless Steel Pinning",
      description: "Cutting out fractured masonry, installing 316-grade stainless helical tiebacks, and setting historic-matched facing bricks."
    },
    {
      title: "Type N Polymer Mortar Trowel Repointing",
      description: "Hand-packing scientifically formulated lime-based mortar in multiple compacted lifts to match historic elasticity and color."
    },
    {
      title: "Chemical Clean-Down & Silane Breathable Sealant",
      description: "Low-pressure hot water restorative washing, perimeter polyurethane caulking, and application of breathable siloxane water repellents."
    }
  ],
  "concrete-services": [
    {
      title: "DOT & DOB Permit Acquisition",
      description: "Filing street opening permits with the NYC Department of Transportation and coordinating utility mark-outs with 811 Call-Before-You-Dig."
    },
    {
      title: "Saw-Cutting & Precision Demolition",
      description: "Diamond saw-cutting damaged sidewalk flags, curbs, or slabs, followed by hydraulic breakout and debris carting."
    },
    {
      title: "Sub-Base Grading & 6-Inch Gravel Compaction",
      description: "Laser-leveling the sub-grade, installing root barriers if near city street trees, and compacting 6 inches of crushed quarry stone."
    },
    {
      title: "Structural Steel Formwork & Reinforcement",
      description: "Setting commercial steel forms with 1/4-inch expansion joints and installing epoxy-coated rebar or welded wire reinforcement mesh."
    },
    {
      title: "4,000 PSI Air-Entrained Monolithic Pour",
      description: "Pouring certified 4,000 PSI NYSDOT mix concrete with 6% air entrainment designed to resist harsh winter de-icing salts."
    },
    {
      title: "Non-Slip Broom Finish & DOT Violation Dismissal",
      description: "Applying hand-tooled control joints, non-slip textured broom finish, and submitting completion photos for official violation sign-off."
    }
  ],
  "home-renovation": [
    {
      title: "Architectural Planning & Co-op Board Approval",
      description: "Developing CAD blueprints, drafting scope-of-work documentation, and navigating Co-op/Condo alteration agreement reviews."
    },
    {
      title: "DOB Permitting & Negative-Air Containment",
      description: "Securing Alteration Type 2 work permits, installing floor-to-ceiling zip-wall dust partitions, and deploying commercial HEPA scrubbers."
    },
    {
      title: "Structural Demolition & Framing Alterations",
      description: "Safely removing non-bearing partitions, erecting structural LVL or steel beams, and rough-framing plumb, laser-straight walls."
    },
    {
      title: "Licensed MEP Rough-In (Plumbing, Electrical, HVAC)",
      description: "Licensed master trade rough-ins: 20-amp dedicated circuits, cast-iron drain stacks, gas lines, and multi-zone HVAC ducting."
    },
    {
      title: "Schluter Waterproofing, Millwork & Luxury Finishes",
      description: "Installing tanked waterproof bathroom membranes, custom hardwood cabinetry, waterfall quartz countertops, and designer tile."
    },
    {
      title: "Final Punch List, Building Sign-Off & Turnkey Reveal",
      description: "Executing detailed 50-point quality inspections, securing DOB letters of completion, deep cleaning, and client key handover."
    }
  ],
  "stucco": [
    {
      title: "Substrate Soundness Inspection & Moisture Metering",
      description: "Testing masonry adhesion, inspecting underlying sheathing, and conducting digital moisture probe surveys."
    },
    {
      title: "Weather-Resistant Barrier (WRB) & Metal Lath",
      description: "Installing dual-layer building wrap, weep screeds for water drainage, and galvanized self-furring expanded metal lath."
    },
    {
      title: "Scratch Coat Application & Curing",
      description: "Troweling a 3/8-inch fiber-reinforced Portland cement scratch coat, scoring horizontal keys, and allowing controlled 48-hour curing."
    },
    {
      title: "Brown Coat Leveling & Reinforcing Mesh",
      description: "Applying the 3/8-inch brown coat with magnesium darbies to achieve true vertical alignment; embedding alkali-resistant mesh."
    },
    {
      title: "Custom Textured Acrylic Color Finish Coat",
      description: "Applying 100% acrylic polymer finish coats custom color-matched to existing architecture with Californian, sand, or smooth textures."
    },
    {
      title: "Expansion Joint Caulking & Hydrophobic Sealing",
      description: "Sealing all window perimeters and control joints with commercial polyurethane sealant and applying siloxane elastomeric barriers."
    }
  ],
  "custom-home-building": [
    {
      title: "Site Feasibility, Zoning & Architectural Design",
      description: "Analyzing NYC zoning regulations (FAR, setbacks), surveying property lines, and drafting comprehensive architectural blueprints."
    },
    {
      title: "DOB Approvals, Special Inspections & Excavation",
      description: "Navigating full plan examination approvals, securing new building permits, installing underpinning, and mass site excavation."
    },
    {
      title: "Reinforced Concrete Foundation & Structural Steel",
      description: "Pouring continuous footings, waterproofing foundation walls with bentonite sheets, and erecting structural steel and joists."
    },
    {
      title: "High-Performance Thermal Envelope & Framing",
      description: "Framing exterior walls, installing continuous exterior insulation, triple-pane architectural glazing, and standing-seam roofing."
    },
    {
      title: "Smart Mechanical, Electrical & Plumbing Systems",
      description: "Roughing in smart home automation, high-efficiency VRF heat pumps, whole-house air filtration, and commercial plumbing."
    },
    {
      title: "Bespoke Millwork, Finishes & Certificate of Occupancy",
      description: "Installing custom architectural woodwork, luxury stone, final municipal agency sign-offs, and securing the final C of O."
    }
  ],
  "emergency-service": [
    {
      title: "24/7 Immediate Dispatch & 2-Hour Arrival",
      description: "Mobilizing certified emergency response crews with fully equipped mobile repair vehicles across all 5 boroughs within 120 minutes."
    },
    {
      title: "Rapid Hazard Containment & Structural Triage",
      description: "Erecting perimeter caution zones, shoring compromised load-bearing elements, and identifying acute electrical or gas hazards."
    },
    {
      title: "Heavy-Duty Board-Up & Emergency Weather Tarping",
      description: "Securing breached facades and storefronts with 3/4-inch CDX plywood and deploying industrial waterproof membrane tarps."
    },
    {
      title: "Water Extraction, Dehumidification & Debris Hauling",
      description: "Deploying commercial submersible pumps, industrial LGR dehumidifiers, and clearing hazardous masonry or structural debris."
    },
    {
      title: "DOB Emergency Work Notice & Insurance Documentation",
      description: "Filing Emergency Work Orders (EWOP) with the Department of Buildings and providing photographic forensic evidence for insurance."
    },
    {
      title: "Permanent Restoration Planning & Code Compliance",
      description: "Formulating long-term architectural repair plans, pulling permanent alteration permits, and executing permanent restoration."
    }
  ]
};

// Trade-specific Trust Benefits (6 cards each)
const categoryBenefitsMap: Record<string, Benefit[]> = {
  "roofing-services": [
    { title: "Licensed NYC General Contractor", description: "Directly licensed (#NYC-2005-8942) with the NYC Department of Buildings since 2005.", icon: "ShieldCheck" },
    { title: "Master Elite Certified Installers", description: "Factory-certified by GAF, Firestone, and Carlisle ensuring genuine 20 to 50-year manufacturer warranties.", icon: "Award" },
    { title: "130 MPH High-Wind Rating", description: "All roofing assemblies are engineered and fastened to exceed NYC coastal storm wind uplift requirements.", icon: "Wind" },
    { title: "Zero-Ponding Drainage Warranty", description: "Precision slope-to-drain insulation tapered layouts guarantee zero stagnant water on flat roofs.", icon: "Droplets" },
    { title: "$5,000,000 Insurance Coverage", description: "Multi-million commercial general liability and workers' compensation coverage protecting property owners.", icon: "Shield" },
    { title: "24/7 Emergency Storm Dispatch", description: "Dedicated rapid mobilization units deployed around the clock across all 5 boroughs during weather emergencies.", icon: "Clock" }
  ],
  "masonry-work": [
    { title: "FISP & Local Law 11 Specialists", description: "Two decades of experience successfully dismissing unsafe facade condition filings with the NYC DOB.", icon: "Building2" },
    { title: "Historic LPC Preservation Standards", description: "Expertise in Landmark Preservation Commission color matching, sandstone dressing, and historic lime mortars.", icon: "Landmark" },
    { title: "316 Stainless Steel Reinforcement", description: "We use non-corrosive marine-grade stainless steel tieback anchors to permanently eliminate future wall bowing.", icon: "Gem" },
    { title: "OSHA-30 Certified Rigging & Crews", description: "Full safety protocol compliance with suspended scaffolding, boom lifts, and sidewalk shed protections.", icon: "HardHat" },
    { title: "Dustless HEPA Grinding Technology", description: "OSHA Table-1 compliant shrouded vacuum grinding systems protecting tenant health and building interiors.", icon: "ShieldAlert" },
    { title: "Written 10-Year Water Resistance Warranty", description: "Complete exterior masonry restorations are backed by an ironclad multi-year written warranty.", icon: "Award" }
  ],
  "concrete-services": [
    { title: "Licensed DOT Sidewalk Contractor", description: "Full authorization and active bond filings with the NYC Department of Transportation for street opening permits.", icon: "Truck" },
    { title: "4,000 PSI Air-Entrained NYSDOT Mix", description: "Industrial-strength concrete formulated with 6% air-entrainment specifically engineered for NYC freeze-thaw cycles.", icon: "Square" },
    { title: "Guaranteed Violation Dismissals", description: "We guarantee physical sign-off and Certificate of Correction dismissal for all NYC DOT & DOB violations.", icon: "CheckCircle" },
    { title: "ADA Compliant Grading & Detectable Warnings", description: "Exact pitch standards, drop curbs, and truncated dome tactile tiles meeting municipal accessibility codes.", icon: "CheckCircle" },
    { title: "Fast-Track 24-Hour Turnarounds", description: "Quick-setting high-early strength formulas minimize pedestrian disruptions and driveway downtime.", icon: "Clock" },
    { title: "Comprehensive Property Protection", description: "Full sidewalk bridge and barricade setup to safeguard pedestrians and prevent city fines.", icon: "ShieldCheck" }
  ],
  "home-renovation": [
    { title: "NYC Co-op & Condo Alteration Masters", description: "Expert navigation of strict Co-op board alteration agreements, architect approvals, and building rules.", icon: "Building" },
    { title: "Schluter Certified Waterproofing", description: "Certified continuous waterproofing membrane installations guaranteeing zero moisture leaks into downstairs apartments.", icon: "Droplets" },
    { title: "Licensed Master Electrician & Plumber Trades", description: "All MEP infrastructure executed exclusively by licensed NYC master trade professionals under valid filings.", icon: "Zap" },
    { title: "Dust-Free Negative Air Containment", description: "Hospital-grade HEPA air filtration and floor-to-ceiling zip barriers to protect your living areas.", icon: "Shield" },
    { title: "Guaranteed Milestone Completion Dates", description: "Rigid project management with binding contractual timelines and daily photographic progress logs.", icon: "Calendar" },
    { title: "Transparent Fixed-Cost Pricing", description: "Detailed line-item proposals with 100% upfront pricing clarity and zero unexpected change orders.", icon: "DollarSign" }
  ],
  "stucco": [
    { title: "Certified EIFS & Traditional Applicators", description: "Trained in both heavy Portland cement lath systems and synthetic polymer Exterior Insulation Finish Systems.", icon: "Layers" },
    { title: "Fiber-Reinforced Crack Resistance", description: "Polypropylene microfiber additives in base coats provide exceptional tensile strength against thermal shifts.", icon: "Hammer" },
    { title: "Precision Architectural Color Matching", description: "On-site spectrophotometer color and aggregate analysis to seamlessly match existing building textures.", icon: "Paintbrush" },
    { title: "Enhanced R-Value Thermal Insulation", description: "Continuous exterior insulation eliminates thermal bridging and noticeably reduces winter heating costs.", icon: "Thermometer" },
    { title: "Integrated Drainage Drainage Channels", description: "Advanced drainage mats behind stucco prevent water entrapment and eliminate mold or wood rot risks.", icon: "CloudRain" },
    { title: "15-Year Performance Workmanship Warranty", description: "Backed by our extensive written warranty against delamination, water infiltration, and surface flaking.", icon: "Award" }
  ],
  "custom-home-building": [
    { title: "Full Turnkey Design-Build Capabilities", description: "Seamless collaboration between architects, structural engineers, and field craftsmen under one roof.", icon: "Compass" },
    { title: "Deep NYC Zoning & Building Code Mastery", description: "Maximizing buildable floor area (FAR), structural efficiency, and navigating complex municipal boards.", icon: "Scale" },
    { title: "Ultra-High Energy Efficiency Standards", description: "Energy Star and Passive House building envelope detailing, continuous insulation, and thermal break framing.", icon: "Leaf" },
    { title: "Architectural Precision Millwork", description: "Custom in-house cabinetry, architectural steel stairs, and bespoke material craftsmanship.", icon: "Sparkles" },
    { title: "Smart Home Automation Ready", description: "Pre-wired low-voltage infrastructure for integrated lighting, climate, security, and acoustic automation.", icon: "Cpu" },
    { title: "10-Year Major Structural Warranty", description: "Comprehensive structural warranty covering foundations, load-bearing frames, and building envelopes.", icon: "ShieldCheck" }
  ],
  "emergency-service": [
    { title: "Guaranteed 120-Minute NYC Arrival", description: "Immediate dispatch from localized staging centers across the Bronx, Brooklyn, Queens, and Manhattan.", icon: "FastForward" },
    { title: "Direct Insurance Claim Coordination", description: "We provide comprehensive forensic photo documentation, thermal moisture logs, and insurance billing support.", icon: "FileCheck" },
    { title: "Emergency Work (EWOP) Filing Support", description: "Direct communication with the NYC DOB emergency response unit to stabilize open hazardous violations.", icon: "Gavel" },
    { title: "Structural Make-Safe Certification", description: "Engineered temporary shoring and stabilization for compromised walls, roofs, and storefronts.", icon: "Construction" },
    { title: "Heavy-Duty All-Weather Containment", description: "Industrial 20-mil waterproof membranes, 3/4-inch plywood security enclosures, and perimeter fencing.", icon: "Lock" },
    { title: "Complete Turnkey Restoration Transition", description: "Seamless handover from immediate stabilization to permanent, code-compliant architectural reconstruction.", icon: "RefreshCw" }
  ]
};

// 10 Trade-specific FAQs per category
const categoryFaqsMap: Record<string, FAQ[]> = {
  "roofing-services": [
    { question: "How long does a commercial or residential roof last in New York City?", answer: "Architectural shingles typically last 25 to 30 years, while commercial flat roofing membranes like TPO or multi-ply SBS modified bitumen last 25 to 35 years when maintained with semi-annual inspections." },
    { question: "Do I need a NYC Department of Buildings (DOB) permit for roof replacement?", answer: "Yes, complete roof tear-offs and structural deck alterations require NYC DOB work permits. We handle all architectural filings, engineering reviews, and municipal sign-offs directly." },
    { question: "What is the NYC building code rule regarding maximum roofing layers?", answer: "Under 2022 NYC Building Code §1510.3, a maximum of two roofing layers is allowed before a complete tear-off down to the structural substrate is legally mandated." },
    { question: "How do your roofing systems withstand high coastal winds and northeastern storms?", answer: "Our systems are fastened according to stringent Factory Mutual (FM) 1-90 and 1-120 wind uplift guidelines, featuring reinforced perimeter fastening and 130 MPH rated wind warranties." },
    { question: "What is a 'Cool Roof' and is it required by NYC energy codes?", answer: "Yes, under the NYC Energy Conservation Code, low-slope roofs must achieve high solar reflectance (such as white TPO or reflective coatings) to reduce urban heat island effects and lower cooling costs." },
    { question: "How do you detect hidden leaks before replacing the entire roof?", answer: "We deploy non-destructive thermal infrared imaging and electrical impedance moisture meters to identify wet insulation pockets and track moisture travel paths without tearing up sound sections." },
    { question: "Can a roof replacement be completed during NYC winter months?", answer: "Yes. We utilize cold-weather adhesives, mechanical fasteners, and specialized hot-air welded single-ply membranes that can be reliably installed during freezing temperatures." },
    { question: "What warranties do you provide on roofing projects?", answer: "We provide comprehensive written workmanship warranties of up to 10–25 years, complemented by 20 to 50-year manufacturer material warranties from GAF, Firestone, and Carlisle." },
    { question: "How long does a typical roof replacement take?", answer: "Residential roofs are typically completed in 2 to 3 days. Commercial flat roofs range from 1 to 3 weeks depending on square footage, insulation thickness, and parapet flashing complexity." },
    { question: "How do I request an on-site diagnostic roofing estimate?", answer: "Call our 24/7 client hotline at +1 (914) 804-3000 or fill out our online form. A licensed roofing specialist will visit your property within 24 to 48 hours for a full diagnostic inspection." }
  ],
  "masonry-work": [
    { question: "How often should brick facades be repointed (tuckpointed) in NYC?", answer: "High-exposure NYC exterior facades typically require repointing every 25 to 30 years, while exposed rooftop parapets, chimneys, and windward elevations may require service every 15 to 20 years." },
    { question: "What is NYC Local Law 11 (FISP) and does my building require it?", answer: "Local Law 11 mandates that all NYC buildings taller than six stories must have their exterior walls and appurtenances inspected by a Qualified Exterior Wall Inspector (QEWI) every five years." },
    { question: "Why is historic lime mortar important instead of modern Portland cement?", answer: "Historic bricks are soft and porous. Using excessively hard Portland cement creates thermal stress that crushes brick faces (spalling). We custom-mix high-calcium lime Type N mortar matching the historic elasticity." },
    { question: "What causes parapet walls to lean or bow outward on NYC brownstones?", answer: "Thermal expansion and freeze-thaw cycles cause the roof-facing masonry to expand faster than the cold street side, creating cumulative eccentric pressure that tilts the wall toward the street." },
    { question: "What causes window lintels to crack the surrounding brickwork?", answer: "When steel lintels over windows rust without protection, rust jacking expands their volume by up to ten times, lifting masonry above into diagonal stair-step cracks. We replace rusted lintels with galvanized or stainless steel units." },
    { question: "Do you pull NYC DOB permits for facade repairs and scaffolding?", answer: "Yes, all exterior masonry restoration, structural brick rebuilding, and sidewalk shed or pipe scaffolding installations are fully permitted through NYC DOB NOW." },
    { question: "How do you protect pedestrians during exterior masonry work?", answer: "We install heavy-duty, code-compliant sidewalk sheds with overhead lighting, debris nets, and catch platforms strictly adhering to NYC Building Code Chapter 33 safety guidelines." },
    { question: "Can you match the existing brick color and mortar joint profile?", answer: "Yes, our masonry craftsmen specialize in architectural mortar color matching and historic joint tooling (weathered, concave, struck, or beaded joints) to preserve aesthetic uniformity." },
    { question: "What is efflorescence and how do you treat it?", answer: "Efflorescence is white crystalline salt deposited on brick surfaces by migrating moisture. We treat it by eliminating the underlying water leak, followed by gentle chemical restoration washes and breathable water-repellent sealers." },
    { question: "How do I schedule an inspection for facade cracks or violation notices?", answer: "Contact our facade division directly at +1 (914) 804-3000. Our licensed inspectors will evaluate structural defects, review open violation summonses, and formulate an actionable restoration plan." }
  ],
  "concrete-services": [
    { question: "What is a NYC DOT Sidewalk Violation and how do I clear it?", answer: "A DOT violation is issued under NYC Administrative Code §19-152 for trip hazards, cracked flags, or improper slope. To clear it, a licensed contractor must pull street opening permits, replace defective concrete, and submit a formal dismissal request." },
    { question: "How much time do property owners have to repair a DOT sidewalk citation?", answer: "Property owners have 75 days from the notice date to complete repairs. If ignored, the City may dispatch its own contractor to perform the work at premium municipal rates and place a tax lien on the property." },
    { question: "What concrete strength is required by NYC Department of Transportation?", answer: "NYC DOT specifications mandate a minimum compressive strength of 4,000 PSI with 6% air entrainment, poured 4 inches thick for pedestrian walkways and 7 inches thick across active driveways." },
    { question: "Who is responsible for sidewalk damage caused by City street tree roots?", answer: "While adjacent property owners must maintain safe sidewalks, repairs involving City street trees require coordination with the NYC Department of Parks & Recreation for root pruning permits. We handle all agency coordination." },
    { question: "Do you handle DOB violations for illegal basement entries or foundation defects?", answer: "Yes, our foundation team pulls DOB permits, executes code-compliant structural remediation, secures Special Inspection Agency sign-offs, and files AEU-2 Certificates of Correction." },
    { question: "How long does a freshly poured concrete sidewalk take to cure?", answer: "Pedestrian foot traffic is safe after 24 to 48 hours. Driveways and vehicular crossovers require 7 full days of curing to reach adequate compressive load strength." },
    { question: "Why does concrete crack in New York City winters?", answer: "Water seeps into unsealed concrete pores; when it freezes, it expands by 9%, fracturing the brittle paste. We utilize air-entrained concrete mixes and penetrating silane sealants to prevent freeze-thaw damage." },
    { question: "Can sunken or uneven concrete slabs be leveled instead of replaced?", answer: "Where underlying soils are stable and concrete flags are structurally sound, slab jacking or grinding can eliminate trip hazards. However, severely cracked flags require full replacement for DOT violation dismissal." },
    { question: "What permits are required for sidewalk and curb cuts in NYC?", answer: "Sidewalk replacements require NYC DOT Street Opening permits. Installing new curb cuts or altering driveways requires Department of Buildings plan filings and DOT Revocable Consents." },
    { question: "How quickly can you mobilize for urgent sidewalk trip hazard repairs?", answer: "We maintain dedicated concrete crews and can typically secure permits and mobilize on-site within 48 to 72 hours, preventing municipal escalation and slip-and-fall liabilities." }
  ],
  "home-renovation": [
    { question: "What is an Alteration Agreement and why is it needed for NYC Co-op renovations?", answer: "Co-op and condo boards require Alteration Agreements to define permitted work hours (usually 9 AM–4:30 PM), contractor insurance requirements ($5M+), security deposits, and architectural review protocols before work begins." },
    { question: "When are NYC Department of Buildings (DOB) permits legally required for interior remodeling?", answer: "Cosmetic updates like painting or cabinet replacement do not require permits. However, removing walls, re-routing plumbing stacks, installing high-BTU gas appliances, or electrical panel upgrades mandate DOB Alteration Type 2 filings." },
    { question: "How long does a complete apartment renovation typically take in NYC?", answer: "Physical construction typically ranges from 6 to 12 weeks for kitchens and bathrooms, and 3 to 6 months for full gut apartment renovations. Architectural review and board approvals require an additional 4 to 8 weeks prior." },
    { question: "How do you protect neighboring units and building common areas during construction?", answer: "We lay heavy Masonite floor runners along building hallways, pad elevators, install airtight plastic zip barriers with negative-air HEPA scrubbers, and vacuum common corridors daily." },
    { question: "Can load-bearing walls be removed in pre-war NYC apartments?", answer: "Yes, but it requires structural engineering calculations, DOB plan filings, temporary hydraulic post-shoring, and installing engineered steel W-beams or reinforced structural columns." },
    { question: "What waterproofing standards are used for modern NYC luxury bathrooms?", answer: "We install continuous 100% bonded waterproof sheet membranes (such as Schluter-KERDI) tanked up walls and curbs, followed by 24-hour flood testing to eliminate water leak risks into units below." },
    { question: "How do you handle older lead paint and asbestos during renovation?", answer: "Our supervisors are EPA Lead-Safe certified. Where pre-1978 lead paint or historic pipe insulation asbestos is suspected, we coordinate certified environmental testing and containment prior to demolition." },
    { question: "Are all electrical and plumbing rough-ins performed by licensed master trades?", answer: "Yes. All plumbing and gas installations are executed by Licensed Master Plumbers (LMP), and all wiring by Licensed Master Electricians, ensuring full municipal sign-offs." },
    { question: "Do you offer fixed-price contracts to protect against budget overruns?", answer: "Yes. We operate on detailed, transparent fixed-price proposals with defined milestone payments, guaranteeing that scope-defined work will not incur surprise change orders." },
    { question: "How do we get started on an interior renovation project?", answer: "Schedule a design consultation by calling +1 (914) 804-3000. We will review your property, examine building alteration requirements, and generate a comprehensive budget and timeline proposal." }
  ],
  "stucco": [
    { question: "What is the difference between traditional stucco and EIFS synthetic stucco?", answer: "Traditional stucco is a thick (7/8-inch) Portland cement-based composite on metal lath. EIFS (Exterior Insulation and Finish System) incorporates a continuous foam insulation board behind a polymer acrylic finish, offering superior thermal R-values." },
    { question: "Can stucco be applied directly over existing brick or concrete block?", answer: "Yes, structurally sound unpainted brick or cinder block can receive direct stucco bonding with a polymer bonding slurry. Painted or deteriorating surfaces require expanded metal lath mechanically fastened to the masonry." },
    { question: "How do you prevent stucco from cracking during NYC temperature extremes?", answer: "We integrate synthetic polypropylene microfibers into base coats, install galvanized control expansion joints every 144 square feet, and finish with flexible elastomeric acrylic coatings that flex with building movement." },
    { question: "What causes stucco to bubble, blister, or peel away from the wall?", answer: "Blistering is almost always caused by trapped moisture behind unventilated walls or failing window perimeter sealants. We identify and seal water intrusion points and install drainage weep screeds to allow walls to breathe." },
    { question: "Can you match the texture and color of my existing stucco facade?", answer: "Yes. Our master plasterers custom-tint acrylic pigments and match historic textures including Spanish lace, Californian knock-down, smooth Santa Barbara, and heavy dash finishes." },
    { question: "How long does fresh stucco take to cure before it can be painted or textured?", answer: "Traditional scratch and brown cement coats require 48 to 72 hours of moist curing and 7 to 28 days of hydration before final acrylic finishes are applied, ensuring peak tensile strength." },
    { question: "Is stucco fire-resistant and suitable for NYC building codes?", answer: "Yes. One-inch thick Portland cement stucco achieves an ASTM E119 1-hour fire resistance rating, providing exceptional fire protection for dense NYC zero-lot-line multi-family buildings." },
    { question: "How do you clean and maintain exterior stucco surfaces?", answer: "Stucco should be gently washed with low-pressure hot water (under 1,000 PSI) and mild mildewcides every 2 to 3 years. Avoid high-pressure power washing, which can erode the decorative acrylic aggregate." },
    { question: "Do you handle Local Law 11 facade inspections for stucco-clad buildings?", answer: "Yes, our engineering team inspects exterior stucco facades for hollow debonding, signs of water penetration, and cracks to ensure compliance with NYC FISP facade safety requirements." },
    { question: "How do I schedule an on-site evaluation for stucco repair or installation?", answer: "Call our exterior restoration division at +1 (914) 804-3000 to arrange an on-site moisture meter survey and detailed written proposal." }
  ],
  "custom-home-building": [
    { question: "What are the advantages of the Design-Build model versus traditional construction?", answer: "Design-Build consolidates architectural design, engineering, and physical construction under a single contract. This eliminates finger-pointing between architects and contractors, accelerates delivery by 30%, and prevents budget creep." },
    { question: "How long does it take to design and construct a custom home in NYC?", answer: "Planning, architectural design, and NYC Department of Buildings plan examination typically require 4 to 8 months. Physical ground-up construction takes approximately 10 to 16 months depending on foundation complexity." },
    { question: "How do you maximize Floor Area Ratio (FAR) and zoning allowances?", answer: "Our zoning specialists analyze NYC Zoning Resolutions, maximum allowable building heights, sky exposure planes, and yard setbacks to optimize every square foot of legally buildable residential space." },
    { question: "What is required to secure a final Certificate of Occupancy (C of O) in NYC?", answer: "Securing a C of O requires passing final inspections from the DOB, FDNY, Department of Environmental Protection (sewer/water), and submitting Special Inspection reports. We handle all agency sign-offs directly." },
    { question: "Can you build high-performance Passive House or Net-Zero homes in NYC?", answer: "Yes. We build high-performance envelopes utilizing continuous exterior thermal breaks, airtight vapor-variable membranes, balanced ERV/HRV mechanical ventilation, and triple-pane architectural glazing." },
    { question: "How do you navigate foundation challenges such as high water tables or bedrock?", answer: "NYC geology ranges from shallow Manhattan schist to high water tables in coastal Queens. We deploy specialized helical steel piles, reinforced grade beams, and bentonite waterproofing systems to guarantee foundation stability." },
    { question: "Can smart home automation systems be integrated into the build?", answer: "Yes. We design and install centralized structured wiring, Lutron automated lighting and shading, multi-zone climate control, and enterprise-grade security and access control." },
    { question: "How are construction costs estimated and managed throughout the project?", answer: "We provide comprehensive cost estimates categorized by master construction divisions, coupled with open-book milestone tracking and guaranteed maximum price (GMP) contract structures." },
    { question: "What structural warranties accompany a new custom home build?", answer: "Every ground-up residence is accompanied by our comprehensive 10-year major structural warranty covering foundations and load-bearing framing, alongside 2-year mechanical and 1-year finish warranties." },
    { question: "How do I arrange a preliminary consultation for a new custom home project?", answer: "Contact our executive development team at +1 (914) 804-3000 to discuss your property location, architectural vision, and project timeline." }
  ],
  "emergency-service": [
    { question: "How fast can your emergency response team arrive on-site in NYC?", answer: "Our emergency mobilization units are stationed strategically across the five boroughs and arrive on-site within 60 to 120 minutes of your call, 24 hours a day, 365 days a year." },
    { question: "What is an Emergency Work (EWOP) notice with the NYC Department of Buildings?", answer: "An EWOP permits licensed general contractors to perform immediate structural stabilization and make-safe repairs to eliminate acute safety hazards before formal architectural work permits are issued." },
    { question: "Do you bill directly to commercial or residential property insurance carriers?", answer: "Yes. We document all structural damage with date-stamped thermal infrared photos, atmospheric moisture logs, and itemized Xactimate estimates to streamline direct insurance claims." },
    { question: "How do you secure retail storefronts or residential buildings after a fire or vehicle impact?", answer: "We deploy heavy-duty 3/4-inch CDX plywood security barriers anchored with steel carriage bolts, structural shoring posts, and install tamper-resistant keyless security access doors." },
    { question: "Can you stop severe active roof leaks during a major rainstorm?", answer: "Yes. Our storm crews deploy temporary weighted ballast tarps, cold-applied emergency elastomeric mastic, and commercial diverter catch basins to arrest interior flooding immediately." },
    { question: "What should property owners do immediately when structural cracking or wall bowing is detected?", answer: "Evacuate the immediate hazard area, shut off gas and water mains if pipes are strained, call 911 if collapse is imminent, and call our emergency line at +1 (914) 804-3000 for emergency engineering shoring." },
    { question: "Do you handle industrial water extraction and flood cleanup?", answer: "Yes. We deploy high-capacity submersible extraction pumps, industrial air movers, and Low Grain Refrigerant (LGR) dehumidifiers to prevent structural mold growth and subfloor rot." },
    { question: "Can you assist with resolving immediate NYC DOB Stop Work Orders (SWO)?", answer: "Yes. We meet DOB inspectors on-site, review the hazardous conditions cited on the summons, execute immediate stabilization, and file expedited rescission requests with the borough commissioner." },
    { question: "What happens after the emergency situation is stabilized?", answer: "Once the building is safe and secure, we transition seamlessly into permanent architectural repair: pulling permanent DOB permits, executing repairs, and clearing all municipal violations." },
    { question: "What is your 24/7 emergency dispatch phone number?", answer: "Our emergency dispatch center operates around the clock at +1 (914) 804-3000. Operators dispatch the closest mobile crew immediately upon receiving your call." }
  ]
};

// Main enrichment function: ensures every subcategory has exactly 6 process steps, 6 trust cards, and 10 FAQs
export function enrichServicesData(services: Service[]): Service[] {
  return services.map(service => {
    const defaultProcess = categoryProcessMap[service.id] || categoryProcessMap["roofing-services"];
    const defaultBenefits = categoryBenefitsMap[service.id] || categoryBenefitsMap["roofing-services"];
    const defaultFaqs = categoryFaqsMap[service.id] || categoryFaqsMap["roofing-services"];

    const enrichedSubcategories = service.subcategories.map(sub => {
      // 1. Process: Ensure exactly 6 steps
      let finalProcess = sub.process ? [...sub.process] : [];
      if (finalProcess.length < 6) {
        for (let i = finalProcess.length; i < 6; i++) {
          finalProcess.push(defaultProcess[i] || defaultProcess[defaultProcess.length - 1]);
        }
      }
      finalProcess = finalProcess.slice(0, 6);

      // 2. Benefits: Ensure exactly 6 cards
      let finalBenefits = sub.benefits ? [...sub.benefits] : [];
      if (finalBenefits.length < 6) {
        for (let i = 0; i < defaultBenefits.length; i++) {
          if (finalBenefits.length >= 6) break;
          const candidate = defaultBenefits[i];
          const exists = finalBenefits.some(b => b.title.toLowerCase() === candidate.title.toLowerCase());
          if (!exists) {
            finalBenefits.push(candidate);
          }
        }
      }
      // If still under 6, fill from default
      while (finalBenefits.length < 6) {
        finalBenefits.push(defaultBenefits[finalBenefits.length % defaultBenefits.length]);
      }
      finalBenefits = finalBenefits.slice(0, 6);

      // 3. FAQs: Ensure exactly 10 questions
      let finalFaqs = sub.faqs ? [...sub.faqs] : [];
      if (finalFaqs.length < 10) {
        for (let i = 0; i < defaultFaqs.length; i++) {
          if (finalFaqs.length >= 10) break;
          const candidate = defaultFaqs[i];
          const exists = finalFaqs.some(f => f.question.toLowerCase() === candidate.question.toLowerCase());
          if (!exists) {
            finalFaqs.push(candidate);
          }
        }
      }
      while (finalFaqs.length < 10) {
        finalFaqs.push(defaultFaqs[finalFaqs.length % defaultFaqs.length]);
      }
      finalFaqs = finalFaqs.slice(0, 10);

      return {
        ...sub,
        process: finalProcess,
        benefits: finalBenefits,
        faqs: finalFaqs
      };
    });

    return {
      ...service,
      subcategories: enrichedSubcategories
    };
  });
}
