import { Target, Eye, Heart } from "lucide-react";

export function MissionVisionValues() {
    const cards = [
        {
            title: "Missão",
            description: "Oferecer soluções completas em ventilação, climatização e proteção contra incêndio, garantindo ambientes seguros, eficientes e em conformidade com as normas vigentes.",
            icon: Target,
            color: "cyan"
        },
        {
            title: "Visão",
            description: "Ser referência no mercado de engenharia de ventilação e proteção contra incêndio, reconhecida pela qualidade técnica e excelência no atendimento.",
            icon: Eye,
            color: "green"
        },
        {
            title: "Valores",
            description: "Excelência técnica, compromisso com prazos, transparência, segurança em primeiro lugar e parcerias de longo prazo com nossos clientes.",
            icon: Heart,
            color: "blue"
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-${card.color}-50 text-${card.color}-600`}>
                                    <Icon className="w-6 h-6 text-cyan-600" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{card.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
