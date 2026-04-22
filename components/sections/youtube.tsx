"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Youtube, Check } from "lucide-react"

const conteudos = [
  "Vídeos educativos sobre autismo e TDAH",
  "Dicas práticas de alimentação e nutrição",
  "Receitas adaptadas para crianças atípicas",
  "Depoimentos de famílias atendidas",
  "Orientações sobre suplementação",
  "Respostas para suas dúvidas frequentes",
]

export function YouTubeSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="bg-[#0F4C5C] rounded-3xl p-8 md:p-12 overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left - YouTube icon */}
            <motion.div 
              className="shrink-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-24 h-24 bg-[#FF0000] rounded-2xl flex items-center justify-center">
                <Youtube className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            {/* Right - Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 uppercase">
                CONTEÚDO EXCLUSIVO NO <span className="text-[#D4AF37]">YOUTUBE</span>
              </h3>
              
              <p className="text-white/80 text-lg mb-6">
                Acesse nosso canal e encontre:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {conteudos.map((conteudo, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <Check className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <span className="text-sm">{conteudo}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-white/70 text-sm mb-6">
                Compartilho semanalmente conteúdos gratuitos para ajudar famílias atípicas a encontrarem mais qualidade de vida através da alimentação e da nutrição funcional.
              </p>
              
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0F4C5C] px-8 py-6 text-base font-bold rounded-full transition-all duration-300 uppercase tracking-wide bg-transparent"
              >
                <a href={CONFIG.youtubeLink} target="_blank" rel="noopener noreferrer">
                  ACESSE NOSSO CANAL NO YOUTUBE
                </a>
              </Button>
              
              <p className="text-white/50 text-xs mt-4">
                Link será adicionado após conclusão da página
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 border-4 border-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
