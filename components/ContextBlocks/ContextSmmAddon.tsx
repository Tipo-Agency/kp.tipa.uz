import React from "react";
import { Container } from "../UI/Container";
import VisualGrid from "../ProposalBlocks/VisualGrid";

interface Props {
  title: string;
  description: string;
  visuals: string[];
  deliverables: { label: string; value: string }[];
}

export const ContextSmmAddon: React.FC<Props> = ({ title, description, visuals, deliverables }) => {
  return (
    <section className="py-16 md:py-20 bg-slate-950">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-sky-400 uppercase mb-3">Доп. услуга · SMM</p>
            <h2 className="text-lg md:text-xl font-semibold text-white mb-4">{title}</h2>
            <p className="text-sm md:text-base text-slate-300 mb-6">{description}</p>
            <ul className="space-y-2 text-sm text-slate-200">
              {deliverables.map((item) => (
                <li key={item.label} className="flex gap-2">
                  <span className="mt-[6px] h-[3px] w-4 rounded-full bg-sky-400/80" />
                  <span>
                    <span className="font-medium text-white">{item.label}:</span> {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <VisualGrid images={visuals} />
          </div>
        </div>
      </Container>
    </section>
  );
};

