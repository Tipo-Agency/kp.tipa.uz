import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface Scenario {
  name: string;
  description: string;
}

interface UsageScenariosProps {
  title: string;
  scenarios: Scenario[];
}

export const UsageScenarios: React.FC<UsageScenariosProps> = ({ title, scenarios }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#0088CC] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">
          Сценарии использования
        </p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">
          Пошаговые сценарии: как пользователь взаимодействует с ботом.
        </BodyText>
      </div>
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {scenarios.map((s, i) => (
          <div
            key={i}
            className="relative pl-8 sm:pl-10 pb-6 border-l-2 border-[#0088CC]/30 border-b-0 last:pb-0"
          >
            <div className="absolute left-0 top-0 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0088CC] text-white font-black flex items-center justify-center text-sm sm:text-base shadow-lg shadow-[#0088CC]/30">
              {i + 1}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 break-words mb-2">{s.name}</h3>
            <BodyText className="!mb-0 break-words">{s.description}</BodyText>
          </div>
        ))}
      </div>
    </Container>
  </Section>
);
