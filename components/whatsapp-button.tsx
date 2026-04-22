"use client"

import { CONFIG } from "@/lib/config"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href={CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  )
}
