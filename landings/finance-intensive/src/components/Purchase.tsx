"use client";

import { useId, useRef, useState } from "react";
import { event, faqNote, tickets } from "@/content";
import { SectionHead, Shell } from "./Section";

type Errors = Partial<Record<"name" | "email" | "phone" | "agree", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[a-zA-Zа-яА-Я]{2,}$/;

function digits(s: string) {
  return s.replace(/\D/g, "");
}

/* Russian plural for «место»: 1 место, 2–4 места, 5+ мест. */
function seatWord(n: number) {
  const tail = n % 100;
  if (tail >= 11 && tail <= 14) return "мест";
  const last = n % 10;
  if (last === 1) return "место";
  if (last >= 2 && last <= 4) return "места";
  return "мест";
}

/*
  Tickets and the order form live in one client island so that picking a tariff
  in the table carries straight into the form. There is no payment API here —
  the form validates locally and hands over an honest "what happens next".
*/
export default function Purchase() {
  const [tariff, setTariff] = useState<string>(tickets[1].id);
  const [values, setValues] = useState({ name: "", email: "", phone: "" });
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<null | { name: string; email: string }>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const chosen = tickets.find((t) => t.id === tariff) ?? tickets[0];

  function validate(): Errors {
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Как к вам обращаться?";
    if (!EMAIL.test(values.email.trim()))
      next.email = "Проверьте адрес — на него придёт ссылка на оплату";
    if (digits(values.phone).length < 11)
      next.phone = "Нужен номер из 11 цифр, например +7 921 000-00-00";
    if (!agree) next.agree = "Без согласия с офертой оформить не получится";
    return next;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = formRef.current?.querySelector<HTMLElement>(
        '[aria-invalid="true"]',
      );
      first?.focus();
      return;
    }
    setSent({ name: values.name.trim(), email: values.email.trim() });
  }

  function pick(id: string) {
    setTariff(id);
    document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* ================================================== ticket table == */}
      <section id="tickets" className="bg-ink-2 py-24 sm:py-32">
        <Shell>
          <SectionHead
            index="06"
            kicker="Билеты"
            title={<>Три тарифа, {event.seatsLeft} свободных мест</>}
            intro={
              <p>
                Разница только в том, где вы сидите и сколько личного внимания
                получаете. Программа, блокнот и питание одинаковые во всех
                тарифах.
              </p>
            }
          />

          <div className="mt-16 grid gap-px bg-line lg:grid-cols-3">
            {tickets.map((t) => {
              const active = t.id === tariff;
              return (
                <article
                  key={t.id}
                  className={`flex flex-col bg-ink p-7 transition-colors sm:p-8 ${
                    active ? "bg-ink-3" : ""
                  }`}
                >
                  <div
                    className={`h-[3px] w-full ${
                      t.highlight ? "bg-accent" : "bg-line-2"
                    }`}
                  />

                  <div className="mt-6 flex items-baseline justify-between gap-3">
                    <h3 className="display text-[1.6rem] text-text">
                      {t.name}
                    </h3>
                    {t.highlight ? (
                      <span className="label label-accent">берут чаще</span>
                    ) : null}
                  </div>

                  {/*
                    Reserved for two lines so the price baseline stays level
                    across all three columns regardless of how the summary wraps.
                  */}
                  <p className="mt-3 min-h-[2.75em] text-[0.9375rem] leading-snug text-faint">
                    {t.summary}
                  </p>

                  <p className="display-num mt-7 flex items-baseline gap-2 text-text">
                    <span className="text-[2.75rem]">{t.price}</span>
                    <span className="num text-lg text-faint">₽</span>
                  </p>

                  <p className="num mt-3 text-sm text-accent-soft">
                    осталось {t.seatsLeft} {seatWord(t.seatsLeft)}
                  </p>

                  <ul className="mt-7 grow border-t border-line">
                    {t.includes.map((i) => (
                      <li
                        key={i}
                        className="border-b border-line py-3 text-[0.9375rem] leading-snug text-muted"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => pick(t.id)}
                    className={`btn mt-8 w-full text-sm ${
                      t.highlight ? "" : "btn-ghost"
                    }`}
                    aria-pressed={active}
                  >
                    {active ? "Тариф выбран" : "Выбрать"}
                  </button>
                </article>
              );
            })}
          </div>

          <p className="mt-10 max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">
            {faqNote}
          </p>
        </Shell>
      </section>

      {/* ========================================================= form == */}
      <section id="order" className="py-24 sm:py-32">
        <Shell>
          <SectionHead
            index="07"
            kicker="Оформление"
            title={<>Забрать место</>}
            intro={
              <p>
                Оплата не проходит на этой странице. Вы оставляете заявку, мы
                присылаем ссылку на оплату и держим место сутки.
              </p>
            }
          />

          <div className="mt-16 grid gap-x-14 gap-y-12 lg:grid-cols-12">
            {/* ------------------------------------------------ summary -- */}
            <aside className="lg:col-span-4">
              <div className="border border-line bg-ink-2 p-7">
                <p className="label">Ваш заказ</p>
                <p className="display mt-4 text-[1.6rem] text-text">
                  {chosen.name}
                </p>
                <p className="display-num mt-4 flex items-baseline gap-2 text-accent">
                  <span className="text-[2.5rem]">{chosen.price}</span>
                  <span className="num text-base text-faint">₽</span>
                </p>
                <dl className="mt-7 border-t border-line">
                  {[
                    { k: "Дата", v: `${event.dateLong}` },
                    { k: "Время", v: event.time },
                    { k: "Адрес", v: "наб. Фонтанки, 24" },
                  ].map((r) => (
                    <div
                      key={r.k}
                      className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                    >
                      <dt className="label">{r.k}</dt>
                      <dd className="num text-right text-[0.875rem] text-muted">
                        {r.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

            {/* --------------------------------------------------- form -- */}
            <div className="lg:col-span-8">
              {sent ? (
                <div
                  className="border-t-2 border-accent bg-ink-2 p-8 sm:p-10"
                  role="status"
                  aria-live="polite"
                >
                  <p className="label label-accent">Заявка принята</p>
                  <h3 className="display mt-5 text-[clamp(1.5rem,3.2vw,2.2rem)] text-text">
                    {sent.name}, место за вами
                  </h3>
                  <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-muted">
                    Мы отправили письмо на{" "}
                    <span className="num text-text">{sent.email}</span> — в нём
                    ссылка на оплату тарифа «{chosen.name}» за {chosen.price} ₽.
                  </p>
                  <ul className="mt-8 border-t border-line">
                    {[
                      "Место держим 24 часа — до оплаты его никто не займёт.",
                      "После оплаты придёт билет с QR-кодом и схемой прохода во двор.",
                      "За два дня до интенсива напомним, какую выписку взять с собой.",
                    ].map((s, i) => (
                      <li
                        key={s}
                        className="flex gap-5 border-b border-line py-4 text-[0.9875rem] leading-relaxed text-muted"
                      >
                        <span className="num shrink-0 text-accent">
                          0{i + 1}
                        </span>
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(null);
                      setValues({ name: "", email: "", phone: "" });
                      setAgree(false);
                    }}
                    className="label link-rule label-bright mt-8"
                  >
                    Оформить ещё одно место
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate>
                  {/* ------------------------------------------ tariff -- */}
                  <fieldset>
                    <legend className="label">Тариф</legend>
                    <div className="mt-5 grid gap-px bg-line sm:grid-cols-3">
                      {tickets.map((t) => {
                        const active = t.id === tariff;
                        return (
                          <label
                            key={t.id}
                            className={`flex cursor-pointer flex-col gap-2 bg-ink p-5 transition-colors ${
                              active ? "bg-ink-3" : ""
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              <input
                                type="radio"
                                name="tariff"
                                value={t.id}
                                checked={active}
                                onChange={() => setTariff(t.id)}
                                className="sr-only"
                              />
                              <span
                                aria-hidden
                                className={`inline-block h-3 w-3 shrink-0 border ${
                                  active
                                    ? "border-accent bg-accent"
                                    : "border-line-2"
                                }`}
                              />
                              <span className="display text-[1.05rem] text-text">
                                {t.name}
                              </span>
                            </span>
                            <span className="num pl-6 text-sm text-muted">
                              {t.price} ₽
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  {/* ------------------------------------------ fields -- */}
                  <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    <Field
                      id={`${uid}-name`}
                      label="Имя и фамилия"
                      placeholder="Анна Петрова"
                      value={values.name}
                      error={errors.name}
                      autoComplete="name"
                      onChange={(v) => setValues((s) => ({ ...s, name: v }))}
                    />
                    <Field
                      id={`${uid}-phone`}
                      label="Телефон"
                      type="tel"
                      placeholder="+7 921 000-00-00"
                      value={values.phone}
                      error={errors.phone}
                      autoComplete="tel"
                      onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
                    />
                    <div className="sm:col-span-2">
                      <Field
                        id={`${uid}-email`}
                        label="Электронная почта"
                        type="email"
                        placeholder="anna@example.ru"
                        value={values.email}
                        error={errors.email}
                        autoComplete="email"
                        onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                      />
                    </div>
                  </div>

                  {/* ------------------------------------------- agree -- */}
                  <div className="mt-10">
                    <label className="flex cursor-pointer items-start gap-4">
                      <input
                        type="checkbox"
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)}
                        aria-invalid={errors.agree ? "true" : undefined}
                        aria-describedby={
                          errors.agree ? `${uid}-agree-err` : undefined
                        }
                        className="sr-only"
                      />
                      <span
                        aria-hidden
                        className={`mt-1 inline-flex h-4 w-4 shrink-0 items-center justify-center border ${
                          agree ? "border-accent bg-accent" : "border-line-2"
                        }`}
                      >
                        {agree ? (
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            aria-hidden
                          >
                            <path
                              d="M1 4l2.5 2.5L9 1"
                              stroke="var(--ink)"
                              strokeWidth="1.8"
                            />
                          </svg>
                        ) : null}
                      </span>
                      <span className="text-[0.9375rem] leading-relaxed text-muted">
                        Согласен с{" "}
                        <span className="link-rule text-text">офертой</span> и
                        обработкой персональных данных. Рассылок не будет —
                        только письма про этот интенсив.
                      </span>
                    </label>
                    {errors.agree ? (
                      <p
                        id={`${uid}-agree-err`}
                        className="num mt-3 pl-8 text-sm text-accent-soft"
                      >
                        {errors.agree}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <button type="submit" className="btn text-base">
                      Забрать место за {chosen.price} ₽
                    </button>
                    <p className="label">Оплата по ссылке из письма</p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </Shell>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        className="field mt-3"
      />
      {error ? (
        <p id={`${id}-err`} className="num mt-2 text-sm text-accent-soft">
          {error}
        </p>
      ) : null}
    </div>
  );
}
