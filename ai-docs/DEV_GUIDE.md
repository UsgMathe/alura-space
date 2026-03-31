# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
O ponto de entrada principal do projeto é o arquivo `src/main.jsx`, onde o componente `App` é montado no DOM através do método `ReactDOM.createRoot`.

### Rotas ou Controladores
Não há rotas ou controladores tradicionais neste projeto. A navegação e a renderização das páginas são gerenciadas pelos componentes React.

### Regras de Negócio
As regras de negócio estão distribuídas entre os componentes React, principalmente no componente `Home` (`src/pages/Home/index.jsx`). Este componente lida com o estado global da aplicação, como tags e buscas.

### Acesso a Dados
O acesso aos dados é feito através dos componentes que interagem diretamente com as APIs ou fontes de dados. No caso deste projeto, os dados são estáticos e armazenados em arquivos JSON (`src/components/Gallery/photos.json`).

### Integrações Externas
- **Local Storage:** Utilizado para persistir os favoritos entre sessões do usuário.
- **React Icons:** Biblioteca que fornece ícones reutilizáveis em todo o projeto.

### Utilitários
Os utilitários estão localizados no diretório `src/services/localStorage/`, onde há funções para manipulação do Local Storage (`index.js`).

### Configurações
As configurações do projeto são gerenciadas nos arquivos:
- `vite.config.js`: Configuração do Vite.
- `postcss.config.js`: Configuração do PostCSS e Tailwind CSS.
- `.eslintrc.cjs`: Configuração do ESLint.

### Testes
Não foram encontrados testes no código fornecido.

## Onde Implementar Novas Funcionalidades

### Novas Rotas ou Pontos de Entrada
Novas rotas não são necessárias neste projeto, pois a navegação é gerenciada pelos componentes React. Se for necessário adicionar uma nova página, crie um novo componente no diretório `src/components/` e importe-o na rota principal (`App.jsx`).

### Novas Regras de Negócio
Novas regras de negócio devem ser implementadas dentro dos componentes relevantes ou em novos serviços que interagem com o Local Storage.

### Novas Integrações Externas
Para adicionar novas integrações externas, crie um novo diretório no `src/services/` e implemente as funções necessárias. Certifique-se de importar e usar esses serviços nos componentes que precisam interagir com a nova API ou serviço.

### Novos Módulos, Serviços ou Camadas
Se for necessário adicionar novas camadas ou módulos, siga o padrão modular existente no projeto. Por exemplo, se você precisa de um novo serviço para manipular dados externos, crie um diretório dentro de `src/services/` e implemente as funções necessárias.

## Boas Práticas do Projeto

- **Reutilização de Componentes:** Os componentes são reutilizáveis e seguem o padrão de modularidade.
- **Persistência Local:** O uso do Local Storage para salvar favoritos é uma boa prática que deve ser mantida.
- **Estilização com Tailwind CSS:** A estilização é feita usando Tailwind CSS, seguindo convenções claras.

## Padrões e Convenções

### Organização de Arquivos
O projeto segue a organização modular:
- `src/components/`: Componentes React.
- `src/services/localStorage/`: Serviços para manipulação do Local Storage.

### Convenções de Nomenclatura
Os nomes dos arquivos e componentes seguem convenções claras, com nomes descritivos que indicam a funcionalidade.

### Padrões Arquiteturais Observáveis
A aplicação segue um padrão de componentização onde cada componente tem uma responsabilidade clara e interage com outros componentes através de props e estados compartilhados.

## Fluxos Importantes

- **Página Inicial:** O fluxo começa em `src/main.jsx`, que renderiza o componente `App`. Dentro do `App.jsx`, a página inicial (`Home`) é carregada.
- **Componentes Interativos:**
  - A barra superior (`Header`) permite ao usuário buscar fotos e navegar até a galeria através do ícone de lupa.
  - O componente `Gallery` filtra as imagens com base nas tags selecionadas ou na busca realizada pelo usuário.

## Cuidados ao Alterar o Código

- **Local Storage:** A manipulação do Local Storage é crucial para salvar os favoritos entre sessões. Qualquer alteração deve ser validada cuidadosamente.
- **Componentes Principais:** Os componentes principais como `Header`, `Gallery` e `Card` são centrais na funcionalidade da aplicação e requerem atenção durante manutenção.

## Debug e Desenvolvimento

### Rastrear Execução
Para rastrear a execução, comece em `src/main.jsx` e siga o fluxo de renderização dos componentes. Use ferramentas como o console do navegador para debugar estados e props.

### Localizar Origem de Dados
Os dados são carregados diretamente nos arquivos JSON (`photos.json`). Para localizar a origem, procure por importações desses arquivos em outros componentes.

### Entender Falhas
Para entender falhas, use o console do navegador para identificar erros e rastrear a execução. Verifique se os estados e props estão sendo passados corretamente entre os componentes.

### Validar Mudanças
Depois de fazer alterações, valide-as usando ferramentas como ESLint e Vite para garantir que o código está conforme as regras estabelecidas.

## Limitações da Análise

Não foi possível identificar claramente os passos para executar o projeto localmente a partir do código fornecido. Recomenda-se adicionar um arquivo README com instruções detalhadas para facilitar a manutenção futura.