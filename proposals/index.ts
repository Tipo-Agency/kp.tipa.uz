import type { ProposalData, WebsiteProposalData } from "../types";
import { yangiOzbekistonRestaurant } from "./yangi-ozbekiston-restaurant";
import { jaquarUzbSantehnika } from "./jaquar-uzb-santehnika";
import { onlyouTashkent } from "./onlyou-tashkent";
import { kicksBasketballAcademy } from "./kicks-basketball-academy";
import { svezhoFresh } from "./svezho-fresh";
import { baholdingWebsite } from "./baholding-website";
import { nettareUz } from "./nettare-uz";
import { luvioUz } from "./luvio-uz";
import { carvilleAsia } from "./carville-asia";

export const PROPOSALS: Record<string, ProposalData | WebsiteProposalData> = {
  "yangi-ozbekiston-restaurant": yangiOzbekistonRestaurant,
  "jaquar-uzb-santehnika": jaquarUzbSantehnika,
  "onlyou-tashkent": onlyouTashkent,
  "kicks-basketball-academy": kicksBasketballAcademy,
  "svezho-fresh": svezhoFresh,
  "nettare-uz": nettareUz,
  "luvio-uz": luvioUz,
  "carville-asia": carvilleAsia,
  "baholding-website": baholdingWebsite,
};

export function getProposal(slug: string | undefined): ProposalData | WebsiteProposalData | undefined {
  if (!slug) return undefined;
  return PROPOSALS[slug];
}

export function isWebsiteProposal(
  p: ProposalData | WebsiteProposalData | undefined
): p is WebsiteProposalData {
  return p != null && "type" in p && p.type === "website";
}