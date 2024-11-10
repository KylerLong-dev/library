
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read; 
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book (title, author, pages, read);
  myLibrary.push(newBook); 
}


function displayBook() {
  const bookContainer = document.querySelector(".grid-container");
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("grid-container_book");
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages}</p>
      <p>${book.read}</p>
      `;
    bookContainer.appendChild(bookCard);
  })
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", "535 pages", "Read")
displayBook();

function userInput() {
  
}


