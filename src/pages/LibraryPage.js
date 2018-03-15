import React, { Component } from 'react'

import BookShelf from './../components/BookShelf'


class LibraryPage extends Component {
  filterBooksbyShelf(shelfName){
    return this.props.allBooks.filter(book => book.shelf === shelfName)
  }

    render() {
      console.log('this.props.allBooks', this.props.allBooks)
        const { onOpenSearch } = this.props

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title='Currently Reading' books={this.filterBooksbyShelf('currentlyReading')} />
              <BookShelf title='Want to Read' books={this.filterBooksbyShelf('wantToRead')} />
              <BookShelf title='Read' books={this.filterBooksbyShelf('read')} />
            </div>
            <div className="open-search">
              <a onClick={() => onOpenSearch()}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default LibraryPage