const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

function displayBooks(bookArr) {
  for (let book in bookArr) {
    console.log(book);
  }
}

// NEWBOOK button action
function openDialog() {
    let dialog = document.getElementById("newBook-dialog");
    if (dialog.hasAttribute('open')) {
        dialog.removeAttribute('open');
    } else {
        dialog.setAttribute('open',"");
    }

}
let NEWBOOK = document.getElementById("newBook");
NEWBOOK.addEventListener("click", openDialog);