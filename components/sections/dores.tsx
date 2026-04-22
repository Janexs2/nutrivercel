"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function Dores() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#0F4C5C] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
        <div className="absolute bottom-20 left-20 w-24 h-24 border-4 border-white rounded-full" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left - Image with PERDIDO text */}
          <motion.div 
            className="flex-1 max-w-md lg:max-w-lg w-full relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Vertical PERDIDO text */}
              <div className="absolute -right-4 lg:-right-8 top-0 bottom-0 flex items-center z-10">
                <span className="text-[#D4AF37]/20 font-serif text-6xl lg:text-8xl font-bold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                  PERDIDO
                </span>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#0a3a47]">
                <Image
                  src="/images/pai-filho.jpg"
                  alt="Pai com filho"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Right - Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-white leading-tight uppercase">
              <span className="text-[#D4AF37]">SE SENTE PERDIDO</span>{" "}
              EM MEIO AOS TRATAMENTOS E TERAPIAS PARA O SEU FILHO AUTISTA OU TDAH?
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Talvez você não saiba, mas causas orgânicas afetam os resultados dessas abordagens e impedem seus avanços.
            </p>
            
            <div className="h-px bg-white/20 mb-8" />
            
            <p className="text-lg text-white/90 mb-4">
              Se o seu filho apresenta{" "}
              <strong className="text-white">dificuldades na comunicação, problemas para dormir, seletividade alimentar, hiperatividade, falta de foco, comportamentos desafiadores e agressivos, distúrbios gastrointestinais</strong>{" "}
              e outros, saiba que esses sintomas não são normais.
            </p>
            
            <div className="h-px bg-white/20 mt-8" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
