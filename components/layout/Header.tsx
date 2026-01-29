"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Quem Somos", href: "/quem-somos" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Contato", href: "/contato" },
    ];

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white transition-all">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-[180px]">
                        {/* Using standard object-contain to fit the logo properly */}
                        <Image
                            src="/logo.webp"
                            alt="Planitec Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-gray-600 hover:text-cyan transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button size="sm" asChild>
                        <Link href="/contato">Fale Conosco</Link>
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t bg-white px-4 py-4 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-base font-medium text-gray-600 hover:text-cyan p-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button className="w-full" asChild>
                            <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
                                Fale Conosco
                            </Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
