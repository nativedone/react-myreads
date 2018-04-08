import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css'
import { LibraryPage, SearchPage, NotFoundPage } from './pages'
import { ContextProvider } from './context'

// TODO: Handle properly error trying to change self -> only show an auto dismissing message
// TODO: Think about a way of not re-render the whole app for just update one book position
// 'in-book loading' for shanging shelf operations

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
