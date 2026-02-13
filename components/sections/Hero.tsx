"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const solutions = [
    "Cozinhas Profissionais",
    "Pressurização de Escadas",
    "Detecção e Alarme",
    "Ventilação Mecânica",
    "Climatização Evaporativa"
];

export function Hero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % solutions.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative overflow-hidden bg-white py-12 lg:py-24">
            {/* Subtle sustainable background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-50/50 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content - Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <Badge variant="green-soft" size="md">Engenharia | Sustentabilidade | Segurança</Badge>

                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-gray-900 leading-[1.1]">
                                Soluções de <br />
                                <div className="h-[1.2em] relative overflow-hidden mt-2">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={index}
                                            initial={{ y: 40, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -40, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "circOut" }}
                                            className={cn(
                                                "absolute left-0 block w-full",
                                                index % 2 === 0 ? "text-cyan" : "text-green"
                                            )}
                                        >
                                            {solutions[index]}
                                        </motion.span>
                                    </AnimatePresence>
                                </div>
                            </h1>
                        </div>

                        <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                            Excelência técnica em sistemas industriais há mais de 30 anos. Projetos inteligentes que unem performance e responsabilidade ambiental.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Button size="lg" asChild>
                                <Link href="/solucoes">
                                    Conheça nossas soluções
                                </Link>
                            </Button>
                            <Button variant="secondary" size="lg" asChild>
                                <Link href="/contato">
                                    Fale com um especialista
                                </Link>
                            </Button>
                        </div>

                        <div className="pt-2 flex flex-wrap items-center gap-4 md:gap-6 text-sm font-medium text-gray-500">
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="text-cyan w-4 h-4" /> ABRAVA
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="text-cyan w-4 h-4" /> CREA/SP
                            </span>
                            <span className="flex items-center gap-2">
                                <CheckCircle2 className="text-cyan w-4 h-4" /> 100% ABNT
                            </span>
                        </div>
                    </motion.div>

                    {/* Visual - Right Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-video w-full max-w-lg mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="/solutions/ventilacao/ventilacao-1.jpg"
                                alt="Sistema de ventilação industrial moderno com dutos azuis"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Card - 90% Economy */}
                        <div className="absolute -bottom-4 -left-4 md:bottom-4 md:-left-8 bg-white p-4 rounded-xl shadow-lg border-l-4 border-green max-w-[180px] hidden md:block">
                            <p className="text-2xl font-bold text-gray-900">90%</p>
                            <p className="text-xs text-gray-500">de economia com Climatização Evaporativa</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
