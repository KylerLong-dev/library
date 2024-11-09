
const myLibrary = [];

function Book(title, author, pages, read, image) {
  this.title = title; 
  this.author = author; 
  this.pages = pages; 
  this.read = read; 
  this.image = image || "default-image-url.jpg";
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

// Function to fetch book data from Open Library API
async function fetchBookImage(title) {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?title=${encodeURIComponent(title)}`);
    const data = await response.json();

    if (data.docs && data.docs.length > 0) {
      const coverId = data.docs[0].cover_i;
      return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg` : null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching book data:", error);
    return null;
  }
}

async function addBookWithImage(title, author, pages, read) {
  const image = await fetchBookImage(title);
  const newBook = new Book(title, author, pages, read, image);
  addBookToLibrary(newBook);
}

function displayBooks() {
  const bookContainer = document.querySelector(".grid-container");
  bookContainer.innerHTML = ''; 

  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("grid-container_book");

    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title} cover" class="book-cover">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Status:</strong> ${book.read}</p>
    `;

    bookContainer.appendChild(bookCard);
  });
}

//Example: 
addBookWithImage("The Hobbit", "J.R.R. Tolkien", "295 pages", "Not Read Yet");
