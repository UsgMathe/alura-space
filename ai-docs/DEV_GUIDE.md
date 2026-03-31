```
generated_by: n8n-workflow
workflow_name: GitHub Repository Context Builder
workflow_id: 8HscJrWZ64ZbBkVr
generated_at: 2026-03-31T11:46:01.239-03:00
generation_type: ai
source_of_truth: codebase
```

> ⚠️ Este documento foi gerado automaticamente por IA via n8n.
>
> Utilize como apoio. O código-fonte é a fonte de verdade.


# Guia de Desenvolvimento

## Como o Projeto Está Organizado

### Entrada
A entrada principal do projeto está no arquivo `src/main.jsx`, onde a aplicação React é inicializada e renderizada dentro do elemento HTML com id `root`.

```jsx
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Rotas ou Controladores
O projeto não possui rotas tradicionais, mas sim páginas principais que são renderizadas dentro do componente `App`. A página inicial é definida no arquivo `src/pages/Home/index.jsx`.

### Regras de Negócio
As regras de negócio estão principalmente nos componentes React e nas funções de armazenamento local. Por exemplo, a lógica para favoritar fotos está em `src/components/Card/index.jsx` e `src/pages/Home/index.jsx`.

### Acesso a Dados
O projeto utiliza o LocalStorage do navegador para armazenar dados locais como favoritos dos usuários. Essa lógica está no arquivo `src/services/localStorage/index.js`.

### Integrações Externas
Não há integrações externas evidentes no código fornecido.

### Utilitários
Utilitários e funções auxiliares estão distribuídos entre os componentes React e o diretório `services`. Por exemplo, a lógica de armazenamento local está em `src/services/localStorage`.

### Configurações
Configurações do projeto estão nos arquivos:
- `vite.config.js`: configuração do Vite.
- `.eslintrc.cjs`: configuração ESLint.
- `tailwind.config.js`: configuração Tailwind CSS.

### Testes
Não foram encontrados testes no código fornecido.

## Onde Implementar Novas Funcionalidades

### Novas Rotas ou Pontos de Entrada
Para adicionar novas páginas, crie um novo arquivo dentro do diretório `src/pages` e importe-o no componente `App`.

### Novas Regras de Negócio
Adicione novas regras de negócio nos componentes React relevantes. Por exemplo, para adicionar uma nova funcionalidade relacionada a favoritos, modifique o componente `Card` ou `Home`.

### Novas Integrações Externas
Se necessário integrar com serviços externos, considere criar um novo diretório dentro do `src/services` e implemente as funções necessárias.

## Boas Práticas do Projeto

- Utilize componentes reutilizáveis localizados no diretório `src/components`.
- Mantenha a lógica de armazenamento local centralizada em `src/services/localStorage`.

## Padrões e Convenções

### Organização de Arquivos
- Componentes reutilizáveis estão localizados no diretório `src/components`.
- Páginas principais estão localizadas em `src/pages`.

### Convenções de Nomenclatura
- Funções e componentes seguem a convenção PascalCase.
- Diretórios são nomeados com letras minúsculas.

## Fluxos Importantes

### Fluxo Principal da Aplicação
1. **Entrada**: A aplicação é iniciada em `src/main.jsx`.
2. **Componente App**: O componente `App` importa e renderiza a página inicial (`Home`).
3. **Página Home**: A página inicial contém componentes como Header, Footer, Galeria e Banner.
4. **Galeria de Fotos**: A galeria é gerenciada pelo componente `Gallery`, que filtra as imagens com base em tags ou buscas globais.

### Interação dos Componentes
- O componente `Home` interage com o componente `Header` para receber valores de busca e chamar a função `scrollTo`.
- O componente `Gallery` recebe dados filtrados através do componente `Cards`, que exibe as imagens.
- O componente `Card` permite favoritar fotos e abrir modais interativos.

## Cuidados ao Alterar o Código

### Riscos
- **Armazenamento Local**: A lógica para armazenar favoritos dos usuários é centralizada no diretório `services/localStorage`. Modificações aqui podem afetar todos os usuários.
- **Interação entre Componentes**: A interação entre componentes como `Home` e `Gallery` através de props e estados pode se tornar complexa com o crescimento do sistema.

### Efeitos Colaterais
- Alterações no componente `Header` podem afetar a funcionalidade de busca.
- Modificações na lógica de favoritos em `src/components/Card/index.jsx` ou `src/pages/Home/index.jsx` devem ser testadas cuidadosamente para evitar perda de dados.

## Debug e Desenvolvimento

### Rastrear Execução
Use breakpoints no navegador para rastrear a execução do código. Inicie pela função principal em `src/main.jsx`.

### Localizar Origem de Dados
Dados locais são armazenados usando o LocalStorage, acessível através das funções em `src/services/localStorage`.

### Entender Falhas
Para entender falhas, use o console do navegador para verificar erros e mensagens de log. A lógica principal está nos componentes React.

### Validar Mudanças
Depois de fazer alterações, valide-as usando a função `npm run dev` para executar o projeto localmente e testar as mudanças interativamente.

## Limitações da Análise

- Não foi possível identificar detalhes sobre infraestrutura, banco de dados ou serviços externos utilizados pela aplicação.
- A estrutura não evidencia claramente a separação em camadas como controllers, services, etc.