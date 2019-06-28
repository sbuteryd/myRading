import React,{Component}from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Currently from './Currently'
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
    handleChange = (book,event)=>{
        const save = event.target.options[event.target.selectedIndex].value
        this.props.updateBooks(book,save)

    };
    render() {
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
                    {this.state.books.length ? (
                        <Currently
                            updateBooks={this.updateBooks}
                            booksList={this.state.books}/>
                    ):(<div className='nothing'>Can't find</div>)}
                    </ol>
                </div>
            </div>
        );
    }
}