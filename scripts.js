import dataBooks from './databooks.js';

//Agregar funcion add y remove

const addButton = document.querySelector('add');
const newBook = document.querySelector('.form-control')

class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup value and next_node
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  add(newBook) {
    // your code here
    let node = new Node(newBook);
    if (!this._head && !this._tail) {
      this._head = node;
      this._tail = this._head;
    } else {
      this._tail.next = node;
      this._tail = this._tail.next;
    }
    this._length++;
  }
};

addButton.addEventListener('click', (event) => {
  LinkedList(event);
});

const bookList = document.getElementById('list');
const printList = () => {
  let str = '';
  for (let i = 0; i < dataBooks.length; i += 1) {
    str += `<p>${dataBooks[i].bookTitle}</p>
    <p>${dataBooks[i].bookAuthor}</p>
    <button type="button">Remove</button>`
  }
  return str;
}

bookList.innerHTML = `${printList()}`