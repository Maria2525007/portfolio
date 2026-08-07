import Wordmark from "./Wordmark";
import { nav, studio } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-pine pt-12 pb-28 text-cream md:pb-12">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-8 border-b border-cream/20 pb-8">
          <div>
            <Wordmark tone="cream" />
            <p className="mt-3 max-w-[30ch] text-[0.875rem] leading-relaxed text-cream/60">
              {studio.tagline}. {studio.city}, {studio.addressNote}.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rule-link text-[0.875rem] text-cream/80 hover:text-cream"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <a
              href={studio.phoneHref}
              className="tnum text-[1.0625rem] text-cream"
            >
              {studio.phone}
            </a>
            <a
              href={studio.telegramHref}
              className="rule-link text-[0.875rem] text-cream/80 hover:text-cream"
            >
              Telegram {studio.telegram}
            </a>
            <a
              href={studio.whatsappHref}
              className="rule-link text-[0.875rem] text-cream/80 hover:text-cream"
            >
              WhatsApp
            </a>
            <p className="tnum mt-1 text-[0.8125rem] text-cream/60">
              {studio.hoursLine}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-[70ch] text-[0.8125rem] leading-relaxed text-cream/50">
          Демонстрационный проект для портфолио. Студия «{studio.name}», цены,
          мастера и отзывы вымышлены, форма записи ничего никуда не отправляет.
          Фотографии — Unsplash.
        </p>
      </div>
    </footer>
  );
}
