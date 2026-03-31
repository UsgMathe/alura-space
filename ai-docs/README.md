```
generated_by: n8n-workflow
workflow_name: GitHub Repository Context Builder
workflow_id: 8HscJrWZ64ZbBkVr
generated_at: 2026-03-31T14:09:09.425-03:00
generation_type: ai
source_of_truth: codebase
```

> ⚠️ Este documento foi gerado automaticamente por IA via n8n.
>
> Utilize como apoio. O código-fonte é a fonte de verdade.

---

# Alura Space

## Visão Geral
O sistema é uma aplicação web que apresenta uma galeria de fotos do espaço. Seu propósito principal parece ser fornecer um catálogo interativo e visualmente atraente de imagens espaciais, com funcionalidades como busca por tags e favoritos.

## Principais Funcionalidades
- **Galeria Interativa:** Exibe uma coleção de imagens do espaço categorizadas por tags.
- **Filtros de Busca:** Permite aos usuários filtrar as fotos pela tag ou título.
- **Favoritar Fotos:** Os usuários podem adicionar e remover fotos favoritas usando ícones de coração.
- **Visualização Detalhada:** Exibe uma imagem em tamanho maior quando clicada.

## Tecnologias Utilizadas
- **React**: Framework JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de desenvolvimento rápido e otimizada para React.
- **Tailwind CSS**: Biblioteca de utilidades CSS para estilização rápida.
- **PostCSS**: Processador de CSS que permite escrever código CSS mais moderno.
- **ESLint**: Ferramenta de análise estática do JavaScript para identificar problemas e melhorar a qualidade do código.

## Como Executar
Para executar o projeto localmente, siga os passos abaixo:

1. Certifique-se de ter Node.js instalado na máquina.
2. Clone o repositório:
   ```sh
   git clone https://github.com/usgmathe/alura-space.git
   cd alura-space
   ```
3. Instale as dependências do projeto:
   ```sh
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## Estrutura do Projeto

- **`package.json`**: Arquivo que contém a configuração do pacote, scripts e dependências.
- **`src/`**: Diretório principal onde está toda a lógica da aplicação.
  - **`App.jsx`**: Componente raiz da aplicação.
  - **`pages/Home/index.jsx`**: Página inicial que exibe a galeria de fotos.
  - **`components/`**: Diretório contendo os componentes reutilizáveis da aplicação, como `Banner`, `Footer`, `Gallery`, etc.
  - **`services/localStorage/index.js`**: Serviço para armazenamento local de dados.

## Observações Importantes
- Não há evidências claras sobre a infraestrutura ou banco de dados utilizados pelo projeto. A análise se baseou apenas no código fornecido.
- O arquivo `photos.json` contém os dados das fotos da galeria, mas não está disponível no repositório público analisado.

---

Este README.md fornece uma visão geral técnica do sistema e orientações básicas para seu desenvolvimento local.