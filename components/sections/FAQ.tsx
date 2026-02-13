import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/Badge";

export function FAQ() {
    const faqs = [
        {
            question: "Qual a diferença entre Ventilação e Exaustão?",
            answer: "A ventilação introduz ar fresco no ambiente (renovação), enquanto a exaustão remove o ar contaminado, quente ou com odores. Muitas vezes os sistemas trabalham em conjunto para garantir o equilíbrio do ar."
        },
        {
            question: "A Planitec atende em quais regiões?",
            answer: "Atendemos projetos em todo o território Nacional, com sede em São Paulo/SP. Consulte nossa equipe para alinhar as necessidades da sua localidade."
        },
        {
            question: "Vocês emitem ART e laudos técnicos?",
            answer: "Sim. Todos os nossos projetos são acompanhados por engenheiros responsáveis, com emissão de ART (Anotação de Responsabilidade Técnica) junto ao CREA, garantindo conformidade legal."
        },
        {
            question: "O que é Pressurização de Escadas?",
            answer: "É um sistema de segurança contra incêndio que injeta ar na escada de emergência, criando uma pressão positiva que impede a entrada de fumaça, permitindo uma rota de fuga segura."
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8 max-w-3xl">
                <div className="text-center mb-12 space-y-4">
                    <Badge variant="neutral">DÚVIDAS FREQUENTES</Badge>
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Perguntas Comuns</h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`}>
                            <AccordionTrigger className="text-lg text-gray-800 text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
