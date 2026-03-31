# Alura Space

## Visão Geral
O sistema é uma aplicação web que apresenta uma galeria de fotos do espaço. Seu propósito principal parece ser fornecer um catálogo interativo e visualmente atraente de imagens espaciais, permitindo aos usuários navegar por diferentes categorias, realizar buscas e favoritar suas fotos preferidas.

## Principais Funcionalidades
- Navegação entre diferentes tags (categorias) de fotos.
- Busca global no site para encontrar fotos específicas.
- Favoritamento de fotos através do ícone do coração.
- Visualização detalhada das imagens em um modal.

## Tecnologias Utilizadas
- **Linguagem:** JavaScript/TypeScript
- **Framework:** React.js
- **Bibliotecas:**
  - `react-icons`
  - `vite` (para desenvolvimento e build)
  - `tailwindcss`
  - `postcss-loader`, `autoprefixer`, `postcss-nesting`
- **Ferramentas de Desenvolvimento:**
  - ESLint
  - Vite Plugin React

## Como Executar
Para executar o projeto localmente, siga os passos abaixo:

1. Certifique-se de ter Node.js e npm instalados.
2. Clone o repositório:
   ```bash
   git clone https://github.com/usgmathe/alura-space.git
   cd alura-space
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Estrutura do Projeto

- `package.json`: Configuração das dependências e scripts.
- `vite.config.js`: Configurações específicas para o Vite.
- `src/`:
  - `App.jsx`: Componente principal da aplicação.
  - `pages/Home/index.jsx`: Página inicial que contém a lógica de navegação, busca e favoritamento.
  - `components/`: Diretório com componentes reutilizáveis como Banner, Footer, Gallery, Header, Nav, Populares, Card, Button, etc.
  - `services/localStorage/index.js`: Serviço para armazenar dados no localStorage.

## Observações Importantes
- O projeto utiliza Vite para o desenvolvimento e build. Certifique-se de que a versão correta do Node.js está instalada.
- A estrutura dos componentes é modular, com cada componente responsável por uma funcionalidade específica.
- Não há evidências claras sobre como configurar um ambiente de produção ou realizar deploy no código fornecido.

---

Este README.md fornece uma visão geral técnica e orientações básicas para o desenvolvimento local do projeto Alura Space.