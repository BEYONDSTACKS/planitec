# Sprints Planitec - Guia de Execução Paralela

## Ordem de Execução

```
        ┌─────────────┐
        │  SPRINT 0   │  ← PRIMEIRO (bloqueante)
        │ Infraestrutura│
        └──────┬──────┘
               │
        ┌──────┴──────┐
        │  SPRINT 1   │  ← SEGUNDO (bloqueante)
        │ Componentes │
        └──────┬──────┘
               │
    ┌──────────┼──────────┐
    │          │          │
    ▼          ▼          ▼
┌───────┐  ┌───────┐  ┌───────┐
│SPRINT2│  │SPRINT3│  │SPRINT4│  ← PARALELO
│Empresa│  │Serviços│ │Contato│
└───────┘  └───────┘  └───────┘
```

## Arquivos

| Sprint | Arquivo | O que faz | Tempo Est. |
|--------|---------|-----------|------------|
| 0 | `SPRINT-0-INFRAESTRUTURA.md` | React Router, estrutura, placeholders | 10 min |
| 1 | `SPRINT-1-COMPONENTES.md` | Navbar, Footer, Breadcrumb, PageHero, FAQ | 20 min |
| 2 | `SPRINT-2-PAGINA-EMPRESA.md` | Página /empresa completa | 25 min |
| 3 | `SPRINT-3-PAGINA-SERVICOS.md` | Página /servicos completa (maior) | 40 min |
| 4 | `SPRINT-4-PAGINA-CONTATO.md` | Página /contato completa | 35 min |

## Como Usar

### Opção 1: Sequencial (1 agente)
Execute na ordem: Sprint 0 → Sprint 1 → Sprint 2 → Sprint 3 → Sprint 4

### Opção 2: Paralelo (3 agentes)
1. **Agente 1:** Sprint 0 → Sprint 1
2. **Aguardar** Sprint 0 e 1 concluirem
3. **Agente 1:** Sprint 2
4. **Agente 2:** Sprint 3
5. **Agente 3:** Sprint 4

## Referências Globais
- Contexto: `Contexto PLANITEC` (raiz do projeto)
- Prompts originais: `OUTRAS PÁGINAS/`
- Logos: `Logo sem icone.webp`, `logo com icone.webp`
- Paleta: Cyan #5DAECD | Verde #ACCC3A | Cinza #7C7C7B | Vermelho #E53935
