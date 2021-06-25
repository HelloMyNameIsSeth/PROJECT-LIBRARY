var myLibrary = [];
var titleComparison = [];


function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function inputValidation() {

}

function removeButton(r) {
    //https://sebhastian.com/javascript-create-button/ {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("myTable").deleteRow(i);
}



function addBookToLibrary() {

    var title = prompt("Enter Book's Title:", "No Book Name Provided");
    var author = prompt("Enter Book's Author:", "No Author Provided");
    var pages = prompt("Enter Number of Pages in the book:", "No Page Number Provided");
    var read = prompt("Have you read the book?:", "No Read Status Provided");

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    //cell1.innerHTML = title;

    //let btn = new createRemoveButton();

    let btn = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.type = "submit";
    btn.addEventListener("click", function(){
        var i = this.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
    });




    latestBook = myLibrary[myLibrary.length-1];
    cell1.innerHTML = latestBook.title;
    cell2.innerHTML = latestBook.author;
    cell3.innerHTML = latestBook.pages;
    cell4.innerHTML = latestBook.read;
    cell5.appendChild(btn);


}
