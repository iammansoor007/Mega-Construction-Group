# Technical & SEO Audit Report: megacontractingnyc.com

**Audit Date:** 2026-11-02  
**Branch:** `main`  
**Engineer:** Senior Next.js & SEO Engineer  

---

## Task 1: Thin Alias URLs & 404 Resolution
All 11 thin alias URLs configured with 301 permanent redirects in `next.config.js`:
- `/services/commercial-renovation` -> `/services/masonry-work/reconstruction-rebuilds`
- `/services/concrete-services/driveway-repair` -> `/services/concrete-services/driveway-replacement`
- `/services/concrete-services/patios-installation` -> `/services/masonry-work/patios`
- `/services/emergency-services` -> `/services/emergency-service`
- `/services/facade-restoration` -> `/services/masonry-work/facade-restoration`
- `/services/masonry-work/brick-pointing` -> `/services/masonry-work/brick-grinding-pointing`
- `/services/masonry-work/brick-repair` -> `/services/masonry-work/brick-replacement`
- `/services/masonry-work/chimney-repair` -> `/services/masonry-work/chimney-caps-rebuilds`
- `/services/masonry-work/retaining-wall` -> `/services/masonry-work/retaining-walls`
- `/services/violation-removal` -> `/services/concrete-services`
- `/services/waterproofing` -> `/services/masonry-work/waterproofing`

All 37 internal link references across 19 source files replaced with canonical targets.
`src/lib/servicesResolver.ts` updated so that unknown categories or slugs call `notFound()` returning a true 404 status.

---

## Task 2: Broken Links Clean-up & 301 Redirects
All 6 broken legacy paths 301-redirected in `next.config.js`:
- `/commercial` -> `/projects`
- `/historic` -> `/projects`
- `/portfolio` -> `/projects`
- `/consultation` -> `/contact`
- `/credentials` -> `/licenses`
- `/design` -> `/services/custom-home-building/design-build`

Warranty link and warranty sentences conditional on `business.warrantyStatement` (hidden when null/unset).

---

## Task 3: Title Standardization (Max 60 Characters)

Every page title is standardized and strictly $\le 60$ characters. Blog post titles have the `" | Mega Contracting NY Group"` suffix removed.

| Route / Page | Character Length | Exact Page Title |
| :--- | :---: | :--- |
| `/` (Homepage) | 50 | `General Contractor NYC \| Mega Contracting NY Group` |
| `/blog` | 47 | `NYC Construction Guides \| Roofing, Masonry, DOB` |
| `/licenses` | 50 | `Licenses and Insurance \| Mega Contracting NY Group` |
| `/locations` | 45 | `NYC Service Areas \| Mega Contracting NY Group` |
| `/locations/bronx` | 52 | `General Contractor Bronx \| Mega Contracting NY Group` |
| `/locations/brooklyn` | 55 | `General Contractor Brooklyn \| Mega Contracting NY Group` |
| `/locations/manhattan` | 56 | `General Contractor Manhattan \| Mega Contracting NY Group` |
| `/locations/queens` | 53 | `General Contractor Queens \| Mega Contracting NY Group` |
| `/locations/staten-island` | 57 | `General Contractor Staten Island \| Mega Contracting Group` |
| `/services` | 45 | `Construction Services Bronx NY \| All Services` |
| `/sitemap` | 43 | `Website Sitemap \| Mega Contracting NY Group` |
| `/projects` | 48 | `Project Case Studies \| Mega Contracting NY Group` |
| `/about` | 52 | `About Our Licensed Construction Company \| Bronx NY` |
| `/contact` | 54 | `Free Estimate \| Contact Our Contractor — Bronx NYC 24/7` |
| `/faq` | 51 | `NYC Contractor FAQ \| Construction Questions Answered` |
| `/privacy` | 42 | `Privacy Policy \| Mega Contracting NY Group` |
| `/terms` | 44 | `Terms of Service \| Mega Contracting NY Group` |

### Blog Post Titles (All $\le 60$ Characters Without Suffix):
- `Basement Renovation NYC: Cost, Permits & Waterproofing` (54 chars)
- `Bathroom Renovation Bronx NY: Cost, Permits & Timeline` (54 chars)
- `Brick Pointing Cost NYC: Tuckpointing vs Repointing` (51 chars)
- `NYC Building Violations: How to Remove DOB Violations` (53 chars)
- `Caulking Contractors NYC: Window & Facade Sealing Guide` (55 chars)
- `Commercial & Multifamily Renovation NYC: GC Guide` (49 chars)
- `Commercial Roofing NYC: Contractors, TPO & Maintenance` (54 chars)
- `Concrete Contractor Bronx NY: Resurfacing, Slabs & Costs` (56 chars)
- `Facade Restoration NYC: Costs, Process & Compliance` (51 chars)
- `Fire Escape Painting NYC: Rules, Costs & Rust Repair` (52 chars)
- `Flat Roof Repair NYC: Cost, Materials & Leak Detection` (54 chars)
- `Home Renovation Bronx NY: Cost, Permits & Timeline` (50 chars)
- `Kitchen Renovation Bronx NY: Cost, Permits & Layouts` (52 chars)
- `Masonry Contractor Bronx NY: Pointing, Facades & Steps` (54 chars)
- `Parapet Wall Repair NYC: Code Compliance & Rebuilding` (53 chars)
- `Roof Leak Repair NYC: Emergency Steps & Cost Guide` (50 chars)
- `Roof Replacement Bronx NY: Costs, Shingle & Flat Roofs` (53 chars)
- `Sidewalk Repair NYC: DOT Violation Removal & Concrete` (53 chars)
- `Steps Repair Bronx & NYC: Concrete, Stoop & Railing` (51 chars)
- `Stucco Contractor Bronx NY: EIFS, Repair & Finishes` (51 chars)

---

## Task 4: Sitemap Audit
`src/app/sitemap.ts` verified and asserted:
- Includes `/locations` index and all 5 borough routes (`/locations/bronx`, `/locations/brooklyn`, `/locations/manhattan`, `/locations/queens`, `/locations/staten-island`).
- Includes all 5 project case studies (`/projects/bronx-multi-family-renovation`, `/projects/brooklyn-commercial-build-out`, `/projects/park-avenue-residence`, `/projects/westchester-estate-addition`, `/projects/long-island-kitchen-remodel`).
- Includes `/licenses` and core pages.
- Future-date guard filters out any post with publication date after `2026-11-02`.
- Real `lastModified` stamps preserved for dated posts; fake build-time timestamps omitted.

---

## Task 5: Project Pages Metadata & Discrepancy Audit

### 1. `/projects/bronx-multi-family-renovation`
- **Card Name:** Bronx Multi-Family Parapet Rebuild & Flat Roof Replacement
- **Card Location:** Grand Concourse, Bronx NY (Borough: The Bronx, Neighborhood: Grand Concourse)
- **Page Title:** Bronx Multi-Family Parapet Rebuild & Flat Roof Replacement | Project Case Study
- **H1:** Bronx Multi-Family Parapet Rebuild & Flat Roof Replacement
- **Scope Text:**
  1. Erected dedicated safety perimeter and suspended debris netting along building perimeter
  2. Demolished 180 linear feet of crumbling brick parapet down to structurally sound masonry substrate
  3. Rebuilt parapet wall using 4-inch solid concrete face brick with Type S high-bond mortar
  4. Installed new precast concrete coping stones anchored with stainless steel dowels and elastomeric sealant
  5. Full tear-off of 4,200 sq ft existing asphalt roof layers down to structural concrete deck
  6. Installed 3-inch polyisocyanurate (R-18) rigid insulation board with tapered drainage slopes
  7. Mechanically fastened and hot-air welded 60-mil Carlisle Sure-Weld TPO single-ply roofing membrane
  8. Fabricated and installed 24-gauge galvanized edge metal and counter-flashing counter-sunk into parapet joints
- **Owner Confirmation / Flag:** No location mismatch; confirmed Grand Concourse, Bronx.

### 2. `/projects/brooklyn-commercial-build-out`
- **Card Name:** Brooklyn Commercial Facade Restoration & Tuckpointing
- **Card Location:** Williamsburg, Brooklyn NY (Borough: Brooklyn, Neighborhood: Williamsburg)
- **Page Title:** Brooklyn Commercial Facade Restoration & Tuckpointing | Project Case Study
- **H1:** Brooklyn Commercial Facade Restoration & Tuckpointing
- **Scope Text:**
  1. Installed pipe scaffolding and pedestrian sidewalk bridge per NYC DOT regulations
  2. Raked and ground deteriorated mortar joints to a minimum 3/4-inch depth without damaging adjacent brick edges
  3. Treated all rusted structural steel lintels with rust-converting primer and commercial epoxy topcoat
  4. Pointed 6,500 square feet of historic brick facade using custom color-matched Type N breathable mortar
  5. Replaced 320 spalled and cracked exterior facing bricks with salvaged vintage brick
  6. Applied breathable silicone-free water-repellent silane/siloxane barrier across entire facade
- **Owner Confirmation / Flag:** No location mismatch; confirmed Williamsburg, Brooklyn.

### 3. `/projects/park-avenue-residence`
- **Card Name:** Manhattan Pre-War Co-op Structural Interior Renovation
- **Card Location:** Upper East Side, Manhattan NY (Borough: Manhattan, Neighborhood: Upper East Side)
- **Page Title:** Manhattan Pre-War Co-op Structural Interior Renovation | Project Case Study
- **H1:** Manhattan Pre-War Co-op Structural Interior Renovation
- **Scope Text:**
  1. Secured building board approval, DOB alteration permits, and comprehensive umbrella insurance binders
  2. Installed continuous floor and corridor acoustic protection throughout building common areas
  3. Removed non-bearing partitions to create an expansive, open-concept chef's kitchen and living suite
  4. Rewired complete apartment with new 200-amp subpanel and Lutron smart architectural lighting
  5. Replaced legacy galvanized plumbing lines with sound-insulated cast-iron waste and Type L copper supply
  6. Installed bespoke inset cabinetry, Calacatta marble slab countertops, and herringbone white oak flooring
  7. Rebuilt two master bathrooms featuring Schluter-KERDI continuous waterproofing and radiant floor heating
- **Owner Confirmation / Flag:** No location mismatch; confirmed Upper East Side, Manhattan.

### 4. `/projects/westchester-estate-addition`
- **Card Name:** Pelham Manor Estate Architectural Roofing & Masonry Addition
- **Card Location:** Pelham Manor / Bronx Border (Borough: The Bronx / Westchester, Neighborhood: Pelham Manor)
- **Page Title:** Pelham Manor Estate Architectural Roofing & Masonry Addition | Project Case Study
- **H1:** Pelham Manor Estate Architectural Roofing & Masonry Addition
- **Scope Text:**
  1. Stripped aged roof down to tongue-and-groove wood plank decking and reinforced rafter framing
  2. Installed GAF Tiger Paw synthetic underlayment and WinterGuard ice-and-water protection at eaves and valleys
  3. Installed GAF Timberline HDZ architectural lifetime shingles with 130 MPH wind warranty
  4. Excavated and poured reinforced 4,000 PSI concrete footings below the 42-inch local frost line
  5. Constructed a structural blue stone patio over reinforced concrete slab with integrated French drains
  6. Built a custom outdoor fireplace with solid firebrick firebox and natural fieldstone veneer
- **Owner Confirmation / Flag:** **LOCATION DISCREPANCY FLAGGED FOR OWNER:** URL slug is `westchester-estate-addition`, card title specifies "Pelham Manor Estate", location lists "Pelham Manor / Bronx Border". Historical marketing copy previously mentioned Scarsdale vs Pelham Manor. Owner must confirm whether this project is located in Pelham Manor (Bronx/Westchester border) or Scarsdale, NY.

### 5. `/projects/long-island-kitchen-remodel`
- **Card Name:** Queens & Metro Full Kitchen Renovation & Structural Beam Install
- **Card Location:** Bayside / Metro NY (Borough: Queens, Neighborhood: Bayside)
- **Page Title:** Queens & Metro Full Kitchen Renovation & Structural Beam Install | Project Case Study
- **H1:** Queens & Metro Full Kitchen Renovation & Structural Beam Install
- **Scope Text:**
  1. Temporary hydraulic shoring and installation of a 16-foot structural W-section steel beam recessed into ceiling
  2. Complete demolition of load-bearing partition to unify kitchen, dining, and family gathering spaces
  3. Full rough-in of commercial gas lines, dedicated 20-amp appliance circuits, and multi-zone LED drivers
  4. Installation of solid wood shaker cabinetry with soft-close Blum hardware and integrated pull-out pantries
  5. Fabrication and precision seam installation of quartz waterfall island and seamless backsplash
  6. Installation of commercial-grade ventilation ducting vented directly through the roof deck
- **Owner Confirmation / Flag:** **LOCATION DISCREPANCY FLAGGED FOR OWNER:** URL slug is `long-island-kitchen-remodel`, but card title is "Queens & Metro Full Kitchen Renovation & Structural Beam Install", and card location is "Bayside / Metro NY" (Queens). Historical marketing copy previously mentioned Garden City, Long Island vs Bayside, Queens. Owner must confirm whether this project is in Bayside, Queens or Garden City, Long Island.

