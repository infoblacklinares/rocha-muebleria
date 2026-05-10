"use client";
import { openWhatsApp } from "@/lib/whatsapp";
import { WAIcon } from "./wa-icon";

export function WAFloat() {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        openWhatsApp();
      }}
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 w-14 h-14 bg-whatsapp rounded-full grid place-items-center z-[99] shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp opacity-50 animate-ping -z-10" />
      <WAIcon className="w-6 h-6 fill-white relative z-10" />
    </a>
  );
}
