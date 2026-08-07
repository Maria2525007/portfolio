export default function SectionHead({
  index,
  label,
  title,
  lead,
  tone = "ink",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: "ink" | "paper";
}) {
  const paper = tone === "paper";

  return (
    <div className="reveal">
      <div
        className={`flex items-center gap-4 border-b pb-4 ${paper ? "border-paper/25" : "border-line"}`}
      >
        <span className={`eyebrow numerals ${paper ? "eyebrow-paper" : "eyebrow-accent"}`}>
          {index}
        </span>
        <span className={`eyebrow ${paper ? "eyebrow-paper" : ""}`}>{label}</span>
      </div>

      <div className="mt-8 grid gap-6 md:mt-10 lg:grid-cols-12 lg:gap-x-12">
        <h2
          className={`display lg:col-span-7 text-[clamp(2rem,4.8vw,3.5rem)] text-balance ${
            paper ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {lead && (
          <p
            className={`lg:col-span-5 lg:pt-2 text-[1.0625rem] leading-relaxed ${
              paper ? "text-paper/70" : "text-muted"
            }`}
          >
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
