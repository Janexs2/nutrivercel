"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Check } from "lucide-react"

const evaluationItems = [
  "Histórico clínico",
  "Exames laboratoriais",
  "Sintomas gastrointestinais",
  "Comportamento alimentar",
  "Rotina da família",
  "Sensibilidades sensoriais",
  "Sono e comportamento",
  "Necessidade de suplementação"
]

export function Conexao() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 text-[#1a1a1a] uppercase">
            COMO FUNCIONA O <span className="text-[#D4AF37]">ACOMPANHAMENTO</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-[#0F4C5C] font-semibold mb-4">
            Consulta Nutricional Individualizada
          </p>
          
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Cada criança é única. Por isso, o plano também precisa ser.
          </p>
        </motion.div>
        
        {/* Evaluation Card */}
        <motion.div
          className="bg-[#0F4C5C] rounded-2xl p-8 md:p-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-white/80 text-center mb-6">Na avaliação, analiso:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {evaluationItems.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#0F4C5C]" />
                </div>
                <span className="text-white text-base md:text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
          
          <p className="text-white text-center text-lg font-semibold">
            Depois disso, você recebe um <span className="text-[#D4AF37]">plano estratégico totalmente personalizado</span>.
          </p>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Two-tone CTA button */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a 
                href={CONFIG.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#0F4C5C] text-white font-bold uppercase tracking-wide text-sm hover:bg-[#0a3a47] transition-colors"
              >
                AGENDAR CONSULTA AGORA
              </a>
              <a 
                href={CONFIG.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#D4AF37] text-[#1a1a1a] font-bold uppercase tracking-wide text-sm hover:bg-[#c9a030] transition-colors"
              >
                AGENDAR
              </a>
            </div>
          </div>
          
          {/* Note */}
          <p className="text-[#4a4a4a] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Entre uma consulta e outra, <span className="text-[#D4AF37] font-semibold">meu WhatsApp estará sempre disponível para tirar dúvidas e acompanhar a evolução do seu filho</span>, oferecendo todo o apoio e confiança para vocês.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
