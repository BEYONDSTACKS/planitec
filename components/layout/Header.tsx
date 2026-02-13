"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Quem Somos", href: "/quem-somos" },
        { label: "Soluções", href: "/solucoes" },
        { label: "Manutenção", href: "/contato" },
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
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative text-sm font-medium transition-colors py-2",
                                    isActive ? "text-cyan" : "text-gray-600 hover:text-cyan"
                                )}
                            >
                                {item.label}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 w-full h-[3px] flex">
                                        <span className="h-full w-1/2 bg-green" />
                                        <span className="h-full w-1/2 bg-cyan" />
                                    </span>
                                )}
                            </Link>
                        );
                    })}
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
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "text-base font-medium p-2 rounded-md transition-colors",
                                        isActive ? "text-cyan bg-cyan-50" : "text-gray-600 hover:text-cyan hover:bg-gray-50"
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
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
