
export interface Rubric {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ProposalData {
  clientName: string;
  hero: {
    title: string;
    subtitle: string;
  };
  services: ServiceItem[];
  servicesImageUrl?: string;
  growthTool: {
    title: string;
    description: string;
  };
  audience: {
    primary: string[];
    secondary: string[];
  };
  audienceImageUrl?: string;
  rubricBlockImages?: string[];
  rubrics: Rubric[];
  positioning: {
    title: string;
    description: string;
    images: string[];
  };
  visuals: string[];
  ads: {
    title: string;
    description: string;
  }[];
  pricing: {
    amount: string;
    currency: string;
    period: string;
    team: string[];
    deliverables: {
      label: string;
      value: string;
    }[];
  };
}
