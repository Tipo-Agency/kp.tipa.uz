import React from "react";
import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-10">
          <span className="text-white font-black text-xl">404</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
          Страница не найдена
        </h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          Возможно, ссылка на КП неверная или устарела.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            На главную
          </Link>
          <a
            href="https://tipa.uz"
            className="inline-flex items-center justify-center bg-slate-50 hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-2xl font-bold border border-slate-200 transition-all"
          >
            Оставить заявку на tipa.uz
          </a>
        </div>
      </div>
    </div>
  );
};

