import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 relative">
            {/* Decorative Top Border */}
            <div className="absolute top-0 left-0 w-full h-1 flex">
                <div className="w-1/2 bg-cyan"></div>
                <div className="w-1/2 bg-green"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white font-heading">Planitec</h3>
                        <p className="text-sm leading-relaxed">
                            A solução no ar.
                            <br />
                            Excelência em ventilação, climatização e proteção contra incêndios
                            há mais de 20 anos.
                        </p>
                    </div>

                    {/* Column 2: Solutions */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Soluções
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/solucoes" className="hover:text-cyan transition-colors">
                                    Ventilação Mecânica
                                </Link>
                            </li>
                            <li>
                                <Link href="/solucoes" className="hover:text-cyan transition-colors">
                                    Exaustão Industrial
                                </Link>
                            </li>
                            <li>
                                <Link href="/solucoes" className="hover:text-cyan transition-colors">
                                    Climatização Evaporativa
                                </Link>
                            </li>
                            <li>
                                <Link href="/solucoes" className="hover:text-cyan transition-colors">
                                    Pressurização de Escadas
                                </Link>
                            </li>
                            <li>
                                <Link href="/solucoes" className="hover:text-cyan transition-colors">
                                    Detecção de Incêndio
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Contato
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-cyan shrink-0" />
                                <div className="flex flex-col">
                                    <span>(11) 3467-6941</span>
                                    <span>(11) 2609-4974</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                {/* WhatsApp Icon could be reused here or standard phone */}
                                <span className="text-green font-bold">WA</span>
                                <span>(11) 98245-0402</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-cyan shrink-0" />
                                <a href="mailto:contato@planitec.ind.br" className="hover:text-cyan transition-colors">
                                    contato@planitec.ind.br
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-cyan shrink-0" />
                                <span>São Paulo, SP</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Seals/Associations */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Empresa
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/quem-somos" className="hover:text-cyan transition-colors">
                                    Sobre Nós
                                </Link>
                            </li>
                            <li>
                                <span className="block text-white opacity-80 mt-4">Associados:</span>
                                <p className="font-bold text-white mt-1">ABRAVA</p>
                                <p className="text-xs text-gray-500">Associação Brasileira de Refrigeração, Ar Condicionado, Ventilação e Aquecimento</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© 2025 Planitec. Todos os direitos reservados.</p>
                    <p>CNPJ: XX.XXX.XXX/0001-XX</p>
                </div>
            </div>
        </footer>
    );
}
