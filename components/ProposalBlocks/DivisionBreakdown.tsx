
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';

interface Division {
  title: string;
  description?: string;
  deliverables: { label: string; value: string }[];
}

interface DivisionBreakdownProps {
  divisions: Division[];
}

const DivisionBreakdown: React.FC<DivisionBreakdownProps> = ({ divisions }) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Структура проекта</p>
          <Heading2 className="mb-4">Разбивка по направлениям</Heading2>
          <BodyText>
            Разделяем контент-стратегию и объёмы работ для магазина и академии с учётом специфики каждого направления.
          </BodyText>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {divisions.map((division, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl md:rounded-[2.5rem] border border-slate-100 p-8 md:p-10">
              <div className="mb-8">
                <p className="text-[#3337AD] font-bold tracking-widest uppercase text-[10px] mb-3">
                  Направление 0{idx + 1}
                </p>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mb-3">
                  {division.title}
                </h3>
                {division.description && (
                  <p className="text-slate-600">{division.description}</p>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                  Объём контента
                </p>
                {division.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-100">
                    <span className="text-slate-600 text-sm font-medium">{item.label}</span>
                    <span className="text-slate-900 font-bold text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default DivisionBreakdown;
