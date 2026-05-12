import type { Metadata, Viewport } from "next";
import { Fraunces, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"]
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: {
    default: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.shortName}`
  },
  description: siteConfig.description,
  keywords: [
    "mueblería linares",
    "puertas de madera linares",
    "muebles a medida chile",
    "puertas de raulí linares",
    "puertas de pino linares",
    "ventanas de madera linares",
    "carpintería linares",
    "muebles a medida maule",
    "cocinas a medida linares",
    "madera nativa chile",
    "raulí",
    "taller de madera linares"
  ],
  authors: [{ name: siteConfig.owner.name }],
  creator: siteConfig.credits.studio,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.site.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/canva/muebleria-rocha.jpg", width: 400, height: 500, alt: siteConfig.fullName }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/canva/muebleria-rocha.jpg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.site.url }
};

export const viewport: Viewport = {
  themeColor: "#F8F4ED",
  width: "device-width",
  initialScale: 1
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.fullName,
  description: siteConfig.description,
  url: siteConfig.site.url,
  telephone: `+${siteConfig.contact.whatsapp}`,
  foundingDate: String(siteConfig.site.established),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.location.address,
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: "CL"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-35.8500",
    longitude: "-71.5833"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "09:00",
      closes: "20:00"
    }
  ],
  priceRange: "$$",
  image: `${siteConfig.site.url}/canva/muebleria-rocha.jpg`,
  sameAs: []
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${fraunces.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
