import React, { Component } from 'react'

import Book from './Book'

class SearchResults extends Component {
  renderBooks = () => {
    const { books } = this.props
    //console.log('this.props at search results', this.props)
    return Object.keys(books).map(key => (
      <li key={books[key].id}>
        <Book book={books[key]} />
      </li>
    ))
  }

  render() {
    console.log('search results props', this.props)
    return (
      <div className="search-books-results">
        <ol className="books-grid">{this.renderBooks()}</ol>
      </div>
    )
  }
}

export default SearchResults
