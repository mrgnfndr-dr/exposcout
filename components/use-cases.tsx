import { Reveal } from "./reveal";
import {
  RefreshCw,
  Factory,
  GitCompare,
  Layers,
  Wrench,
  ClipboardCheck,
} from "lucide-react";

const CASES = [
  {
    icon: RefreshCw,
    title: "Новый поставщик для существующей категории",
    description:
      "Ваш текущий поставщик поднял цены или нестабилен — нужен альтернативный с аналогичным качеством и условиями",
  },
  {
    icon: Factory,
    title: "Поиск фабрик для private label",
    description:
      "Хотите производить под собственным брендом — ищете OEM/ODM фабрику, готовую работать с вашим ТЗ",
  },
  {
    icon: GitCompare,
    title: "Сравнение производителей без поездки",
    description:
      "Нужно сравнить 10-15 производителей по MOQ, ценам и условиям — без недели на командировку",
  },
  {
    icon: Layers,
    title: "Тестирование новых категорий",
    description:
      "Думаете зайти в новую нишу — хотите понять, какие фабрики есть и на каких условиях работают",
  },
  {
    icon: Wrench,
    title: "OEM/ODM партнёры",
    description:
      "Ищете фабрику, которая не просто производит, но и помогает с разработкой и кастомизацией продукта",
  },
  {
    icon: ClipboardCheck,
    title: "Скрининг по MOQ, упаковке, сертификации",
    description:
      "Нужен поставщик с конкретными условиями: MOQ до 500, готовая упаковка, CE/ISO/OEKO-TEX",
  },
];

export function UseCases() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Сценарии
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Когда это нужно селлеру
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Практические ситуации, в которых ExpoScout экономит время и деньги
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASES.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal key={c.title} delay={i * 100}>
                <div className="dark-card rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{c.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
