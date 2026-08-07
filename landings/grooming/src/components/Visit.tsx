import Image from "next/image";
import { visitSteps } from "@/content";

export default function Visit() {
  return (
    <section id="visit" className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="reveal max-w-[54ch]">
          <p className="eyebrow">Как проходит визит</p>
          <h2 className="display-md mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
            Четыре шага, и на каждом вы знаете, что происходит
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Хозяева боятся не машинки. Боятся оставить своего у чужих людей и
            два часа не знать ничего. Поэтому мы показываем всё.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
          {visitSteps.map((step, i) => (
            <li
              key={step.num}
              className={`reveal ${i % 2 === 1 ? "lg:mt-14" : ""}`}
            >
              <div className="arch-sm relative aspect-square bg-sand">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
                  className="object-cover"
                />
              </div>

              <div className="mt-6 flex items-baseline gap-3 border-t-2 border-ink pt-4">
                <span className="lnum display-md text-[1.5rem] text-marigold-deep">
                  {step.num}
                </span>
                <h3 className="display-md text-[1.25rem] text-ink">
                  {step.title}
                </h3>
              </div>

              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
