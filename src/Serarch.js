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
    updateQuery = (query) => {
        if (!query) {
            this.setState({query: '', books: []})
        } else {
            this.setState({ query: query.trim()});
            BooksAPI.search(query).then((books) => {
                if (books.error) {
                    books = []
                }
                books.map(book => (this.props.shelfBook.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
                this.setState({books})
            })
        }
    };

    render() {
        // console.log('this.props.shelfbook',this.props.shelfBook)

        const  second =this.state.books;
        // console.log(second,'second');
        const first = this.props.shelfBook;
        // console.log(first);
        let save = first.filter((c)=> second.filter((second)=>(
            c.id ==='PKpPCwAAQBAJ'
        )
        ));
        console.log('save',save);


        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.query} onChange={(event)=> this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
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
                                                <select value={book.shelf} onChange={(event)=>this.handleChange(book,event)}>
                                                    <option value="move" >Move to...</option>
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