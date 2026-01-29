"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";

export function History() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Visual */}
                    <div className="relative">
                        <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/hero-industrial.png"
                                alt="Fábrica da Planitec"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Box experience */}
                        <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border-t-4 border-cyan max-w-[200px] hidden lg:block">
                            <p className="text-4xl font-bold text-gray-900 mb-1">20+</p>
                            <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">Anos de Experiência</p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                        <Badge variant="green-soft">Nossa Trajetória</Badge>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                            Excelência em engenharia de ventilação há mais de duas décadas
                        </h2>

                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                A Planitec atua há mais de 20 anos no mercado de ventilação, climatização e proteção contra incêndio, consolidando-se como referência técnica no setor.
                            </p>
                            <p>
                                Desde o início, nossa proposta é oferecer soluções completas: do projeto técnico à instalação e manutenção, incluindo fabricação própria de componentes como dutos e coifas.
                            </p>
                            <p>
                                Ao longo dos anos, executamos mais de <span className="font-bold text-cyan-600">500 projetos</span> para empresas de diversos segmentos, sempre priorizando segurança, eficiência energética e conformidade normativa.
                            </p>
                        </div>

                        <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-gray-700">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green" />
                                <span>Fabricação Própria</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green" />
                                <span>Equipe Especializada</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green" />
                                <span>Projetos ABNT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green" />
                                <span>Registrado no CREA</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
