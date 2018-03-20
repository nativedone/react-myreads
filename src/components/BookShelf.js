import React, { Component } from 'react'

import Book from './Book'
import NoBook from './NoBook'

class BookShelf extends Component {
  renderBooks = () => {
    return this.props.books.map(book => (
      <li key={book.id}>
        <Book data={book} />
      </li>
    ))
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          {this.props.books.length > 0 ? (
            <ol className="books-grid">{this.renderBooks()}</ol>
          ) : (
            <NoBook />
          )}
        </div>
      </div>
    )
  }
}

export default BookShelf
