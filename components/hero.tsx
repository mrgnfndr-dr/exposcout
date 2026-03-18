"use client";

import { ArrowRight, Calendar, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0C]"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0C]/70 via-[#0A0A0C]/50 to-[#0A0A0C]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0C] via-transparent to-[#0A0A0C]/80" />

      {/* Subtle golden accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40 w-full">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] text-sm text-white/60 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Принимаем заявки на апрель 2026
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-[4.25rem] font-bold text-white leading-[1.1] max-w-4xl mb-6 tracking-tight">
          Находите поставщиков
          <br className="hidden md:block" /> на выставках —{" "}
          <span className="text-gradient-gold">без поездок</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
          Мы отправляем скаута на выставку, собираем и структурируем данные,
          и доставляем готовый список поставщиков с контактами, фото, аудио
          и видео — под ваш запрос.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a
            href="#request"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-600 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-gold/20 text-base"
          >
            Заказать скаутинг
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#deliverables"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 text-white hover:bg-white/5 font-semibold rounded-xl transition-all text-base"
          >
            Что вы получите
          </a>
        </div>

        {/* Event preview cards */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl">
          <a
            href="#events"
            className="glass-card rounded-2xl p-6 group cursor-pointer block"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">
                Открыт приём заявок
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-gold transition-colors">
              BEE-TOGETHER
            </h3>
            <div className="flex flex-col gap-1.5 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 shrink-0" />08-09 апреля 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Бишкек, Кыргызстан
              </div>
            </div>
          </a>

          <a
            href="#events"
            className="glass-card rounded-2xl p-6 group cursor-pointer block"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-medium">
                Открыт приём заявок
              </span>
            </div>
            <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-gold transition-colors">
              Canton Fair Spring 2026
            </h3>
            <div className="flex flex-col gap-1.5 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 shrink-0" />
                15 апреля — 5 мая 2026
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                Гуанчжоу, Китай
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
