# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
A entrada principal do projeto é através da página inicial (`Home`), localizada em `src/pages/Home/index.jsx`.

### Rotas ou Controladores
Não há rotas ou controladores definidos explicitamente. A navegação e a renderização de componentes são gerenciadas diretamente pelos arquivos JSX.

### Regras de Negócio
As regras de negócio estão principalmente no componente `Home` (`src/pages/Home/index.jsx`). Este componente lida com a lógica de filtragem, busca e favoritamento das fotos.

### Acesso a Dados
O acesso aos dados é feito através do arquivo JSON localizado em `src/components/Gallery/photos.json`. O armazenamento local de dados (favoritos) é gerenciado pelo serviço `localStorage` no diretório `src/services/localStorage`.

### Integrações Externas
Não foram identificadas integrações com bancos de dados ou serviços externos.

### Utilitários
Utilitários e serviços locais estão organizados em subdiretórios dentro do diretório `src`, como `services/localStorage` para manipulação local de dados.

### Configurações
Configurações globais, como o Vite e Tailwind CSS, são definidas nos arquivos `vite.config.js`, `tailwind.config.js`, e `.eslintrc.cjs`.

## Onde Implementar Novas Funcionalidades

### Novas Rotas ou Pontos de Entrada
Novas rotas ou pontos de entrada devem ser adicionados no diretório `src/pages` para manter a estrutura modular.

### Novas Regras de Negócio
Novas regras de negócio podem ser implementadas dentro do componente `Home`, ou em novos componentes criados dentro do diretório `src/components`.

### Novas Integrações Externas
Para adicionar integrações externas, como bancos de dados, é recomendado criar um novo serviço no diretório `src/services` e ajustar os arquivos de configuração conforme necessário.

## Boas Práticas do Projeto

- **Componentização**: O projeto utiliza componentes React bem definidos para modularidade.
- **Estado Local**: A lógica de armazenamento local é centralizada em `localStorage`, facilitando a manutenção e o teste.
- **Estilização**: Tailwind CSS é usado para estilização, permitindo uma rápida customização visual.

## Padrões e Convenções

### Organização de Arquivos
Arquivos são organizados em diretórios específicos:
- `src/pages`: Componentes principais da aplicação.
- `src/components`: Módulos reutilizáveis.
- `src/services/localStorage`: Serviços para manipulação local de dados.

### Convenções de Nomenclatura
- **Componentes**: PascalCase (ex: `Gallery`, `Card`).
- **Serviços e Utilitários**: Diretórios específicos como `services/localStorage`.
- **Arquivos JSON**: Armazenamento de dados estáticos no diretório `src/components/Gallery`.

### Padrões Arquiteturais Observáveis
O projeto segue uma arquitetura baseada em componentes React, sem separação clara entre camadas.

## Fluxos Importantes

### Fluxo Principal
1. **Entrada**: O usuário interage com o componente `Header` para realizar buscas globais ou navegar por tags.
2. **Processamento**:
   - Os dados são filtrados e exibidos pelo componente `Gallery`.
   - As fotos individuais são renderizadas pelos componentes `Card`, que também gerenciam a funcionalidade de favoritar e abrir modais.
3. **Persistência**: A lista de fotos favoritas é armazenada localmente usando o serviço `localStorage`.

### Pontos de Entrada
- O ponto de entrada principal é o arquivo `src/main.jsx`.
- A renderização da aplicação começa no componente `App` (`src/App.jsx`).

## Cuidados ao Alterar o Código

### Riscos e Acoplamentos
- **Componente Home**: Centraliza a lógica de renderização da página inicial. Alterações aqui podem afetar vários outros componentes.
- **Serviço LocalStorage**: Gerencia o estado local das favoritas. Qualquer alteração neste serviço pode impactar a funcionalidade de armazenamento e recuperação de dados.

### Efeitos Colaterais
Alterações no componente `Home` podem ter efeitos colaterais em outros componentes que dependem dele, como `Gallery`, `Card`, e `Footer`.

## Debug e Desenvolvimento

### Rastrear Execução
Para rastrear a execução do código:
- Use o console do navegador para debugar.
- Utilize breakpoints no componente `Home` (`src/pages/Home/index.jsx`) para entender a lógica de filtragem e busca.

### Localizar Origem de Dados
A origem dos dados está em `src/components/Gallery/photos.json`. Para alterações, modifique este arquivo ou adicione novos arquivos JSON conforme necessário.

### Entender Falhas
Para entender falhas:
- Verifique o console do navegador para erros e mensagens.
- Use ferramentas de debug do React (ex: `React DevTools`).

### Validar Mudanças
Depois de fazer alterações, valide-as usando os testes existentes ou adicione novos testes no diretório `src`.

## Limitações da Análise

Não foram identificados detalhes sobre o banco de dados ou serviços externos utilizados pelo projeto. A estrutura do diretório `src` pode ser expandida conforme novas funcionalidades são adicionadas, mas isso não foi evidenciado no código fornecido.