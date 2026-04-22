"use client"

import { motion } from "framer-motion"
import { Utensils, ShieldAlert, FileX, Pill, Heart, Users } from "lucide-react"

const painPoints = [
  {
    icon: Utensils,
    text: "Stress na hora das refeições"
  },
  {
    icon: ShieldAlert,
    text: "Medo da criança não se nutrir bem"
  },
  {
    icon: FileX,
    text: "Tentativas frustradas com dietas prontas"
  },
  {
    icon: Pill,
    text: "Uso de suplementos sem orientação"
  },
  {
    icon: Heart,
    text: "Cansaço emocional"
  },
  {
    icon: Users,
    text: "Falta de profissionais que entendam neurodivergência"
  }
]

export function Apoio() {
  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-[#1a1a1a] uppercase text-balance">
            VOCÊ NÃO PRECISA PASSAR POR ISSO <span className="text-[#D4AF37]">SOZINHA(O)</span>
          </h2>
        </motion.div>
        
        {/* Pain points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.text}
                className="bg-[#FAF9F6] rounded-2xl p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className="w-12 h-12 bg-[#0F4C5C] rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <p className="text-[#1a1a1a] font-medium text-lg">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
        
        {/* Reassurance */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg md:text-xl text-[#4a4a4a] max-w-2xl mx-auto">
            Meu trabalho é <strong className="text-[#0F4C5C]">acolher sua família</strong> e construir um caminho possível, leve e eficiente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
