const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

  this.id = self.crypto.randomUUID();
  console.log(this.id);
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

function iterateMyLibrary(cardContainer) {
  for (let book of myLibrary) {
    let newDiv = document.createElement("div");
    console.log(book.title);
    // Creating card html
    newDiv.classList.add("card");
    cardContainer.appendChild(newDiv);

    newDiv.appendChild(document.createElement("h2")).textContent = book.title;
    newDiv.appendChild(document.createElement("h4")).textContent = book.author;
    newDiv.appendChild(document.createElement("h4")).textContent = book.pages;
  }
}

function submitFormData() {
  let title = document.querySelector("#title");
  let author = document.querySelector("#author");
  let pages = document.querySelector("#pages");
  let submit = document.querySelector("#btn-submit");

  let cardContainer = document.querySelector(".container-card");

  let array = [title, author, pages];

  iterateMyLibrary(cardContainer);
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    // document.querySelector(".card").remove();
    console.log(title.value);
    console.log(author.value);
    console.log(pages.value);

    let newBook = new Book(title.value, author.value, pages.value);
    addBookToLibrary(newBook);
    console.log(newBook);

    if (checkHtmlContainsCard() == false) {
      addLastBook(cardContainer);
    } else {
      console.log("card is not true");
      iterateMyLibrary(cardContainer);
    }
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
// **COMPLETED**
//Goal
// When the form is submitted, then
// have the form info be made into a card

// **COMPLETED**
//How
// Add html content using javascript
// On clicking the submit btn
//* Add a child div to .container-card using appendChild
//* Then add h4 and h2 tags each with the .value method

// **COMPLETED**
//Goal
// Check to see if myLibrary array has already
// been iterated through and displayed in front end

// **COMPLETED**
//How
// Check to see if document.querySelector('.card') is present within the html
// If true then just display the newest book when
// the submit button is clicked

function addLastBook(cardContainer) {
  let newDiv = document.createElement("div");
  // Creating card html
  newDiv.classList.add("card");
  cardContainer.appendChild(newDiv);

  newDiv.appendChild(document.createElement("h2")).textContent =
    myLibrary[myLibrary.length - 1].title;
  newDiv.appendChild(document.createElement("h4")).textContent =
    myLibrary[myLibrary.length - 1].author;
  newDiv.appendChild(document.createElement("h4")).textContent =
    myLibrary[myLibrary.length - 1].pages;
}

function checkHtmlContainsCard() {
  console.log("checking:", document.querySelector(".card"));
  if (document.querySelector(".card") === null) {
    console.log("check is true");
    return true;
  }
  console.log("check is false");
  return false;
}

// **COMPLETED**
//Goal
// Have the original books already displayed and
// then display the new books when submit btn is clicked on.

// **COMPLETED**
//Goal
// Also, all of your book objects should have a unique id,
// which can be generated using crypto.randomUUID()

//How
// Add the crypto.randomUUID() to Book constructor
