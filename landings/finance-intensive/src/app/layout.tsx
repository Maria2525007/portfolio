import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Oswald } from "next/font/google";
import { event } from "@/content";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${event.brand} — интенсив по личным финансам, ${event.dateLong}, ${event.city}`;
const description = `Однодневный офлайн-интенсив: ${event.workHours} за одну субботу. Разбираем вашу выписку, считаем подушку, собираем план на год. ${event.seatsTotal} мест.`;

export const metadata: Metadata = {
  metadataBase: new URL("https://razbor-intensiv.example"),
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/hall.jpg", width: 1800, height: 1200, alt: event.brand }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${oswald.variable} ${manrope.variable} ${plexMono.variable} antialiased`}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationEvent",
              name: `${event.brand} — ${event.title}`,
              description,
              startDate: `${event.dateISO}T10:00:00+03:00`,
              endDate: `${event.dateISO}T17:30:00+03:00`,
              eventAttendanceMode:
                "https://schema.org/OfflineEventAttendanceMode",
              eventStatus: "https://schema.org/EventScheduled",
              location: {
                "@type": "Place",
                name: "Пространство «Литейный Двор»",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "наб. реки Фонтанки, 24",
                  addressLocality: event.city,
                  addressCountry: "RU",
                },
              },
              maximumAttendeeCapacity: event.seatsTotal,
            }),
          }}
        />
      </body>
    </html>
  );
}
