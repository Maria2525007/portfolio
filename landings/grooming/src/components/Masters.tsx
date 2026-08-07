import Image from "next/image";
import { masters } from "@/content";

export default function Masters() {
  return (
    <section id="masters" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="max-w-[46ch]">
            <p className="eyebrow">Мастера</p>
            <h2 className="display-md mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
              Три человека, которым вы отдаёте своего
            </h2>
          </div>
          <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-soft">
            Мастера не меняются от визита к визиту: записываетесь к конкретному
            человеку, и он ведёт вашего питомца дальше.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {masters.map((master, i) => (
            <li
              key={master.name}
              className={`reveal ${i === 1 ? "lg:mt-12" : ""} ${
                i === 2 ? "lg:mt-24" : ""
              }`}
            >
              <div className="arch relative aspect-[5/6] bg-sand">
                <Image
                  src={master.image}
                  alt={master.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                  className="object-cover"
                />
              </div>

              <div className="mt-5 border-t-2 border-ink pt-4">
                <h3 className="display-md text-[1.375rem] text-ink">
                  {master.name}
                </h3>
                <p className="mt-1 text-[0.875rem] text-muted">
                  {master.role} · {master.years}
                </p>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {master.bio}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {master.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-sand px-2.5 py-1 text-[0.75rem] text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
