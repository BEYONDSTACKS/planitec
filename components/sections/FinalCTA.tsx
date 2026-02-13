import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Phone, MessageSquare } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-20 lg:py-28 relative overflow-hidden bg-white">
            {/* Even more vibrant Brand Gradients over white */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan/25 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-green/20 rounded-full blur-[110px] translate-y-1/2 -translate-x-1/4" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="bg-white border border-gray-100 rounded-4xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_40px_80px_-16px_rgba(0,0,0,0.12)] transition-shadow duration-500 hover:shadow-[0_48px_96px_-16px_rgba(0,0,0,0.15)]">
                    <h2 className="text-3xl md:text-5xl font-heading font-black text-gray-900 mb-6 leading-tight">
                        Fale Agora com um Especialista <br className="hidden md:block" /> em Engenharia Industrial
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Análise técnica personalizada e orçamento detalhado para seu projeto de ventilação, exaustão ou proteção contra incêndio.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Button size="xl" asChild variant="primary" className="w-full sm:w-auto shadow-lg shadow-cyan/20">
                            <a href="https://wa.me/5511950340359" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <MessageSquare className="w-6 h-6" /> Fale no WhatsApp
                            </a>
                        </Button>
                        <a
                            href="tel:+5511950340359"
                            className="group flex items-center gap-3 text-gray-900 text-xl font-bold hover:text-cyan transition-colors px-6 py-4 rounded-xl border border-gray-200 hover:border-cyan/30 hover:bg-cyan-50/30"
                        >
                            <Phone className="w-6 h-6 text-cyan group-hover:animate-bounce" /> (11) 95034-0359
                        </a>
                    </div>

                    <p className="mt-8 text-gray-400 text-sm font-semibold uppercase tracking-widest">
                        Atendimento em todo o território Nacional
                    </p>
                </div>
            </div>
        </section>
    );
}
