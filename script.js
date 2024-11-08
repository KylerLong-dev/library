//addbook function needs to take in args that will create a book from those args and store in array
//the books added to the array will be ojects (include title, author, pages, and if complete or unread)
//write a function that loops through the array and displays each book on its own card (DOM function)

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read; 
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`
  }
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  return myLibrary.push(newBook);
}

function displayBooks () {
    const bookContainer = document.querySelector(".grid-container");
    
    myLibrary.forEach((book) => {
      const bookCard = document.createElement("div");
      bookCard.classList.add("grid-container_book");
      
      bookCard.innerHTML = `
        <img>
        <h3>${book.title}</h3>
        <p>${book.author}</p>
        <p>${book.pages}</p>
        <p>${book.read}</p>
        `

      bookContainer.appendChild(bookCard);
    })
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
displayBooks();
