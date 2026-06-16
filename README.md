# TaskFlow QA Cypress

Projeto de automação E2E com Cypress em um mini sistema de tarefas criado com HTML, CSS e JavaScript.

## Sobre o projeto

O TaskFlow QA é um app simples de tarefas criado para praticar automação de testes com Cypress.

O objetivo foi construir um fluxo completo de estudo e prática, começando com testes simples e evoluindo para uma estrutura mais organizada usando:

- beforeEach
- Fixtures
- Page Objects
- selectorsList
- Assertions
- Git e GitHub

## Funcionalidades do app

- Login com usuário válido
- Login inválido com mensagem de erro
- Cadastro de tarefas
- Marcar tarefa como concluída
- Excluir tarefa
- Filtros de tarefas

## Cenários automatizados

### Login

- Deve fazer login com sucesso
- Deve exibir erro ao tentar login com dados inválidos

### Tarefas

- Deve adicionar uma nova tarefa
- Deve marcar uma tarefa como concluída
- Deve excluir uma tarefa

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- Node.js
- Cypress
- http-server

## Estrutura do projeto

```text
taskflow-qa-cypress/
├── app/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   └── tasks.cy.js
│   │
│   ├── fixtures/
│   │   └── taskFlowData.json
│   │
│   └── pages/
│       ├── loginPage.js
│       └── taskPage.js
│
├── cypress.config.js
├── package.json
├── README.md
└── .gitignore

### Como instalar

```js
npm install
```
  

### Como rodar o app
```js
npm run start
```

### O app ficará disponível em:

  ```
http://localhost:3000
  ```

### Como abrir o Cypress

Com o app rodando, abra outro terminal e execute:

```js
npm run cy:open
```

#### Como rodar os testes pelo terminal

Com o app rodando, execute:

```js
npm run cy:run
```


Dados de acesso do app
```
Usuário: admin
Senha: 123456
```

### Conceitos praticados

- Testes E2E
- Seletores com data-cy
- describe e it
- beforeEach
- Fixtures
- Page Objects
- selectorsList
- Assertions com should
- Organização de testes Cypress
- Execução via terminal
- Versionamento com Git

### Status

Projeto criado para prática de automação QA com Cypress.


Salve.