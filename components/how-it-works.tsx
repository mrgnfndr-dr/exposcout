import { Reveal } from "./reveal";

const STEPS = [
  {
    number: "01",
    title: "Вы оставляете заявку",
    description:
      "Расскажите, что ищете: категория товара, MOQ, OEM/ODM, требования к сертификации, регионы поставки. Мы уточним детали и сформируем бриф.",
  },
  {
    number: "02",
    title: "Скаут работает на выставке",
    description:
      "Наш скаут обходит стенды по вашему брифу, собирает визитки, фотографирует продукцию, записывает переговоры на аудио и видео.",
  },
  {
    number: "03",
    title: "Оцифровываем и квалифицируем",
    description:
      "Аудио транскрибируется, фото распознаются, данные структурируются. Каждый поставщик оценивается на релевантность вашему запросу.",
  },
  {
    number: "04",
    title: "Вы получаете готовый pipeline",
    description:
      "Структурированный отчёт: контакты, условия, фото/видео evidence, оценка «подходит / не подходит / уточнить». Готово к работе и CRM.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Процесс
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Как это работает
            </h2>
            <p className="text-lg text-white/40 max-w-2xl mx-auto">
              Четыре шага от запроса до готового списка поставщиков
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="relative h-full">
                {/* Connector line (desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-6 h-[1px] bg-gradient-to-r from-gold/40 to-transparent z-10" />
                )}

                <div className="dark-card rounded-2xl p-6 lg:p-8 h-full">
                  {/* Step number */}
                  <div className="text-5xl font-bold text-gold/15 mb-4 tracking-tight">
                    {step.number}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
