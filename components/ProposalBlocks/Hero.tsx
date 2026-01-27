
import React from 'react';
import { Container } from '../UI/Container';
import { Heading1, Subheading } from '../UI/Typography';

interface HeroProps {
  clientName: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ clientName, title, subtitle }) => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 pb-12 relative bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3337AD]/5 clip-path-diagonal hidden md:block" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}></div>
      <Container className="relative z-10">
        <div className="mb-12">
          <img
            src="/лого типа агентства.svg"
            alt="Типа агентство"
            className="h-10 md:h-12 w-auto mb-10"
          />
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-sm animate-pulse">Персональное предложение</p>
          <Heading1 className="mb-6 text-3xl md:text-5xl">
            {title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3337AD] to-[#6366F1]">
              для {clientName}
            </span>
          </Heading1>
          <Subheading className="max-w-2xl">
            {subtitle}
          </Subheading>
        </div>
        
        <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-slate-100">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-2 font-semibold">Стадия проекта</p>
            <p className="text-slate-900 font-medium">Стратегическое планирование</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-2 font-semibold">Подготовлено</p>
            <p className="text-slate-900 font-medium">Типа агентство</p>
          </div>
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-widest mb-2 font-semibold">Актуально до</p>
            <p className="text-slate-900 font-medium">14 дней с момента презентации</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
