import React, { Component } from "react";

/*
    NOTES: You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
*/

class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <a className="close-search" onClick={() => this.props.onClose()}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" />
        </div>
      </div>
    );
  }
}

export default SearchBar;
