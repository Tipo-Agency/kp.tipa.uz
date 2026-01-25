
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';

interface PositioningProps {
  title: string;
  description: string;
  images: string[];
}

const Positioning: React.FC<PositioningProps> = ({ title, description, images }) => {
  return (
    <Section className="bg-white">
      <Container>
        {/* items-stretch позволяет блоку с фото тянуться под высоту текста */}
        <div className="flex flex-col md:flex-row gap-20 items-stretch">
          <div className="md:w-1/2 flex flex-col justify-center py-4">
            <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Направление 03 / Фундамент</p>
            <Heading2 className="mb-8">Позиционирование</Heading2>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">{title}</h3>
            <BodyText className="text-slate-700 mb-10 leading-relaxed">
              {description}
            </BodyText>
            <div className="p-8 border-l-2 border-[#3337AD] bg-slate-50 rounded-r-2xl shadow-sm">
               <p className="text-slate-600 italic text-lg leading-relaxed">"Личность владельца — это гарантия качества, которую невозможно подделать. В этом сегменте люди покупают у людей."</p>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full flex">
            {/* Контейнер теперь h-full (тянется за родителем) с ограничением по высоте для баланса */}
            <div className="flex gap-0 h-full min-h-[480px] md:min-h-[590px] w-full overflow-hidden rounded-[3rem] shadow-2xl bg-slate-100 border-none">
              {/* Левая колонка: Верх 60% (3 части), Низ 40% (2 части) */}
              <div className="flex-1 flex flex-col gap-0">
                <div className="h-[60%] w-full overflow-hidden">
                  <img src={images[0]} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt="Owner 1" />
                </div>
                <div className="h-[40%] w-full overflow-hidden">
                  <img src={images[2]} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt="Owner 2" />
                </div>
              </div>
              
              {/* Правая колонка: Верх 40% (2 части), Низ 60% (3 части) */}
              <div className="flex-1 flex flex-col gap-0">
                <div className="h-[40%] w-full overflow-hidden">
                  <img src={images[1]} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt="Owner 3" />
                </div>
                <div className="h-[60%] w-full overflow-hidden">
                  <img src={images[3]} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt="Owner 4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Positioning;
