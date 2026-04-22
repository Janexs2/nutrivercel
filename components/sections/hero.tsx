"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} 
        />
      </div>
      
      {/* Logo no topo */}
      <motion.div 
        className="py-6 flex justify-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full border-2 border-[#0F4C5C] flex items-center justify-center overflow-hidden">
            <span className="text-xl font-serif text-[#0F4C5C] font-bold">JM</span>
          </div>
          <span className="text-xs tracking-[0.2em] text-[#0F4C5C] font-medium uppercase text-center px-4">
            Nutrição Clínica Funcional Especializada em Autismo e TDAH
          </span>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="flex-1 flex items-center relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Mobile Only - Circular Avatar */}
            <motion.div 
              className="lg:hidden flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#0F4C5C] shadow-xl">
                <Image
                  src={CONFIG.fotoCircular}
                  alt={`${CONFIG.nome} - Nutricionista`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Desktop Only - Large Image */}
            <motion.div 
              className="hidden lg:block flex-1 max-w-lg w-full order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-4 -left-4 -right-4 -bottom-4 opacity-10">
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-[#0F4C5C]" />
                  <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#0F4C5C]" />
                </div>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-[#0F4C5C]">
                  <Image
                    src={CONFIG.fotoHero}
                    alt={`${CONFIG.nome} - Nutricionista especialista em TEA e TDAH`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            
            {/* Right - Text Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-tight mb-6 text-[#1a1a1a] text-balance uppercase">
                <span className="text-[#D4AF37]">AUTISMO E NUTRIÇÃO:</span>{" "}
                DA TEORIA À PRÁTICA
              </h1>
              
              <p className="text-xl md:text-2xl text-[#1a1a1a] font-semibold mb-4">
                Seu filho pode evoluir muito mais com a nutrição certa
              </p>
              
              <p className="text-lg text-[#4a4a4a] mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Atendimento especializado em Autismo, TDAH, seletividade alimentar, saúde intestinal e suplementação individualizada. Ajudo famílias atípicas a melhorar comportamento, foco, sono, intestino, imunidade e alimentação da criança através de um plano nutricional humanizado e baseado em ciência.
              </p>
              
              {/* Location badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-[#0F4C5C]">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Atendimento online para todo o Brasil e mundo</span>
              </div>
              
              {/* Fixed CTA buttons - stacked on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a 
                  href={CONFIG.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#0F4C5C] text-white font-bold rounded-full shadow-lg text-center whitespace-nowrap hover:bg-[#0a3a47] transition-colors"
                >
                  AGENDAR MINHA CONSULTA
                </a>
                <a 
                  href={CONFIG.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-[#D4AF37] text-[#1A1A1A] font-bold rounded-full shadow-lg text-center whitespace-nowrap hover:bg-[#c9a030] transition-colors"
                >
                  AGENDAR
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
