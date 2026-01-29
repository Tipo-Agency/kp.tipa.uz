import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { getPainIcon } from "./InfographicIcons";

interface PainPointsProps {
  items: string[];
}

export const PainPoints: React.FC<PainPointsProps> = ({ items }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">Понимаем ваш бизнес</p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">С чем часто сталкиваются</Heading2>
        <BodyText className="!text-base sm:!text-lg">Типичные боли, которые решает современный сайт и правильная реализация.</BodyText>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 sm:gap-5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-[#3337AD]/30 hover:bg-white transition-all w-full min-w-0 overflow-hidden"
          >
            <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#3337AD]/10 flex items-center justify-center">
              {getPainIcon(i)}
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-[#3337AD] font-black text-lg sm:text-xl mb-1 block">0{i + 1}</span>
              <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug break-words">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
