import { catPrices, dogPrices, priceNotes, sizeColumns } from "@/content";

export default function Prices() {
  return (
    <section id="prices" className="bg-cream py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="reveal max-w-[54ch]">
          <p className="eyebrow">Услуги и цены</p>
          <h2 className="display-md mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
            Вилкой, а не «цена по запросу»
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            Стоимость зависит от размера животного и состояния шерсти. Точную
            сумму мастер называет после осмотра — до того, как возьмёт машинку.
          </p>
        </div>

        {/* ---------- Собаки ---------- */}
        <h3 className="reveal display-md mt-12 text-[1.5rem] sm:text-[1.75rem]">
          Собаки
        </h3>

        {/* Desktop: a real comparison table. */}
        <div className="reveal mt-6 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[680px] border-collapse text-left">
            <thead>
              <tr className="border-b border-ink/25">
                <th scope="col" className="eyebrow pb-3 pr-6 font-semibold">
                  Услуга
                </th>
                {sizeColumns.map((col) => (
                  <th
                    key={col.title}
                    scope="col"
                    className="pb-3 pl-6 text-right align-bottom"
                  >
                    <span className="block text-[0.9375rem] font-semibold text-ink">
                      {col.title}
                    </span>
                    <span className="tnum mt-0.5 block text-[0.75rem] font-normal text-muted">
                      {col.note}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dogPrices.map((row) => (
                <tr
                  key={row.service}
                  className={`border-b border-line ${
                    row.popular ? "bg-marigold/12" : ""
                  }`}
                >
                  <th
                    scope="row"
                    className={`py-4 pr-6 text-left font-normal ${
                      row.popular
                        ? "border-l-[3px] border-l-marigold pl-3.5"
                        : ""
                    }`}
                  >
                    <span className="display-md block text-[1.0625rem] text-ink">
                      {row.service}
                      {row.popular ? (
                        <span className="eyebrow ml-2.5 align-middle text-marigold-deep">
                          чаще всего
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-1 block max-w-[38ch] text-[0.8125rem] leading-snug text-muted">
                      {row.note}
                    </span>
                  </th>
                  {row.prices.map((price, i) => (
                    <td
                      key={i}
                      className="tnum py-4 pl-6 text-right text-[0.9375rem] whitespace-nowrap text-ink-soft"
                    >
                      {price}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Phones: the same data as stacked cards. A 4-column table cannot be
            made to fit 390px honestly, so it is not attempted. */}
        <ul className="reveal mt-6 space-y-3 md:hidden">
          {dogPrices.map((row) => (
            <li
              key={row.service}
              className={`rounded-2xl border p-4 ${
                row.popular
                  ? "border-marigold bg-marigold/12"
                  : "border-line bg-paper"
              }`}
            >
              <p className="display-md text-[1.0625rem] text-ink">
                {row.service}
                {row.popular ? (
                  <span className="eyebrow ml-2 align-middle text-marigold-deep">
                    чаще всего
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-[0.8125rem] leading-snug text-muted">
                {row.note}
              </p>
              <dl className="mt-3 border-t border-line/80 pt-1">
                {row.prices.map((price, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between gap-3 py-1.5"
                  >
                    <dt className="tnum text-[0.8125rem] text-muted">
                      {sizeColumns[i].title}, {sizeColumns[i].note}
                    </dt>
                    <dd className="tnum text-right text-[0.875rem] font-medium text-ink">
                      {price}
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>

        {/* ---------- Кошки ---------- */}
        <div className="reveal mt-12 rounded-3xl bg-sand p-5 sm:p-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h3 className="display-md text-[1.5rem] sm:text-[1.75rem]">
              Кошки
            </h3>
            <p className="text-[0.875rem] text-muted">
              Отдельный зал и отдельный мастер — без собачьего шума
            </p>
          </div>
          <dl className="mt-5 grid gap-x-10 sm:grid-cols-2">
            {catPrices.map((row) => (
              <div
                key={row.service}
                className="flex items-baseline justify-between gap-4 border-b border-sand-deep py-3.5"
              >
                <dt>
                  <span className="block text-[1rem] text-ink">
                    {row.service}
                  </span>
                  <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted">
                    {row.note}
                  </span>
                </dt>
                <dd className="tnum shrink-0 text-right text-[0.9375rem] font-medium text-ink">
                  {row.price}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ---------- Мелкий шрифт, который обычно прячут ---------- */}
        <ul className="reveal mt-10 grid gap-x-10 gap-y-5 sm:grid-cols-3">
          {priceNotes.map((note) => (
            <li key={note} className="border-t-2 border-ink pt-4">
              <p className="text-[0.875rem] leading-relaxed text-ink-soft">
                {note}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
