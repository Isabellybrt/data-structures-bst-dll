"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = exports.Node = void 0;
class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
exports.Node = Node;
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(current, newNode) {
        if (newNode.value < current.value) {
            if (!current.left)
                current.left = newNode;
            else
                this.insertNode(current.left, newNode);
        }
        else {
            if (!current.right)
                current.right = newNode;
            else
                this.insertNode(current.right, newNode);
        }
    }
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(node, value) {
        if (!node)
            return false;
        if (value === node.value)
            return true;
        return value < node.value ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
    }
    inOrder() {
        const result = [];
        this.inOrderTraverse(this.root, result);
        return result;
    }
    inOrderTraverse(node, result) {
        if (node) {
            this.inOrderTraverse(node.left, result);
            result.push(node.value);
            this.inOrderTraverse(node.right, result);
        }
    }
    preOrder() {
        const result = [];
        this.preOrderTraverse(this.root, result);
        return result;
    }
    preOrderTraverse(node, result) {
        if (node) {
            result.push(node.value);
            this.preOrderTraverse(node.left, result);
            this.preOrderTraverse(node.right, result);
        }
    }
    postOrder() {
        const result = [];
        this.postOrderTraverse(this.root, result);
        return result;
    }
    postOrderTraverse(node, result) {
        if (node) {
            this.postOrderTraverse(node.left, result);
            this.postOrderTraverse(node.right, result);
            result.push(node.value);
        }
    }
    levelOrder() {
        const result = [];
        const queue = [];
        if (this.root)
            queue.push(this.root);
        while (queue.length) {
            const node = queue.shift();
            if (node) {
                result.push(node.value);
                if (node.left)
                    queue.push(node.left);
                if (node.right)
                    queue.push(node.right);
            }
        }
        return result;
    }
    height(node = this.root) {
        if (!node)
            return -1;
        return 1 + Math.max(this.height(node.left), this.height(node.right));
    }
    size(node = this.root) {
        if (!node)
            return 0;
        return 1 + this.size(node.left) + this.size(node.right);
    }
    ancestors(value) {
        const result = [];
        this.findAncestors(this.root, value, result);
        return result;
    }
    findAncestors(node, value, result) {
        if (!node)
            return false;
        if (node.value === value)
            return true;
        if (this.findAncestors(node.left, value, result) ||
            this.findAncestors(node.right, value, result)) {
            result.push(node.value);
            return true;
        }
        return false;
    }
    descendants(value) {
        const target = this.findNode(this.root, value);
        const result = [];
        if (target)
            this.collectDescendants(target, result);
        return result;
    }
    findNode(node, value) {
        if (!node)
            return null;
        if (node.value === value)
            return node;
        return value < node.value ? this.findNode(node.left, value) : this.findNode(node.right, value);
    }
    collectDescendants(node, result) {
        if (!node)
            return;
        if (node.left) {
            result.push(node.left.value);
            this.collectDescendants(node.left, result);
        }
        if (node.right) {
            result.push(node.right.value);
            this.collectDescendants(node.right, result);
        }
    }
    count() {
        const countNodes = (node) => {
            if (node === null)
                return 0;
            return 1 + countNodes(node.left) + countNodes(node.right);
        };
        return countNodes(this.root);
    }
    getLevel(value) {
        return this.findLevel(this.root, value, 0);
    }
    findLevel(node, value, level) {
        if (!node)
            return -1;
        if (node.value === value)
            return level;
        const next = value < node.value ? node.left : node.right;
        return this.findLevel(next, value, level + 1);
    }
    isStrictlyBinary(node = this.root) {
        if (!node)
            return true;
        if ((node.left && !node.right) || (!node.left && node.right))
            return false;
        return this.isStrictlyBinary(node.left) && this.isStrictlyBinary(node.right);
    }
    isFull(node = this.root) {
        const height = this.height();
        const size = this.size();
        return size === Math.pow(2, height + 1) - 1;
    }
}
exports.BinarySearchTree = BinarySearchTree;
