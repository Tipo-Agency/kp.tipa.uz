import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
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
import Cases from "../components/ProposalBlocks/Cases";
import Pricing from "../components/ProposalBlocks/Pricing";
import { WebsiteHook } from "../components/WebsiteBlocks/WebsiteHook";
import { PainPoints } from "../components/WebsiteBlocks/PainPoints";
import { SolutionApproach } from "../components/WebsiteBlocks/SolutionApproach";
import { ConceptPreview } from "../components/WebsiteBlocks/ConceptPreview";
import { WhatIncluded } from "../components/WebsiteBlocks/WhatIncluded";
import { WorkStages } from "../components/WebsiteBlocks/WorkStages";
import { WhyUs } from "../components/WebsiteBlocks/WhyUs";
import { TZRequirements } from "../components/WebsiteBlocks/TZRequirements";
import { WebsitePricing } from "../components/WebsiteBlocks/WebsitePricing";
import { TelegramBotHook } from "../components/TelegramBotBlocks/TelegramBotHook";
import { BotFeatures } from "../components/TelegramBotBlocks/BotFeatures";
import { AdminPanel } from "../components/TelegramBotBlocks/AdminPanel";
import { UsageScenarios } from "../components/TelegramBotBlocks/UsageScenarios";
import { BotStages } from "../components/TelegramBotBlocks/BotStages";
import { BotPricing } from "../components/TelegramBotBlocks/BotPricing";
import { PlatformHook } from "../components/PlatformBlocks/PlatformHook";
import { PlatformModules } from "../components/PlatformBlocks/PlatformModules";
import { PlatformDirections } from "../components/PlatformBlocks/PlatformDirections";
import { PlatformStages } from "../components/PlatformBlocks/PlatformStages";
import { PlatformPricing } from "../components/PlatformBlocks/PlatformPricing";
import { getProposal, isWebsiteProposal, isTelegramBotProposal, isPlatformProposal } from "../proposals";
import { NotFoundPage } from "./NotFoundPage";

export const ProposalPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const proposal = getProposal(slug);

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
  }, [slug]);

  if (!proposal) return <NotFoundPage />;

  if (isPlatformProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal">
          <PlatformHook
            clientName={proposal.clientName}
            title={proposal.hook.title}
            subtitle={proposal.hook.subtitle}
            arguments={proposal.hook.arguments}
          />
        </div>
        <div className="reveal">
          <PlatformModules title={proposal.modules.title} items={proposal.modules.items} />
        </div>
        <div className="reveal">
          <PlatformDirections title={proposal.directions.title} items={proposal.directions.items} />
        </div>
        <div className="reveal">
          <PlatformStages title={proposal.stages.title} steps={proposal.stages.steps} />
        </div>
        <div className="reveal">
          <PlatformPricing
            amount={proposal.pricing.amount}
            currency={proposal.pricing.currency}
            period={proposal.pricing.period}
            description={proposal.pricing.description}
            deliverables={proposal.pricing.deliverables}
          />
        </div>
        <footer className="py-12 bg-white text-center border-t border-slate-100">
          <img src="/лого типа агентства.svg" alt="Типа агентство" className="h-8 md:h-9 w-auto mx-auto mb-6" />
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            ТИПА АГЕНТСТВО © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    );
  }

  if (isTelegramBotProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal">
          <TelegramBotHook
            clientName={proposal.clientName}
            title={proposal.hook.title}
            subtitle={proposal.hook.subtitle}
            arguments={proposal.hook.arguments}
          />
        </div>
        <div className="reveal">
          <BotFeatures title={proposal.features.title} items={proposal.features.items} />
        </div>
        {proposal.integration ? (
          <div className="reveal">
            <AdminPanel
              title={proposal.integration.title}
              description={proposal.integration.description}
              items={proposal.integration.items}
            />
          </div>
        ) : proposal.adminPanel ? (
          <div className="reveal">
            <AdminPanel
              title={proposal.adminPanel.title}
              description={proposal.adminPanel.description}
              items={proposal.adminPanel.items}
            />
          </div>
        ) : null}
        <div className="reveal">
          <UsageScenarios title={proposal.usageScenarios.title} scenarios={proposal.usageScenarios.scenarios} />
        </div>
        <div className="reveal">
          <BotStages title={proposal.stages.title} steps={proposal.stages.steps} />
        </div>
        <div className="reveal">
          <BotPricing
            amount={proposal.pricing.amount}
            currency={proposal.pricing.currency}
            period={proposal.pricing.period}
            description={proposal.pricing.description}
            cardSubtitle={proposal.pricing.cardSubtitle}
            deliverables={proposal.pricing.deliverables}
          />
        </div>
        <footer className="py-12 bg-white text-center border-t border-slate-100">
          <img src="/лого типа агентства.svg" alt="Типа агентство" className="h-8 md:h-9 w-auto mx-auto mb-6" />
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            ТИПА АГЕНТСТВО © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    );
  }

  if (isWebsiteProposal(proposal)) {
    return (
      <div className="bg-white overflow-x-hidden w-full">
        <div className="reveal">
          <WebsiteHook
            clientName={proposal.clientName}
            title={proposal.hook.title}
            subtitle={proposal.hook.subtitle}
            arguments={proposal.hook.arguments}
          />
        </div>
        <div className="reveal">
          <PainPoints items={proposal.painPoints} />
        </div>
        <div className="reveal">
          <SolutionApproach
            title={proposal.solution.title}
            description={proposal.solution.description}
            scheme={proposal.solution.scheme}
          />
        </div>
        <div className="reveal">
          <ConceptPreview
            title={proposal.concept.title}
            description={proposal.concept.description}
            images={proposal.concept.images}
          />
        </div>
        <div className="reveal">
          <WhatIncluded
            design={proposal.whatIncluded.design}
            development={proposal.whatIncluded.development}
            marketing={proposal.whatIncluded.marketing}
            integrations={proposal.whatIncluded.integrations}
          />
        </div>
        <div className="reveal">
          <WorkStages title={proposal.stages.title} steps={proposal.stages.steps} />
        </div>
        <div className="reveal">
          <Cases cases={proposal.cases} />
        </div>
        <div className="reveal">
          <WhyUs title={proposal.whyUs.title} items={proposal.whyUs.items} />
        </div>
        {proposal.tzRequirements && proposal.tzRequirements.length > 0 ? (
          <div className="reveal">
            <TZRequirements items={proposal.tzRequirements} />
          </div>
        ) : null}
        <div className="reveal">
          <WebsitePricing main={proposal.websitePricing.main} options={proposal.websitePricing.options} />
        </div>
        <footer className="py-12 bg-white text-center border-t border-slate-100">
          <img src="/лого типа агентства.svg" alt="Типа агентство" className="h-8 md:h-9 w-auto mx-auto mb-6" />
          <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
            ТИПА АГЕНТСТВО © {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-x-hidden w-full">
      <div className="reveal">
        <Hero clientName={proposal.clientName} title={proposal.hero.title} subtitle={proposal.hero.subtitle} />
      </div>
      <div className="reveal">
        <Services services={proposal.services} imageUrl={proposal.servicesImageUrl} description={proposal.servicesDescription} />
      </div>
      <div className="reveal">
        <GrowthTool title={proposal.growthTool.title} description={proposal.growthTool.description} />
      </div>
      <div className="reveal">
        <Audience primary={proposal.audience.primary} secondary={proposal.audience.secondary} imageUrl={proposal.audienceImageUrl} />
      </div>
      <div className="reveal">
        <ContentRubrics rubrics={proposal.rubrics} blockImages={proposal.rubricBlockImages} />
      </div>
      <div className="reveal">
        <Positioning title={proposal.positioning.title} description={proposal.positioning.description} images={proposal.positioning.images} />
      </div>
      <div className="reveal">
        <VisualGrid images={proposal.visuals} />
      </div>
      <div className="reveal">
        <AdsPromotion items={proposal.ads} />
      </div>
      {proposal.salesTracks && proposal.salesTracks.length > 0 ? (
        <div className="reveal">
          <SalesStructure tracks={proposal.salesTracks} />
        </div>
      ) : null}
      {proposal.funnels && proposal.funnels.length > 0 ? (
        <div className="reveal">
          <AdFunnels funnels={proposal.funnels} />
        </div>
      ) : null}
      {proposal.cases && proposal.cases.length > 0 ? (
        <div className="reveal">
          <Cases cases={proposal.cases} />
        </div>
      ) : null}
      <div className="reveal">
        <Pricing
          amount={proposal.pricing.amount}
          currency={proposal.pricing.currency}
          period={proposal.pricing.period}
          team={proposal.pricing.team}
          deliverables={proposal.pricing.deliverables}
          divisions={proposal.pricing.divisions}
        />
      </div>

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
    </div>
  );
};

// File removed as logic is now in App.tsx