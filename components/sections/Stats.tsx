export function Stats() {
    const stats = [
        { value: "30+", label: "Anos de mercado" },
        { value: "500+", label: "Projetos executados" },
        { value: "90%", label: "Economia em climatização" },
        { value: "100%", label: "Conformidade normas ABNT" },
    ];

    return (
        <section className="relative py-16 lg:py-20 overflow-hidden">
            {/* Background with brand gradient */}
            <div className="absolute inset-0 bg-linear-to-r from-cyan-600 to-cyan-800" />

            {/* Decorative circles */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-green/10 rounded-full blur-3xl" />

            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-2 transition-transform duration-300 group-hover:scale-110">
                                {stat.value}
                            </div>
                            <div className="h-1 w-12 bg-green/50 mx-auto mb-4 rounded-full group-hover:w-20 transition-all duration-300" />
                            <p className="text-sm md:text-base text-cyan-50 font-bold uppercase tracking-widest opacity-80">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
