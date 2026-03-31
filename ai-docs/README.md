# Alura Space

## Visão Geral
O sistema é uma aplicação web que apresenta uma galeria de fotos do espaço, permitindo aos usuários navegar por imagens filtradas por tags e realizar buscas. O propósito principal parece ser fornecer um catálogo interativo e visualmente atraente de fotografias espaciais.

## Principais Funcionalidades
- Navegação pela galeria com filtros por tag.
- Busca global que permite encontrar imagens baseada em título, descrição ou tags.
- Sistema de favoritos para salvar fotos preferidas do usuário.
- Visualização detalhada das imagens em um modal.

## Tecnologias Utilizadas
- **Linguagem**: JavaScript/TypeScript
- **Framework**: React.js
- **Bibliotecas**:
  - `react-icons`
  - `vite` (para build e desenvolvimento)
  - `tailwindcss`
  - `postcss-loader`, `autoprefixer`, `postcss-nesting`
- **Ferramentas de Desenvolvimento**:
  - ESLint
  - Vite Plugin React

## Como Executar
Não foi possível identificar claramente os passos para executar o projeto localmente a partir do código fornecido. Recomenda-se consultar as documentações oficiais das dependências e configurar um ambiente de desenvolvimento adequado.

## Estrutura do Projeto
O projeto é estruturado da seguinte forma:

- `src`: Diretório principal contendo todos os componentes, serviços e configurações.
  - `components`: Componentes React reutilizáveis como `Banner`, `Footer`, `Nav` etc.
  - `services/localStorage`: Serviço para manipulação do localStorage.
  - `pages/Home`: Página inicial da aplicação com a lógica principal.

## Observações Importantes
- Não há evidências claras sobre o banco de dados ou serviços externos utilizados pelo projeto.
- A estrutura e os arquivos JSON (como `photos.json` e `popularPhotos.json`) indicam que as imagens e tags são gerenciadas localmente, mas não há detalhes sobre como esses dados são atualizados ou mantidos.