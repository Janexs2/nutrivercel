"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export function Neurosuplementacao() {
  return (
    <section className="py-12 md:py-20 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          className="bg-[#0F4C5C] rounded-2xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 border-2 border-[#D4AF37] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Metodologia Exclusiva
            </span>
          </div>
          
          <div className="text-center">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-6 uppercase">
              COM A <span className="text-[#D4AF37]">NEUROSUPLEMENTAÇÃO</span>
            </h3>
            
            <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
              Uma estratégia nutricional voltada para o equilíbrio e desempenho neurológico. Utilizamos vitaminas, minerais, ácidos graxos essenciais, aminoácidos e outros nutrientes fundamentais para favorecer o funcionamento saudável do cérebro.
            </p>
            
            <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto">
              Quando indicada de forma individualizada, essa abordagem pode contribuir para melhorias na <strong className="text-[#D4AF37]">cognição, foco, atenção, aprendizado e comportamento</strong>.
            </p>
            
            <p className="text-white text-lg md:text-xl font-semibold max-w-3xl mx-auto">
              Tudo isso por meio de um atendimento personalizado, que enxerga a criança de forma integral, investigando causas e necessidades específicas, indo muito além de diagnósticos prontos e do uso isolado de medicações controladas.
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
