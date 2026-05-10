"use client";
import { openWhatsApp } from "@/lib/whatsapp";

type Props = {
  producto?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
};

/** Botón/link que abre WhatsApp. Wrappear cualquier elemento con onClick. */
export function WAButton({ producto, className, children, ariaLabel }: Props) {
  return (
    <a
      href="#"
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp(producto);
      }}
    >
      {children}
    </a>
  );
}
