import React,{Component} from 'react'
export default class ListContact extends Component{
    changeShelf =(book,shelfValue)=>{
        console.log(book,shelfValue)
        this.props.updateShelf(book,shelfValue)
    };
    render() {
        const {books,title}= this.props
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
        );
    }
}
