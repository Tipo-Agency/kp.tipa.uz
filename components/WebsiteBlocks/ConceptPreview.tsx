import React from "react";
import { Container, Section } from "../UI/Container";
import { Heading2, BodyText } from "../UI/Typography";

interface ConceptPreviewProps {
  title: string;
  description?: string;
  images?: string[];
}

export const ConceptPreview: React.FC<ConceptPreviewProps> = ({
  title,
  description,
  images,
}) => (
  <Section className="bg-white overflow-hidden">
    <Container>
      <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto px-2">
        <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-3 sm:mb-4 text-[10px] sm:text-xs">Концепт</p>
        <Heading2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{title}</Heading2>
        {description && <BodyText className="!text-base sm:!text-lg">{description}</BodyText>}
      </div>
      {images && images.length > 0 ? (
        <div className="grid gap-3 sm:gap-4 md:gap-6 w-full">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 shadow-lg w-full">
              <img src={src} alt={`Концепт ${i + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-xl sm:rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 sm:p-12 md:p-16 text-center w-full">
          <p className="text-slate-500 font-medium text-sm sm:text-base">Стиль, moodboard и UI-направление согласуем на этапе дизайна</p>
        </div>
      )}
    </Container>
  </Section>
);
