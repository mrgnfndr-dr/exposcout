"use client";

import { useState, FormEvent } from "react";
import { Reveal } from "./reveal";
import { ArrowRight, Send, CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    contact: "",
    category: "",
    event: [] as string[],
    supplierType: "",
    comments: "",
    _hp: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const toggleEvent = (ev: string) =>
    setForm((prev) => ({
      ...prev,
      event: prev.event.includes(ev)
        ? prev.event.filter((e) => e !== ev)
        : [...prev.event, ev],
    }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.contact) return;

    setState("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.contact,
          company: form.company,
          role: form.supplierType,
          message: `Категория: ${form.category}\nВыставки: ${form.event.join(", ")}\nТип поставщика: ${form.supplierType}\nКомментарии: ${form.comments}`,
          lang: "ru",
          _hp: form._hp,
        }),
      });
      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <section id="request" className="py-24 lg:py-32 bg-[#0A0A0C]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Заявка отправлена!
          </h2>
          <p className="text-white/50 text-lg">
            Мы свяжемся с вами в ближайшее время для уточнения деталей
            и формирования брифа.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="request" className="py-24 lg:py-32 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left side — intro */}
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
                Заявка
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
                Заказать скаутинг на выставку
              </h2>
              <p className="text-lg text-white/40 mb-8 leading-relaxed">
                Расскажите, что вы ищете — мы сформируем бриф и отправим
                скаута на выставку. Вы получите готовый отчёт с
                квалифицированными поставщиками.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4 text-gold" />
                  </div>
                  Заполните форму — мы свяжемся в течение 24 часов
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <ArrowRight className="w-4 h-4 text-gold" />
                  </div>
                  Вместе уточним ваш запрос и сформируем бриф
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right side — form */}
          <Reveal delay={200}>
            <form
              onSubmit={handleSubmit}
              className="bg-[#141416] rounded-2xl border border-white/[0.06] p-6 lg:p-8 space-y-5"
            >
              {/* Honeypot */}
              <input
                type="text"
                name="_hp"
                value={form._hp}
                onChange={(e) => update("_hp", e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Имя <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Компания / магазин
                </label>
                <input
                  type="text"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  placeholder="Название"
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Telegram / WhatsApp / Email{" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.contact}
                  onChange={(e) => update("contact", e.target.value)}
                  placeholder="@username или +7..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Что вы продаёте / какую категорию ищете
                </label>
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  placeholder="Одежда, электроника, товары для дома..."
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm"
                />
              </div>

              {/* Events */}
              <div>
                <label className="block text-white/60 text-sm mb-3">
                  Какая выставка интересует
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {[
                    { id: "bee", label: "BEE TOGETHER (Бишкек)" },
                    { id: "canton", label: "Canton Fair (Китай)" },
                  ].map((ev) => (
                    <button
                      key={ev.id}
                      type="button"
                      onClick={() => toggleEvent(ev.id)}
                      className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all border ${
                        form.event.includes(ev.id)
                          ? "bg-gold/10 border-gold/30 text-gold"
                          : "bg-white/[0.02] border-white/[0.08] text-white/40 hover:text-white/60"
                      }`}
                    >
                      {ev.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Supplier type */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Тип поставщика
                </label>
                <select
                  value={form.supplierType}
                  onChange={(e) => update("supplierType", e.target.value)}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm appearance-none"
                >
                  <option value="" className="bg-[#141416]">
                    Выберите тип
                  </option>
                  <option value="oem" className="bg-[#141416]">
                    OEM производитель
                  </option>
                  <option value="odm" className="bg-[#141416]">
                    ODM производитель
                  </option>
                  <option value="white-label" className="bg-[#141416]">
                    White label
                  </option>
                  <option value="trader" className="bg-[#141416]">
                    Торговая компания / трейдер
                  </option>
                  <option value="any" className="bg-[#141416]">
                    Любой тип
                  </option>
                </select>
              </div>

              {/* Comments */}
              <div>
                <label className="block text-white/60 text-sm mb-2">
                  Дополнительно (необязательно)
                </label>
                <textarea
                  value={form.comments}
                  onChange={(e) => update("comments", e.target.value)}
                  placeholder="Любые уточнения: MOQ, регионы поставки, сертификации, бюджет..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder:text-white/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/20 transition-all text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={state === "submitting"}
                className="w-full px-6 py-4 bg-gold hover:bg-gold-600 disabled:opacity-70 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:shadow-gold/20 text-base flex items-center justify-center gap-2"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {state === "error" && (
                <p className="text-red-400 text-sm text-center">
                  Произошла ошибка. Попробуйте ещё раз.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
