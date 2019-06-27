import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Read from './Read'
import Currently from './Currently'
import Want from './Want'


import './App.css'



export default class BooksApp extends Component{
    state = {
        books:[]
    };
    componentDidMount() {
        BooksAPI.getAll().then(books =>{
            this.setState(({
                books
            }))
        });
    }
    render() {
        {console.log('this.props.books',this.state.books)}
        return (
            <div className='app'>
                <div className='list-books'>
                    <div className='list-books-title'>
                        <h1>MyReads</h1>
                    </div>
                    <div className='list-books-content'>
                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Currently</h2>
                            <div className="bookshelf-books">
                                <Currently
                                    booksList={this.state.books.filter((c)=> c.shelf ==="currentlyReading")}/>
                            </div>
                        </div>

                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Want</h2>
                            <div className="bookshelf-books">
                                <Want
                                    booksList={this.state.books.filter((c)=> c.shelf ==="wantToRead")}/>
                            </div>
                        </div>

                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Read
                                    booksList={this.state.books.filter((c)=> c.shelf ==="read")}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}