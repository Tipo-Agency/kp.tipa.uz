import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2 } from "../UI/Typography";
import { IconDesign, IconCode } from "./InfographicIcons";

interface WebsitePricingProps {
  main: {
    amount: string;
    currency: string;
    period: string;
    description: string;
  };
  options?: { label: string; amount: string; period: string }[];
}

export const WebsitePricing: React.FC<WebsitePricingProps> = ({ main, options }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="max-w-4xl mx-auto w-full px-0 sm:px-2">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Heading2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">Стоимость и сроки</Heading2>
        </div>

        <div className="bg-[#0A0C14] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden mb-6 sm:mb-8">
          <div className="relative z-10">
            <h3 className="text-[10px] sm:text-xs font-bold text-[#3337AD] uppercase tracking-widest mb-4 sm:mb-6">
              Основной проект
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">{main.description}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-xs sm:text-sm [&_svg]:text-white/90">
                <IconDesign />
                Дизайн
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-xs sm:text-sm [&_svg]:text-white/90">
                <IconCode />
                Разработка
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-xs sm:text-sm">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white/60 flex items-center justify-center text-[10px] sm:text-xs font-bold">4</span>
                недели
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter break-words">
                {main.amount}
              </span>
              <span className="text-base sm:text-lg text-white/40">{main.currency}</span>
              <span className="text-white/50 text-sm sm:text-base w-full sm:w-auto">• {main.period}</span>
            </div>
            <a
              href="https://t.me/tipa_agency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto text-center bg-[#3337AD] hover:bg-[#4348CD] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xl shadow-[#3337AD]/20 active:scale-[0.98]"
            >
              Обсудить проект
            </a>
          </div>
          <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-[#3337AD] opacity-10 blur-[80px] sm:blur-[100px] pointer-events-none" />
        </div>

        {options && options.length > 0 && (
          <div className="rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6 md:p-8 w-full">
            <h4 className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-widest mb-3 sm:mb-4">
              Дополнительные опции (при необходимости)
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              {options.map((opt, i) => (
                <li key={i} className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 py-3 border-b border-slate-200 last:border-0 text-sm sm:text-base">
                  <span className="font-semibold text-slate-800">{opt.label}</span>
                  <span className="text-slate-600">
                    <strong className="text-slate-900">{opt.amount}</strong> {opt.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 sm:mt-12 text-center px-2">
          <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            ТИПА АГЕНТСТВО • ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО В ТЕЧЕНИЕ 14 ДНЕЙ
          </p>
        </div>
      </div>
    </Container>
  </Section>
);
