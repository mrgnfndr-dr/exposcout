import { Reveal } from "./reveal";
import { X, Check } from "lucide-react";

const ROWS = [
  {
    aspect: "Стоимость",
    trip: "$2 000 — 5 000+",
    scout: "Фиксированная цена за отчёт",
  },
  {
    aspect: "Время",
    trip: "5–10 дней (перелёт, выставка, jetlag)",
    scout: "0 дней — работаете как обычно",
  },
  {
    aspect: "Результат",
    trip: "Хаос из визиток и фото",
    scout: "Структурированный отчёт",
  },
  {
    aspect: "Квалификация",
    trip: "Сами разбираетесь, кто подходит",
    scout: "Каждый контакт оценён под ваш запрос",
  },
  {
    aspect: "Evidence",
    trip: "Случайные фото и заметки",
    scout: "Фото, видео, аудио, транскрипты",
  },
  {
    aspect: "Follow-up",
    trip: "Откладывается неделями",
    scout: "Данные готовы сразу после выставки",
  },
  {
    aspect: "Охват",
    trip: "1 человек — ограниченное время",
    scout: "Скаут по целевому маршруту",
  },
  {
    aspect: "Готовность к CRM",
    trip: "Нужно ручное внесение",
    scout: "CSV/XLSX, готово к импорту",
  },
];

export function Comparison() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-700 rounded-full text-sm font-medium mb-4">
              Сравнение
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Почему ExpoScout, а не поездка
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="bg-white rounded-2xl border border-[#E8E8E4] overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-[#E8E8E4]">
              <div className="p-5 lg:p-6" />
              <div className="p-5 lg:p-6 text-center border-l border-[#E8E8E4]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="font-semibold text-[#1A1A1A]">
                    Поездка на выставку
                  </span>
                </div>
              </div>
              <div className="p-5 lg:p-6 text-center bg-gold/5 border-l border-[#E8E8E4]">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-gold" />
                  <span className="font-bold text-[#1A1A1A]">ExpoScout</span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <div
                key={row.aspect}
                className={`grid grid-cols-3 ${
                  i < ROWS.length - 1 ? "border-b border-[#E8E8E4]" : ""
                }`}
              >
                <div className="p-4 lg:p-5 flex items-center">
                  <span className="font-medium text-[#1A1A1A] text-sm">
                    {row.aspect}
                  </span>
                </div>
                <div className="p-4 lg:p-5 border-l border-[#E8E8E4] flex items-center">
                  <span className="text-[#71717A] text-sm">{row.trip}</span>
                </div>
                <div className="p-4 lg:p-5 bg-gold/[0.03] border-l border-[#E8E8E4] flex items-center">
                  <span className="text-[#1A1A1A] text-sm font-medium">
                    {row.scout}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
