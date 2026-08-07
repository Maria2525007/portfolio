import SectionHead from "./SectionHead";
import { faq } from "@/content";

/**
 * Native <details> so the answers exist in the DOM without JS and stay
 * findable by browser search. The sign is a plus that rotates into a cross —
 * globals.css owns the open state.
 */
export default function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
      <SectionHead
        index="06"
        label="Прежде чем платить"
        title={
          <>
            Пять вопросов, которые нам задают{" "}
            <em className="text-muted">до того, как решиться</em>
          </>
        }
        lead="Включая неудобные. Если ответа не хватило — спросите в форме ниже, отвечаем в тот же день."
      />

      <div className="mt-10 md:mt-14">
        {faq.map((item, index) => (
          <details
            key={item.q}
            className="reveal group border-t border-line"
            style={{ transitionDelay: `${index * 55}ms` }}
          >
            <summary className="flex items-start gap-5 py-7 md:gap-8 md:py-8">
              <span className="eyebrow numerals shrink-0 pt-2.5 md:pt-3.5">{`0${index + 1}`}</span>

              <h3 className="serif max-w-[52ch] text-[1.25rem] leading-snug text-balance text-ink transition-colors duration-200 group-hover:text-accent md:text-[1.65rem]">
                {item.q}
              </h3>

              <span
                className="faq-sign relative mt-2 ml-auto block h-4 w-4 shrink-0 text-accent transition-transform duration-300 ease-out md:mt-3.5"
                aria-hidden="true"
              >
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
              </span>
            </summary>

            <div className="grid gap-8 pb-9 md:grid-cols-[3.5rem_1fr] md:pb-10">
              <div aria-hidden="true" className="hidden md:block" />
              <p className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted md:text-[1rem]">
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div className="reveal mt-10 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-baseline sm:justify-between md:mt-12">
        <p className="max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
          Остался вопрос, которого здесь нет? Напишите его прямо в форме записи — я читаю все
          и отвечаю сама.
        </p>
        <a href="#signup" className="rule-link shrink-0 text-[0.9375rem] font-medium text-accent">
          Задать вопрос и записаться
        </a>
      </div>
    </section>
  );
}
