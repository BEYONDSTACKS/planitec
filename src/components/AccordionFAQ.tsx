import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface AccordionFAQProps {
    items: FAQItem[];
}

export function AccordionFAQ({ items }: AccordionFAQProps) {
    return (
        <Accordion.Root type="single" collapsible className="space-y-4">
            {items.map((item, index) => (
                <Accordion.Item
                    key={index}
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden"
                >
                    <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors group">
                        <span>{item.question}</span>
                        <ChevronDown className="w-5 h-5 text-[#5DAECD] transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                    <Accordion.Content className="px-6 pb-4 text-[#7C7C7B] data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        {item.answer}
                    </Accordion.Content>
                </Accordion.Item>
            ))}
        </Accordion.Root>
    );
}
