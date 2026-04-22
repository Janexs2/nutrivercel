"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Image from "next/image"

const etapas = [
  {
    titulo: "ANTES DA CONSULTA:",
    conteudo: "Envio um questionário prévio para saber mais sobre o paciente e seu histórico clínico.",
  },
  {
    titulo: "DURANTE A CONSULTA:",
    conteudo: "Realizo a anamnese, onde o paciente especifica suas principais queixas. Conversamos sobre o estilo de vida, hábitos alimentares, saúde intestinal e etc. Realizamos as primeiras metas de intervenção.",
  },
  {
    titulo: "APÓS A CONSULTA:",
    conteudo: "Realizo a prescrição de homeopatas e suplementações iniciais para o acompanhamento nutricional. Envio o plano alimentar. Envio o pedido de exames laboratoriais, para investigação de alergias, deficiências nutricionais, inflamação, etc.",
  },
  {
    titulo: "NA PRÓXIMA CONSULTA:",
    conteudo: "Avaliamos os ganhos da primeira fase e faremos a leitura dos exames. Seguimos com as investigações das comorbidades que te trouxeram até mim. Cada consulta tem uma fase específica do tratamento que é individualizado de acordo com a necessidade de cada paciente.",
  },
]

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="timeline" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Horizontal tabs indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {etapas.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#D4AF37]" : "bg-[#e0e0e0]"
              }`}
              aria-label={`Etapa ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Active card */}
        <motion.div
          key={activeIndex}
          className="bg-[#0F4C5C] rounded-3xl p-8 md:p-12 mb-8 min-h-[300px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-[#D4AF37] font-serif text-2xl md:text-3xl mb-6 italic">
            {etapas[activeIndex].titulo.replace(":", "")}:
          </h3>
          
          <ul className="space-y-4">
            {etapas[activeIndex].conteudo.split(". ").filter(Boolean).map((item, i) => (
              <li key={i} className="flex gap-3 text-white/90 text-lg">
                <span className="text-[#D4AF37] mt-1 shrink-0">•</span>
                <span>{item.endsWith(".") ? item : `${item}.`}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Tab buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {etapas.map((etapa, index) => (
            <button
              key={etapa.titulo}
              onClick={() => setActiveIndex(index)}
              className={`py-4 px-6 rounded-2xl font-bold text-left transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-[#0F4C5C] text-white" 
                  : "bg-[#0F4C5C]/10 text-[#0F4C5C] hover:bg-[#0F4C5C]/20"
              }`}
            >
              {etapa.titulo}
            </button>
          ))}
        </div>
        
        {/* WhatsApp support box */}
        <motion.div
          className="border-2 border-[#D4AF37] rounded-3xl p-6 md:p-8 mb-10"
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
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <p className="text-[#4a4a4a] text-lg text-center md:text-left flex-1">
              Entre uma consulta e outra, <span className="text-[#D4AF37] font-semibold">meu WhatsApp estará sempre disponível para tirar dúvidas e acompanhar a evolução do seu filho</span>, oferecendo todo o apoio e confiança para vocês
            </p>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
