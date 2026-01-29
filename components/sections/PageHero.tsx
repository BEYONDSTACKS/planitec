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
}

export function PageHero({
    title,
    subtitle,
    breadcrumbs,
    backgroundImage = "/new-hero.png"
}: PageHeroProps) {
    return (
        <section className="relative py-20 lg:py-28 overflow-hidden bg-gray-900">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-r from-cyan-900/90 to-gray-900/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4 md:px-8 text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Breadcrumbs */}
                    <nav className="flex justify-center md:justify-start items-center gap-2 text-sm text-cyan-100 mb-6 font-medium">
                        <Link href="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        {breadcrumbs.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 opacity-50" />
                                {index === breadcrumbs.length - 1 ? (
                                    <span className="text-white">{item.label}</span>
                                ) : (
                                    <Link href={item.href} className="hover:text-white transition-colors">
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Decorative bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-cyan to-green" />
        </section>
    );
}
