"use client";

import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPageClient() {
    return (
        <>
            <PageHero
                title="Fale Conosco"
                subtitle="Entre em contato para tirar dúvidas, solicitar orçamentos ou agendar uma visita técnica."
                breadcrumbs={[
                    { label: "Contato", href: "/contato" }
                ]}
            />

            <section className="py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div>
                                <h2 className="text-3xl font-heading font-bold text-gray-900 mb-6">Informações de Contato</h2>
                                <p className="text-gray-600 text-lg">
                                    Estamos prontos para atender sua demanda. Utilize os canais abaixo ou preencha o formulário.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Telefones</h3>
                                        <p className="text-gray-600">(11) 3467-6941</p>
                                        <p className="text-gray-600">(11) 2609-4974</p>
                                        <p className="text-gray-600">(11) 2609-4982</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                                        <p className="text-gray-600">(11) 9-8245-0402</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                                        <p className="text-gray-600">contato@planitec.ind.br</p>
                                        <p className="text-gray-600">projetos@planitec.ind.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
                                        <Clock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Horário de Atendimento</h3>
                                        <p className="text-gray-600">Segunda a Sexta, das 8h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome completo *</label>
                                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="Seu nome" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium text-gray-700">Empresa</label>
                                        <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="Nome da empresa" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail *</label>
                                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="seu@email.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Telefone *</label>
                                        <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="(11) 99999-9999" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Assunto *</label>
                                    <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all bg-white">
                                        <option>Solicitar Orçamento</option>
                                        <option>Dúvida Técnica</option>
                                        <option>Visita Técnica</option>
                                        <option>Manutenção</option>
                                        <option>Outros</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Mensagem *</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" placeholder="Descreva sua necessidade..." />
                                </div>

                                <Button size="lg" className="w-full text-lg">
                                    Enviar Mensagem
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 w-full bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium z-10">
                    <MapPin className="w-6 h-6 mr-2" /> Localização no Google Maps
                </div>
                <Image
                    src="/hero-industrial.png"
                    alt="Mapa"
                    fill
                    className="object-cover opacity-20 grayscale"
                />
            </section>
        </>
    );
}
