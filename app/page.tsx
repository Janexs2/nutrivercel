import { Hero } from "@/components/sections/hero"
import { Dores } from "@/components/sections/dores"
import { Abordagem } from "@/components/sections/abordagem"
import { Neurosuplementacao } from "@/components/sections/neurosuplementacao"
import { Apoio } from "@/components/sections/apoio"
import { Conexao } from "@/components/sections/conexao"
import { Timeline } from "@/components/sections/timeline"
import { YouTubeSection } from "@/components/sections/youtube"
import { HotmartSection } from "@/components/sections/hotmart"
import { Bonus } from "@/components/sections/bonus"
import { Depoimentos } from "@/components/sections/depoimentos"
import { Sobre } from "@/components/sections/sobre"
import { FAQ } from "@/components/sections/faq"
import { Footer } from "@/components/sections/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Secao de Dores - Problemas que o publico enfrenta */}
      <Dores />
      
      {/* 3. Secao Abordagem Integrativa */}
      <Abordagem />
      
      {/* 4. Box Neurosuplementacao */}
      <Neurosuplementacao />
      
      {/* 5. Secao de Apoio - Voce nao precisa lidar sozinho */}
      <Apoio />
      
      {/* 6. Secao Pessoal - Conexao com a familia */}
      <Conexao />
      
      {/* 7. Timeline da Consulta - Como funciona */}
      <Timeline />
      
      {/* 8A. Bloco YouTube */}
      <YouTubeSection />
      
      {/* 8B. Bloco Hotmart - Produtos Digitais */}
      <HotmartSection />
      
      {/* 9. Secao de Fechamento + Bonus */}
      <Bonus />
      
      {/* 10. Prova Social - Depoimentos */}
      <Depoimentos />
      
      {/* 11. Sobre - Apresentacao profissional */}
      <Sobre />
      
      {/* 12. FAQ - Perguntas frequentes */}
      <FAQ />
      
      {/* 13. Rodape */}
      <Footer />
      
      {/* Botao flutuante do WhatsApp */}
      <WhatsAppButton />
    </main>
  )
}
