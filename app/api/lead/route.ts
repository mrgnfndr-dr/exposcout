import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      contact,
      category,
      exhibition,
      supplierType,
      details,
    } = body;

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
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
