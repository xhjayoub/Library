const myLibrary = [];

function Book() {
  // the constructor...
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
    dialog.setAttribute('open',"");
}
let NEWBOOK = document.getElementById("newBook");
NEWBOOK.addEventListener("click", openDialog);