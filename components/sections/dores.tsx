"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"

const sintomas = [
  "comunicação",
  "sono", 
  "seletividade",
  "hiperatividade",
  "falta de foco",
  "comportamentos desafiadores",
  "constipação",
  "dores abdominais"
]

export function Dores() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#0F4C5C] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-white rounded-full" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 text-white leading-tight text-balance">
            Se você sente que já tentou de tudo...
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Talvez exista algo importante sendo ignorado: as causas orgânicas por trás dos sintomas. Muitas vezes, terapias e tratamentos têm resultados limitados porque questões como alterações intestinais, dificuldades metabólicas, inflamações, deficiências nutricionais e desequilíbrios do organismo não estão sendo investigados.
          </p>
          
          {/* Impact phrase */}
          <motion.p 
            className="font-serif text-xl md:text-2xl lg:text-3xl text-[#D4AF37] italic mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {'"'}Eu não trato o autismo. Eu trato a criança, adolescente e adulto autista.{'"'}
          </motion.p>
          
          <div className="h-px bg-white/20 mb-8 max-w-md mx-auto" />
          
          {/* Symptoms */}
          <div className="mb-10">
            <p className="text-white/80 mb-4">Sintomas comuns que podem ser tratados:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {sintomas.map((sintoma, index) => (
                <motion.span
                  key={sintoma}
                  className="bg-white/10 text-white px-4 py-2 rounded-full text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  {sintoma}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Two-tone CTA button */}
          <div className="flex justify-center">
            <div className="inline-flex rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a 
                href={CONFIG.whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white text-[#0F4C5C] font-bold uppercase tracking-wide text-sm hover:bg-gray-100 transition-colors"
              >
                AGENDAR MINHA CONSULTA AGORA
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
