"use client";
import { useState } from "react";
import { products, type Product } from "@/lib/data";
import { openWhatsApp } from "@/lib/whatsapp";

const TABS = ["DESTACADOS", "RECIENTES", "A PEDIDO"] as const;
type TabKey = (typeof TABS)[number];

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
    <article className="reveal group bg-paper rounded-lg p-4 relative transition-all duration-500 cursor-pointer flex flex-col hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(26,20,16,0.08)]">
      <div
        className="aspect-square rounded bg-bg-2 bg-cover mb-4 relative overflow-hidden"
        style={{ backgroundImage: `url(${p.image})`, backgroundPosition: p.bgPosition ?? "center" }}
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
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 z-[2] opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              openWhatsApp(p.whatsappProduct);
            }}
            className="w-[34px] h-[34px] bg-paper rounded-full grid place-items-center text-[0.85rem] border border-line transition-colors hover:bg-ink hover:text-bg hover:border-ink"
            title="Cotizar"
          >
            ↗
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 px-1 pb-1">
        <div className="flex justify-between items-center font-mono text-[0.62rem] tracking-[0.14em] text-ink-soft">
          <span>{p.category}</span>
          {p.rating ? <span className="text-accent text-[0.75rem] font-sans">★ ★ ★ ★ ★</span> : null}
        </div>
        <h4 className="font-serif text-[1.05rem] sm:text-[1.15rem] font-medium tracking-tight leading-tight">
          {p.name}
        </h4>
        <div className="mt-1.5">
          <a
            href="#"
            className="text-[0.78rem] font-medium inline-flex items-center gap-1.5 border-b border-ink pb-1 transition-colors hover:text-accent hover:border-accent"
            onClick={(e) => {
              e.preventDefault();
              openWhatsApp(p.whatsappProduct);
            }}
          >
            Cotizar este producto →
          </a>
        </div>
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
  const [tab, setTab] = useState<TabKey>("DESTACADOS");

  const filtered = products.filter((p) => {
    if (tab === "DESTACADOS") return p.tags.some(t => ["hot", "popular", "premium"].includes(t));
    if (tab === "RECIENTES") return p.tags.includes("nuevo");
    if (tab === "A PEDIDO") return p.tags.some(t => ["pedido", "a-medida"].includes(t));
    return true;
  });

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
          <div className="flex flex-wrap gap-7 items-center">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`mono-label py-1.5 relative transition-colors cursor-pointer ${
                  tab === t ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {t}
                {tab === t && (
                  <span className="absolute bottom-0 inset-x-0 h-px bg-ink" />
                )}
              </button>
            ))}
            <a href="#contacto" className="btn btn-ghost btn-sm">Ver todo →</a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
          <CustomCard />
        </div>
      </div>
    </section>
  );
}
