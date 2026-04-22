"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { BookOpen, MessageCircle } from "lucide-react"

export function HotmartSection() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 text-[#1a1a1a] uppercase">
            MATERIAIS COMPLEMENTARES <span className="text-[#D4AF37]">EXCLUSIVOS</span>
          </h2>
          <p className="text-lg text-[#4a4a4a]">
            Recursos desenvolvidos especialmente para famílias atípicas:
          </p>
        </motion.div>
        
        {/* Product cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {CONFIG.hotmartProdutos.map((produto, index) => (
            <motion.div
              key={produto.titulo}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#0F4C5C] rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-[#D4AF37]" />
              </div>
              
              <h3 className="font-bold text-[#1a1a1a] text-lg mb-3 uppercase">
                {produto.titulo}
              </h3>
              
              <p className="text-[#4a4a4a] text-sm mb-6 leading-relaxed">
                {produto.descricao}
              </p>
              
              <Button 
                asChild
                className="w-full bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a030] font-bold rounded-full"
              >
                <a href={CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
                  QUERO ADQUIRIR AGORA
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* WhatsApp note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[#4a4a4a] flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            Dúvidas sobre os produtos? Me chame no WhatsApp!
          </p>
        </motion.div>
      </div>
    </section>
  )
}
