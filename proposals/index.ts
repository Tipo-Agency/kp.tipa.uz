import type {
  ProposalData,
  WebsiteProposalData,
  TelegramBotProposalData,
  PlatformProposalData,
  ContextAdsProposalData,
} from "../types";
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
import { basicoUz } from "./basico-uz";
import { shefII } from "./shef-ii";
import { tcryptoUz } from "./tcrypto-uz";
import { liberandumAI } from "./liberandum-ai";
import { tomyumbar } from "./tomyumbar";
import { galaksiEnergy } from "./galaksi-energy";
import { laserEpilationStudio } from "./laser-epilation-studio";
import { yotaGameclub } from "./yota-gameclub";
import { samarqandchaUz } from "./samarqandcha-uz";
import { buketSoho } from "./buket-soho";
import { karnavalniyProkat } from "./karnavalniy-prokat";
import { burgerAndLounge } from "./burger-and-lounge";
import { cherryFlowersUz } from "./cherry-flowers-uz";
import { optomPartnership } from "./optom-partnership";
import { majesticorientContext } from "./majesticorient-context";
import { detskiySadTashkent } from "./detskiy-sad-tashkent";
import { chernikaBeauty } from "./chernika-beauty";
import { fishMarket } from "./fish-market";
import { haierIndustrialSystems } from "./haier-industrial-systems";
import { kattaTanaffusSchool } from "./katta-tanaffus-school";
import { chigatoyMall } from "./chigatoy-mall";
import { maccaldoUz } from "./maccaldo-uz";
import { everUz } from "./ever-uz";
import { milliTomLyar } from "./milli-tom-lyar";
import { konditsionerRemontMontazh } from "./konditsioner-remont-montazh";
import { kvizTashkent } from "./kviz-tashkent";
import { badProizvoditel } from "./bad-proizvoditel";
import { obuvSamarkandUzum } from "./obuv-samarkand-uzum";
import { laminatPremiumPol } from "./laminat-premium-pol";
import { leapmotorMahtumquli } from "./leapmotor-mahtumquli";
import { polygonalUz } from "./polygonal-uz";
import { terrasaUz } from "./terrasa-uz";
import { virtopay } from "./virtopay";
import { milkvillUz } from "./milkvill-uz";
import { firuzaBarakaGold } from "./firuza-baraka-gold";
import { royalCareUzb } from "./royal-care-uzb";
import { koreaAutoApostille } from "./korea-auto-apostille";
import { herbalifeUz } from "./herbalife-uz";
import { medIvlService } from "./med-ivl-service";
import { masterswoodUz } from "./masterswood-uz";

export const PROPOSALS: Record<
  string,
  ProposalData | WebsiteProposalData | TelegramBotProposalData | PlatformProposalData | ContextAdsProposalData
> = {
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
  "basico-uz": basicoUz,
  "shef-ii": shefII,
  "tcrypto-uz": tcryptoUz,
  "liberandum-ai": liberandumAI,
  "platform-19m": platform19m,
  "tomyumbar": tomyumbar,
  "galaksi-energy": galaksiEnergy,
  "laser-epilation-studio": laserEpilationStudio,
  "yota-gameclub": yotaGameclub,
  "samarqandcha-uz": samarqandchaUz,
  "buket-soho": buketSoho,
  "karnavalniy-prokat": karnavalniyProkat,
  "burger-and-lounge": burgerAndLounge,
  "cherry-flowers-uz": cherryFlowersUz,
  "optom-partnership": optomPartnership,
  "majesticorient-context": majesticorientContext,
  "detskiy-sad-tashkent": detskiySadTashkent,
  "chernika-beauty": chernikaBeauty,
  "fish-market": fishMarket,
  "haier-industrial-systems": haierIndustrialSystems,
  "katta-tanaffus-school": kattaTanaffusSchool,
  "chigatoy-mall": chigatoyMall,
  "maccaldo-uz": maccaldoUz,
  "ever-uz": everUz,
  "milli-tom-lyar": milliTomLyar,
  "konditsioner-remont-montazh": konditsionerRemontMontazh,
  "kviz-tashkent": kvizTashkent,
  "bad-proizvoditel": badProizvoditel,
  "obuv-samarkand-uzum": obuvSamarkandUzum,
  "laminat-premium-pol": laminatPremiumPol,
  "leapmotor-mahtumquli": leapmotorMahtumquli,
  "polygonal-uz": polygonalUz,
  "terrasa-uz": terrasaUz,
  "virtopay": virtopay,
  "milkvill-uz": milkvillUz,
  "firuza-baraka-gold": firuzaBarakaGold,
  "royal-care-uzb": royalCareUzb,
  "korea-auto-apostille": koreaAutoApostille,
  "herbalife-uz": herbalifeUz,
  "med-ivl-service": medIvlService,
  "masterswood-uz": masterswoodUz,
};

export type AnyProposal =
  | ProposalData
  | WebsiteProposalData
  | TelegramBotProposalData
  | PlatformProposalData
  | ContextAdsProposalData;

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

export function isContextAdsProposal(p: AnyProposal | undefined): p is ContextAdsProposalData {
  return p != null && "type" in p && p.type === "context-ads";
}