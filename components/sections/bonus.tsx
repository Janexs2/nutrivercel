"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Gift } from "lucide-react"
import Image from "next/image"

export function Bonus() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#0F4C5C] relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 flex flex-col gap-2 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute bottom-10 right-10 flex flex-col gap-2 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(5)].map((_, j) => (
              <div key={j} className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            ))}
          </div>
        ))}
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Closing text */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-6 text-white text-balance uppercase">
            AGENDE A CONSULTA DO SEU FILHO E GARANTA O ACOMPANHAMENTO DEDICADO QUE VOCÊS{" "}
            <span className="text-[#D4AF37]">MERECEM</span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Já imaginou poder proporcionar mais saúde, bem-estar e qualidade de vida para quem você mais ama, 
            atuando na causa dos seus sintomas? Através de uma abordagem natural, que integra suplementação, 
            uma dieta anti-inflamatória, homeopáticos e fitoterápicos?{" "}
            <strong className="text-white">
              A Abordagem Integrativa é a alternativa segura que o seu filho precisa para se desenvolver.
            </strong>
          </p>
        </motion.div>
        
        {/* Bonus Card */}
        <motion.div
          className="bg-[#0a3a47] rounded-3xl overflow-hidden mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            {/* E-book image */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex justify-center">
              <div className="relative w-52 aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={CONFIG.ebookImage}
                  alt="E-book Receitas para Crianças Atípicas"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6 md:p-8">
              {/* Gift badge */}
              <div className="absolute top-4 right-4 md:relative md:top-auto md:right-auto md:mb-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-lg flex items-center justify-center">
                  <Gift className="w-6 h-6 text-[#0F4C5C]" />
                </div>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-white uppercase">
                <span className="text-[#D4AF37]">BÔNUS ESPECIAL:</span> E-BOOK RECEITAS PARA CRIANÇAS ATÍPICAS
              </h3>
              
              <div className="h-px bg-[#D4AF37] w-full mb-6" />
              
              <p className="text-white/80 leading-relaxed mb-4">
                Receba de presente após a primeira consulta nosso e-book de receitas sem glúten 
                e sem caseína, desenvolvido especialmente para crianças autistas ou TDAH.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                Sei como é um desafio encontrar receitas confiáveis para o seu filho, por isso, 
                desenvolvi esse material reunindo receitas que adaptamos para o {CONFIG.filhoNome}, 
                para te oferecer opções deliciosas, nutritivas e práticas.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#c9a030] px-12 py-8 text-xl font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-wide"
          >
            <a href={CONFIG.whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar minha consulta agora
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
