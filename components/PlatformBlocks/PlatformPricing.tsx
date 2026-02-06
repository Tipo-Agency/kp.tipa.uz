import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2 } from "../UI/Typography";

interface PlatformPricingProps {
  amount: string;
  currency: string;
  period: string;
  description: string;
  deliverables?: { label: string; value: string }[];
}

const ACCENT = "#059669";

export const PlatformPricing: React.FC<PlatformPricingProps> = ({
  amount,
  currency,
  period,
  description,
  deliverables = [],
}) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="max-w-4xl mx-auto w-full px-0 sm:px-2">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <Heading2 className="text-3xl sm:text-4xl md:text-5xl tracking-tighter">
            Стоимость и сроки
          </Heading2>
        </div>

        <div className="bg-[#0A0C14] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden mb-6 sm:mb-8">
          <div className="relative z-10">
            <h3
              className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6"
              style={{ color: ACCENT }}
            >
              Сервис под ключ
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">{description}</p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-xs sm:text-sm">
                Веб + мобильное приложение + Telegram
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/90 text-xs sm:text-sm">
                Админки вендера и системы
              </span>
            </div>
            <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-5 sm:mb-6">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter break-words">
                {amount}
              </span>
              <span className="text-base sm:text-lg text-white/40">{currency}</span>
              <span className="text-white/50 text-sm sm:text-base w-full sm:w-auto">• {period}</span>
            </div>
            {deliverables.length > 0 && (
              <ul className="space-y-2 sm:space-y-3 mb-6 text-sm sm:text-base text-white/80">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex flex-wrap gap-2">
                    <span className="text-white/60">{d.label}:</span>
                    <span>{d.value}</span>
                  </li>
                ))}
              </ul>
            )}
            <a
              href="https://t.me/tipa_agency"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto text-center text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xl active:scale-[0.98] hover:opacity-95"
              style={{ backgroundColor: ACCENT }}
            >
              Обсудить проект
            </a>
          </div>
          <div
            className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 opacity-10 blur-[80px] sm:blur-[100px] pointer-events-none rounded-full"
            style={{ backgroundColor: ACCENT }}
          />
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
            ТИПА АГЕНТСТВО • ПРЕДЛОЖЕНИЕ ДЕЙСТВИТЕЛЬНО В ТЕЧЕНИЕ 14 ДНЕЙ
          </p>
        </div>
      </div>
    </Container>
  </Section>
);
