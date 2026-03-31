# Alura Space

## Visão Geral
O sistema é uma aplicação web que apresenta uma galeria de fotos do espaço. Seu propósito principal parece ser fornecer um catálogo interativo e visualmente atraente de imagens espaciais, permitindo aos usuários navegar por diferentes tags e realizar buscas.

## Principais Funcionalidades
- Navegação através de tags para filtrar as fotos.
- Busca global que permite encontrar fotos baseada em título, tag ou créditos.
- Favoritar fotos individualmente.
- Visualização modal de imagens clicáveis.
- Interface responsiva e adaptável a diferentes tamanhos de tela.

## Tecnologias Utilizadas
- React 18.2.0
- Vite 4.4.0
- Tailwind CSS 3.3.3
- PostCSS 8.4.26
- ESLint 8.44.0
- React Icons 4.10.1

## Como Executar
Para executar o projeto localmente, siga os passos abaixo:

```sh
# Instale as dependências do projeto
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Não há informações detalhadas sobre como configurar um ambiente de produção ou realizar a build final.

## Estrutura do Projeto
O projeto é estruturado da seguinte forma:

- `package.json`: Arquivo principal que define as dependências e scripts.
- `vite.config.js`: Configuração do Vite para o projeto React.
- `src/`: Diretório raiz das fontes do projeto, contendo:
  - `pages/Home/index.jsx`: Componente principal da página inicial.
  - `components/*`: Módulos de componentes reutilizáveis como Banner, Footer, Gallery, etc.
  - `services/localStorage/index.js`: Serviço para manipulação local de dados.

## Observações Importantes
- Não foi possível identificar detalhes sobre o banco de dados ou serviços externos utilizados pelo projeto.
- A estrutura do diretório `src` pode ser expandida conforme novas funcionalidades são adicionadas.