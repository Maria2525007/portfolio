import type { Metadata } from "next";
import { Golos_Text, Spectral } from "next/font/google";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const golos = Golos_Text({
  variable: "--font-golos",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const title = "СВЕТЛО — курс мобильной фотографии для начинающих";
const description =
  "Шесть недель, двенадцать видеоуроков и разбор каждой домашней работы. Курс для тех, кто снимает на телефон каждый день и каждый раз думает: «в жизни было красивее».";

// Vercel exposes the production domain at build time; locally there is none.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:4310";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "ru_RU",
    siteName: "СВЕТЛО",
    images: [{ url: "/photos/hero-after.jpg", width: 1240, height: 1550, alt: "Кадр у окна" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${spectral.variable} ${golos.variable}`}>
      <body>{children}</body>
    </html>
  );
}
