import React from "react";

export const ExpiredPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0C14] flex flex-col items-center justify-center px-6 text-center">
      {/* Лого */}
      <img
        src="/лого типа агентства.svg"
        alt="Типа агентство"
        className="h-8 w-auto mb-16 opacity-60"
      />

      {/* Иконка */}
      <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white/30"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      </div>

      {/* Заголовок */}
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter text-white mb-6 max-w-lg leading-tight">
        Это предложение уже в архиве
      </h1>

      <p className="text-white/40 text-base md:text-lg leading-relaxed max-w-md mb-14">
        Прошло больше трёх недель с момента отправки. Цены и условия могли измениться —
        напиши нам, чтобы получить актуальное предложение прямо сейчас.
      </p>

      {/* Кнопки контакта */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
        <a
          href="https://t.me/tipa_agency"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#3337AD] hover:bg-[#4348CD] text-white px-8 py-5 rounded-2xl font-bold text-base transition-all shadow-xl shadow-[#3337AD]/30 active:scale-95 flex items-center justify-center gap-3"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.03 9.564c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.893.657z" />
          </svg>
          Написать в Telegram
        </a>
        <a
          href="tel:+998971234567"
          className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-5 rounded-2xl font-bold text-base transition-all active:scale-95 flex items-center justify-center gap-3"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
          Позвонить
        </a>
      </div>

      <p className="mt-12 text-white/20 text-xs uppercase tracking-[0.3em]">
        ТИПА АГЕНТСТВО
      </p>
    </div>
  );
};
