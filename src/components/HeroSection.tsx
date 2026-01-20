import { CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="bg-white pt-32 pb-20 px-6" id="inicio">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Side - 60% */}
          <div className="md:col-span-3 space-y-6">
            {/* Badge */}
            <div className="inline-block bg-[#5DAECD] text-white px-6 py-2 rounded-full">
              Ventilação e Proteção Contra Incêndio
            </div>

            {/* Headline */}
            <h1 className="font-['Nunito'] font-bold text-5xl leading-tight text-[#1a1a1a]">
              Sua obra parada esperando o Corpo de Bombeiros?
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-[#7C7C7B] leading-relaxed">
              Pressurização de escadas, ventilação, climatização e detecção de incêndio. 
              Tudo para o AVCB, com uma única empresa.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#5DAECD] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity">
                Solicitar Orçamento Urgente
              </button>
              <button className="border-2 border-[#ACCC3A] text-[#ACCC3A] px-8 py-4 rounded-xl font-medium hover:bg-[#ACCC3A] hover:text-white transition-colors">
                Ver Soluções →
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-8 pt-8 items-center">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#ACCC3A]" />
                <span className="font-medium text-[#1a1a1a]">20+ anos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#ACCC3A]" />
                <span className="font-medium text-[#1a1a1a]">ABRAVA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-[#ACCC3A]" />
                <span className="font-medium text-[#1a1a1a]">CREA/SP</span>
              </div>
            </div>
          </div>

          {/* Right Side - 40% */}
          <div className="md:col-span-2">
            <div className="relative">
              {/* Dual-color frame effect */}
              <div className="absolute -top-3 -left-3 right-3 bottom-3 border-t-[6px] border-l-[6px] border-[#5DAECD] rounded-[20px]"></div>
              <div className="absolute top-3 left-3 -right-3 -bottom-3 border-b-[6px] border-r-[6px] border-[#ACCC3A] rounded-[20px]"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1768407682784-a7525fab08dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwdmVudGlsYXRpb24lMjBlcXVpcG1lbnR8ZW58MXx8fHwxNzY4OTIwNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial ventilation equipment"
                className="relative z-10 w-full h-auto rounded-[20px] object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
