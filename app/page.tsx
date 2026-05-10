"use client";
import { useReveal } from "@/components/hooks/use-reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { WAFloat } from "@/components/ui/wa-float";
import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Categories } from "@/components/sections/categories";
import { Banners } from "@/components/sections/banners";
import { Products } from "@/components/sections/products";
import { Materials } from "@/components/sections/materials";
import { Showcase } from "@/components/sections/showcase";
import { Process } from "@/components/sections/process";
import { Gallery } from "@/components/sections/gallery";
import { Location } from "@/components/sections/location";
import { CTAFinal } from "@/components/sections/cta-final";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  useReveal();

  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Categories />
        <Banners />
        <Products />
        <Materials />
        <Showcase />
        <Process />
        <Gallery />
        <Location />
        <CTAFinal />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}
