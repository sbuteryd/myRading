const  books= [
    {title:'robotics',id:1,name:'russell'},
    {title:'remote',id:2,name:'second'},
    {title:'wired',id:3,name:'third'}];


const shelfBook =[{title:'robotics',id:1,name:'russell',shelf:"first"},{id:3,name:'third',shelf:'third'}];


const save = books.map(book => (shelfBook.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))


const second = books.map(function (book) {
    bookshelf.filter(function (b) {
        b.id === book.id
    }).map(function (b) {
        debugger
        b.shelf = book.shelf
    })
})


console.log(save)