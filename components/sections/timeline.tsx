"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"

const etapas = [
  {
    titulo: "ANTES DA CONSULTA",
    conteudo: "Envio um questionário prévio para saber mais sobre o paciente e seu histórico clínico.",
  },
  {
    titulo: "DURANTE A CONSULTA",
    conteudo: "Realizo a anamnese, onde o paciente especifica suas principais queixas. Conversamos sobre o estilo de vida, hábitos alimentares, saúde intestinal e etc. Realizamos as primeiras metas de intervenção.",
  },
  {
    titulo: "APÓS A CONSULTA",
    conteudo: "Realizo a prescrição de homeopatas e suplementações iniciais para o acompanhamento nutricional. Envio o plano alimentar. Envio o pedido de exames laboratoriais, para investigação de alergias, deficiências nutricionais, inflamação, etc.",
  },
  {
    titulo: "NA PRÓXIMA CONSULTA",
    conteudo: "Avaliamos os ganhos da primeira fase e faremos a leitura dos exames. Seguimos com as investigações das comorbidades que te trouxeram até mim. Cada consulta tem uma fase específica do tratamento que é individualizado de acordo com a necessidade de cada paciente.",
  },
]

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="timeline" className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Horizontal pill tabs */}
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8">
          {etapas.map((etapa, index) => (
            <button
              key={etapa.titulo}
              onClick={() => setActiveIndex(index)}
              className={`px-5 py-3 rounded-full font-bold text-sm md:text-base transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-[#D4AF37] text-[#1A1A1A] shadow-lg scale-105" 
                  : "bg-white/10 border-2 border-[#0F4C5C]/20 text-[#0F4C5C] hover:bg-[#0F4C5C]/10"
              }`}
            >
              {etapa.titulo}
            </button>
          ))}
        </div>
        
        {/* Active content card */}
        <motion.div
          key={activeIndex}
          className="bg-[#0F4C5C] rounded-2xl p-8 md:p-12 shadow-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-[#D4AF37] font-serif text-2xl md:text-3xl mb-6 italic">
            {etapas[activeIndex].titulo}:
          </h3>
          
          <p className="text-white/90 text-lg md:text-xl leading-relaxed">
            {etapas[activeIndex].conteudo}
          </p>
        </motion.div>
        
        {/* WhatsApp support box */}
        <motion.div
          className="border-2 border-[#D4AF37] rounded-2xl p-6 md:p-8 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Photo with WhatsApp icon */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#0F4C5C]">
                <Image
                  src={CONFIG.fotoCircular}
                  alt={CONFIG.nome}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
            </div>
            
            <p className="text-[#4a4a4a] text-lg text-center md:text-left flex-1">
              Entre uma consulta e outra, <span className="text-[#D4AF37] font-semibold">meu WhatsApp estará sempre disponível para tirar dúvidas e acompanhar a evolução do seu filho</span>, oferecendo todo o apoio e confiança para vocês.
            </p>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <a 
              href={CONFIG.whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#0F4C5C] text-white font-bold uppercase tracking-wide text-sm hover:bg-[#0a3a47] transition-colors"
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
        </motion.div>
      </div>
    </section>
  )
}
