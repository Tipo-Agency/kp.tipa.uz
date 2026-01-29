import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";
import { IconArrowRight } from "./InfographicIcons";

interface SolutionApproachProps {
  title: string;
  description: string;
  scheme: string[];
}

export const SolutionApproach: React.FC<SolutionApproachProps> = ({
  title,
  description,
  scheme,
}) => (
  <Section className="bg-slate-50 overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">Наш подход</p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        <BodyText className="!text-base sm:!text-lg">{description}</BodyText>
      </div>
      <div className="w-full overflow-x-auto overflow-y-hidden pb-2 -mx-2 px-2">
        <div className="flex flex-nowrap sm:flex-wrap justify-center items-stretch gap-2 sm:gap-3 md:gap-4 lg:gap-6 py-6 sm:py-8 min-w-max sm:min-w-0">
          {scheme.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex-shrink-0 w-[120px] sm:w-[140px] md:min-w-[140px] px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white border-2 border-[#3337AD]/20 shadow-md font-bold text-slate-800 text-center text-sm sm:text-base flex items-center justify-center">
                {step}
              </div>
              {i < scheme.length - 1 && (
                <div className="flex-shrink-0 flex items-center justify-center w-8 sm:w-10 md:w-12">
                  <IconArrowRight />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);
