# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
O ponto de entrada principal do projeto é o arquivo `src/main.jsx`, que renderiza a aplicação React usando ReactDOM.

```jsx
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Rotas ou Controladores
Não há rotas ou controladores tradicionais no projeto. A navegação é gerenciada por componentes React e o componente principal da aplicação é `src/App.jsx`.

```jsx
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
```

### Regras de Negócio
As regras de negócio são implementadas principalmente nos componentes React e nas funções de armazenamento local. O componente `src/pages/Home/index.jsx` é o ponto central que coordena a exibição da galeria e dos componentes filhos.

```jsx
import Gallery from '@/components/Gallery';

export default function Home() {
  // Lógica de negócio para filtragem, busca e favoritos
}
```

### Acesso a Dados
O acesso aos dados é feito através do armazenamento local (localStorage) no arquivo `src/services/localStorage/index.js`.

```js
export function setLocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}
```

### Integrações Externas
Não há evidências claras de integrações com APIs externas no código fornecido.

### Utilitários
Funções utilitárias para armazenamento local estão localizadas em `src/services/localStorage/index.js`.

```js
export function setLocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}
```

### Configurações
Configurações do projeto são encontradas nos arquivos:
- `vite.config.js`
- `postcss.config.js`
- `tailwind.config.js`
- `.eslintrc.cjs`

### Testes
Não há evidências de testes no código fornecido.

## Onde Implementar Novas Funcionalidades

### Novas Rotas ou Pontos de Entrada
Novas rotas não são necessárias neste projeto, pois a navegação é gerenciada por componentes React. Se for necessário adicionar novas páginas, crie um novo componente no diretório `src/pages` e importe-o em `App.jsx`.

### Novas Regras de Negócio
Novas regras de negócio devem ser implementadas nos componentes relevantes ou em funções separadas dentro do diretório `src/services`. Por exemplo, novos filtros podem ser adicionados ao componente `Gallery` no arquivo `src/components/Gallery/index.jsx`.

### Novas Integrações Externas
Se for necessário integrar com APIs externas, adicione as chamadas de API em componentes ou serviços relevantes. Certifique-se de manter a lógica separada e modular.

### Novos Módulos, Serviços ou Camadas
Novos módulos ou serviços devem seguir o padrão existente e ser adicionados no diretório `src/services` ou `src/components`.

## Boas Práticas do Projeto

- Use componentes React para criar a interface do usuário.
- Utilize hooks como `useState` e `useEffect` extensivamente para gerenciar estado e efeitos colaterais.
- Mantenha a lógica de armazenamento local em funções separadas no diretório `src/services/localStorage`.

## Padrões e Convenções

### Organização de Arquivos
A estrutura do projeto segue uma organização modular:
- Componentes: `src/components/`
- Serviços: `src/services/`
- Páginas: `src/pages/`

### Convenções de Nomenclatura
- **Componentes**: Nomeados usando camelCase (ex: `Header`, `Gallery`).
- **Serviços**: Localizados no diretório `src/services/`.

## Fluxos Importantes

### Ponto de Entrada Principal
O ponto de entrada principal é o arquivo `src/main.jsx`.

```jsx
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Fluxo Principal de Dados
- **Home**: O componente `Home` coordena a exibição da galeria e dos componentes filhos.
- **Galeria**: A galeria lida com a filtragem das imagens por tag, busca global e gerenciamento de favoritos.

## Cuidados ao Alterar o Código

### Riscos
- O armazenamento local é usado para manter as imagens favoritas, o que pode ser um ponto de atenção em termos de persistência e escalabilidade.
- A lógica de filtragem e busca está concentrada principalmente na galeria, podendo se tornar complexa à medida que mais funcionalidades são adicionadas.

### Acoplamentos
- O componente `Home` utiliza vários componentes filhos (Header, Nav, Gallery, Banner, Footer).
- O componente `Gallery` interage com o localStorage para armazenar e recuperar imagens favoritas.

## Debug e Desenvolvimento

### Rastrear Execução
Para rastrear a execução do código, use breakpoints no navegador ou ferramentas de debug como Chrome DevTools. Inicie pelo arquivo `src/main.jsx` e siga o fluxo até os componentes relevantes.

### Localizar Origem de Dados
A origem dos dados é principalmente gerenciada pelos componentes React e funções de armazenamento local no diretório `src/services/localStorage`.

### Entender Falhas
Para entender falhas, use logs ou console.log() temporariamente para rastrear o fluxo do código. Certifique-se de testar todas as condições possíveis.

### Validar Mudanças
Depois de fazer alterações, valide-as usando `npm run dev` e verifique se tudo está funcionando conforme esperado antes de realizar commits ou pull requests.

## Limitações da Análise

- Não há detalhes sobre como configurar o ambiente de produção ou realizar deploy.
- O armazenamento local é usado para manter as imagens favoritas, mas não há informações sobre persistência em um banco de dados.