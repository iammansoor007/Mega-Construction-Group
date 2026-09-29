export interface ResourceArticle {
  slug: string;
  title: string;
  metaDesc: string;
  h1: string;
  directAnswer: string;
  author: string;
  publishDate: string;
  updatedDate: string;
  officialCitations: string[];
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  relatedService: {
    title: string;
    href: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const resourcesData: Record<string, ResourceArticle> = {
  "nyc-local-law-11-guide": {
    slug: "nyc-local-law-11-guide",
    title: "NYC Local Law 11 (FISP) Compliance Guide 2026 | Mega Contracting NY Group",
    metaDesc: "Comprehensive guide to NYC Local Law 11 / FISP facade compliance. Inspection cycles, filing classifications, penalties, and qualified facade repairs.",
    h1: "NYC Local Law 11 (FISP) Facade Compliance & Inspection Guide",
    directAnswer: "Local Law 11 (now known as the Facade Inspection & Safety Program or FISP) requires all buildings in New York City taller than six stories to have their exterior walls and appurtenances inspected by a Qualified Exterior Wall Inspector (QEWI) every five years.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "January 15, 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Administrative Code §28-302.1 (Maintenance of Exterior Walls)",
      "Rules of the City of New York (1 RCNY §103-04 - Periodic Inspection of Exterior Walls)",
      "NYC Department of Buildings FISP Filing Cycle 9 Requirements"
    ],
    sections: [
      {
        heading: "FISP Classification Categories Explained",
        paragraphs: [
          "Following inspection, the QEWI files a technical report classifying the building into one of three statutory categories: Safe, Safe with a Repair and Maintenance Program (SWARMP), or Unsafe.",
          "An 'Unsafe' classification indicates hazardous conditions that could immediately endanger public safety (such as loose brickwork, crumbling parapets, or fractured stone). Building owners are mandated to install immediate pedestrian protection (sidewalk sheds) and execute repairs within 30 to 90 days."
        ]
      },
      {
        heading: "Required Repair Protocols & DOB Filing",
        paragraphs: [
          "Executing repairs on a FISP-classified building requires a licensed general contractor pulling DOB structural alteration permits. Typical repairs include 100% parapet wall repointing, stainless steel tie-back anchor installations, lintel replacement, and structural coping stone resetting.",
          "Mega Contracting NY Group Inc. coordinates directly with building engineers and the NYC DOB to perform authorized repairs, request re-inspections, and file Amended Reports to transition properties from Unsafe to Safe."
        ]
      }
    ],
    relatedService: {
      title: "Explore Facade Restoration Services",
      href: "/facade-restoration-nyc"
    },
    faqs: [
      {
        question: "What are the penalties for missing a Local Law 11 filing deadline?",
        answer: "The NYC Department of Buildings levies civil penalties of $1,000 per month for late filing, plus an additional $5,000 penalty for failure to file, alongside severe daily fines for active unsafe facade violations."
      }
    ]
  },

  "nyc-dob-violation-guide": {
    slug: "nyc-dob-violation-guide",
    title: "How to Remove NYC DOB Violations Guide | Mega Contracting NY Group",
    metaDesc: "Step-by-step guide to clearing NYC Department of Buildings violations. Certificates of correction, OATH hearings, facade defects, and stop-work orders.",
    h1: "Complete Guide to NYC Department of Buildings (DOB) Violation Removal",
    directAnswer: "Removing a NYC DOB violation requires physically correcting the underlying building code defect, obtaining licensed contractor sign-offs and permits, and submitting a formal Certificate of Correction (AEU-20 form) to the Department of Buildings Administrative Enforcement Unit.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "February 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Administrative Code Title 28 (New York City Construction Codes)",
      "Rules of the City of New York 1 RCNY §102-01 (Violation Classification and Penalties)",
      "NYC DOB Administrative Enforcement Unit (AEU) Guidelines"
    ],
    sections: [
      {
        heading: "Types of DOB Violations We Resolve",
        paragraphs: [
          "DOB violations range from Class 1 (Immediately Hazardous), Class 2 (Major), to Class 3 (Lesser). Common exterior violations include work without a permit, unpainted or structurally unsound fire escapes, crumbling facade masonry, uncertified boiler conversions, and illegal basement occupancies.",
          "Unresolved violations accumulate monthly civil penalties, prevent property refinancing or sales, and can trigger Stop Work Orders (SWO) or vacate orders."
        ]
      },
      {
        heading: "The 4-Step Resolution Process",
        paragraphs: [
          "1. File Research: We pull certified DOB violation notices and inspector summonses from the Buildings Information System (BIS) and DOB NOW.",
          "2. Physical Remediation: Our licensed crews execute code-compliant repairs under active permits.",
          "3. Inspection & Proof: We capture photo evidence and secure sign-offs from certified NYC Special Inspection Agencies.",
          "4. Certificate of Correction: We file AEU-2 forms to formally dismiss all penalties and achieve 'Resolved' status."
        ]
      }
    ],
    relatedService: {
      title: "DOB Violation Removal Services",
      href: "/services/dob-violation-removal"
    },
    faqs: [
      {
        question: "Can I sell a property with open DOB violations in NYC?",
        answer: "Title companies and mortgage lenders typically refuse to close until all Class 1 and Class 2 DOB violations are cleared and all accrued civil penalties are paid in full."
      }
    ]
  },

  "nyc-dot-sidewalk-violation-guide": {
    slug: "nyc-dot-sidewalk-violation-guide",
    title: "NYC DOT Sidewalk Violation Removal Guide | Mega Contracting NY Group",
    metaDesc: "How to clear NYC DOT sidewalk violations under §19-152. Street opening permits, concrete pouring standards, tree roots, and dismissal sign-offs.",
    h1: "NYC DOT Sidewalk Violation Removal & Repair Guide (§19-152)",
    directAnswer: "Under NYC Administrative Code §19-152, property owners are legally responsible for maintaining the sidewalk abutting their property in a reasonably safe condition free from trip hazards, cracks, and structural settlement.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "January 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Administrative Code §19-152 (Duties and Obligations of Property Owner with Respect to Sidewalks)",
      "Rules of the City of New York Title 34 Chapter 2 (Highway Rules)",
      "NYC DOT Standard Highway Specifications Section 4.13"
    ],
    sections: [
      {
        heading: "Common Sidewalk Defects Triggering Citations",
        paragraphs: [
          "DOT inspectors issue Notices of Violation for trip hazards greater than 1/2 inch vertical deflection, collapsed sub-bases, hardware trip hazards, missing expansion joints, and tree root upheavals.",
          "If an owner fails to repair the sidewalk within 75 days, the City may hire its own contractor to execute the repairs and place a municipal tax lien against the property."
        ]
      },
      {
        heading: "Certified Concrete Pouring Standards",
        paragraphs: [
          "All replacement sidewalk flags must be poured to a minimum thickness of 4 inches (7 inches across driveways) using 4,000 PSI air-entrained concrete over a compacted 6-inch gravel base. Mega Contracting NY Group pulls DOT street opening permits, installs proper expansion joints, and submits proof of completion for official violation dismissal."
        ]
      }
    ],
    relatedService: {
      title: "DOT Sidewalk Violation Removal Services",
      href: "/dot-violation-removal-nyc"
    },
    faqs: [
      {
        question: "Who is responsible for tree root sidewalk damage in NYC?",
        answer: "While the property owner is responsible for the sidewalk surface, root shaving or tree removal requires coordination with the NYC Department of Parks & Recreation. We coordinate tree permits and root pruning safeguards."
      }
    ]
  },

  "nyc-roof-replacement-guide": {
    slug: "nyc-roof-replacement-guide",
    title: "NYC Roof Replacement Code & Cost Guide | Mega Contracting NY Group",
    metaDesc: "NYC roof replacement regulations. Maximum allowable layers, energy conservation code insulation R-30, fire ratings, and DOB permit requirements.",
    h1: "NYC Commercial & Residential Roof Replacement Guide",
    directAnswer: "NYC Building Code allows a maximum of two roofing layers on any residential or commercial building before a full tear-off down to the structural substrate is legally mandated.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "March 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "2022 NYC Building Code Chapter 15 (Roof Assemblies and Rooftop Structures)",
      "NYC Energy Conservation Code (NYCECC) R-Value Insulation Mandates",
      "NYC Fire Code Chapter 9 (Fire Retardant Roof Coverings)"
    ],
    sections: [
      {
        heading: "Two-Layer Rule & Tear-Off Requirements",
        paragraphs: [
          "Under NYC Building Code §1510.3, recovering an existing roof is prohibited if the building already has two or more roofing applications, or if the existing roof deck is water-soaked, rotted, or structurally unsound.",
          "Executing a complete tear-off allows our inspectors to verify the integrity of tongue-and-groove wood boards, corrugated metal decks, or structural concrete slabs."
        ]
      },
      {
        heading: "Energy Code & Solar Reflectance (Cool Roofs)",
        paragraphs: [
          "Under the NYC Energy Conservation Code, low-slope roof replacements must achieve minimum continuous insulation ratings of R-30 and incorporate cool roof solar-reflective membranes (such as white TPO) to mitigate the urban heat island effect."
        ]
      }
    ],
    relatedService: {
      title: "Roof Replacement Services Bronx & NYC",
      href: "/roof-replacement-bronx-ny"
    },
    faqs: [
      {
        question: "How much does a commercial roof replacement cost in NYC?",
        answer: "Commercial flat roof replacements in NYC generally range from $10 to $18 per square foot depending on structural deck repairs, R-30 insulation thickness, perimeter parapet flashing, and building height accessibility."
      }
    ]
  },

  "nyc-flat-roof-guide": {
    slug: "nyc-flat-roof-guide",
    title: "NYC Flat Roof Systems Guide: TPO vs EPDM vs SBS | Mega Contracting NY Group",
    metaDesc: "Compare commercial flat roofing systems in NYC: TPO single-ply, EPDM rubber, and SBS modified bitumen torch-down. Lifespan, durability, and cost.",
    h1: "NYC Flat Roofing Systems Guide: TPO, EPDM & Modified Bitumen",
    directAnswer: "The three standard flat roofing systems in NYC are heat-welded TPO (best for energy efficiency and ponding water), EPDM rubber (best for cold-weather flexibility), and SBS modified bitumen (best for heavy rooftop foot traffic).",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "January 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "ASTM D6878 (Standard Specification for Thermoplastic Polyolefin Based Sheet Roofing)",
      "ASTM D4637 (Standard Specification for EPDM Sheet Roofing)",
      "NYC Fire Department Torch-Applied Roofing Permits (FDNY Rule 3 RCNY §1408-01)"
    ],
    sections: [
      {
        heading: "TPO (Thermoplastic Polyolefin) Systems",
        paragraphs: [
          "TPO has become the primary flat roof membrane across NYC commercial and residential multi-family buildings. Seams are hot-air welded at 1,000°F creating a molecular bond stronger than the sheet itself, preventing seam delamination caused by freeze-thaw pooling."
        ]
      },
      {
        heading: "SBS Modified Bitumen & FDNY Torch Regulations",
        paragraphs: [
          "Modified bitumen multi-ply roofs offer exceptional puncture resistance. However, FDNY regulations strictly govern open-flame torch application in NYC, requiring full fire watch protocols and certified installers. We utilize cold-applied self-adhered membranes or hot-air welded systems where torching is restricted."
        ]
      }
    ],
    relatedService: {
      title: "Flat Roofing NYC Services",
      href: "/flat-roofing-nyc"
    },
    faqs: [
      {
        question: "How long does a commercial flat roof last in New York City?",
        answer: "A properly installed 60-mil TPO or multi-ply SBS modified bitumen roof lasts 25 to 30 years with routine semi-annual drain inspections and proactive flashing maintenance."
      }
    ]
  },

  "nyc-roof-leak-guide": {
    slug: "nyc-roof-leak-guide",
    title: "NYC Emergency Roof Leak Detection & Repair Guide | Mega Contracting NY Group",
    metaDesc: "How to identify and repair active roof leaks in NYC. Flashing failures, parapet leaks, chimney chases, and commercial diagnostic methods.",
    h1: "NYC Emergency Roof Leak Diagnostics & Permanent Repair Guide",
    directAnswer: "Over 80% of persistent NYC roof leaks originate not from the primary field membrane, but from perimeter flashings, failing parapet coping stones, deteriorated chimney masonry, or HVAC curb penetrations.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "February 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NRCA Roofing Manual: Architectural Metal Flashing and Roof Assemblies",
      "ASTM E2128 (Standard Guide for Evaluating Water Leakage of Building Walls)"
    ],
    sections: [
      {
        heading: "Diagnostic Detection Protocols",
        paragraphs: [
          "Water travels horizontally along concrete slabs and joists before dripping through ceiling plaster, making the entry point deceptively distant from the interior puddle. We deploy thermal infrared imaging and electronic moisture detection to pinpoint water entry."
        ]
      },
      {
        heading: "Emergency Stabilization vs. Permanent Repair",
        paragraphs: [
          "Emergency tar patches are temporary 24-hour measures. Permanent restoration requires grinding out failing step flashings, rebuilding loose brickwork, installing 24-gauge commercial counter-flashing counter-sunk into mortar joints, and welding reinforced membrane boots."
        ]
      }
    ],
    relatedService: {
      title: "Roof Leak Repair NYC Services",
      href: "/roof-leak-repair-nyc"
    },
    faqs: [
      {
        question: "How fast can Mega Contracting respond to a severe roof leak in NYC?",
        answer: "We maintain 24/7 rapid deployment crews across all five boroughs, typically responding within 2 to 4 hours to contain water intrusion and secure temporary weatherproofing."
      }
    ]
  },

  "nyc-brick-pointing-guide": {
    slug: "nyc-brick-pointing-guide",
    title: "NYC Brick Pointing & Tuckpointing Guide | Mega Contracting NY Group",
    metaDesc: "Technical brick repointing guide for NYC brownstones and buildings. Type N vs Type S mortar, joint raking depth, and freeze-thaw masonry protection.",
    h1: "NYC Brick Pointing, Tuckpointing & Masonry Joint Restoration Guide",
    directAnswer: "Brick pointing (tuckpointing) is the process of raking out degraded mortar joints to a minimum depth of 3/4-inch and repacking them with fresh, chemically compatible mortar to prevent structural water penetration and freeze-thaw face spalling.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "January 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "ASTM C270 (Standard Specification for Mortar for Unit Masonry)",
      "National Park Service Preservation Brief 2: Repointing Mortar Joints in Historic Masonry Buildings",
      "NYC Building Code Chapter 21 (Masonry Standards)"
    ],
    sections: [
      {
        heading: "The Dangers of Hard Portland Cement on Historic Brick",
        paragraphs: [
          "A frequent mistake in NYC is using excessively hard Portland cement on historic soft clay bricks. When the building shifts, the rock-hard mortar crushes the brick edges, causing catastrophic surface spalling. We formulate high-calcium lime Type N mortars that match the historic compressive elasticity."
        ]
      },
      {
        heading: "Dustless HEPA Grinding & Raking Standards",
        paragraphs: [
          "In high-density NYC neighborhoods, joint raking must be performed using vacuum-shrouded grinders complying with OSHA Table 1 respirable crystalline silica standards to protect public safety and prevent masonry edge fractures."
        ]
      }
    ],
    relatedService: {
      title: "Brick Pointing Bronx Services",
      href: "/brick-pointing-bronx"
    },
    faqs: [
      {
        question: "How often should an exterior brick wall be repointed in NYC?",
        answer: "High-exposure NYC exterior facades typically require repointing every 25 to 30 years, while parapet walls and weather-facing chimney stacks may require service every 15 to 20 years."
      }
    ]
  },

  "nyc-parapet-repair-guide": {
    slug: "nyc-parapet-repair-guide",
    title: "NYC Parapet Wall Repair & Rebuilding Guide | Mega Contracting NY Group",
    metaDesc: "NYC Building Code requirements for parapet wall safety (§28-301.1). Coping stone anchorages, outward bowing repair, and annual observation mandates.",
    h1: "NYC Parapet Wall Repair, Rebuilding & Code Compliance Guide",
    directAnswer: "A parapet wall is the protective rooftop boundary wall extending above the roofline; in NYC, it is subject to intense weathering on three sides, making it the most common source of masonry collapse and facade violations.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "March 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Administrative Code §28-301.1.1 (Annual Parapet Observation Rule - Effective 2024)",
      "NYC DOB Buildings Bulletin 2012-004 (Parapet Stability and Masonry Tiebacks)",
      "2022 NYC Building Code Section 1509"
    ],
    sections: [
      {
        heading: "The 2024 NYC Annual Parapet Observation Mandate",
        paragraphs: [
          "Under new NYC Department of Buildings regulations, all building owners with street-facing parapet walls must have annual physical observations performed to detect displacement, outward bowing, cracks, and missing coping stones. Owners must retain these records for six years."
        ]
      },
      {
        heading: "Structural Rebuilding vs. Anchor Stabilization",
        paragraphs: [
          "When a parapet exhibits more than 1 inch of outward lean or separated mortar joints, anchoring alone is insufficient. We dismantle the wall to sound structural masonry, rebuild with solid face brick tied back to roof framing with galvanized steel angles, and cap with anchored drip-grooved stone."
        ]
      }
    ],
    relatedService: {
      title: "Parapet Wall Repair Services",
      href: "/services/masonry/parapet-wall-repair"
    },
    faqs: [
      {
        question: "What causes a rooftop parapet wall to bow outward in NYC?",
        answer: "Thermal expansion and freeze-thaw cycles cause the roof-side masonry to expand faster than the colder street side, creating cumulative outward eccentric force that bows the wall toward the street."
      }
    ]
  },

  "nyc-facade-restoration-guide": {
    slug: "nyc-facade-restoration-guide",
    title: "NYC Facade Restoration & Brownstone Preservation Guide | Mega Contracting NY Group",
    metaDesc: "Comprehensive guide to restoring commercial and historic building facades in NYC. Terra cotta pinning, sandstone tooling, and LPC compliance.",
    h1: "Comprehensive NYC Facade Restoration & Preservation Guide",
    directAnswer: "Facade restoration in New York City encompasses repairing exterior masonry, brownstone, terra cotta, and steel lintels to preserve structural stability, eliminate water infiltration, and maintain architectural heritage.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "February 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Landmarks Preservation Commission (LPC) Guidelines for Facade Alterations",
      "NYC Administrative Code §28-302 (FISP Regulations)"
    ],
    sections: [
      {
        heading: "Brownstone & Sandstone Exfoliation Remediation",
        paragraphs: [
          "Sandstone brownstone faces deteriorate in horizontal sheets. Restoration requires chipping back the delaminated face to solid rock, installing stainless steel pins, applying a breathable bonding slurry, and hand-troweling multi-coat mineral restoration mortars to match the historic color and tooling."
        ]
      },
      {
        heading: "Structural Steel Lintel Corrosion & Jacking",
        paragraphs: [
          "When steel lintels over windows rust, their volume expands up to ten times (rust jacking), lifting the masonry above into diagonal 'stair-step' cracks. We replace corroded lintels with hot-dipped galvanized or stainless steel units with integrated membrane flashings."
        ]
      }
    ],
    relatedService: {
      title: "Facade Restoration NYC Services",
      href: "/facade-restoration-nyc"
    },
    faqs: [
      {
        question: "Do I need LPC permits for facade restoration in a NYC historic district?",
        answer: "Yes. Any exterior masonry work within an LPC-designated historic district requires a Permit for Minor Work (PMW) or Certificate of Appropriateness before scaffolding is erected."
      }
    ]
  },

  "nyc-kitchen-renovation-guide": {
    slug: "nyc-kitchen-renovation-guide",
    title: "NYC Kitchen Renovation Permitting & Planning Guide | Mega Contracting NY Group",
    metaDesc: "How to plan a kitchen renovation in a NYC Co-op, condo, or townhouse. DOB plumbing permits, gas line testing, and Co-op board alteration agreements.",
    h1: "NYC Kitchen Renovation: DOB Permits, Co-ops & Planning Guide",
    directAnswer: "Renovating a kitchen in NYC typically requires an approved Co-op or Condo Board Alteration Agreement, Department of Buildings permits if plumbing fixtures or structural walls are relocated, and licensed master trade sign-offs.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "March 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Plumbing Code Chapter 1 (Administration & Permitting)",
      "NYC Fuel Gas Code (Gas Piping Testing Mandates)",
      "NYC Electrical Code (NFPA 70 National Electrical Code with NYC Amendments)"
    ],
    sections: [
      {
        heading: "When Are DOB Permits Legally Required?",
        paragraphs: [
          "Minor cosmetic changes (cabinet replacements, countertops) do not require DOB permits. However, relocating a sink, running new gas lines, altering partition walls, or installing high-BTU exhaust hoods requiring exterior penetration mandates DOB Alteration Type 2 filings."
        ]
      },
      {
        heading: "Navigating Co-op & Condo Alteration Agreements",
        paragraphs: [
          "Most NYC residential buildings require contractors to carry $5M liability insurance, provide detailed architectural drawings, submit lead/asbestos abatement testing, and adhere to strict designated working hours."
        ]
      }
    ],
    relatedService: {
      title: "Kitchen Renovation Bronx & NYC Services",
      href: "/kitchen-renovation-bronx"
    },
    faqs: [
      {
        question: "How long does a complete kitchen renovation take in NYC?",
        answer: "From demolition to final punch list, physical construction typically takes 6 to 10 weeks. Planning, board review, and DOB permit acquisition usually require an additional 4 to 8 weeks prior."
      }
    ]
  },

  "nyc-bathroom-renovation-guide": {
    slug: "nyc-bathroom-renovation-guide",
    title: "NYC Bathroom Renovation Waterproofing & Code Guide | Mega Contracting NY Group",
    metaDesc: "Bathroom remodeling standards in NYC. Schluter-KERDI waterproofing, cast-iron plumbing replacements, ventilation codes, and DOB inspections.",
    h1: "NYC Bathroom Renovation, Waterproofing & Code Standards Guide",
    directAnswer: "Proper bathroom remodeling in NYC multi-story buildings requires full continuous substrate waterproofing (such as Schluter-KERDI membranes) to prevent disastrous water leaks into downstairs residential units.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "January 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "NYC Plumbing Code §312 (Plumbing Testing Protocols)",
      "NYC Mechanical Code §403 (Mechanical Ventilation Mandates)",
      "Tile Council of North America (TCNA) Waterproofing Installation Standards"
    ],
    sections: [
      {
        heading: "Why Traditional Shower Pans Fail in NYC",
        paragraphs: [
          "Old copper or lead shower pans develop pinhole leaks over decades of building settlement. We install complete bonded sheet membranes with integrated bonding flanges that create an impermeable, tanked enclosure extending up shower walls."
        ]
      },
      {
        heading: "Mandatory Ventilation & Electrical GFCI Codes",
        paragraphs: [
          "NYC building code mandates either an openable window of at least 3 square feet or mechanical exhaust venting delivering minimum 50 CFM continuously. All bathroom circuits must feature dedicated 20-amp Class A GFCI protection."
        ]
      }
    ],
    relatedService: {
      title: "Bathroom Renovation Bronx & NYC",
      href: "/bathroom-renovation-bronx"
    },
    faqs: [
      {
        question: "Do I need a permit to replace bathroom tiles in NYC?",
        answer: "Replacing tiles and fixtures in identical locations is classified as ordinary repair and does not require DOB permits. Moving drain stacks or water risers requires a licensed master plumber permit."
      }
    ]
  },

  "nyc-foundation-repair-guide": {
    slug: "nyc-foundation-repair-guide",
    title: "NYC Foundation Repair & Underpinning Guide | Mega Contracting NY Group",
    metaDesc: "Guide to structural foundation repair, settlement cracks, helical underpinning, and hydrostatic water sealing for NYC residential and commercial buildings.",
    h1: "NYC Structural Foundation Repair & Underpinning Guide",
    directAnswer: "NYC foundation repairs address settlement cracks, adjacent excavation displacement, or water infiltration through rubble stone or poured concrete walls using structural underpinning, carbon-fiber strapping, and polyurethane pressure injection.",
    author: "Adil Shamis, Managing Principal & Licensed General Contractor",
    publishDate: "February 2024",
    updatedDate: "March 2026",
    officialCitations: [
      "2022 NYC Building Code Chapter 18 (Soils and Foundations)",
      "NYC Building Code §3309 (Protection of Adjoining Properties During Excavation)"
    ],
    sections: [
      {
        heading: "Settlement Causes in NYC Soils",
        paragraphs: [
          "NYC ground conditions vary from solid Manhattan bedrock to unconsolidated glacial till in Brooklyn and Queens. Foundation settlement is frequently triggered by nearby deep excavations de-watering the soil, decomposing organic layers, or broken sewer mains eroding the sub-base."
        ]
      },
      {
        heading: "Underpinning & Pressure Injection Solutions",
        paragraphs: [
          "When foundation footings settle, structural underpinning transfers building weight to deeper, stable strata. Active basement seepage is resolved via dual interior French drainage systems and high-pressure hydrophilic polyurethane injection."
        ]
      }
    ],
    relatedService: {
      title: "Foundation Repair Services",
      href: "/foundation-repair-brooklyn"
    },
    faqs: [
      {
        question: "What is the danger of nearby excavation next to my NYC building?",
        answer: "Under NYC Building Code §3309, developers excavating deeper than an adjoining footing must preserve and protect the neighboring foundation. If your building exhibits new diagonal cracking, immediate engineering monitoring is required."
      }
    ]
  }
};
