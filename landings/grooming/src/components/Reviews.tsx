import { reviews } from "@/content";

export default function Reviews() {
  return (
    <section className="bg-paper py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <div className="max-w-[46ch]">
            <p className="eyebrow">Отзывы</p>
            <h2 className="display-md mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
              Что пишут после первого визита
            </h2>
          </div>
          <p className="tnum text-[0.9375rem] text-ink-soft">
            <span className="lnum display-md text-[1.5rem] text-ink">4,9</span>{" "}
            из 5
            — 312 оценок на картах
          </p>
        </div>

        <ul className="mt-12 grid gap-x-14 gap-y-12 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <li
              key={review.name}
              className={`reveal border-t-2 border-ink pt-5 ${
                i % 2 === 1 ? "sm:mt-16" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="display block text-[2.5rem] leading-[0.6] text-marigold"
              >
                «
              </span>
              <blockquote className="mt-3 text-[1.0625rem] leading-relaxed text-ink-soft sm:text-[1.125rem]">
                {review.text}
              </blockquote>
              <p className="mt-5 text-[0.9375rem] text-ink">
                <span className="font-semibold">{review.name}</span>
                <span className="text-muted"> · {review.pet}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
