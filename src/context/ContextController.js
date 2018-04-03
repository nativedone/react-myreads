import React, { Component } from 'react'

import * as BooksAPI from './../BooksAPI'
import { mapArrayToObject } from './../utils/mapArrayToObject'

const { Consumer, Provider } = React.createContext()

class ContextProvider extends Component {
  state = {
    contextState: {
      allBooks: {},
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
        allBooks: { ...books } || {},
        appStatus: {
          value: statusValue,
          message: statusMessage,
        },
      },
    })
  }

  onChangeShelf = (id, shelf) => {
    const { contextState: { allBooks, appStatus } } = this.state

    this.changeState(allBooks, 'loading')

    BooksAPI.update({ id }, shelf)
      .then(res =>
        this.changeState(
          { ...allBooks, [id]: { ...allBooks[id], shelf } },
          'success',
        ),
      )
      .catch(rejection =>
        this.changeState({ ...allBooks }, 'error', rejection.toString()),
      )
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks => this.changeState(mapArrayToObject(allBooks), 'success'))
      .catch(rejection =>
        this.changeState(
          { ...this.state.contextState.allBooks },
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
