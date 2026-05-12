import { materials } from "@/lib/data";

export function Materials() {
  return (
    <section id="materiales" className="py-0 my-[var(--space)]">
      <div className="bg-ink text-bg rounded-lg mx-[var(--gutter)] py-[clamp(70px,10vw,120px)] px-[clamp(40px,8vw,100px)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(232,123,62,0.15),transparent_60%)]" />
        <div className="relative z-[2] max-w-site mx-auto">
          <div className="grid lg:grid-cols-2 gap-[60px] items-end mb-[70px]">
            <div className="reveal">
              <div className="inline-flex items-center gap-3 font-mono text-[0.7rem] tracking-[0.16em] uppercase text-accent mb-6">
                <span className="w-[30px] h-px bg-accent" />— Maderas que trabajamos
              </div>
              <h2 className="h2">
                Maderas <em className="italic text-accent">nativas</em>,
                <br />
                escogidas a mano.
              </h2>
            </div>
            <div className="reveal text-[0.95rem] opacity-70 max-w-[380px]">
              Cada proyecto empieza con la madera correcta. Trabajamos pino,
              raulí y roble — todas chilenas, todas seleccionadas en
              origen.
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
            {materials.map((m) => (
              <div
                key={m.slug}
                className="reveal group cursor-pointer text-left grid grid-cols-[110px_1fr] sm:block items-center gap-5 sm:gap-0"
              >
                <div
                  className={`${m.swatchClass} relative rounded-full mb-0 sm:mb-6 aspect-square w-full max-w-[110px] sm:max-w-none sm:w-3/4 shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-1`}
                >
                  <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.18),transparent_55%)]" />
                </div>
                <div>
                  <h4 className="font-serif text-[1.3rem] sm:text-[1.6rem] font-medium mb-0.5 sm:mb-1.5 tracking-tight">
                    {m.name}
                  </h4>
                  <span className="font-serif italic text-[0.78rem] sm:text-[0.85rem] text-accent mb-2 sm:mb-3.5 block">
                    {m.latin}
                  </span>
                  <p className="text-[0.82rem] sm:text-[0.88rem] opacity-70 leading-[1.55]">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
