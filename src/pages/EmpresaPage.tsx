import { PageHero } from '../components/PageHero';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Layers, Factory, FileCheck, Wrench, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const valores = [
    'Prazo é compromisso',
    'Excelência técnica',
    'Transparência total',
    'Parceria de longo prazo',
];

const expertise = [
    {
        icon: Layers,
        title: 'Integração Total',
        text: 'Ventilação, exaustão, climatização, pressurização e detecção. Tudo de uma única empresa.',
    },
    {
        icon: Factory,
        title: 'Fabricação Própria',
        text: 'Dutos, coifas e componentes produzidos em nossa fábrica. Controle total de qualidade.',
    },
    {
        icon: FileCheck,
        title: 'Documentação para AVCB',
        text: 'Toda documentação que o Corpo de Bombeiros exige para liberar seu empreendimento.',
    },
    {
        icon: Wrench,
        title: 'Do Projeto à Manutenção',
        text: 'Dimensionamento, fabricação, instalação, comissionamento e manutenção preventiva.',
    },
];

const conformidade = [
    'Normas ABNT (NBR 17240, NBR 16401, NBR 9077)',
    'Instruções Técnicas do Corpo de Bombeiros (IT-13, IT-17, IT-19)',
    'Legislações municipais e estaduais',
    'Boas práticas ASHRAE e SMACNA',
];

export function EmpresaPage() {
    return (
        <>
            <PageHero
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'A Empresa' }
                ]}
                title="20 anos resolvendo o que outros complicam"
                subtitle="Conheça a empresa que construtoras confiam quando o prazo aperta e a aprovação não pode falhar."
            />

            {/* Nossa História */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-5 gap-12 items-center">
                        {/* Text - 60% */}
                        <div className="md:col-span-3 space-y-8">
                            <div className="inline-block bg-[#5DAECD] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide">
                                QUEM SOMOS
                            </div>
                            <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#1a1a1a] leading-tight">
                                Nascemos para simplificar o que parecia impossível
                            </h2>
                            <div className="space-y-5 text-[#7C7C7B] text-lg leading-relaxed">
                                <p>
                                    A Planitec surgiu de uma constatação simples: construtoras perdiam tempo demais
                                    coordenando múltiplos fornecedores para ventilação, climatização e proteção contra incêndio.
                                </p>
                                <p>
                                    Com mais de duas décadas de experiência, reunimos em uma única estrutura tudo o que
                                    um empreendimento precisa: projeto técnico, fabricação de componentes, instalação e
                                    documentação para o Corpo de Bombeiros.
                                </p>
                                <p>
                                    Hoje atendemos construtoras e incorporadoras em todo o estado de São Paulo.
                                </p>
                            </div>
                        </div>

                        {/* Image - 40% */}
                        <div className="md:col-span-2">
                            <div className="border-4 border-[#5DAECD] rounded-2xl overflow-hidden">
                                <ImageWithFallback
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                                    alt="Equipe técnica Planitec"
                                    className="w-full h-96 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Missão, Visão, Valores */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Missão */}
                        <div className="bg-[#F2F2F2] rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#5DAECD] rounded-2xl flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a] mb-4">
                                Nossa Missão
                            </h3>
                            <p className="text-[#7C7C7B] leading-relaxed">
                                Entregar soluções completas de ventilação, climatização e proteção contra incêndio
                                que garantam ambientes seguros e em conformidade — sempre no prazo.
                            </p>
                        </div>

                        {/* Visão */}
                        <div className="bg-[#F2F2F2] rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#5DAECD] rounded-2xl flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a] mb-4">
                                Nossa Visão
                            </h3>
                            <p className="text-[#7C7C7B] leading-relaxed">
                                Ser a primeira escolha de construtoras quando o assunto é qualidade do ar
                                e segurança contra incêndio.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="bg-[#F2F2F2] rounded-2xl p-8">
                            <div className="w-16 h-16 bg-[#5DAECD] rounded-2xl flex items-center justify-center mb-6">
                                <Heart className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a] mb-4">
                                Nossos Valores
                            </h3>
                            <ul className="space-y-3 text-[#7C7C7B]">
                                {valores.map((valor, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-[#ACCC3A] rounded-full flex-shrink-0"></span>
                                        <span>{valor}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Nossa Expertise */}
            <section className="bg-[#F2F2F2] py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block bg-[#5DAECD] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                            NOSSA EXPERTISE
                        </div>
                        <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#1a1a1a]">
                            Não somos mais um fornecedor. Somos a solução completa.
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {expertise.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="bg-white rounded-2xl p-8 flex gap-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-14 h-14 bg-[#5DAECD] rounded-xl flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-['Nunito'] font-bold text-lg text-[#1a1a1a] mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-[#7C7C7B] leading-relaxed">{item.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Conformidade */}
            <section id="conformidade" className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block bg-[#5DAECD] text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                                QUALIDADE E CONFORMIDADE
                            </div>
                            <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#1a1a1a] mb-8 leading-tight">
                                Cada projeto segue rigorosamente as normas
                            </h2>
                            <ul className="space-y-5">
                                {conformidade.map((item, index) => (
                                    <li key={index} className="flex items-start gap-4">
                                        <CheckCircle2 className="w-6 h-6 text-[#ACCC3A] flex-shrink-0 mt-0.5" />
                                        <span className="text-[#7C7C7B] text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#F2F2F2] rounded-2xl p-10 text-center">
                            <p className="text-[#7C7C7B] mb-6 text-lg">Membro associado</p>
                            <div className="flex flex-wrap justify-center gap-12">
                                <div className="text-center">
                                    <div className="font-['Nunito'] font-bold text-3xl text-[#5DAECD] mb-1">ABRAVA</div>
                                    <p className="text-sm text-[#7C7C7B]">Associação Brasileira</p>
                                </div>
                                <div className="text-center">
                                    <div className="font-['Nunito'] font-bold text-3xl text-[#5DAECD] mb-1">CREA/SP</div>
                                    <p className="text-sm text-[#7C7C7B]">Registro Profissional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-[#5DAECD] py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-6">
                        Quer conhecer a Planitec de perto?
                    </h2>
                    <p className="text-xl text-white/90 mb-12">
                        Agende uma visita ou converse com nossa equipe técnica.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            to="/contato"
                            className="bg-white text-[#5DAECD] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-colors"
                        >
                            Entrar em Contato
                        </Link>
                        <Link
                            to="/servicos"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                        >
                            Ver Nossas Soluções →
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
