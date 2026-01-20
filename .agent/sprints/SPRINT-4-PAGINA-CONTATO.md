# SPRINT 4: Página "Contato"
**Prioridade:** PARALELA (pode rodar junto com Sprint 2 e 3)
**Dependências:** Sprint 0 e Sprint 1 concluídos

---

## Contexto
Criar a página de contato com formulário, informações de contato, FAQ e mapa.

## Arquivo a Criar
`src/pages/ContatoPage.tsx`

---

## Estrutura da Página

### 1. PageHero
```tsx
<PageHero 
  breadcrumbItems={[
    { label: 'Home', href: '/' },
    { label: 'Contato' }
  ]}
  title="Vamos resolver seu projeto juntos"
  subtitle="Escolha o canal que preferir. Respondemos em até 24 horas úteis — ou na hora, se for urgente."
/>
```

### 2. Seção Principal de Contato
- Background: Branco
- Layout: Grid 2 colunas (40% info | 60% formulário)

#### Coluna Esquerda - Informações

**Título:** "Fale com a Planitec"
**Subtítulo:** "Dúvida técnica, orçamento ou visita na obra — estamos prontos."

**Card WhatsApp (DESTACADO):**
```tsx
<div className="bg-[#25D366] text-white p-6 rounded-2xl">
  <span className="text-sm font-medium opacity-90">Resposta Imediata</span>
  <div className="flex items-center gap-3 mt-2">
    <MessageCircle className="w-8 h-8" />
    <div>
      <h3 className="font-bold text-lg">WhatsApp</h3>
      <p className="text-sm opacity-90">Fale agora com nossa equipe técnica</p>
    </div>
  </div>
  <a 
    href="https://wa.me/5511982450402" 
    className="mt-4 block bg-white text-[#25D366] text-center py-3 rounded-xl font-medium"
  >
    Chamar no WhatsApp
  </a>
  <p className="text-center text-sm mt-2 opacity-75">(11) 9-8245-0402</p>
</div>
```

**Blocos de Contato (ícone + texto):**

| Ícone | Título | Conteúdo |
|-------|--------|----------|
| Phone | Telefone | (11) 3467-6941 / (11) 2609-4974 / (11) 2609-4982 |
| Mail | E-mail | contato@planitec.ind.br |
| MapPin | Endereço | São Paulo, SP - Brasil |
| Clock | Horário | Segunda a Sexta, 08h às 18h |

#### Coluna Direita - Formulário

**Card com borda cyan 4px:**
```tsx
<div className="border-4 border-[#5DAECD] rounded-2xl bg-white p-8">
```

**Título:** "Solicite um orçamento"
**Subtítulo:** "Preencha os dados abaixo. Quanto mais detalhes, mais precisa será nossa resposta."

**Campos do Formulário:**

Row 1 (2 colunas):
- Nome completo * (text)
- E-mail corporativo * (email)

Row 2 (2 colunas):
- Telefone / WhatsApp * (tel)
- Empresa * (text)

Row 3 (full width):
- Qual solução você precisa? * (select)
  - Selecione uma opção
  - Ventilação Mecânica
  - Exaustão Industrial
  - Climatização Evaporativa
  - Pressurização de Escadas
  - Detecção e Alarme de Incêndio
  - Manutenção de sistemas existentes
  - Mais de uma solução
  - Não tenho certeza (preciso de consultoria)

Row 4 (full width):
- A obra já está em andamento? * (select)
  - Selecione
  - Sim, em fase inicial
  - Sim, em fase intermediária
  - Sim, em fase final (urgente)
  - Não, ainda em projeto
  - Não é obra nova (retrofit/manutenção)

Row 5 (full width):
- Descreva brevemente sua necessidade (textarea, 4 rows)
- Placeholder: "Tipo de edificação, número de pavimentos, prazo desejado, etc."

Row 6:
- Checkbox: "Li e concordo com a Política de Privacidade"

**Botão Submit:**
```tsx
<button className="w-full bg-[#5DAECD] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2">
  Enviar Solicitação
</button>
<p className="text-center text-sm text-[#7C7C7B] mt-2 flex items-center justify-center gap-1">
  <Lock className="w-4 h-4" /> Seus dados estão seguros
</p>
```

**Estilo dos inputs:**
```css
border: 2px solid #E2E8F0;
border-radius: 12px;
padding: 14px 16px;
/* Focus state */
focus:border-[#5DAECD] focus:ring-2 focus:ring-[#5DAECD]/20
```

### 3. Canais Alternativos
- Background: #F2F2F2
- Badge: "OUTRAS FORMAS DE FALAR COM A GENTE"
- Grid 3 colunas de cards:

**Card 1 - Visita Técnica**
- Ícone: MapPin
- Texto: "Quer que nossa equipe avalie seu projeto presencialmente? Agendamos sem compromisso."
- Botão: "Agendar Visita" (outline cyan)

**Card 2 - Envie seu Projeto**
- Ícone: FileText
- Texto: "Já tem plantas ou especificações? Envie direto para nosso e-mail técnico."
- Email: orcamento@planitec.ind.br
- Botão: "Enviar E-mail" (outline cyan)

**Card 3 - Prefere Ligar?**
- Ícone: Phone
- Texto: "Nossa equipe técnica atende em horário comercial."
- Número: (11) 3467-6941
- Botão: "Ligar Agora" (outline cyan)

### 4. FAQ Section
- Background: Branco
- Badge: "DÚVIDAS FREQUENTES"
- Título: "Respostas rápidas para você decidir mais rápido"
- Usar componente AccordionFAQ

**FAQs:**
```tsx
const faqs = [
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
```

### 5. Google Maps Section (Opcional)
- Full width
- Height: 350px
- Placeholder ou embed real
- Caption: "Visite nossa sede em São Paulo"

```tsx
<div className="w-full h-80 bg-gray-200 flex items-center justify-center">
  <p className="text-gray-500">Google Maps - Em breve</p>
</div>
```

### 6. CTA Section
- Background: #5DAECD
- Título: "Sua obra não pode esperar. Nem a gente."
- Subtítulo: "Entre em contato agora e receba análise técnica em até 48 horas."
- Botão: "Falar pelo WhatsApp" (branco, ícone verde)

---

## Ícones Lucide Necessários
```tsx
import { 
  MessageCircle, Phone, Mail, MapPin, Clock, 
  Lock, FileText, CheckCircle2
} from 'lucide-react';
```

---

## Critério de Conclusão
- [ ] Página renderiza sem erros em `/contato`
- [ ] Card WhatsApp destacado e funcional
- [ ] Formulário com todos os campos
- [ ] FAQ accordion expande/contrai
- [ ] Layout responsivo (mobile: colunas empilhadas)
- [ ] Botão WhatsApp flutuante visível

---

## Referência
- Prompt original: `/Users/joaovitorgarcia/Desktop/PLANITEC2/OUTRAS PÁGINAS/PROMPT CONTATO`
- Contexto: `/Users/joaovitorgarcia/Desktop/PLANITEC2/Contexto PLANITEC`
