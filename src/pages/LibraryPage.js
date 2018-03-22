import React, { Component } from 'react'

import BookShelf from './../components/BookShelf'
import OpenSearch from './../components/OpenSearch'
import Loading from './../components/Loading'

class LibraryPage extends Component {
  filterBooksbyShelf(shelfName) {
    const { allBooks } = this.props
    return Object.keys(allBooks)
      .filter(id => allBooks[id].shelf === shelfName)
      .map(id => allBooks[id])
  }

  renderShelves = () => {
    const { appStatus } = this.props

    console.log('appStatus', appStatus)

    return appStatus.value === 'success' ? (
      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={this.filterBooksbyShelf('currentlyReading')}
          onChangeShelf={this.props.onChangeShelf}
        />
        <BookShelf
          title="Want to Read"
          books={this.filterBooksbyShelf('wantToRead')}
          onChangeShelf={this.props.onChangeShelf}
        />
        <BookShelf
          title="Read"
          books={this.filterBooksbyShelf('read')}
          onChangeShelf={this.props.onChangeShelf}
        />
      </div>
    ) : (
      <Loading appStatus={appStatus} />
    )
  }

  render() {
    // TODO: remove console
    console.log('this.props', this.props)

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.renderShelves()}
        <OpenSearch />
      </div>
    )
  }
}

export default LibraryPage
