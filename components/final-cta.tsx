import { Reveal } from "./reveal";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF7] relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Reveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6">
            Закажите скаутинг на{" "}
            <span className="text-gradient-gold">ближайшую выставку</span>
          </h2>
          <p className="text-lg text-[#71717A] mb-10 max-w-2xl mx-auto">
            BEE Forum в Бишкеке (7 апреля) и Canton Fair в Гуанчжоу
            (15 апреля — 5 мая). Приём заявок уже открыт.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#request"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold rounded-xl transition-all hover:shadow-xl text-base"
            >
              Заказать скаутинг
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#events"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#E8E8E4] hover:bg-[#F4F4F2] text-[#1A1A1A] font-semibold rounded-xl transition-all text-base"
            >
              Подробнее о выставках
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
