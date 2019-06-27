import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Read from './Read'
import Currently from './Currently'
import Want from './Want'


import './App.css'



export default class BooksApp extends Component{
    state = {
        books:[],
        value:''
    };

    componentDidMount() {
        BooksAPI.getAll().then(books=>{
            this.setState(({
                books
            }))
        })

    }

    updateBooks = (book,shelf) => {
        if (this.state.books) {
            BooksAPI.update(book,shelf).then(() => {
                book.shelf = shelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([ book ])
                }))
            })
        }
    };

    // updateBooks = (book,shelf)=>{
    //     // let firstShelf = this.state.books.filter((book)=>(book.id ===book))
    //     // firstShelf[0].shelf =shelf;
    //     // this.setState((state)=>({
    //     //     books:state.books.filter((book)=>(book.id !== book)).concat(firstShelf)
    //     // }))
    //
    //     console.log('app',book,shelf)
    //
    // };

    render() {
        return (
            <div className='app'>
                <div className='list-books'>
                    <div className='list-books-title'>
                        <h1>MyReads</h1>
                    </div>
                    <div className='list-books-content'>
                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <Currently
                                    updateBooks={this.updateBooks}
                                    booksList={this.state.books.filter((c)=> c.shelf ==="currentlyReading")}/>
                            </div>
                        </div>

                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <Want
                                    updateBooks={this.updateBooks}
                                    booksList={this.state.books.filter((c)=> c.shelf ==="wantToRead")}/>
                            </div>
                        </div>

                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Read
                                    updateBooks={this.updateBooks}
                                    booksList={this.state.books.filter((c)=> c.shelf ==="read")}/>
                            </div>
                        </div>
                    </div>
                    <div className="open-search">
                        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                    </div>
                </div>
            </div>

        );
    }
}