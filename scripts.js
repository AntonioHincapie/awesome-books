import dataBooks from './databooks.js';

//Agregar funcion add y remove

const addButton = document.getElementById('add');
const nameBook = document.getElementById('book');
const nameAuthor = document.getElementsById('author');

addButton.addEventListener('click', addList());

function addList(book, author){
  this.bookName = book;
  this.authorName = author;
}
const newBook = new addList(nameBook, nameAuthor);

dataBooks.push(newBook);

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