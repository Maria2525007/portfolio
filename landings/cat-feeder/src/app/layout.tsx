import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Onest, Unbounded } from "next/font/google";
import { ScrollReveal } from "@/components/ScrollReveal";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = "NOMI S2 — умная кормушка для кошек с камерой | 12 490 ₽";
const description =
  "Автокормушка NOMI S2: бункер на 4 литра, до 6 кормлений в сутки, порция 10–100 г, камера 1080p с ночной съёмкой и приложение на русском. Гарантия 24 месяца, доставка 1–3 дня.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "ru_RU",
    type: "website",
    siteName: "NOMI",
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${unbounded.variable} ${onest.variable} ${jetbrains.variable} antialiased`}
    >
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
