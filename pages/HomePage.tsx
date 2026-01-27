import React from "react";

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 w-full">
        <img
          src="/лого типа агентства.svg"
          alt="Типа агентство"
          className="h-10 md:h-12 w-auto mb-10"
        />

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

