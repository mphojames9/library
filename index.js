const formDisplay = document.querySelector(".form");
const addBookBtn = document.querySelector("#addBook");
const submitBtn = document.querySelector("#submit");

addBookBtn.addEventListener('click',addBook)

function addBook(){
    formDisplay.style.display = "flex";
}

const myLibrary = [];

function Book(bookName, author, pages, read) {
  this.bookName = bookName;
  this.author = author;
  this.pages =pages;
  this.read = read;
}

function addBookToLibrary() {
  let bookName = document.querySelector("#bookname").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  
  let newBook = new Book(bookName, author, pages, read);
  myLibrary.push(newBook);
  displayBooks();
}

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    addBookToLibrary();
    formDisplay.style.display = "none";
})

function displayBooks(){
  const bookStorage = document.querySelector(".bookStorage");
  bookStorage.innerHTML = "";
  for(let i = 0; i < myLibrary.length; i++){
    const bookLibrary = myLibrary[i];
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");
    bookCard.innerHTML = 
    `<div class="bookTitle">${bookLibrary.bookName}</div>
    <div class="bookAuthor">${bookLibrary.author}</div>
    <div class="bookPages">${bookLibrary.pages}</div>
    <div class="readStatus" onclick="toggleRead(${i})">${bookLibrary.read ? "Read" : "Not Read"}</div>
    <button onclick="deleteBook(${i})">Delete</button>`;
    bookStorage.append(bookCard)
  }
}

Book.prototype.toggleRead = function(){
  this.read = !this.read;
}
function toggleRead(index){
  myLibrary[index].toggleRead();
  displayBooks()
  console.log("click")
}

function deleteBook(index){
  myLibrary.splice(index, 1)
  displayBooks();
}