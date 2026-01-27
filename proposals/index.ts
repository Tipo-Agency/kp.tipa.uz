import type { ProposalData } from "../types";
import { yangiOzbekistonRestaurant } from "./yangi-ozbekiston-restaurant";
import { jaquarUzbSantehnika } from "./jaquar-uzb-santehnika";
import { onlyouTashkent } from "./onlyou-tashkent";
import { kicksBasketballAcademy } from "./kicks-basketball-academy";
import { svezhoFresh } from "./svezho-fresh";

export const PROPOSALS: Record<string, ProposalData> = {
  "yangi-ozbekiston-restaurant": yangiOzbekistonRestaurant,
  "jaquar-uzb-santehnika": jaquarUzbSantehnika,
  "onlyou-tashkent": onlyouTashkent,
  "kicks-basketball-academy": kicksBasketballAcademy,
  "svezho-fresh": svezhoFresh,
};

export function getProposal(slug: string | undefined): ProposalData | undefined {
  if (!slug) return undefined;
  return PROPOSALS[slug];
}

