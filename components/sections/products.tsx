"use client";
import { products, type Product } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";

function tagStyle(tag: Product["tags"][number]) {
  if (tag === "hot" || tag === "popular") return "bg-accent text-paper";
  if (tag === "nuevo") return "bg-ink text-paper";
  return "bg-paper text-ink";
}

function tagLabel(tag: Product["tags"][number]) {
  return tag === "a-medida"
    ? "A MEDIDA"
    : tag === "pedido"
      ? "PEDIDO"
      : tag.toUpperCase();
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article
      className="reveal group relative rounded-lg overflow-hidden cursor-pointer aspect-square bg-cover bg-center"
      style={{ backgroundImage: `url(${p.image})`, backgroundPosition: p.bgPosition ?? "center" }}
      onClick={() => openWhatsApp(p.whatsappProduct)}
    >
      <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-[2]">
        {p.tags.map((t) => (
          <span
            key={t}
            className={`font-mono text-[0.6rem] font-medium tracking-[0.12em] px-2.5 py-1 rounded-full ${tagStyle(t)}`}
          >
            {tagLabel(t)}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(26,20,16,0.85)] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
      <div className="absolute bottom-5 left-5 right-5 z-[2] text-bg opacity-0 translate-y-2.5 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
        <span className="font-mono text-[0.6rem] tracking-[0.14em] text-accent block mb-1">{p.category}</span>
        <h4 className="font-serif text-[1.1rem] font-medium tracking-tight leading-tight mb-3">{p.name}</h4>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); openWhatsApp(p.whatsappProduct); }}
          className="btn btn-accent btn-sm"
        >
          Cotizar →
        </button>
      </div>
    </article>
  );
}

function CustomCard() {
  return (
    <article className="reveal group bg-ink text-bg rounded-lg p-4 relative transition-all duration-500 cursor-pointer flex flex-col hover:-translate-y-1.5">
      <div className="aspect-square rounded grid place-items-center bg-gradient-to-br from-ink to-[#2a1f17] mb-4">
        <span className="font-serif italic text-[4rem] text-accent leading-none">+</span>
      </div>
      <div className="flex flex-col gap-2 px-1 pb-1">
        <div className="flex justify-between items-center font-mono text-[0.62rem] tracking-[0.14em] text-bg/50">
          <span>HECHO A PEDIDO</span>
          <span />
        </div>
        <h4 className="font-serif text-[1.15rem] font-medium tracking-tight leading-tight text-bg">
          ¿Lo imaginas en madera? Lo hacemos.
        </h4>
        <div className="flex justify-between items-center mt-1.5">
          <span className="font-serif text-[1rem] text-accent">→ Cotizar</span>
          <a
            href="#"
            className="text-[0.78rem] font-medium inline-flex items-center gap-1.5 border-b border-bg pb-0.5 text-bg transition-colors hover:text-accent hover:border-accent"
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp();
            }}
          >
            WhatsApp →
          </a>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section className="section-padding" id="productos">
      <div className="wrap">
        <div className="flex flex-wrap justify-between items-end gap-8 mb-12 reveal">
          <div>
            <span className="mono-label text-ink-soft">— Catálogo destacado</span>
            <h2 className="h2 mt-3.5">
              Trabajos del taller
              <em className="italic text-accent">.</em>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
          <CustomCard />
        </div>
      </div>
    </section>
  );
}
