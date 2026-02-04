import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { IconTelegram, IconSearch } from "./BotIcons";

interface BotFeaturesProps {
  title: string;
  items: string[];
}

export const BotFeatures: React.FC<BotFeaturesProps> = ({ title, items }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#0088CC] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">
          Возможности бота
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
      </div>
      <div className="max-w-4xl mx-auto grid gap-4 sm:gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-[#0088CC]/30 hover:bg-[#0088CC]/5 transition-colors"
          >
            <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0088CC]/10 flex items-center justify-center">
              {i % 2 === 0 ? <IconTelegram /> : <IconSearch />}
            </span>
            <BodyText className="!mb-0 font-medium text-slate-800 break-words">{item}</BodyText>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
