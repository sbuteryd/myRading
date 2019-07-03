import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from  './BooksAPI'
import ListContact from './ListContact'

export default class Search extends Component {
    state = {
        query:'',
        books:[]
    };

    updateSearch = (searchBook)=>{
        if(!searchBook){
            this.setState(({
                query:'',
                books:[]
            }))
        }else {
            this.setState(({
                query:searchBook
            }))
            BooksAPI.search(searchBook).then(searchBook).then((searchBook)=>{
                searchBook.map((search)=> this.props.books.filter((b)=> b.id === search.id).map((b)=> search['shelf'] = b.shelf))
                this.setState({
                    books:searchBook
                })
            })
        }


    };
    changeShelf =(book,shelfValue)=>{
        this.setState((state)=>({
            books:state.books.filter((b)=>b.id !== book.id)
        }))
        this.props.updateShelf(book,shelfValue)
    };
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search" >Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input value={this.state.query} type="text" placeholder="Search by title or author" onChange={(event)=>this.updateSearch(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <div className="bookshelf">
                            <div className="bookshelf-books">
                                <ol className='books-grid'>
                                    {this.state.books.map((book)=>(
                                        <li key={book.id}>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193,backgroundImage:`url(${book.imageLinks.smallThumbnail ? book.imageLinks.smallThumbnail:'' })`}}></div>
                                                    <div className="book-shelf-changer">
                                                        <select value={book.shelf} onChange={(event)=> this.changeShelf(book,event.target.value)}>
                                                            <option value="move" >Move to...</option>
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
                    </ol>
                </div>
            </div>
        );
    }
}

