```
generated_by: n8n-workflow
workflow_name: GitHub Repository Context Builder
workflow_id: 8HscJrWZ64ZbBkVr
generated_at: 2026-03-31T13:57:25.463-03:00
generation_type: ai
source_of_truth: codebase
```

> ⚠️ Este documento foi gerado automaticamente por IA via n8n.
>
> Utilize como apoio. O código-fonte é a fonte de verdade.


# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
O ponto de entrada principal do projeto é o arquivo `src/main.jsx`, que renderiza a aplicação através do componente `App`.

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Rotas ou Controladores
Não há rotas ou controladores tradicionais no projeto. A navegação é gerenciada por componentes e páginas.

### Regras de Negócio
As regras de negócio estão principalmente nos componentes, especialmente em `src/components/Gallery/index.jsx` e `src/pages/Home/index.jsx`.

### Acesso a Dados
O acesso aos dados está concentrado no JSON `photos.json`, que é lido diretamente pelos componentes.

### Integrações Externas
A única integração externa observada é o uso do localStorage para armazenamento local de favoritos, implementado em `src/services/localStorage/index.js`.

### Utilitários
Utilitários e serviços estão no diretório `src/services`, como manipulação de localStorage.

### Configurações
Configurações são gerenciadas por arquivos específicos:
- `vite.config.js` para configuração do Vite.
- `.eslintrc.cjs` para regras ESLint.
- `tailwind.config.js` para configuração Tailwind CSS.

### Testes
Não foram encontrados testes no código fornecido.

## Onde Implementar Novas Funcionalidades

### Novas Rotas ou Pontos de Entrada
Novas rotas ou pontos de entrada devem ser adicionadas em `src/App.jsx` e/ou `src/main.jsx`.

### Novas Regras de Negócio
Novas regras de negócio podem ser implementadas nos componentes relevantes, principalmente no diretório `src/components/Gallery` e `src/pages/Home`.

### Novas Integrações Externas
Para novas integrações externas, adicione os serviços necessários em `src/services`, mantendo a estrutura atual.

## Boas Práticas do Projeto

- **Componentização**: O projeto segue uma arquitetura baseada em componentes React.
- **Gerenciamento de Estado Local**: Utiliza o localStorage para armazenar dados locais, como favoritos dos usuários.
- **Estilização com Tailwind CSS**: Usa Tailwind CSS para estilização.

## Padrões e Convenções

### Organização de Arquivos
A estrutura do projeto segue uma convenção clara:
- `src/components`: Componentes reutilizáveis.
- `src/pages`: Páginas principais da aplicação.
- `src/services`: Serviços auxiliares.

### Convenções de Nomenclatura
Os nomes dos arquivos e pastas seguem uma nomenclatura consistente e descritiva.

### Padrões Arquiteturais Observáveis
O projeto segue padrões React, com componentização e gerenciamento de estado através do contexto ou props.

## Fluxos Importantes

- **Fluxo Principal**: O componente `Home` é renderizado através do componente `App`, que inicializa a galeria de fotos.
- **Filtragem e Busca**: A filtragem por tags e busca global são realizadas no componente `Gallery`.
- **Favoritamento**: Quando um usuário favorita uma imagem, o estado local é atualizado e salvo em localStorage através do serviço `localStorage`.

## Cuidados ao Alterar o Código

### Riscos
- **Acoplamentos**: O uso extenso de localStorage pode criar acoplamentos que dificultam a manutenção.
- **Efeitos Colaterais**: Mudanças no componente `Gallery` podem afetar significativamente outras partes da aplicação.

### Áreas Sensíveis
- **Componente Gallery**: Central para funcionalidades como filtragem, busca e favoritamento de imagens.
- **Manipulação do LocalStorage**: Ponto sensível em termos de manutenção e escalabilidade.

## Debug e Desenvolvimento

### Rastrear Execução
Para rastrear a execução, use o console.log() ou ferramentas de debug do navegador nos componentes relevantes.

### Localizar Origem de Dados
A origem dos dados está no JSON `photos.json` e é lido diretamente pelos componentes.

### Entender Falhas
Use o console para identificar erros e analisar a pilha de chamadas para entender falhas.

### Validar Mudanças
Depois de fazer alterações, valide-as usando `npm run dev` e verifique se as funcionalidades continuam funcionando corretamente.

## Limitações da Análise

- **Fontes das Imagens**: Não foi possível identificar detalhes sobre as fontes das imagens utilizadas na aplicação.
- **Configuração de Produção**: A configuração completa para execução em produção não está evidente no código fornecido.