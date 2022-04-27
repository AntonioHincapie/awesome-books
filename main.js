const booksBtn = document.getElementById('booksBtn');
const addBookbtn = document.getElementById('addbookBtn');
const contactBtn = document.getElementById ('contactBtn');
const date = document.getElementById('date');
const books = document.getElementById('books');
const addNew = document.getElementById('addbook');
const contact = document.getElementById('contact');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');
let dataBooks = JSON.parse(localStorage.getItem('book')) || [];

booksBtn.addEventListener('click', () => {
  books.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
});

addBookbtn.addEventListener('click', () => {
  books.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  books.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'block';
});

function displayDate() {
  date.innerHTML = Date();
}
window.onload = displayDate();


class Libro {
  constructor(title, author) {
    this.dataBooks = [title, author];
    this.title = title;
    this.author = author;
  }

  deleteBook = (index) => {
    dataBooks.splice(index, 1);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }

  addBook = (libro) => {
    dataBooks.push(libro);
    localStorage.setItem('book', JSON.stringify(dataBooks));
  }
}

const printList = () => {
  const libro = new Libro();
  books.innerHTML = null;
  if (localStorage.getItem('book')) {
    dataBooks = JSON.parse(localStorage.getItem('book')) || [];
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

printList();

addBtn.addEventListener('click', () => {
  const libro = new Libro(titulo.value, autor.value);
  libro.addBook(libro);
});