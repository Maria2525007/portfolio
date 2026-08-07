/*
  Three icons drawn for this page only. Same 1.75 stroke, same 48-unit grid,
  same round caps — so the row reads as one drawing split in three.
*/

const common = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Kibble poured through a funnel into the open hopper. */
export function IconPour({ className }: { className?: string }) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <ellipse cx={17} cy={5.5} rx={3} ry={2.1} transform="rotate(-18 17 5.5)" />
      <ellipse cx={25} cy={4} rx={3} ry={2.1} transform="rotate(22 25 4)" />
      <ellipse cx={32} cy={6} rx={3} ry={2.1} transform="rotate(-8 32 6)" />
      <path d="M11 12h26l-9.5 13.5V31h-7v-5.5Z" />
      <ellipse cx={21} cy={34.5} rx={2.4} ry={1.7} transform="rotate(28 21 34.5)" />
      <ellipse cx={28} cy={36.5} rx={2.4} ry={1.7} transform="rotate(-24 28 36.5)" />
      <path d="M6 40.5c0 2.5 8 4.5 18 4.5s18-2 18-4.5" />
      <ellipse cx={24} cy={40.5} rx={18} ry={4.5} />
    </svg>
  );
}

/* Dial split into six feeding slots — four of them set. */
export function IconSchedule({ className }: { className?: string }) {
  const spokes = [0, 60, 120, 180, 240, 300];
  return (
    <svg {...common} className={className} aria-hidden="true">
      <circle cx={24} cy={21} r={14} />
      <circle cx={24} cy={21} r={7.5} />
      {spokes.map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <line
            key={a}
            x1={24 + 7.5 * Math.sin(r)}
            y1={21 - 7.5 * Math.cos(r)}
            x2={24 + 14 * Math.sin(r)}
            y2={21 - 14 * Math.cos(r)}
          />
        );
      })}
      {[30, 90, 210, 330].map((a) => {
        const r = (a * Math.PI) / 180;
        return (
          <circle
            key={a}
            cx={24 + 10.7 * Math.sin(r)}
            cy={21 - 10.7 * Math.cos(r)}
            r={2.1}
            fill="currentColor"
            stroke="none"
          />
        );
      })}
      <path d="M24 21v-5" />
      <path d="M13 42h22" />
      <path d="M17 42a7 4 0 0 0 14 0" />
    </svg>
  );
}

/* Phone streaming the feeder's camera, live. */
export function IconWatch({ className }: { className?: string }) {
  return (
    <svg {...common} className={className} aria-hidden="true">
      <rect x={9} y={4} width={22} height={40} rx={3.5} />
      <path d="M16 8h8" />
      <path d="M9 37h22" />
      <circle cx={20} cy={22} r={5.5} />
      <circle cx={20} cy={22} r={1.9} fill="currentColor" stroke="none" />
      <path d="M15.4 19a5.5 5.5 0 0 1 7.4-2.3" />
      <path d="M20 40.5h0" />
      <path d="M35 17.5a9 9 0 0 1 0 13" />
      <path d="M39.5 13a15 15 0 0 1 0 22" />
    </svg>
  );
}
