"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    pergunta: "O atendimento é online?",
    resposta: "Sim. Atendo famílias de todo Brasil e Brasileiros fora do Brasil."
  },
  {
    pergunta: "Criança que só come poucos alimentos pode melhorar?",
    resposta: "Sim. Com investigação, suplementação, estratégia, paciência e acompanhamento adequado."
  },
  {
    pergunta: "Você passa suplementos?",
    resposta: "Sim. Quando há necessidade individual avaliada em consulta."
  },
  {
    pergunta: "Precisa levar exames?",
    resposta: "Se tiver, ótimo. Se não tiver, avaliamos na consulta a necessidade."
  },
  {
    pergunta: "Atende adolescentes e adultos com TDAH?",
    resposta: "Sim."
  },
  {
    pergunta: "Com qual frequência devo marcar?",
    resposta: "Em média a cada 3 meses, conforme evolução."
  }
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* FAQ title with decorative lines */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-[#D4AF37] w-16" />
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] uppercase">
                PERGUNTAS FREQUENTES
              </h2>
              <div className="h-px bg-[#D4AF37] w-16" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-[#e5e5e5] pb-4"
                >
                  <AccordionTrigger className="text-left font-bold text-[#1a1a1a] hover:text-[#D4AF37] hover:no-underline py-4 text-lg">
                    {item.pergunta}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#4a4a4a] pb-4 leading-relaxed text-base">
                    {item.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
