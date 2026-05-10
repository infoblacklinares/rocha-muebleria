import { steps } from "@/lib/data";

export function Process() {
  return (
    <section className="section-padding" id="proceso">
      <div className="wrap">
        <div className="mb-[70px] max-w-[800px] reveal">
          <span className="mono-label text-ink-soft">— Cómo trabajamos</span>
          <p
            className="font-serif text-[clamp(1.6rem,3.2vw,2.6rem)] tracking-tight mt-6 leading-[1.15]"
            style={{ fontVariationSettings: '"opsz" 80, "SOFT" 50' }}
          >
            Del primer mensaje a la última lijada —{" "}
            <em className="text-accent italic">cuatro pasos, cero sorpresas</em>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {steps.map((s) => (
            <div
              key={s.num}
              className="reveal bg-paper rounded-lg p-6 sm:p-9 relative border border-transparent transition-all duration-400 hover:border-ink hover:-translate-y-1"
            >
              <span className="font-serif italic text-[2.6rem] sm:text-[4rem] font-light leading-none text-accent mb-5 sm:mb-8 block">
                {s.num}
              </span>
              <h4 className="font-serif text-[1.15rem] sm:text-[1.4rem] font-medium mb-2 sm:mb-3 tracking-tight">
                {s.title}
              </h4>
              <p className="text-ink-soft text-[0.88rem] sm:text-[0.92rem] leading-[1.55]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
