import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface Step {
  name: string;
  description?: string;
}

interface WorkStagesProps {
  title: string;
  steps: Step[];
}

export const WorkStages: React.FC<WorkStagesProps> = ({ title, steps }) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">Процесс</p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">Прозрачные этапы для доверия и предсказуемого результата.</BodyText>
      </div>
      <div className="max-w-3xl mx-auto relative">
        {/* Вертикальная линия таймлайна */}
        <div className="absolute left-5 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#3337AD] via-[#3337AD]/60 to-[#3337AD]/20 hidden sm:block" />
        <div className="space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 sm:gap-6 items-start relative">
              <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3337AD] text-white font-black flex items-center justify-center flex-shrink-0 text-sm sm:text-base shadow-lg shadow-[#3337AD]/30">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">{step.name}</h3>
                {step.description && (
                  <p className="text-slate-600 mt-1 text-sm sm:text-base">{step.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
