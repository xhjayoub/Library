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

// Remove a book
function removeBookFunction() {
  let bookWillRemoved = this.parentElement.children;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].author == bookWillRemoved[0].innerHTML && myLibrary[i].title == bookWillRemoved[1].innerHTML && myLibrary[i].pages == bookWillRemoved[2].innerHTML) {
      myLibrary.splice(i,1);
      k--;
      break;
    }
  }
  displayBooks(myLibrary);
}
function changeRead() {
  if (this.innerHTML === "I read it") {
    this.innerHTML = "I didn't read it";
    this.previousSibling.innerHTML = "yes";
  } else {
    this.innerHTML = "I read it";
    this.previousSibling.innerHTML = "no";
  }
  let bookReadOrNot = this.parentElement.children;
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].author == bookReadOrNot[0].innerHTML && myLibrary[i].title == bookReadOrNot[1].innerHTML && myLibrary[i].pages == bookReadOrNot[2].innerHTML) {
      if (myLibrary[i].read === "no") {
        myLibrary[i].read = "yes";
      } else {
        myLibrary[i].read = "no";
      }
      break;
    }
  }
}

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
    const removeBook = document.createElement("button");
    const readOrNo = document.createElement("button");
    readOrNo.setAttribute("class", "readOrNo");
    readOrNo.addEventListener("click", changeRead);
    if (bookArr[i].read == "no") {
      readOrNo.innerHTML = "I read it";
    } else {
      readOrNo.innerHTML = "I didn't read it";
    }
    removeBook.innerHTML = "X";
    removeBook.addEventListener("click", removeBookFunction)
    bookAuthor.textContent = bookArr[i].author;
    bookTitle.textContent = bookArr[i].title;
    bookPages.textContent = bookArr[i].pages;
    bookRead.textContent = bookArr[i].read;
    bookDiv.append(removeBook,bookAuthor, bookTitle, bookPages, bookRead, readOrNo);
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