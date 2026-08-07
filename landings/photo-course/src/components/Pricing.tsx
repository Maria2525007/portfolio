import SectionHead from "./SectionHead";
import { plans } from "@/content";

export default function Pricing() {
  return (
    <section id="price" className="border-y border-line bg-paper-2/50">
      <div className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="05"
          label="Стоимость"
          title={
            <>
              Разница между тарифами — не в уроках,{" "}
              <em className="text-muted">а в том, сколько с вами разговаривают</em>
            </>
          }
          lead="Видеоуроки во всех трёх одинаковые. Платите вы за обратную связь: за письменный разбор или за живой созвон."
        />

        <div className="mt-12 grid items-start gap-6 md:mt-16 lg:grid-cols-3">
          {plans.map((plan) => {
            const featured = plan.featured === true;

            return (
              <div
                key={plan.id}
                className={
                  featured
                    ? "reveal relative flex flex-col bg-ink p-7 text-paper md:p-9 lg:-mt-8 lg:pb-11"
                    : "reveal flex flex-col border border-line bg-paper p-7 md:p-9"
                }
              >
                {featured && (
                  <span className="eyebrow eyebrow-on-accent absolute -top-3 left-7 bg-accent px-2.5 py-1.5 md:left-9">
                    Берут чаще всего
                  </span>
                )}

                <div className="flex items-baseline justify-between gap-4">
                  <h3
                    className={`serif text-[1.6rem] leading-none ${featured ? "text-paper" : "text-ink"}`}
                  >
                    {plan.name}
                  </h3>
                  {plan.seats && <span className="eyebrow eyebrow-accent">{plan.seats}</span>}
                </div>

                <div className="mt-6 flex items-baseline gap-3">
                  <span
                    className={`display numerals text-[2.4rem] leading-none md:text-[2.8rem] ${
                      featured ? "text-paper" : "text-ink"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.old && (
                    <span className="numerals text-[0.9375rem] text-paper/45 line-through">
                      {plan.old}
                    </span>
                  )}
                </div>

                <p
                  className={`mt-5 text-[0.9375rem] leading-relaxed ${
                    featured ? "text-paper/70" : "text-muted"
                  }`}
                >
                  {plan.summary}
                </p>

                <ul
                  className={`mt-7 flex-1 space-y-3.5 border-t pt-7 ${
                    featured ? "border-paper/20" : "border-line"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-baseline gap-3 text-[0.9375rem] leading-snug ${
                        featured ? "text-paper/85" : "text-ink-2"
                      }`}
                    >
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${
                          featured ? "bg-accent" : "bg-line"
                        }`}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#signup"
                  className={featured ? "btn mt-9 w-full" : "btn btn-ghost mt-9 w-full"}
                >
                  Выбрать «{plan.name}»
                </a>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-9 max-w-[62ch] text-[0.875rem] leading-relaxed text-faint">
          Можно оплатить частями: три платежа без процентов. Юрлицам и самозанятым выставляем счёт —
          напишите в форме внизу, что нужны документы.
        </p>
      </div>
    </section>
  );
}
