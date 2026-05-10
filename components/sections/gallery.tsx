import { gallery } from "@/lib/data";

const SIZE_CLASSES: Record<string, string> = {
  "gx-1": "col-span-12 lg:col-span-7 row-span-2",
  "gx-2": "col-span-12 lg:col-span-5 row-span-2",
  "gx-3": "col-span-12 lg:col-span-4 row-span-2",
  "gx-4": "col-span-12 lg:col-span-4 row-span-2",
  "gx-5": "col-span-12 lg:col-span-4 row-span-2"
};

export function Gallery() {
  return (
    <section className="section-padding">
      <div className="wrap">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-12 reveal">
          <div className="flex flex-col gap-3">
            <span className="mono-label text-ink-soft">— Trabajos recientes</span>
            <h2 className="h2">
              Del boceto
              <br />
              al hogar<em className="italic text-accent">.</em>
            </h2>
          </div>
        
        </div>

        <div className="grid grid-cols-12 auto-rows-[200px] gap-3">
          {gallery.map((g) => (
            <div
              key={g.id}
              className={`reveal group relative rounded bg-cover bg-center overflow-hidden cursor-pointer ${SIZE_CLASSES[g.size]}`}
              style={{ backgroundImage: `url(${g.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.85)] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <div className="absolute bottom-6 left-7 right-7 z-[2] text-bg opacity-0 translate-y-2.5 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-accent block mb-1.5">
                  {g.category}
                </span>
                <h4 className="font-serif text-[1.4rem] font-medium">{g.caption}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
