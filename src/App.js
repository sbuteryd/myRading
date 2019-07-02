import React,{Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route,Link} from 'react-router-dom'


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
        console.log(this.props.books)
        return (
            <div>

            </div>
        );
    }
}




class BooksApp extends Component{
    state = {
        books:[]
    }

    componentDidMount() {
        BooksAPI.getAll().then((books)=>{
            this.setState(({
                books
            }))
        })
    }

    render() {
        return (
            <div>
                <ListContact books={this.state.books.filter((b)=>b.shelf ==="currentlyReading")}/>
                <ListContact books={this.state.books.filter((b)=>b.shelf ==="wantToRead")}/>
                <ListContact books={this.state.books.filter((b)=>b.shelf ==="read")}/>
            </div>
        );
    }
}

export default BooksApp;