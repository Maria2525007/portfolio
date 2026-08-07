import Image from "next/image";
import { venue } from "@/content";
import { SectionHead, Shell } from "./Section";

export default function Venue() {
  return (
    <section id="venue" className="py-24 sm:py-32">
      <Shell>
        <SectionHead
          index="05"
          kicker="Место проведения"
          title={venue.name}
          intro={<p className="num text-[0.9375rem]">{venue.address}</p>}
        />
      </Shell>

      {/* Two frames, deliberately unequal — a wide room shot and a tall detail. */}
      <div className="mt-14 grid gap-px bg-line sm:grid-cols-[1.6fr_1fr] reveal">
        <figure className="relative h-[clamp(240px,34vw,440px)] bg-ink">
          <Image
            src="/venue-room.jpg"
            alt="Зал «Литейного Двора»: деревянные столы и окна на набережную"
            fill
            sizes="(max-width: 639px) 100vw, 62vw"
            className="photo-ink object-cover"
          />
        </figure>
        <figure className="relative h-[clamp(240px,34vw,440px)] bg-ink">
          <Image
            src="/venue-tables.jpg"
            alt="Столы, подготовленные к интенсиву: вода, блокноты, ручки"
            fill
            sizes="(max-width: 639px) 100vw, 38vw"
            className="photo-ink object-cover"
          />
        </figure>
      </div>

      <Shell className="mt-14">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h3 className="label label-accent">Зал</h3>
            <ul className="mt-6 border-t border-line">
              {venue.hall.map((h) => (
                <li
                  key={h.slice(0, 20)}
                  className="border-b border-line py-4 text-[1.0625rem] leading-relaxed text-muted"
                >
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <h3 className="label label-accent">Как добраться</h3>
            <dl className="mt-6 border-t border-line">
              {venue.route.map((r) => (
                <div
                  key={r.label}
                  className="grid gap-x-6 gap-y-1 border-b border-line py-4 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="label">{r.label}</dt>
                  <dd className="text-[1.0625rem] leading-relaxed text-muted">
                    {r.text}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Shell>
    </section>
  );
}
