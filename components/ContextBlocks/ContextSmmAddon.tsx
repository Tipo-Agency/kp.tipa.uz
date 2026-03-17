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
    <section className="py-16 md:py-20 bg-slate-50">
      <Container>
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#3337AD] uppercase mb-3">Доп. услуга · SMM</p>
          <h2 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">{title}</h2>
          <p className="text-sm md:text-base text-slate-600 mb-6">{description}</p>
          <ul className="space-y-2 text-sm text-left text-slate-700">
            {deliverables.map((item) => (
              <li key={item.label} className="flex gap-2">
                <span className="mt-[6px] h-[3px] w-4 rounded-full bg-[#6366F1]" />
                <span>
                  <span className="font-medium text-slate-900">{item.label}:</span> {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Тот же центрированный блок примера визуала, что и на остальных КП */}
        <VisualGrid images={visuals} />
      </Container>
    </section>
  );
};

