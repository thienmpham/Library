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

function originalBooks() {
  let book1 = new Book("Berserk", "Kentaro Miura", "362");
  let book2 = new Book("Maze Runner", "James Dashner", "416");
  let book3 = new Book("Renegades", "Marissa Meyer", "552");
  addBookToLibrary(book1);
  addBookToLibrary(book2);
  addBookToLibrary(book3);
}
originalBooks();

function iterateMyLibrary() {
  for (book of myLibrary) {
    console.log(book.title);
  }
}
iterateMyLibrary();
