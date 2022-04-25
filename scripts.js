import dataBooks from './databooks.js';

//Agregar funcion add y remove


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