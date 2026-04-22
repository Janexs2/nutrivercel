"use client"

import { motion } from "framer-motion"
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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 text-[#1a1a1a] uppercase">
            CONTEÚDO EXCLUSIVO NO <span className="text-[#D4AF37]">YOUTUBE</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Compartilho semanalmente conteúdos gratuitos para ajudar famílias atípicas a encontrarem mais qualidade de vida através da alimentação e da nutrição funcional.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* YouTube Embed */}
          <motion.div
            className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="Canal YouTube - Autismo e Nutrição"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div
            className="bg-[#0F4C5C] rounded-2xl p-8 md:p-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-[#FF0000] rounded-2xl flex items-center justify-center">
                <Youtube className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-white">
                Acesse nosso canal e encontre:
              </h3>
            </div>
            
            <div className="grid gap-3 mb-8">
              {conteudos.map((conteudo, index) => (
                <div key={index} className="flex items-center gap-3 text-white/90">
                  <Check className="w-5 h-5 text-[#D4AF37] shrink-0" />
                  <span>{conteudo}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://www.youtube.com/@autismonutricaotea" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF0000] text-white font-bold rounded-full shadow-lg hover:bg-[#cc0000] transition-colors"
            >
              <Youtube className="w-5 h-5" />
              ACESSE NOSSO CANAL
            </a>
            
            <p className="text-[#25D366] text-sm mt-4 font-medium">
              Link ativo
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
