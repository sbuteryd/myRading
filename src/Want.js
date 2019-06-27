import React,{Component} from 'react'

export default class Want extends Component{
    state = {
        value:'wantToRead'
    };
    handleChange = (event,bookId,title)=>{
        this.props.updateBooks(event.target.value,bookId)

    };

    render() {
        return (
            <ol className='books-grid'>
                {this.props.booksList.map((book)=>(
                    <li key={book.id}>
                        <div className='book'>
                            <div className='book-top'>
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${book.imageLinks.smallThumbnail})`}}></div>
                                <div className='book-shelf-changer'>
                                    <select value={this.state.value} onChange={(event)=>this.handleChange(event,book.id,book.title)}>
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
                ))}

            </ol>
        );
    }
}