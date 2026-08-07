import Image from "next/image";
import SectionHead from "./SectionHead";
import { pains } from "@/content";

export default function Pains() {
  return (
    <section id="pains" className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
      <SectionHead
        index="01"
        label="Знакомо?"
        title={
          <>
            Дело почти никогда не в телефоне. <em className="text-muted">Обычно — в свете.</em>
          </>
        }
        lead="Четыре ситуации, из-за которых люди приходят на курс. Ниже — что мы с ними делаем."
      />

      <div className="mt-12 grid gap-x-12 md:mt-16 lg:grid-cols-12">
        <ul className="lg:col-span-8">
          {pains.map((pain, index) => (
            <li
              key={pain.quote}
              className="reveal grid gap-x-8 gap-y-3 border-t border-line py-8 sm:grid-cols-[3.5rem_1fr] md:py-9"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="eyebrow numerals pt-2.5">{`0${index + 1}`}</span>
              <div>
                <p className="serif text-[1.35rem] leading-snug text-balance text-ink md:text-[1.6rem]">
                  «{pain.quote}»
                </p>
                <p className="mt-3.5 max-w-[54ch] text-[0.9375rem] leading-relaxed text-muted">
                  {pain.answer}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <figure className="reveal mt-12 lg:col-span-4 lg:mt-0 lg:pt-8">
          <div className="print relative aspect-[4/3]">
            <Image
              src="/photos/pain.jpg"
              alt="Тусклый кадр в комнате: серые тона, потерянные детали"
              fill
              sizes="(min-width: 1024px) 28vw, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3.5 text-[0.8125rem] leading-relaxed text-faint">
            Так выглядит вечер дома, если снимать на автомате и не трогать экспозицию. Свет в комнате
            был — телефон его не увидел.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
