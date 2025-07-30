# 📚 Data Structures: BST and DLL

Este repositório contém a implementação em **TypeScript** de duas estruturas de dados fundamentais:

- **Árvore Binária de Busca (BST - Binary Search Tree)**
- **Lista Duplamente Encadeada (DLL - Doubly Linked List)**

O projeto tem como foco a prática de estruturas de dados em ambiente JavaScript moderno, utilizando **TypeScript** para tipagem estática e o bundler **Parcel** para facilitar a execução e visualização no navegador.

## ⚙️ Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/)
- [Parcel](https://parceljs.org/)
- [Node.js](https://nodejs.org/)

## 🚀 Como Executar o Projeto

### 1. Instale as dependências

```bash
npm install
```

### 2. Compile o TypeScript

```bash
npx tsc
```

> Isso gera os arquivos JavaScript na pasta `dist/` (ou conforme configurado no `tsconfig.json`).

### 3. Inicie o projeto com Parcel

```bash
npm run start
```

> Isso abrirá o navegador com a visualização do projeto (`http://localhost:1234` por padrão).

## 📁 Estrutura do Projeto

```
/data-structures-bst-dll
├── src/
│   ├── BinarySearchTree.ts   # Implementação da Binary Search Tree
│   ├── DoublyLinkedList.ts   # Implementação da Doubly Linked List
│   └── main.ts               # Arquivo principal que integra e testa as estruturas
│   └── index.html            # Página para exibição no navegador
│
├── dist/                   # Arquivos compilados (gerado pelo TypeScript)
├── package.json            # Dependências e scripts
├── tsconfig.json           # Configuração do TypeScript
└── README.md               # Documentação do projeto
```

## ✅ Funcionalidades

### 🌳 Árvore Binária de Busca (BST)

- Inserção de elementos na árvore
- Pesquisar se um determinado elemento está ou não na árvore
- Exibir os elementos da árvore utilizando **busca em largura**
- Exibir os elementos da árvore:
  - Pré-ordem (pre-order)
  - Em-ordem (in-order)
  - Pós-ordem (post-order)
- Exibir a **altura da árvore**
- Exibir a **quantidade de elementos** na árvore
- Exibir os **nós ancestrais** de um determinado elemento/nó
- Exibir os **nós descendentes** de um determinado elemento/nó
- Exibir o **nível de um elemento/nó**
- Verificar se a árvore é **estritamente binária**
- Verificar se a árvore é **cheia**

### 🔁 Lista Duplamente Encadeada (DLL)

- Inserção:
  - No início da lista
  - No fim da lista
  - Em uma posição qualquer da lista
- Remoção:
  - No início da lista
  - No fim da lista
  - De uma posição qualquer da lista
- Exibição da lista:
  - Na ordem normal
  - Na ordem inversa
- Verificar se a lista está **vazia**
- **Esvaziar** a lista
- Exibir o **tamanho da lista**

## 🎯 Objetivo

Este projeto foi desenvolvido com fins educacionais, com o objetivo de aplicar conceitos de estruturas de dados clássicas em um ambiente moderno com TypeScript e visualização via navegador.

## 🧑‍💻 Autora

Desenvolvido por **Maria Isabelly** como parte dos estudos de Estrutura de Dados II.
