
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, Subheading } from '../UI/Typography';

interface AudienceProps {
  primary: string[];
  secondary: string[];
  imageUrl?: string;
}

const DEFAULT_AUDIENCE_IMAGE = "https://picsum.photos/seed/audience/800/800";

const Audience: React.FC<AudienceProps> = ({ primary, secondary, imageUrl }) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          <div>
            <div className="inline-block px-4 py-2 bg-[#3337AD]/5 rounded-full text-[#3337AD] font-bold text-xs uppercase tracking-widest mb-6">Целевой ландшафт</div>
            <Heading2 className="mb-6">С кем мы говорим?</Heading2>
            <Subheading className="mb-12">
              Глубокое понимание портрета пользователя позволяет нам создавать контент, который резонирует на эмоциональном уровне, принося при этом рациональную пользу.
            </Subheading>
            
            <div className="relative aspect-square md:aspect-auto md:h-[400px] bg-slate-50 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
              <img src={imageUrl ?? DEFAULT_AUDIENCE_IMAGE} className="w-full h-full object-cover grayscale" alt="Атмосфера аудитории" />
            </div>
          </div>
          
          <div className="flex flex-col justify-center gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#3337AD] text-white flex items-center justify-center text-sm">О</span>
                Основной сегмент
              </h3>
              <ul className="space-y-4">
                {primary.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <svg className="w-6 h-6 text-[#3337AD] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-slate-300 text-white flex items-center justify-center text-sm">В</span>
                Вторичные аудитории
              </h3>
              <div className="flex flex-wrap gap-3">
                {secondary.map((item, i) => (
                  <span key={i} className="px-5 py-2.5 bg-white border border-slate-200 text-slate-500 rounded-full text-md font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Audience;
