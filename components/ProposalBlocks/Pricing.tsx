
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2 } from '../UI/Typography';

interface PricingProps {
  amount: string;
  currency: string;
  period: string;
  team: string[];
  deliverables: { label: string, value: string }[];
}

const Pricing: React.FC<PricingProps> = ({ amount, currency, period, team, deliverables }) => {
  return (
    <Section className="bg-white text-slate-900">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[#3337AD] font-bold tracking-[0.3em] uppercase mb-6 text-[10px]">Commercial Terms</p>
            <Heading2 className="text-5xl md:text-7xl tracking-tighter">Инвестиции в развитие</Heading2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {/* Блок Состава Команды */}
            <div className="lg:col-span-1 p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-10">Команда проекта</h3>
              <ul className="space-y-6">
                {team.map((member, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3337AD]"></div>
                    <span className="text-slate-700 font-semibold">{member}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Блок Показателей и Цены */}
            <div className="lg:col-span-2 bg-[#0A0C14] rounded-[3rem] p-12 md:p-16 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <h3 className="text-xs font-bold text-[#3337AD] uppercase tracking-widest mb-12">Пакет услуг / Месяц</h3>
                <div className="grid sm:grid-cols-2 gap-10 mb-20">
                  {deliverables.map((item, i) => (
                    <div key={i} className="border-b border-white/10 pb-4">
                      <p className="text-white/30 text-[10px] uppercase tracking-widest mb-2">{item.label}</p>
                      <p className="text-3xl font-bold tracking-tight">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 pt-10 border-t border-white/5">
                <div className="text-center md:text-left">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl md:text-7xl font-black tracking-tighter">{amount}</span>
                    <span className="text-xl text-white/40">{currency}</span>
                  </div>
                  <p className="text-white/30 uppercase tracking-widest text-[10px] mt-2">Ежемесячное обслуживание</p>
                </div>
                
                <button className="whitespace-nowrap bg-[#3337AD] hover:bg-[#4348CD] text-white px-12 py-6 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-[#3337AD]/20 active:scale-95">
                  Принять предложение
                </button>
              </div>

              {/* Фоновый декор */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3337AD] opacity-10 blur-[100px] pointer-events-none"></div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-300 text-[10px] uppercase tracking-[0.4em]">
              TIPA GROWTH AGENCY • ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО В ТЕЧЕНИЕ 14 ДНЕЙ
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Pricing;
