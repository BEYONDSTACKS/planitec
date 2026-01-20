# SPRINT 0: Infraestrutura e Roteamento
**Prioridade:** PRIMEIRA (bloqueante para outros sprints)
**Dependências:** Nenhuma

---

## Contexto
Configurar React Router e estrutura de pastas para suportar navegação multi-página. Este sprint DEVE ser executado ANTES dos outros.

## Tarefas

### 1. Instalar React Router
```bash
cd /Users/joaovitorgarcia/Desktop/PLANITEC2
npm install react-router-dom
```

### 2. Criar estrutura de pastas
```bash
mkdir -p src/pages
mkdir -p src/assets
```

### 3. Copiar logos para assets
```bash
cp "Logo sem icone.webp" src/assets/logo-sem-icone.webp
cp "logo com icone.webp" src/assets/logo-com-icone.webp
```

### 4. Atualizar App.tsx
Substituir conteúdo por:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { EmpresaPage } from './pages/EmpresaPage';
import { ServicosPage } from './pages/ServicosPage';
import { ContatoPage } from './pages/ContatoPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/empresa" element={<EmpresaPage />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </BrowserRouter>
  );
}
```

### 5. Criar página placeholder HomePage.tsx
Arquivo: `src/pages/HomePage.tsx`

```tsx
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { StatsSection } from '../components/StatsSection';
import { PhotoGallery } from '../components/PhotoGallery';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PhotoGallery />
      <CTASection />
    </>
  );
}
```

### 6. Criar placeholders para outras páginas
Criar arquivos temporários para não quebrar imports:

**src/pages/EmpresaPage.tsx**
```tsx
export function EmpresaPage() {
  return <div className="pt-32 min-h-screen">Página Empresa - Em construção</div>;
}
```

**src/pages/ServicosPage.tsx**
```tsx
export function ServicosPage() {
  return <div className="pt-32 min-h-screen">Página Serviços - Em construção</div>;
}
```

**src/pages/ContatoPage.tsx**
```tsx
export function ContatoPage() {
  return <div className="pt-32 min-h-screen">Página Contato - Em construção</div>;
}
```

---

## Critério de Conclusão
- [ ] `npm run dev` roda sem erros
- [ ] Navegação funciona: `/`, `/empresa`, `/servicos`, `/contato`
- [ ] Logos copiadas para `src/assets/`

---

## Referência
- Contexto: `/Users/joaovitorgarcia/Desktop/PLANITEC2/Contexto PLANITEC`
