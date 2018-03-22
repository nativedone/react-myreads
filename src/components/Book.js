import React, { Component } from 'react'

import BookFactory from './BookFactory'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const {
      data: { title, authors, imageLinks: { thumbnail }, shelf, id },
    } = this.props

    return (
      <BookFactory title={title} authors={authors} thumbnail={thumbnail}>
        <ShelfChanger
          currentShelf={shelf}
          bookId={id}
          onChangeShelf={this.props.onChangeShelf}
        />
      </BookFactory>
    )
  }
}

export default Book
