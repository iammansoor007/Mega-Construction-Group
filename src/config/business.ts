export interface LicenseLine {
  label: string;
  number: string;
  agency: string | null;
  verifyUrl: string | null;
}

export interface BusinessAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  formatted: string;
}

export interface BusinessSocial {
  instagram: string;
  linkedin: string;
  facebook: string;
}

export interface BusinessConfig {
  name: string;
  phone: string;
  phoneE164: string;
  email: string; // owner to confirm preferred domain
  address: BusinessAddress;
  boroughs: readonly string[];
  social: BusinessSocial;
  emergency247: boolean; // as stated on the site, owner to confirm; never add promised response times
  legalName: string | null;
  foundingYear: number | null;
  companyEstablished: string | null;
  founderStatement: string | null;
  insuranceStatement: string | null;
  warrantyStatement: string | null;
  licenseLines: LicenseLine[];
}

export const business: BusinessConfig = {
  name: "Mega Contracting NY Group",
  phone: "(914) 804-3000",
  phoneE164: "+19148043000",
  email: "info@megacontractinggroup.com", // owner to confirm preferred domain
  address: {
    street: "3044 Radcliff Ave",
    city: "Bronx",
    state: "NY",
    zip: "10469",
    formatted: "3044 Radcliff Ave, Bronx, NY 10469",
  },
  boroughs: ["Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island"] as const,
  social: {
    instagram: "https://www.instagram.com/megacontractingny",
    linkedin: "https://www.linkedin.com/company/mega-contracting-ny-group",
    facebook: "https://www.facebook.com/megacontractingnygroup",
  },
  emergency247: true, // as stated on the site, owner to confirm; never add promised response times
  legalName: null,
  foundingYear: null,
  companyEstablished: null,
  founderStatement: null,
  insuranceStatement: null,
  warrantyStatement: null,
  licenseLines: [
    {
      label: "NYC Department of Buildings General Contractor",
      number: "GC License #NYC-2005-8942",
      agency: null, // owner to confirm agency
      verifyUrl: null, // owner to confirm verification URL
    },
  ],
};

export default business;

