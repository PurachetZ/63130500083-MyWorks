let book = { isbn: 123456789,
    title: "JavaScript",
    author:{
    firstname: "Umaporn",
    lastname: "Sup"
    }
    };//getting object property
console.log (book.isbn);
console.log(book["title"]);
console.log(book['author']['firstname']);
console.log(book.author.firstname);
//setting object property
book.author.firstname = "Uma";
console.log(book);
//create new object property
book["publishedYear"]=2000;
console.log(book);
//or book.publishedYear=2000;