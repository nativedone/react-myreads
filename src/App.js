import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import LibraryPage from "./pages/LibraryPage";
import SearchPage from "./pages/SearchPage";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    allBooks: [],
    loading: true
  };

  // TODO: create a loading component

  componentDidMount() {
    BooksAPI.getAll().then(allBooks =>
      this.setState({
        allBooks,
        loading: false
      })
    );
  }

  handleOpenSearch = () => this.setState({ showSearchPage: true });

  handleCloseSearch = () => this.setState({ showSearchPage: false });

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage || this.state.loading ? (
          <SearchPage onCloseSearch={this.handleCloseSearch} />
        ) : (
          <LibraryPage
            allBooks={this.state.allBooks}
            onOpenSearch={this.handleOpenSearch}
          />
        )}
      </div>
    );
  }
}

export default BooksApp;
