
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';

interface GrowthToolProps {
  title: string;
  description: string;
}

const GrowthTool: React.FC<GrowthToolProps> = ({ title, description }) => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-[#3337AD] font-bold tracking-widest uppercase mb-4 text-xs">Наша философия</p>
          <Heading2 className="mb-8">{title}</Heading2>
          <BodyText className="text-slate-500 italic">
            «Контент — это не расходы. Это цифровой актив, который работает 24/7 на создание капитала вашего бренда и авторитета».
          </BodyText>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#3337AD]/30 transition-all duration-300">
            <div className="w-12 h-12 bg-[#3337AD] rounded-full flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <h4 className="text-xl font-bold mb-4">Масштабируемость</h4>
            <p className="text-slate-600">Система, которая растет вместе с объемом вашего бизнеса, не теряя в качестве.</p>
          </div>
          
          <div className="bg-[#3337AD] p-10 rounded-3xl text-white shadow-xl shadow-[#3337AD]/20 transform md:-translate-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040L3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622l-.382-3.016z" /></svg>
            </div>
            <h4 className="text-xl font-bold mb-4">Надежность</h4>
            <p className="text-white/80">Каждый пост, каждое слово и каждое изображение соответствуют вашим бизнес-целям.</p>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:border-[#3337AD]/30 transition-all duration-300">
            <div className="w-12 h-12 bg-[#3337AD] rounded-full flex items-center justify-center mb-8">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h4 className="text-xl font-bold mb-4">Автоматизация</h4>
            <p className="text-slate-600">Оптимизация производственных процессов, чтобы владелец мог сосредоточиться на стратегии.</p>
          </div>
        </div>
        
        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
           <BodyText className="text-slate-300 max-w-3xl mx-auto relative z-10">
             {description}
           </BodyText>
        </div>
      </Container>
    </Section>
  );
};

export default GrowthTool;
