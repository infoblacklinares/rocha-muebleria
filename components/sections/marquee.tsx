const ITEMS = [
  "Madera nativa",
  "Hecho a mano",
  "Pino · Raulí · Roble",
  "Linares · Chile",
  "Desde 2003"
];

function Dot() {
  return (
    <svg viewBox="0 0 24 24" className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function Track() {
  return (
    <span className="inline-flex items-center gap-9 sm:gap-[60px]">
      {ITEMS.map((t, i) => (
        <span key={i} className="inline-flex items-center gap-9 sm:gap-[60px]">
          {t} <Dot />
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="bg-ink text-bg py-3.5 sm:py-[18px] overflow-hidden whitespace-nowrap border-y border-ink">
      <div className="inline-flex gap-9 sm:gap-[60px] animate-marquee font-serif font-light italic text-[1.05rem] sm:text-[clamp(1.3rem,2.2vw,1.9rem)] items-center">
        <Track />
        <Track />
      </div>
    </div>
  );
}
