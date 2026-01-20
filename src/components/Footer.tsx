import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logoComIcone from '../assets/logo-com-icone.webp';

export function Footer() {
  return (
    <footer className="bg-[#1E293B] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Footer Columns */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logoComIcone} alt="Planitec - a solução no ar" className="h-16" />
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Soluções completas em ventilação e proteção contra incêndio há mais de 20 anos.
            </p>
          </div>

          {/* Column 2 - Soluções */}
          <div>
            <h3 className="font-['Nunito'] font-bold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/servicos#pressurizacao" className="hover:text-[#5DAECD] transition-colors">Pressurização de Escadas</Link></li>
              <li><Link to="/servicos#ventilacao" className="hover:text-[#5DAECD] transition-colors">Ventilação Mecânica</Link></li>
              <li><Link to="/servicos#climatizacao" className="hover:text-[#5DAECD] transition-colors">Climatização Evaporativa</Link></li>
              <li><Link to="/servicos#exaustao" className="hover:text-[#5DAECD] transition-colors">Exaustão Industrial</Link></li>
              <li><Link to="/servicos#deteccao" className="hover:text-[#5DAECD] transition-colors">Detecção de Incêndio</Link></li>
            </ul>
          </div>

          {/* Column 3 - Empresa */}
          <div>
            <h3 className="font-['Nunito'] font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link to="/empresa" className="hover:text-[#5DAECD] transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-[#5DAECD] transition-colors">Serviços</Link></li>
              <li><Link to="/empresa#conformidade" className="hover:text-[#5DAECD] transition-colors">Certificações</Link></li>
              <li><Link to="/contato" className="hover:text-[#5DAECD] transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contato */}
          <div>
            <h3 className="font-['Nunito'] font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#5DAECD]" />
                <span>São Paulo, SP - Brasil</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#5DAECD]" />
                <span>(11) 3467-6941</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#5DAECD]" />
                <span>contato@planitec.ind.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with two colors */}
        <div className="flex mb-8">
          <div className="h-1 bg-[#5DAECD] flex-1"></div>
          <div className="h-1 bg-[#ACCC3A] flex-1"></div>
        </div>

        {/* Copyright Bar */}
        <div className="text-center text-sm text-white/60">
          <p>© 2026 Planitec. Todos os direitos reservados. CREA/SP - ABRAVA</p>
        </div>
      </div>
    </footer>
  );
}
