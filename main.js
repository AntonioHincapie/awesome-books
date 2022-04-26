const books = document.getElementById('books');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');

let dataBooks = [];

if(localStorage.getItem('book')) {
  dataBooks = JSON.parse(localStorage.getItem('book'));
}

class Libro {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
};

const printList = () => {
  books.innerHTML = null;
  if (localStorage.getItem('book')) {
    dataBooks = JSON.parse(localStorage.getItem('book'));
  }
  for (let i = 0; i < dataBooks.length; i += 1) {
    const bookStorage = document.createElement('div');
    const bookName = document.createElement('p');
    const authorName = document.createElement('p');
    const deleteBtn = document.createElement('button');
    bookName.textContent = dataBooks[i].title;
    authorName.textContent = dataBooks[i].author;
    deleteBtn.textContent = 'Delete';
    books.appendChild(bookStorage);
    bookStorage.appendChild(bookName);
    bookStorage.appendChild(authorName);
    bookStorage.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      deleteBook(i, bookStorage);
    })
  }
};

printList();

function deleteBook(index, libro) {
  libro.remove();
  dataBooks.splice(index, 1);
  localStorage.setItem('book', JSON.stringify(dataBooks));
}

const addBook = (title, author) => {
  const libro = new Libro (title, author)
  dataBooks.push(libro);
  localStorage.setItem('book', JSON.stringify(dataBooks));
  printList();
}

addBtn.addEventListener('click', () => {
  addBook(titulo.value, autor.value);
  titulo = '';
  autor = '';
});