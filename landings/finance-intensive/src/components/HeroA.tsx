import Image from "next/image";
import { event } from "@/content";

/*
  Variant A — «Афиша».
  Typography-only above the fold: the DATE is the largest object on the page,
  the title sits under it at half the size, and a hairline ledger column carries
  the facts. The photograph is demoted to a letterbox band at the bottom edge so
  nothing ever sits on top of an image.
*/
export default function HeroA() {
  const specs = [
    { k: "Дата", v: `${event.dateLong}, ${event.weekday}` },
    { k: "Время", v: `${event.time} · ${event.workHours}` },
    { k: "Место", v: `${event.city}, наб. Фонтанки, 24` },
    { k: "Формат", v: `Офлайн, ${event.seatsTotal} мест за столами` },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1240px] px-5 pt-14 pb-0 sm:px-8 sm:pt-20">
        <div className="grid gap-x-12 gap-y-12 lg:grid-cols-12">
          {/* ------------------------------------------------ type stack -- */}
          <div className="lg:col-span-8">
            <p className="label label-accent">
              Офлайн-интенсив по личным финансам
            </p>

            {/*
              The date is set as one unbreakable lockup: numeral, hairline,
              month. It scales on vw but is capped so it never wraps.
            */}
            <div className="mt-7 flex flex-wrap items-end gap-x-5 gap-y-2">
              <span className="display-num text-accent text-[clamp(4.5rem,13vw,9.5rem)]">
                {event.dateDay}
              </span>
              <div className="pb-2 sm:pb-3">
                <span className="display block text-[clamp(1.6rem,4.4vw,3.1rem)] text-text">
                  {event.dateMonth}
                </span>
                <span className="num mt-2 block text-sm tracking-[0.2em] text-faint uppercase">
                  {event.dateYear} · {event.weekday}
                </span>
              </div>
            </div>

            <h1 className="display mt-9 max-w-[15ch] text-[clamp(2rem,5.4vw,4rem)] text-text">
              Личные финансы
              <br />
              за один день
            </h1>

            <p className="mt-8 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">
              Шесть часов работы в одну субботу. Приходите с выпиской за три
              месяца — уходите с картой своих расходов, посчитанной подушкой и
              планом на год, записанным вашей рукой.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a href="#order" className="btn text-base">
                Забрать место
              </a>
              <a href="#schedule" className="label link-rule label-bright">
                Смотреть программу дня
              </a>
            </div>
          </div>

          {/* ---------------------------------------------------- ledger -- */}
          <aside className="lg:col-span-4">
            <dl className="border-b border-line">
              {specs.map((s) => (
                <div
                  key={s.k}
                  className="ledger-row flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <dt className="label sm:w-20 sm:shrink-0">{s.k}</dt>
                  <dd className="text-[0.9375rem] leading-snug text-text">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>

            {/*
              Honest static count — a printed figure, not a ticking animation.
              The bar is a proportion of seats sold, drawn once.
            */}
            <div className="mt-8 border border-line bg-ink-2 p-6">
              <p className="label">Осталось мест</p>
              <p className="display-num mt-4 flex items-baseline gap-2 text-text">
                <span className="text-[3.5rem] text-accent">
                  {event.seatsLeft}
                </span>
                <span className="num text-lg text-faint">
                  / {event.seatsTotal}
                </span>
              </p>
              <div
                className="mt-5 h-[3px] w-full bg-line"
                role="img"
                aria-label={`Продано ${event.seatsTotal - event.seatsLeft} мест из ${event.seatsTotal}`}
              >
                <div
                  className="h-full bg-accent"
                  style={{
                    width: `${((event.seatsTotal - event.seatsLeft) / event.seatsTotal) * 100}%`,
                  }}
                />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Продано {event.seatsTotal - event.seatsLeft} из{" "}
                {event.seatsTotal}. Дозаписать сверх сорока не сможем — в зале
                ровно столько рабочих мест.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* ------------------------------------------------- letterbox band -- */}
      <figure className="relative mt-16 h-[clamp(180px,26vw,340px)] w-full border-y border-line">
        <Image
          src="/audience.jpg"
          alt="Участники прошлого интенсива пишут в блокнотах во время блока"
          fill
          priority
          sizes="100vw"
          className="photo-ink object-cover object-center"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/45 to-ink/85"
        />
        <figcaption className="absolute bottom-4 left-0 w-full px-5 sm:px-8">
          <span className="label">
            Интенсив №38 · февраль 2026 · Санкт-Петербург
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
