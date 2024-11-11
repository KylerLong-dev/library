
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

  bookContainer.innerHTML = "";

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("grid-container_book");

    let readStatus = "";
    if (book.read) {
      readStatus = "Read Status: Complete!";
    }
    else {
      readStatus = "Read Status: Not Read";
    }

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <p>${readStatus}</p>
      `;
    bookContainer.appendChild(bookCard);
  })
}

const addBookBtn = document.querySelector(".new-book_btn"); 
const sideBar = document.querySelector(".sidebar");

addBookBtn.addEventListener("click", () => {
  if (!sideBar.classList.contains("show")) {
    sideBar.classList.add("show");
  }
})

const form = document.querySelector(".sidebar-form")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("finished").checked; 
  
  addBookToLibrary(title, author, pages, read);
  displayBook();

  form.reset();
})

const sidebarClose = document.querySelector(".sidebar-close")

sidebarClose.addEventListener("click", () => {
  sideBar.classList.remove("show");
})

