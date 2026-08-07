import type { Metadata, Viewport } from "next";
import { Onest, Vollkorn } from "next/font/google";
import { studio } from "@/content";
import "./globals.css";

// Warm humanist serif for display, Cyrillic-native grotesk for everything else.
const vollkorn = Vollkorn({
  variable: "--font-vollkorn",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const onest = Onest({
  variable: "--font-onest",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const title = `${studio.name} — груминг-студия для собак и кошек в Москве`;
const description =
  "Стрижём собак и кошек без наркоза и фиксации силой. Знакомство перед стрижкой, видеоотчёт хозяину, честные цены по размеру животного. Дизайн-завод «Флакон», Дмитровская.";

// Vercel exposes the production domain at build time; locally there is none.
const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: studio.name,
    locale: "ru_RU",
    type: "website",
    images: [
      { url: "/img/hero-a.jpg", width: 1000, height: 1330, alt: title },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbf5ea",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${vollkorn.variable} ${onest.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PetGroomer",
              name: studio.name,
              description,
              telephone: studio.phone,
              openingHours: "Mo-Su 10:00-21:00",
              address: {
                "@type": "PostalAddress",
                addressLocality: studio.city,
                streetAddress: studio.address,
                addressCountry: "RU",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
