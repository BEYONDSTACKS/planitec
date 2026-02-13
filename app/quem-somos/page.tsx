import { PageHero } from "@/components/sections/PageHero";
import { History } from "@/components/sections/History";
import { MissionVisionValues } from "@/components/sections/MissionVisionValues";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Check, Award } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Quem Somos | Planitec",
    description: "Conheça a história, missão e valores da Planitec, especialista em soluções industriais há mais de 30 anos.",
};

export default function AboutUsPage() {
    return (
        <>
            <PageHero
                title="Quem Somos"
                subtitle="Conheça a Planitec e nossa trajetória de mais de 30 anos no mercado."
                breadcrumbs={[
                    { label: "Quem Somos", href: "/quem-somos" }
                ]}
                variant="light"
            />

            <History />

            <MissionVisionValues />

            {/* Expertise Section */}
            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Nossa Expertise</h2>
                            <p className="text-lg text-gray-600">
                                Nossa equipe é formada por engenheiros e técnicos especializados, com experiência em projetos de diferentes portes e complexidades.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                "Projeto técnico com memorial de cálculo",
                                "Fabricação de dutos, coifas e componentes",
                                "Instalação por equipe especializada",
                                "Comissionamento e testes",
                                "Manutenção preventiva e corretiva",
                                "Documentação para aprovação no Corpo de Bombeiros"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center mr-3 text-cyan-600 shrink-0">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    <span className="font-medium text-gray-800">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-20 bg-[#0B1120] relative overflow-hidden text-white">
                {/* Decorative glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

                <div className="container relative z-10 mx-auto px-4 md:px-8 text-center">
                    <div className="max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Certificações e Conformidade</h2>
                        <div className="w-20 h-1 bg-linear-to-r from-cyan to-green mx-auto mb-6 rounded-full" />
                        <p className="text-gray-400 text-lg">
                            Nossa operação segue rigorosamente os mais altos padrões de qualidade e segurança exigidos pelos principais órgãos reguladores.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { title: "Normas ABNT", desc: "NBR 16401, 14518, 14880, 17037, 17240, 9077" },
                            { title: "Corpo de Bombeiros", desc: "Instruções Técnicas IT-13, IT-15, IT-19" },
                            { title: "CREA/SP", desc: "Profissionais habilitados com registro ativo" },
                            { title: "ABRAVA", desc: "Associação Brasileira de Refrigeração, Ar Condicionado, Ventilação e Aquecimento" }
                        ].map((cert, index) => (
                            <div key={index} className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan/40 transition-all duration-500 hover:-translate-y-1">
                                <div className="w-14 h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-cyan/20 transition-all duration-500">
                                    <Award className="w-7 h-7 text-cyan" />
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-cyan transition-colors">{cert.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{cert.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </>
    );
}
