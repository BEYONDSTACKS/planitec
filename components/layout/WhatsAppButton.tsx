"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function WhatsAppButton() {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                variant="whatsapp"
                size="lg"
                className="rounded-full shadow-lg hover:shadow-xl w-[60px] h-[60px] p-0"
                onClick={() => window.open("https://wa.me/5511950340359", "_blank")}
                aria-label="Fale conosco no WhatsApp"
            >
                <MessageCircle className="w-8 h-8" />
            </Button>
        </div>
    );
}
