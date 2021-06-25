var myLibrary = [];

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function testing() {
    var title = "testing";
    var author = "author";
    var pages = "pages";
    var read = "read";

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);
    latestBook = myLibrary[myLibrary.length-1];
    console.log(latestBook.title);


}

testing();
