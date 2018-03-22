import React from 'react'
import { Route, Switch } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import LibraryPage from './pages/LibraryPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

import { mapArrayToObject } from './utils/mapArrayToObject'

// TODO: Use the context API for passing onChangeShelf
// TODO: Handle properly error trying to change self -> only show an auto dismissing message and
// TODO: Think about a way of not re-render the whole app for just update one book position
// TODO: Remove the search button on the app startup ou when updating a book

class BooksApp extends React.Component {
  state = {
    allBooks: {},
    appStatus: {
      value: 'loading', // or 'success' or 'error'
      message: '',
    },
  }

  onChangeShelf = (id, shelf) => {
    this.setState({
      appStatus: {
        ...appStatus,
        value: 'loading',
      },
    })

    const { allBooks, appStatus } = this.state

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
    console.log('appStatus', this.state.appStatus)
    console.log('allBooks', this.state.allBooks)

    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            {() => (
              <LibraryPage {...this.state} onChangeShelf={this.onChangeShelf} />
            )}
          </Route>
          <Route path="/search" component={SearchPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
