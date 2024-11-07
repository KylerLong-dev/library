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

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");

function addBookToLibrary() {
  // do stuff here
}

function displayBooks () {

}
