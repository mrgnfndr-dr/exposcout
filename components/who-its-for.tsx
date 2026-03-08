import { Reveal } from "./reveal";
import {
  ShoppingCart,
  Tag,
  PackageOpen,
  Truck,
  Search,
} from "lucide-react";

const AUDIENCES = [
  {
    icon: ShoppingCart,
    title: "Селлеры маркетплейсов",
    description:
      "Wildberries, Ozon, Kaspi — ищете новых поставщиков или хотите расширить ассортимент",
  },
  {
    icon: Tag,
    title: "Private label бренды",
    description:
      "Нужны OEM/ODM фабрики для производства под собственной торговой маркой",
  },
  {
    icon: PackageOpen,
    title: "Импортёры",
    description:
      "Закупаете товары оптом и ищете надёжных производителей с адекватными условиями",
  },
  {
    icon: Truck,
    title: "Дистрибьюторы",
    description:
      "Расширяете линейку брендов и ищете новых поставщиков для вашей сети",
  },
  {
    icon: Search,
    title: "Sourcing-команды",
    description:
      "Проводите закупки для компании и хотите системно охватывать выставки",
  },
];

export function WhoItsFor() {
  return (
    <section id="audience" className="py-24 lg:py-32 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Для кого
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Кому подходит ExpoScout
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Если вы ищете поставщиков через выставки — ExpoScout экономит
              ваше время и деньги
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AUDIENCES.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="dark-card rounded-2xl p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
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
