import React, { Component } from 'react'

import BookFactory from './BookFactory'
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const { title, authors, imageLinks } = this.props.book
    const thumbnail = imageLinks ? imageLinks.thumbnail : undefined

    return (
      <BookFactory title={title} authors={authors} thumbnail={thumbnail}>
        <ShelfChanger book={this.props.book} />
      </BookFactory>
    )
  }
}

export default Book
