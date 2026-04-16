import React from "react";
import { Container, Section } from "../UI/Container";

interface Props {
  amount: string;
  currency: string;
  period: string;
  deliverables: { label: string; value: string }[];
  notes?: string[];
}

export const MapsPricing: React.FC<Props> = ({
  amount,
  currency,
  period,
  deliverables,
  notes,
}) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#F59E0B] font-bold tracking-[0.3em] uppercase mb-6 text-[10px]">
              Commercial Terms
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900">
              Стоимость работ
            </h2>
          </div>

          <div className="bg-[#0A0C14] rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest mb-12">
                Объём работ / {period}
              </h3>
              <div className="grid sm:grid-cols-2 gap-10 mb-10">
                {deliverables.map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-4">
                    <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">
                      {item.label}
                    </p>
                    <p className="text-3xl font-bold tracking-tight">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pt-8 mt-4 border-t border-white/5">
                <div className="text-center lg:text-left">
                  <div className="flex items-baseline gap-2 flex-wrap justify-center lg:justify-start">
                    <span className="text-5xl md:text-7xl font-black tracking-tighter">{amount}</span>
                    <span className="text-white/40 text-xl">{currency}</span>
                  </div>
                  <p className="text-white/30 uppercase tracking-widest text-[10px] mt-3">
                    Ежемесячное обслуживание
                  </p>
                </div>
                <a
                  href="https://t.me/tipa_agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-auto bg-[#F59E0B] hover:bg-[#D97706] text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-amber-500/20 active:scale-95 text-center"
                >
                  Принять предложение
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F59E0B] opacity-10 blur-[100px] pointer-events-none" />
          </div>

          {notes && notes.length > 0 && (
            <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Примечания</p>
              <ul className="space-y-2 text-sm text-slate-600 leading-relaxed">
                {notes.map((n, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-[#F59E0B] font-bold">—</span>
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-16 text-center">
            <p className="text-slate-300 text-[10px] uppercase tracking-[0.4em]">
              ТИПА АГЕНТСТВО • ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО В ТЕЧЕНИЕ 14 ДНЕЙ
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
