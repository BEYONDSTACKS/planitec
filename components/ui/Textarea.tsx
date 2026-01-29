import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, label, error, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">
                        {label}
                    </label>
                )}
                <textarea
                    className={cn(
                        "flex min-h-[120px] w-full rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-base ring-offset-white placeholder:text-gray-400 focus-visible:outline-none focus-visible:border-cyan focus-visible:shadow-[0_0_0_4px_var(--color-cyan-50)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200 resize-y",
                        error && "border-danger focus-visible:border-danger focus-visible:shadow-[0_0_0_4px_var(--color-danger-light)]",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="text-sm font-medium text-danger">{error}</p>
                )}
            </div>
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };
