/*
  Technical elevations of the NOMI S2, drawn as line art rather than faked
  product renders. One stroke weight throughout, accent reserved for whatever
  subsystem the current view is about.
*/

type View = "front" | "side" | "top" | "section" | "back";

const S = 1.6; // single stroke weight for the whole set

function Dim({
  x1,
  y1,
  x2,
  y2,
  label,
  flip,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  flip?: boolean;
}) {
  const vertical = x1 === x2;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  return (
    <g stroke="currentColor" strokeWidth={0.9} opacity={0.5}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {vertical ? (
        <>
          <line x1={x1 - 4} y1={y1} x2={x1 + 4} y2={y1} />
          <line x1={x2 - 4} y1={y2} x2={x2 + 4} y2={y2} />
        </>
      ) : (
        <>
          <line x1={x1} y1={y1 - 4} x2={x1} y2={y1 + 4} />
          <line x1={x2} y1={y2 - 4} x2={x2} y2={y2 + 4} />
        </>
      )}
      <text
        x={vertical ? mx - (flip ? -9 : 9) : mx}
        y={vertical ? my : my - 6}
        fontSize={9}
        letterSpacing="0.08em"
        stroke="none"
        fill="currentColor"
        textAnchor="middle"
        dominantBaseline={vertical ? "middle" : "auto"}
        transform={vertical ? `rotate(-90 ${mx - (flip ? -9 : 9)} ${my})` : undefined}
      >
        {label}
      </text>
    </g>
  );
}

/* Small numbered pointer used to call out a part. */
function Callout({
  x,
  y,
  tx,
  ty,
  n,
  anchor = "start",
}: {
  x: number;
  y: number;
  tx: number;
  ty: number;
  n: string;
  anchor?: "start" | "end";
}) {
  return (
    <g className="text-[var(--accent)]">
      <line
        x1={x}
        y1={y}
        x2={tx}
        y2={ty}
        stroke="currentColor"
        strokeWidth={0.9}
        opacity={0.75}
      />
      <circle cx={x} cy={y} r={2.4} fill="currentColor" />
      <text
        x={tx + (anchor === "start" ? 6 : -6)}
        y={ty + 3.5}
        fontSize={9.5}
        fontWeight={600}
        fill="currentColor"
        textAnchor={anchor}
      >
        {n}
      </text>
    </g>
  );
}

function Front() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinejoin="round">
      {/* lid */}
      <ellipse cx={150} cy={54} rx={62} ry={12} />
      <path d="M88 54v22c0 6.6 27.8 12 62 12s62-5.4 62-12V54" />
      <path d="M136 44h28" strokeWidth={S} opacity={0.6} />
      {/* hopper */}
      <path d="M88 78 98 198M212 78 202 198" />
      <path d="M98 198c0 5.5 23.3 10 52 10s52-4.5 52-10" />
      {/* body */}
      <path d="M78 196v112a10 10 0 0 0 10 10h124a10 10 0 0 0 10-10V196" />
      <path d="M78 196h144" opacity={0.35} />
      {/* camera */}
      <circle cx={150} cy={240} r={27} />
      <circle cx={150} cy={240} r={17.5} />
      <circle cx={150} cy={240} r={7} fill="currentColor" stroke="none" opacity={0.85} />
      <circle cx={143.5} cy={233.5} r={2.6} fill="var(--white)" stroke="none" />
      <circle cx={112} cy={240} r={3.4} />
      <circle cx={188} cy={240} r={3.4} />
      {/* speaker slots */}
      <path d="M126 288h48M126 295h48M126 302h48" opacity={0.45} strokeLinecap="round" />
      {/* base plate + bowl */}
      <path d="M70 318h160" />
      <path d="M84 332c0 12 29.5 22 66 22s66-10 66-22" />
      <ellipse cx={150} cy={332} rx={66} ry={16} />
      <path d="M60 356h180" strokeDasharray="2 5" opacity={0.4} />

      <Dim x1={46} y1={42} x2={46} y2={354} label="355 мм" />
      <Dim x1={78} y1={378} x2={222} y2={378} label="232 мм" />
    </g>
  );
}

function Side() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinejoin="round">
      {/* lid seen edge-on */}
      <path d="M104 54h92v24H104z" />
      <path d="M140 44h20" opacity={0.6} />
      {/* hopper profile, back wall vertical, front wall angled */}
      <path d="M104 78v120M196 78l-8 120" />
      <path d="M104 198h84" opacity={0.35} />
      {/* body: taller at the back, sloping face at the front */}
      <path d="M96 196v112a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10V196" />
      {/* 12° food ramp inside the front face */}
      <path d="M188 236 132 300" strokeDasharray="4 4" opacity={0.55} />
      {/* bowl pushed forward of the body */}
      <path d="M118 318h112" />
      <ellipse cx={182} cy={332} rx={44} ry={13} />
      <path d="M138 332c0 10.5 19.7 19 44 19s44-8.5 44-19" />
      <path d="M96 356h150" strokeDasharray="2 5" opacity={0.4} />
      {/* tilt annotation */}
      <path
        d="M188 268a34 34 0 0 0-8 20"
        className="text-[var(--accent)]"
        stroke="currentColor"
        strokeWidth={1}
      />
      <text
        x={196}
        y={280}
        fontSize={10}
        fontWeight={600}
        stroke="none"
        fill="currentColor"
        className="text-[var(--accent)]"
      >
        12°
      </text>

      <Dim x1={64} y1={42} x2={64} y2={354} label="355 мм" />
      <Dim x1={96} y1={378} x2={226} y2={378} label="205 мм" />
    </g>
  );
}

function Top() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinejoin="round">
      <circle cx={150} cy={186} r={96} />
      <circle cx={150} cy={186} r={84} opacity={0.4} />
      {/* gasket ring */}
      <circle cx={150} cy={186} r={72} strokeDasharray="3 4" opacity={0.6} />
      {/* latch */}
      <path d="M126 84h48v22h-48z" />
      <path d="M138 95h24" opacity={0.6} />
      {/* handle recess */}
      <path d="M112 186h76" />
      <path d="M112 186a12 12 0 0 1 12-12h52a12 12 0 0 1 12 12" />
      {/* desiccant socket */}
      <circle cx={150} cy={240} r={18} />
      <path d="M141 240h18M150 231v18" opacity={0.5} />
      {/* bowl crescent in front */}
      <path d="M78 300a72 72 0 0 0 144 0" />
      <path d="M96 300a54 54 0 0 0 108 0" opacity={0.45} />

      <Callout x={150} y={95} tx={228} ty={72} n="защёлка крышки" />
      <Callout x={150} y={240} tx={236} ty={252} n="гнездо осушителя" />
      <Dim x1={54} y1={352} x2={246} y2={352} label="Ø 232 мм" />
    </g>
  );
}

function Section() {
  const kibble: [number, number][] = [
    [120, 110], [140, 104], [160, 112], [180, 106], [128, 128], [150, 124],
    [172, 130], [110, 148], [134, 152], [158, 146], [182, 154], [120, 172],
    [146, 168], [170, 176], [190, 168], [132, 190], [158, 192], [180, 190],
  ];
  return (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinejoin="round">
      {/* cut hopper */}
      <path d="M104 54h92v24H104z" opacity={0.5} />
      <path d="M104 78v120M196 78l-8 120" />
      {/* kibble level */}
      {kibble.map(([x, y], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx={6}
          ry={4.4}
          strokeWidth={1.1}
          opacity={0.55}
          transform={`rotate(${(i * 37) % 90} ${x} ${y})`}
        />
      ))}
      {/* body outline, hatched cut */}
      <path d="M96 196v112a10 10 0 0 0 10 10h96a10 10 0 0 0 10-10V196" />
      <path d="M96 198h92" opacity={0.35} />
      {/* auger — the part this view exists for */}
      <g className="text-[var(--accent)]" stroke="currentColor" strokeWidth={1.8}>
        <path d="M112 214h72" />
        <path d="M118 214c0 9 9 9 9 0s9-9 9 0 9 9 9 0 9-9 9 0 9 9 9 0 9-9 9 0" />
        <path d="M118 214c0-9 9-9 9 0s9 9 9 0 9-9 9 0 9 9 9 0 9-9 9 0 9 9 9 0" />
        <circle cx={108} cy={214} r={7} />
      </g>
      {/* chute down to the bowl */}
      <path d="M188 226 148 292" strokeDasharray="5 4" opacity={0.6} />
      <path d="M172 226h18v12" opacity={0.6} />
      {/* damping tray */}
      <path d="M126 296h56" className="text-[var(--accent)]" stroke="currentColor" />
      <path d="M118 318h112" />
      <ellipse cx={182} cy={332} rx={44} ry={13} />
      <path d="M138 332c0 10.5 19.7 19 44 19s44-8.5 44-19" />
      <ellipse cx={172} cy={334} rx={6} ry={4} strokeWidth={1.1} opacity={0.6} />
      <ellipse cx={190} cy={336} rx={6} ry={4} strokeWidth={1.1} opacity={0.6} />
      <ellipse cx={181} cy={342} rx={6} ry={4} strokeWidth={1.1} opacity={0.6} />

      <Callout x={148} y={214} tx={238} ty={186} n="шнек-дозатор" />
      <Callout x={154} y={296} tx={70} ty={272} n="лоток-гаситель" anchor="end" />
    </g>
  );
}

function Back() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth={S} strokeLinejoin="round">
      <ellipse cx={150} cy={54} rx={62} ry={12} opacity={0.45} />
      <path d="M88 54v22c0 6.6 27.8 12 62 12s62-5.4 62-12V54" opacity={0.45} />
      <path d="M88 78 98 198M212 78 202 198" opacity={0.45} />
      <path d="M78 196v112a10 10 0 0 0 10 10h124a10 10 0 0 0 10-10V196" />
      {/* battery hatch */}
      <path d="M100 214h100v70H100z" />
      <path d="M100 214h100" opacity={0.4} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={110 + i * 22} y={226} width={14} height={46} rx={3} opacity={0.55} />
          <path d={`M${114 + i * 22} 226h6`} opacity={0.55} />
        </g>
      ))}
      {/* usb-c */}
      <rect
        x={124}
        y={296}
        width={30}
        height={9}
        rx={4.5}
        className="text-[var(--accent)]"
        stroke="currentColor"
      />
      {/* microsd */}
      <path d="M170 296h22v9h-22z" />
      <path d="M186 296v4" opacity={0.6} />
      {/* reset pin */}
      <circle cx={206} cy={300} r={2.6} />
      <path d="M70 318h160" />
      <path d="M60 340h180" strokeDasharray="2 5" opacity={0.4} />

      <Callout x={139} y={300} tx={62} ty={332} n="USB-C" anchor="end" />
      <Callout x={181} y={300} tx={244} ty={332} n="microSD" />
      <Callout x={150} y={250} tx={252} ty={214} n="4 × AA" />
    </g>
  );
}

const VIEWS: Record<View, () => React.JSX.Element> = {
  front: Front,
  side: Side,
  top: Top,
  section: Section,
  back: Back,
};

export function FeederDrawing({
  view = "front",
  className,
}: {
  view?: View;
  className?: string;
}) {
  const Body = VIEWS[view];
  return (
    <svg
      viewBox="0 0 300 400"
      className={className}
      role="img"
      aria-label={`Кормушка NOMI S2, чертёж: ${view}`}
      fontFamily="var(--font-mono), monospace"
    >
      <Body />
    </svg>
  );
}

export type { View };
