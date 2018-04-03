import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import LibraryPage from './pages/LibraryPage'
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage'

import { ContextProvider } from './context'

// TODO: Handle properly error trying to change self -> only show an auto dismissing message and
// TODO: Think about a way of not re-render the whole app for just update one book position
// TODO: Remove the search button on the app startup ou when updating a book
// TODO: See /src/clients/shared/containers/Context/addContext.js

class BooksApp extends React.Component {
  render() {
    return (
      <ContextProvider>
        <div className="app">
          <Switch>
            <Route exact path="/" component={LibraryPage} />
            <Route path="/search" component={SearchPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </ContextProvider>
    )
  }
}

export default BooksApp
