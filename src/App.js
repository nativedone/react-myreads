import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  handleOpenSearch = () => this.setState({ showSearchPage: true })
  
  handleCloseSearch = () => this.setState({ showSearchPage: false })


  render() {

    const fakeBookData = {
      currentlyReading: [1, 2, 3],
      wantToRead: [1, 2],
      read: [1, 2, 3, 4, 4],
    }

    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage onCloseSearch={this.handleCloseSearch}/>          
        ) : (
          <HomePage library={fakeBookData} onOpenSearch={this.handleOpenSearch}/>
        )}
      </div>
    )
  }
}

export default BooksApp
