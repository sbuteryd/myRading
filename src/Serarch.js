import React,{Component}from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
// import {update} from "./BooksAPI";
export default class Serarch extends Component{
    state = {
        query:'',
        books:[]
    };
    updateSearch =(values)=>{
       this.setState(({
          query:values
       }));
       if(this.state.query){
           BooksAPI.search(this.state.query).then((books)=>{
              this.setState(({
                  books
              }))
           })
       }
    };

    render() {
            console.log(this.state.books)

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={(event)=> this.updateSearch(event.target.value)} placeholder="Search by title or author"/>
                    </div>
                </div>

                <div className="search-books-results">
                    <ol className='books-grid'>
                         {/*设置长度大于1 防止报错*/}
                    {this.state.books.length >1 &&(
                        this.state.books.map((book)=>(
                                <li key={book.id}>
                                    <div className='book'>
                                        <div className='book-top'>
                                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
                                            <div className='book-shelf-changer'>
                                                <select>
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