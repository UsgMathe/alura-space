# Alura Space

## Visão Geral
O sistema é uma aplicação web que exibe uma galeria de fotos do espaço, permitindo aos usuários navegar por imagens e filtrar por tags. O propósito principal parece ser fornecer um catálogo visualmente atraente e interativo de fotografias espaciais.

## Principais Funcionalidades
- Navegação na galeria com filtros por tag.
- Busca global em todas as propriedades das imagens (título, créditos, tags).
- Favoritar imagens através do ícone do coração.
- Visualização de imagem em tela cheia.

## Tecnologias Utilizadas
- React 18.2.0
- Vite 4.4.0
- Tailwind CSS 3.3.3
- ESLint 8.44.0
- PostCSS 8.4.26

## Como Executar
Para executar o projeto localmente, siga os passos abaixo:

```bash
npm install
npm run dev
```

Não há informações detalhadas sobre a infraestrutura ou banco de dados no código fornecido.

## Estrutura do Projeto
- `package.json`: Configurações e scripts para desenvolvimento.
- `src/services/localStorage/index.js`: Funções para armazenamento local.
- `vite.config.js`: Configuração do Vite para o projeto React.
- `postcss.config.js`: Configuração de PostCSS com Tailwind CSS.
- `tailwind.config.js`: Configurações específicas do Tailwind CSS.
- `.eslintrc.cjs`: Configurações do ESLint.
- `src/pages/Home/index.jsx`: Componente principal da página inicial.
- `src/App.jsx`: Componente raiz da aplicação.
- `src/main.jsx`: Ponto de entrada da aplicação React.

## Observações Importantes
- Não há detalhes sobre como configurar o ambiente de produção ou realizar deploy.
- O armazenamento local é usado para manter as imagens favoritas, mas não há informações sobre persistência em um banco de dados.