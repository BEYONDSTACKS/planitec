"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming we will create or use radix primitives wrapped

// Since I didn't create the Accordion wrapper yet in `ui`, I should do it now or inline it.
// I listed "Install dependencies (Tailwind, Framer Motion, Radix, Lucide)"
// I haven't created the `ui/accordion.tsx` file yet. 
// I will create a simple Accordion using Radix UI if installed, or just simple state if not. 
// The plan said "Radix UI", so I should use it. 
// However, I need to create the component wrapper first. 
// I'll create `ui/accordion.tsx` right after this or in this turn.
// Wait, I can't import from `@/components/ui/accordion` if it doesn't exist.
// So I will create it.

// Let's create the FAQ but with the logic to use a simple details/summary or wait for the component.
// I'll create the component in the next tool call then the FAQ.
// Or I can create the FAQ and inline the logic. 
// Re-reading plan: "Create Section Components (Hero, Stats, Services, CTA, FAQ)". 
// It implies FAQ is a section. 
// Let's create `components/ui/Accordion.tsx` first.

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const AccordionRoot = AccordionPrimitive.Root;

const AccordionItem2 = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b", className)}
        {...props}
    />
));
AccordionItem2.displayName = "AccordionItem";

const AccordionTrigger2 = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger2.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent2 = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
));
AccordionContent2.displayName = AccordionPrimitive.Content.displayName;

export { AccordionRoot as Accordion, AccordionItem2 as AccordionItem, AccordionTrigger2 as AccordionTrigger, AccordionContent2 as AccordionContent };
