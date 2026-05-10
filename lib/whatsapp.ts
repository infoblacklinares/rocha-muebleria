import { siteConfig } from "./site-config";

const MSG_DEFAULT =
  "Hola, vengo del sitio web. Me gustaría cotizar una puerta/mueble.";

export function whatsappUrl(producto?: string) {
  const msg = producto
    ? `Hola, vengo del sitio web. Me gustaría cotizar un/a ${producto}.`
    : MSG_DEFAULT;
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    msg
  )}`;
}

export function openWhatsApp(producto?: string) {
  if (typeof window === "undefined") return;
  window.open(whatsappUrl(producto), "_blank", "noopener,noreferrer");
}
