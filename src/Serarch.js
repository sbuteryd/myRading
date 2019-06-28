import React,{Component}from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
export default class Serarch extends Component{
    state = {
        query:'',
        books:[]
    };
    getDate = ()=>{
        if(this.state.query){
            BooksAPI.search(this.state.query).then((book) => {
                this.setState(({
                    books:book
                }))
            })
        }
    }
    updateSearch = (values)=>{
        this.setState(()=>({
            query: values
        }));
        if(this.state.query){
            this.getDate()
        }
    }

    render() {
        {console.log(this.state.books)}
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" value={this.state.query} onChange={(event)=> this.updateSearch(event.target.value)} placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(this.state.books)&&(
                            this.state.books.map((book)=>(
                                    <li key={book.id}>
                                        <div className='book'>
                                            <div className='book-top'>
                                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
                                                <div className='book-shelf-changer'>
                                                    <select value={this.state.value} onChange={(event)=>this.handleChange(book,event)}>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='book-title'>{book.title}</div>
                                            <div className='book-authors'>{book.authors}</div>
                                        </div>
                                    </li>
                                ))
                        )}

                    </ol>
                </div>
            </div>
        );
    }
}