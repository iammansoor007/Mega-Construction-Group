export interface HubFaq {
  question: string;
  answer: string;
}

export interface HubChildService {
  id: string;
  title: string;
  href: string;
  description: string;
}

export interface HubData {
  id: string;
  title: string;
  intro: string;
  childServices: HubChildService[];
  faqs: HubFaq[];
}

import hubsJson from "./hubsContent.json";

export const hubsContentData: Record<string, HubData> = hubsJson as Record<string, HubData>;

export function getHubContent(categoryId: string): HubData | undefined {
  return hubsContentData[categoryId];
}
