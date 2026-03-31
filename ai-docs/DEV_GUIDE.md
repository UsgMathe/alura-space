# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
O ponto de entrada principal do projeto é o arquivo `src/main.jsx`, que renderiza a aplicação React no DOM através do componente `App`.

```jsx
import App from './App.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
```

### Rotas ou Controladores
O projeto não utiliza rotas tradicionais como em frameworks backend. A navegação é gerenciada por componentes React e a página principal (`Home`) está localizada em `src/pages/Home/index.jsx`.

### Regras de Negócio
A lógica de negócio, incluindo manipulação de favoritos e filtros de fotos, está concentrada no componente `Gallery` dentro do diretório `src/components/Gallery`. 

### Acesso a Dados
Os dados das imagens e tags são armazenados localmente em arquivos JSON (`photos.json`, `popularPhotos.json`). O serviço para manipulação do localStorage é implementado em `src/services/localStorage`.

### Integrações Externas
O projeto utiliza o localStorage para persistir os favoritos dos usuários. Não há outras integrações externas claras no código fornecido.

### Utilitários
Utilidades gerais, como funções de manipulação do localStorage, estão localizadas em `src/services/localStorage`.

### Configurações
Configurações globais e específicas da aplicação são gerenciadas nos arquivos:
- `vite.config.js`
- `.eslintrc.cjs`
- `tailwind.config.js`

### Testes
Não foram encontrados testes no código fornecido.

## Onde Implementar Novas Funcionalidades

### Novas Rotas ou Pontos de Entrada
Para adicionar novas rotas, você pode criar um novo componente dentro do diretório `src/pages` e importá-lo em `App.jsx`.

### Novas Regras de Negócio
Novas regras de negócio relacionadas à manipulação de fotos e favoritos devem ser implementadas no componente `Gallery`, localizado em `src/components/Gallery/index.jsx`. 

### Novas Integrações Externas
Para adicionar novas integrações externas, você pode criar um novo serviço dentro do diretório `src/services` ou expandir o uso do localStorage conforme necessário.

## Boas Práticas do Projeto

- A estrutura modular e reutilizável dos componentes React deve ser mantida.
- Os nomes dos arquivos e pastas devem refletir a funcionalidade do código.
- As convenções de nomenclatura existentes devem ser seguidas.

## Padrões e Convenções

### Organização de Arquivos
A organização segue um padrão modular:
- `src/pages`: Componentes principais da aplicação.
- `src/components`: Componentes reutilizáveis.
- `src/services/localStorage`: Serviço para manipulação do localStorage.

### Convenção de Nomenclatura
Os nomes dos arquivos e pastas são descritivos e refletem a funcionalidade do código.

### Padrões Arquiteturais Observáveis
A estrutura é baseada em componentização React com reutilização de componentes.

## Fluxos Importantes

- **Inicialização**: O ponto de entrada principal é `src/main.jsx`, que renderiza o componente `App`.
- **Componente App**: O componente `App` importa e renderiza o componente `Home`.
- **Componente Home**: O componente `Home` contém a lógica principal da página, incluindo navegação pela galeria, busca global e favoritos.
- **Serviços de Local Storage**: A lógica para salvar e recuperar dados do localStorage é encapsulada no diretório `src/services/localStorage`.

## Cuidados ao Alterar o Código

### Riscos
- O uso do localStorage pode ser um ponto crítico, pois a persistência dos dados depende da funcionalidade do navegador.
- A lógica de filtragem por tag e busca global é centralizada no componente `Gallery`, o que pode exigir cuidado na manutenção.

### Acoplamentos
- O componente `Home` interage com vários componentes, como `Banner`, `Footer`, `Nav`, e `Gallery`.
- O componente `Gallery` utiliza o serviço de Local Storage para salvar e recuperar favoritos.
- Os componentes `Card` e `ModalImage` são utilizados dentro do componente `Gallery`.

### Efeitos Colaterais
Alterações no componente `Home` podem afetar a lógica de navegação, busca global e favoritos.

## Debug e Desenvolvimento

### Rastrear Execução
Para rastrear a execução da aplicação, comece pelo arquivo `src/main.jsx`, que renderiza o componente `App`. A partir do componente `App`, você pode seguir para o componente `Home` e seus componentes filhos.

### Localizar Origem de Dados
Os dados das imagens e tags são armazenados em arquivos JSON (`photos.json`, `popularPhotos.json`). O serviço de manipulação do localStorage está localizado em `src/services/localStorage`.

### Entender Falhas
Para entender falhas, comece analisando o componente onde a falha ocorre. Use ferramentas como o console do navegador para rastrear erros e mensagens de log.

### Validar Mudanças
Depois de fazer alterações, valide-as usando os testes existentes (se houver) ou adicione novos testes conforme necessário. Execute a aplicação localmente e teste interativamente as funcionalidades afetadas pelas mudanças.

## Limitações da Análise

- Não foi possível identificar claramente a estrutura de dados ou fontes externas para as imagens e tags.
- A documentação do README não fornece detalhes suficientes sobre como os dados são atualizados ou mantidos.