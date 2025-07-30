export class Node<T> {
  public next: Node<T> | null = null;
  public prev: Node<T> | null = null;

  constructor(public value: T) {}
}

export class DoublyLinkedList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size = 0;

  isEmpty(): boolean {
    return this.size === 0;
  }

  getSize(): number {
    return this.size;
  }

  clear(): void {
    this.head = this.tail = null;
    this.size = 0;
  }

  insertAtStart(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head!.prev = node;
      this.head = node;
    }
    this.size++;
  }

  insertAtEnd(value: T): void {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail!.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insertAt(value: T, index: number): void {
    if (index < 0 || index > this.size) throw new Error("Índice inválido");
    if (index === 0) return this.insertAtStart(value);
    if (index === this.size) return this.insertAtEnd(value);

    const node = new Node(value);
    let current = this.head;
    for (let i = 0; i < index; i++) current = current!.next;

    node.next = current;
    node.prev = current!.prev;
    current!.prev!.next = node;
    current!.prev = node;

    this.size++;
  }

  removeFromStart(): T | null {
    if (this.isEmpty()) return null;
    const value = this.head!.value;
    this.head = this.head!.next;
    if (this.head) this.head.prev = null;
    else this.tail = null;
    this.size--;
    return value;
  }

  removeFromEnd(): T | null {
    if (this.isEmpty()) return null;
    const value = this.tail!.value;
    this.tail = this.tail!.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;
    this.size--;
    return value;
  }

  removeFrom(index: number): T | null {
    if (index < 0 || index >= this.size) throw new Error("Índice inválido");
    if (index === 0) return this.removeFromStart();
    if (index === this.size - 1) return this.removeFromEnd();

    let current = this.head;
    for (let i = 0; i < index; i++) current = current!.next;

    current!.prev!.next = current!.next;
    current!.next!.prev = current!.prev;
    this.size--;
    return current!.value;
  }

  toArrayForward(): T[] {
    const result: T[] = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }

  toArrayBackward(): T[] {
    const result: T[] = [];
    let current = this.tail;
    while (current) {
      result.push(current.value);
      current = current.prev;
    }
    return result;
  }
}
