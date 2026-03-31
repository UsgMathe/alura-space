# Alura Space

## Visão Geral
O sistema é uma aplicação web que apresenta uma galeria de fotos do espaço. Seu propósito principal parece ser fornecer um catálogo interativo e visualmente atraente de imagens espaciais, permitindo aos usuários navegar por diferentes tags e realizar buscas.

## Principais Funcionalidades
- Navegação por tags para filtrar as imagens.
- Busca global que permite encontrar fotos pelo título, tag ou créditos.
- Favoritar imagens através de um ícone do coração.
- Visualização detalhada das imagens em um modal.
- Menu responsivo e layout adaptativo.

## Tecnologias Utilizadas
- **Linguagem:** JavaScript/TypeScript
- **Framework:** React.js
- **Estilização:** Tailwind CSS, PostCSS
- **Bibliotecas:**
  - react-icons
  - localStorage API (JavaScript)
- **Build Tools:**
  - Vite
  - ESLint

## Como Executar
Não foi possível identificar claramente os passos para executar o projeto localmente a partir do código fornecido.

## Estrutura do Projeto
O projeto é estruturado da seguinte forma:

- `package.json`: Configurações e scripts de build.
- `src/`:
  - `App.jsx`: Componente principal que renderiza a página inicial.
  - `pages/Home/index.jsx`: Componente responsável pela página home, incluindo funcionalidades como navegação por tags e busca global.
  - `components/`: Diretório contendo componentes reutilizáveis como Banner, Footer, Gallery, Header, Nav, Populares, Card, Button, etc.
  - `services/localStorage/index.js`: Serviço para manipulação do localStorage.

## Observações Importantes
- Não foi possível confirmar detalhes sobre o ambiente de desenvolvimento ou os comandos necessários para executar o projeto localmente.
- O diretório `src/components/Gallery` contém subcomponentes como `Cards`, `ModalImage`, e `Tags`.
- A estrutura do projeto é modular, utilizando alias no arquivo `jsconfig.json`.