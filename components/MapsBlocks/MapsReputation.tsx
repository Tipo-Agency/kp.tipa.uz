import React from "react";
import { Container, Section } from "../UI/Container";

interface Props {
  reputationTitle: string;
  reputationItems: string[];
  analyticsTitle: string;
  analyticsItems: string[];
}

export const MapsReputation: React.FC<Props> = ({
  reputationTitle,
  reputationItems,
  analyticsTitle,
  analyticsItems,
}) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Управление репутацией */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F59E0B] mb-6">
              SERM
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-10">
              {reputationTitle}
            </h2>
            <ul className="space-y-4">
              {reputationItems.map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                  <span className="w-6 h-6 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-amber-600 font-black text-[10px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Аналитика */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#F59E0B] mb-6">
              Аналитика
            </p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-900 mb-10">
              {analyticsTitle}
            </h2>
            <ul className="space-y-4">
              {analyticsItems.map((item, i) => (
                <li key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50">
                  <span className="w-6 h-6 rounded-xl bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-amber-600 font-black text-[10px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
};
