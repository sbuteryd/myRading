import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Currently from './Currently'
import Serarch from './Serarch'
import {Route,Link} from 'react-router-dom'

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
        {console.log(book)}
        if (this.state.books) {
            BooksAPI.update(book,shelf).then(() => {
                book['shelf'] = shelf;
                this.setState(state => ({
                    books: state.books.filter(b => b.id !== book.id).concat([ book ])
                }))
            })
        }
    };
    render() {
        {console.log(this.state.books)}
        return (
            <div className='app'>
                <Route exact path='/' render={()=>(
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
                                    <Currently
                                        updateBooks={this.updateBooks}
                                        booksList={this.state.books.filter((c)=> c.shelf ==="wantToRead")}/>
                                </div>
                            </div>

                            <div className='bookshelf'>
                                <h2 className="bookshelf-title">Read</h2>
                                <div className="bookshelf-books">
                                    <Currently
                                        updateBooks={this.updateBooks}
                                        booksList={this.state.books.filter((c)=> c.shelf ==="read")}/>
                                </div>
                            </div>
                        </div>
                        <div className="open-search">
                            <Link to='/search'>
                                <button>add</button>
                            </Link>
                        </div>
                    </div>
                )} />
                <Route path='/search'  render={()=>(
                    <Serarch updateBooks={this.updateBooks} shelfBook={this.state.books}/>
                )}/>

            </div>

        );
    }
}