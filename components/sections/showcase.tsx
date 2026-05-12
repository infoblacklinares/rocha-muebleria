"use client";
import { openWhatsApp } from "@/lib/whatsapp";

export function Showcase() {
  return (
    <section className="py-0">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4 mb-[var(--space)]">
          <article
            className="reveal relative rounded-lg overflow-hidden min-h-[380px] sm:min-h-[480px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/canva/muebleria-rocha.jpg')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,20,16,0.1)] to-[rgba(26,20,16,0.85)]" />
            <div className="absolute inset-5 sm:inset-10 z-[2] text-bg flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-2 mono-label bg-bg/15 border border-bg/25 px-3.5 py-2 rounded-full backdrop-blur-md">
                  <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
                  Pieza destacada
                </span>
                <span className="mono-label text-bg/70">— MADERA NATIVA</span>
              </div>
              <div>
                <h2
                  className="font-serif text-[clamp(1.6rem,4.5vw,3.5rem)] tracking-tight font-normal leading-[0.95] mb-3.5"
                  style={{ fontVariationSettings: '"opsz" 80, "SOFT" 50' }}
                >
                  Puertas y muebles
                  <br />
                  <em className="italic text-accent">a tu medida</em>
                </h2>
                <p className="max-w-[380px] text-[0.9rem] sm:text-[0.95rem] opacity-90 mb-5 sm:mb-6">
                  Fabricamos en pino, raulí y maderas nativas chilenas.
                  Del taller en Linares directo a tu hogar.
                </p>
                <a
                  href="#"
                  className="btn btn-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    openWhatsApp("puerta en raulí");
                  }}
                >
                  Cotizar este proyecto <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </article>

          <article
            className="reveal relative rounded-lg overflow-hidden min-h-[480px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/canva/puertas-pino.jpg')"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,20,16,0.1)] to-[rgba(26,20,16,0.85)]" />
            <div className="absolute inset-10 z-[2] text-bg flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center gap-2 mono-label bg-bg/15 border border-bg/25 px-3.5 py-2 rounded-full backdrop-blur-md">
                  <span className="inline-block w-1.5 h-1.5 bg-accent rounded-full" />
                  Visita el taller
                </span>
              </div>
              <div>
                <h2
                  className="font-serif text-[clamp(2rem,4.5vw,3.5rem)] tracking-tight font-normal leading-[0.95] mb-3.5"
                  style={{ fontVariationSettings: '"opsz" 80, "SOFT" 50' }}
                >
                  Pasa al
                  <br />
                  <em className="italic text-accent">taller.</em>
                </h2>
                <p className="max-w-[380px] text-[0.95rem] opacity-90 mb-6">
                  Ver, tocar y conversar con Juan. Lunes a sábado en Linares.
                </p>
                <a
                  href="#contacto"
                  className="btn btn-outline border-bg text-bg hover:bg-bg hover:text-ink"
                >
                  Cómo llegar <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
