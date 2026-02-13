"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs: BreadcrumbItem[];
    backgroundImage?: string;
    variant?: "dark" | "light";
}

export function PageHero({
    title,
    subtitle,
    breadcrumbs,
    backgroundImage = "/new-hero.png",
    variant = "dark"
}: PageHeroProps) {
    const isLight = variant === "light";

    return (
        <section className={`relative py-24 lg:py-32 overflow-hidden ${isLight ? 'bg-white' : 'bg-gray-900'}`}>
            {/* Background Image & Branded Gradients */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className={`object-cover ${isLight ? 'opacity-[0.03] grayscale contrast-125' : 'opacity-40'}`}
                    priority
                />
                {!isLight && (
                    <>
                        <div className="absolute inset-0 bg-linear-to-r from-cyan-900/90 to-gray-900/80 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />
                    </>
                )}
                {isLight && (
                    <>
                        {/* Branded "Light" Gradients */}
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan/15 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green/15 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
                        <div className="absolute inset-0 bg-linear-to-b from-white via-transparent to-white/50" />
                    </>
                )}
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 md:px-8">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Breadcrumbs */}
                        <nav className={`flex items-center gap-2 text-xs mb-6 font-bold tracking-widest uppercase ${isLight ? 'text-cyan-600/60' : 'text-cyan-100'}`}>
                            <Link href="/" className="hover:text-cyan-600 transition-colors">
                                Home
                            </Link>
                            {breadcrumbs.map((item, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                    {index === breadcrumbs.length - 1 ? (
                                        <span className={isLight ? 'text-gray-900' : 'text-white'}>{item.label}</span>
                                    ) : (
                                        <Link href={item.href} className="hover:text-cyan-600 transition-colors">
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 leading-[1.1] tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`}>
                            {title}
                        </h1>

                        {subtitle && (
                            <p className={`text-xl md:text-2xl max-w-2xl leading-relaxed font-medium ${isLight ? 'text-gray-600' : 'text-gray-200'}`}>
                                {subtitle}
                            </p>
                        )}

                        {isLight && (
                            <div className="mt-8 w-20 h-1 bg-linear-to-r from-cyan to-green rounded-full" />
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Decorative bottom line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${isLight ? 'from-cyan to-green opacity-30' : 'from-cyan to-green'}`} />
        </section>
    );
}
