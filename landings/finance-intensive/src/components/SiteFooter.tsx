import { event, venue } from "@/content";
import { Shell } from "./Section";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink-2 py-16">
      <Shell>
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="display text-2xl tracking-[0.14em] text-text">
              {event.brand}
            </p>
            <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-muted">
              {event.title}. {event.dateLong}, {event.weekday}.{" "}
              {venue.name}, {event.city}.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="label">Связаться</p>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-muted">
              <li>
                <a href="mailto:hi@razbor-intensiv.ru" className="link-rule">
                  hi@razbor-intensiv.ru
                </a>
              </li>
              <li className="num">+7 812 000-00-00, будни 10:00—19:00</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="label">Осталось</p>
            <p className="display-num mt-4 text-[2.5rem] text-accent">
              {event.seatsLeft}
              <span className="num text-base text-faint">
                {" "}
                / {event.seatsTotal}
              </span>
            </p>
            <a href="#order" className="label link-rule label-bright mt-5 inline-block">
              Забрать место
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-line pt-6 text-[0.8125rem] leading-relaxed text-faint">
          Демонстрационный проект для портфолио. Бренд, спикер, цены и адрес
          вымышлены. Фотографии — Unsplash.
        </p>
      </Shell>
    </footer>
  );
}
