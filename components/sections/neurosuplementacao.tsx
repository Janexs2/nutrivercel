"use client"

import { motion } from "framer-motion"

export function Neurosuplementacao() {
  return (
    <section className="py-16 md:py-20 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-[#0F4C5C] rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-block border-2 border-[#D4AF37] text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
              VOCÊ SABIA?
            </span>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif text-xl md:text-2xl text-white mb-6">
              <span className="text-[#D4AF37]">Com a ajuda da Neurosuplementação</span>, uma suplementação focada na saúde neurológica, que contempla vitaminas, minerais, ácidos graxos essenciais, aminoácidos e outros nutrientes essenciais é possível otimizar a função cerebral. Obtendo melhorias na cognição, foco e atenção e comportamento.
            </h3>
            
            <p className="text-white text-lg md:text-xl font-semibold">
              Um atendimento personalizado, que vai além de diagnósticos prontos e remédios controlados.
            </p>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-white/5 rounded-full" />
        </motion.div>
      </div>
    </section>
  )
}
