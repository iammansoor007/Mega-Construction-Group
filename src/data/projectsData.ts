export interface ProjectPhoto {
  src: string;
  alt: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  location: string;
  borough?: string;
  neighborhood?: string;
  serviceCategory?: string;
  serviceSlug?: string;
  projectType: string;
  completionDate?: string;
  year?: number;
  problem?: string;
  challenge?: string;
  scope?: string[];
  workPerformed?: string[];
  process?: {
    step: string;
    description: string;
  }[];
  materialsUsed?: string[];
  challenges?: string;
  result?: string;
  servicesUsed?: { title: string; href: string }[];
  image: string;
  photos?: ProjectPhoto[];
  approvedForPublic?: boolean;
}

export const projectsData: Record<string, CaseStudyData> = {
  "bronx-multi-family-renovation": {
    slug: "bronx-multi-family-renovation",
    title: "Bronx Multi-Family Parapet Rebuild & Flat Roof Replacement",
    location: "Grand Concourse, Bronx NY",
    borough: "The Bronx",
    neighborhood: "Grand Concourse",
    serviceCategory: "roofing-services",
    serviceSlug: "roof-replacement",
    projectType: "Commercial Multi-Family Exterior Restoration",
    completionDate: "October 2024",
    year: 2024,
    approvedForPublic: true,
    problem: "Severe water intrusion along the top-floor residential units caused by deteriorated parapet mortar joints, fractured coping stones, and a 20-year-old built-up roof that had blistered and delaminated.",
    challenge: "Executing a complete roof tear-off and heavy masonry reconstruction on a fully occupied 6-story apartment building during mid-autumn wind conditions without disrupting tenants or blocking sidewalk pedestrian flow.",
    challenges: "Executing a complete roof tear-off and heavy masonry reconstruction on a fully occupied 6-story apartment building during mid-autumn wind conditions without disrupting tenants or blocking sidewalk pedestrian flow.",
    scope: [
      "Erected dedicated safety perimeter and suspended debris netting along building perimeter",
      "Demolished 180 linear feet of crumbling brick parapet down to structurally sound masonry substrate",
      "Rebuilt parapet wall using 4-inch solid concrete face brick with Type S high-bond mortar",
      "Installed new precast concrete coping stones anchored with stainless steel dowels and elastomeric sealant",
      "Full tear-off of 4,200 sq ft existing asphalt roof layers down to structural concrete deck",
      "Installed 3-inch polyisocyanurate (R-18) rigid insulation board with tapered drainage slopes",
      "Mechanically fastened and hot-air welded 60-mil Carlisle Sure-Weld TPO single-ply roofing membrane",
      "Fabricated and installed 24-gauge galvanized edge metal and counter-flashing counter-sunk into parapet joints"
    ],
    workPerformed: [
      "Erected safety perimeter and debris netting along building perimeter",
      "Demolished deteriorated brick parapet down to sound masonry substrate",
      "Rebuilt parapet wall using solid concrete face brick and Type S mortar",
      "Installed precast concrete coping stones with stainless steel dowels",
      "Full tear-off of 4,200 sq ft existing asphalt roof layers to concrete deck",
      "Installed 3-inch polyisocyanurate (R-18) tapered roof insulation",
      "Mechanically fastened and hot-air welded 60-mil Carlisle TPO roofing membrane",
      "Fabricated and installed 24-gauge galvanized edge metal and counter-flashing"
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
    result: "100% moisture elimination with zero post-construction leaks through multiple winter freeze cycles. Energy efficiency improved via solar-reflective white TPO, backed by written workmanship warranty.",
    servicesUsed: [
      { title: "Flat Roofing NYC", href: "/services/roofing-services/flat-roofing" },
      { title: "Parapet Wall Repair", href: "/services/masonry-work/parapet-wall" },
      { title: "Roof Replacement Bronx", href: "/services/roofing-services/roof-replacement" },
      { title: "DOB Violation Removal", href: "/services/concrete-services/dob-violation-removal" }
    ],
    image: "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg",
    photos: [
      {
        src: "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg",
        alt: "Carlisle white TPO single-ply membrane roofing and parapet brick masonry installation on Bronx apartment building"
      }
    ]
  },

  "brooklyn-commercial-build-out": {
    slug: "brooklyn-commercial-build-out",
    borough: "Brooklyn",
    neighborhood: "Williamsburg",
    serviceCategory: "masonry-work",
    serviceSlug: "facade-restoration",
    title: "Brooklyn Commercial Facade Restoration & Tuckpointing",
    location: "Williamsburg, Brooklyn NY",
    projectType: "Commercial Historic Masonry Restoration",
    completionDate: "June 2024",
    year: 2024,
    approvedForPublic: true,
    problem: "A two-story commercial building exhibited widespread mortar wash-out, cracked brick piers, rusted steel window lintels, and municipal sidewalk safety violation notices.",
    challenge: "Managing dust suppression, pedestrian safety, and active ground-floor retail operations along a busy commercial corridor while strictly adhering to municipal environmental noise ordinances.",
    challenges: "Managing dust suppression, pedestrian safety, and active ground-floor retail operations along a busy commercial corridor while strictly adhering to municipal environmental noise ordinances.",
    scope: [
      "Installed pipe scaffolding and pedestrian sidewalk bridge per NYC DOT regulations",
      "Raked and ground deteriorated mortar joints to a minimum 3/4-inch depth without damaging adjacent brick edges",
      "Treated all rusted structural steel lintels with rust-converting primer and commercial epoxy topcoat",
      "Pointed 6,500 square feet of historic brick facade using custom color-matched Type N breathable mortar",
      "Replaced 320 spalled and cracked exterior facing bricks with salvaged vintage brick",
      "Applied breathable silicone-free water-repellent silane/siloxane barrier across entire facade"
    ],
    workPerformed: [
      "Installed pipe scaffolding and pedestrian sidewalk bridge per NYC regulations",
      "Raked and ground deteriorated mortar joints to minimum 3/4-inch depth",
      "Treated rusted steel lintels with rust-inhibiting primer and epoxy topcoat",
      "Repointed 6,500 square feet of brick facade with color-matched Type N mortar",
      "Replaced 320 spalled and cracked facing bricks with matching salvage units",
      "Applied breathable hydrophobic penetrating water repellent across facade"
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
    result: "Structural stability restored, violation notices formally dismissed with the Department of Buildings, and complete exterior aesthetic renewal matching the historic neighborhood character.",
    servicesUsed: [
      { title: "Facade Restoration NYC", href: "/services/masonry-work/facade-restoration" },
      { title: "Brick Pointing Bronx & Brooklyn", href: "/services/masonry-work/brick-grinding-pointing" },
      { title: "DOT Sidewalk Violation Removal", href: "/services/concrete-services/dot-violation-removal" }
    ],
    image: "/assets/updatedservicesassets/megabrickworkgridningpoiting.jpeg",
    photos: [
      {
        src: "/assets/updatedservicesassets/megabrickworkgridningpoiting.jpeg",
        alt: "Historic brick masonry repointing and mortar joint tuckpointing on Williamsburg Brooklyn commercial building"
      }
    ]
  },

  "park-avenue-residence": {
    slug: "park-avenue-residence",
    title: "Manhattan Pre-War Co-op Structural Interior Renovation",
    location: "Upper East Side, Manhattan NY",
    borough: "Manhattan",
    neighborhood: "Upper East Side",
    serviceCategory: "home-renovation",
    serviceSlug: "interior-remodeling",
    projectType: "Luxury Residential Co-op Renovation",
    completionDate: "February 2024",
    year: 2024,
    approvedForPublic: true,
    problem: "An outdated 1920s 3-bedroom residence required full electrical, plumbing, and structural layout modernization while strictly complying with rigorous building board alteration rules.",
    challenge: "Strict Co-op board operating restrictions including rigid 9:00 AM – 4:30 PM working windows, elevator reservation limitations, and stringent building acoustic transmission thresholds.",
    challenges: "Strict Co-op board operating restrictions including rigid 9:00 AM – 4:30 PM working windows, elevator reservation limitations, and stringent building acoustic transmission thresholds.",
    scope: [
      "Secured building board approval, DOB alteration permits, and comprehensive umbrella insurance binders",
      "Installed continuous floor and corridor acoustic protection throughout building common areas",
      "Removed non-bearing partitions to create an expansive, open-concept chef's kitchen and living suite",
      "Rewired complete apartment with new 200-amp subpanel and Lutron smart architectural lighting",
      "Replaced legacy galvanized plumbing lines with sound-insulated cast-iron waste and Type L copper supply",
      "Installed bespoke inset cabinetry, Calacatta marble slab countertops, and herringbone white oak flooring",
      "Rebuilt two master bathrooms featuring Schluter-KERDI continuous waterproofing and radiant floor heating"
    ],
    workPerformed: [
      "Secured board approvals, DOB alteration filings, and insurance certificates",
      "Installed floor protection and negative-air HEPA containment barriers",
      "Removed non-bearing partitions to create open-plan living layout",
      "Complete electrical re-wiring with 200-amp service and architectural lighting",
      "Replaced plumbing supply and waste piping with Type L copper and cast iron",
      "Installed custom inset wood cabinetry and Calacatta marble slab surfaces",
      "Rebuilt two bathrooms with Schluter-KERDI continuous waterproofing systems"
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
    result: "Project delivered on schedule within 14 weeks with zero noise violations, full building sign-off, and exceptional luxury appraisal appreciation.",
    servicesUsed: [
      { title: "Home Renovation NYC", href: "/services/home-renovation" },
      { title: "Kitchen Renovation", href: "/services/home-renovation/kitchen-renovation" },
      { title: "Bathroom Renovation", href: "/services/home-renovation/bathroom-renovation" }
    ],
    image: "/assets/commercialmega.jpg",
    photos: [
      {
        src: "/assets/commercialmega.jpg",
        alt: "Finished pre-war apartment interior renovation with herringbone white oak floors and architectural lighting in Manhattan"
      }
    ]
  },

  "westchester-estate-addition": {
    slug: "westchester-estate-addition",
    title: "Pelham Manor Estate Architectural Roofing & Masonry Addition",
    location: "Pelham Manor / Bronx Border",
    borough: "The Bronx / Westchester",
    neighborhood: "Pelham Manor",
    serviceCategory: "roofing-services",
    serviceSlug: "shingle-roofing",
    projectType: "High-End Residential Addition & Exterior Overhaul",
    completionDate: "August 2024",
    year: 2024,
    approvedForPublic: true,
    problem: "An expanding estate residence required an architectural shingle roof replacement paired with a 750 sq ft structural natural stone terrace and outdoor fireplace installation.",
    challenge: "Seamlessly blending new natural fieldstone masonry and rooflines with the original 1930s estate architecture while managing active surface runoff on a downward-sloping grade.",
    challenges: "Seamlessly blending new natural fieldstone masonry and rooflines with the original 1930s estate architecture while managing active surface runoff on a downward-sloping grade.",
    scope: [
      "Stripped aged roof down to tongue-and-groove wood plank decking and reinforced rafter framing",
      "Installed GAF Tiger Paw synthetic underlayment and WinterGuard ice-and-water protection at eaves and valleys",
      "Installed GAF Timberline HDZ architectural lifetime shingles with 130 MPH wind warranty",
      "Excavated and poured reinforced 4,000 PSI concrete footings below the 42-inch local frost line",
      "Constructed a structural blue stone patio over reinforced concrete slab with integrated French drains",
      "Built a custom outdoor fireplace with solid firebrick firebox and natural fieldstone veneer"
    ],
    workPerformed: [
      "Stripped aged roof down to structural wood decking and inspected rafters",
      "Installed synthetic underlayment and self-adhering ice-and-water barrier",
      "Installed GAF Timberline HDZ architectural shingles with reinforced nailing",
      "Excavated and poured reinforced 4,000 PSI concrete footings below frost line",
      "Constructed structural thermal bluestone patio over reinforced concrete slab",
      "Built custom outdoor fireplace with refractory firebrick and stone veneer"
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
    result: "Flawless architectural transition between old and new structures, superior storm resistance, and an entertainer's outdoor stone living suite backed by comprehensive warranties.",
    servicesUsed: [
      { title: "Roofing Contractor Services", href: "/services/roofing-services" },
      { title: "Masonry & Stone Construction", href: "/services/masonry-work" },
      { title: "Patio & Concrete Services", href: "/services/masonry-work/patios" }
    ],
    image: "/assets/updatedservicesassets/megafullhouserenovation1.jpeg",
    photos: [
      {
        src: "/assets/updatedservicesassets/megafullhouserenovation1.jpeg",
        alt: "Architectural shingle roofing installation and natural stone hardscape fireplace addition on residential estate"
      }
    ]
  },

  "long-island-kitchen-remodel": {
    slug: "long-island-kitchen-remodel",
    title: "Queens & Metro Full Kitchen Renovation & Structural Beam Install",
    location: "Bayside / Metro NY",
    borough: "Queens",
    neighborhood: "Bayside",
    serviceCategory: "home-renovation",
    serviceSlug: "kitchen-renovation",
    projectType: "Full Structural Interior Transformation",
    completionDate: "December 2024",
    year: 2024,
    approvedForPublic: true,
    problem: "A compartmentalized 1950s kitchen layout with inadequate electrical capacity, outdated plumbing lines, and structural load-bearing walls preventing modern family living.",
    challenge: "Safely hoisting and securing a 450-pound steel beam within finished interior living spaces without causing ceiling sheetrock cracking or exterior structural shifting.",
    challenges: "Safely hoisting and securing a 450-pound steel beam within finished interior living spaces without causing ceiling sheetrock cracking or exterior structural shifting.",
    scope: [
      "Temporary hydraulic shoring and installation of a 16-foot structural W-section steel beam recessed into ceiling",
      "Complete demolition of load-bearing partition to unify kitchen, dining, and family gathering spaces",
      "Full rough-in of commercial gas lines, dedicated 20-amp appliance circuits, and multi-zone LED drivers",
      "Installation of solid wood shaker cabinetry with soft-close Blum hardware and integrated pull-out pantries",
      "Fabrication and precision seam installation of quartz waterfall island and seamless backsplash",
      "Installation of commercial-grade ventilation ducting vented directly through the roof deck"
    ],
    workPerformed: [
      "Erected temporary hydraulic shoring and installed 16-foot structural steel W-beam",
      "Demolished load-bearing partition to create unified open-concept living area",
      "Rough-in of dedicated appliance circuits, plumbing lines, and gas manifold",
      "Installed custom solid maple cabinetry with soft-close Blum hardware",
      "Fabricated and set 3cm quartz waterfall island and matching backsplash",
      "Installed commercial roof-vented exterior exhaust ventilation system"
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
    result: "A light-filled culinary center with 60% increased countertop workspace, optimal entertaining flow, and fully permitted structural sign-off.",
    servicesUsed: [
      { title: "Kitchen Renovation Bronx & Queens", href: "/services/home-renovation/kitchen-renovation" },
      { title: "Complete Home Renovation", href: "/services/home-renovation" }
    ],
    image: "/assets/megafullhouserenovation.jpg",
    photos: [
      {
        src: "/assets/megafullhouserenovation.jpg",
        alt: "Modern kitchen renovation with quartz waterfall island, custom maple cabinetry, and structural steel support in Queens residence"
      }
    ]
  }
};

export function getAllProjects(): CaseStudyData[] {
  return Object.values(projectsData).filter((p) => p.approvedForPublic !== false);
}

export function getProjectBySlug(slug: string): CaseStudyData | undefined {
  const p = projectsData[slug];
  if (!p || p.approvedForPublic === false) return undefined;
  return p;
}

export function getProjectsByService(category: string, slug?: string): CaseStudyData[] {
  return getAllProjects().filter((p) => {
    if (slug && p.serviceSlug === slug) return true;
    if (p.serviceCategory === category) return true;
    if (p.servicesUsed?.some((s) => (slug && s.href.includes(slug)) || s.href.includes(category))) return true;
    return false;
  }).slice(0, 3);
}
