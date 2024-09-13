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
  if (author === "" || title === "" || pages === "" || (!readRadios[0].checked && !readRadios[1].checked)) {
    return false;
  }
  if (readRadios[0].checked) {
    read = "yes";
  } else {
    read = "no";
  }
  let book = new Book(author, title, pages, read);
  myLibrary[k] = book;
  k++;
  displayBooks(myLibrary);
}
let ADDBOOK = document.getElementById("addBook");
ADDBOOK.addEventListener("click", addBookToLibrary);

function displayBooks(bookArr) {
  const bookContainer = document.querySelector("#myBooks");
  bookContainer.innerHTML = '';
  for (let i = 0; i < bookArr.length; i++) {
    const bookDiv = document.createElement("div");
    bookDiv.setAttribute("class", "book");
    const bookAuthor = document.createElement("h2");
    const bookTitle = document.createElement("h3");
    const bookPages = document.createElement("p");
    const bookRead = document.createElement("p");
    bookAuthor.textContent = bookArr[i].author;
    bookTitle.textContent = bookArr[i].title;
    bookPages.textContent = bookArr[i].pages;
    bookRead.textContent = bookArr[i].read;
    bookDiv.append(bookAuthor, bookTitle, bookPages, bookRead);
    bookContainer.appendChild(bookDiv);
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