import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-10 shadow-sm bg-white border border-slate-100 overflow-hidden">
          <img
            src="/лого типа агентства.svg"
            alt="Типа агентство"
            className="w-full h-full object-contain p-1.5"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
          Коммерческие предложения
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          Если вы хотите получить коммерческое предложение — оставьте заявку на сайте «Типа агентство».
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://tipa.uz"
            className="inline-flex items-center justify-center bg-[#3337AD] hover:bg-[#4348CD] text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-[0.99]"
          >
            Перейти на tipa.uz
          </a>
        </div>
      </div>
    </div>
  );
};

