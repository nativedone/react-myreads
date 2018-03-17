import React, { Component } from "react";

import BookShelf from "./../components/BookShelf";
import OpenSearch from "./../components/OpenSearch";

class LibraryPage extends Component {
  filterBooksbyShelf(shelfName) {
    return this.props.allBooks.filter(book => book.shelf === shelfName);
  }

  renderShelves = () => {
    const { loadding } = this.props;

    return loadding ? (
      <div>Loading....</div>
    ) : (
      <div className="list-books-content">
        <BookShelf
          title="Currently Reading"
          books={this.filterBooksbyShelf("currentlyReading")}
        />
        <BookShelf
          title="Want to Read"
          books={this.filterBooksbyShelf("wantToRead")}
        />
        <BookShelf title="Read" books={this.filterBooksbyShelf("read")} />
      </div>
    );
  };

  render() {
    console.log("this.props.allBooks", this.props.allBooks);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {this.renderShelves()}
        <OpenSearch />
      </div>
    );
  }
}

export default LibraryPage;
