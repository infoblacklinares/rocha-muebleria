"use client";
import { openWhatsApp } from "@/lib/whatsapp";

const BANNERS = [
  {
    deal: "A PEDIDO",
    title: "Muebles a medida",
    desc: "Diseñamos contigo desde el boceto. Madera nativa, terminación impecable.",
    image: "/canva/muebles-cocina.jpg",
    producto: "mueble a medida"
  },
  {
    deal: "DESTACADO",
    title: "Puertas en raulí",
    desc: "Madera nativa, dura y noble. Para entradas que importan.",
    image: "/canva/puertas-rauli.jpg",
    producto: "puerta de raulí"
  }
];

export function Banners() {
  return (
    <div className="wrap">
      <div className="grid md:grid-cols-2 gap-4 mt-4">
        {BANNERS.map((b) => (
          <article
            key={b.title}
            className="reveal group relative aspect-video rounded-lg overflow-hidden bg-cover bg-center cursor-pointer isolate"
            style={{ backgroundImage: `url(${b.image})` }}
          >
            <div className="absolute inset-0 z-[1] bg-gradient-to-br from-[rgba(26,20,16,0.35)] to-transparent" />
            <div className="absolute inset-5 md:inset-8 border border-bg/60 rounded p-6 md:p-8 flex flex-col justify-between z-[2] text-bg transition-colors duration-300 group-hover:border-accent">
              <div className="flex justify-between items-start">
                <span className="font-mono text-[0.7rem] tracking-[0.15em] bg-accent text-bg px-3 py-1.5 rounded-full">
                  {b.deal}
                </span>
              </div>
              <div>
                <h3 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight font-normal leading-none">
                  {b.title}
                </h3>
                <div className="flex justify-between items-end mt-3">
                  <p className="text-[0.92rem] opacity-90 max-w-[240px]">{b.desc}</p>
                  <a
                    href="#"
                    className="btn btn-accent btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      openWhatsApp(b.producto);
                    }}
                  >
                    Cotizar →
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
