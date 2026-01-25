
import React from 'react';
import { Container, Section } from '../UI/Container';
import { Heading2, BodyText } from '../UI/Typography';
import { ServiceItem } from '../../types';

interface ServicesProps {
  services: ServiceItem[];
  imageUrl?: string;
}

const DEFAULT_SERVICES_IMAGE = "https://picsum.photos/seed/strategy/800/1000";

const Services: React.FC<ServicesProps> = ({ services, imageUrl }) => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <Heading2 className="mb-8">Пакет услуг</Heading2>
            <BodyText className="mb-12">
              Для нового бренда важно с первого дня выстроить историю, узнаваемость и доверие. Мы запускаем систему контента и продвижения так, чтобы ресторан сразу воспринимался как место-символ: про вкус, культуру и гостеприимство.
            </BodyText>
            
            <div className="space-y-8">
              {services.map((service, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#3337AD]/20 flex items-center justify-center text-[#3337AD] font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#3337AD] to-[#6366F1] rounded-2xl opacity-10 blur-xl group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
               <img 
                src={imageUrl ?? DEFAULT_SERVICES_IMAGE}
                alt="Визуализация стратегии" 
                className="w-full h-[600px] object-cover rounded-lg transform transition duration-700 group-hover:scale-105"
               />
               <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-xl">
                 <p className="text-[#3337AD] font-bold text-sm uppercase mb-1">Фокус</p>
                 <p className="text-slate-800 text-lg font-semibold">Система важнее хаоса.</p>
               </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Services;
