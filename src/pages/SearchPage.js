import React, { Component } from 'react'

import * as BooksAPI from './../BooksAPI'
import { mapArrayToObject } from './../utils/mapArrayToObject'
import { ContextConsumer } from './../context'

import SearchBar from './../components/SearchBar'
import SearchHelp from './../components/SearchHelp'
import SearchResults from './../components/SearchResults'
import Loading from './../components/Loading'

class SearchPage extends Component {
  state = {
    query: '',
    foundBooks: {},
    queryStatus: {
      value: 'reset', // 'loading' or 'success' or 'error'
      message: '',
    },
  }

  changeState(books, statusValue, statusMessage = '') {
    console.log(books)
    this.setState({
      foundBooks: { ...books } || {},
      queryStatus: {
        value: statusValue,
        message: statusMessage,
      },
    })
  }

  handleChange = query => {
    console.log('query on search page', query)
    this.setState({ query })

    // Clear state and finish the query
    if (query.length === 0) {
      this.changeState({}, 'reset')
      return
    }

    // Clear state before API call
    this.changeState({}, 'loading')

    BooksAPI.search(query)
      .then(foundBooks =>
        this.changeState(mapArrayToObject(foundBooks), 'success'),
      )
      .catch(rejection =>
        this.changeState(
          { ...this.state.foundBooks },
          'error',
          rejection.toString(),
        ),
      )
  }

  resolveShelf = () => {
    const { booksInTheLibrary } = this.props

    let booksWithShelf = { ...this.state.foundBooks }

    Object.keys(booksWithShelf).map(key => {
      console.log(booksInTheLibrary)
      booksWithShelf[key].shelf = booksInTheLibrary[key]
        ? booksInTheLibrary[key].shelf
        : undefined
    })

    return booksWithShelf
  }

  renderResults = () => {
    const { foundBooks, query, queryStatus } = this.state
    const { appStatus } = this.props

    if (appStatus.value !== 'success') {
      return <Loading status={appStatus} />
    }

    if (queryStatus.value === 'reset' || query === '') {
      return (
        <div className="search-books-results">
          <SearchHelp />
        </div>
      )
    }

    return queryStatus.value === 'success' ? (
      Object.keys(foundBooks).length > 0 && (
        <SearchResults books={this.resolveShelf()} />
      )
    ) : (
      <Loading status={queryStatus} />
    )
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar query={this.state.query} handleChange={this.handleChange} />
        <div className="wrap-books-results">{this.renderResults()}</div>
      </div>
    )
  }
}

export default props => (
  <ContextConsumer>
    {({ contextState }) => <SearchPage {...props} {...contextState} />}
  </ContextConsumer>
)
