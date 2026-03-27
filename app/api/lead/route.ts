import { NextRequest, NextResponse } from "next/server";

type AnyRecord = Record<string, unknown>;

function asString(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : String(item)))
      .filter(Boolean)
      .join(", ");
  }
  return "";
}

function pickField(body: AnyRecord, keys: string[]): string {
  for (const key of keys) {
    const direct = asString(body[key]);
    if (direct) return direct;
  }

  const nestedSources = ["form", "formData", "data", "values"] as const;

  for (const source of nestedSources) {
    const nested = body[source];
    if (nested && typeof nested === "object" && !Array.isArray(nested)) {
      const nestedRecord = nested as AnyRecord;
      for (const key of keys) {
        const value = asString(nestedRecord[key]);
        if (value) return value;
      }
    }
  }

  return "";
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AnyRecord;

    const name = pickField(body, ["name", "fullName", "username"]);
    const company = pickField(body, ["company", "store", "shop", "business", "companyName"]);
    const contact = pickField(body, [
      "contact",
      "telegram",
      "whatsapp",
      "email",
      "phone",
      "contactInfo",
      "messenger",
    ]);
    const category = pickField(body, [
      "category",
      "productCategory",
      "niche",
      "whatYouSell",
      "whatCategory",
    ]);
    const exhibition = pickField(body, [
      "exhibition",
      "expo",
      "fair",
      "event",
      "selectedExhibition",
    ]);
    const supplierType = pickField(body, [
      "supplierType",
      "supplier_type",
      "manufacturerType",
      "type",
      "role",
    ]);
    const details = pickField(body, [
      "details",
      "comment",
      "comments",
      "message",
      "description",
      "additional",
      "notes",
    ]);

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        { ok: false, error: "Missing Telegram env vars" },
        { status: 500 }
      );
    }

    const text =
      `Новая заявка ExpoScout\n\n` +
      `Имя: ${name || "-"}\n` +
      `Компания: ${company || "-"}\n` +
      `Контакт: ${contact || "-"}\n` +
      `Категория: ${category || "-"}\n` +
      `Выставка: ${exhibition || "-"}\n` +
      `Тип поставщика: ${supplierType || "-"}\n` +
      `Комментарий: ${details || "-"}`;

    const telegramRes = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text,
        }),
      }
    );

    const telegramData = await telegramRes.json();

    if (!telegramRes.ok) {
      return NextResponse.json(
        { ok: false, error: telegramData },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
