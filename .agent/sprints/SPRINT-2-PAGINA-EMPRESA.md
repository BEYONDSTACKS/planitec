# SPRINT 2: Página "A Empresa"
**Prioridade:** PARALELA (pode rodar junto com Sprint 3 e 4)
**Dependências:** Sprint 0 e Sprint 1 concluídos

---

## Contexto
Criar a página institucional "A Empresa" com história, missão/visão/valores e diferenciais.

## Arquivo a Criar
`src/pages/EmpresaPage.tsx`

---

## Estrutura da Página

### 1. PageHero
```tsx
<PageHero 
  breadcrumbItems={[
    { label: 'Home', href: '/' },
    { label: 'A Empresa' }
  ]}
  title="20 anos resolvendo o que outros complicam"
  subtitle="Conheça a empresa que construtoras confiam quando o prazo aperta e a aprovação não pode falhar."
/>
```

### 2. Seção "Nossa História"
- Background: Branco
- Layout: Grid 2 colunas (60% texto | 40% imagem)
- Badge: "QUEM SOMOS" (bg cyan, texto branco)
- Título: "Nascemos para simplificar o que parecia impossível"
- 3 parágrafos de texto sobre a história
- Imagem com borda cyan 4px, rounded-xl

**Texto:**
> A Planitec surgiu de uma constatação simples: construtoras perdiam tempo demais coordenando múltiplos fornecedores para ventilação, climatização e proteção contra incêndio.
>
> Com mais de duas décadas de experiência, reunimos em uma única estrutura tudo o que um empreendimento precisa: projeto técnico, fabricação de componentes, instalação e documentação para o Corpo de Bombeiros.
>
> Hoje atendemos construtoras e incorporadoras em todo o estado de São Paulo.

### 3. Seção Missão/Visão/Valores
- Background: Branco
- Layout: Grid 3 colunas (cards iguais)
- Cards: bg #F2F2F2, rounded-2xl, padding 8

**Card 1 - Missão**
- Ícone: Target (cyan, 48px)
- Título: "Nossa Missão"
- Texto: "Entregar soluções completas de ventilação, climatização e proteção contra incêndio que garantam ambientes seguros e em conformidade — sempre no prazo."

**Card 2 - Visão**
- Ícone: Eye (cyan, 48px)
- Título: "Nossa Visão"
- Texto: "Ser a primeira escolha de construtoras quando o assunto é qualidade do ar e segurança contra incêndio."

**Card 3 - Valores**
- Ícone: Heart (cyan, 48px)
- Título: "Nossos Valores"
- Lista com bullets:
  - Prazo é compromisso
  - Excelência técnica
  - Transparência total
  - Parceria de longo prazo

### 4. Seção "Nossa Expertise"
- Background: #F2F2F2
- Badge: "NOSSA EXPERTISE"
- Título: "Não somos mais um fornecedor. Somos a solução completa."
- Layout: Grid 2x2

**Bloco 1 - "Integração Total"**
- Ícone: Layers (cyan)
- Texto: "Ventilação, exaustão, climatização, pressurização e detecção. Tudo de uma única empresa."

**Bloco 2 - "Fabricação Própria"**
- Ícone: Factory (cyan)
- Texto: "Dutos, coifas e componentes produzidos em nossa fábrica. Controle total de qualidade."

**Bloco 3 - "Documentação para AVCB"**
- Ícone: FileCheck (cyan)
- Texto: "Toda documentação que o Corpo de Bombeiros exige para liberar seu empreendimento."

**Bloco 4 - "Do Projeto à Manutenção"**
- Ícone: Wrench (cyan)
- Texto: "Dimensionamento, fabricação, instalação, comissionamento e manutenção preventiva."

### 5. Seção Conformidade
- Background: Branco
- Badge: "QUALIDADE E CONFORMIDADE"
- Título: "Cada projeto segue rigorosamente as normas"
- Checklist com ícone CheckCircle2 verde:
  - ✓ Normas ABNT (NBR 17240, NBR 16401, NBR 9077)
  - ✓ Instruções Técnicas do Corpo de Bombeiros (IT-13, IT-17, IT-19)
  - ✓ Legislações municipais e estaduais
  - ✓ Boas práticas ASHRAE e SMACNA
- Badges: ABRAVA, CREA/SP (texto)

### 6. CTA Section
- Reutilizar componente CTASection existente
- Ou criar versão customizada:
  - Background: #5DAECD
  - Título: "Quer conhecer a Planitec de perto?"
  - Subtítulo: "Agende uma visita ou converse com nossa equipe técnica."
  - Botão primário: "Entrar em Contato" (branco)
  - Botão secundário: "Ver Nossas Soluções →" (outline branco)

---

## Ícones Lucide Necessários
```tsx
import { Target, Eye, Heart, Layers, Factory, FileCheck, Wrench, CheckCircle2 } from 'lucide-react';
```

---

## Critério de Conclusão
- [ ] Página renderiza sem erros em `/empresa`
- [ ] Todas as seções estão presentes
- [ ] Cards missão/visão/valores responsivos
- [ ] CTAs linkam para `/contato` e `/servicos`

---

## Referência
- Prompt original: `/Users/joaovitorgarcia/Desktop/PLANITEC2/OUTRAS PÁGINAS/PROMPT EMPRESA`
- Contexto: `/Users/joaovitorgarcia/Desktop/PLANITEC2/Contexto PLANITEC`
