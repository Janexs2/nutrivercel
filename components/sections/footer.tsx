"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 bg-[#0F4C5C]">
      <div className="container mx-auto max-w-4xl">
        {/* Final CTA */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 text-balance">
            Seu filho merece um acompanhamento nutricional especializado
          </h3>
          
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Você não precisa testar tudo sozinha(o). Receba orientação segura, individualizada e acolhedora.
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a030] px-10 py-7 text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
          >
            <a href={CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
              Agende sua consulta agora
            </a>
          </Button>
        </motion.div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a 
            href={CONFIG.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
          <a 
            href={CONFIG.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="YouTube"
          >
            <Youtube className="w-5 h-5 text-white" />
          </a>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/20 mb-8" />
        
        {/* Credits */}
        <div className="text-center text-sm text-white/60">
          <p>
            Joice Liermann Mazzini | Nutrição Funcional | {CONFIG.crn} | &copy; 2025 Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
