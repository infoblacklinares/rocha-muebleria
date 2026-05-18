"use client";
import { siteConfig } from "@/lib/site-config";
import { openWhatsApp } from "@/lib/whatsapp";

const MAPS_DIR = `https://maps.google.com/?q=${encodeURIComponent(
  siteConfig.location.mapsQuery
)}`;

export function Footer() {
  return (
    <footer className="py-20 bg-bg">
      <div className="wrap">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-16">
          <div>
            <a href="/" className="inline-flex items-center gap-2.5 mb-5">
              <span className="w-[30px] h-[30px] bg-ink text-bg grid place-items-center rounded-full font-serif italic text-[0.95rem]">
                R
              </span>
              <span className="font-serif text-[1.4rem] font-medium tracking-tighter">
                Rocha
              </span>
            </a>
            <p className="text-ink-soft text-[0.95rem] max-w-[320px] mb-6">
              {siteConfig.fullName}. Madera nativa, hecha a mano en{" "}
              {siteConfig.location.city} desde {siteConfig.site.established}.
            </p>
            <span className="mono-label text-accent">
              EST. {siteConfig.site.established} · {siteConfig.location.city.toUpperCase()}, CL
            </span>
          </div>

          <div>
            <h5 className="mono-label text-accent mb-5">Catálogo</h5>
            <a href="#productos" className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors">
              Puertas en raulí
            </a>
            <a href="#productos" className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors">
              Puertas de pino
            </a>
            <a href="#productos" className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors">
              Muebles a medida
            </a>
            <a href="#productos" className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors">
              Ventanas
            </a>
          </div>

          <div>
            <h5 className="mono-label text-accent mb-5">Taller</h5>
            <a
              href={MAPS_DIR}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[0.95rem] mb-2.5 leading-[1.6] hover:text-accent transition-colors"
            >
              {siteConfig.location.address}
              <br />
              {siteConfig.location.city}, Maule
            </a>
            <p className="text-[0.95rem] leading-[1.6]">
              {siteConfig.hours.days}
              <br />
              {siteConfig.hours.range}
            </p>
          </div>

          <div>
            <h5 className="mono-label text-accent mb-5">Contacto</h5>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openWhatsApp();
              }}
              className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors"
            >
              WhatsApp →
            </a>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors"
              >
                Instagram →
              </a>
            )}
            <a href="#contacto" className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors">
              Cómo llegar →
            </a>
            <a href="#proceso" className="block text-[0.95rem] mb-2.5 hover:text-accent transition-colors">
              Cotizar proyecto →
            </a>
          </div>
        </div>

        <div
          className="font-serif italic font-light text-[clamp(5rem,22vw,22rem)] leading-[0.85] tracking-[-0.05em] text-ink opacity-[0.06] my-10 text-center select-none"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
        >
          Rocha
        </div>

        <div className="pt-8 border-t border-line flex flex-wrap justify-between gap-4 font-mono text-[0.7rem] tracking-[0.1em] text-ink-soft uppercase">
          <div>
            © {new Date().getFullYear()} {siteConfig.fullName} · Todos los
            derechos reservados
          </div>
          <div>
            Hecho por{" "}
            <a href={siteConfig.credits.studioUrl} target="_blank" rel="noopener noreferrer" className="text-accent">
              {siteConfig.credits.studio}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
