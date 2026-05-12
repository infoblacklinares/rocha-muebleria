import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section className="py-[clamp(60px,8vw,100px)]">
      <div className="wrap">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-12 reveal">
          <div className="flex flex-col gap-3">
            <span className="mono-label text-ink-soft">— Categorías</span>
            <h2 className="h2">
              Compra
              <br />
              por categoría
              <em className="italic text-accent">.</em>
            </h2>
          </div>
          <div className="flex items-center gap-3 text-ink-soft text-[0.88rem]">
            <span className="w-[30px] h-px bg-ink-soft" />
            <strong className="text-ink">+200</strong>&nbsp;proyectos únicos &nbsp;·&nbsp; <a href="#productos" className="hover:text-accent transition-colors">Ver todas las categorías →</a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {categories.map((c) => (
            <article
              key={c.slug}
              className="reveal group bg-paper rounded-lg p-4 sm:p-6 md:p-7 flex flex-row md:flex-col items-center md:items-stretch gap-4 transition-all duration-500 cursor-pointer border border-transparent hover:-translate-y-1.5 hover:border-ink relative overflow-hidden"
            >
              <div className="absolute top-1/2 md:top-6 right-4 md:right-6 -translate-y-1/2 md:translate-y-0 w-8 h-8 md:w-9 md:h-9 bg-ink text-bg rounded-full grid place-items-center text-sm md:text-base md:opacity-0 md:rotate-[-45deg] md:scale-75 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:rotate-0 md:group-hover:scale-100">
                ↗
              </div>
              <div
                className="aspect-[4/3] w-[110px] md:w-auto md:aspect-[4/3] flex-shrink-0 rounded bg-bg-2 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${c.image})` }}
              />
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-1.5 md:gap-0 md:mt-1 flex-1">
                <h3 className="font-serif text-[1.05rem] sm:text-[1.2rem] font-medium tracking-tight">
                  {c.title}
                </h3>
                <span className="font-mono text-[0.6rem] sm:text-[0.62rem] tracking-[0.14em] uppercase text-ink-soft bg-bg px-2.5 py-1.5 rounded-full border border-line self-start">
                  {c.badge}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
