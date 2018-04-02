import React, { Component } from 'react'

import * as BooksAPI from './../BooksAPI'
import { mapArrayToObject } from './../utils/mapArrayToObject'

const { Consumer, Provider } = React.createContext()

class ContextProvider extends Component {
  state = {
    allBooks: {},
    appStatus: {
      value: 'loading', // or 'success' or 'error'
      message: '',
    },
  }

  actions = { onChangeShelf: (id, shelf) => this.onChangeShelf(id, shelf) }

  onChangeShelf = (id, shelf) => {
    const { allBooks, appStatus } = this.state

    this.setState({
      appStatus: {
        ...appStatus,
        value: 'loading',
      },
    })

    BooksAPI.update({ id }, shelf)
      .then(res =>
        this.setState({
          allBooks: { ...allBooks, [id]: { ...allBooks[id], shelf } },
          appStatus: {
            ...appStatus,
            value: 'success',
          },
        }),
      )
      .catch(rejection =>
        this.setState({
          appStatus: {
            value: 'error',
            message: rejection.toString(),
          },
        }),
      )
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks =>
        this.setState({
          allBooks: mapArrayToObject(allBooks) || {},
          appStatus: {
            ...this.state.appStatus,
            value: 'success',
          },
        }),
      )
      .catch(rejection =>
        this.setState({
          appStatus: {
            value: 'error',
            message: rejection.toString(),
          },
        }),
      )
  }

  render() {
    return (
      <Provider
        value={{
          actions: { ...this.actions },
          state: { ...this.state },
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export { Consumer as ContextConsumer, ContextProvider }
