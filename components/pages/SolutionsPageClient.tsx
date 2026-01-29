"use client";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

// Data Structure
const services = [
    {
        id: "ventilacao",
        title: "Ventilação Mecânica",
        description: "Sistemas de renovação e controle do ar em ambientes fechados, garantindo qualidade do ar interior e conforto térmico. Atendemos desde pequenos escritórios até grandes parques industriais.",
        features: [
            "Projeto técnico com memorial de cálculo",
            "Fabricação de dutos e componentes",
            "Instalação por equipe especializada",
            "Conformidade com NBR 16401"
        ],
        applications: [
            "Edifícios comerciais e corporativos",
            "Hospitais e laboratórios",
            "Shopping centers",
            "Estacionamentos subterrâneos"
        ],
        image: "/service-ventilation.png"
    },
    {
        id: "exaustao",
        title: "Exaustão Industrial",
        description: "Sistemas robustos para remoção de fumaça, gordura, gases e calor de ambientes industriais e comerciais. Essencial para manter a segurança e salubridade do ambiente de trabalho.",
        features: [
            "Coifas industriais (Lavadoras e Condensadoras)",
            "Exaustores e ventiladores de alta performance",
            "Redes de dutos em aço galvanizado ou inox",
            "Filtros e sistemas de tratamento de ar"
        ],
        applications: [
            "Cozinhas industriais e comerciais",
            "Estacionamentos e garagens",
            "Fábricas e linhas de produção",
            "Laboratórios químicos"
        ],
        image: "/service-exhaust.png"
    },
    {
        id: "climatizacao",
        title: "Climatização Evaporativa",
        description: "Alternativa sustentável e econômica ao ar-condicionado tradicional. O sistema resfria o ar através da evaporação da água, proporcionando conforto térmico com baixíssimo consumo de energia.",
        features: [
            "Economia de energia (até 90%)",
            "Ar 100% renovado e filtrado",
            "Sem uso de gases refrigerantes nocivos",
            "Baixo custo de instalação e manutenção"
        ],
        applications: [
            "Galpões industriais e logísticos",
            "Fábricas e linhas de produção",
            "Academias e centros esportivos",
            "Supermercados e Atacarejos"
        ],
        image: "/service-cooling.png"
    },
    {
        id: "pressurizacao",
        title: "Pressurização de Escadas",
        description: "Sistema de segurança obrigatório para obtenção do AVCB em determinadas edificações. O objetivo é manter as rotas de fuga (escadas de emergência) livres de fumaça em caso de incêndio.",
        features: [
            "Projeto conforme IT-13 do Corpo de Bombeiros",
            "Dimensionamento de ventiladores e tomadas de ar",
            "Integração com sistema de detecção de incêndio",
            "Entrega de laudo técnico e ART"
        ],
        applications: null, // Specific structure
        image: "/service-pressurization.png"
    },
    {
        id: "deteccao",
        title: "Detecção e Alarme de Incêndio",
        description: "Sistemas inteligentes para identificação rápida de princípios de incêndio, permitindo evacuação segura e combate imediato. Proteção ativa para seu patrimônio e ocupantes.",
        features: [
            "Detectores de fumaça e temperatura",
            "Acionadores manuais e sirenes audiovisuais",
            "Centrais de alarme endereçáveis ou convencionais",
            "Automação de portas e sistemas de combate"
        ],
        applications: null,
        image: "/service-fire.png"
    }
];

export default function SolutionsPageClient() {
    return (
        <>
            <PageHero
                title="Nossas Soluções"
                subtitle="Conheça nosso portfólio completo de serviços em ventilação, climatização e proteção contra incêndio."
                breadcrumbs={[
                    { label: "Soluções", href: "/solucoes" }
                ]}
            />

            {/* Navigation Anchor Bar */}
            <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto">
                <div className="container mx-auto px-4">
                    <div className="flex whitespace-nowrap gap-6 md:gap-8 py-4 text-sm font-medium text-gray-600">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`#${service.id}`}
                                className="hover:text-cyan-600 transition-colors"
                            >
                                {service.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            key={service.id}
                            id={service.id}
                            className={`py-20 lg:py-28 scroll-mt-20 ${!isEven ? 'bg-gray-50' : 'bg-white'}`}
                        >
                            <div className="container mx-auto px-4 md:px-8">
                                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                    <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                                        <Badge variant="cyan-soft" className="mb-4">{service.title.split(" ")[0]}</Badge>
                                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                                            {service.title}
                                        </h2>
                                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="space-y-6">
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">O que entregamos</h4>
                                                <ul className="space-y-2">
                                                    {service.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-3">
                                                            <div className="mt-1 w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                                                <Check className="w-3 h-3" />
                                                            </div>
                                                            <span className="text-gray-700">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {service.applications && (
                                                <div>
                                                    <h4 className="font-bold text-gray-900 mb-3 uppercase text-sm tracking-wide">Aplicações</h4>
                                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                        {service.applications.map((app, idx) => (
                                                            <li key={idx} className="text-gray-600 text-sm flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                                {app}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <div className="mt-10">
                                            <Button size="lg" asChild>
                                                <Link href="/contato">
                                                    Solicitar Orçamento
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>

                                    <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl group">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-tr from-cyan-900/20 to-transparent mix-blend-overlay" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <FinalCTA />
        </>
    );
}
