import { Reveal } from "./reveal";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Shirt,
  Globe,
} from "lucide-react";

const EVENTS = [
  {
    name: "BEE-TOGETHER",
    dates: "08-09 апреля 2026",
    city: "Бишкек, Кыргызстан",
    venue: "Этнокомплекс «Дасмия»",
    description:
      "Форум текстильно-швейной и модной индустрии. Идеально для поиска поставщиков тканей, фурнитуры и готовой одежды из региона Центральной Азии.",
    categories: ["Текстиль", "Швейная продукция", "Мода", "Фурнитура"],
    icon: Shirt,
    accent: "from-amber-500/20 to-orange-500/20",
    borderAccent: "hover:border-amber-500/30",
  },
  {
    name: "Canton Fair Spring 2026",
    dates: "15 апреля — 5 мая 2026",
    city: "Гуанчжоу, Китай",
    venue: "China Import and Export Fair Complex",
    description:
      "Крупнейшая в мире торговая выставка. Три фазы: электроника, товары для дома, текстиль и одежда. Десятки тысяч производителей со всего Китая.",
    categories: [
      "Электроника",
      "Товары для дома",
      "Текстиль",
      "Все категории",
    ],
    icon: Globe,
    accent: "from-blue-500/20 to-cyan-500/20",
    borderAccent: "hover:border-blue-500/30",
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-700 rounded-full text-sm font-medium mb-4">
              Ближайшие выставки
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Куда мы отправляем скаутов
            </h2>
            <p className="text-lg text-[#71717A] max-w-2xl mx-auto">
              Выберите выставку и оставьте заявку — мы соберём данные
              по вашему запросу
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {EVENTS.map((event, i) => {
            const Icon = event.icon;
            return (
              <Reveal key={event.name} delay={i * 150}>
                <div
                  className={`relative bg-white rounded-2xl border border-[#E8E8E4] p-8 lg:p-10 premium-card ${event.borderAccent}`}
                >
                  {/* Subtle gradient bg */}
                  <div
                    className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${event.accent} rounded-2xl opacity-50`}
                  />

                  <div className="relative">
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Открыт приём заявок
                      </span>
                      <Icon className="w-6 h-6 text-[#71717A]" />
                    </div>

                    {/* Event name */}
                    <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                      {event.name}
                    </h3>

                    {/* Meta */}
                    <div className="flex flex-col gap-2 mb-5">
                      <div className="flex items-center gap-2 text-[#71717A]">
                        <Calendar className="w-4 h-4 shrink-0" />
                        <span className="text-sm">{event.dates}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#71717A]">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-sm">
                          {event.city} · {event.venue}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#71717A] text-sm leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {event.categories.map((cat) => (
                        <span
                          key={cat}
                          className="px-3 py-1 bg-[#F4F4F2] text-[#52525B] rounded-lg text-xs font-medium"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href="#request"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-semibold rounded-xl transition-all text-sm"
                    >
                      Заказать скаута на эту выставку
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
