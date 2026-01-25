
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';
import { Rubric } from '../../types';

interface RubricsProps {
  rubrics: Rubric[];
  blockImages?: string[]; // 3 изображения, по одному на блок из 3 рубрик
}

const ContentRubrics: React.FC<RubricsProps> = ({ rubrics, blockImages }) => {
  const groups = [rubrics.slice(0, 3), rubrics.slice(3, 6), rubrics.slice(6, 9)].filter(
    (g) => g.length > 0
  );

  const images =
    blockImages && blockImages.length > 0
      ? blockImages
      : groups.map((g) => g[0]?.imageUrl).filter(Boolean);

  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Разработка смыслов</p>
          <Heading2 className="mb-6">Матрица контента</Heading2>
          <BodyText>
            Мы разработали 9 ключевых векторов, которые сделают ваш аккаунт полноценным медиа-ресурсом бренда.
          </BodyText>
        </div>

        <div className="space-y-10 md:space-y-14">
          {groups.map((group, blockIdx) => {
            const isImageLeft = blockIdx % 2 === 0; // 1: left, 2: right, 3: left
            const imageUrl = images[blockIdx] ?? group[0]?.imageUrl;

            return (
              <div
                key={blockIdx}
                className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm"
              >
                <div className={`grid md:grid-cols-2 ${isImageLeft ? '' : 'md:[&>*:first-child]:order-2'}`}>
                  {/* Image */}
                  <div className="relative min-h-[240px] md:min-h-[420px]">
                    {imageUrl ? (
                      <>
                        <img
                          src={imageUrl}
                          alt={`Рубрики — блок ${blockIdx + 1}`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/10 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-slate-100" />
                    )}
                  </div>

                  {/* Rubrics list */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="mb-8">
                      <p className="text-[#3337AD] font-bold tracking-widest uppercase text-[10px]">
                        Блок 0{blockIdx + 1}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 mt-2">
                        Рубрики контента
                      </h3>
                    </div>

                    <div className="space-y-5">
                      {group.map((rubric, idx) => (
                        <div
                          key={idx}
                          className="p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white transition-colors"
                        >
                          <h4 className="text-lg font-bold text-slate-900 mb-2">{rubric.title}</h4>
                          <p className="text-slate-600 text-sm leading-relaxed">{rubric.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ContentRubrics;
