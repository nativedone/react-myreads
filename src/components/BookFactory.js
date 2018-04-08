import React, { Component } from 'react'

const FALLBACK_THUMBNAIL =
  'http://mybooks.ericsowell.com/Content/Images/NoBookImagePicture.jpg'

const FALLBACK_AUTHORS = 'No author available'

class BookFactory extends Component {
  render() {
    const { title, authors, thumbnail, children } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnail || FALLBACK_THUMBNAIL})`,
            }}
          />
          {children}
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors || FALLBACK_AUTHORS}</div>
      </div>
    )
  }
}

export default BookFactory
