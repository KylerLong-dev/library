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

//Display DOM Elements for Books

function displayBook() {
  const bookContainer = document.querySelector(".grid-container");

  bookContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("grid-container_book");
    bookCard.setAttribute("data-index", index);
    
    const readStatus = book.read ? "Read" : "Not Read"; 

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <div class="text">
        <p>By: ${book.author}</p>
        <p>${book.pages} pages</p>
      </div>
      <div class="remove">
        <button class="toggle-read">${readStatus}</button>
        <button class="remove-btn">Remove</button>
      </div>
      `;
    bookContainer.appendChild(bookCard);

    const removeBtn = bookCard.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      displayBook();
    })

    const toggleBtn = bookCard.querySelector(".toggle-read");
    toggleBtn.addEventListener("click", () => {
      book.read = !book.read;
      if (book.read) {
        toggleBtn.textContent = "Read";
      }
      else {
        toggleBtn.textContent = "Not Read";
      }
    })

  })
}

//Add book to library button
const addBookBtn = document.querySelector(".new-book_btn"); 
const sideBar = document.querySelector(".sidebar");

addBookBtn.addEventListener("click", () => {
  if (!sideBar.classList.contains("show")) {
    sideBar.classList.add("show");
  }
})

//Collect user input via form in the sidebar
const form = document.querySelector(".sidebar-form")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked; 
  
  addBookToLibrary(title, author, pages, read);
  displayBook();

  form.reset();
})

const sidebarClose = document.querySelector(".sidebar-close")

sidebarClose.addEventListener("click", () => {
  sideBar.classList.remove("show");
})

