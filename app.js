// Book constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI(){

}

UI.prototype.addBookToList = function(book){
  
}

// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e){

  // Get form values
  const title = document.getElementById("title").value,
  author = document.getElementById("author").value,
  isbn = document.getElementById("isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  e.preventDefault();
})