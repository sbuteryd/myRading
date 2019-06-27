import React,{Component} from 'react'

export default class Currently extends Component{
    state = {
        value:'',
        currentlyList:''
    };
    handleChange = (event,bookId,title)=>{
        this.setState(({
            value:event.target.value,
            }))
        this.props.updateBooks(event.target.value,bookId)

    };

    render() {
        let updateBooks;
        if(this.state.currentlyList){
            updateBooks = this.state.currentlyList

        }else {
            updateBooks = this.props.booksList
        }
        {console.log(this.state.currentlyList)}
        return (
            <ol className='books-grid'>
                {updateBooks.map((book)=>(
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