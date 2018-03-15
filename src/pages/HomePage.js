import React, { Component } from 'react'

import BookShelf from './../components/BookShelf'


class HomePage extends Component {
    render() {
        const { currentlyReading, wantToRead, read } = this.props.library

        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title='Currently Reading' books={currentlyReading} />
              <BookShelf title='Want to Read' books={wantToRead} />
              <BookShelf title='Read' books={read} />
            </div>
            <div className="open-search">
              <a onClick={() => this.props.onOpenSearch()}>Add a book</a>
            </div>
          </div>
        )
    }
}

export default HomePage