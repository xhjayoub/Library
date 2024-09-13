const myLibrary = [];
let k = 0;
function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let author = document.getElementById("author").value;
  let title = document.getElementById("title").value;
  let pages = document.getElementById("pages").value;
  let readRadios = document.getElementsByName("read");
  let read;
  if (readRadios[0].checked) {
    read = "yes";
  } else {
    read = "no";
  }
  let book = new Book(author, title, pages, read);
  myLibrary[k] = book;
  k++;
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