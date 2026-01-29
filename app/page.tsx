import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { AboutSummary } from "@/components/sections/AboutSummary";
import { Differentiators } from "@/components/sections/Differentiators";
import { Stats } from "@/components/sections/Stats";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planitec | Ventilação, Climatização e Proteção Contra Incêndio",
  description: "Especialista em ventilação industrial, exaustão, pressurização de escadas e climatização evaporativa. Soluções completas com mais de 20 anos de mercado.",
};

export default function Home() {
  return (
    <>
      {/* Seção 1: Hero */}
      <Hero />

      {/* Seção 2: Áreas de Atuação (Cards de serviços) */}
      <Services />

      {/* Seção 3: Sobre a Empresa (Resumo) */}
      <AboutSummary />

      {/* Seção 4: Diferenciais */}
      <Differentiators />

      {/* Seção 5: Números (Estatísticas) */}
      <Stats />

      {/* Seção 6: CTA Final */}
      <FinalCTA />
    </>
  );
}
