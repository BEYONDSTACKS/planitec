import { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
    title: "Contato | Planitec",
    description: "Entre em contato com a Planitec para orçamentos de ventilação, exaustão e proteção contra incêndio. Atendimento rápido e consultoria técnica.",
};

export default function ContactPage() {
    return <ContactPageClient />;
}
