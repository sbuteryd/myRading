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
        return (
            <div>

            </div>
        );
    }
}




export default class BooksApp extends Component{

    componentDidMount() {
        BooksAPI.getAll().then(books =>{
            console.log(books)
        })
        BooksAPI.search('react').then(contact=>{
            console.log(contact)
        })
    }


    render() {
        return (
            <div>
                <h1>rusell</h1>
            </div>
        );
    }
}