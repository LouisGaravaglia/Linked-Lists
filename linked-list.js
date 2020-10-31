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
    // if (idx >= this.length || idx < 0) {
    //   throw new Error("Invalid index.");
    // }

      let val = this.head.val;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length -= 1;
        return val;
      } else {
        this.head = this.head.next;
        if (this.length <= 2) this.tail = this.head;
        this.length -= 1;
        return val;
      };

    let count = 0;
    let currentNode = this.head;
    let prevNode;

    while (count < this.length) {
      count += 1;
      prevNode = currentNode;
      currentNode = currentNode.next;
      if (count === this.length - 2) {
        let tailVal = currentNode.next.val
        this.tail = currentNode;
        return tailVal;
      }
    }

      
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return;

    let val = this.head.val;
    let currentNode = this.head;

    if (currentNode.next) {
      this.head = currentNode.next;
      this.length -= 1;
    } else {
      this.head = null;
      this.tail = null;
      this.length -= 1;
    }

    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {

    // if (idx >= this.length || idx < 0) {
    //   throw new Error("Invalid index.");
    // }

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
   // if (idx >= this.length || idx < 0) {
    //   throw new Error("Invalid index.");
    // };

    if (idx === 0) this.head.val = val;
    if (idx === this.length - 1) this.tail.val = val;

    let count = 0;
    let currentNode = this.head;

    while (count <= idx) {
      count += 1;
      currentNode = currentNode.next;
      if (count === idx) {
        currentNode.val = val;
        return;
      };
      
    };

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    // if (idx >= this.length || idx < 0) {
    //   throw new Error("Invalid index.");
    // };

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let newNode = new Node(val);
    let count = 0;
    let currentNode = this.head;

    while (count <= idx) {
      count += 1;
      if (count === idx) {
        let next = currentNode.next;
        currentNode.next = newNode;
        newNode.next = next;
        this.length += 1;
        return;
      };
      currentNode = currentNode.next;
    };

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // if (idx >= this.length || idx < 0) {
    //   throw new Error("Invalid index.");
    // }

    if (idx === 0) {
      let val = this.head.val;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length -= 1;
        return val;
      } else {
        this.head = this.head.next;
        if (this.length <= 2) this.tail = this.head;
        this.length -= 1;
        return val;
      };

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
    if (this.length === 0) {
      return 0;
    } 

    let total = 0;
    let currentNode = this.head;

    while (currentNode) {
      total += currentNode.val;
      currentNode = currentNode.next;
    }

    return total / (this.length);
    
  }
}

module.exports = LinkedList;
