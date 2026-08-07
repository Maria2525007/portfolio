import Image from "next/image";
import { event } from "@/content";

/*
  Variant B — «Разворот».
  A hard 50/50 split: full-bleed reportage on the left, an inverted bone-paper
  panel on the right. Here the TITLE dominates and the date is demoted to a mono
  ledger line — the exact opposite emphasis to variant A, on the opposite stock.
*/
export default function HeroB() {
  return (
    <section className="relative grid lg:min-h-[calc(100vh-61px)] lg:grid-cols-2">
      {/* ------------------------------------------------------- picture -- */}
      <figure className="relative order-1 h-[46vh] min-h-[280px] w-full lg:order-none lg:h-auto lg:min-h-0">
        <Image
          src="/hall.jpg"
          alt="Участники интенсива за длинным столом в зале «Литейного Двора»"
          fill
          priority
          sizes="(max-width: 1023px) 100vw, 50vw"
          className="photo-ink object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-ink/40"
        />

        {/* The date rides on the photograph as a stamp, not as a headline. */}
        <figcaption className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
          <div className="inline-flex items-baseline gap-3 border-t-2 border-accent bg-ink/85 px-4 py-3 backdrop-blur-sm">
            <span className="num text-sm tracking-[0.2em] text-accent-soft uppercase">
              {event.weekday}
            </span>
            <span className="display-num text-2xl text-text sm:text-3xl">
              26.09.26
            </span>
          </div>
        </figcaption>
      </figure>

      {/* --------------------------------------------------- paper panel -- */}
      <div className="order-2 flex flex-col justify-center bg-paper px-5 py-14 text-paper-ink sm:px-10 lg:order-none lg:px-14 lg:py-20">
        <div className="max-w-[34rem]">
          <p className="label label-paper">
            {event.city} · Офлайн · {event.seatsTotal} мест
          </p>

          <h1 className="display mt-6 text-[clamp(2.4rem,6.2vw,4.4rem)] text-paper-ink">
            Личные
            <br />
            финансы
            <br />
            <span className="text-accent-paper">за один день</span>
          </h1>

          <p className="mt-7 max-w-[44ch] text-[1.0625rem] leading-relaxed text-paper-muted">
            Одна суббота, {event.workHours.replace("6", "шесть")}, сорок человек
            за столами. Приходите с выпиской за три месяца — уходите с картой
            расходов, посчитанной подушкой и планом на год.
          </p>

          {/* Facts as a receipt: label left, value right, hairline between. */}
          <dl className="mt-10 border-t border-paper-line">
            {[
              { k: "Дата", v: `${event.dateLong}` },
              { k: "Время", v: event.time },
              { k: "Адрес", v: "наб. реки Фонтанки, 24" },
            ].map((r) => (
              <div
                key={r.k}
                className="ledger-row-paper flex items-baseline justify-between gap-4 py-3"
              >
                <dt className="label label-paper">{r.k}</dt>
                <dd className="num text-right text-[0.9375rem] text-paper-ink">
                  {r.v}
                </dd>
              </div>
            ))}
            <div className="ledger-row-paper flex items-baseline justify-between gap-4 py-3">
              <dt className="label label-paper">Осталось</dt>
              <dd className="num text-right text-[0.9375rem] text-accent-paper">
                {event.seatsLeft} из {event.seatsTotal}
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#order" className="btn text-base">
              Забрать место
            </a>
            <a
              href="#schedule"
              className="label link-rule"
              style={{ color: "var(--paper-muted)" }}
            >
              Программа дня
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
