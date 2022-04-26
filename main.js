const books = document.getElementById('books');
const titulo = document.getElementById('titulo');
const autor = document.getElementById('autor');
const addBtn = document.getElementById('btn');

let dataBooks = [];
class Libro {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
};
