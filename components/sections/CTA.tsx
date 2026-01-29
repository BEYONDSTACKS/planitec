import Link from "next/link";
import { AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CTA() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 md:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-danger-light border-l-8 border-danger p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                        <div className="max-w-2xl space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-danger uppercase tracking-wider">
                                <AlertTriangle className="w-4 h-4" />
                                OBRIGATÓRIO AVCB
                            </div>

                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                                Sua obra parada esperando o <span className="text-danger">Corpo de Bombeiros?</span>
                            </h2>

                            <p className="text-lg text-gray-700">
                                A pressurização de escadas é um requisito fundamental para obtenção do AVCB
                                (Auto de Vistoria do Corpo de Bombeiros). Não deixe a burocracia travar seu empreendimento.
                            </p>
                        </div>

                        <div className="flex-shrink-0">
                            <Button variant="danger" size="xl" asChild className="shadow-red-200 shadow-xl">
                                <Link href="/contato">
                                    Preciso de Pressurização Urgente <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
