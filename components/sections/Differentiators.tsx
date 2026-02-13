import { Badge } from "@/components/ui/Badge";
import { Clock, Factory, FileCheck, Users, Award } from "lucide-react";

export function Differentiators() {
    const differentials = [
        {
            icon: Clock,
            title: "+ de 30 anos",
            description: "Atuação consolidada no mercado de engenharia.",
        },
        {
            icon: Factory,
            title: "Fabricação própria",
            description: "Dutos e componentes produzidos em nossa sede.",
        },
        {
            icon: FileCheck,
            title: "Conformidade",
            description: "Total adesão às normas ABNT e IT Bombeiros.",
        },
        {
            icon: Users,
            title: "Especialistas",
            description: "Corpo técnico habilitado pelo CREA/SP.",
        },
        {
            icon: Award,
            title: "ABRAVA",
            description: "Membro associado de referência no setor.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <Badge variant="cyan-soft">DIFERENCIAIS</Badge>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
                        Por que escolher a Planitec
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Unimos experiência técnica e capacidade produtiva para entregar o melhor resultado.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                    {differentials.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-linear-to-br from-cyan/5 to-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-cyan-600 mb-6 shadow-md shadow-cyan/10 group-hover:bg-cyan group-hover:text-white transition-all duration-300">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                {/* Bottom Decorative Line */}
                                <div className="absolute bottom-0 left-0 w-0 h-1 bg-cyan group-hover:w-full transition-all duration-500" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
