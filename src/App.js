import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route,Link} from 'react-router-dom'
import './App.css'



class Search extends Component{
    render() {
        return (
            <div>

            </div>
        );
    }
}



class ListContact extends Component{
    render() {
        const {books,title}= this.props
        console.log(books)
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className='books-grid'>
                        {books.map((book)=>(
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193,backgroundImage:`url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail:'' })`}}></div>
                                        <div className="book-shelf-changer">
                                            <select value={book.shelf}>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        ))}

                    </ol>
                </div>
            </div>
        );
    }
}


class Header  extends Component {
    render() {
        return (
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
        );
    }
}


class BooksApp extends Component{
    state = {
        books:[]
    };

    componentDidMount() {
        BooksAPI.getAll().then((books)=>{
            this.setState(({
                books
            }))
        })
    }
    render() {
        console.log(this.state.books)
        return (
            <div className="list-books">
                <Header/>
                <ListContact books={this.state.books.filter((b)=>b.shelf ==="currentlyReading")} title={'currentlyReading'}/>
                <ListContact books={this.state.books.filter((b)=>b.shelf ==="wantToRead")} title={'wantToRead'}/>
                <ListContact books={this.state.books.filter((b)=>b.shelf ==="read")} title={'read'}/>
            </div>
        );
    }
}

export default BooksApp;