"use client"

import { motion } from "framer-motion"
import { CONFIG } from "@/lib/config"
import Image from "next/image"

export function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-block bg-[#D4AF37] text-[#1a1a1a] px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wide mb-8">
              MUITO PRAZER!
            </span>
            
            {/* Name */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl mb-8 text-[#1a1a1a] uppercase">
              ME CHAMO JOICE LIERMANN MAZZINI.
            </h2>
            
            {/* Photo */}
            <motion.div 
              className="max-w-sm mx-auto mb-10 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Background name decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
                <span className="font-serif text-[120px] text-[#1a1a1a] whitespace-nowrap">JOICE JOICE JOICE</span>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#0F4C5C]">
                <Image
                  src={CONFIG.fotoPessoal}
                  alt={`${CONFIG.nome} - Nutricionista`}
                  width={320}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </motion.div>
            
            {/* Bio text */}
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-[#4a4a4a] leading-relaxed text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Sou nutricionista clínica funcional há 13 anos, formada pela Universidade do Vale do Itajaí (UNIVALI), 
                mãe atípica, pós-graduada em nutrição funcional e terapia alimentar no autismo (TEA), TDAH e Seletividade alimentar.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Cheguei até o universo da neurodivergência através do diagnóstico do meu filho {CONFIG.filhoNome}. 
                Quando recebemos o diagnóstico, pouco se falava em Nutrição e suplementação no autismo e TDAH. 
                Com isso, busquei cursos e mentoria fora do Brasil (Portugal) e, após, fiz curso na Academia Nutrição e Autismo.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Em seguida, cursei a Pós-graduação em Nutrição Funcional e Terapia Alimentar no TEA, TDAH e Seletividade Alimentar 
                — a primeira pós-graduação no Brasil — e formei na primeira turma.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Durante esse processo, fui investigando, atendendo o {CONFIG.filhoNome} e, com isso, ajustando muitas das crises 
                e comportamentos que eram atribuídos apenas ao diagnóstico, mas que na verdade eram alterações orgânicas, 
                como contaminação por fungos, por Clostridium, má digestão de gorduras e, apesar de uma alimentação limpa e funcional, 
                apareciam vários déficits nutricionais que impactavam no desenvolvimento dele.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Foi aí que comecei a ter ainda mais segurança em tudo que vinha estudando em curso, pós e inúmeros artigos científicos. 
                Com investigação clínica, resultados de exames bioquímicos, com a nutrição e suplementação, consigo tratar as comorbidades 
                associadas ao TEA, assim como identificar as possíveis implicações biológicas e fazer ajustes.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                Além das consultas, desenvolvo materiais para suporte aos pais e nutricionistas nessa jornada do espectro e nutrição. 
                <strong className="text-[#1a1a1a]"> Minha missão é ajudar famílias atípicas a encontrarem mais qualidade de vida através da alimentação 
                e da nutrição funcional personalizada.</strong>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Meu propósito é que mais e mais famílias alcancem informação de qualidade e segura, por isso compartilho tantos conteúdos 
                para vocês no Instagram e no YouTube, para tentar ajudar vocês o tempo todo.
              </motion.p>
              
              <motion.div
                className="text-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <span className="inline-block bg-[#0F4C5C] text-white px-8 py-3 rounded-full text-lg font-bold">
                  {CONFIG.crn}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
