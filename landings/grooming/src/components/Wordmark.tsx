/**
 * The studio mark: four letters, tight, with a comb-tooth rule underneath.
 * `tone` swaps it for use on the dark pine band.
 */
export default function Wordmark({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "cream";
  className?: string;
}) {
  const color = tone === "cream" ? "text-cream" : "text-ink";

  return (
    <span className={`inline-flex flex-col gap-[4px] ${className}`}>
      <span
        className={`display text-[1.4rem] leading-none tracking-[0.04em] ${color}`}
      >
        ВОРС
      </span>
      <span className="comb-xs w-full text-marigold" aria-hidden="true" />
    </span>
  );
}
