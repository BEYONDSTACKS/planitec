import { Phone } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-[#5DAECD] py-20 px-6" id="contato">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="font-['Nunito'] font-bold text-4xl text-white mb-6">
          Sua obra não pode esperar. A gente também não.
        </h2>

        {/* Subheadline */}
        <p className="text-xl text-white/90 mb-10">
          Análise técnica em até 48 horas
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-white text-[#5DAECD] px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
            <Phone className="w-5 h-5" />
            (11) 3467-6941
          </button>
        </div>
      </div>
    </section>
  );
}
