"use client"

import { motion } from "framer-motion"
import { PuzzleIcon } from "@/components/icons/puzzle"
import Image from "next/image"

export function Abordagem() {
  return (
    <section id="abordagem" className="py-16 md:py-24 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-6xl">
        {/* Two main cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Left Card - Navy with puzzle icon */}
          <motion.div
            className="bg-[#0F4C5C] rounded-3xl p-8 md:p-10 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Puzzle icon */}
            <div className="mb-6">
              <PuzzleIcon className="w-16 h-16 text-white/30" />
            </div>
            
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight uppercase">
              UMA ABORDAGEM INTEGRATIVA É ESSENCIAL PARA QUE O SEU FILHO SE{" "}
              <span className="text-[#D4AF37]">DESENVOLVA PLENAMENTE</span>
            </h2>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 border-4 border-white/10 rounded-full" />
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-4 border-white/5 rounded-full" />
          </motion.div>
          
          {/* Right Card - Teal with child image */}
          <motion.div
            className="bg-[#0F4C5C] rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/90 text-lg leading-relaxed flex-1">
              <strong className="text-[#D4AF37]">
                Ela prioriza os cuidados da saúde orgânica da criança autista ou TDAH,
              </strong>{" "}
              identificando e tratando a causa de sintomas como alergias e intolerâncias alimentares, 
              distúrbios do sono, atrasos na fala e falta de concentração.
            </p>
            
            {/* Child image */}
            <div className="mt-6 flex justify-center">
              <div className="w-full max-w-[200px] aspect-square rounded-xl overflow-hidden relative">
                <Image
                  src="/images/crianca-olhando.jpg"
                  alt="Criança olhando para cima"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
