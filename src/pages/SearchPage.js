import React, { Component } from "react";

import SearchBar from "./../components/SearchBar";

class SearchPage extends Component {
  render() {
    return (
      <div className="search-books">
        <SearchBar onClose={this.props.onCloseSearch} />
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchPage;
