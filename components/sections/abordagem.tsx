"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Check } from "lucide-react"

const checklist = [
  "Eixo intestino-cérebro desregulado",
  "Seletividade alimentar intensa",
  "Recusa de frutas, verduras e proteínas",
  "Constipação, intestino preso ou diarreia frequente",
  "Irritabilidade e agitação",
  "Dificuldade de foco e atenção",
  "Sono ruim ou despertares noturnos",
  "Baixa imunidade",
  "Suspeita de deficiência nutricional",
  "Dificuldade de crescimento ou baixo peso",
  "Necessidade de suplementação correta"
]

export function Abordagem() {
  return (
    <section id="abordagem" className="py-12 md:py-20 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-[#1a1a1a] uppercase">
            PARA QUEM É ESSE <span className="text-[#D4AF37]">ATENDIMENTO?</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Se você é mãe ou pai atípico e seu filho apresenta:
          </p>
        </motion.div>
        
        {/* Checklist Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {checklist.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#1a1a1a] text-base md:text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Closing */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-[#1a1a1a] font-semibold mb-8">
            Então esse acompanhamento pode ajudar muito.
          </p>
          
          {/* Two-tone CTA button */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a 
                href={CONFIG.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#0F4C5C] text-white font-bold uppercase tracking-wide text-sm hover:bg-[#0a3a47] transition-colors"
              >
                QUERO AGENDAR AGORA
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
        </motion.div>
      </div>
    </section>
  )
}
