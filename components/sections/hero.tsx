"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Logo no topo */}
      <motion.div 
        className="py-6 flex justify-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full border-2 border-[#0F4C5C] flex items-center justify-center overflow-hidden">
            <span className="text-xl font-serif text-[#0F4C5C] font-bold">JM</span>
          </div>
          <span className="text-xs tracking-[0.2em] text-[#0F4C5C] font-medium uppercase">
            {CONFIG.badge}
          </span>
        </div>
      </motion.div>
      
      {/* Content */}
      <div className="flex-1 flex items-center px-4 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left - Image */}
            <motion.div 
              className="flex-1 max-w-md lg:max-w-lg w-full order-1 lg:order-1"
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
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl bg-[#0F4C5C]">
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
              className="flex-1 text-center lg:text-left order-2 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] leading-tight mb-6 text-[#1a1a1a] text-balance">
                <span className="text-[#D4AF37]">SEU FILHO(A) AUTISTA</span>{" "}
                OU TDAH MERECE TER MAIS SAÚDE, DESENVOLVIMENTO E BEM-ESTAR COM SAÚDE INTEGRAL
              </h1>
              
              <p className="text-lg md:text-xl text-[#4a4a4a] mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                A abordagem integrativa trabalha de dentro para fora, abordando a causa dos sintomas, 
                garantindo que seu filho receba todos os cuidados necessários para um desenvolvimento 
                saudável e uma melhor qualidade de vida.
              </p>
              
              {/* Location badge */}
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-[#0F4C5C]">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Atendimento online para todo o Brasil e mundo</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
