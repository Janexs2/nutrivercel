"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"

export function Conexao() {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#FAF9F6]">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="bg-[#0F4C5C] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center py-8 px-6">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white uppercase">
              CUIDADO PRÓXIMO, ATENCIOSO E EFICAZ PARA A SUA{" "}
              <span className="text-[#D4AF37]">FAMÍLIA!</span>
            </h2>
          </div>
          
          {/* Image */}
          <div className="relative h-80 md:h-96">
            <Image
              src="/images/mae-filha.jpg"
              alt="Mãe com filha"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
        
        {/* Text content below */}
        <motion.div
          className="mt-10 text-center max-w-3xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Como mãe do {CONFIG.filhoNome}, <strong className="text-[#1a1a1a]">diagnosticado com TEA</strong>, vivi e ainda vivo na pele os desafios dessa jornada.
          </p>
          
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Por isso, me comprometo ainda mais com o seu filho, entendendo cada aspecto do caso e apresentando intervenções funcionais.
          </p>
          
          <p className="text-lg text-[#4a4a4a] leading-relaxed">
            Com o compromisso constante com a saúde e o bem-estar, busco entender as necessidades específicas de cada indivíduo para desenvolver um <strong className="text-[#1a1a1a]">plano de cuidados personalizado</strong>, visando uma vida plena e saudável. Nossa consulta dura mais ou menos 1 hora, ocorre em média a cada 3 meses e funciona assim:
          </p>
        </motion.div>
      </div>
    </section>
  )
}
