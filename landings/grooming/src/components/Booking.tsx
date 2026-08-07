import BookingForm from "./BookingForm";
import { studio } from "@/content";

const promises = [
  "Перезвоним в течение 15 минут в рабочие часы и подберём мастера под породу.",
  "Предоплату не берём. Первый визит можно отменить в любой момент.",
  "Закладывайте лишние полчаса: знакомство мы не сокращаем ради расписания.",
];

export default function Booking() {
  return (
    <section id="booking" className="scroll-mt-24 bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="eyebrow">Запись</p>
            <h2 className="display-md mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
              Записаться на первый визит
            </h2>
            <p className="mt-5 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-soft">
              Оставьте телефон — остальное обсудим голосом. Если звонить не
              хочется, напишите в{" "}
              <a
                href={studio.telegramHref}
                className="rule-link font-medium text-ink"
              >
                Telegram
              </a>
              , отвечаем там же.
            </p>

            <ul className="mt-9 space-y-4">
              {promises.map((promise) => (
                <li key={promise} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-px w-6 shrink-0 bg-marigold-deep"
                  />
                  <span className="text-[0.9375rem] leading-relaxed text-ink-soft">
                    {promise}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
