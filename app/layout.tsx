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
    "raulí",
    "madera nativa",
    "cocinas a medida maule",
    "carpintería linares"
  ],
  authors: [{ name: siteConfig.owner.name }],
  creator: siteConfig.credits.studio,
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteConfig.site.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    description: siteConfig.description
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} · ${siteConfig.tagline}`,
    description: siteConfig.description
  },
  robots: { index: true, follow: true }
};

export const viewport: Viewport = {
  themeColor: "#F8F4ED",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-CL"
      className={`${fraunces.variable} ${bricolage.variable} ${jetbrains.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
