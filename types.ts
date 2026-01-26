
export interface Rubric {
  title: string;
  description: string;
  imageUrl: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface SalesTrack {
  title: string;
  description: string;
  items: string[];
}

export interface FunnelBlock {
  title: string;
  audience: string;
  steps: string[];
  hypotheses: string[];
  kpis: string[];
  budget: {
    minimum: string;
    optimal: string;
  };
}

export interface CaseItem {
  title: string;
  category?: string;
  summary?: string;
  metrics?: string[];
  url?: string;
}

export interface ProposalData {
  clientName: string;
  hero: {
    title: string;
    subtitle: string;
  };
  services: ServiceItem[];
  servicesImageUrl?: string;
  servicesDescription?: string;
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
  salesTracks?: SalesTrack[];
  funnels?: FunnelBlock[];
  cases?: CaseItem[];
  pricing: {
    amount: string;
    currency: string;
    period: string;
    team: string[];
    deliverables: {
      label: string;
      value: string;
    }[];
    notes?: string[];
    secondary?: { label: string; value: string }[];
  };
}
