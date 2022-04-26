let dataBooks = [];
let titulo = document.getElementById('titulo');
let autor = document.getElementById('autor');
const books = document.getElementById('books')
const alert = document.getElementById('btn').addEventListener('click', bst)
function bst () {
  dataBooks.push([{bookTitle: titulo.value, bookAuthor: autor.value}]);
  localStorage.setItem('book', JSON.stringify({dataBooks}));
  printList();
}

function setText() {
  let bookInfo = JSON.parse(localStorage.getItem('book'));
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