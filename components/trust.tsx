import { Reveal } from "./reveal";
import { Shield, Eye, FileCheck, UserCheck } from "lucide-react";

const POINTS = [
  {
    icon: FileCheck,
    title: "Целевой бриф",
    description:
      "Перед выставкой мы формируем бриф вместе с вами — скаут точно знает, кого искать и какие данные собирать",
  },
  {
    icon: Eye,
    title: "Evidence-based скаутинг",
    description:
      "Каждый контакт подкреплён evidence: визитка, фото стенда, аудиозапись переговоров, видеообзор",
  },
  {
    icon: Shield,
    title: "Структурированный вывод",
    description:
      "Вы получаете не сырые данные, а квалифицированный отчёт с оценкой релевантности каждого поставщика",
  },
  {
    icon: UserCheck,
    title: "Follow-up и верификация",
    description:
      "После выставки можно заказать дополнительный скаутинг: выезд к поставщику, проверка фабрики, уточнение условий",
  },
];

export function Trust() {
  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Надёжность
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Почему нам можно доверять
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Мы не выдумываем данные — мы собираем их лично на выставке
              и предоставляем с evidence
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal key={p.title} delay={i * 120}>
                <div className="dark-card rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={400}>
          <div className="text-center">
            <p className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/50 text-sm">
              <span className="w-2 h-2 rounded-full bg-gold" />
              Сейчас мы набираем пилотных клиентов на ближайшие выставки
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
