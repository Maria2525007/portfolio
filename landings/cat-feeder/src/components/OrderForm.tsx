"use client";

import { useId, useState } from "react";
import { priceRub, product } from "@/content";

type Errors = Partial<Record<"name" | "phone" | "city" | "agree", string>>;

const shipping = [
  { id: "courier", label: "Курьер, Москва и Петербург", note: "1–2 дня · бесплатно" },
  { id: "cdek", label: "СДЭК, пункт выдачи", note: "2–5 дней · бесплатно" },
  { id: "post", label: "Почта России", note: "5–12 дней · 390 ₽" },
];

const shippingCost: Record<string, number> = { courier: 0, cdek: 0, post: 390 };

/* +7 (999) 123-45-67 */
function formatPhone(raw: string) {
  let d = raw.replace(/\D/g, "");
  if (d.startsWith("8")) d = "7" + d.slice(1);
  if (!d.startsWith("7")) d = "7" + d;
  d = d.slice(0, 11);
  const p = d.slice(1);
  let out = "+7";
  if (p.length) out += ` (${p.slice(0, 3)}`;
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += ` ${p.slice(3, 6)}`;
  if (p.length > 6) out += `-${p.slice(6, 8)}`;
  if (p.length > 8) out += `-${p.slice(8, 10)}`;
  return out;
}

export function OrderForm() {
  const uid = useId();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [method, setMethod] = useState("courier");
  const [qty, setQty] = useState(1);
  const [comment, setComment] = useState("");
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [order, setOrder] = useState<string | null>(null);

  const total = product.price * qty + shippingCost[method];

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Напишите, как к вам обращаться";
    if (phone.replace(/\D/g, "").length !== 11)
      e.phone = "Нужны все 10 цифр после +7";
    if (city.trim().length < 2) e.city = "Укажите город доставки";
    if (!agree) e.agree = "Без согласия мы не сможем вам перезвонить";
    return e;
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      document
        .querySelector<HTMLElement>("[data-invalid='true']")
        ?.focus({ preventScroll: false });
      return;
    }
    // Демо-страница: заказ никуда не уходит, номер собирается на клиенте.
    setOrder("NM-" + String(Math.floor(1000 + Math.random() * 9000)));
  }

  if (order) {
    return (
      <div className="border border-accent/30 bg-accent-wash p-7 sm:p-10">
        <div className="flex items-start gap-4">
          <svg
            viewBox="0 0 32 32"
            className="mt-1 h-8 w-8 shrink-0 text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx={16} cy={16} r={13} />
            <path d="m10 16.5 4 4 8-9" />
          </svg>
          <div className="min-w-0">
            <h3 className="display-md text-[1.5rem] sm:text-[1.9rem]">
              Заявка №&nbsp;{order} принята
            </h3>
            <p className="mt-3 max-w-[48ch] leading-relaxed text-ink-soft">
              {name.trim()}, менеджер перезвонит на {phone} в течение 15 минут в
              рабочее время — подтвердит адрес и способ оплаты. Кормушка уже
              зарезервирована на складе.
            </p>
            <dl className="mono mt-6 grid gap-x-8 gap-y-2 border-t border-accent/20 pt-5 text-[0.8125rem] sm:grid-cols-2">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Товар</dt>
                <dd className="text-right">
                  {product.model} × {qty}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Доставка</dt>
                <dd className="text-right">
                  {shipping.find((s) => s.id === method)?.label}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Город</dt>
                <dd className="text-right">{city.trim()}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">К оплате</dt>
                <dd className="text-right font-medium">{priceRub(total)}</dd>
              </div>
            </dl>
            <button
              type="button"
              onClick={() => setOrder(null)}
              className="rule-link mt-6 text-[0.9375rem] font-medium text-accent"
            >
              Оформить ещё одну
            </button>
          </div>
        </div>
      </div>
    );
  }

  const field =
    "mt-2 w-full border bg-white px-4 py-3 text-[1rem] outline-none transition-colors placeholder:text-faint focus:border-ink";

  return (
    <form onSubmit={submit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label
            htmlFor={`${uid}-name`}
            className="eyebrow block text-ink-soft"
          >
            Как вас зовут
          </label>
          <input
            id={`${uid}-name`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            data-invalid={Boolean(errors.name)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            placeholder="Ирина"
            autoComplete="name"
            className={`${field} ${errors.name ? "border-accent" : "border-line-strong"}`}
          />
          {errors.name && (
            <p id={`${uid}-name-err`} className="mt-2 text-[0.8125rem] text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div className="min-w-0">
          <label htmlFor={`${uid}-phone`} className="eyebrow block text-ink-soft">
            Телефон
          </label>
          <input
            id={`${uid}-phone`}
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            onFocus={() => !phone && setPhone("+7 (")}
            data-invalid={Boolean(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
            placeholder="+7 (900) 000-00-00"
            inputMode="tel"
            autoComplete="tel"
            className={`${field} mono ${errors.phone ? "border-accent" : "border-line-strong"}`}
          />
          {errors.phone && (
            <p id={`${uid}-phone-err`} className="mt-2 text-[0.8125rem] text-accent">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="min-w-0">
          <label htmlFor={`${uid}-city`} className="eyebrow block text-ink-soft">
            Город
          </label>
          <input
            id={`${uid}-city`}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            data-invalid={Boolean(errors.city)}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? `${uid}-city-err` : undefined}
            placeholder="Казань"
            autoComplete="address-level2"
            className={`${field} ${errors.city ? "border-accent" : "border-line-strong"}`}
          />
          {errors.city && (
            <p id={`${uid}-city-err`} className="mt-2 text-[0.8125rem] text-accent">
              {errors.city}
            </p>
          )}
        </div>

        <div className="min-w-0">
          <span className="eyebrow block text-ink-soft">Сколько кормушек</span>
          <div className="mt-2 flex h-[50px] w-full max-w-[190px] items-center justify-between border border-line-strong bg-white">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Убрать одну"
              className="h-full w-12 text-[1.25rem] text-muted transition-colors hover:text-ink"
            >
              −
            </button>
            <span className="figure text-[1.15rem]">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => Math.min(5, q + 1))}
              aria-label="Добавить одну"
              className="h-full w-12 text-[1.25rem] text-muted transition-colors hover:text-ink"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <fieldset className="min-w-0">
        <legend className="eyebrow text-ink-soft">Доставка</legend>
        <div className="mt-2 grid gap-px border border-line-strong bg-line-strong">
          {shipping.map((s) => (
            <label
              key={s.id}
              className={`flex cursor-pointer items-center gap-3 px-4 py-3.5 transition-colors ${
                method === s.id ? "bg-accent-wash" : "bg-white hover:bg-cream/50"
              }`}
            >
              <input
                type="radio"
                name="shipping"
                value={s.id}
                checked={method === s.id}
                onChange={() => setMethod(s.id)}
                className="h-4 w-4 shrink-0 accent-[var(--accent)]"
              />
              <span className="min-w-0 flex-1 text-[0.9375rem] font-medium">
                {s.label}
              </span>
              <span className="mono shrink-0 text-[0.75rem] text-muted">
                {s.note}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="min-w-0">
        <label htmlFor={`${uid}-note`} className="eyebrow block text-ink-soft">
          Комментарий — необязательно
        </label>
        <textarea
          id={`${uid}-note`}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={2}
          placeholder="Например: домофон не работает, позвоните заранее"
          className={`${field} resize-y border-line-strong`}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          data-invalid={Boolean(errors.agree)}
          aria-invalid={Boolean(errors.agree)}
          className="mt-1 h-4 w-4 shrink-0 accent-[var(--accent)]"
        />
        <span className="text-[0.875rem] leading-relaxed text-muted">
          Согласен на обработку персональных данных и получение звонка по заказу.
          {errors.agree && (
            <span className="mt-1 block text-accent">{errors.agree}</span>
          )}
        </span>
      </label>

      <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="eyebrow">Итого с доставкой</span>
          <div className="figure mt-2 text-[2rem] sm:text-[2.4rem]">
            {priceRub(total)}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary h-[54px] px-8 text-[1rem] sm:min-w-[260px]"
        >
          Оформить заказ
        </button>
      </div>
    </form>
  );
}
