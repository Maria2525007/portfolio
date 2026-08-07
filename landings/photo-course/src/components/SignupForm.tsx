"use client";

import { useId, useState } from "react";
import { plans } from "@/content";

type Field = "name" | "contact" | "consent";
type Errors = Partial<Record<Field, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * No backend by design: this is a portfolio piece, so the form validates on
 * the client and switches to a success panel. Nothing is sent anywhere and
 * the success copy says so.
 */
function validate(name: string, contact: string, consent: boolean): Errors {
  const errors: Errors = {};

  if (name.trim().length < 2) {
    errors.name = "Как к вам обращаться?";
  }

  const value = contact.trim();
  const digits = value.replace(/\D/g, "");
  if (value.length === 0) {
    errors.contact = "Оставьте телефон или почту — иначе не сможем ответить";
  } else if (!EMAIL.test(value) && digits.length < 10) {
    errors.contact = "Похоже на опечатку. Нужен e-mail или номер из 10–11 цифр";
  }

  if (!consent) {
    errors.consent = "Без согласия на обработку данных мы не можем записать вас";
  }

  return errors;
}

export default function SignupForm() {
  const id = useId();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [plan, setPlan] = useState("curator");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const chosen = plans.find((item) => item.id === plan);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(name, contact, consent);
    setErrors(found);
    if (Object.keys(found).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="border-t border-paper/25 pt-9">
        <p className="eyebrow eyebrow-accent">Заявка принята</p>

        <h3 className="display mt-6 text-[clamp(2.1rem,5vw,3.4rem)] text-paper">
          Место за вами, {name.trim().split(/\s+/)[0]}
        </h3>

        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-paper/75">
          Тариф «{chosen?.name}». В течение дня я напишу на{" "}
          <span className="text-paper">{contact.trim()}</span> — пришлю ссылку на оплату и добавлю
          вас в чат потока. Первый урок откроется 6 октября в 10:00.
        </p>

        <ol className="mt-9 space-y-4 border-t border-paper/20 pt-7">
          {[
            "Отвечаю на вашу заявку и присылаю счёт",
            "Вы оплачиваете любым способом — целиком или тремя частями",
            "Приходит доступ в кабинет и приглашение в чат",
          ].map((step, index) => (
            <li key={step} className="flex items-baseline gap-4 text-[0.9375rem] text-paper/70">
              <span className="eyebrow eyebrow-accent numerals shrink-0">{`0${index + 1}`}</span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-9 flex flex-wrap items-baseline gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setName("");
              setContact("");
              setNote("");
              setConsent(false);
              setErrors({});
            }}
            className="rule-link text-[0.9375rem] text-paper/70 hover:text-paper"
          >
            Записать ещё одного человека
          </button>
          <span className="text-[0.8125rem] text-paper/40">
            Демонстрационная форма: данные никуда не уходят.
          </span>
        </div>
      </div>
    );
  }

  const fieldClass =
    "w-full border-b border-paper/25 bg-transparent pt-2 pb-3 text-[1.0625rem] text-paper transition-colors duration-200 placeholder:text-paper/30 hover:border-paper/45 focus:border-accent focus:outline-none";

  return (
    <form noValidate onSubmit={handleSubmit} className="border-t border-paper/25 pt-9">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="eyebrow eyebrow-paper mb-3 block">
            Как вас зовут
          </label>
          <input
            id={`${id}-name`}
            name="name"
            type="text"
            autoComplete="given-name"
            placeholder="Марина"
            value={name}
            onChange={(event) => setName(event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
            className={fieldClass}
          />
          {errors.name && (
            <p id={`${id}-name-error`} role="alert" className="mt-2.5 text-[0.8125rem] text-accent">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={`${id}-contact`} className="eyebrow eyebrow-paper mb-3 block">
            Телефон или почта
          </label>
          <input
            id={`${id}-contact`}
            name="contact"
            type="text"
            inputMode="email"
            autoComplete="email"
            placeholder="marina@mail.ru"
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            aria-invalid={errors.contact ? true : undefined}
            aria-describedby={errors.contact ? `${id}-contact-error` : undefined}
            className={fieldClass}
          />
          {errors.contact && (
            <p
              id={`${id}-contact-error`}
              role="alert"
              className="mt-2.5 text-[0.8125rem] text-accent"
            >
              {errors.contact}
            </p>
          )}
        </div>
      </div>

      <fieldset className="mt-10">
        <legend className="eyebrow eyebrow-paper mb-4">Какой тариф</legend>
        <div className="flex flex-wrap gap-2.5">
          {plans.map((item) => (
            <label key={item.id} className="cursor-pointer">
              <input
                type="radio"
                name="plan"
                value={item.id}
                checked={plan === item.id}
                onChange={() => setPlan(item.id)}
                className="peer sr-only"
              />
              <span className="numerals block border border-paper/25 px-4 py-2.5 text-[0.9375rem] text-paper/70 transition-colors duration-200 peer-hover:border-paper/50 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent peer-checked:border-accent peer-checked:bg-accent peer-checked:text-on-accent">
                {item.name} · {item.price}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-10">
        <label htmlFor={`${id}-note`} className="eyebrow eyebrow-paper mb-3 block">
          Что не получается снимать <span className="normal-case tracking-normal">(необязательно)</span>
        </label>
        <textarea
          id={`${id}-note`}
          name="note"
          rows={2}
          placeholder="Вечером дома всё тёмное и жёлтое, а днём — плоское"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          className={`${fieldClass} resize-none leading-relaxed`}
        />
      </div>

      <div className="mt-9">
        <label htmlFor={`${id}-consent`} className="flex cursor-pointer items-start gap-3.5">
          <input
            id={`${id}-consent`}
            name="consent"
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${id}-consent-error` : undefined}
            className="peer sr-only"
          />
          <span
            className="mt-0.5 flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center border border-paper/35 transition-colors duration-200 peer-checked:border-accent peer-checked:bg-accent peer-checked:[&>svg]:opacity-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent"
            aria-hidden="true"
          >
            <svg
              width="11"
              height="9"
              viewBox="0 0 11 9"
              fill="none"
              className="text-on-accent opacity-0 transition-opacity duration-200"
            >
              <path
                d="M1 4.6 3.9 7.5 10 1.2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-[0.875rem] leading-relaxed text-paper/60">
            Согласна на обработку данных и получение писем о курсе. Отписаться можно одним кликом.
          </span>
        </label>
        {errors.consent && (
          <p
            id={`${id}-consent-error`}
            role="alert"
            className="mt-2.5 pl-[1.875rem] text-[0.8125rem] text-accent"
          >
            {errors.consent}
          </p>
        )}
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
        <button type="submit" className="btn w-full sm:w-auto">
          Записаться на поток
        </button>
        <p className="text-[0.8125rem] leading-relaxed text-paper/45">
          Ни к чему не обязывает: сначала письмо, оплата — потом.
        </p>
      </div>
    </form>
  );
}
