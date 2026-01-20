import { PageHero } from '../components/PageHero';
import { AccordionFAQ } from '../components/AccordionFAQ';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, Mail, MapPin, Clock, Lock, FileText } from 'lucide-react';
import { useState } from 'react';

const faqItems = [
    {
        question: "Qual o prazo médio para um projeto de ventilação ou pressurização?",
        answer: "Depende do porte e complexidade. Após a visita técnica, fornecemos cronograma detalhado."
    },
    {
        question: "Vocês atendem em quais regiões?",
        answer: "Atendemos em todo o estado de São Paulo e regiões próximas."
    },
    {
        question: "Vocês cuidam de toda a documentação para o Corpo de Bombeiros?",
        answer: "Sim. Entregamos projeto completo conforme IT-13, instalamos e fornecemos toda documentação para AVCB."
    },
    {
        question: "Vocês fazem manutenção de sistemas de outras empresas?",
        answer: "Sim. Oferecemos manutenção preventiva e corretiva independente de quem instalou."
    },
    {
        question: "A climatização evaporativa funciona em qualquer ambiente?",
        answer: "Funciona muito bem em ambientes amplos: galpões, fábricas, academias. Para ambientes pequenos e fechados, avaliamos a viabilidade."
    },
    {
        question: "Quanto custa um sistema de pressurização?",
        answer: "Depende do número de pavimentos e configuração. Entre em contato para orçamento personalizado."
    }
];

const serviceOptions = [
    'Selecione uma opção',
    'Ventilação Mecânica',
    'Exaustão Industrial',
    'Climatização Evaporativa',
    'Pressurização de Escadas',
    'Detecção e Alarme de Incêndio',
    'Manutenção de sistemas existentes',
    'Mais de uma solução',
    'Não tenho certeza (preciso de consultoria)'
];

const obraOptions = [
    'Selecione',
    'Sim, em fase inicial',
    'Sim, em fase intermediária',
    'Sim, em fase final (urgente)',
    'Não, ainda em projeto',
    'Não é obra nova (retrofit/manutenção)'
];

export function ContatoPage() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        servico: '',
        obra: '',
        mensagem: '',
        privacidade: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui seria a lógica de envio do formulário
        console.log('Form submitted:', formData);
        alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const inputClass = "w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-[#5DAECD] focus:ring-2 focus:ring-[#5DAECD]/20 outline-none transition-all";

    return (
        <>
            <PageHero
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Contato' }
                ]}
                title="Vamos resolver seu projeto juntos"
                subtitle="Escolha o canal que preferir. Respondemos em até 24 horas úteis — ou na hora, se for urgente."
            />

            {/* Main Contact Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-5 gap-12">
                        {/* Left Column - Contact Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="font-['Nunito'] font-bold text-2xl text-[#1a1a1a] mb-2">
                                    Fale com a Planitec
                                </h2>
                                <p className="text-[#7C7C7B]">
                                    Dúvida técnica, orçamento ou visita na obra — estamos prontos.
                                </p>
                            </div>

                            {/* WhatsApp Card */}
                            <div className="bg-[#25D366] text-white p-6 rounded-2xl">
                                <span className="text-sm font-medium opacity-90">Resposta Imediata</span>
                                <div className="flex items-center gap-3 mt-2">
                                    <MessageCircle className="w-8 h-8" fill="currentColor" />
                                    <div>
                                        <h3 className="font-bold text-lg">WhatsApp</h3>
                                        <p className="text-sm opacity-90">Fale agora com nossa equipe técnica</p>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/5511982450402"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 block bg-white text-[#25D366] text-center py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Chamar no WhatsApp
                                </a>
                                <p className="text-center text-sm mt-2 opacity-75">(11) 9-8245-0402</p>
                            </div>

                            {/* Contact Info Blocks */}
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#5DAECD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-[#5DAECD]" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a1a1a]">Telefone</h4>
                                        <p className="text-[#7C7C7B] text-sm">(11) 3467-6941</p>
                                        <p className="text-[#7C7C7B] text-sm">(11) 2609-4974</p>
                                        <p className="text-[#7C7C7B] text-sm">(11) 2609-4982</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#5DAECD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-[#5DAECD]" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a1a1a]">E-mail</h4>
                                        <p className="text-[#7C7C7B] text-sm">contato@planitec.ind.br</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#5DAECD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-[#5DAECD]" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a1a1a]">Endereço</h4>
                                        <p className="text-[#7C7C7B] text-sm">São Paulo, SP - Brasil</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-[#5DAECD]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-[#5DAECD]" />
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-[#1a1a1a]">Horário de Atendimento</h4>
                                        <p className="text-[#7C7C7B] text-sm">Segunda a Sexta, 08h às 18h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Form */}
                        <div className="lg:col-span-3">
                            <div className="border-4 border-[#5DAECD] rounded-2xl bg-white p-8">
                                <h3 className="font-['Nunito'] font-bold text-xl text-[#1a1a1a] mb-2">
                                    Solicite um orçamento
                                </h3>
                                <p className="text-[#7C7C7B] mb-6">
                                    Preencha os dados abaixo. Quanto mais detalhes, mais precisa será nossa resposta.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                                Nome completo *
                                            </label>
                                            <input
                                                type="text"
                                                name="nome"
                                                value={formData.nome}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="Seu nome"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                                E-mail corporativo *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="email@empresa.com.br"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                                Telefone / WhatsApp *
                                            </label>
                                            <input
                                                type="tel"
                                                name="telefone"
                                                value={formData.telefone}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="(11) 99999-9999"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                                Empresa *
                                            </label>
                                            <input
                                                type="text"
                                                name="empresa"
                                                value={formData.empresa}
                                                onChange={handleChange}
                                                required
                                                className={inputClass}
                                                placeholder="Nome da empresa"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                            Qual solução você precisa? *
                                        </label>
                                        <select
                                            name="servico"
                                            value={formData.servico}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                        >
                                            {serviceOptions.map((option, i) => (
                                                <option key={i} value={i === 0 ? '' : option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                            A obra já está em andamento? *
                                        </label>
                                        <select
                                            name="obra"
                                            value={formData.obra}
                                            onChange={handleChange}
                                            required
                                            className={inputClass}
                                        >
                                            {obraOptions.map((option, i) => (
                                                <option key={i} value={i === 0 ? '' : option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-[#1a1a1a] mb-1">
                                            Descreva brevemente sua necessidade
                                        </label>
                                        <textarea
                                            name="mensagem"
                                            value={formData.mensagem}
                                            onChange={handleChange}
                                            rows={4}
                                            className={inputClass}
                                            placeholder="Tipo de edificação, número de pavimentos, prazo desejado, etc."
                                        />
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <input
                                            type="checkbox"
                                            name="privacidade"
                                            id="privacidade"
                                            checked={formData.privacidade}
                                            onChange={handleChange}
                                            required
                                            className="w-5 h-5 rounded border-gray-300 text-[#5DAECD] focus:ring-[#5DAECD] mt-0.5"
                                        />
                                        <label htmlFor="privacidade" className="text-sm text-[#7C7C7B]">
                                            Li e concordo com a Política de Privacidade
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-[#5DAECD] text-white py-4 rounded-xl font-medium hover:opacity-90 transition-opacity"
                                    >
                                        Enviar Solicitação
                                    </button>
                                    <p className="text-center text-sm text-[#7C7C7B] flex items-center justify-center gap-1">
                                        <Lock className="w-4 h-4" /> Seus dados estão seguros
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Alternative Channels */}
            <section className="bg-[#F2F2F2] py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-[#5DAECD] text-white px-4 py-2 rounded-full text-sm font-medium">
                            OUTRAS FORMAS DE FALAR COM A GENTE
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center">
                            <div className="w-14 h-14 bg-[#5DAECD]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-7 h-7 text-[#5DAECD]" />
                            </div>
                            <h3 className="font-['Nunito'] font-bold text-lg text-[#1a1a1a] mb-2">
                                Visita Técnica
                            </h3>
                            <p className="text-[#7C7C7B] text-sm mb-4">
                                Quer que nossa equipe avalie seu projeto presencialmente? Agendamos sem compromisso.
                            </p>
                            <Link
                                to="/contato"
                                className="inline-block border-2 border-[#5DAECD] text-[#5DAECD] px-6 py-2 rounded-xl font-medium hover:bg-[#5DAECD] hover:text-white transition-colors"
                            >
                                Agendar Visita
                            </Link>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center">
                            <div className="w-14 h-14 bg-[#5DAECD]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <FileText className="w-7 h-7 text-[#5DAECD]" />
                            </div>
                            <h3 className="font-['Nunito'] font-bold text-lg text-[#1a1a1a] mb-2">
                                Envie seu Projeto
                            </h3>
                            <p className="text-[#7C7C7B] text-sm mb-2">
                                Já tem plantas ou especificações? Envie direto para nosso e-mail técnico.
                            </p>
                            <p className="text-[#5DAECD] text-sm font-medium mb-4">orcamento@planitec.ind.br</p>
                            <a
                                href="mailto:orcamento@planitec.ind.br"
                                className="inline-block border-2 border-[#5DAECD] text-[#5DAECD] px-6 py-2 rounded-xl font-medium hover:bg-[#5DAECD] hover:text-white transition-colors"
                            >
                                Enviar E-mail
                            </a>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center">
                            <div className="w-14 h-14 bg-[#5DAECD]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-7 h-7 text-[#5DAECD]" />
                            </div>
                            <h3 className="font-['Nunito'] font-bold text-lg text-[#1a1a1a] mb-2">
                                Prefere Ligar?
                            </h3>
                            <p className="text-[#7C7C7B] text-sm mb-2">
                                Nossa equipe técnica atende em horário comercial.
                            </p>
                            <p className="text-[#5DAECD] text-sm font-medium mb-4">(11) 3467-6941</p>
                            <a
                                href="tel:+551134676941"
                                className="inline-block border-2 border-[#5DAECD] text-[#5DAECD] px-6 py-2 rounded-xl font-medium hover:bg-[#5DAECD] hover:text-white transition-colors"
                            >
                                Ligar Agora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-block bg-[#5DAECD] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                            DÚVIDAS FREQUENTES
                        </div>
                        <h2 className="font-['Nunito'] font-bold text-3xl text-[#1a1a1a]">
                            Respostas rápidas para você decidir mais rápido
                        </h2>
                    </div>

                    <AccordionFAQ items={faqItems} />
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-gray-200 h-80 flex items-center justify-center">
                <p className="text-gray-500">Google Maps - Em breve</p>
            </section>

            {/* CTA Section */}
            <section className="bg-[#5DAECD] py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-6">
                        Sua obra não pode esperar. Nem a gente.
                    </h2>
                    <p className="text-xl text-white/90 mb-10">
                        Entre em contato agora e receba análise técnica em até 48 horas.
                    </p>
                    <a
                        href="https://wa.me/5511982450402"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-xl font-medium hover:bg-gray-100 transition-colors"
                    >
                        <MessageCircle className="w-5 h-5" fill="currentColor" />
                        Falar pelo WhatsApp
                    </a>
                </div>
            </section>
        </>
    );
}
