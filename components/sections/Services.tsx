import { Wind, Factory, Leaf, Shield, Bell, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";

export function Services() {
    const services = [
        {
            title: "Cozinhas Profissionais",
            description: "Remoção de fumaça, gordura, gases e calor de cozinhas profissionais.",
            icon: Factory,
            image: "/solutions/exaustao/exaustao-1.jpg",
            href: "/solucoes#exaustao",
        },
        {
            title: "Pressurização de Escadas",
            description: "Sistema de segurança que mantém rotas de fuga livres de fumaça.",
            icon: Shield,
            image: "/solutions/pressurizacao/pressurizacao-1.jpg",
            href: "/solucoes#pressurizacao",
        },
        {
            title: "Detecção e Alarme",
            description: "Identificação rápida de princípios de incêndio com tecnologia de ponta.",
            icon: Bell,
            image: "/solutions/deteccao/deteccao-1.jpg",
            href: "/solucoes#deteccao",
        },
        {
            title: "Ventilação Mecânica",
            description: "Sistemas de renovação e controle do ar para ambientes comerciais e industriais.",
            icon: Wind,
            image: "/solutions/ventilacao/ventilacao-1.jpg",
            href: "/solucoes#ventilacao",
        },
        {
            title: "Climatização Evaporativa",
            description: "Resfriamento eficiente e sustentável com economia de até 90% de energia.",
            icon: Leaf,
            image: "/solutions/climatizacao/climatizacao-1.jpg",
            href: "/solucoes#climatizacao",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                    <Badge variant="cyan-soft">ÁREAS DE ATUAÇÃO</Badge>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
                        Nossos Serviços
                    </h2>
                </div>

                {/* Grid: 5 cards - 3+2 layout on larger screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <Link
                                key={index}
                                href={service.href}
                                className="group relative flex flex-col bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-lg w-fit mb-2">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-base text-gray-500 mb-4 grow">
                                        {service.description}
                                    </p>
                                    <span className="inline-flex items-center text-sm font-bold text-cyan uppercase tracking-wide mt-auto group-hover:gap-2 transition-all">
                                        Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                                    </span>
                                </div>

                                {/* Decorative Border Bottom */}
                                <div className="h-1 w-full bg-linear-to-r from-cyan to-green" />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
