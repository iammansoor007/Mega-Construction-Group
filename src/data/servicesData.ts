import servicesJson from "./services.json";

export interface Benefit {
  title: string;
  description: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface SubCategory {
  id: string;
  title: string;
  image?: string;
  description: string;
  longDescription: string;
  features: string[];
  stats?: { label: string; value: string }[];
  benefits?: Benefit[];
  process?: (string | ProcessStep)[];
  faqs?: FAQ[];
  galleryImages?: string[];
  portfolioAvatars?: string[];
  heroHighlight?: string;
  metaTitle?: string;
  metaDescription?: string;
  canonical?: string;
}

export interface Service {
  id: string;
  title: string;
  image?: string;
  description: string;
  icon?: string;
  tag?: string;
  secondaryImage?: string;
  features?: string[];
  categoryBenefits?: Benefit[];
  subcategories: SubCategory[];
}

// Single managed JSON data source containing all extracted service content & photos
export const servicesData: Service[] = servicesJson as Service[];

export const getServiceById = (id: string) => servicesData.find(s => s.id === id);
export const getSubCategory = (serviceId: string, subId: string) => {
  const service = getServiceById(serviceId);
  return service?.subcategories.find(sub => sub.id === subId);
};

export default servicesJson;