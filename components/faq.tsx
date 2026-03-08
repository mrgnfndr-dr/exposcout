"use client";

import { Reveal } from "./reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTIONS = [
  {
    q: "Что конкретно я получу после выставки?",
    a: "Структурированный отчёт с полным списком релевантных поставщиков: название, контакты, категории товаров, MOQ, условия OEM/ODM, сертификации, заметки со встреч, аудио транскрипты, фото и видео evidence. Каждый поставщик оценён по релевантности вашему запросу.",
  },
  {
    q: "Можно искать только в моей категории?",
    a: "Да, скаут работает строго по вашему брифу. Вы указываете категории, требования к MOQ, типу производства и другие критерии — скаут посещает только целевые стенды.",
  },
  {
    q: "Можно сфокусироваться на OEM/ODM поставщиках?",
    a: "Конечно. Это одна из ключевых фильтраций. В брифе указываете, нужны ли OEM, ODM, white label фабрики — скаут целенаправленно ищет именно такие.",
  },
  {
    q: "Вы работаете только в Китае?",
    a: "Нет. Ближайшие выставки — BEE Forum в Бишкеке и Canton Fair в Гуанчжоу. География будет расширяться в зависимости от спроса: Турция, ОАЭ, Юго-Восточная Азия и другие регионы.",
  },
  {
    q: "Можно заказать follow-up после выставки?",
    a: "Да. После основного скаутинга можно заказать дополнительные услуги: выезд к конкретному поставщику, верификацию фабрики, уточнение условий — отдельно и за отдельную стоимость.",
  },
  {
    q: "Это разовая услуга или подписка?",
    a: "Пока это разовая услуга: вы заказываете скаутинг на конкретную выставку и получаете отчёт. В будущем планируем подписочную модель с регулярными выставками.",
  },
  {
    q: "Как вы квалифицируете поставщиков?",
    a: "Скаут собирает фактические данные: что производят, какие условия, MOQ, опыт экспорта, сертификации. Затем мы сопоставляем это с вашим брифом и отмечаем: «подходит», «не подходит» или «нужно уточнить».",
  },
  {
    q: "В каком формате получу результаты?",
    a: "Структурированный отчёт с таблицей поставщиков (доступен в формате CSV/XLSX для импорта в CRM), плюс все evidence-материалы: фото, видео, аудиозаписи и транскрипты.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-3xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-700 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
              Частые вопросы
            </h2>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <Accordion type="single" collapsible className="space-y-3">
            {QUESTIONS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`q-${i}`}
                className="bg-white rounded-xl border border-[#E8E8E4] px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-[#1A1A1A] font-medium py-5 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#71717A] leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
