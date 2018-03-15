import React, { Component } from 'react'

import Book from './Book'


class BookShelf extends Component {
    renderBooks = () => {
        return this.props.books.map((book, index) => <li><Book key={index}/></li>)
    }

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                      {this.renderBooks()}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf