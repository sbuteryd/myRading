import React,{Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Read from './Read'
import Currently from './Currently'
import Want from './Want'


import './App.css'



export default class BooksApp extends Component{
    state = {
        books:[
            {title:"bookName1",
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:'currentlyReading',
                id:'100'
            },
            {title:'bookName2',
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:'currentlyReading',
                id:'102'
            },
            {title:'bookName3',
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:'currentlyReading',
                id:'103'
            },
            {title:'bookName4',
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:"wantToRead",
                id:'104'
            },
            {title:'bookName5',
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:"wantToRead",
                id:'105'
            },
            {title:'bookName6',
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:"read",
                id:'106'
            },
            {title:'bookName7',
                authors:'Harmeet',
                imageLinks:{smallThumbnail:"http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"},
                shelf:"read",
                id:'107'
            }

        ],
        value:''
    };

    updateBooks = (bookShelf,bookId)=>{
        let firstShelf = this.state.books.filter((book)=>(book.id ===bookId))
        firstShelf[0].shelf =bookShelf;
        this.setState((state)=>({
            books:state.books.filter((book)=>(book.id !== bookId)).concat(firstShelf)
        }))

        console.log(this.state.books)

    };

    render() {
        return (
            <div className='app'>
                <div className='list-books'>
                    <div className='list-books-title'>
                        <h1>MyReads</h1>
                    </div>
                    <div className='list-books-content'>
                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <Currently
                                    updateBooks={this.updateBooks}
                                    booksList={this.state.books.filter((c)=> c.shelf ==="currentlyReading")}/>
                            </div>
                        </div>

                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <Want
                                    updateBooks={this.updateBooks}
                                    booksList={this.state.books.filter((c)=> c.shelf ==="wantToRead")}/>
                            </div>
                        </div>

                        <div className='bookshelf'>
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Read
                                    updateBooks={this.updateBooks}
                                    booksList={this.state.books.filter((c)=> c.shelf ==="read")}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}