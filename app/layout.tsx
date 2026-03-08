import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExpoScout — поставщики с выставок без поездок",
  description:
    "Отправляем скаута на выставку, собираем данные и доставляем готовый список поставщиков с контактами, фото, аудио и видео под ваш запрос.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "ExpoScout — поставщики с выставок без поездок",
    description:
      "Отправляем скаута на выставку, собираем данные и доставляем готовый список поставщиков с контактами, фото, аудио и видео под ваш запрос.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
