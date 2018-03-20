import React, { Component } from 'react'

import BookFactory from './BookFactory'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
  render() {
    const { data: { title, authors, imageLinks: { thumbnail } } } = this.props

    return (
      <BookFactory title={title} authors={authors} thumbnail={thumbnail}>
        <BookShelfChanger />
      </BookFactory>
    )
  }
}

export default Book
