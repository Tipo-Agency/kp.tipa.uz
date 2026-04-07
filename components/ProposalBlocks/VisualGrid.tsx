
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';

interface VisualGridProps {
  images: string[];
}

/** Делит массив на 3 колонки почти поровну (8 картинок → 3+3+2), чтобы третья колонка не оставалась пустой. */
function splitIntoThreeColumns(urls: string[]): [string[], string[], string[]] {
  const n = urls.length;
  const base = Math.floor(n / 3);
  const rem = n % 3;
  const sizes = [
    base + (rem > 0 ? 1 : 0),
    base + (rem > 1 ? 1 : 0),
    base,
  ] as const;
  let i = 0;
  const cols: [string[], string[], string[]] = [[], [], []];
  for (let c = 0; c < 3; c++) {
    for (let k = 0; k < sizes[c]; k++) {
      cols[c].push(urls[i++]);
    }
  }
  return cols;
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

  const [a, b, c] = splitIntoThreeColumns(images);
  // Дублируем содержимое колонок для бесшовной анимации скролла
  const col1 = [...a, ...a];
  const col2 = [...b, ...b];
  const col3 = [...c, ...c];

  return (
    <Section className="bg-slate-50 overflow-hidden">
      <Container>
        <div className="mb-16 text-center">
          <Heading2 className="mb-4">Пример визуального оформления</Heading2>
          <BodyText>Эстетика ленты — первое касание с гостем.</BodyText>
        </div>

        {/* Используем строгое деление на 3 колонки через grid-cols-3, убраны границы и тени */}
        <div className="grid grid-cols-3 gap-1 md:gap-2 h-[450px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden relative max-w-full sm:max-w-2xl md:max-w-4xl mx-auto w-full">
          
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
