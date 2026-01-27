import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import type { FunnelBlock } from "../../types";

interface AdFunnelsProps {
  funnels: FunnelBlock[];
}

const AdFunnels: React.FC<AdFunnelsProps> = ({ funnels }) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Таргет и воронки</p>
          <Heading2 className="mb-4">Структура рекламных воронок</Heading2>
          <BodyText>Строим систему гипотез и масштабируем то, что даёт лиды и продажи.</BodyText>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {funnels.map((f, i) => (
            <div key={i} className="rounded-2xl md:rounded-[2.5rem] border border-slate-100 p-6 md:p-8 lg:p-10 bg-slate-50 w-full">
              <div className="flex items-start justify-between gap-6 mb-8">
                <div>
                  <p className="text-[#3337AD] font-bold tracking-widest uppercase text-[10px] mb-3">Воронка 0{i + 1}</p>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900">{f.title}</h3>
                  <p className="text-slate-600 mt-2">{f.audience}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Бюджет</p>
                  <p className="text-slate-800 font-bold">мин: {f.budget.minimum}</p>
                  <p className="text-slate-800 font-bold">опт: {f.budget.optimal}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Шаги</p>
                  <div className="flex flex-wrap gap-2">
                    {f.steps.map((s, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold text-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Гипотезы</p>
                  <ul className="space-y-2">
                    {f.hypotheses.map((h, idx) => (
                      <li key={idx} className="text-slate-700 font-medium">
                        — {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">KPI</p>
                  <div className="flex flex-wrap gap-2">
                    {f.kpis.map((k, idx) => (
                      <span key={idx} className="px-4 py-2 rounded-full bg-[#3337AD]/10 text-[#3337AD] font-bold text-sm">
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AdFunnels;

