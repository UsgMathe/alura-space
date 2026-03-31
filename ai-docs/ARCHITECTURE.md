# Arquitetura do Sistema

## Visão Geral da Arquitetura
O sistema é uma aplicação web baseada em React que utiliza Vite como servidor de desenvolvimento e Tailwind CSS para estilização. A estrutura do projeto é modularizada, com componentes separados por funcionalidades e serviços encapsulados em diretórios específicos.

## Componentes Principais
### Diretórios Principais
- **src/**: Contém os principais arquivos e módulos da aplicação.
  - **components/**: Módulo que agrupa componentes React reutilizáveis, como `Banner`, `Button`, `Card`, `Footer`, `Gallery`, `Header` e `Nav`.
    - **Gallery/Cards**: Componente responsável por exibir as imagens filtradas ou pesquisadas.
  - **pages/**: Diretório que contém os componentes de páginas principais, como a página inicial (`Home`).
  - **services/**: Módulo para serviços auxiliares, incluindo o armazenamento local.

### Componentes Específicos
- **App.jsx**: Ponto de entrada da aplicação React.
- **main.jsx**: Arquivo principal que inicia a renderização do componente `App`.
- **Home/index.jsx**: Componente responsável pela página inicial com funcionalidades como galeria, filtros e favoritos.

## Fluxo de Execução
### Ponto(s) de Entrada
O ponto de entrada da aplicação é o arquivo `src/main.jsx`, que renderiza o componente principal (`App`) no DOM.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Fluxo Principal de Dados
1. **Início**: A aplicação é iniciada no `main.jsx`, que renderiza o componente principal (`App`).
2. **Página Inicial**: O componente `Home` é carregado e exibe a galeria de fotos.
3. **Interações do Usuário**:
   - **Filtros e Busca**: Os usuários podem filtrar as imagens por tag ou buscar por texto em qualquer campo (título, créditos).
   - **Favoritar Fotos**: Os usuários podem adicionar fotos à lista de favoritos.
4. **Armazenamento Local**: As alterações nos favoritos são salvas no armazenamento local através do serviço `localStorage`.

### Interação dos Componentes
- O componente `Home` utiliza os componentes `Banner`, `Footer`, `Gallery`, `Header` e `Nav`.
- O componente `Gallery` interage com o serviço de armazenamento local para salvar e recuperar favoritos.
- Os componentes `Card` e `ModalImage` são utilizados dentro do componente `Gallery`.

## Camadas do Sistema
O sistema não possui camadas estruturais claramente separadas como controllers, services ou repositories. A lógica de negócios é integrada diretamente nos componentes React.

## Integrações Externas
- **Armazenamento Local**: Utiliza o armazenamento local do navegador através do serviço `localStorage`.

## Padrões Utilizados
### Organização de Arquivos
A estrutura de arquivos segue uma organização modular, com componentes separados por funcionalidades e serviços encapsulados em diretórios específicos.

### Convenções de Nomenclatura
- **Alias**: O projeto utiliza aliases para simplificar a importação de módulos (`@`).
- **Componentes**: Componentes são agrupados dentro do diretório `components/`, com subpastas para componentes complexos como `Gallery`.

## Pontos Críticos
### Áreas Centrais
- **Home/index.jsx**: Centraliza as interações principais da aplicação, incluindo a exibição de galeria e manipulação de favoritos.
- **services/localStorage/index.js**: Responsável pela persistência dos dados de favoritos no armazenamento local.

## Limitações da Análise
- Não foi possível identificar claramente camadas estruturais separadas como controllers ou services, pois a lógica está integrada nos componentes React.
- A análise não inclui detalhes sobre configurações de produção ou build, que podem estar ausentes no código fornecido.