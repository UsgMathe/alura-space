# Arquitetura do Sistema

## Visão Geral da Arquitetura
O sistema é uma aplicação web construída usando React.js e Vite, com estilização baseada em Tailwind CSS. A estrutura principal está organizada no diretório `src`, onde os componentes são reutilizáveis e a lógica de negócios é encapsulada nos serviços.

## Componentes Principais
### Diretórios Principais
- **`src/pages/Home`:** Contém o componente principal da página inicial.
- **`src/components`:** Armazena componentes React reutilizáveis, como `Banner`, `Footer`, `Nav`, e outros.
- **`src/services/localStorage`:** Fornece funções para manipulação do localStorage.

### Componentes Principais
- **Home:** O componente principal da página inicial que contém a lógica de navegação pela galeria, busca global e favoritos.
- **Banner:** Exibe um banner com uma imagem de fundo e texto.
- **Footer:** Contém links para redes sociais e informações sobre o desenvolvedor.
- **Nav:** Fornece um menu lateral que é responsivo e pode ser expandido ou contraído.
- **Gallery:** Gerencia a exibição das fotos na galeria, incluindo filtros por tag e busca global.
- **Card:** Exibe detalhes de uma foto individual com opções para favoritar e visualizar em um modal.
- **Tags:** Fornece tags para filtrar as imagens na galeria.

## Fluxo de Execução
### Ponto(s) de Entrada
O ponto de entrada principal é o arquivo `src/main.jsx`, que renderiza a aplicação React no DOM através do componente `App`.

```jsx
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
```

### Fluxo Principal de Dados
1. **Inicialização:** A aplicação é inicializada em `src/main.jsx`, que renderiza o componente `App`.
2. **Componente App:** O componente `App` importa e renderiza o componente `Home`.
3. **Componente Home:** O componente `Home` contém a lógica principal da página, incluindo navegação pela galeria, busca global e favoritos.
4. **Serviços de Local Storage:** A lógica para salvar e recuperar dados do localStorage é encapsulada no diretório `src/services/localStorage`.

### Interação dos Componentes
- O componente `Home` interage com os componentes `Banner`, `Footer`, `Nav`, e `Gallery`.
- O componente `Gallery` utiliza o serviço de Local Storage para salvar e recuperar favoritos.
- Os componentes `Card` e `ModalImage` são utilizados dentro do componente `Gallery`.

## Camadas do Sistema
Não há camadas estruturais claramente separadas no código fornecido. A lógica é principalmente encapsulada nos componentes React e serviços.

## Integrações Externas
- **LocalStorage:** O sistema utiliza o localStorage para armazenar dados de favoritos.
- Não foram identificadas outras integrações externas claras no código fornecido.

## Padrões Utilizados
O padrão observável é a estrutura modular e reutilizável dos componentes React, onde cada componente tem uma responsabilidade específica.

## Padrões e Convenções
- **Organização de Arquivos:** A organização segue um padrão modular com diretórios separados para páginas, componentes e serviços.
- **Convenção de Nomenclatura:** Os nomes dos arquivos e pastas são descritivos e refletem a funcionalidade do código.
- **Padrões Arquiteturais Observáveis:** A estrutura é baseada em componentização React com reutilização de componentes.

## Pontos Críticos
- **LocalStorage:** O uso do localStorage para armazenar dados de favoritos pode ser um ponto crítico, pois a persistência dos dados depende da funcionalidade do navegador.
- **Filtros e Busca:** A lógica de filtragem por tag e busca global é centralizada no componente `Gallery`, o que pode exigir cuidado na manutenção.

## Limitações da Análise
- Não foi possível identificar claramente a estrutura de dados ou fontes externas para as imagens e tags.
- A documentação do README não fornece detalhes suficientes sobre como os dados são atualizados ou mantidos.