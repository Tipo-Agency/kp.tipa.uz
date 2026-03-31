import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import type { StrategyGrowthData } from "../../types";

interface Props {
  data: StrategyGrowthData;
}

const StrategyGrowth: React.FC<Props> = ({ data }) => {
  return (
    <Section className="bg-white border-y border-slate-100">
      <Container>
        <div className="mb-14 md:mb-20 text-center max-w-4xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">{data.eyebrow}</p>
          <Heading2 className="mb-6 md:mb-8">{data.title}</Heading2>
          <div className="space-y-4 text-left">
            {data.marketParagraphs.map((p, i) => (
              <BodyText key={i} className="text-slate-700 leading-relaxed">
                {p}
              </BodyText>
            ))}
          </div>
        </div>

        {/* Воронка по каналам и ROI */}
        <div className="mb-16 md:mb-24">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 text-center mb-3">{data.roiTitle}</h3>
          <p className="text-center text-slate-500 text-sm mb-8 max-w-2xl mx-auto">
            Схема: фиксируем источники трафика, считаем затраты и результат, сравниваем ROI — решаем, куда усиливать бюджет.
          </p>
          <div className="overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 md:gap-4 min-w-0">
              {data.roiSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex-shrink-0 w-[200px] sm:w-[220px] rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#3337AD] mb-2">{step.label}</p>
                    <p className="text-sm text-slate-700 leading-snug">{step.text}</p>
                  </div>
                  {idx < data.roiSteps.length - 1 ? (
                    <div className="hidden md:flex items-center text-slate-300 text-2xl font-light select-none" aria-hidden="true">
                      →
                    </div>
                  ) : null}
                </React.Fragment>
              ))}
            </div>
          </div>
          <p className="text-center text-xs text-slate-400 mt-6 max-w-2xl mx-auto">
            На мобильном листайте схему горизонтально. Решения по бюджету принимаем по ежемесячным отчётам и дашборду (CPA, ROMI, доля продаж по каналу).
          </p>
        </div>

        {/* SMM: 3 уровня */}
        <div>
          <h3 className="text-xl md:text-2xl font-black text-slate-900 text-center mb-2">{data.smmTitle}</h3>
          <p className="text-center text-slate-500 text-sm mb-10 max-w-2xl mx-auto">
            От охвата к деньгам: каждый уровень имеет свои креативы, метрики и гипотезы.
          </p>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {data.smmLevels.map((L) => (
              <div
                key={L.level}
                className="relative rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 shadow-sm flex flex-col"
              >
                <div className="absolute -top-3 left-8 bg-[#3337AD] text-white text-xs font-black px-3 py-1 rounded-full">
                  Уровень {L.level}
                </div>
                <h4 className="text-lg md:text-xl font-black text-slate-900 mt-4 mb-2">{L.title}</h4>
                <p className="text-slate-600 text-sm mb-5 leading-relaxed">{L.description}</p>
                <ul className="space-y-2.5 mt-auto">
                  {L.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="text-[#3337AD] font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default StrategyGrowth;
