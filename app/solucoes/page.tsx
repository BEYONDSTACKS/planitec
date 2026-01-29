import { Metadata } from "next";
import SolutionsPageClient from "@/components/pages/SolutionsPageClient";

export const metadata: Metadata = {
    title: "Soluções de Ventilação e Climatização | Planitec",
    description: "Conheça nossas soluções completas: ventilação mecânica, exaustão industrial, climatização evaporativa e pressurização de escadas. Projetos personalizados e fabricação própria.",
};

export default function SolutionsPage() {
    return <SolutionsPageClient />;
}
