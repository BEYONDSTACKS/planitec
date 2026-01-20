# SPRINT 3: Página "Serviços"
**Prioridade:** PARALELA (pode rodar junto com Sprint 2 e 4)
**Dependências:** Sprint 0 e Sprint 1 concluídos
**Complexidade:** ALTA (maior página do site)

---

## Contexto
Criar a página de serviços com navegação sticky, 5 seções de serviço e timeline do processo.

## Arquivo a Criar
`src/pages/ServicosPage.tsx`

---

## Estrutura da Página

### 1. PageHero
```tsx
<PageHero 
  breadcrumbItems={[
    { label: 'Home', href: '/' },
    { label: 'Serviços' }
  ]}
  title="Soluções completas para seu empreendimento funcionar — e ser aprovado"
  subtitle="Da ventilação à proteção contra incêndio. Projeto, fabricação, instalação e documentação."
/>
```

### 2. Navegação Sticky
- Posição: sticky, abaixo do navbar
- Background: branco, shadow-sm
- 5 links com âncoras:

```tsx
const services = [
  { id: 'ventilacao', icon: Wind, label: 'Ventilação' },
  { id: 'exaustao', icon: Fan, label: 'Exaustão' },
  { id: 'climatizacao', icon: Leaf, label: 'Climatização' },
  { id: 'pressurizacao', icon: Shield, label: 'Pressurização', featured: true },
  { id: 'deteccao', icon: Flame, label: 'Detecção' },
];
```

### 3. Serviço: Ventilação Mecânica (id="ventilacao")
- Background: Branco
- Layout: Grid 2 colunas (60% texto | 40% imagem)
- Badge: "QUALIDADE DO AR" (bg cyan)
- Título: "Ventilação Mecânica"
- Subtítulo: "Ar renovado, temperatura controlada, ambiente produtivo."
- Aplicações (lista):
  - Edifícios comerciais e corporativos
  - Hospitais e laboratórios
  - Shopping centers
  - Estacionamentos subterrâneos
  - Ambientes industriais
- Checklist (verde):
  - ✓ Projeto técnico com memorial de cálculo
  - ✓ Fabricação de dutos e componentes
  - ✓ Instalação por equipe especializada
  - ✓ Conformidade com NBR 16401
- CTA: "Solicitar orçamento para ventilação →"
- Imagem: Unsplash industrial, borda cyan

### 4. Serviço: Exaustão Industrial (id="exaustao")
- Background: #F2F2F2
- Layout: Grid INVERTIDO (40% imagem | 60% texto)
- Badge: "SEGURANÇA E HIGIENE" (bg cyan)
- Título: "Exaustão Industrial"
- Subtítulo: "Remoção eficiente de fumaça, gordura, gases e calor."
- Aplicações: Cozinhas industriais, estacionamentos, fábricas, laboratórios
- Checklist
- **Vídeo YouTube embed:**
```tsx
<iframe 
  className="w-full aspect-video rounded-xl"
  src="https://www.youtube.com/embed/vLyflLlWVy8"
  title="Exaustão Industrial Planitec"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```
- CTA: "Solicitar orçamento para exaustão →"

### 5. Serviço: Climatização Evaporativa (id="climatizacao")
- Background: Branco com toque verde sutil
- Badge: "SUSTENTABILIDADE" (bg verde #ACCC3A)
- Badge destaque: "Até 90% de economia de energia" (verde)
- Título: "Climatização Evaporativa"
- Subtítulo: "A alternativa inteligente ao ar-condicionado."
- Grid 2x2 de vantagens:

| Ícone | Título | Texto |
|-------|--------|-------|
| Zap | Eficiência Energética | Consumo até 90% menor que ar-condicionado |
| Leaf | Zero Poluentes | Sem compressores, sem gases refrigerantes |
| Wind | Ar 100% Renovado | Ar externo filtrado. Sem recirculação |
| Coins | Baixo Custo Operacional | Manutenção simples e econômica |

- CTA: "Quero economizar até 90% com climatização →" (verde)
- Imagem com borda verde

### 6. Serviço: Pressurização de Escadas ⭐ FEATURED (id="pressurizacao")
- **DESTAQUE VISUAL** - Esta é a seção mais importante
- Background: Branco com toque vermelho/rosa sutil
- Badge: "OBRIGATÓRIO PARA AVCB" (bg vermelho #E53935)
- Star/Featured indicator visível
- Título: "Pressurização de Escadas de Emergência"
- Subtítulo: "Sem esse sistema, seu AVCB não sai. Com ele, vidas são salvas."

**Timeline "Como Funciona" (5 passos):**
1. Detector identifica princípio de incêndio
2. Sistema de pressurização é ativado automaticamente
3. Ventiladores injetam ar externo na escadaria
4. Pressão positiva barra entrada de fumaça
5. Rota de fuga permanece segura

**Checklist (vermelho):**
- ✓ Projeto conforme IT-13 do Corpo de Bombeiros
- ✓ Dimensionamento de ventiladores e dutos
- ✓ Integração com sistema de detecção
- ✓ Documentação completa para aprovação

**Box Urgência:**
```tsx
<div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
  <p className="text-red-800 font-medium">
    Não deixe a pressurização para o final da obra. Quanto antes, menor o risco de atraso no AVCB.
  </p>
</div>
```

- CTA: "Preciso de pressurização para minha obra →" (vermelho)
- Imagem com borda vermelha

### 7. Serviço: Detecção e Alarme (id="deteccao")
- Background: #F2F2F2
- Badge: "PROTEÇÃO 24H" (bg vermelho)
- Título: "Detecção e Alarme de Incêndio"
- Subtítulo: "Cada segundo conta. Seu sistema precisa reagir primeiro."
- Componentes (lista):
  - Detectores de fumaça
  - Detectores de temperatura
  - Acionadores manuais
  - Centrais de alarme
  - Sirenes e sinalizadores
- Nota: "Nossos sistemas acionam automaticamente: pressurização, sprinklers, portas corta-fogo"
- CTA: "Proteger meu empreendimento →"

### 8. Timeline Processo de Trabalho
- Background: Branco
- Badge: "COMO TRABALHAMOS"
- Título: "Do primeiro contato à aprovação: um caminho claro"
- Timeline horizontal com 6 steps:

```
01. DIAGNÓSTICO → 02. PROJETO → 03. FABRICAÇÃO → 04. INSTALAÇÃO → 05. DOCUMENTAÇÃO → 06. MANUTENÇÃO
```

Cada step tem ícone + descrição curta.

### 9. CTA Section
- Background: #5DAECD
- Título: "Não sabe por onde começar? A gente descobre junto."
- Subtítulo: "Análise técnica gratuita | Resposta em até 48h"
- Botão: "Falar com Especialista"

---

## Ícones Lucide Necessários
```tsx
import { 
  Wind, Fan, Leaf, Shield, Flame, 
  CheckCircle2, Zap, Coins, 
  ClipboardCheck, Factory, Wrench, FileCheck, Settings, AlertTriangle
} from 'lucide-react';
```

---

## Critério de Conclusão
- [ ] Página renderiza sem erros em `/servicos`
- [ ] Navegação sticky funciona e destaca seção ativa
- [ ] Todas as 5 seções de serviço presentes
- [ ] Pressurização tem destaque visual especial
- [ ] Vídeo YouTube carrega
- [ ] Timeline renderiza horizontalmente
- [ ] Mobile: navegação sticky horizontal scrollável

---

## Referência
- Prompt original: `/Users/joaovitorgarcia/Desktop/PLANITEC2/OUTRAS PÁGINAS/PROMPT SERIVCOS`
- Contexto: `/Users/joaovitorgarcia/Desktop/PLANITEC2/Contexto PLANITEC`
