import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// SMM blocks
import Hero from "../components/ProposalBlocks/Hero";
import Services from "../components/ProposalBlocks/Services";
import GrowthTool from "../components/ProposalBlocks/GrowthTool";
import Audience from "../components/ProposalBlocks/Audience";
import ContentRubrics from "../components/ProposalBlocks/ContentRubrics";
import Positioning from "../components/ProposalBlocks/Positioning";
import VisualGrid from "../components/ProposalBlocks/VisualGrid";
import AdsPromotion from "../components/ProposalBlocks/AdsPromotion";
import SalesStructure from "../components/ProposalBlocks/SalesStructure";
import AdFunnels from "../components/ProposalBlocks/AdFunnels";
import GrowthFunnelSection from "../components/ProposalBlocks/GrowthFunnelSection";
import StrategyGrowth from "../components/ProposalBlocks/StrategyGrowth";
import Cases from "../components/ProposalBlocks/Cases";
import Pricing from "../components/ProposalBlocks/Pricing";
import VideoExample from "../components/ProposalBlocks/VideoExample";

// Website blocks
import { WebsiteHook } from "../components/WebsiteBlocks/WebsiteHook";
import { PainPoints } from "../components/WebsiteBlocks/PainPoints";
import { SolutionApproach } from "../components/WebsiteBlocks/SolutionApproach";
import { ConceptPreview } from "../components/WebsiteBlocks/ConceptPreview";
import { WhatIncluded } from "../components/WebsiteBlocks/WhatIncluded";
import { WorkStages } from "../components/WebsiteBlocks/WorkStages";
import { WhyUs } from "../components/WebsiteBlocks/WhyUs";
import { TZRequirements } from "../components/WebsiteBlocks/TZRequirements";
import { WebsitePricing } from "../components/WebsiteBlocks/WebsitePricing";

// Telegram Bot blocks
import { TelegramBotHook } from "../components/TelegramBotBlocks/TelegramBotHook";
import { BotFeatures } from "../components/TelegramBotBlocks/BotFeatures";
import { AdminPanel } from "../components/TelegramBotBlocks/AdminPanel";
import { UsageScenarios } from "../components/TelegramBotBlocks/UsageScenarios";
import { BotStages } from "../components/TelegramBotBlocks/BotStages";
import { BotPricing } from "../components/TelegramBotBlocks/BotPricing";

// Platform blocks
import { PlatformHook } from "../components/PlatformBlocks/PlatformHook";
import { PlatformModules } from "../components/PlatformBlocks/PlatformModules";
import { PlatformDirections } from "../components/PlatformBlocks/PlatformDirections";
import { PlatformStages } from "../components/PlatformBlocks/PlatformStages";
import { PlatformPricing } from "../components/PlatformBlocks/PlatformPricing";
import { PlatformEcosystemInfographic } from "../components/PlatformBlocks/PlatformEcosystemInfographic";

// Context Ads blocks
import { ContextOverview } from "../components/ContextBlocks/ContextOverview";
import { ContextStrategy } from "../components/ContextBlocks/ContextStrategy";
import { ContextPricing } from "../components/ContextBlocks/ContextPricing";
import { ContextSmmAddon } from "../components/ContextBlocks/ContextSmmAddon";

// Production blocks
import { ProductionHook } from "../components/ProductionBlocks/ProductionHook";
import { ProductionPackages } from "../components/ProductionBlocks/ProductionPackages";
import { ProductionProcess } from "../components/ProductionBlocks/ProductionProcess";
import { ProductionPricing } from "../components/ProductionBlocks/ProductionPricing";

// Branding blocks
import { BrandingHook } from "../components/BrandingBlocks/BrandingHook";
import { BrandingScope } from "../components/BrandingBlocks/BrandingScope";
import { BrandingProcess } from "../components/BrandingBlocks/BrandingProcess";
import { BrandingPricing } from "../components/BrandingBlocks/BrandingPricing";

// Automation blocks
import { AutomationHook } from "../components/AutomationBlocks/AutomationHook";
import { AutomationSolutions } from "../components/AutomationBlocks/AutomationSolutions";
import { AutomationStages } from "../components/AutomationBlocks/AutomationStages";
import { AutomationPricing } from "../components/AutomationBlocks/AutomationPricing";

// Maps/SERM blocks
import { MapsHook } from "../components/MapsBlocks/MapsHook";
import { MapsPlatforms } from "../components/MapsBlocks/MapsPlatforms";
import { MapsReputation } from "../components/MapsBlocks/MapsReputation";
import { MapsPricing } from "../components/MapsBlocks/MapsPricing";

// Multi-tab UI
import { ProposalTabs } from "../components/UI/ProposalTabs";
import { UnifiedPricing } from "../components/UnifiedPricing/UnifiedPricing";

import {
  getProposal,
  isProposalExpired,
  isWebsiteProposal,
  isTelegramBotProposal,
  isPlatformProposal,
  isContextAdsProposal,
  isProductionProposal,
  isBrandingProposal,
  isAutomationProposal,
  isMapsSermProposal,
  isMultiProposal,
} from "../proposals";
import type { AnyProposal } from "../proposals";

import { NotFoundPage } from "./NotFoundPage";
import { ExpiredPage } from "./ExpiredPage";

// ─── Общий Footer ─────────────────────────────────────────────────────────────

const ProposalFooter = () => (
  <footer className="py-12 bg-white text-center border-t border-slate-100">
    <img
      src="/лого типа агентства.svg"
      alt="Типа агентство"
      className="h-8 md:h-9 w-auto mx-auto mb-6"
    />
    <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
      ТИПА АГЕНТСТВО © {new Date().getFullYear()}
    </p>
  </footer>
);

// ─── Рендеры по типу (без pricing для вкладок мульти-КП) ──────────────────────

const renderSmmProposal = (proposal: Extract<AnyProposal, { hero: { title: string } }>, hidePricing = false) => (
  <>
    <div className="reveal"><Hero clientName={proposal.clientName} title={proposal.hero.title} subtitle={proposal.hero.subtitle} /></div>
    <div className="reveal"><Services services={proposal.services} imageUrl={proposal.servicesImageUrl} description={proposal.servicesDescription} /></div>
    <div className="reveal"><GrowthTool title={proposal.growthTool.title} description={proposal.growthTool.description} /></div>
    {proposal.videoExample ? (
      <div className="reveal"><VideoExample title={proposal.videoExample.title} description={proposal.videoExample.description} youtubeUrl={proposal.videoExample.youtubeUrl} /></div>
    ) : null}
    <div className="reveal"><Audience primary={proposal.audience.primary} secondary={proposal.audience.secondary} imageUrl={proposal.audienceImageUrl} /></div>
    {"strategyGrowth" in proposal && proposal.strategyGrowth ? (
      <div className="reveal"><StrategyGrowth data={proposal.strategyGrowth} /></div>
    ) : null}
    <div className="reveal"><ContentRubrics rubrics={proposal.rubrics} blockImages={proposal.rubricBlockImages} /></div>
    <div className="reveal"><Positioning title={proposal.positioning.title} description={proposal.positioning.description} images={proposal.positioning.images} /></div>
    <div className="reveal"><VisualGrid images={proposal.visuals} /></div>
    {proposal.growthFunnel ? (
      <div className="reveal"><GrowthFunnelSection data={proposal.growthFunnel} /></div>
    ) : null}
    <div className="reveal"><AdsPromotion items={proposal.ads} /></div>
    {proposal.salesTracks && proposal.salesTracks.length > 0 ? (
      <div className="reveal"><SalesStructure tracks={proposal.salesTracks} intro={proposal.salesStructureIntro} /></div>
    ) : null}
    {proposal.funnels && proposal.funnels.length > 0 ? (
      <div className="reveal"><AdFunnels funnels={proposal.funnels} /></div>
    ) : null}
    {proposal.cases && proposal.cases.length > 0 ? (
      <div className="reveal"><Cases cases={proposal.cases} /></div>
    ) : null}
    {!hidePricing ? (
      <div className="reveal">
        <Pricing
          amount={proposal.pricing.amount}
          currency={proposal.pricing.currency}
          period={proposal.pricing.period}
          team={proposal.pricing.team}
          deliverables={proposal.pricing.deliverables}
          divisions={proposal.pricing.divisions}
          secondary={"secondary" in proposal.pricing ? proposal.pricing.secondary : undefined}
          notes={"notes" in proposal.pricing ? proposal.pricing.notes : undefined}
        />
      </div>
    ) : null}
  </>
);

// ─── Основной компонент ────────────────────────────────────────────────────────

export const ProposalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const proposal = getProposal(slug);
  const [activeTab, setActiveTab] = useState<string>("");

  // Инициализируем активную вкладку при загрузке мульти-КП
  useEffect(() => {
    if (isMultiProposal(proposal) && proposal.tabs.length > 0) {
      setActiveTab((prev) => prev || proposal.tabs[0].id);
    }
  }, [proposal]);

  // Анимации при скролле
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("active");
        });
      },
      { threshold: 0.1 }
    );
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [slug, activeTab]);

  if (!proposal) return <NotFoundPage />;

  // Проверка срока действия КП
  if (isProposalExpired(proposal)) return <ExpiredPage />;

  // ─── Мульти-КП ────────────────────────────────────────────────────────────
  if (isMultiProposal(proposal)) {
    const currentTab = proposal.tabs.find((t) => t.id === activeTab) ?? proposal.tabs[0];

    return (
      <div className="bg-white overflow-x-hidden w-full">
        {/* Лого / шапка */}
        <div className="bg-white border-b border-slate-100 py-4 px-4 md:px-8 flex items-center justify-between">
          <img src="/лого типа агентства.svg" alt="Типа агентство" className="h-7 w-auto" />
          <p className="text-slate-500 text-sm font-semibold">{proposal.clientName}</p>
        </div>

        {/* Навигация вкладок */}
        <ProposalTabs
          tabs={proposal.tabs}
          activeTabId={currentTab.id}
          onTabChange={setActiveTab}
        />

        {/* Контент активной вкладки */}
        <div key={currentTab.id}>
          {renderTabContent(currentTab.proposal, true)}
        </div>

        {/* Единый блок цены */}
        <UnifiedPricing data={proposal.unifiedPricing} />

        <ProposalFooter />
      </div>
    );
  }

  // ─── Platform ─────────────────────────────────────────────────────────────
  if (isPlatformProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><PlatformHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><PlatformModules title={proposal.modules.title} items={proposal.modules.items} /></div>
        <div className="reveal"><PlatformEcosystemInfographic title="Функционал каждой единицы экосистемы" items={proposal.modules.items} /></div>
        <div className="reveal"><PlatformDirections title={proposal.directions.title} items={proposal.directions.items} /></div>
        <div className="reveal"><PlatformStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        <div className="reveal"><PlatformPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} description={proposal.pricing.description} deliverables={proposal.pricing.deliverables} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── Context Ads ──────────────────────────────────────────────────────────
  if (isContextAdsProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><ContextOverview clientName={proposal.clientName} heroTitle={proposal.hero.title} heroSubtitle={proposal.hero.subtitle} marketsTitle={proposal.markets.title} markets={proposal.markets.regions} productTitle={proposal.productSummary.title} productItems={proposal.productSummary.items} /></div>
        <div className="reveal"><ContextStrategy title={proposal.contextStrategy.title} search={proposal.contextStrategy.search} performance={proposal.contextStrategy.performance} remarketing={proposal.contextStrategy.remarketing} landingTitle={proposal.landingWork.title} landingItems={proposal.landingWork.items} analyticsTitle={proposal.analytics.title} analyticsItems={proposal.analytics.items} /></div>
        <div className="reveal"><ContextPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} description={proposal.pricing.description} deliverables={proposal.pricing.deliverables} /></div>
        {proposal.smmAddon ? (
          <div className="reveal"><ContextSmmAddon title={proposal.smmAddon.title} description={proposal.smmAddon.description} visuals={proposal.smmAddon.visuals} deliverables={proposal.smmAddon.deliverables} /></div>
        ) : null}
        <ProposalFooter />
      </div>
    );
  }

  // ─── Telegram Bot ─────────────────────────────────────────────────────────
  if (isTelegramBotProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><TelegramBotHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><BotFeatures title={proposal.features.title} items={proposal.features.items} /></div>
        {proposal.integration ? (
          <div className="reveal"><AdminPanel title={proposal.integration.title} description={proposal.integration.description} items={proposal.integration.items} /></div>
        ) : proposal.adminPanel ? (
          <div className="reveal"><AdminPanel title={proposal.adminPanel.title} description={proposal.adminPanel.description} items={proposal.adminPanel.items} /></div>
        ) : null}
        <div className="reveal"><UsageScenarios title={proposal.usageScenarios.title} scenarios={proposal.usageScenarios.scenarios} /></div>
        <div className="reveal"><BotStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        <div className="reveal"><BotPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} description={proposal.pricing.description} cardSubtitle={proposal.pricing.cardSubtitle} deliverables={proposal.pricing.deliverables} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── Website ──────────────────────────────────────────────────────────────
  if (isWebsiteProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><WebsiteHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><PainPoints items={proposal.painPoints} /></div>
        <div className="reveal"><SolutionApproach title={proposal.solution.title} description={proposal.solution.description} scheme={proposal.solution.scheme} /></div>
        <div className="reveal"><ConceptPreview title={proposal.concept.title} description={proposal.concept.description} images={proposal.concept.images} /></div>
        <div className="reveal"><WhatIncluded design={proposal.whatIncluded.design} development={proposal.whatIncluded.development} marketing={proposal.whatIncluded.marketing} integrations={proposal.whatIncluded.integrations} /></div>
        <div className="reveal"><WorkStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        <div className="reveal"><Cases cases={proposal.cases} /></div>
        <div className="reveal"><WhyUs title={proposal.whyUs.title} items={proposal.whyUs.items} /></div>
        {proposal.tzRequirements && proposal.tzRequirements.length > 0 ? (
          <div className="reveal"><TZRequirements items={proposal.tzRequirements} /></div>
        ) : null}
        <div className="reveal"><WebsitePricing main={proposal.websitePricing.main} options={proposal.websitePricing.options} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── Production ───────────────────────────────────────────────────────────
  if (isProductionProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><ProductionHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><ProductionPackages title={proposal.packages.title} items={proposal.packages.items} /></div>
        <div className="reveal"><ProductionProcess title={proposal.process.title} steps={proposal.process.steps} portfolio={proposal.portfolio} /></div>
        <div className="reveal"><ProductionPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} packages={proposal.pricing.packages} notes={proposal.pricing.notes} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── Branding ─────────────────────────────────────────────────────────────
  if (isBrandingProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><BrandingHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><BrandingScope title={proposal.scope.title} items={proposal.scope.items} /></div>
        <div className="reveal"><BrandingProcess title={proposal.process.title} steps={proposal.process.steps} examples={proposal.examples} /></div>
        <div className="reveal"><BrandingPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} packages={proposal.pricing.packages} notes={proposal.pricing.notes} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── Automation ───────────────────────────────────────────────────────────
  if (isAutomationProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><AutomationHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><AutomationSolutions title={proposal.solutions.title} items={proposal.solutions.items} /></div>
        <div className="reveal"><AutomationStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        <div className="reveal"><AutomationPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} notes={proposal.pricing.notes} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── Maps/SERM ────────────────────────────────────────────────────────────
  if (isMapsSermProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal"><MapsHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><MapsPlatforms title={proposal.platforms.title} items={proposal.platforms.items} /></div>
        <div className="reveal"><MapsReputation reputationTitle={proposal.reputation.title} reputationItems={proposal.reputation.items} analyticsTitle={proposal.analytics.title} analyticsItems={proposal.analytics.items} /></div>
        <div className="reveal"><MapsPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} notes={proposal.pricing.notes} /></div>
        <ProposalFooter />
      </div>
    );
  }

  // ─── SMM (default) ────────────────────────────────────────────────────────
  return (
    <div className="bg-white overflow-x-hidden w-full">
      {renderSmmProposal(proposal as Parameters<typeof renderSmmProposal>[0])}
      <ProposalFooter />
    </div>
  );
};

// ─── Рендер контента вкладки (для мульти-КП, pricing скрыт) ──────────────────

function renderTabContent(proposal: AnyProposal, hidePricing: boolean): React.ReactNode {
  if (isProductionProposal(proposal)) {
    return (
      <>
        <div className="reveal"><ProductionHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><ProductionPackages title={proposal.packages.title} items={proposal.packages.items} /></div>
        <div className="reveal"><ProductionProcess title={proposal.process.title} steps={proposal.process.steps} portfolio={proposal.portfolio} /></div>
        {!hidePricing ? <div className="reveal"><ProductionPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} packages={proposal.pricing.packages} notes={proposal.pricing.notes} /></div> : null}
      </>
    );
  }
  if (isBrandingProposal(proposal)) {
    return (
      <>
        <div className="reveal"><BrandingHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><BrandingScope title={proposal.scope.title} items={proposal.scope.items} /></div>
        <div className="reveal"><BrandingProcess title={proposal.process.title} steps={proposal.process.steps} examples={proposal.examples} /></div>
        {!hidePricing ? <div className="reveal"><BrandingPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} packages={proposal.pricing.packages} notes={proposal.pricing.notes} /></div> : null}
      </>
    );
  }
  if (isAutomationProposal(proposal)) {
    return (
      <>
        <div className="reveal"><AutomationHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><AutomationSolutions title={proposal.solutions.title} items={proposal.solutions.items} /></div>
        <div className="reveal"><AutomationStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        {!hidePricing ? <div className="reveal"><AutomationPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} notes={proposal.pricing.notes} /></div> : null}
      </>
    );
  }
  if (isMapsSermProposal(proposal)) {
    return (
      <>
        <div className="reveal"><MapsHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><MapsPlatforms title={proposal.platforms.title} items={proposal.platforms.items} /></div>
        <div className="reveal"><MapsReputation reputationTitle={proposal.reputation.title} reputationItems={proposal.reputation.items} analyticsTitle={proposal.analytics.title} analyticsItems={proposal.analytics.items} /></div>
        {!hidePricing ? <div className="reveal"><MapsPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} deliverables={proposal.pricing.deliverables} notes={proposal.pricing.notes} /></div> : null}
      </>
    );
  }
  if (isContextAdsProposal(proposal)) {
    return (
      <>
        <div className="reveal"><ContextOverview clientName={proposal.clientName} heroTitle={proposal.hero.title} heroSubtitle={proposal.hero.subtitle} marketsTitle={proposal.markets.title} markets={proposal.markets.regions} productTitle={proposal.productSummary.title} productItems={proposal.productSummary.items} /></div>
        <div className="reveal"><ContextStrategy title={proposal.contextStrategy.title} search={proposal.contextStrategy.search} performance={proposal.contextStrategy.performance} remarketing={proposal.contextStrategy.remarketing} landingTitle={proposal.landingWork.title} landingItems={proposal.landingWork.items} analyticsTitle={proposal.analytics.title} analyticsItems={proposal.analytics.items} /></div>
        {!hidePricing ? <div className="reveal"><ContextPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} description={proposal.pricing.description} deliverables={proposal.pricing.deliverables} /></div> : null}
      </>
    );
  }
  if (isTelegramBotProposal(proposal)) {
    return (
      <>
        <div className="reveal"><TelegramBotHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><BotFeatures title={proposal.features.title} items={proposal.features.items} /></div>
        {proposal.integration ? (
          <div className="reveal"><AdminPanel title={proposal.integration.title} description={proposal.integration.description} items={proposal.integration.items} /></div>
        ) : proposal.adminPanel ? (
          <div className="reveal"><AdminPanel title={proposal.adminPanel.title} description={proposal.adminPanel.description} items={proposal.adminPanel.items} /></div>
        ) : null}
        <div className="reveal"><UsageScenarios title={proposal.usageScenarios.title} scenarios={proposal.usageScenarios.scenarios} /></div>
        <div className="reveal"><BotStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        {!hidePricing ? <div className="reveal"><BotPricing amount={proposal.pricing.amount} currency={proposal.pricing.currency} period={proposal.pricing.period} description={proposal.pricing.description} cardSubtitle={proposal.pricing.cardSubtitle} deliverables={proposal.pricing.deliverables} /></div> : null}
      </>
    );
  }
  if (isWebsiteProposal(proposal)) {
    return (
      <>
        <div className="reveal"><WebsiteHook clientName={proposal.clientName} title={proposal.hook.title} subtitle={proposal.hook.subtitle} arguments={proposal.hook.arguments} /></div>
        <div className="reveal"><PainPoints items={proposal.painPoints} /></div>
        <div className="reveal"><SolutionApproach title={proposal.solution.title} description={proposal.solution.description} scheme={proposal.solution.scheme} /></div>
        <div className="reveal"><ConceptPreview title={proposal.concept.title} description={proposal.concept.description} images={proposal.concept.images} /></div>
        <div className="reveal"><WhatIncluded design={proposal.whatIncluded.design} development={proposal.whatIncluded.development} marketing={proposal.whatIncluded.marketing} integrations={proposal.whatIncluded.integrations} /></div>
        <div className="reveal"><WorkStages title={proposal.stages.title} steps={proposal.stages.steps} /></div>
        <div className="reveal"><Cases cases={proposal.cases} /></div>
        <div className="reveal"><WhyUs title={proposal.whyUs.title} items={proposal.whyUs.items} /></div>
        {proposal.tzRequirements && proposal.tzRequirements.length > 0 ? (
          <div className="reveal"><TZRequirements items={proposal.tzRequirements} /></div>
        ) : null}
        {!hidePricing ? <div className="reveal"><WebsitePricing main={proposal.websitePricing.main} options={proposal.websitePricing.options} /></div> : null}
      </>
    );
  }
  // Default: SMM
  return renderSmmProposal(proposal as Parameters<typeof renderSmmProposal>[0], hidePricing);
}
