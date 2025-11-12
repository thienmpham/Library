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

function submitFormData() {
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let submit = document.querySelector("#btn-submit");

  let array = [title, author, pages];

  submit.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(title.value);
    console.log(author.value);
    console.log(pages.value);
    if (checkIfFormsAreEmpty(array) === true) {
      console.log("Cannot submit!");
      return;
    }
    let newBook = new Book(title.value, author.value, pages.value);
    console.log(newBook);
  });
}
submitFormData();

function checkIfFormsAreEmpty(array) {
  for (item of array) {
    if (item.value == "") {
      console.log("Form is empty!");
      return true;
    }
  }
  return false;
}

//Goal
// When the form is submitted, then
// have the form info be made into a card

//How
// Add html content using javascript
// On clicking the submit btn
//* Add a child div to .container-card
//* Then add h4 and h2 tags each with the .value method
