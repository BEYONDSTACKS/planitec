import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Note: Ensure `class-variance-authority` is installed or implement manual variant logic.
// Since it wasn't in the install list explicitly but is standard for shadcn-like setups, 
// I will simulate it with standard props if CVA is not available, 
// BUT the plan assumes "standard" setup. 
// CHECK: Did I install class-variance-authority? No.
// I should install it or write without it. 
// I will write without it to avoid extra deps if not needed, using a simple switch or map.
// OR I will just install it because it makes things much cleaner.
// Workflow tip: I can install it now.
// For now, I'll write a simple version without CVA to save a step, or use `cn` + logic.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "whatsapp" | "ghost" | "danger" | "secondary-gradient";
    size?: "sm" | "md" | "lg" | "xl";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white";

        const variants = {
            primary: "btn-gradient-border text-gray-900 shadow-sm hover:shadow-md hover:-translate-y-0.5 font-bold",
            secondary: "btn-gradient-border text-gray-700 hover:bg-gray-50",
            "secondary-gradient": "btn-gradient-border text-gray-700 hover:bg-gray-50",
            whatsapp: "bg-[#25D366] text-white shadow-md hover:bg-[#1da851] hover:shadow-lg hover:-translate-y-0.5",
            ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            danger: "bg-danger text-white shadow-md hover:bg-red-700 hover:shadow-lg",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-[52px] px-8 text-lg font-semibold",
            xl: "h-[60px] px-10 text-xl font-bold",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
