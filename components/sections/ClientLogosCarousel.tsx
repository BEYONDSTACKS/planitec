"use client";

import { motion } from "framer-motion";
import { Factory, ShieldCheck, Zap, Thermometer, Droplets, Construction } from "lucide-react";

const clientIcons = [
    { icon: Factory, name: "Industrial Partner" },
    { icon: ShieldCheck, name: "Safety First" },
    { icon: Zap, name: "Energy Solutions" },
    { icon: Thermometer, name: "Climate Control" },
    { icon: Droplets, name: "Pure Air" },
    { icon: Construction, name: "Builder Corp" },
];

export function ClientLogosCarousel() {
    // Duplicate the logos to create a seamless infinite loop
    const logos = [...clientIcons, ...clientIcons, ...clientIcons];

    return (
        <section className="py-12 bg-gray-50 border-y border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Empresas que confiam na nossa engenharia
                </p>
            </div>

            <div className="relative flex overflow-hidden">
                <motion.div
                    className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {logos.map((client, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center group-hover:border-cyan-200 group-hover:bg-cyan-50">
                                <client.icon className="w-6 h-6 md:w-7 md:h-7 text-gray-500 group-hover:text-cyan-600" />
                            </div>
                            <span className="text-lg md:text-xl font-heading font-extrabold text-gray-400 group-hover:text-gray-900 transition-colors">
                                {client.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
