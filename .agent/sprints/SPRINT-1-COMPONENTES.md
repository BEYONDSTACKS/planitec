# SPRINT 1: Componentes Reutilizáveis
**Prioridade:** ALTA
**Dependências:** Sprint 0 concluído

---

## Contexto
Atualizar Navbar e Footer com logos oficiais, criar componentes reutilizáveis para páginas internas.

## Tarefas

### 1. Atualizar Navbar.tsx
Arquivo: `src/components/Navbar.tsx`

Mudanças:
- Importar `Link` do react-router-dom
- Substituir ícone Fan pela logo oficial
- Converter links `<a href="#">` para `<Link to="/">`

```tsx
import { Link } from 'react-router-dom';
import logoSemIcone from '../assets/logo-sem-icone.webp';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logoSemIcone} alt="Planitec" className="h-10" />
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-[#7C7C7B] hover:text-[#5DAECD] transition-colors font-medium">
              Início
            </Link>
            <Link to="/empresa" className="text-[#7C7C7B] hover:text-[#5DAECD] transition-colors font-medium">
              A Empresa
            </Link>
            <Link to="/servicos" className="text-[#7C7C7B] hover:text-[#5DAECD] transition-colors font-medium">
              Serviços
            </Link>
            <Link to="/contato" className="text-[#7C7C7B] hover:text-[#5DAECD] transition-colors font-medium">
              Contato
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            to="/contato" 
            className="bg-[#5DAECD] text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </nav>
  );
}
```

### 2. Atualizar Footer.tsx
Arquivo: `src/components/Footer.tsx`

- Importar `Link` do react-router-dom
- Usar logo com ícone completo
- Atualizar links para usar React Router

### 3. Criar Breadcrumb.tsx
Arquivo: `src/components/Breadcrumb.tsx`

```tsx
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#7C7C7B]">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <ChevronRight className="w-4 h-4" />}
          {item.href ? (
            <Link to={item.href} className="hover:text-[#5DAECD] transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-[#1a1a1a] font-medium">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
```

### 4. Criar PageHero.tsx
Arquivo: `src/components/PageHero.tsx`

```tsx
import { Breadcrumb } from './Breadcrumb';

interface PageHeroProps {
  breadcrumbItems: { label: string; href?: string }[];
  title: string;
  subtitle?: string;
}

export function PageHero({ breadcrumbItems, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-[#F2F2F2] pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb items={breadcrumbItems} />
        <h1 className="font-['Nunito'] font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-6 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-[#7C7C7B] max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
```

### 5. Criar AccordionFAQ.tsx
Arquivo: `src/components/AccordionFAQ.tsx`

```tsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface AccordionFAQProps {
  items: FAQItem[];
}

export function AccordionFAQ({ items }: AccordionFAQProps) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="bg-white border border-gray-200 rounded-xl overflow-hidden"
        >
          <Accordion.Trigger className="w-full px-6 py-4 flex items-center justify-between text-left font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors">
            {item.question}
            <ChevronDown className="w-5 h-5 text-[#5DAECD] transition-transform duration-200 accordion-chevron" />
          </Accordion.Trigger>
          <Accordion.Content className="px-6 pb-4 text-[#7C7C7B]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
```

---

## Critério de Conclusão
- [ ] Navbar mostra logo oficial e links funcionam
- [ ] Footer mostra logo com tagline
- [ ] Breadcrumb renderiza corretamente
- [ ] PageHero funciona com props
- [ ] AccordionFAQ expande/contrai

---

## Referência
- Contexto: `/Users/joaovitorgarcia/Desktop/PLANITEC2/Contexto PLANITEC`
- Paleta: Cyan #5DAECD, Verde #ACCC3A, Cinza #7C7C7B
