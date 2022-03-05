let myLibrary = [];
const bookDisplay = document.getElementsByClassName("bookdisplay")[0];

//fetch the add button
const addBookButton = document.getElementById("addBookButton");



addBookButton.addEventListener("click", () => {
    //fetch the inputs
    const authorInput = document.getElementById("author").value;
    const titleInput = document.getElementById("title").value;
    const pagesInput = document.getElementById("pages").value;
    const readInput = document.getElementById("read").checked;
    addBookToLibrary(authorInput, titleInput, pagesInput, readInput)
})
//add a book manually to test


display()





//a constructor for book
function Book(id, author, title, pageNumber, read) {
    return {
        author,
        title,
        pageNumber,
        read
    }
} 


//function to add book to the library
function addBookToLibrary(author, title, pageNumber, read) {
        const inputBook = Book(myLibrary.length + 1, author, title, pageNumber, read)
        addCard(inputBook)
        myLibrary.push(inputBook);
  }


  function display() {
      // loop through books
      if(myLibrary){
      myLibrary.forEach((Book) => {
        addCard(Book)
      })}
  }


  function addCard(Book) {
    const card = document.createElement("div");
    card.id = Book.id;
    card.classList.add("book")
    //create elements for Book information
    const author = document.createElement("h3")
    author.textContent = `Author: ${Book.author}`;
    const title = document.createElement("h3")
    title.textContent = `Title: ${Book.title}`;
    const pageNumber = document.createElement("h3")
    pageNumber.textContent = `Pages: ${Book.pageNumber}` ;
    const read = document.createElement("h3")
    read.textContent = `Read: ${Book.read}`;  
    const deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete" 
    //Develop the delete button
    deleteButton.addEventListener("click", () => {
        const theCard = document.getElementById(Book.id);
        bookDisplay.removeChild(theCard)
        myLibrary.splice(Book.id, 1)
    })
    const readButton = document.createElement("button")
    readButton.textContent = "Read"

    readButton.addEventListener("click", () => {
        if(Book.read) {
            Book.read = false;
            read.textContent = `Read: ${Book.read}`;  
            return
        } 

        Book.read = true;
        read.textContent = `Read: ${Book.read}`;  
        
    })

    
    card.appendChild(author)
    card.appendChild(title)
    card.appendChild(pageNumber)
    card.appendChild(read)
    card.appendChild(deleteButton)
    card.appendChild(readButton)
    bookDisplay.appendChild(card)
  }