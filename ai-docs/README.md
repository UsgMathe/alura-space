# Alura Space

## Visão Geral
O sistema é uma aplicação web que apresenta uma galeria de fotos do espaço. Seu propósito principal parece ser fornecer um catálogo interativo e visualmente atraente para usuários interessados em imagens espaciais, com funcionalidades como busca por tags e favoritos.

## Principais Funcionalidades
- **Galeria Interativa:** Exibe uma coleção de fotos do espaço categorizadas por tags.
- **Filtros e Busca:** Permite aos usuários filtrar as imagens por tag ou buscar por texto em qualquer campo (título, créditos).
- **Favoritar Fotos:** Os usuários podem adicionar fotos à lista de favoritos para acesso rápido posterior.
- **Visualização Detalhada:** Clique nas imagens para visualizar uma versão ampliada.

## Tecnologias Utilizadas
- React 18.2.0
- Vite 4.4.0
- Tailwind CSS 3.3.3
- PostCSS 8.4.26
- ESLint 8.44.0
- React Icons 4.10.1

## Como Executar
Para executar o projeto localmente, siga os passos abaixo:

```bash
# Instale as dependências do projeto
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Não há informações detalhadas sobre como configurar um ambiente de produção ou realizar a build.

## Estrutura do Projeto
O projeto é organizado da seguinte forma:

- `src/`: Contém os componentes, serviços e arquivos principais.
  - `components/`: Diretório para todos os componentes React.
    - `Banner/`
    - `Button/`
    - `Card/`
    - `Footer/`
    - `Gallery/` (inclui subpastas como `Cards`, `ModalImage`)
    - `Header/`
    - `Nav/`
    - `Populares/`
  - `pages/`: Diretório para as páginas principais.
    - `Home/`
  - `services/`: Serviços auxiliares, como armazenamento local.
- `public/`: Arquivos estáticos e assets.
- `tailwind.config.js`, `postcss.config.js`, `.eslintrc.cjs`: Configurações de estilo e linting.

## Observações Importantes
- O projeto utiliza Vite para o desenvolvimento, mas não há detalhes sobre como configurar um ambiente de produção ou realizar a build.
- A estrutura do diretório `src` é modularizada com alias (`@`) que remetem ao caminho relativo dos componentes e serviços.