const booksBtn = document.getElementById('booksBtn');
const addBookbtn = document.getElementById('addbookBtn');
const contactBtn = document.getElementById ('contactBtn');
const books = document.getElementById('books');
const addNew = document.getElementById('addbook');
const contact = document.getElementById('contact');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');
let dataBooks = JSON.parse(localStorage.getItem('book')) || [];

// This code below was recovered from https://programacion.net/
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap; 
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// This code above was recovered from https://programacion.net/

window.onload = startTime();

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

booksBtn.addEventListener('click', () => {
  books.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
  printList();
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