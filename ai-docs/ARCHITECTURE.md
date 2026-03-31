# Arquitetura do Sistema

## Visão Geral da Arquitetura
O sistema é uma aplicação web baseada em React que utiliza Vite como bundler e Tailwind CSS para estilização. A estrutura principal está organizada no diretório `src`, onde os componentes, serviços e páginas são separados claramente.

## Componentes Principais

### Diretórios
- **`src/pages/Home/index.jsx`**: Componente principal da página inicial.
- **`src/components/*`**: Módulos de componentes reutilizáveis como `Banner`, `Footer`, `Gallery`, etc.
- **`src/services/localStorage/index.js`**: Serviço para manipulação local de dados.

### Principais Componentes
- **App.jsx**: Ponto de entrada da aplicação React que renderiza a página inicial (`Home`).
- **Home**: Componente principal que contém o fluxo geral da aplicação.
- **Gallery**: Componente responsável por exibir e filtrar as fotos com base em tags e buscas globais.
- **Card**: Componente de cartão individual para cada foto, incluindo funcionalidades como favoritar e abrir modal.
- **Footer**: Componente que contém informações de contato e redes sociais do desenvolvedor.

## Fluxo de Execução
### Ponto(s) de Entrada
O ponto de entrada principal é o arquivo `src/main.jsx`, onde a aplicação React é inicializada e renderizada no DOM através de `ReactDOM.createRoot`.

### Fluxo Principal de Dados
1. **Entrada**: O usuário interage com o componente `Header` para realizar buscas globais ou navegar por tags.
2. **Processamento**:
   - Os dados são filtrados e exibidos pelo componente `Gallery`.
   - As fotos individuais são renderizadas pelos componentes `Card`, que também gerenciam a funcionalidade de favoritar e abrir modais.
3. **Persistência**: A lista de fotos favoritas é armazenada localmente usando o serviço `localStorage` no diretório `src/services/localStorage`.

### Interação dos Componentes
- O componente `Home` utiliza os componentes `Header`, `Gallery`, `Banner`, `Footer` e `Popular`.
- O componente `Gallery` interage com o componente `Cards` para exibir as fotos filtradas.
- O componente `Card` lida com a funcionalidade de favoritar e abrir modais.

## Camadas do Sistema
Não há uma separação clara em camadas como controllers, services ou repositories. A estrutura é principalmente baseada em componentes React e serviços locais para armazenamento.

## Integrações Externas
- Não foram identificadas integrações com bancos de dados ou serviços externos no código fornecido.

## Padrões Utilizados
O sistema utiliza padrões como:
- **React Components**: Componentização em arquivos separados.
- **Context API e Hooks**: Para gerenciamento de estado e efeitos colaterais.

## Padrões e Convenções
### Organização de Arquivos
- A estrutura do projeto segue uma organização modular com componentes, páginas e serviços separados.
- Os arquivos estão nomeados de forma descritiva e os caminhos são resolvidos usando alias no `vite.config.js`.

### Convenções de Nomenclatura
- Componentes seguem a convenção PascalCase (ex: `Gallery`, `Card`).
- Serviços e utilitários estão em diretórios específicos como `services/localStorage`.
- Arquivos JSON contendo dados estáticos, como fotos e tags, são armazenados no diretório `src/components/Gallery`.

## Pontos Críticos
### Áreas Centrais
- **Componente Home**: Centraliza a lógica de renderização da página inicial.
- **Serviço LocalStorage**: Gerencia o estado local das favoritas.

### Acoplamentos Relevantes
- O componente `Home` depende fortemente dos componentes `Gallery`, `Card`, e `Footer`.
- A funcionalidade de favoritar depende do serviço `localStorage`.

## Limitações da Análise
- Não foram identificados detalhes sobre o banco de dados ou serviços externos utilizados pelo projeto.
- A estrutura do diretório `src` pode ser expandida conforme novas funcionalidades são adicionadas, mas isso não foi evidenciado no código fornecido.