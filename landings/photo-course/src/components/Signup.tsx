import Image from "next/image";
import SectionHead from "./SectionHead";
import SignupForm from "./SignupForm";
import { course } from "@/content";

export default function Signup() {
  return (
    <section id="signup" className="bg-ink text-paper">
      <div className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="07"
          label={`Запись · ${course.streamNo}`}
          tone="paper"
          title={
            <>
              Через шесть недель у вас будет девять кадров,{" "}
              <em className="text-paper/60">которые захочется распечатать</em>
            </>
          }
          lead={`Старт ${course.start}. Группу закрываем, когда наберётся 40 человек — куратор физически не прочитает больше.`}
        />

        <div className="mt-12 grid gap-y-12 md:mt-16 lg:grid-cols-12 lg:gap-x-14">
          <div className="reveal lg:col-span-5">
            <figure>
              <div className="print relative aspect-[4/5] bg-ink-2">
                <Image
                  src="/photos/cta.jpg"
                  alt="Девушка снимает улицу на телефон, держа его над головой"
                  fill
                  sizes="(min-width: 1024px) 36vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3.5 text-[0.8125rem] leading-relaxed text-paper/45">
                Тимур, четвёртая неделя. Снимал жену, снимающую город, — и получилось лучше, чем
                город.
              </figcaption>
            </figure>
          </div>

          <div className="reveal lg:col-span-7">
            <SignupForm />

            <dl className="mt-12 grid gap-y-5 border-t border-paper/20 pt-7 sm:grid-cols-3 sm:gap-x-8">
              {[
                { term: "Старт", value: course.start },
                { term: "Формат", value: "6 недель · 12 уроков" },
                { term: "Возврат", value: "14 дней без вопросов" },
              ].map((item) => (
                <div key={item.term}>
                  <dt className="eyebrow eyebrow-paper">{item.term}</dt>
                  <dd className="mt-2.5 text-[0.9375rem] text-paper/80">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
