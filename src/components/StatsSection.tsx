const stats = [
  {
    value: '20+',
    label: 'Anos de Mercado',
    color: '#5DAECD'
  },
  {
    value: '500+',
    label: 'Projetos Executados',
    color: '#7C7C7B'
  },
  {
    value: '90%',
    label: 'Economia de Energia',
    color: '#ACCC3A'
  },
  {
    value: '100%',
    label: 'Conformidade ABNT',
    color: '#7C7C7B'
  }
];

export function StatsSection() {
  return (
    <section className="bg-[#F2F2F2] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="font-['Nunito'] font-bold text-5xl mb-2"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-[#7C7C7B] font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
