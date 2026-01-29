import Link from "next/link";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function AboutSummary() {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
            {/* Vibrant Brand Gradients */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-green/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-4xl p-10 md:p-16 text-center shadow-[0_40px_80px_-16px_rgba(0,0,0,0.10)] transition-shadow duration-500 hover:shadow-[0_48px_96px_-16px_rgba(0,0,0,0.12)]">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
                        Quem Somos
                    </h2>
                    <div className="space-y-6">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium">
                            A Planitec é especializada em sistemas de ventilação, exaustão, climatização e proteção contra incêndio.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Atuamos desde a concepção do projeto até a instalação e manutenção, incluindo fabricação própria de componentes. Uma solução completa para seu empreendimento.
                        </p>
                    </div>
                    <div className="pt-10">
                        <Button variant="secondary" size="lg" asChild className="shadow-lg shadow-gray-200">
                            <Link href="/quem-somos" className="flex items-center gap-2">
                                Conheça nossa história <ArrowRight className="w-4 h-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
