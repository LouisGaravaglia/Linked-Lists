/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (this.length === 0) this.tail = this.head;
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    while (currentNode) {
      currentNode = currentNode.next
      if (!currentNode.next.next) {
        this.tail = currentNode;
        return currentNode.next;
      }
    }
      this.length -= 1;
  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    if (currentNode.next) {
      this.head = currentNode.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      return this.head.val;
    }

    let count = 0
    let currentNode = this.head;

    while (count < idx) {
      count += 1;
      currentNode = currentNode.next;
      if (count === idx) {
        return currentNode.val;
      }
    }

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      let val = this.head.val;
      this.head - this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }

    if (idx === this.length - 1) {
      let val = this.tail.val;
      this.pop();
      return val;
    }

    let count = 0
    let currentNode = this.head;
    let prevNode;

    while (count < idx) {
      count += 1;
      prevNode = currentNode;
      currentNode = currentNode.next;
      if (count === idx) {
        prevNode.next = currentNode.next;
        return currentNode.val;
      }
    }


  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
