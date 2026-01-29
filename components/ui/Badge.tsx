import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "cyan" | "cyan-soft" | "green" | "green-soft" | "danger" | "danger-soft" | "neutral";
    size?: "sm" | "md" | "lg";
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ className, variant = "cyan", size = "sm", ...props }, ref) => {
        const baseStyles = "inline-flex items-center rounded-full font-medium uppercase tracking-wider justify-center";

        const variants = {
            cyan: "bg-cyan text-white",
            "cyan-soft": "bg-cyan-50 text-cyan-600",
            green: "bg-green text-white",
            "green-soft": "bg-green-50 text-green-500",
            danger: "bg-danger text-white",
            "danger-soft": "bg-danger-light text-danger",
            neutral: "bg-gray-200 text-gray-700",
        };

        const sizes = {
            sm: "h-6 px-3 text-[10px]",
            md: "h-7 px-4 text-xs",
            lg: "h-8 px-5 text-sm",
        };

        return (
            <div
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            />
        );
    }
);
Badge.displayName = "Badge";

export { Badge };
