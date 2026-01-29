import { LucideIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    href: string;
    color?: "cyan" | "green" | "danger";
}

export function ServiceCard({
    title,
    description,
    icon: Icon,
    features,
    href,
    color = "cyan",
}: ServiceCardProps) {

    const colorStyles = {
        cyan: "border-cyan text-cyan hover:shadow-cyan",
        green: "border-green text-green hover:shadow-green",
        danger: "border-danger text-danger hover:shadow-red-900/20", // Custom shadow for danger
    };

    const bgIconStyles = {
        cyan: "bg-cyan-50",
        green: "bg-green-50",
        danger: "bg-danger-light",
    };

    return (
        <div
            className={cn(
                "group relative bg-white rounded-2xl border-t-4 p-8 shadow-card transition-all duration-300 hover:-translate-y-2 flex flex-col h-full",
                colorStyles[color]
            )}
        >
            <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors", bgIconStyles[color])}>
                <Icon className={cn("w-8 h-8", `text-${color === 'danger' ? 'danger' : color + '-600'}`)} />
                {/* Note: explicit colors in tailwind might need safelisting if constructed dynamically, 
            but here mapped via style object is better or standard classes.
            Let's fix the Icon color class.
        */}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-heading">{title}</h3>
            <p className="text-gray-500 mb-6 leading-relaxed flex-grow">
                {description}
            </p>

            <ul className="space-y-3 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={cn("mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0", `bg-${color === 'danger' ? 'danger' : color}`)} />
                        {feature}
                    </li>
                ))}
            </ul>

            <div className="pt-6 border-t border-gray-100 mt-auto">
                <Link
                    href={href}
                    className={cn(
                        "inline-flex items-center font-bold text-sm uppercase tracking-wide transition-all group-hover:gap-2",
                        color === 'danger' ? "text-danger" : `text-${color}-600`
                    )}
                >
                    Saiba mais <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </div>
    );
}
