import Image from "next/image";
import { OrderForm } from "@/components/OrderForm";
import { IconPour, IconSchedule, IconWatch } from "@/components/StepIcons";
import { Views } from "@/components/Views";
import { VideoBlock } from "@/components/VideoBlock";
import {
  bigStats,
  boxItems,
  delivery,
  faq,
  payment,
  priceRub,
  product,
  reviews,
  specGroups,
  steps,
} from "@/content";
import { goldenEating, kibble } from "@/media";

const wrap = "mx-auto w-full max-w-[1340px] px-5 sm:px-8";

const stepIcons = [IconPour, IconSchedule, IconWatch];

function Stars({ n }: { n: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`Оценка ${n} из 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-3.5 w-3.5 ${i <= n ? "text-accent" : "text-line-strong"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1.6l2.4 5.3 5.8.6-4.3 3.9 1.2 5.7L10 14.2 4.9 17.1l1.2-5.7L1.8 7.5l5.8-.6z" />
        </svg>
      ))}
    </span>
  );
}

function BuyBand({
  headline,
  sub,
  tone = "cream",
}: {
  headline: string;
  sub: string;
  tone?: "cream" | "white";
}) {
  return (
    <div
      className={`flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-end sm:justify-between ${
        tone === "white" ? "" : ""
      }`}
    >
      <div className="min-w-0">
        <p className="display-md max-w-[22ch] text-[1.35rem] sm:text-[1.7rem]">
          {headline}
        </p>
        <p className="mt-2 max-w-[48ch] text-[0.9375rem] text-muted">{sub}</p>
      </div>
      <div className="flex shrink-0 flex-wrap items-center gap-4">
        <div className="leading-none">
          <span className="figure text-[1.75rem]">{priceRub(product.price)}</span>
          <span className="mono ml-2 text-[0.8125rem] text-faint line-through">
            {priceRub(product.priceOld)}
          </span>
        </div>
        <a href="#order" className="btn btn-primary h-12 px-7 text-[0.9375rem]">
          Купить
        </a>
      </div>
    </div>
  );
}

/* ---------------- 2. how it works ---------------- */

function How() {
  return (
    <section id="how" className="border-t border-line bg-cream">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="reveal flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow eyebrow-accent">Три действия — и всё</p>
            <h2 className="display mt-4 max-w-[16ch] text-[2.2rem] sm:text-[3.2rem]">
              Настройка занимает вечер. Один раз.
            </h2>
          </div>
          <p className="max-w-[34ch] shrink-0 text-[0.9375rem] leading-relaxed text-muted sm:text-right">
            Дальше вы про кормушку не вспоминаете — пока не захотите посмотреть,
            как кот ест.
          </p>
        </div>

        <div className="mt-14 grid gap-px border-t border-line bg-line sm:mt-20 lg:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = stepIcons[i];
            return (
              <div
                key={s.n}
                className="reveal min-w-0 bg-cream pt-8 lg:px-8 lg:pt-10 lg:first:pl-0 lg:last:pr-0"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="figure text-[2.6rem] text-line-strong sm:text-[3.2rem]">
                    {s.n}
                  </span>
                  <Icon className="h-12 w-12 shrink-0 text-accent sm:h-14 sm:w-14" />
                </div>
                <h3 className="display-md mt-7 text-[1.35rem] sm:text-[1.6rem]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[38ch] leading-relaxed text-ink-soft">
                  {s.text}
                </p>
                <p className="mono mt-6 pb-8 text-[0.75rem] tracking-[0.1em] text-accent">
                  {s.aside}
                </p>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-16">
          <BuyBand
            headline="Кот ест по часам, пока вы стоите в пробке"
            sub="Со склада в Москве. Доставим за 1–3 дня, 14 дней на возврат без объяснений."
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 3. specs ---------------- */

function Specs() {
  return (
    <section id="specs" className="border-t border-line">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="reveal">
          <p className="eyebrow eyebrow-accent">Характеристики</p>
          <h2 className="display mt-4 max-w-[14ch] text-[2.2rem] sm:text-[3.2rem]">
            Цифры, которые правда важны
          </h2>
        </div>

        {/* big figures */}
        <dl className="reveal mt-14 grid grid-cols-2 gap-px border-y border-line bg-line sm:mt-16 lg:grid-cols-5">
          {bigStats.map((s) => (
            <div
              key={s.label}
              className="min-w-0 bg-paper px-1 py-7 last:col-span-2 lg:last:col-span-1"
            >
              <dt className="mono order-2 mt-3 text-[0.6875rem] tracking-[0.13em] text-faint uppercase">
                {s.label}
              </dt>
              <dd className="flex items-baseline gap-1.5 whitespace-nowrap">
                {/* "10–100" is the widest figure here; it must not break across
                    lines and strand its unit on a phone. */}
                <span className="figure text-[2rem] text-ink sm:text-[3.4rem]">
                  {s.value}
                </span>
                <span className="text-[0.875rem] font-medium text-accent sm:text-[0.9375rem]">
                  {s.unit}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        {/* tables */}
        <div className="mt-16 grid gap-x-14 gap-y-14 lg:grid-cols-3">
          {specGroups.map((g, gi) => (
            <div
              key={g.group}
              className="reveal min-w-0"
              style={{ transitionDelay: `${gi * 80}ms` }}
            >
              <h3 className="mono border-b-2 border-ink pb-3 text-[0.75rem] tracking-[0.16em] uppercase">
                {g.group}
              </h3>
              <dl>
                {g.rows.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-line py-3.5"
                  >
                    <dt className="min-w-0 text-[0.875rem] text-muted">{k}</dt>
                    <dd className="min-w-0 max-w-full text-[0.9375rem] font-medium sm:max-w-[58%] sm:text-right">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="mono reveal mt-10 text-[0.75rem] text-faint">
          Артикул {product.sku} · цвет {product.color} · сертификат ЕАЭС
          RU&nbsp;Д-CN.РА01.В.41276/24
        </p>
      </div>
    </section>
  );
}

/* ---------------- 4. in the box ---------------- */

function Box() {
  return (
    <section className="border-t border-line bg-ink text-white">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal min-w-0 lg:col-span-5">
            <p className="eyebrow eyebrow-accent">Комплектация</p>
            <h2 className="display mt-4 text-[2.2rem] sm:text-[3rem]">
              Что в коробке
            </h2>
            <p className="mt-5 max-w-[38ch] leading-relaxed text-white/60">
              Ничего докупать не нужно — кроме батареек AA, если хотите резервное
              питание на случай отключения света.
            </p>
            <div className="relative mt-10 aspect-[4/3] w-full overflow-hidden">
              <Image
                src={kibble}
                alt="Кошки едят сухой корм из мисок"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="reveal min-w-0 lg:col-span-7">
            <ol className="border-t border-white/12">
              {boxItems.map((b, i) => (
                <li
                  key={b.title}
                  className="flex items-baseline gap-5 border-b border-white/12 py-5"
                >
                  <span className="mono shrink-0 text-[0.75rem] text-white/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.0625rem] font-semibold sm:text-[1.15rem]">
                      {b.title}
                    </span>
                    <span className="mt-0.5 block text-[0.875rem] text-white/50">
                      {b.note}
                    </span>
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="min-w-0">
                <p className="display-md max-w-[20ch] text-[1.4rem] sm:text-[1.7rem]">
                  Собрано и упаковано в Москве
                </p>
                <p className="mt-2 text-[0.9375rem] text-white/55">
                  Отгружаем в день заказа, если оформили до 16:00.
                </p>
              </div>
              <a
                href="#order"
                className="btn btn-light h-12 shrink-0 px-7 text-[0.9375rem]"
              >
                Купить за {priceRub(product.price)}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5. views + video ---------------- */

function ViewsSection() {
  return (
    <section id="views" className="border-t border-line">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="reveal">
          <Views />
        </div>
      </div>
      <div className="bg-ink text-white">
        <div className={`${wrap} py-20 sm:py-24`}>
          <div className="reveal mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="eyebrow eyebrow-accent">Видеообзор</p>
              <h2 className="display mt-4 max-w-[16ch] text-[2rem] sm:text-[2.8rem]">
                Четыре минуты вместо инструкции
              </h2>
            </div>
            <a
              href="#order"
              className="btn btn-light h-12 shrink-0 self-start px-7 text-[0.9375rem] sm:self-auto"
            >
              Купить за {priceRub(product.price)}
            </a>
          </div>
          <div className="reveal">
            <VideoBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6. reviews ---------------- */

function Reviews() {
  return (
    <section id="reviews" className="border-t border-line bg-cream">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <p className="eyebrow eyebrow-accent">Отзывы владельцев</p>
            <h2 className="display mt-4 max-w-[15ch] text-[2.2rem] sm:text-[3.2rem]">
              Коты, которые уже привыкли
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <span className="figure text-[2.6rem]">4,8</span>
            <div>
              <Stars n={5} />
              <p className="mono mt-2 text-[0.6875rem] tracking-[0.12em] text-faint uppercase">
                на основании 1 284 оценок
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-px border-t border-line-strong bg-line-strong sm:mt-16 lg:grid-cols-12">
          {reviews.map((r, i) => {
            const wide = i % 2 === 0;
            return (
              <article
                key={r.name}
                className={`reveal min-w-0 bg-cream p-7 sm:p-9 ${
                  wide ? "lg:col-span-7" : "lg:col-span-5"
                }`}
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="flex items-start gap-5">
                  <Image
                    src={r.photo}
                    alt={`Кот ${r.cat.split(",")[0]} дома`}
                    placeholder="blur"
                    sizes="112px"
                    className="h-20 w-20 shrink-0 object-cover sm:h-28 sm:w-28"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-[1.0625rem] font-semibold">
                        {r.name}
                      </span>
                      <span className="mono text-[0.75rem] text-faint">
                        {r.city}
                      </span>
                    </div>
                    <p className="mono mt-1 text-[0.75rem] text-accent">{r.cat}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <Stars n={r.rating} />
                      <span className="mono text-[0.6875rem] text-faint">
                        {r.date}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="mt-6 leading-relaxed text-ink-soft">{r.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7. delivery ---------------- */

function Delivery() {
  return (
    <section id="delivery" className="border-t border-line">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="reveal min-w-0 lg:col-span-7">
            <p className="eyebrow eyebrow-accent">Доставка и оплата</p>
            <h2 className="display mt-4 max-w-[16ch] text-[2.2rem] sm:text-[3rem]">
              Привезём быстрее, чем кот проголодается
            </h2>

            <div className="mt-12 border-t border-line">
              {delivery.map((d) => (
                <div
                  key={d.title}
                  className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-line py-5"
                >
                  <div className="min-w-0 basis-full sm:basis-auto">
                    <p className="text-[1.0625rem] font-semibold">{d.title}</p>
                    <p className="mt-1 max-w-[44ch] text-[0.875rem] text-muted">
                      {d.note}
                    </p>
                  </div>
                  <div className="mono flex shrink-0 items-baseline gap-5 text-[0.8125rem]">
                    <span className="text-muted">{d.time}</span>
                    <span className="text-[0.9375rem] font-medium text-accent">
                      {d.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="mono mt-12 border-b-2 border-ink pb-3 text-[0.75rem] tracking-[0.16em] uppercase">
              Как заплатить
            </h3>
            <ul className="mt-1">
              {payment.map((p) => (
                <li
                  key={p}
                  className="flex items-baseline gap-3 border-b border-line py-3.5 text-[0.9375rem]"
                >
                  <span className="text-accent">·</span>
                  <span className="min-w-0">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal min-w-0 lg:col-span-5">
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={goldenEating}
                alt="Кот ест сухой корм из стальной миски"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="h-full w-full object-cover"
              />
            </div>

            <h3 className="mono mt-10 border-b-2 border-ink pb-3 text-[0.75rem] tracking-[0.16em] uppercase">
              Частые вопросы
            </h3>
            <dl>
              {faq.map(([q, a]) => (
                <div key={q} className="border-b border-line py-5">
                  <dt className="text-[1rem] font-semibold">{q}</dt>
                  <dd className="mt-2 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
                    {a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="reveal mt-16">
          <BuyBand
            headline="Осталось 34 штуки из партии по этой цене"
            sub={`Скидка 22% действует до ${product.discountUntil}. Дальше — ${priceRub(product.priceOld)}.`}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8. order ---------------- */

function Order() {
  return (
    <section id="order" className="border-t border-line bg-cream">
      <div className={`${wrap} py-20 sm:py-28`}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="reveal min-w-0 lg:col-span-4">
            <p className="eyebrow eyebrow-accent">Оформление</p>
            <h2 className="display mt-4 text-[2.2rem] sm:text-[2.9rem]">
              Заказать NOMI&nbsp;S2
            </h2>
            <p className="mt-5 max-w-[34ch] leading-relaxed text-muted">
              Оставьте телефон — перезвоним за 15 минут, подтвердим адрес и
              способ оплаты. Предоплата не нужна.
            </p>

            <div className="mt-10 border-t border-line-strong pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="mono text-[0.75rem] tracking-[0.13em] text-faint uppercase">
                  Цена
                </span>
                <span className="mono text-[0.8125rem] text-faint line-through">
                  {priceRub(product.priceOld)}
                </span>
              </div>
              <div className="figure mt-3 text-[3rem] text-accent sm:text-[3.6rem]">
                {priceRub(product.price)}
              </div>
              <ul className="mt-6 space-y-2.5 text-[0.9375rem] text-ink-soft">
                <li>Гарантия 24 месяца</li>
                <li>14 дней на возврат</li>
                <li>Доставка от 1 дня, бесплатно</li>
                <li>Оплата после получения</li>
              </ul>
            </div>
          </div>

          <div className="reveal min-w-0 lg:col-span-8">
            <div className="border border-line-strong bg-white p-7 sm:p-10">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ variant }: { variant: "a" | "b" }) {
  return (
    <footer className="bg-ink text-white">
      <div className={`${wrap} py-14`}>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <span className="display text-[1.6rem]" style={{ letterSpacing: "-0.02em" }}>
              NOMI
            </span>
            <p className="mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-white/50">
              Умные кормушки и поилки для кошек. Москва, Дербеневская
              набережная&nbsp;7. Пн–Вс, 9:00–21:00.
            </p>
          </div>
          <div className="mono flex flex-col gap-2 text-[0.875rem] text-white/70 sm:text-right">
            <a href="tel:+74951234567" className="rule-link">
              +7 495 123-45-67
            </a>
            <a href="mailto:hello@nomi.example" className="rule-link">
              hello@nomi.example
            </a>
          </div>
        </div>
        <div className="mono mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-[0.6875rem] tracking-[0.1em] text-white/35 uppercase sm:flex-row sm:justify-between">
          <span>Демо-проект для портфолио. Бренд и цены вымышленные.</span>
          <span className="flex flex-wrap gap-x-5 gap-y-2">
            <span>Фотографии котов — Unsplash</span>
            <a
              href={variant === "a" ? "/hero-b" : "/"}
              className="rule-link text-white/60"
            >
              {variant === "a"
                ? "Вариант B первого экрана"
                : "Вариант A первого экрана"}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export function Sections({ variant }: { variant: "a" | "b" }) {
  return (
    <>
      <How />
      <Specs />
      <Box />
      <ViewsSection />
      <Reviews />
      <Delivery />
      <Order />
      <Footer variant={variant} />
    </>
  );
}
