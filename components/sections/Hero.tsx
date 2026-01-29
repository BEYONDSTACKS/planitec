"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-gray-50 py-12 lg:py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Content - Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <Badge variant="green-soft" size="md">Ventilação | Climatização | Proteção Contra Incêndio</Badge>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-gray-900 leading-tight">
                            Soluções completas em ventilação, climatização e segurança contra incêndios
                        </h1>

                        <p className="text-lg text-gray-500 max-w-xl">
                            Há mais de 20 anos projetando, fabricando e instalando sistemas para ambientes comerciais e industriais.
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
                                src="/new-hero.png"
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
