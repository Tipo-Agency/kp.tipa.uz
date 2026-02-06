import type { ProposalData, WebsiteProposalData, TelegramBotProposalData, PlatformProposalData } from "../types";
import { yangiOzbekistonRestaurant } from "./yangi-ozbekiston-restaurant";
import { jaquarUzbSantehnika } from "./jaquar-uzb-santehnika";
import { onlyouTashkent } from "./onlyou-tashkent";
import { kicksBasketballAcademy } from "./kicks-basketball-academy";
import { svezhoFresh } from "./svezho-fresh";
import { baholdingWebsite } from "./baholding-website";
import { nettareUz } from "./nettare-uz";
import { luvioUz } from "./luvio-uz";
import { carvilleAsia } from "./carville-asia";
import { telegramBotTemplate } from "./telegram-bot-template";
import { arzonAptekaBot } from "./arzon-apteka-bot";
import { cavalierUz } from "./cavalier-uz";
import { kyotoUz } from "./kyoto-uz";
import { sirenPremium } from "./siren-premium";
import { fableUz } from "./fable-uz";
import { micheleCafeBoutique } from "./michele-cafe-boutique";
import { dimAndDream } from "./dim-and-dream";
import { travelAgency } from "./travel-agency";
import { platform19m } from "./platform-19m";

export const PROPOSALS: Record<string, ProposalData | WebsiteProposalData | TelegramBotProposalData | PlatformProposalData> = {
  "yangi-ozbekiston-restaurant": yangiOzbekistonRestaurant,
  "jaquar-uzb-santehnika": jaquarUzbSantehnika,
  "onlyou-tashkent": onlyouTashkent,
  "kicks-basketball-academy": kicksBasketballAcademy,
  "svezho-fresh": svezhoFresh,
  "nettare-uz": nettareUz,
  "luvio-uz": luvioUz,
  "carville-asia": carvilleAsia,
  "baholding-website": baholdingWebsite,
  "telegram-bot": telegramBotTemplate,
  "arzon-apteka-bot": arzonAptekaBot,
  "cavalier-uz": cavalierUz,
  "kyoto-uz": kyotoUz,
  "siren-premium": sirenPremium,
  "fable-uz": fableUz,
  "michele-cafe-boutique": micheleCafeBoutique,
  "dim-and-dream": dimAndDream,
  "travel-agency": travelAgency,
  "platform-19m": platform19m,
};

export type AnyProposal = ProposalData | WebsiteProposalData | TelegramBotProposalData | PlatformProposalData;

export function getProposal(slug: string | undefined): AnyProposal | undefined {
  if (!slug) return undefined;
  return PROPOSALS[slug] as AnyProposal | undefined;
}

export function isWebsiteProposal(p: AnyProposal | undefined): p is WebsiteProposalData {
  return p != null && "type" in p && p.type === "website";
}

export function isTelegramBotProposal(p: AnyProposal | undefined): p is TelegramBotProposalData {
  return p != null && "type" in p && p.type === "telegram-bot";
}

export function isPlatformProposal(p: AnyProposal | undefined): p is PlatformProposalData {
  return p != null && "type" in p && p.type === "platform";
}