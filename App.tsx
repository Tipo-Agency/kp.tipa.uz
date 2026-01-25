
import React, { useEffect } from 'react';
import Hero from './components/ProposalBlocks/Hero';
import Services from './components/ProposalBlocks/Services';
import GrowthTool from './components/ProposalBlocks/GrowthTool';
import Audience from './components/ProposalBlocks/Audience';
import ContentRubrics from './components/ProposalBlocks/ContentRubrics';
import Positioning from './components/ProposalBlocks/Positioning';
import VisualGrid from './components/ProposalBlocks/VisualGrid';
import AdsPromotion from './components/ProposalBlocks/AdsPromotion';
import Pricing from './components/ProposalBlocks/Pricing';
import { ProposalData } from './types';

const PROPOSAL_DATA: ProposalData = {
  clientName: "Ресторан в Yangi Oʻzbekiston",
  hero: {
    title: "Стратегия системного роста через контент",
    subtitle: "Переход от ситуативного маркетинга к управляемому активу бренда и стабильному потоку гостей."
  },
  services: [
    { title: "Стратегия", description: "Глубокий анализ конкурентов, разработка TOV и долгосрочного плана развития." },
    { title: "Контент", description: "Создание смысловых единиц, которые продают ценности, а не просто блюда." },
    { title: "Визуал", description: "Продакшн высокого уровня: фото и видео, создающие эстетику премиального сегмента." },
    { title: "Продвижение", description: "Работа с лидерами мнений и точечный таргетинг на целевую аудиторию." }
  ],
  servicesImageUrl: "/proposals/yangi-ozbekiston-restaurant/services/services.png",
  growthTool: {
    title: "Контент как инструмент управления",
    description: "Мы создаем цифровую экосистему, которая транслирует стандарты вашего сервиса, атмосферу и философию еще до того, как гость переступил порог."
  },
  audience: {
    primary: ["Топ-менеджмент и владельцы бизнеса", "Гастро-энтузиасты", "Организаторы частных событий"],
    secondary: ["Туристы премиального сегмента", "HR-директора (корпоративные заказы)"]
  },
  audienceImageUrl: "/proposals/yangi-ozbekiston-restaurant/audience/audience.png",
  rubricBlockImages: [
    "/proposals/yangi-ozbekiston-restaurant/rubrics/block-1.jpg",
    "/proposals/yangi-ozbekiston-restaurant/rubrics/block-2.jpg",
    "/proposals/yangi-ozbekiston-restaurant/rubrics/block-3.jpg"
  ],
  rubrics: [
    { title: "Эстетика подачи", description: "Фокус на деталях, текстурах и искусстве презентации блюд.", imageUrl: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=400" },
    { title: "Закулисье кухни", description: "Процессы, скрытые от глаз: работа команды и отбор ингредиентов.", imageUrl: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&q=80&w=400" },
    { title: "Винная карта", description: "История сортов, культура потребления и идеальные сочетания.", imageUrl: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=400" },
    { title: "Архитектура света", description: "Вечерняя атмосфера, интерьер и световые решения ресторана.", imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=400" },
    { title: "Лица сервиса", description: "Команда как главный носитель ценностей и стандартов бренда.", imageUrl: "https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&q=80&w=400" },
    { title: "Утро в ресторане", description: "Подготовка к открытию, свежесть и ожидание первого гостя.", imageUrl: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=400" },
    { title: "Философия вкуса", description: "Интервью с шефом о смыслах, заложенных в сезонное меню.", imageUrl: "https://images.unsplash.com/photo-1550966841-396ad886756b?auto=format&fit=crop&q=80&w=400" },
    { title: "События и люди", description: "Репортажи с частных ужинов и закрытых дегустаций.", imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?auto=format&fit=crop&q=80&w=400" },
    { title: "HR-бренд", description: "Контент о ценности работы в команде и стандартах обучения.", imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400" }
  ],
  positioning: {
    title: "Роль владельца в центре бренда",
    description: "В премиальном сегменте доверие строится на личности. Мы интегрируем роль владельца как гаранта качества и идеолога, создавая мощный личный бренд, который притягивает нужную аудиторию.",
    images: [
      "/proposals/yangi-ozbekiston-restaurant/positioning/positioning-1.jpg",
      "/proposals/yangi-ozbekiston-restaurant/positioning/positioning-2.jpg",
      "/proposals/yangi-ozbekiston-restaurant/positioning/positioning-3.jpg",
      "/proposals/yangi-ozbekiston-restaurant/positioning/positioning-4.jpg"
    ]
  },
  visuals: [
    // "Сетка" — вразброс (не по порядку), с небольшими повторами чтобы заполнить 3 колонки
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-06.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-02.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-09.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-04.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-01.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-08.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-03.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-07.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-05.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-02.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-06.jpg",
    "/proposals/yangi-ozbekiston-restaurant/visuals/grid-09.jpg"
  ],
  ads: [
    { title: "Таргетированная реклама", description: "Точечный охват аудитории в радиусе 5км и по интересам (бизнес, яхты, гольф)." },
    { title: "Аналитика", description: "Еженедельный мониторинг воронки: от охвата до бронирования столика." },
    { title: "Influence-маркетинг", description: "Работа с лидерами мнений, которые разделяют эстетику вашего бренда." }
  ],
  pricing: {
    amount: "250 000",
    currency: "₽",
    period: "месяц",
    team: [
      "Менеджер проекта (SMM-стратег)",
      "Видеограф / Мобилограф",
      "Дизайнер (графика и сторис)",
      "Таргетолог",
      "Комьюнити-менеджер"
    ],
    deliverables: [
      { label: "Съемки в месяц", value: "4 выезда" },
      { label: "Reels / Видео", value: "12-15 роликов" },
      { label: "Посты в ленту", value: "12-15 шт" },
      { label: "Stories", value: "ежедневно (5-8 шт)" },
      { label: "Дизайн-сетка", value: "уникальный стиль" }
    ]
  }
};

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white">
      <div className="reveal"><Hero clientName={PROPOSAL_DATA.clientName} title={PROPOSAL_DATA.hero.title} subtitle={PROPOSAL_DATA.hero.subtitle} /></div>
      <div className="reveal"><Services services={PROPOSAL_DATA.services} imageUrl={PROPOSAL_DATA.servicesImageUrl} /></div>
      <div className="reveal"><GrowthTool title={PROPOSAL_DATA.growthTool.title} description={PROPOSAL_DATA.growthTool.description} /></div>
      <div className="reveal"><Audience primary={PROPOSAL_DATA.audience.primary} secondary={PROPOSAL_DATA.audience.secondary} imageUrl={PROPOSAL_DATA.audienceImageUrl} /></div>
      <div className="reveal"><ContentRubrics rubrics={PROPOSAL_DATA.rubrics} blockImages={PROPOSAL_DATA.rubricBlockImages} /></div>
      <div className="reveal"><Positioning title={PROPOSAL_DATA.positioning.title} description={PROPOSAL_DATA.positioning.description} images={PROPOSAL_DATA.positioning.images} /></div>
      <div className="reveal"><VisualGrid images={PROPOSAL_DATA.visuals} /></div>
      <div className="reveal"><AdsPromotion items={PROPOSAL_DATA.ads} /></div>
      <div className="reveal"><Pricing amount={PROPOSAL_DATA.pricing.amount} currency={PROPOSAL_DATA.pricing.currency} period={PROPOSAL_DATA.pricing.period} team={PROPOSAL_DATA.pricing.team} deliverables={PROPOSAL_DATA.pricing.deliverables} /></div>
      
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <div className="w-10 h-10 bg-[#3337AD] rounded-lg flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-black">T.</span>
        </div>
        <p className="text-slate-400 text-xs font-semibold tracking-widest uppercase">
          TIPA GROWTH AGENCY © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
