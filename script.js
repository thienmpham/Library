const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  //   this.status = status;
}

function addBookToLibrary(book) {
  if (typeof book !== "object") {
    console.log("book is not an object");
    return;
  }
  myLibrary.push(book);
  console.log(myLibrary);
}

let book1 = new Book("Berserk", "Kentaro Miura", "362");
addBookToLibrary(book1);
