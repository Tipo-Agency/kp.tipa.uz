import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import type { TZRequirementItem } from "../../types";

interface TZRequirementsProps {
  title?: string;
  subtitle?: string;
  items: TZRequirementItem[];
}

export const TZRequirements: React.FC<TZRequirementsProps> = ({
  title = "Объём работ по ТЗ",
  subtitle = "Учтённые требования технического задания клиента.",
  items,
}) => (
  <Section className="bg-white overflow-hidden border-t border-slate-100">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">
          Техническое задание
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        {subtitle ? (
          <BodyText className="!text-base sm:!text-lg">{subtitle}</BodyText>
        ) : null}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 w-full">
        {items.map((req, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:border-[#3337AD]/20 hover:shadow-md transition-all w-full min-w-0 overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-3 sm:mb-4 min-w-0">
              <span className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#3337AD] text-white font-bold text-sm sm:text-base flex items-center justify-center font-['Unbounded']">
                {req.number}
              </span>
              <h3 className="min-w-0 flex-1 text-base sm:text-lg font-bold text-slate-900 font-['Unbounded'] break-words">{req.title}</h3>
            </div>
            <ul className="space-y-2 sm:space-y-2.5 min-w-0">
              {req.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 text-sm sm:text-base min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3337AD] flex-shrink-0 mt-1.5" />
                  <span className="min-w-0 break-words">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
