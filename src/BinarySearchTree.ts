export class Node {
  value: number;
  left: Node | null = null;
  right: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

export class BinarySearchTree {
  root: Node | null = null;

  insert(value: number): void {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(current: Node, newNode: Node): void {
    if (newNode.value < current.value) {
      if (!current.left) current.left = newNode;
      else this.insertNode(current.left, newNode);
    } else {
      if (!current.right) current.right = newNode;
      else this.insertNode(current.right, newNode);
    }
  }

  search(value: number): boolean {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: Node | null, value: number): boolean {
    if (!node) return false;
    if (value === node.value) return true;
    return value < node.value ? this.searchNode(node.left, value) : this.searchNode(node.right, value);
  }

  inOrder(): number[] {
    const result: number[] = [];
    this.inOrderTraverse(this.root, result);
    return result;
  }

  private inOrderTraverse(node: Node | null, result: number[]): void {
    if (node) {
      this.inOrderTraverse(node.left, result);
      result.push(node.value);
      this.inOrderTraverse(node.right, result);
    }
  }

  preOrder(): number[] {
    const result: number[] = [];
    this.preOrderTraverse(this.root, result);
    return result;
  }

  private preOrderTraverse(node: Node | null, result: number[]): void {
    if (node) {
      result.push(node.value);
      this.preOrderTraverse(node.left, result);
      this.preOrderTraverse(node.right, result);
    }
  }

  postOrder(): number[] {
    const result: number[] = [];
    this.postOrderTraverse(this.root, result);
    return result;
  }

  private postOrderTraverse(node: Node | null, result: number[]): void {
    if (node) {
      this.postOrderTraverse(node.left, result);
      this.postOrderTraverse(node.right, result);
      result.push(node.value);
    }
  }

  levelOrder(): number[] {
    const result: number[] = [];
    const queue: (Node | null)[] = [];
    if (this.root) queue.push(this.root);
    while (queue.length) {
      const node = queue.shift();
      if (node) {
        result.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return result;
  }

  height(node: Node | null = this.root): number {
    if (!node) return -1;
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  size(node: Node | null = this.root): number {
    if (!node) return 0;
    return 1 + this.size(node.left) + this.size(node.right);
  }

  ancestors(value: number): number[] {
    const result: number[] = [];
    this.findAncestors(this.root, value, result);
    return result;
  }

  private findAncestors(node: Node | null, value: number, result: number[]): boolean {
    if (!node) return false;
    if (node.value === value) return true;
    if (
      this.findAncestors(node.left, value, result) ||
      this.findAncestors(node.right, value, result)
    ) {
      result.push(node.value);
      return true;
    }
    return false;
  }

  descendants(value: number): number[] {
    const target = this.findNode(this.root, value);
    const result: number[] = [];
    if (target) this.collectDescendants(target, result);
    return result;
  }

  private findNode(node: Node | null, value: number): Node | null {
    if (!node) return null;
    if (node.value === value) return node;
    return value < node.value ? this.findNode(node.left, value) : this.findNode(node.right, value);
  }

  private collectDescendants(node: Node | null, result: number[]): void {
    if (!node) return;
    if (node.left) {
      result.push(node.left.value);
      this.collectDescendants(node.left, result);
    }
    if (node.right) {
      result.push(node.right.value);
      this.collectDescendants(node.right, result);
    }
  }

  count(): number {
  const countNodes = (node: Node | null): number => {
    if (node === null) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
  };

  return countNodes(this.root);
}

  getLevel(value: number): number {
    return this.findLevel(this.root, value, 0);
  }

  private findLevel(node: Node | null, value: number, level: number): number {
    if (!node) return -1;
    if (node.value === value) return level;
    const next = value < node.value ? node.left : node.right;
    return this.findLevel(next, value, level + 1);
  }

  isStrictlyBinary(node: Node | null = this.root): boolean {
    if (!node) return true;
    if ((node.left && !node.right) || (!node.left && node.right)) return false;
    return this.isStrictlyBinary(node.left) && this.isStrictlyBinary(node.right);
  }

  isFull(node: Node | null = this.root): boolean {
    const height = this.height();
    const size = this.size();
    return size === Math.pow(2, height + 1) - 1;
  }
  
}
