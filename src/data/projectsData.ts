export interface CaseStudyData {
  slug: string;
  title: string;
  location: string;
  borough: string;
  projectType: string;
  completionDate: string;
  problem: string;
  scope: string[];
  process: {
    step: string;
    description: string;
  }[];
  materialsUsed: string[];
  challenges: string;
  result: string;
  servicesUsed: { title: string; href: string }[];
  image: string;
}

export const projectsData: Record<string, CaseStudyData> = {
  "bronx-multi-family-renovation": {
    slug: "bronx-multi-family-renovation",
    title: "Bronx Multi-Family Parapet Rebuild & Flat Roof Replacement",
    location: "Grand Concourse, Bronx NY",
    borough: "The Bronx",
    projectType: "Commercial Multi-Family Exterior Restoration",
    completionDate: "October 2024",
    problem: "Severe water intrusion along the top-floor residential units caused by deteriorated parapet mortar joints, fractured coping stones, and a 20-year-old built-up roof that had blistered and delaminated.",
    scope: [
      "Erected OSHA-compliant safety perimeter and suspended debris netting along building perimeter",
      "Demolished 180 linear feet of crumbling brick parapet down to structurally sound masonry substrate",
      "Rebuilt parapet wall using 4-inch solid concrete face brick with Type S high-bond mortar",
      "Installed new precast concrete coping stones anchored with stainless steel dowels and elastomeric sealant",
      "Full tear-off of 4,200 sq ft existing asphalt roof layers down to structural concrete deck",
      "Installed 3-inch polyisocyanurate (R-18) rigid insulation board with tapered drainage slopes",
      "Mechanically fastened and hot-air welded 60-mil Carlisle Sure-Weld TPO single-ply roofing membrane",
      "Fabricated and installed 24-gauge galvanized edge metal and counter-flashing counter-sunk into parapet joints"
    ],
    process: [
      {
        step: "Phase 1: Diagnostic Audit & Permitting",
        description: "Performed thermal moisture scan of the roof deck, calculated structural weight tolerances, and filed NYC DOB Work Permits under General Contractor #NYC-2005-8942."
      },
      {
        step: "Phase 2: Demolition & Substrate Prep",
        description: "Removed failed roofing plies to expose structural concrete slab. Cleaned deck and rebuilt deteriorated structural brickwork along all four parapet elevations."
      },
      {
        step: "Phase 3: Thermal Insulation & Membrane Welding",
        description: "Installed tapered polyiso insulation to direct water toward internal scuppers. Hot-air welded TPO seams at 1,000°F creating a monolithic, waterproof barrier."
      },
      {
        step: "Phase 4: Flashing Integration & DOB Sign-Off",
        description: "Counter-flashed all parapet walls, chimney chases, and vent stacks. Coordinated DOB inspection and secured complete Certificate of Correction."
      }
    ],
    materialsUsed: [
      "Carlisle Sure-Weld 60-Mil White TPO Membrane",
      "Hunter Panels Polyisocyanurate Rigid Roof Insulation (R-18)",
      "Type S High-Compression Structural Masonry Mortar",
      "Hard-Burned Modular Facing Brick (ASTM C216)",
      "Precast Concrete Coping Stones with Drip Edge Grooves",
      "24-Gauge Prefinished Kynar-Coated Galvanized Edge Metal"
    ],
    challenges: "Executing a complete roof tear-off and heavy masonry reconstruction on a fully occupied 6-story apartment building during mid-autumn wind conditions without disrupting tenants or blocking sidewalk pedestrian flow.",
    result: "100% moisture elimination with zero post-construction leaks through multiple winter freeze cycles. Energy bills reduced by 18% via solar-reflective white TPO, backed by our 10-year written workmanship warranty.",
    servicesUsed: [
      { title: "Flat Roofing NYC", href: "/flat-roofing-nyc" },
      { title: "Parapet Wall Repair", href: "/services/masonry/parapet-wall-repair" },
      { title: "Roof Replacement Bronx", href: "/roof-replacement-bronx-ny" },
      { title: "DOB Violation Removal", href: "/services/dob-violation-removal" }
    ],
    image: "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg"
  },

  "brooklyn-commercial-build-out": {
    slug: "brooklyn-commercial-build-out",
    borough: "Brooklyn",
    title: "Brooklyn Commercial Facade Restoration & Tuckpointing",
    location: "Williamsburg, Brooklyn NY",
    projectType: "Commercial Historic Masonry Restoration",
    completionDate: "June 2024",
    problem: "A two-story commercial building exhibited widespread mortar wash-out, cracked brick piers, rusted steel window lintels, and municipal sidewalk safety violation notices.",
    scope: [
      "Installed pipe scaffolding and pedestrian sidewalk bridge per NYC DOT regulations",
      "Raked and ground deteriorated mortar joints to a minimum 3/4-inch depth without damaging adjacent brick edges",
      "Treated all rusted structural steel lintels with rust-converting primer and commercial epoxy topcoat",
      "Pointed 6,500 square feet of historic brick facade using custom color-matched Type N breathable mortar",
      "Replaced 320 spalled and cracked exterior facing bricks with salvaged vintage brick",
      "Applied breathable silicone-free water-repellent silane/siloxane barrier across entire facade"
    ],
    process: [
      {
        step: "Phase 1: Mortar Analysis & Sampling",
        description: "Analyzed existing lime-to-sand ratios to formulate an authentic, low-compression mortar that allows the historic brick to breathe and flex."
      },
      {
        step: "Phase 2: Raking & Structural Lintel Prep",
        description: "Ground joints clean using HEPA-vacuum shrouded grinders to minimize airborne dust. Relieved stress over window openings to coat support steel."
      },
      {
        step: "Phase 3: Deep Joint Repointing",
        description: "Packed mortar in successive 1/4-inch layers, tooling joints to match the original concave historic profile."
      },
      {
        step: "Phase 4: Wash Down & Protection",
        description: "Cleaned completed facade with mild detergent wash and applied breathable hydrophobic protective coating."
      }
    ],
    materialsUsed: [
      "Custom Formulated Type N High-Lime Historic Mortar",
      "Corrosion-Inhibiting Zinc-Rich Lintel Primer",
      "Siloxane 100% Breathable Hydrophobic Penetrating Sealer",
      "Salvaged ASTM C62 Clay Facing Bricks",
      "Polyurethane Backer Rod & Dymonic 100 Window Perimeter Sealant"
    ],
    challenges: "Managing dust suppression, pedestrian safety, and active ground-floor retail operations along a busy commercial corridor while strictly adhering to municipal environmental noise ordinances.",
    result: "Structural stability restored, violation notices formally dismissed with the Department of Buildings, and complete exterior aesthetic renewal matching the historic neighborhood character.",
    servicesUsed: [
      { title: "Facade Restoration NYC", href: "/facade-restoration-nyc" },
      { title: "Brick Pointing Bronx & Brooklyn", href: "/brick-pointing-bronx" },
      { title: "DOT Sidewalk Violation Removal", href: "/dot-violation-removal-nyc" }
    ],
    image: "/assets/updatedservicesassets/megabrickworkgridningpoiting.jpeg"
  },

  "park-avenue-residence": {
    slug: "park-avenue-residence",
    title: "Manhattan Pre-War Co-op Structural Interior Renovation",
    location: "Upper East Side, Manhattan NY",
    borough: "Manhattan",
    projectType: "Luxury Residential Co-op Renovation",
    completionDate: "February 2024",
    problem: "An outdated 1920s 3-bedroom residence required full electrical, plumbing, and structural layout modernization while strictly complying with rigorous building board alteration rules.",
    scope: [
      "Secured building board approval, DOB alteration permits, and $5M specialized umbrella insurance binders",
      "Installed continuous floor and corridor acoustic protection throughout building common areas",
      "Removed non-bearing partitions to create an expansive, open-concept chef's kitchen and living suite",
      "Rewired complete apartment with new 200-amp subpanel and Lutron smart architectural lighting",
      "Replaced legacy galvanized plumbing lines with sound-insulated cast-iron waste and Type L copper supply",
      "Installed bespoke inset cabinetry, Calacatta marble slab countertops, and herringbone white oak flooring",
      "Rebuilt two master bathrooms featuring Schluter-KERDI continuous waterproofing and radiant floor heating"
    ],
    process: [
      {
        step: "Phase 1: Board Review & DOB Filing",
        description: "Submitted architectural drawings, structural engineering affidavits, and work schedule to the Co-op board and NYC DOB."
      },
      {
        step: "Phase 2: Soundproof Demolition",
        description: "Removed partitions and outdated plumbing using acoustic dampening protocols within allowable building work hours."
      },
      {
        step: "Phase 3: MEP Rough-Ins & Waterproofing",
        description: "Ran all new electrical, plumbing, and HVAC ducting. Floated floors with acoustic underlayment and installed Schluter waterproofing membranes."
      },
      {
        step: "Phase 4: Artisan Millwork & Finish Detailing",
        description: "Installed custom millwork, marble book-matched slabs, architectural trim, and zero-VOC paint finishes."
      }
    ],
    materialsUsed: [
      "Schluter-KERDI Waterproofing & DITRA-HEAT Floor Warming",
      "Type L Hard-Drawn Copper Pipe & No-Hub Cast Iron Waste",
      "Select Grade 3/4-Inch Quarter-Sawn White Oak Flooring",
      "Custom Lacquered Inset Wood Cabinetry",
      "Calacatta Gold Natural Marble Slabs",
      "Benjamin Moore Aura Zero-VOC Interior Enamels"
    ],
    challenges: "Strict Co-op board operating restrictions including rigid 9:00 AM – 4:30 PM working windows, elevator reservation limitations, and stringent building acoustic transmission thresholds.",
    result: "Project delivered on schedule within 14 weeks with zero noise violations, full building sign-off, and exceptional luxury appraisal appreciation.",
    servicesUsed: [
      { title: "Home Renovation NYC", href: "/renovation" },
      { title: "Kitchen Renovation", href: "/kitchen-renovation-bronx" },
      { title: "Bathroom Renovation", href: "/bathroom-renovation-bronx" }
    ],
    image: "/assets/commercialmega.jpg"
  },

  "westchester-estate-addition": {
    slug: "westchester-estate-addition",
    title: "Pelham Manor Estate Architectural Roofing & Masonry Addition",
    location: "Pelham Manor / Bronx Border",
    borough: "The Bronx / Westchester",
    projectType: "High-End Residential Addition & Exterior Overhaul",
    completionDate: "August 2024",
    problem: "An expanding estate residence required an architectural shingle roof replacement paired with a 750 sq ft structural natural stone terrace and outdoor fireplace installation.",
    scope: [
      "Stripped aged roof down to tongue-and-groove wood plank decking and reinforced rafter framing",
      "Installed GAF Tiger Paw synthetic underlayment and WinterGuard ice-and-water protection at eaves and valleys",
      "Installed GAF Timberline HDZ architectural lifetime shingles with 130 MPH wind warranty",
      "Excavated and poured reinforced 4,000 PSI concrete footings below the 42-inch local frost line",
      "Constructed a structural blue stone patio over reinforced concrete slab with integrated French drains",
      "Built a custom outdoor fireplace with solid firebrick firebox and natural fieldstone veneer"
    ],
    process: [
      {
        step: "Phase 1: Deck Audit & Foundation Footings",
        description: "Replaced damaged roof decking and excavated frost-line foundation footings for masonry hardscapes."
      },
      {
        step: "Phase 2: High-Performance Roofing Application",
        description: "Applied continuous leak barrier membranes, starter strips, and six-nail architectural shingle fastening."
      },
      {
        step: "Phase 3: Structural Masonry & Fireplace Build",
        description: "Poured reinforced concrete sub-slab, laid thermal Pennsylvania bluestone, and laid natural stone masonry."
      }
    ],
    materialsUsed: [
      "GAF Timberline HDZ Architectural Shingles (Charcoal)",
      "GAF WeatherWatch Mineral-Surfaced Ice & Water Shield",
      "Pennsylvania Natural Thermal Bluestone Flagging",
      "ASTM C109 High-Strength Setting Mortar",
      "Refractory High-Temperature Firebrick & Heat-Resistant Mortar"
    ],
    challenges: "Seamlessly blending new natural fieldstone masonry and rooflines with the original 1930s estate architecture while managing active surface runoff on a downward-sloping grade.",
    result: "Flawless architectural transition between old and new structures, superior storm resistance, and an entertainer's outdoor stone living suite backed by comprehensive warranties.",
    servicesUsed: [
      { title: "Roofing Contractor Services", href: "/roofing" },
      { title: "Masonry & Stone Construction", href: "/masonry" },
      { title: "Patio & Concrete Services", href: "/patio-contractor-bronx" }
    ],
    image: "/assets/updatedservicesassets/megafullhouserenovation1.jpeg"
  },

  "long-island-kitchen-remodel": {
    slug: "long-island-kitchen-remodel",
    title: "Queens & Metro Full Kitchen Renovation & Structural Beam Install",
    location: "Bayside / Metro NY",
    borough: "Queens",
    projectType: "Full Structural Interior Transformation",
    completionDate: "December 2024",
    problem: "A compartmentalized 1950s kitchen layout with inadequate electrical capacity, outdated plumbing lines, and structural load-bearing walls preventing modern family living.",
    scope: [
      "Temporary hydraulic shoring and installation of a 16-foot structural W-section steel beam recessed into ceiling",
      "Complete demolition of load-bearing partition to unify kitchen, dining, and family gathering spaces",
      "Full rough-in of commercial gas lines, dedicated 20-amp appliance circuits, and multi-zone LED drivers",
      "Installation of solid wood shaker cabinetry with soft-close Blum hardware and integrated pull-out pantries",
      "Fabrication and precision seam installation of quartz waterfall island and seamless backsplash",
      "Installation of commercial-grade ventilation ducting vented directly through the roof deck"
    ],
    process: [
      {
        step: "Phase 1: Structural Engineering & Shoring",
        description: "Installed temporary jack posts to support second-story floor loads before hoisting the engineered steel beam."
      },
      {
        step: "Phase 2: Mechanical, Electrical & Plumbing",
        description: "Upgraded sub-panel, ran dedicated home-run circuits, and re-routed gas supply lines."
      },
      {
        step: "Phase 3: Cabinetry & Quartz Millwork",
        description: "Laser-leveled floor bases, hung custom cabinetry, and digitally templated quartz waterfall slabs."
      }
    ],
    materialsUsed: [
      "Structural ASTM A36 Steel Wide-Flange Beam",
      "Solid Maple Cabinetry with Sherwin-Williams Finish",
      "Silestone 3cm Engineered Quartz Slabs",
      "Commercial 10-Inch Galvanized Steel Exhaust Ducting",
      "Kohler Commercial-Style Fixtures & Ruvati Undermount Sink"
    ],
    challenges: "Safely hoisting and securing a 450-pound steel beam within finished interior living spaces without causing ceiling sheetrock cracking or exterior structural shifting.",
    result: "A stunning, light-filled culinary center with 60% increased countertop workspace, optimal entertaining flow, and fully permitted structural sign-off.",
    servicesUsed: [
      { title: "Kitchen Renovation Bronx & Queens", href: "/kitchen-renovation-bronx" },
      { title: "Complete Home Renovation", href: "/renovation" }
    ],
    image: "/assets/megafullhouserenovation.jpg"
  }
};
