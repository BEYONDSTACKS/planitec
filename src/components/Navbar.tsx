import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoSemIcone from '../assets/logo-sem-icone.webp';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'A Empresa', href: '/empresa' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoSemIcone} alt="Planitec" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors ${isActive(link.href)
                    ? 'text-[#5DAECD]'
                    : 'text-[#7C7C7B] hover:text-[#5DAECD]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contato"
            className="hidden md:block bg-[#5DAECD] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Solicitar Orçamento
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#1a1a1a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a1a1a]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 font-medium transition-colors ${isActive(link.href)
                    ? 'text-[#5DAECD]'
                    : 'text-[#7C7C7B] hover:text-[#5DAECD]'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contato"
              onClick={() => setMobileMenuOpen(false)}
              className="block mt-4 bg-[#5DAECD] text-white px-6 py-3 rounded-xl font-medium text-center hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
