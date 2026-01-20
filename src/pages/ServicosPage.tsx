import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';
import {
    Wind, Fan, Leaf, Shield, Flame,
    CheckCircle2, Zap, Coins,
    ClipboardCheck, Factory, Wrench, FileCheck, Settings, AlertTriangle,
    ArrowRight
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useEffect, useState } from 'react';

const serviceNav = [
    { id: 'ventilacao', icon: Wind, label: 'Ventilação' },
    { id: 'exaustao', icon: Fan, label: 'Exaustão' },
    { id: 'climatizacao', icon: Leaf, label: 'Climatização' },
    { id: 'pressurizacao', icon: Shield, label: 'Pressurização', featured: true },
    { id: 'deteccao', icon: Flame, label: 'Detecção' },
];

const processSteps = [
    { number: '01', title: 'Diagnóstico', icon: ClipboardCheck },
    { number: '02', title: 'Projeto', icon: FileCheck },
    { number: '03', title: 'Fabricação', icon: Factory },
    { number: '04', title: 'Instalação', icon: Wrench },
    { number: '05', title: 'Documentação', icon: FileCheck },
    { number: '06', title: 'Manutenção', icon: Settings },
];

export function ServicosPage() {
    const [activeSection, setActiveSection] = useState('ventilacao');

    useEffect(() => {
        const handleScroll = () => {
            const sections = serviceNav.map(s => document.getElementById(s.id));
            const scrollPos = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(serviceNav[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 180;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        }
    };

    return (
        <>
            <PageHero
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Serviços' }
                ]}
                title="Soluções completas para seu empreendimento funcionar — e ser aprovado"
                subtitle="Da ventilação à proteção contra incêndio. Projeto, fabricação, instalação e documentação."
            />

            {/* Sticky Navigation */}
            <nav className="sticky top-[72px] z-40 bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex gap-2 overflow-x-auto py-3 -mx-2 px-2">
                        {serviceNav.map((service) => {
                            const Icon = service.icon;
                            const isActive = activeSection === service.id;
                            return (
                                <button
                                    key={service.id}
                                    onClick={() => scrollToSection(service.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all ${isActive
                                            ? 'bg-[#5DAECD] text-white'
                                            : 'bg-gray-100 text-[#7C7C7B] hover:bg-gray-200'
                                        } ${service.featured ? 'ring-2 ring-red-400 ring-offset-2' : ''}`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="font-medium text-sm">{service.label}</span>
                                    {service.featured && <span className="text-xs">⭐</span>}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Ventilação Mecânica */}
            <section id="ventilacao" className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3 space-y-6">
                            <div className="inline-block bg-[#5DAECD] text-white px-4 py-2 rounded-full text-sm font-medium">
                                QUALIDADE DO AR
                            </div>
                            <h2 className="font-['Nunito'] font-bold text-3xl text-[#1a1a1a]">
                                Ventilação Mecânica
                            </h2>
                            <p className="text-xl text-[#7C7C7B]">
                                Ar renovado, temperatura controlada, ambiente produtivo.
                            </p>
                            <div className="space-y-4 text-[#7C7C7B]">
                                <p><strong className="text-[#1a1a1a]">Aplicações:</strong></p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {['Edifícios comerciais', 'Hospitais e laboratórios', 'Shopping centers', 'Estacionamentos', 'Ambientes industriais'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-[#5DAECD] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-3">
                                {['Projeto técnico com memorial de cálculo', 'Fabricação de dutos e componentes', 'Instalação por equipe especializada', 'Conformidade com NBR 16401'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#ACCC3A]" />
                                        <span className="text-[#7C7C7B]">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Link to="/contato" className="inline-flex items-center gap-2 text-[#5DAECD] font-medium hover:gap-3 transition-all">
                                Solicitar orçamento para ventilação <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="md:col-span-2">
                            <div className="border-4 border-[#5DAECD] rounded-2xl overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800"
                                    alt="Sistema de ventilação mecânica"
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exaustão Industrial */}
            <section id="exaustao" className="bg-[#F2F2F2] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-2 order-2 md:order-1">
                            <div className="border-4 border-[#5DAECD] rounded-2xl overflow-hidden mb-6">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1616662072452-9a7a6d41a029?w=800"
                                    alt="Sistema de exaustão industrial"
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="aspect-video rounded-2xl overflow-hidden">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/vLyflLlWVy8"
                                    title="Exaustão Industrial Planitec"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                        <div className="md:col-span-3 space-y-6 order-1 md:order-2">
                            <div className="inline-block bg-[#5DAECD] text-white px-4 py-2 rounded-full text-sm font-medium">
                                SEGURANÇA E HIGIENE
                            </div>
                            <h2 className="font-['Nunito'] font-bold text-3xl text-[#1a1a1a]">
                                Exaustão Industrial
                            </h2>
                            <p className="text-xl text-[#7C7C7B]">
                                Remoção eficiente de fumaça, gordura, gases e calor.
                            </p>
                            <div className="space-y-4 text-[#7C7C7B]">
                                <p><strong className="text-[#1a1a1a]">Aplicações:</strong></p>
                                <ul className="space-y-2">
                                    {['Cozinhas industriais e comerciais', 'Estacionamentos e garagens', 'Fábricas e indústrias', 'Laboratórios químicos'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-[#5DAECD] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link to="/contato" className="inline-flex items-center gap-2 text-[#5DAECD] font-medium hover:gap-3 transition-all">
                                Solicitar orçamento para exaustão <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Climatização Evaporativa */}
            <section id="climatizacao" className="bg-white py-20 px-6 border-l-4 border-[#ACCC3A]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3 space-y-6">
                            <div className="flex flex-wrap gap-3">
                                <span className="inline-block bg-[#ACCC3A] text-white px-4 py-2 rounded-full text-sm font-medium">
                                    SUSTENTABILIDADE
                                </span>
                                <span className="inline-block bg-[#ACCC3A]/20 text-[#ACCC3A] px-4 py-2 rounded-full text-sm font-bold">
                                    Até 90% de economia de energia
                                </span>
                            </div>
                            <h2 className="font-['Nunito'] font-bold text-3xl text-[#1a1a1a]">
                                Climatização Evaporativa
                            </h2>
                            <p className="text-xl text-[#7C7C7B]">
                                A alternativa inteligente ao ar-condicionado.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Zap, title: 'Eficiência Energética', text: 'Consumo até 90% menor que ar-condicionado.' },
                                    { icon: Leaf, title: 'Zero Poluentes', text: 'Sem compressores, sem gases refrigerantes.' },
                                    { icon: Wind, title: 'Ar 100% Renovado', text: 'Ar externo filtrado. Sem recirculação.' },
                                    { icon: Coins, title: 'Baixo Custo', text: 'Manutenção simples e econômica.' },
                                ].map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={i} className="bg-[#ACCC3A]/10 rounded-xl p-4">
                                            <Icon className="w-6 h-6 text-[#ACCC3A] mb-2" />
                                            <h4 className="font-medium text-[#1a1a1a] text-sm mb-1">{item.title}</h4>
                                            <p className="text-xs text-[#7C7C7B]">{item.text}</p>
                                        </div>
                                    );
                                })}
                            </div>

                            <Link to="/contato" className="inline-flex items-center gap-2 text-[#ACCC3A] font-medium hover:gap-3 transition-all">
                                Quero economizar até 90% com climatização <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="md:col-span-2">
                            <div className="border-4 border-[#ACCC3A] rounded-2xl overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                                    alt="Sistema de climatização evaporativa"
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pressurização de Escadas - FEATURED */}
            <section id="pressurizacao" className="bg-red-50/50 py-20 px-6 border-l-4 border-[#E53935]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex flex-wrap justify-center gap-3 mb-6">
                            <span className="inline-block bg-[#E53935] text-white px-4 py-2 rounded-full text-sm font-medium">
                                OBRIGATÓRIO PARA AVCB
                            </span>
                            <span className="inline-block bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold">
                                ⭐ Nosso carro-chefe
                            </span>
                        </div>
                        <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-4">
                            Pressurização de Escadas de Emergência
                        </h2>
                        <p className="text-xl text-[#7C7C7B] max-w-3xl mx-auto">
                            Sem esse sistema, seu AVCB não sai. Com ele, vidas são salvas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                        <div className="space-y-6">
                            <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a]">Como funciona</h3>
                            <div className="space-y-4">
                                {[
                                    'Detector identifica princípio de incêndio',
                                    'Sistema de pressurização é ativado automaticamente',
                                    'Ventiladores injetam ar externo na escadaria',
                                    'Pressão positiva barra entrada de fumaça',
                                    'Rota de fuga permanece segura',
                                ].map((step, i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-8 h-8 bg-[#E53935] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                                            {i + 1}
                                        </div>
                                        <p className="text-[#7C7C7B] pt-1">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a]">O que entregamos</h3>
                            <div className="space-y-3">
                                {['Projeto conforme IT-13 do Corpo de Bombeiros', 'Dimensionamento de ventiladores e dutos', 'Integração com sistema de detecção', 'Documentação completa para aprovação'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#E53935]" />
                                        <span className="text-[#7C7C7B]">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-red-100 border-l-4 border-[#E53935] p-4 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-[#E53935] flex-shrink-0 mt-0.5" />
                                    <p className="text-red-800 font-medium text-sm">
                                        Não deixe a pressurização para o final da obra. Quanto antes, menor o risco de atraso no AVCB.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            to="/contato"
                            className="inline-flex items-center gap-2 bg-[#E53935] text-white px-8 py-4 rounded-xl font-medium hover:bg-red-600 transition-colors"
                        >
                            Preciso de pressurização para minha obra <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Detecção e Alarme */}
            <section id="deteccao" className="bg-[#F2F2F2] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-start">
                        <div className="md:col-span-3 space-y-6">
                            <div className="inline-block bg-[#E53935] text-white px-4 py-2 rounded-full text-sm font-medium">
                                PROTEÇÃO 24H
                            </div>
                            <h2 className="font-['Nunito'] font-bold text-3xl text-[#1a1a1a]">
                                Detecção e Alarme de Incêndio
                            </h2>
                            <p className="text-xl text-[#7C7C7B]">
                                Cada segundo conta. Seu sistema precisa reagir primeiro.
                            </p>
                            <div className="space-y-4 text-[#7C7C7B]">
                                <p><strong className="text-[#1a1a1a]">Componentes:</strong></p>
                                <ul className="grid grid-cols-2 gap-2">
                                    {['Detectores de fumaça', 'Detectores de temperatura', 'Acionadores manuais', 'Centrais de alarme', 'Sirenes e sinalizadores'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="w-2 h-2 bg-[#E53935] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-gray-200">
                                <p className="text-[#7C7C7B] text-sm">
                                    <strong className="text-[#1a1a1a]">Integração:</strong> Nossos sistemas acionam automaticamente pressurização, sprinklers e portas corta-fogo.
                                </p>
                            </div>
                            <Link to="/contato" className="inline-flex items-center gap-2 text-[#E53935] font-medium hover:gap-3 transition-all">
                                Proteger meu empreendimento <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <div className="md:col-span-2">
                            <div className="border-4 border-[#E53935] rounded-2xl overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                                    alt="Sistema de detecção de incêndio"
                                    className="w-full h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline do Processo */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-[#5DAECD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            COMO TRABALHAMOS
                        </div>
                        <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#1a1a1a]">
                            Do primeiro contato à aprovação: um caminho claro
                        </h2>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="flex items-center">
                                    <div className="bg-[#F2F2F2] rounded-2xl p-6 text-center min-w-[140px]">
                                        <div className="text-[#5DAECD] font-bold text-sm mb-2">{step.number}</div>
                                        <Icon className="w-8 h-8 text-[#5DAECD] mx-auto mb-2" />
                                        <div className="font-medium text-[#1a1a1a] text-sm">{step.title}</div>
                                    </div>
                                    {index < processSteps.length - 1 && (
                                        <ArrowRight className="w-6 h-6 text-[#5DAECD] mx-2 hidden md:block" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#5DAECD] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-6">
                        Não sabe por onde começar? A gente descobre junto.
                    </h2>
                    <p className="text-xl text-white/90 mb-10">
                        Análise técnica gratuita | Resposta em até 48h
                    </p>
                    <Link
                        to="/contato"
                        className="inline-block bg-white text-[#5DAECD] px-8 py-4 rounded-xl font-medium hover:bg-white/90 transition-colors"
                    >
                        Falar com Especialista
                    </Link>
                </div>
            </section>
        </>
    );
}
