
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';

interface VisualGridProps {
  images: string[];
}

const VisualGrid: React.FC<VisualGridProps> = ({ images }) => {
  if (!images || images.length < 6) {
    return (
      <Section className="bg-slate-50 overflow-hidden">
        <Container>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <Heading2 className="mb-4">Пример визуального оформления</Heading2>
            <BodyText>Добавим визуальные примеры после подбора референсов и съёмок.</BodyText>
          </div>
        </Container>
      </Section>
    );
  }

  // Распределяем картинки на 3 колонки для бесконечного скролла
  const col1 = [...images.slice(0, 4), ...images.slice(0, 4)];
  const col2 = [...images.slice(4, 8), ...images.slice(4, 8)];
  const col3 = [...images.slice(8, 12), ...images.slice(8, 12)];

  return (
    <Section className="bg-slate-50 overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <Heading2 className="mb-4">Пример визуального оформления</Heading2>
          <BodyText>Эстетика ленты — первое касание с гостем.</BodyText>
        </div>

        {/* Используем строгое деление на 3 колонки через grid-cols-3, убраны границы и тени */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 h-[400px] sm:h-[500px] md:h-[700px] overflow-hidden relative max-w-4xl mx-auto w-full">
          
          {/* Column 1 (Сделана значительно медленнее по просьбе пользователя) */}
          <div className="flex flex-col gap-1 md:gap-2 animate-scroll-vertical-slowest">
            {col1.map((url, i) => (
              <div key={i} className="w-full aspect-[4/5] overflow-hidden">
                <img src={url} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-1 md:gap-2 animate-scroll-vertical-slow">
            {col2.map((url, i) => (
              <div key={i} className="w-full aspect-[4/5] overflow-hidden">
                <img src={url} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
          
          {/* Column 3 */}
          <div className="flex flex-col gap-1 md:gap-2 animate-scroll-vertical-med">
            {col3.map((url, i) => (
              <div key={i} className="w-full aspect-[4/5] overflow-hidden">
                <img src={url} className="w-full h-full object-cover" alt="" />
              </div>
            ))}
          </div>
        </div>
      </Container>
      
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        /* Левая колонка - самая медленная */
        .animate-scroll-vertical-slowest {
          animation: scroll-vertical 45s linear infinite;
        }
        .animate-scroll-vertical-slow {
          animation: scroll-vertical 35s linear infinite;
        }
        .animate-scroll-vertical-med {
          animation: scroll-vertical 28s linear infinite;
        }
      `}</style>
    </Section>
  );
};

export default VisualGrid;
