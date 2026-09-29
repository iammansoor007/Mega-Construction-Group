export interface BoroughData {
  slug: string;
  boroughName: string;
  title: string;
  metaDesc: string;
  h1: string;
  intro: string;
  neighborhoods: string[];
  localBuildingConsiderations: {
    title: string;
    description: string;
  }[];
  primaryServices: {
    title: string;
    description: string;
    href: string;
  }[];
  recentProjects: {
    title: string;
    location: string;
    scope: string;
    href: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  image: string;
}

export const locationsData: Record<string, BoroughData> = {
  "bronx": {
    slug: "bronx",
    boroughName: "The Bronx",
    title: "Licensed General Contractor The Bronx NY | Mega Contracting NY Group",
    metaDesc: "Licensed general contractor headquartered at 3044 Radcliff Ave in the Bronx. Roofing, brick pointing, facade restoration & sidewalk repair across all Bronx neighborhoods.",
    h1: "Licensed NYC General Contractor Serving The Bronx",
    intro: "Headquartered at 3044 Radcliff Ave, Mega Contracting NY Group Inc. is proud to be a hometown general contractor for the Bronx. From historic pre-war multi-family properties along the Grand Concourse to single-family residential homes in Riverdale, Pelham Bay, Throggs Neck, and Morris Park, we provide fully licensed, code-compliant exterior restoration, roofing, masonry, and interior renovation services.",
    neighborhoods: [
      "Riverdale", "Pelham Bay", "Throggs Neck", "Morris Park",
      "City Island", "Country Club", "Woodlawn", "Grand Concourse",
      "Kingsbridge", "Soundview", "Fordham", "Norwood"
    ],
    localBuildingConsiderations: [
      {
        title: "Pre-War Masonry & Freeze-Thaw Stress",
        description: "Bronx multi-family and mixed-use structures experience intense freeze-thaw cycles that break down aged lime mortar. We specialize in Type N and Type S historic tuckpointing and parapet wall stabilization."
      },
      {
        title: "Severe Flat Roof Pooling & Drainage",
        description: "Older multi-story Bronx roofs often suffer from improper slope and clogged cast-iron leaders. We install custom tapered polyiso insulation systems paired with heat-welded 60-mil TPO or SBS modified bitumen membranes."
      },
      {
        title: "NYC DOT Sidewalk Violations (§19-152)",
        description: "With heavy pedestrian traffic and aggressive street tree roots, Bronx property owners frequently receive DOT sidewalk violation notices. We pull street opening permits, remove tree root trip hazards, and pour 4,000 PSI DOT-approved concrete."
      }
    ],
    primaryServices: [
      { title: "Roofing Contractor Bronx", description: "Flat roofs, leak repairs, GAF shingles & commercial TPO installations.", href: "/roofing" },
      { title: "Masonry & Brick Pointing", description: "Historic facade restoration, brick repointing, and parapet wall rebuilding.", href: "/masonry" },
      { title: "Chimney Repair Bronx", description: "Complete chimney rebuilds, crown pouring, and leakproof flashing replacement.", href: "/chimney-repair-bronx" },
      { title: "DOT Sidewalk Violation Removal", description: "Expedited violation removal, permit filing, and certified concrete pouring.", href: "/dot-violation-removal-nyc" },
      { title: "Complete Home Renovation", description: "Turn-key kitchens, luxury bathrooms, basement waterproofing & egress.", href: "/renovation" }
    ],
    recentProjects: [
      {
        title: "Bronx Multi-Family Parapet & Roof Rebuild",
        location: "Grand Concourse, Bronx NY",
        scope: "Complete tear-off of 4,200 sq ft flat roof, structural parapet wall rebuild, and GAF TPO installation.",
        href: "/projects/bronx-multi-family-renovation"
      },
      {
        title: "Pelham Bay Historic Brick Pointing",
        location: "Pelham Bay, Bronx NY",
        scope: "Facade grinding, Type N color-matched mortar repointing, and lintel rust conversion.",
        href: "/projects"
      }
    ],
    faqs: [
      {
        question: "Where is Mega Contracting NY Group located in the Bronx?",
        answer: "Our corporate headquarters and primary operations dispatch facility is located at 3044 Radcliff Ave, Bronx, NY 10469. We dispatch emergency repair teams 24/7 across the entire borough."
      },
      {
        question: "Do you handle NYC Department of Buildings (DOB) permits in the Bronx?",
        answer: "Yes. Mega Contracting NY Group Inc. holds NYC General Contractor License #NYC-2005-8942. We prepare all architectural filings, pull necessary DOB work permits, coordinate on-site inspections, and obtain Letters of Completion."
      },
      {
        question: "How quickly can you clear a DOT sidewalk violation in the Bronx?",
        answer: "We typically pull required NYC DOT permits within 24 to 48 hours, complete the concrete demo and re-pour in 1 to 2 days, and submit dismissal paperwork for official inspection sign-off."
      }
    ],
    image: "/assets/updatedservicesassets/megashingleroofingsupereal1.jpeg"
  },

  "brooklyn": {
    slug: "brooklyn",
    boroughName: "Brooklyn",
    title: "Licensed General Contractor Brooklyn NY | Mega Contracting NY Group",
    metaDesc: "Expert Brooklyn general contractor specializing in brownstone facade restoration, stoop repair, flat roofing, and landmark district masonry. Free estimates.",
    h1: "Licensed Brooklyn General Contractor & Brownstone Restoration",
    intro: "Brooklyn's architectural heritage requires specialized construction craftsmanship. Mega Contracting NY Group Inc. delivers museum-grade brownstone restoration, historic stoop repair, rubber flat roofing, and comprehensive interior remodeling across Brooklyn's landmark and modern residential neighborhoods.",
    neighborhoods: [
      "Park Slope", "Brooklyn Heights", "Williamsburg", "DUMBO",
      "Bay Ridge", "Carroll Gardens", "Cobble Hill", "Bushwick",
      "Bed-Stuy", "Crown Heights", "Greenpoint", "Flatbush"
    ],
    localBuildingConsiderations: [
      {
        title: "Historic Brownstone & Sandstone Deterioration",
        description: "Brooklyn brownstones suffer from face spalling due to water infiltration behind the soft sandstone surface. We cut back damaged stone, install stainless steel helical anchors, and apply breathable Jahn restoration mortars."
      },
      {
        title: "NYC Landmarks Preservation Commission (LPC) Standards",
        description: "Exterior repairs within Brooklyn historic districts (Park Slope, Brooklyn Heights, Cobble Hill) require strict LPC approval. We maintain historic mortar profiles, stone tooling textures, and decorative cornice details."
      },
      {
        title: "Rowhouse Party Wall & Roof Transitions",
        description: "Sharing party walls with adjoining rowhouses requires precision flashing and parapet counter-flashing to prevent neighbor-to-neighbor water migration."
      }
    ],
    primaryServices: [
      { title: "Brownstone Facade Restoration", description: "Historic sandstone patching, helical pinning, and LPC-compliant stone tooling.", href: "/facade-restoration-nyc" },
      { title: "Stoop & Entry Stair Repair", description: "Structural concrete reinforcement, brownstone resurfacing, and iron railing restoration.", href: "/stoop-repair-brooklyn" },
      { title: "Brooklyn Flat Roofing", description: "EPDM rubber, TPO membranes, and skylight replacement for multi-family townhomes.", href: "/flat-roofing-nyc" },
      { title: "Local Law 11 (FISP) Compliance", description: "Facade inspections, safety netting, structural repointing, and DOB compliance filing.", href: "/local-law-11-brooklyn" },
      { title: "Luxury Interior Remodeling", description: "Custom kitchen expansions, open-concept conversions, and spa-grade bathrooms.", href: "/renovation" }
    ],
    recentProjects: [
      {
        title: "Park Slope Brownstone Facade & Stoop Restoration",
        location: "Park Slope, Brooklyn NY",
        scope: "Full brownstone facade resurfacing, decorative lintel casting, and three-flight stoop rebuilding.",
        href: "/projects/brooklyn-commercial-build-out"
      }
    ],
    faqs: [
      {
        question: "Do you perform work in Brooklyn historic landmark districts?",
        answer: "Yes. We work routinely with Landmarks Preservation Commission (LPC) requirements, ensuring historical mortar color matching, profile accuracy, and material compliance."
      },
      {
        question: "How long does a brownstone stoop restoration take in Brooklyn?",
        answer: "A complete structural stoop restoration typically requires 2 to 3 weeks, including demo of spalled layers, structural concrete patching, mesh reinforcement, and multi-layer brownstone finish application."
      }
    ],
    image: "/assets/updatedservicesassets/megabrickworkgridningpoiting.jpeg"
  },

  "manhattan": {
    slug: "manhattan",
    boroughName: "Manhattan",
    title: "Licensed General Contractor Manhattan NY | Mega Contracting NY Group",
    metaDesc: "High-end Manhattan general contractor. Facade restoration, Local Law 11 FISP compliance, commercial roofing & luxury interior renovation. Fully insured.",
    h1: "Licensed Manhattan General Contractor & Commercial Construction",
    intro: "Operating in Manhattan demands high-density urban logistics, rigorous building department compliance, and strict building board protocols. Mega Contracting NY Group Inc. provides elite facade restoration, FISP Local Law 11 repairs, commercial flat roofing, and luxury interior renovations throughout Manhattan.",
    neighborhoods: [
      "Upper East Side", "Upper West Side", "Midtown Manhattan", "Tribeca",
      "SoHo", "Chelsea", "Greenwich Village", "Financial District",
      "Harlem", "Hell's Kitchen", "East Village", "Flatiron"
    ],
    localBuildingConsiderations: [
      {
        title: "NYC Local Law 11 / FISP Compliance",
        description: "Buildings taller than six stories must undergo mandatory exterior facade inspections every 5 years. We repair unsafe facade conditions, spalling masonry, and parapet walls, securing DOB sign-offs."
      },
      {
        title: "High-Rise Street Protection & Sidewalk Sheds",
        description: "Manhattan exterior work requires heavy pedestrian protection, suspended scaffolding rigs, and Department of Transportation sidewalk shed permits."
      },
      {
        title: "Co-op & Condo Alteration Agreements",
        description: "We navigate strict building management alteration agreements, insurance requirements ($5M+), sound mitigation schedules, and elevator protection."
      }
    ],
    primaryServices: [
      { title: "Facade Restoration Manhattan", description: "High-rise exterior repair, terra cotta pinning, brick repointing & FISP compliance.", href: "/facade-restoration-nyc" },
      { title: "Local Law 11 (FISP) Repairs", description: "Parapet rebuilds, lintel replacements, coping stones & DOB Certificate of Correction.", href: "/local-law-11-brooklyn" },
      { title: "Commercial Flat Roofing", description: "High-performance TPO, cold-applied liquids, and rooftop amenity terraces.", href: "/flat-roofing-nyc" },
      { title: "Luxury Co-op & Condo Remodeling", description: "Architectural interiors, custom cabinetry, structural wall alterations, and acoustic dampening.", href: "/renovation" }
    ],
    recentProjects: [
      {
        title: "Park Avenue Historic Co-op Renovation",
        location: "Upper East Side, Manhattan NY",
        scope: "Complete structural interior renovation, bespoke millwork, and luxury bathroom suites.",
        href: "/projects/park-avenue-residence"
      }
    ],
    faqs: [
      {
        question: "Can you meet strict Manhattan Co-op insurance requirements?",
        answer: "Yes. Mega Contracting NY Group Inc. maintains comprehensive $5,000,000 commercial liability coverage and naming capabilities for building owners and managing agents."
      },
      {
        question: "Do you handle sidewalk shed permits in Manhattan?",
        answer: "Yes. We coordinate engineered scaffolding drawings, DOT street permits, and DOB filing for all supported scaffold and sidewalk shed installations."
      }
    ],
    image: "/assets/commercialmega.jpg"
  },

  "queens": {
    slug: "queens",
    boroughName: "Queens",
    title: "Licensed General Contractor Queens NY | Mega Contracting NY Group",
    metaDesc: "Licensed general contractor serving Queens NY. Roof replacement, stucco & EIFS claddings, concrete driveways, sidewalk violation removals, and renovations.",
    h1: "Licensed Queens General Contractor & Exterior Specialist",
    intro: "Queens features a wide variety of residential homes, multi-family garden complexes, and busy commercial strips. Mega Contracting NY Group Inc. delivers durable exterior contracting, pitched and flat roof replacements, traditional stucco and EIFS insulated finishes, and DOT concrete repairs across all Queens communities.",
    neighborhoods: [
      "Astoria", "Long Island City", "Forest Hills", "Flushing",
      "Bayside", "Whitestone", "Sunnyside", "Woodside",
      "Howard Beach", "Middle Village", "Glendale", "Jackson Heights"
    ],
    localBuildingConsiderations: [
      {
        title: "Stucco & EIFS Cladding Systems",
        description: "Many Queens residences feature exterior stucco finishes prone to moisture hairline cracking. We install commercial multi-layer EIFS systems with continuous drainage planes."
      },
      {
        title: "Flat & Pitch Roof Transitions",
        description: "Queens semi-detached houses frequently pair front shingle dormers with rear flat rubber roofs. We install seamless transitions that eliminate vulnerable seam leaks."
      },
      {
        title: "Driveway & Sidewalk Concrete Durability",
        description: "With freeze cycles and curb parking, Queens concrete surfaces require minimum 4,000 PSI air-entrained transit mix with welded wire reinforcement."
      }
    ],
    primaryServices: [
      { title: "Stucco Repair & EIFS Installation", description: "Color-matched crack repair, synthetic stucco, and full exterior insulation cladding.", href: "/stucco-repair-brooklyn" },
      { title: "Roof Replacement Queens", description: "GAF architectural shingles, flat TPO roofing, and seamless aluminum gutters.", href: "/roofing" },
      { title: "Concrete Driveways & Sidewalks", description: "DOT violation clearance, curb cuts, rebar reinforcement, and broom finish concrete.", href: "/concrete-services" },
      { title: "Basement Waterproofing", description: "French drains, sump pump installations, and hydrostatic crack sealing.", href: "/waterproofing" }
    ],
    recentProjects: [
      {
        title: "Bayside Architectural Shingle & Stucco Overhaul",
        location: "Bayside, Queens NY",
        scope: "GAF Timberline HDZ shingle roof installation paired with synthetic EIFS stucco refinishing.",
        href: "/projects"
      }
    ],
    faqs: [
      {
        question: "How long does an EIFS stucco installation take in Queens?",
        answer: "A typical full exterior EIFS installation takes approximately 10 to 14 days, including foam insulation board fastening, fiberglass mesh embedding, base coat curing, and textured acrylic finish application."
      },
      {
        question: "Do you clear Queens DOT sidewalk violations?",
        answer: "Yes. We handle the entire DOT sidewalk violation dismissal process from street opening permits to official sign-off inspection."
      }
    ],
    image: "/assets/megastuccorestoreation1.jpg"
  },

  "staten-island": {
    slug: "staten-island",
    boroughName: "Staten Island",
    title: "Licensed General Contractor Staten Island NY | Mega Contracting NY Group",
    metaDesc: "Reliable Staten Island general contractor. Architectural shingle roofing, commercial flat roofs, structural foundations, and masonry retaining walls.",
    h1: "Licensed Staten Island General Contractor & Roofing Specialists",
    intro: "Staten Island's suburban topography and maritime coastal climate present distinct construction challenges, from high wind loads along the South Shore to foundation drainage on sloping terrain. Mega Contracting NY Group Inc. delivers rugged, hurricane-rated roofing, concrete foundations, retaining walls, and custom residential renovations.",
    neighborhoods: [
      "St. George", "Tottenville", "Great Kills", "New Dorp",
      "Annadale", "Eltingville", "Castleton Corners", "Todt Hill",
      "West New Brighton", "Rosebank", "Dongan Hills", "Travis"
    ],
    localBuildingConsiderations: [
      {
        title: "Coastal Wind Loads & Heavy Storms",
        description: "Proximity to the Atlantic requires roofing shingles rated for 130 MPH winds, six-nail fastening patterns, and enhanced starter strip adhesion."
      },
      {
        title: "Hillside Drainage & Retaining Wall Stability",
        description: "Staten Island's hilly topography necessitates engineered concrete retaining walls with proper gravel backfill, geotextile fabric, and weep hole drainage."
      },
      {
        title: "Subterranean Moisture & Foundation Waterproofing",
        description: "High water tables near coastal shorelines require exterior elastomeric waterproofing membranes and perimeter drainage systems."
      }
    ],
    primaryServices: [
      { title: "Architectural Shingle Roofing", description: "GAF Master Elite certified installation, Class 4 impact resistance, and 50-year warranty.", href: "/roofing" },
      { title: "Retaining Wall Construction", description: "Poured concrete, segmental block, and reinforced stone retaining walls.", href: "/retaining-wall-bronx" },
      { title: "Foundation Repair & Waterproofing", description: "Helical underpinning, foundation crack injection, and French drain systems.", href: "/waterproofing" },
      { title: "Complete Interior Remodeling", description: "Custom home additions, modern kitchen transformations, and finished basements.", href: "/renovation" }
    ],
    recentProjects: [
      {
        title: "South Shore Coastal Shingle Roof Replacement",
        location: "Tottenville, Staten Island NY",
        scope: "Complete tear-off, high-temperature ice-and-water barrier, GAF 130 MPH wind-rated shingle installation.",
        href: "/projects"
      }
    ],
    faqs: [
      {
        question: "What wind rating do your Staten Island roofs have?",
        answer: "We install GAF and CertainTeed architectural shingles rated to withstand 130 MPH winds, installed with enhanced six-nail patterns and reinforced starter strips."
      },
      {
        question: "Do you build engineered retaining walls on Staten Island?",
        answer: "Yes. We pour reinforced concrete and install engineered structural block retaining walls with integrated gravel backfill and drainage weeping."
      }
    ],
    image: "/assets/updatedservicesassets/megafullhouserenovation1.jpeg"
  }
};
