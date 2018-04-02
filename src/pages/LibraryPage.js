import React, { Component } from 'react'

import BookShelf from './../components/BookShelf'
import OpenSearch from './../components/OpenSearch'
import Loading from './../components/Loading'

import { ContextConsumer } from './../context'

const SHELF_TYPES = {
  currentlyReading: 'Currently Reading',
  wantToRead: 'Want to Read',
  read: 'Read',
}

class LibraryPage extends Component {
  filterBooksbyShelf(shelfName) {
    const { allBooks } = this.props

    return Object.keys(allBooks)
      .filter(id => allBooks[id].shelf === shelfName)
      .map(id => allBooks[id])
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
      <Loading appStatus={appStatus} />
    )
  }

  render() {
    // TODO: remove console
    console.log('this.props', this.props)

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
    {context => <LibraryPage {...props} {...context.state} />}
  </ContextConsumer>
)
