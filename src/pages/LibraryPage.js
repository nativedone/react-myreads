import React, { Component } from 'react'

import { BookShelf, OpenSearch, Loading } from './../components'
import { ContextConsumer } from './../context'

const SHELF_TYPES = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read',
}

class LibraryPage extends Component {
  filterBooksbyShelf(shelfName) {
    const { booksInTheLibrary: books } = this.props

    return Object.keys(books)
      .filter(id => books[id].shelf === shelfName)
      .map(id => books[id])
  }

  renderShelves = () => {
    const { appStatus } = this.props

    return appStatus.value === 'success' ? (
      <div className="list-books-content">
        {Object.keys(SHELF_TYPES).map(key => (
          <BookShelf
            key={key}
            title={SHELF_TYPES[key]}
            books={this.filterBooksbyShelf(key)}
          />
        ))}
      </div>
    ) : (
      <Loading status={appStatus} />
    )
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{`MyReads`}</h1>
        </div>
        {this.renderShelves()}
        <OpenSearch />
      </div>
    )
  }
}

export default props => (
  <ContextConsumer>
    {({ contextState }) => <LibraryPage {...props} {...contextState} />}
  </ContextConsumer>
)
