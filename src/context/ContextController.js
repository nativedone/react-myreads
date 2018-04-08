import React, { Component } from 'react'

import * as BooksAPI from './../BooksAPI'
import { mapArrayToObject } from './../utils/mapArrayToObject'

const { Consumer, Provider } = React.createContext()

class ContextProvider extends Component {
  state = {
    contextState: {
      booksInTheLibrary: {},
      appStatus: {
        value: 'loading', // or 'success' or 'error'
        message: '',
      },
    },
    contextActions: {
      onChangeShelf: (id, shelf) => this.onChangeShelf(id, shelf),
    },
  }

  changeState(books, statusValue, statusMessage = '') {
    this.setState({
      contextState: {
        booksInTheLibrary: { ...books } || {},
        appStatus: {
          value: statusValue,
          message: statusMessage,
        },
      },
    })
  }

  onChangeShelf = (book, shelf) => {
    const { contextState: { booksInTheLibrary } } = this.state

    this.changeState(booksInTheLibrary, 'loading')
    // Avoid making another API call to get the book as we already have it
    BooksAPI.update(book, shelf)
      .then(() =>
        this.changeState(
          { ...booksInTheLibrary, [book.id]: { ...book, shelf } },
          'success',
        ),
      )
      .catch(rejection =>
        this.changeState(
          { ...booksInTheLibrary },
          'error',
          rejection.toString(),
        ),
      )
  }

  componentDidMount() {
    console.log('componentDidMount')
    BooksAPI.getAll()
      .then(booksInTheLibrary =>
        this.changeState(mapArrayToObject(booksInTheLibrary), 'success'),
      )
      .catch(rejection =>
        this.changeState(
          { ...this.state.contextState.booksInTheLibrary },
          'error',
          rejection.toString(),
        ),
      )
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>
  }
}

export { Consumer as ContextConsumer, ContextProvider }
