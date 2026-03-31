# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
O ponto de entrada da aplicação é `src/main.jsx`, que renderiza o componente principal (`App`) no DOM.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Rotas ou Controladores
Não há rotas ou controladores separados. A navegação é gerenciada pelos componentes React.

### Regras de Negócio
A lógica de negócios está integrada nos componentes React, principalmente no `src/pages/Home/index.jsx`.

```jsx
export default function Home() {
  // Lógica de favoritos e filtros
}
```

### Acesso a Dados
O acesso ao armazenamento local é feito através do módulo `services/localStorage`.

```js
// src/services/localStorage/index.js
export function setLocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}
```

### Integrações Externas
Não há integrações externas visíveis no código fornecido.

### Utilitários
Utilitários e serviços auxiliares estão localizados em `src/services`.

```js
// src/services/localStorage/index.js
export function setLocalStorage(key, value) {
  return window.localStorage.setItem(key, value);
}

export function getLocalStorage(key) {
  return window.localStorage.getItem(key);
}
```

### Configurações
Configurações de build e desenvolvimento estão em `vite.config.js` e `.eslintrc.cjs`.

```js
// vite.config.js
import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  }
})
```

### Testes
Não há arquivos de testes visíveis no código fornecido.

## Onde Implementar Novas Funcionalidades

- **Novas Rotas ou Pontos de Entrada**: Adicione novas rotas ou pontos de entrada na estrutura modular do diretório `src/pages`.
  
- **Novas Regras de Negócio**: Implemente novas regras de negócio dentro dos componentes React relevantes, principalmente no arquivo `src/pages/Home/index.jsx`.

- **Novas Integrações Externas**: Adicione novas integrações em um novo módulo dentro do diretório `src/services` ou adicione funções auxiliares ao módulo existente.

## Boas Práticas do Projeto

- Mantenha a modularização e separação de componentes conforme a estrutura atual.
- Use aliases para importações (`@`) para facilitar a navegação entre arquivos.
- Persista dados importantes no armazenamento local através do módulo `localStorage`.

## Padrões e Convenções

### Organização de Arquivos
A estrutura de arquivos segue uma organização modular:
- `src/components/`: Componentes reutilizáveis.
- `src/pages/`: Componentes de páginas principais.
- `src/services/`: Serviços auxiliares.

### Convenções de Nomenclatura
- **Alias**: O projeto utiliza aliases para simplificar a importação de módulos (`@`).
- **Componentes**: Componentes são agrupados dentro do diretório `components/`, com subpastas para componentes complexos como `Gallery`.

## Fluxos Importantes

### Ponto de Entrada
O ponto de entrada da aplicação é o arquivo `src/main.jsx`, que renderiza o componente principal (`App`).

```jsx
// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

### Fluxo Principal de Dados
1. **Início**: A aplicação é iniciada no `main.jsx`, que renderiza o componente principal (`App`).
2. **Página Inicial**: O componente `Home` é carregado e exibe a galeria de fotos.
3. **Interações do Usuário**:
   - **Filtros e Busca**: Os usuários podem filtrar as imagens por tag ou buscar por texto em qualquer campo (título, créditos).
   - **Favoritar Fotos**: Os usuários podem adicionar fotos à lista de favoritos.
4. **Armazenamento Local**: As alterações nos favoritos são salvas no armazenamento local através do serviço `localStorage`.

## Cuidados ao Alterar o Código

- **Riscos e Acoplamentos**:
  - A lógica está integrada diretamente nos componentes React, portanto cuidado com a modificação de funções importantes.
  - As alterações no armazenamento local (`localStorage`) podem afetar a persistência dos dados.

## Debug e Desenvolvimento

### Rastrear Execução
- Use o console do navegador para rastrear a execução das funções e métodos.
- Utilize breakpoints nos componentes principais como `Home` e `Gallery`.

### Localizar Origem de Dados
- A origem dos dados está principalmente no componente `Home`, onde os favoritos são gerenciados.

```jsx
// src/pages/Home/index.jsx
const [favorites, setFavorites] = useState(
  getLocalStorage('favorites') ? JSON.parse(getLocalStorage('favorites')) : []
);
```

### Entender Falhas
- Verifique o console do navegador para identificar erros e exceções.
- Use logs no código para entender a execução de funções importantes.

### Validar Mudanças
- Faça testes manuais após as alterações, especialmente nas interações com o armazenamento local (`localStorage`).

## Limitações da Análise

- Não foi possível identificar claramente camadas estruturais separadas como controllers ou services, pois a lógica está integrada nos componentes React.
- A análise não inclui detalhes sobre configurações de produção ou build, que podem estar ausentes no código fornecido.