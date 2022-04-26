let dataBooks = [];  // define un contenedor array
let titulo = document.getElementById('titulo').value; //toma el dato ingresado or el usuario en titulo
let autor = document.getElementById('autor').value; //toma el dato ingresado or el usuario en autor
const books = document.getElementById('books') //define el lugar donde se ingrearán los satos de JS a HTML
const alert = document.getElementById('btn').addEventListener('click', bst) //define la función que se ejecutará al presionar el botón


function setText() {
  let bookInfo = JSON.parse(localStorage.getItem('book'));//guarda la información de oos libros como un objeto en la memoria local
}

function populateStorage() {
  localStorage.setItem('book', JSON.stringify({dataBooks}));
  setText();
}

if (!localStorage.getItem('book')) {
  populateStorage();
} else {
  setText();
}

dataBooks.onchange = populateStorage;

const printList = () => {
  books.innerHTML = null;
  if(localStorage.getItem('book')) {
    dataBooks = JSON.parse(localStorage.getItem('books'));
  }
  for(let i = 0; i < dataBooks.length; i += 1) {
    const bookName = document.createElement('p');
    const authorName = document.createElement('p');
    const deleteBtn = document.createElement('button');
    bookName.textContent = dataBooks[i].bookTitle;
    authorName.textContent = dataBooks[i].bookAuthor;
    deleteBtn.textContent = 'Delete';
    books.appendChild(bookName);
    books.appendChild(authorName);
    books.appendChild(deleteBtn);
  }
};

function bst() {
  dataBooks.push({ bookTitle: titulo.value, bookAuthor: autor.value });//añade un objeto con los datos del libro al array
  localStorage.setItem('book', JSON.stringify({ dataBooks }));//guarda los datos en la memoria local como strg
  printList();//imprime la lista de libros
};

printList();

// if (localStorage === null) {
//   const bookList = document.getElementById('books');
//   const printList = () => {
//     let str = '';
//     for (let i = 0; i < dataBooks.length; i += 1) {
//       str += `<p>${dataBooks[i].bookTitle}</p>
//       <p>${dataBooks[i].bookAuthor}</p>
//       <button type="button">Remove</button>`
//     }
//     return str;
//     }
//     // let popularStorage  = localStorage.getItem(dataBooks).value;
//     bookList.innerHTML = `${printList()}`;
// };