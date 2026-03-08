import { Reveal } from "./reveal";
import {
  X,
  Check,
  Plane,
  Clock,
  Shuffle,
  Users,
  FileText,
  Target,
  Database,
  UserCheck,
} from "lucide-react";

const PROBLEMS = [
  {
    icon: Plane,
    text: "Невозможно физически ездить на каждую выставку",
  },
  {
    icon: Clock,
    text: "Командировки дорогие и отрывают от операционки на неделю",
  },
  {
    icon: Shuffle,
    text: "После выставки — хаос: визитки, фото, заметки, голосовые",
  },
  {
    icon: Users,
    text: "80% контактов нерелевантны — слишком много шума",
  },
  {
    icon: FileText,
    text: "Follow-up откладывается и теряется в рутине",
  },
];

const SOLUTIONS = [
  {
    icon: Target,
    text: "Одно техзадание — и скаут работает по вашему запросу",
  },
  {
    icon: UserCheck,
    text: "Скаут на месте: обходит стенды, ведёт переговоры, собирает данные",
  },
  {
    icon: Database,
    text: "Всё оцифровано и структурировано — контакты, фото, аудио, видео",
  },
  {
    icon: Check,
    text: "Каждый поставщик квалифицирован под ваш запрос",
  },
  {
    icon: FileText,
    text: "Готовый отчёт, который можно сразу загрузить в CRM",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-700 rounded-full text-sm font-medium mb-4">
              Проблема → Решение
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Зачем ездить, если можно заказать?
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Problems */}
          <Reveal delay={100}>
            <div className="bg-white rounded-2xl border border-[#E8E8E4] p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                  <X className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  Без ExpoScout
                </h3>
              </div>
              <div className="space-y-5">
                {PROBLEMS.map((p) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={p.text}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-red-400" />
                      </div>
                      <p className="text-[#52525B] text-sm leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Solutions */}
          <Reveal delay={250}>
            <div className="bg-[#0A0A0C] rounded-2xl p-8 lg:p-10 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  С ExpoScout
                </h3>
              </div>
              <div className="space-y-5">
                {SOLUTIONS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.text}
                      className="flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
