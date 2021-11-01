let myLibrary = [];

// using class syntax

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  displayStatus(currentStatus) {
    let val = currentStatus.toLowerCase();
    if (val === "yes") {
      this.read = "finished";
    } else if (val === "no") {
      this.read = "want to read";
    }
    return "Status:  " + this.read;
  }

  changeStatus(currentStatus) {
    if (currentStatus === "finished") {
      this.read = "want to read";
    } else if (currentStatus === "want to read") {
      this.read = "finished";
    }
    return "Status:  " + this.read;
  }

  printContent(key) {
    if (key === "title") {
      return this.title;
    } else if (key === "author") {
      return "Author:  " + this.author;
    } else if (key === "pages") {
      return "Pages:  " + this.pages;
    }
  }
}

const section = document.querySelector("section");

const bookList = document.querySelector(".book-list");
const addBook = document.getElementById("add-book");

const submitButton = document.createElement("BUTTON");
submitButton.innerText = "Submit";

const form = document.createElement("FORM");
form.setAttribute("style", "display: none");

const titleSection = document.createElement("label");
const titleInput = document.createElement("input");
Object.assign(titleInput, {
  type: "text",
  id: "title-value",
});
titleSection.innerText = "Title:";

const authorSection = document.createElement("label");
const authorInput = document.createElement("input");
Object.assign(authorInput, {
  type: "text",
  id: "author-value",
});
authorSection.innerText = "Author:";

const pagesSection = document.createElement("label");
const pagesInput = document.createElement("input");
Object.assign(pagesInput, {
  type: "text",
  id: "pages-value",
});
pagesSection.innerText = "Number of pages:";

const statusSection = document.createElement("label");
const statusInput = document.createElement("input");
Object.assign(statusInput, {
  type: "text",
  id: "status-value",
});
statusSection.innerText = "Have you read this book? (yes/no):";

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayBooks(myLibrary[myLibrary.length - 1]);
}

function displayBooks(book) {
  //create a seperate div for every book
  let bookDiv = document.createElement("div");
  let removeButton = document.createElement("BUTTON");
  removeButton.innerText = "Remove book";
  removeButton.setAttribute("id", "remove-button");
  bookList.appendChild(bookDiv).setAttribute("class", "book");
  let statusChangeBtn = document.createElement("BUTTON");
  statusChangeBtn.innerText = "Change status";
  statusChangeBtn.setAttribute("id", "status-change");
  //show the book content on the screan
  // -----> after changing to class syntax the loop is going only through the own properties of the book, instead of the inherited properties
  for (let key in book) {
    let item = document.createElement("div");
    let content = book.printContent(key);
    if (key === "read") {
      content = book.displayStatus(book[key]);
    }
    item.innerText = content;
    bookDiv.appendChild(item).setAttribute("id", key);
    bookDiv.appendChild(statusChangeBtn);
    bookDiv.appendChild(removeButton);
  }
  statusChangeBtn.addEventListener("click", () => {
    let readLine = bookDiv.querySelector("#read");
    readLine.innerText = book.changeStatus(book.read);
  });
  removeButton.addEventListener("click", () => {
    bookDiv.remove();
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//toggle form
function addBookForm() {
  if (form.style.display === "none") {
    section.appendChild(form);

    form.appendChild(titleSection).setAttribute("for", "title");
    form.appendChild(titleInput);
    form.insertBefore(document.createElement("BR"), titleInput);
    form.appendChild(authorSection).setAttribute("for", "title");
    form.insertBefore(document.createElement("BR"), authorSection);
    form.appendChild(authorInput).setAttribute("type", "text");
    form.insertBefore(document.createElement("BR"), authorInput);
    form.appendChild(pagesSection).setAttribute("for", "title");
    form.insertBefore(document.createElement("BR"), pagesSection);
    form.appendChild(pagesInput).setAttribute("type", "text");
    form.insertBefore(document.createElement("BR"), pagesInput);
    form.appendChild(statusSection).setAttribute("for", "title");
    form.insertBefore(document.createElement("BR"), statusSection);
    form.appendChild(statusInput).setAttribute("type", "text");
    form.insertBefore(document.createElement("BR"), statusInput);

    section.appendChild(submitButton);
    form.style.display = "block";
  } else {
    form.style.display = "none";
    section.removeChild(submitButton);
    removeAllChildNodes(form);
  }
}

addBook.addEventListener("click", () => {
  addBookForm();
});

submitButton.addEventListener("click", () => {
  let bookTitle = document.getElementById("title-value").value;
  let bookAuthor = document.getElementById("author-value").value;
  let bookPages = document.getElementById("pages-value").value;
  let readStatus = document.getElementById("status-value").value;

  addBookToLibrary(bookTitle, bookAuthor, bookPages, readStatus);
  document.querySelector("form").reset();
});
