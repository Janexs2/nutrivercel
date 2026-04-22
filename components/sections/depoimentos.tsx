"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"

export function Depoimentos() {
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
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 text-[#1a1a1a] text-balance uppercase">
            VEJA O QUE ALGUMAS FAMÍLIAS QUE EU JÁ ATENDI{" "}
            <span className="text-[#D4AF37]">COMPARTILHAM SOBRE AS SUAS TRANSFORMAÇÕES!</span>
          </h2>
        </motion.div>
        
        {/* WhatsApp testimonials - screenshots grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Testimonial screenshot placeholders - these would be real WhatsApp screenshots */}
          {CONFIG.depoimentos.map((depoimento, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#ECE5DD]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* WhatsApp header */}
              <div className="bg-[#075E54] px-4 py-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {depoimento.nome.charAt(0)}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">
                    {depoimento.nome}
                  </p>
                  <p className="text-white/70 text-xs">online</p>
                </div>
              </div>
              
              {/* Message area */}
              <div className="p-4 min-h-[200px] bg-[#ddd5cc]">
                {/* Message bubble */}
                <div className="bg-white rounded-2xl p-4 shadow-sm max-w-[90%] relative">
                  <p className="text-[#1a1a1a] text-sm leading-relaxed">
                    {depoimento.texto}
                  </p>
                  {/* Time */}
                  <span className="text-[#999] text-xs block text-right mt-2">10:30</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a030] px-10 py-7 text-lg font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
          >
            <a href={CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar minha consulta agora
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
