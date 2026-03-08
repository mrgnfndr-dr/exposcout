import { Reveal } from "./reveal";
import {
  Users,
  CreditCard,
  Tag,
  Package,
  Settings,
  Award,
  Globe,
  FileText,
  Mic,
  Camera,
  Video,
  CheckCircle,
} from "lucide-react";

const ITEMS = [
  { icon: Users, label: "Список поставщиков", detail: "Название, контакты, описание" },
  { icon: CreditCard, label: "Визитки", detail: "Оцифрованные и структурированные" },
  { icon: Tag, label: "Категории товаров", detail: "Точная классификация продукции" },
  { icon: Package, label: "MOQ и условия", detail: "Минимальные партии, цены, сроки" },
  { icon: Settings, label: "OEM / ODM", detail: "Возможности кастомизации" },
  { icon: Award, label: "Сертификация", detail: "ISO, CE, OEKO-TEX и другие" },
  { icon: Globe, label: "Рынки экспорта", detail: "Куда уже поставляют" },
  { icon: FileText, label: "Заметки со встреч", detail: "Ключевые моменты переговоров" },
  { icon: Mic, label: "Аудио транскрипты", detail: "Расшифровки записей разговоров" },
  { icon: Camera, label: "Фото стендов", detail: "Продукция, образцы, каталоги" },
  { icon: Video, label: "Видео обзоры", detail: "Демонстрация стендов и продукции" },
  { icon: CheckCircle, label: "Квалификация", detail: "Подходит / не подходит / уточнить" },
];

export function Deliverables() {
  return (
    <section id="deliverables" className="py-24 lg:py-32 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold-700 rounded-full text-sm font-medium mb-4">
              Результат
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
              Что вы получаете
            </h2>
            <p className="text-lg text-[#71717A] max-w-2xl mx-auto">
              Полный sourcing-отчёт по каждому релевантному поставщику с выставки
            </p>
          </div>
        </Reveal>

        {/* Deliverables grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={i * 60}>
                <div className="bg-white rounded-xl border border-[#E8E8E4] p-5 premium-card h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] text-sm mb-0.5">
                        {item.label}
                      </h4>
                      <p className="text-[#71717A] text-xs">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Mock dashboard preview */}
        <Reveal delay={200}>
          <div className="bg-[#0A0A0C] rounded-2xl p-6 lg:p-8 overflow-hidden">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="text-white/30 text-xs ml-2">
                ExpoScout — Отчёт: Canton Fair 2026
              </span>
            </div>

            {/* Mock table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/40 font-medium py-3 pr-6">
                      Поставщик
                    </th>
                    <th className="text-left text-white/40 font-medium py-3 pr-6">
                      Категория
                    </th>
                    <th className="text-left text-white/40 font-medium py-3 pr-6">
                      MOQ
                    </th>
                    <th className="text-left text-white/40 font-medium py-3 pr-6">
                      OEM/ODM
                    </th>
                    <th className="text-left text-white/40 font-medium py-3 pr-6">
                      Evidence
                    </th>
                    <th className="text-left text-white/40 font-medium py-3">
                      Статус
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Jiangsu Hengxin Textiles",
                      cat: "Knitwear",
                      moq: "500 шт",
                      oem: "OEM",
                      evidence: "Визитка, Фото",
                      status: "Подходит",
                      statusColor: "text-emerald-400",
                    },
                    {
                      name: "Guangzhou Meida Electronics",
                      cat: "Small Appliances",
                      moq: "300 шт",
                      oem: "OEM + ODM",
                      evidence: "Визитка, Видео, Аудио",
                      status: "Подходит",
                      statusColor: "text-emerald-400",
                    },
                    {
                      name: "Shenzhen TexPro Co.",
                      cat: "Basics / T-shirts",
                      moq: "1000 шт",
                      oem: "ODM",
                      evidence: "Фото, Заметки",
                      status: "Уточнить",
                      statusColor: "text-yellow-400",
                    },
                    {
                      name: "Dongguan Brilliant Home",
                      cat: "Kitchen Gadgets",
                      moq: "200 шт",
                      oem: "White label",
                      evidence: "Визитка, Фото, Видео",
                      status: "Подходит",
                      statusColor: "text-emerald-400",
                    },
                  ].map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                    >
                      <td className="py-3 pr-6 text-white font-medium whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="py-3 pr-6 text-white/50 whitespace-nowrap">
                        {row.cat}
                      </td>
                      <td className="py-3 pr-6 text-white/50 whitespace-nowrap">
                        {row.moq}
                      </td>
                      <td className="py-3 pr-6 text-white/50 whitespace-nowrap">
                        {row.oem}
                      </td>
                      <td className="py-3 pr-6 text-white/50 whitespace-nowrap">
                        {row.evidence}
                      </td>
                      <td className={`py-3 font-medium whitespace-nowrap ${row.statusColor}`}>
                        {row.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-white/30 text-xs">
                Показано 4 из 27 поставщиков
              </span>
              <span className="text-gold text-xs font-medium">
                CRM-ready формат · CSV / XLSX
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
