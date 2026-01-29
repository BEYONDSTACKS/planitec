import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "elevated" | "bordered-cyan" | "bordered-green" | "flat";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "elevated", ...props }, ref) => {
        const baseStyles = "rounded-2xl transition-all duration-300 p-6";

        const variants = {
            elevated: "bg-white shadow-card hover:translate-y-[-4px] hover:shadow-card-hover",
            "bordered-cyan": "bg-white border-4 border-cyan hover:translate-y-[-4px] hover:shadow-cyan",
            "bordered-green": "bg-white border-4 border-green hover:translate-y-[-4px] hover:shadow-green",
            flat: "bg-gray-100 border border-gray-200 hover:bg-gray-50",
        };

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], className)}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
