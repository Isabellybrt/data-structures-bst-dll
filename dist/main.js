"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DoublyLinkedList_1 = require("./DoublyLinkedList");
const BinarySearchTree_1 = require("./BinarySearchTree");
const lista = new DoublyLinkedList_1.DoublyLinkedList();
const arvore = new BinarySearchTree_1.BinarySearchTree();
const output = document.getElementById("output");
// ----------------- Lista -----------------
window.addStart = () => {
    const value = getValue("valor");
    lista.insertAtStart(value);
    window.showForward();
};
window.addEnd = () => {
    const value = getValue("valor");
    lista.insertAtEnd(value);
    window.showForward();
};
window.addAt = () => {
    const value = getValue("valor");
    const pos = getValue("posicao");
    lista.insertAt(value, pos);
    window.showForward();
};
window.removeStart = () => {
    lista.removeFromStart();
    window.showForward();
};
window.removeEnd = () => {
    lista.removeFromEnd();
    window.showForward();
};
window.removeAt = () => {
    const pos = getValue("posicao");
    lista.removeFrom(pos);
    window.showForward();
};
window.showForward = () => {
    output.innerText = "Lista normal: " + lista.toArrayForward().join(" <-> ");
};
window.showBackward = () => {
    output.innerText = "Lista reversa: " + lista.toArrayBackward().join(" <-> ");
};
window.checkEmpty = () => {
    output.innerText = lista.isEmpty() ? "Lista vazia." : "Lista com elementos.";
};
window.clearList = () => {
    lista.clear();
    output.innerText = "Lista esvaziada.";
};
window.getSize = () => {
    output.innerText = `Tamanho da lista: ${lista.getSize()}`;
};
// ----------------- Árvore -----------------
window.treeInsert = () => {
    const value = getValue("valor-arvore");
    arvore.insert(value);
    output.innerText = `Valor ${value} inserido na árvore.`;
};
window.treeSearch = () => {
    const value = getValue("valor-arvore");
    output.innerText = arvore.search(value)
        ? `Valor ${value} encontrado.`
        : `Valor ${value} não encontrado.`;
};
window.treeInOrder = () => {
    output.innerText = "Em ordem (inOrder): " + arvore.inOrder().join(", ");
};
window.treePreOrder = () => {
    output.innerText = "Pré-ordem: " + arvore.preOrder().join(", ");
};
window.treePostOrder = () => {
    output.innerText = "Pós-ordem: " + arvore.postOrder().join(", ");
};
window.treeLevelOrder = () => {
    output.innerText = "Level-order (BFS): " + arvore.levelOrder().join(", ");
};
window.treeHeight = () => {
    output.innerText = `Altura da árvore: ${arvore.height()}`;
};
window.treeCount = () => {
    output.innerText = `Total de nós: ${arvore.count()}`;
};
window.treeAncestors = () => {
    const value = getValue("valor-consulta");
    const ancestors = arvore.ancestors(value);
    output.innerText = ancestors.length
        ? `Ancestrais de ${value}: ${ancestors.join(", ")}`
        : `Nenhum ancestral encontrado para ${value} ou nó não existe.`;
};
window.treeDescendants = () => {
    const value = getValue("valor-consulta");
    const descendants = arvore.descendants(value);
    output.innerText = descendants.length
        ? `Descendentes de ${value}: ${descendants.join(", ")}`
        : `Nenhum descendente encontrado para ${value} ou nó não existe.`;
};
window.treeLevel = () => {
    const value = getValue("valor-consulta");
    const level = arvore.getLevel(value);
    output.innerText = level >= 0
        ? `Nível do nó ${value}: ${level}`
        : `Nó ${value} não encontrado na árvore.`;
};
window.treeIsStrictlyBinary = () => {
    const result = arvore.isStrictlyBinary();
    output.innerText = `A árvore é estritamente binária? ${result ? "Sim" : "Não"}`;
};
window.treeIsFull = () => {
    const result = arvore.isFull();
    output.innerText = `A árvore é cheia? ${result ? "Sim" : "Não"}`;
};
// ----------------- Util -----------------
function getValue(id) {
    const input = document.getElementById(id);
    return parseInt(input.value);
}
