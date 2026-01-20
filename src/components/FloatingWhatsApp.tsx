import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/551134676941"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" fill="currentColor" />
    </a>
  );
}
