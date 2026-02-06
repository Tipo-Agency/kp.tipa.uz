import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { DIRECTION_ICONS } from "./PlatformIcons";

interface PlatformDirectionsProps {
  title: string;
  items: string[];
}

const ACCENT = "#059669";

export const PlatformDirections: React.FC<PlatformDirectionsProps> = ({ title, items }) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs" style={{ color: ACCENT }}>
          Направления
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Сервис готов под ключевые ниши: каталог, заказы и доставка работают для каждой из них.
        </BodyText>
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-3xl mx-auto">
        {items.map((item, i) => {
          const Icon = DIRECTION_ICONS[item.toLowerCase()];
          return (
            <div
              key={i}
              className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-300 shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${ACCENT}18` }}>
                {Icon ? <Icon /> : <span className="text-xl font-bold text-slate-400">?</span>}
              </div>
              <span className="text-lg sm:text-xl font-bold text-slate-900">{item}</span>
            </div>
          );
        })}
      </div>
    </Container>
  </Section>
);
