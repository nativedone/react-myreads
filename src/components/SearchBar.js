import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends Component {
  handleChange = event => {
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <div className="search-books-bar">
        <Link to="/">
          <div className="close-search">Close</div>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={this.props.query}
            onChange={this.handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
    )
  }
}

export default SearchBar
