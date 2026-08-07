import Image from "next/image";
import { takeaways } from "@/content";
import { SectionHead, Shell } from "./Section";

/*
  Deliberately not a grid of five equal cards. The first item spans wide next to
  the photograph, the rest run as a numbered ledger — so the eye lands on the
  concrete artefact you carry home rather than on a tidy pattern.
*/
export default function Takeaways() {
  const [lead, ...rest] = takeaways;

  return (
    <section id="takeaways" className="bg-ink-2 py-24 sm:py-32">
      <Shell>
        <SectionHead
          index="04"
          kicker="Что заберёте с собой"
          title={<>Пять вещей, а не «заряд мотивации»</>}
          intro={
            <p>
              Всё перечисленное вы заполняете руками в течение дня. Ничего из
              этого не высылается «потом на почту» — забираете в тот же вечер.
            </p>
          }
        />

        <div className="mt-16 grid gap-x-14 gap-y-12 lg:grid-cols-12 reveal">
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full border border-line">
              <Image
                src="/notebook.jpg"
                alt="Участник заполняет рабочий блокнот во время блока"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="photo-ink object-cover"
              />
            </div>
            <figcaption className="label mt-4">
              Рабочий блокнот интенсива · 96 страниц
            </figcaption>
          </figure>

          <div className="lg:col-span-7">
            <article className="border-t-2 border-accent pt-6">
              <div className="flex items-baseline gap-4">
                <span className="display-num text-2xl text-accent">
                  {lead.num}
                </span>
                <h3 className="display text-[clamp(1.3rem,2.6vw,1.85rem)] text-text">
                  {lead.title}
                </h3>
              </div>
              <p className="mt-4 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted">
                {lead.body}
              </p>
            </article>

            <div className="mt-10 border-b border-line">
              {rest.map((t) => (
                <article
                  key={t.num}
                  className="ledger-row grid gap-x-6 gap-y-2 py-6 sm:grid-cols-[auto_1fr]"
                >
                  <span className="display-num text-xl text-faint">
                    {t.num}
                  </span>
                  <div>
                    <h3 className="display text-[1.15rem] text-text">
                      {t.title}
                    </h3>
                    <p className="mt-2 max-w-[58ch] text-[0.9875rem] leading-relaxed text-muted">
                      {t.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}
