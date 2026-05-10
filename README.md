# Mueblería Rocha · Next.js

Sitio web de **Mueblería Puertas y Ventanas Rocha** (Linares, Chile), construido con Next.js 14 (App Router) + TypeScript + Tailwind.

> 📦 **¿Quieres subir esto a internet?** Lee [`DEPLOY.md`](./DEPLOY.md) — guía paso a paso para GitHub + Vercel (10 min).

## Stack

- **Next.js 14** (App Router, RSC + client components)
- **TypeScript** strict
- **Tailwind CSS** con tokens de diseño personalizados
- **next/font** para Fraunces (variable), Bricolage Grotesque y JetBrains Mono
- Animaciones puras con CSS + IntersectionObserver (sin librerías externas)

## Instalación

```bash
cd rocha-nextjs
npm install
cp .env.example .env.local      # editar con datos reales
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Variables de entorno

Editar `.env.local`:

```
NEXT_PUBLIC_WHATSAPP_NUMBER=56987654321
NEXT_PUBLIC_BUSINESS_EMAIL=
NEXT_PUBLIC_SITE_URL=https://muebleriarocha.cl
```

Formato del WhatsApp: `56` + `9` + 8 dígitos, sin `+` ni espacios.

## Estructura

```
rocha-nextjs/
├── app/
│   ├── layout.tsx          # Fuentes + metadata SEO/OG
│   ├── page.tsx            # Home (compone todas las secciones)
│   └── globals.css         # Tokens, base, componentes utility
├── components/
│   ├── sections/           # Una sección = un archivo
│   │   ├── nav.tsx
│   │   ├── hero.tsx
│   │   ├── marquee.tsx
│   │   ├── categories.tsx
│   │   ├── banners.tsx
│   │   ├── products.tsx    # con tabs (client)
│   │   ├── materials.tsx
│   │   ├── showcase.tsx
│   │   ├── process.tsx
│   │   ├── gallery.tsx
│   │   ├── location.tsx
│   │   ├── cta-final.tsx
│   │   └── footer.tsx
│   ├── ui/                 # Pequeños componentes reusables
│   │   ├── scroll-progress.tsx
│   │   ├── wa-button.tsx
│   │   ├── wa-icon.tsx
│   │   └── wa-float.tsx
│   └── hooks/
│       └── use-reveal.ts   # Animaciones al hacer scroll
├── lib/
│   ├── site-config.ts      # Datos del negocio (1 sola fuente de verdad)
│   ├── data.ts             # Catálogo, materiales, pasos, galería
│   └── whatsapp.ts         # Helper para abrir WhatsApp
├── tailwind.config.ts      # Tokens de marca
└── next.config.mjs
```

## ¿Dónde edito qué?

| Quiero cambiar...               | Archivo                                |
| ------------------------------- | -------------------------------------- |
| Datos del negocio (dirección, horario, dueño) | `lib/site-config.ts`        |
| Productos del catálogo          | `lib/data.ts`                          |
| Imágenes de productos           | `lib/data.ts` (campo `image`)          |
| Colores y tipografía            | `tailwind.config.ts`                   |
| Número WhatsApp                 | `.env.local`                           |
| Metadatos SEO / OpenGraph       | `app/layout.tsx`                       |

## Diseño

Paleta:
- **Background**: cream cálido `#F8F4ED`
- **Accent**: naranja `#E87B3E` (CTAs principales)
- **Ink**: marrón oscuro `#1A1410`
- **Sage**: `#D8DECA` (fondo decorativo del hero)
- **WhatsApp**: `#25D366`

Tipografía:
- **Fraunces** (variable: opsz, SOFT, WONK, ital) — display
- **Bricolage Grotesque** — UI / cuerpo
- **JetBrains Mono** — etiquetas técnicas

## Deploy

Recomendado: **Vercel** (gratis para este proyecto).

```bash
npm i -g vercel
vercel
```

Configurar las variables de entorno en Vercel Dashboard antes del primer deploy.

## Próximos pasos sugeridos

1. **CMS**: mover `lib/data.ts` a Sanity / Payload / Contentlayer.
2. **Imágenes**: usar `next/image` y subirlas al repo o a Cloudinary.
3. **Páginas de detalle**: `app/productos/[slug]/page.tsx` para cada producto.
4. **Internacionalización**: middleware de i18n si lanzan en otros mercados.
5. **Analytics**: Vercel Analytics o Plausible.
# rocha-muebleria
