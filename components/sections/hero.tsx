"use client";
import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";
import { getCatalogLabel } from "@/lib/site-config";

const HERO_IMG = "/canva/muebleria-rocha.jpg";

export function Hero() {
  // Etiqueta dinámica (estación + año) calculada en el cliente para evitar
  // mismatch de hidratación con el server.
  const [label, setLabel] = useState("Catálogo · " + new Date().getFullYear());
  useEffect(() => {
    setLabel(getCatalogLabel());
  }, []);

  return (
    <section className="min-h-screen pt-[90px] sm:pt-[110px] pb-10 sm:pb-[60px] px-[var(--gutter)] relative overflow-hidden">
      <div className="max-w-site mx-auto grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-10 items-center min-h-[calc(100vh-170px)] relative">
        {/* Texto */}
        <div className="relative z-[3]">
          <span className="inline-flex items-center gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-paper border border-line rounded-full mono-label text-ink-soft mb-6 sm:mb-8 text-[0.62rem] sm:text-[0.7rem]">
            <span className="relative w-1.5 h-1.5 rounded-full bg-accent">
              <span className="absolute inset-0 bg-accent rounded-full animate-ping" />
            </span>
            {label}
          </span>

          <h1
            className="font-serif text-[clamp(2.6rem,14vw,8rem)] md:text-[clamp(3rem,9vw,8rem)] leading-[0.92] tracking-tightest font-normal mb-6 md:mb-7"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1' }}
          >
            <span className="block overflow-hidden">
              <span className="inline-block animate-rise">Madera</span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="inline-block italic text-accent animate-rise"
                style={{ animationDelay: "0.15s", fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                nativa,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="inline-block animate-rise"
                style={{ animationDelay: "0.3s" }}
              >
                hecha a mano.
              </span>
            </span>
          </h1>

          <p className="text-[0.95rem] sm:text-[1.05rem] text-ink-soft max-w-[440px] mb-7 sm:mb-9 leading-[1.55]">
            Puertas, ventanas y muebles trabajados pieza por pieza en pino,
            raulí y maderas chilenas. Desde nuestro taller en Linares — del
            bosque a tu hogar.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <a
              href="#"
              className="btn btn-accent btn-lg"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp();
              }}
            >
              Cotizar mi proyecto <span className="arrow">→</span>
            </a>
            <div className="inline-flex items-center gap-3 sm:gap-3.5 sm:ml-3 text-[0.78rem] sm:text-[0.82rem] text-ink-soft basis-full sm:basis-auto mt-2 sm:mt-0">
              <span className="text-accent tracking-[1px]">★ ★ ★ ★ ★</span>
              <span>Taller artesanal en Linares</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-full min-h-[400px] md:min-h-[540px] grid place-items-center">
          {/* círculo sage */}
          <div className="absolute w-[78%] aspect-square rounded-full z-[1] animate-float-circle blur-[0.5px] bg-[radial-gradient(circle_at_35%_30%,#D8DECA_0%,#A8B68F_90%)]" />
          {/* producto flotante */}
          <div
            className="relative z-[2] w-full h-full bg-no-repeat bg-contain bg-center animate-float-product"
            style={{
              backgroundImage: `url(${HERO_IMG})`,
              filter: "drop-shadow(0 30px 50px rgba(26, 20, 16, 0.25))"
            }}
          />
          {/* watermark */}
          <div className="absolute bottom-[-20px] left-[30%] font-serif italic font-light text-[clamp(8rem,18vw,18rem)] leading-[0.7] z-0 pointer-events-none select-none text-ink opacity-[0.06]">
            01
          </div>
          {/* dots */}
          <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 flex gap-2 z-[4]">
            <span className="w-6 h-1.5 rounded bg-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
            <span className="w-1.5 h-1.5 rounded-full bg-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
