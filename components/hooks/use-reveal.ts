"use client";
import { useEffect } from "react";

/**
 * Hook que aplica .in a todos los .reveal cuando entran al viewport.
 * Llamar una vez en page.tsx o en un componente cliente padre.
 */
export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
