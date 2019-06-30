 const shelfBook = [{name: 'Butters', age: 3, type: 'dog'},{name: 'Lizzy', age: 6, type: 'dog'}, {name: 'Red', age: 1, type: 'cat'},

];



const books = [{name: 'Butters', age: 3},{name: 'Lizzy', age: 6}, {name: 'Red', age: 1}, ];



books.map(function (book) {
    shelfBook.filter(function (b) {
        return b.name === book.name
    }).map(function (b) {
        book.type = b.type
        debugger
    })
});
console.log(books)
