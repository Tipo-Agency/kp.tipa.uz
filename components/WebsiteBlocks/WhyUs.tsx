import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2 } from "../UI/Typography";
import { IconCheck } from "./InfographicIcons";

interface WhyUsProps {
  title: string;
  items: string[];
}

export const WhyUs: React.FC<WhyUsProps> = ({ title, items }) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <Heading2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 w-full">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-[#3337AD]/20 hover:shadow-md transition-all w-full"
          >
            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3337AD]/10 flex items-center justify-center">
              <IconCheck />
            </div>
            <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug pt-1">{item}</p>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
