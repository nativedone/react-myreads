import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/*
    NOTES: You can find these search terms here:
    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
*/

class SearchBar extends Component {
  handleChange = event => {
    //console.log(event.target.value)
    /// this.setState({ query: event.target.value })
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
