import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import type { SalesTrack } from "../../types";

interface SalesStructureProps {
  tracks: SalesTrack[];
}

const SalesStructure: React.FC<SalesStructureProps> = ({ tracks }) => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Структура продаж</p>
          <Heading2 className="mb-4">Как устроены направления</Heading2>
          <BodyText>
            Разделяем коммуникацию и воронки под разные сценарии: розница, проекты, HoReCa и профессиональное сообщество.
          </BodyText>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {tracks.map((t, i) => (
            <div key={i} className="bg-white rounded-[2rem] border border-slate-100 p-8">
              <p className="text-[#3337AD] font-bold tracking-widest uppercase text-[10px] mb-4">Трек 0{i + 1}</p>
              <h3 className="text-2xl font-black tracking-tight text-slate-900 mb-3">{t.title}</h3>
              <p className="text-slate-600 mb-6">{t.description}</p>
              <ul className="space-y-3">
                {t.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#3337AD] mt-2 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default SalesStructure;

