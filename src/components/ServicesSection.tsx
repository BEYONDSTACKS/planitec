import { Shield, Fan, Leaf, ArrowUpDown, Flame } from 'lucide-react';

const services = [
  {
    title: 'Pressurização de Escadas',
    icon: Shield,
    borderColor: '#5DAECD',
    iconBg: '#5DAECD',
    badge: 'AVCB',
    badgeColor: 'bg-red-600',
    description: 'Sistema essencial para segurança e aprovação pelo Corpo de Bombeiros.'
  },
  {
    title: 'Ventilação Mecânica',
    icon: Fan,
    borderColor: '#5DAECD',
    iconBg: '#5DAECD',
    description: 'Soluções completas para renovação de ar e conforto térmico.'
  },
  {
    title: 'Climatização Evaporativa',
    icon: Leaf,
    borderColor: '#ACCC3A',
    iconBg: '#ACCC3A',
    badge: '90% economia',
    badgeColor: 'bg-[#ACCC3A]',
    description: 'Tecnologia sustentável que reduz drasticamente o consumo energético.'
  },
  {
    title: 'Exaustão Industrial',
    icon: ArrowUpDown,
    borderColor: '#5DAECD',
    iconBg: '#5DAECD',
    description: 'Remoção eficiente de gases, fumaça e contaminantes do ambiente.'
  },
  {
    title: 'Detecção de Incêndio',
    icon: Flame,
    borderColor: '#E53935',
    iconBg: '#E53935',
    description: 'Sistemas inteligentes de detecção e alarme contra incêndios.'
  }
];

export function ServicesSection() {
  return (
    <section className="bg-white py-20 px-6" id="servicos">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-['Nunito'] font-bold text-4xl text-[#1a1a1a] mb-4">
            Nossas Soluções
          </h2>
          <div className="w-24 h-1 bg-[#5DAECD] mx-auto"></div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white border-[4px] rounded-[20px] p-8 hover:shadow-md transition-shadow relative"
                style={{ borderColor: service.borderColor }}
              >
                {/* Badge */}
                {service.badge && (
                  <div className={`absolute top-4 right-4 ${service.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {service.badge}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-[12px] flex items-center justify-center mb-6"
                  style={{ backgroundColor: service.iconBg }}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a] mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#7C7C7B] leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
