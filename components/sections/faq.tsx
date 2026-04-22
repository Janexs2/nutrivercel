"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
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
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#1a1a1a]">
              F.A.Q
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
            {CONFIG.faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-[#e5e5e5] pb-4"
              >
                <AccordionTrigger className="text-left font-bold text-[#1a1a1a] hover:text-[#D4AF37] hover:no-underline py-4 text-lg uppercase">
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
    </section>
  )
}
