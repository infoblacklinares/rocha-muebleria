/**
 * Datos del catálogo — listos para mover a CMS o base de datos cuando escales.
 * Por ahora viven aquí para que sean fácil de editar.
 */

export type Category = {
  slug: string;
  title: string;
  badge: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  image: string;
  tags: Array<"hot" | "nuevo" | "premium" | "a-medida" | "popular" | "pedido">;
  rating?: number;
  whatsappProduct: string;
};

export type Material = {
  slug: string;
  name: string;
  latin: string;
  description: string;
  swatchClass: string;
};

export type Step = {
  num: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  id: string;
  category: string;
  caption: string;
  image: string;
  size: "gx-1" | "gx-2" | "gx-3" | "gx-4" | "gx-5";
};

// ===== CATEGORÍAS =====
export const categories: Category[] = [
  {
    slug: "puertas-pino",
    title: "Puertas pino",
    badge: "12 modelos",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85"
  },
  {
    slug: "puertas-rauli",
    title: "Puertas raulí",
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=600&q=85"
  },
  {
    slug: "muebles",
    title: "Muebles",
    badge: "A pedido",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=85"
  }
];

// ===== PRODUCTOS (sin precios — cotización personalizada) =====
export const products: Product[] = [
  {
    id: "p-pino-clasica",
    slug: "puerta-pino-clasica",
    name: "Puerta pino clásica",
    category: "PUERTA · INTERIOR",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85",
    tags: ["hot"],
    rating: 5,
    whatsappProduct: "puerta de pino"
  },
  {
    id: "p-rauli-natural",
    slug: "puerta-rauli-natural",
    name: "Puerta raulí natural",
    category: "PUERTA · RAULÍ",
    image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=800&q=85",
    tags: ["nuevo", "premium"],
    rating: 5,
    whatsappProduct: "puerta de raulí"
  },
  {
    id: "p-mesa-rauli",
    slug: "mesa-rauli-maciza",
    name: "Mesa raulí maciza",
    category: "MESA · COMEDOR",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=85",
    tags: ["popular"],
    rating: 5,
    whatsappProduct: "mesa de raulí"
  },
  {
    id: "p-estante-rauli",
    slug: "estante-rauli",
    name: "Estante en raulí",
    category: "ESTANTERÍA",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=85",
    tags: ["nuevo"],
    rating: 5,
    whatsappProduct: "estantería"
  },
  {
    id: "p-comoda-rauli",
    slug: "comoda-rauli",
    name: "Cómoda raulí",
    category: "CÓMODA · DORMITORIO",
    image: "https://images.unsplash.com/photo-1616627052149-22c4f8a6316e?w=800&q=85",
    tags: ["premium"],
    rating: 5,
    whatsappProduct: "cómoda"
  },
  {
    id: "p-ventana-pino",
    slug: "ventana-pino",
    name: "Ventana pino",
    category: "VENTANA · TERMOPANEL",
    image: "https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=800&q=85",
    tags: ["pedido"],
    rating: 5,
    whatsappProduct: "ventana de madera"
  }
];

// ===== MATERIALES (solo lo que se trabaja: pino, raulí, roble) =====
export const materials: Material[] = [
  {
    slug: "pino",
    name: "Pino",
    latin: "Pinus radiata",
    description:
      "Versátil, liviano y fácil de trabajar. Ideal para puertas y muebles funcionales.",
    swatchClass: "swatch-pino"
  },
  {
    slug: "rauli",
    name: "Raulí",
    latin: "Nothofagus alpina",
    description:
      "Nativa, densa y de hermoso veteado. Para piezas destacadas que duran décadas.",
    swatchClass: "swatch-rauli"
  },
  {
    slug: "roble",
    name: "Roble",
    latin: "Nothofagus obliqua",
    description:
      "Dura, estable y duradera. La madera de toda la vida para estructuras.",
    swatchClass: "swatch-roble"
  }
];

// ===== PROCESO =====
export const steps: Step[] = [
  {
    num: "01",
    title: "Conversamos",
    description:
      "Cuéntanos qué necesitas. WhatsApp, correo o pásate al taller. Sin compromiso."
  },
  {
    num: "02",
    title: "Diseño",
    description:
      "Te enviamos diseño con medidas, materiales y precio claro. Ajustamos hasta que calce."
  },
  {
    num: "03",
    title: "Fabricación",
    description:
      "Trabajamos tu pieza en el taller. Te mantenemos al día con fotos del avance."
  },
  {
    num: "04",
    title: "Entrega",
    description:
      "Coordinamos entrega en Linares y alrededores. Si va instalada, lo dejamos listo."
  }
];

// ===== GALERÍA =====
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    category: "Fachada · Linares",
    caption: "Foto: fachada del local",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1400&q=85",
    size: "gx-1"
  },
  {
    id: "g2",
    category: "Puerta de raulí",
    caption: "Foto: puertas terminadas",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
    size: "gx-2"
  },
  {
    id: "g3",
    category: "Mueble en raulí",
    caption: "Foto: muebles a medida",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=85",
    size: "gx-3"
  },
  {
    id: "g4",
    category: "Taller",
    caption: "Foto: taller en proceso",
    image: "https://images.unsplash.com/photo-1565374395542-0ce18882c857?w=900&q=85",
    size: "gx-4"
  },
  {
    id: "g5",
    category: "Mueble a pedido",
    caption: "Foto: muebles a medida",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=85",
    size: "gx-5"
  }
];
