const books = document.getElementById('books');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');

let dataBooks = [];

if (localStorage.getItem('book')) {
  dataBooks = JSON.parse(localStorage.getItem('book'));
}

const printList = () => {
  const libro = new Libro()
  books.innerHTML = null;
  if (localStorage.getItem('book')) {
    dataBooks = JSON.parse(localStorage.getItem('book'));
  }
  for (let i = 0; i < dataBooks.length; i += 1) {
    const bookStorage = document.createElement('div');
    const bookInfo = document.createElement('p');
    const deleteBtn = document.createElement('button');
    bookInfo.textContent = `"${dataBooks[i].title}" by ${dataBooks[i].author}`;
    deleteBtn.textContent = 'Remove';
    books.appendChild(bookStorage);
    bookStorage.append(bookInfo, deleteBtn);
    bookStorage.className = 'bookStorage';
    deleteBtn.addEventListener('click', () => {
      bookStorage.remove();
      libro.deleteBook(i);
    });
  }
};

class Libro {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  deleteBook (index) {
    dataBooks.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }

  addBook (libro) {
    dataBooks.push(libro);
    localStorage.setItem('book', JSON.stringify(dataBooks));
    printList();
  }
}


printList();

addBtn.addEventListener ('click', () => {
  const libro = new Libro(titulo.value, autor.value);
  libro.addBook(libro);
  titulo = '';
  autor = '';
});