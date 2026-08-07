"use client";

import { useRef, useState } from "react";
import { studio, timeSlots } from "@/content";

type Values = { name: string; phone: string; pet: string; slot: string };
type Errors = Partial<Record<keyof Values, string>>;

const EMPTY: Values = { name: "", phone: "", pet: "", slot: "" };

/** Russian mobile mask. Returns "" for empty input so the field can be cleared. */
function formatPhone(raw: string): string {
  let digits = raw.replace(/\D/g, "");
  if (!digits) return "";
  if (digits[0] === "8" || digits[0] === "9") {
    digits = digits[0] === "8" ? "7" + digits.slice(1) : "7" + digits;
  }
  if (digits[0] !== "7") digits = "7" + digits;
  digits = digits.slice(0, 11);

  const rest = digits.slice(1);
  let out = "+7";
  if (rest.length) out += ` (${rest.slice(0, 3)}`;
  if (rest.length >= 3) out += ")";
  if (rest.length > 3) out += ` ${rest.slice(3, 6)}`;
  if (rest.length > 6) out += `-${rest.slice(6, 8)}`;
  if (rest.length > 8) out += `-${rest.slice(8, 10)}`;
  return out;
}

function validate(values: Values): Errors {
  const errors: Errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Как к вам обращаться? Хотя бы две буквы.";
  }
  if (values.phone.replace(/\D/g, "").length !== 11) {
    errors.phone = "Нужны все 10 цифр после +7.";
  }
  if (values.pet.trim().length < 2) {
    errors.pet = "Напишите породу и кличку — подберём мастера.";
  }
  if (!values.slot) {
    errors.slot = "Выберите, когда вам удобно.";
  }

  return errors;
}

export default function BookingForm() {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Values | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear the complaint as soon as the field is being fixed.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    const firstBad = (Object.keys(found) as (keyof Values)[])[0];
    if (firstBad) {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstBad}"]`)
        ?.focus();
      return;
    }

    setSent(values);
    setValues(EMPTY);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-marigold bg-marigold/12 p-6 sm:p-8">
        <p className="eyebrow text-marigold-deep">Заявка принята</p>
        <h3 className="display-md mt-4 text-[1.75rem] sm:text-[2rem]">
          Записали, {sent.name.trim()}
        </h3>
        {/* The pet name comes from the visitor and cannot be declined, so the
            sentence is built to keep it in the nominative. */}
        <p className="mt-4 text-[1rem] leading-relaxed text-ink-soft">
          Позвоним на{" "}
          <span className="tnum font-medium text-ink">{sent.phone}</span> в
          течение 15 минут в рабочие часы, подтвердим окно{" "}
          <span className="text-ink">«{sent.slot.toLowerCase()}»</span> и
          подберём мастера. Питомец:{" "}
          <span className="text-ink">{sent.pet.trim()}</span>.
        </p>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted">
          Предоплату не берём. Если планы изменятся — просто скажите об этом в
          звонке.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={studio.telegramHref}
            className="btn btn-primary h-12 px-6 text-[0.9375rem]"
          >
            Написать в Telegram
          </a>
          <button
            type="button"
            onClick={() => setSent(null)}
            className="btn btn-ghost h-12 px-6 text-[0.9375rem]"
          >
            Записать ещё одного
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-paper p-5 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="booking-name"
          name="name"
          label="Как вас зовут"
          placeholder="Марина"
          value={values.name}
          error={errors.name}
          autoComplete="name"
          onChange={(v) => set("name", v)}
        />
        <Field
          id="booking-phone"
          name="phone"
          label="Телефон"
          placeholder="+7 (999) 123-45-67"
          value={values.phone}
          error={errors.phone}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          className="tnum"
          onChange={(v) => set("phone", formatPhone(v))}
        />
      </div>

      <div className="mt-5">
        <Field
          id="booking-pet"
          name="pet"
          label="Питомец: порода и кличка"
          placeholder="Ши-тцу Бусинка, 4 года"
          value={values.pet}
          error={errors.pet}
          onChange={(v) => set("pet", v)}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="booking-slot"
          className="mb-2 block text-[0.875rem] font-medium text-ink"
        >
          Когда удобно прийти
        </label>
        <select
          id="booking-slot"
          name="slot"
          value={values.slot}
          onChange={(e) => set("slot", e.target.value)}
          aria-invalid={Boolean(errors.slot)}
          aria-describedby={errors.slot ? "booking-slot-error" : undefined}
          className={`field field-select ${errors.slot ? "field-error" : ""} ${
            values.slot ? "text-ink" : "text-faint"
          }`}
        >
          <option value="">Выберите удобное окно</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>
              {slot}
            </option>
          ))}
        </select>
        {errors.slot ? (
          <p id="booking-slot-error" className="mt-2 text-[0.8125rem] text-rust">
            {errors.slot}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-7 h-[54px] w-full text-[1rem]"
      >
        Записаться на визит
      </button>

      <p className="mt-4 text-[0.8125rem] leading-relaxed text-muted">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
        Предоплату не берём и в рассылки не добавляем.
      </p>
    </form>
  );
}

function Field({
  id,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  type = "text",
  inputMode,
  autoComplete,
  className = "",
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  inputMode?: "tel" | "text";
  autoComplete?: string;
  className?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.875rem] font-medium text-ink"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`field ${error ? "field-error" : ""} ${className}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-[0.8125rem] text-rust">
          {error}
        </p>
      ) : null}
    </div>
  );
}
