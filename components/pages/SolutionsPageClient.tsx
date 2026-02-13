"use client";

import { PageHero } from "@/components/sections/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImageSlider } from "@/components/ui/ImageSlider";
import Link from "next/link";
import { Check } from "lucide-react";

// Data Structure
const services = [
    {
        id: "exaustao",
        title: "Cozinhas Profissionais",
        description: "Sistemas robustos para remoção de fumaça, gordura, gases e calor de cozinhas profissionais. Essencial para manter a segurança e salubridade do ambiente.",
        features: [
            "Coifas industriais em aço inox",
            "Exaustores e ventiladores de alta performance",
            "Redes de dutos em aço galvanizado ou inox",
            "Filtros e sistemas de tratamento de ar"
        ],
        applications: [
            "Cozinhas industriais e comerciais",
            "Restaurantes e Redes de fast food",
            "Hotéis e Hospitais",
            "Cozinhas experimentais"
        ],
        images: [
            "/solutions/exaustao/exaustao-1.jpg",
            "/solutions/exaustao/exaustao-2.jpg",
            "/solutions/exaustao/exaustao-3.jpg",
            "/solutions/exaustao/exaustao-4.jpg",
            "/solutions/exaustao/exaustao-5.jpg",
            "/solutions/cozinha/cozinha-1.jpg",
            "/solutions/cozinha/cozinha-2.jpg",
            "/solutions/cozinha/cozinha-3.jpg",
            "/solutions/cozinha/cozinha-4.jpg",
            "/solutions/cozinha/cozinha-5.jpg",
            "/solutions/cozinha/cozinha-6.jpg",
        ]
    },
    {
        id: "pressurizacao",
        title: "Pressurização de Escadas",
        description: "Sistemas de segurança vitais para controle de fumaça e proteção de rotas de fuga. Essencial para conformidade com normas de segurança contra incêndio e proteção da vida.",
        features: [
            "Projetos conforme as normas NBR e instruções técnicas do Corpo de bombeiros",
            "Dimensionamento de ventiladores e tomadas de ar",
            "Integração com sistema de detecção de incêndio",
            "Entrega de laudo técnico e ART"
        ],
        applications: null,
        images: [
            "/solutions/pressurizacao/pressurizacao-1.jpg",
            "/solutions/pressurizacao/pressurizacao-2.jpg",
        ],
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        id: "deteccao",
        title: "Detecção e Alarme",
        description: "Sistemas inteligentes para identificação rápida de princípios de incêndio, permitindo evacuação segura e combate imediato. Proteção ativa para seu patrimônio e ocupantes.",
        features: [
            "Detectores de fumaça e temperatura",
            "Acionadores manuais e sirenes audiovisuais",
            "Centrais de alarme endereçáveis ou convencionais",
            "Integração com sistemas de segurança"
        ],
        applications: null,
        images: [
            "/solutions/deteccao/deteccao-1.jpg",
            "/solutions/deteccao/deteccao-2.jpg",
            "/solutions/deteccao/deteccao-3.jpg",
            "/solutions/deteccao/deteccao-4.jpg",
        ]
    },
    {
        id: "ventilacao",
        title: "Ventilação Mecânica",
        description: "Sistemas de renovação e controle do ar em ambientes fechados, garantindo qualidade do ar interior e conforto térmico. Atendemos desde pequenos escritórios até grandes parques industriais.",
        features: [
            "Projeto técnico com memorial de cálculo",
            "Fabricação de dutos e componentes",
            "Instalação por equipe especializada",
            "Conformidade com as NBR’s vigentes"
        ],
        applications: [
            "Edifícios comerciais e corporativos",
            "Hospitais e laboratórios",
            "Shopping centers",
            "Estacionamentos subterrâneos"
        ],
        images: [
            "/solutions/ventilacao/ventilacao-1.jpg",
            "/solutions/ventilacao/ventilacao-2.jpg",
        ]
    },
    {
        id: "climatizacao",
        title: "Climatização Evaporativa",
        description: "Alternativa sustentável e econômica ao ar-condicionado tradicional. O sistema resfria o ar através da evaporação da água, proporcionando conforto térmico com baixíssimo consumo de energia.",
        features: [
            "Economia de energia (até 90%)",
            "Ar 100% renovado e filtrado",
            "Sem uso de gases refrigerantes",
            "Baixo custo de instalação e manutenção"
        ],
        applications: [
            "Galpões industriais e logísticos",
            "Fábricas e linhas de produção",
            "Academias e centros esportivos",
            "Supermercados e Atacarejos"
        ],
        images: [
            "/solutions/climatizacao/climatizacao-1.jpg",
            "/solutions/climatizacao/climatizacao-2.jpg",
            "/solutions/climatizacao/climatizacao-3.jpg",
            "/solutions/climatizacao/climatizacao-4.jpg",
        ]
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
                variant="light"
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
                                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl group border border-gray-100 bg-gray-50">
                                            <ImageSlider
                                                images={service.images}
                                                alt={service.title}
                                                className="w-full h-full"
                                            />
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
