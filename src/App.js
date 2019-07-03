import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route,Link} from 'react-router-dom'
import './App.css'
import ListContact from './ListContact'
import Header from './Header'
import Search from './Search'


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
    updateShelf = (book,shelf)=>{
        if(this.state.books){
            BooksAPI.update(book,shelf).then(()=>{
                //这个 update 直接更新服务器了，但是要刷新网页
                book['shelf']= shelf;
                this.setState((state)=>({
                    books:state.books.filter((b)=>b.id !==book.id).concat(book)

                    //使用 setState动态更新ui
                    //    book 首先执行filter，刷新完state，然后在执行.concat

                }))
            })

        }


    };
    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <Route exact path='/' render={()=>(
                        <div>
                            <Header/>
                            <ListContact
                                books={this.state.books.filter((b)=>b.shelf ==="currentlyReading")}
                                title={'currentlyReading'}
                                updateShelf={this.updateShelf}
                            />
                            <ListContact
                                books={this.state.books.filter((b)=>b.shelf ==="wantToRead")}
                                title={'wantToRead'}
                                updateShelf={this.updateShelf}
                            />
                            <ListContact
                                books={this.state.books.filter((b)=>b.shelf ==="read")}
                                title={'read'}
                                updateShelf={this.updateShelf}
                            />
                            <div className="open-search">
                                <Link to='/search'>
                                    <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
                                </Link>
                            </div>

                        </div>
                    )}/>
                    <Route  path='/search' render={()=>(
                        <div>
                            <Search
                                updateShelf={this.updateShelf}
                                books={this.state.books}/>
                        </div>
                    )}/>
                </div>
            </div>

        );
    }
}

export default BooksApp;