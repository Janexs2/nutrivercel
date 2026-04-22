"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import { Gift } from "lucide-react"
import Image from "next/image"

export function Bonus() {
  const bonusWhatsappLink = `https://wa.me/55XXXXXXXXXXX?text=${encodeURIComponent("Olá, Dra. Joice! Vim pela página e gostaria de receber o Ebook de Receitas. Quero melhorar a alimentação do meu filho(a).")}`

  return (
    <section className="py-16 md:py-24 bg-[#0F4C5C] relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Bonus Card */}
        <motion.div
          className="bg-[#0a3a47] rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            {/* E-book image */}
            <div className="w-full md:w-2/5 p-6 md:p-8 flex justify-center">
              <div className="relative w-52 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={CONFIG.ebookImage}
                  alt="E-book Receitas para Crianças Atípicas"
                  width={208}
                  height={277}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6 md:p-8">
              {/* Gift badge */}
              <div className="mb-4">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-[#0F4C5C]" />
                </div>
              </div>
              
              <h3 className="font-serif text-xl md:text-2xl mb-2 text-white uppercase">
                <span className="text-[#D4AF37]">BÔNUS ESPECIAL:</span> E-BOOK RECEITAS PARA CRIANÇAS ATÍPICAS
              </h3>
              
              <div className="h-px bg-[#D4AF37] w-full mb-6" />
              
              <p className="text-white/90 leading-relaxed mb-4">
                Receba de presente após a primeira consulta nosso e-book de receitas sem glúten e sem caseína, desenvolvido especialmente para crianças autistas ou TDAH. Sei como é um desafio encontrar receitas confiáveis para o seu filho, por isso, desenvolvi esse material reunindo receitas que adaptamos para o Frederico, para te oferecer opções deliciosas, nutritivas e práticas.
              </p>
              
              <p className="text-white/80 leading-relaxed mb-6 text-sm">
                Leites vegetais para crianças atípicas, com alergias alimentares, APLV ou intolerância a lactose + 13 sucos detox simples e rápidos
              </p>
              
              {/* CTA Button */}
              <a 
                href={bonusWhatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-[#D4AF37] text-[#1a1a1a] font-bold uppercase tracking-wide rounded-full shadow-lg hover:bg-[#c9a030] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                QUERO MEU BÔNUS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
