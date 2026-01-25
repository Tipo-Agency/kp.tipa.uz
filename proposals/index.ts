import type { ProposalData } from "../types";
import { yangiOzbekistonRestaurant } from "./yangi-ozbekiston-restaurant";
import { jaquarUzbSantehnika } from "./jaquar-uzb-santehnika";

export const PROPOSALS: Record<string, ProposalData> = {
  "yangi-ozbekiston-restaurant": yangiOzbekistonRestaurant,
  "jaquar-uzb-santehnika": jaquarUzbSantehnika,
};

export function getProposal(slug: string | undefined): ProposalData | undefined {
  if (!slug) return undefined;
  return PROPOSALS[slug];
}

