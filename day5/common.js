export class Stack {
  length;
  head;

  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item) {
    const node = {
      value: item,
      prev: undefined,
    };
    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }
    node.prev = this.head;
    this.head = node;
  }

  pop() {
    if (!this.head) return;
    this.length--;
    this.head = this.head?.prev;
  }

  peek() {
    return this.head?.value;
  }

  walk() {
    const values = [];
    let prevNode = this.head;
    for (let i = 0; i < this.length; ++i) {
      values.push(prevNode?.value);
      prevNode = prevNode?.prev;
    }
    return values;
  }
}

export function transpose(matrix) {
  return matrix.reduce(
    (prev, next) => next.map((_, i) => (prev[i] || []).concat(next[i])),
    []
  );
}
