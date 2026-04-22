"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const servicos = [
  "Nutrição personalizada",
  "Suplementação e neurosuplementação individualizada",
  "Homeopatia",
  "Fitoterápicos",
]

export function Apoio() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Pattern strip */}
        <div className="h-16 bg-[#0F4C5C] rounded-lg mb-12 flex items-center justify-center overflow-hidden">
          <div className="flex gap-4 opacity-30">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="flex gap-2 items-center text-white/50 text-xs">
                <span>R4</span>
                <span className="w-4 h-4 rounded bg-white/20" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-12">
          <motion.h2 
            className="font-serif text-2xl sm:text-3xl md:text-4xl mb-6 text-[#1a1a1a] leading-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            VOCÊ NÃO PRECISA LIDAR SOZINHO COM OS DESAFIOS QUE SEU FILHO AUTISTA OU TDAH APRESENTA.
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#4a4a4a] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Nem se preocupar constantemente com a sua saúde e o seu futuro, sem saber como ajudá-lo.
          </motion.p>
          
          <motion.p 
            className="text-lg text-[#1a1a1a] font-semibold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tenha acesso a um cuidado integrativo, que combina:
          </motion.p>
        </div>
        
        {/* Services Card */}
        <motion.div 
          className="max-w-lg mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#D4AF37] to-[#c9a030] rounded-3xl p-8">
            <div className="space-y-4">
              {servicos.map((servico, index) => (
                <motion.div
                  key={servico}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <div className="p-2 rounded-full bg-[#0F4C5C]">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1a1a1a] font-medium text-lg">{servico}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-[#0F4C5C] text-white hover:bg-[#0a3a47] px-8 py-6 text-base font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
          >
            <a href={CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar minha consulta agora
            </a>
          </Button>
          
          <Button 
            asChild
            size="lg"
            className="bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a030] px-8 py-6 text-base font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
          >
            <a href={CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
              AGENDAR
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
