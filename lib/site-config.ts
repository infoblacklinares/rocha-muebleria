/**
 * SITE CONFIG — fuente única de verdad para datos del negocio.
 * Edita estos valores y se actualizan en todo el sitio.
 */
export const siteConfig = {
  name: "Mueblería Rocha",
  fullName: "Mueblería Puertas y Ventanas Rocha",
  shortName: "Rocha",
  tagline: "Madera nativa, hecha a mano.",
  description:
    "Taller artesanal en Linares. Puertas, ventanas y muebles en pino, raulí y maderas nativas chilenas. Desde 2003.",

  owner: {
    name: "Juan Rocha",
    role: "Maestro mueblista · Fundador"
  },

  location: {
    address: "Delfín del Valle 7",
    city: "Linares",
    region: "Región del Maule",
    country: "Chile",
    coords: { lat: "35°51′S", lng: "71°35′W" },
    mapsQuery: "Delfín del Valle 7, 3580399 Linares, Maule"
  },

  hours: {
    days: "Lunes a sábado",
    range: "9:00 — 20:00 hrs"
  },

  contact: {
    // ⚠️ Reemplazar por número real (formato: 56 + 9 + 8 dígitos, sin '+' ni espacios)
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "56973661593",
    email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL ?? ""
  },

  social: {
    instagram: "",
    facebook: ""
  },

  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://infoblack.cl/",
    locale: "es-CL",
    established: 2003
  },

  credits: {
    studio: "InfoBl@ck",
    studioUrl: "https://infoblack.cl"
  }
} as const;

/**
 * Devuelve la estación actual en Chile (hemisferio sur, VII Región del Maule).
 */
export function getEstacionChile(date: Date = new Date()) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  if ((m === 12 && d >= 21) || m === 1 || m === 2 || (m === 3 && d <= 20)) return "Verano";
  if ((m === 3 && d >= 21) || m === 4 || m === 5 || (m === 6 && d <= 20)) return "Otoño";
  if ((m === 6 && d >= 21) || m === 7 || m === 8 || (m === 9 && d <= 20)) return "Invierno";
  return "Primavera";
}

/** Devuelve "Catálogo Otoño · 2026" según la fecha actual en Chile. */
export function getCatalogLabel(date: Date = new Date()) {
  return `Catálogo ${getEstacionChile(date)} · ${date.getFullYear()}`;
}

export type SiteConfig = typeof siteConfig;
