
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';

interface AdsItem {
  title: string;
  description: string;
}

interface AdsProps {
  items: AdsItem[];
}

const AdsPromotion: React.FC<AdsProps> = ({ items }) => {
  return (
    <Section className="bg-white">
      <Container>
        <Heading2 className="mb-16">Реклама и продвижение</Heading2>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div key={i} className="group p-8 border border-slate-100 rounded-3xl hover:border-[#3337AD]/20 hover:shadow-xl transition-all duration-300">
               <div className="text-slate-300 font-black text-4xl mb-6 group-hover:text-[#3337AD]/20 transition-colors">0{i+1}</div>
               <h4 className="text-xl font-bold mb-4 text-slate-800">{item.title}</h4>
               <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-8 md:p-12 bg-slate-50 rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/3">
              <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                 </div>
                 <div>
                    <p className="text-xs text-slate-400 font-bold uppercase">Эффективность</p>
                    <p className="text-lg font-bold text-slate-800">+42% охвата</p>
                 </div>
              </div>
           </div>
           <div className="md:w-2/3">
              <p className="text-slate-600 text-lg leading-relaxed">
                Мы используем комплексный подход: контент создает желание, а реклама доставляет это желание нужным людям в нужное время. Каждое действие измеримо и прозрачно.
              </p>
           </div>
        </div>
      </Container>
    </Section>
  );
};

export default AdsPromotion;
