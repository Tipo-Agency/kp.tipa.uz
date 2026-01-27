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
import { getProposal } from "../proposals";
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