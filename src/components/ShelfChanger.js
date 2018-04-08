import React, { Component } from 'react'

import { ContextConsumer } from './../context'

class ShelfChanger extends Component {
  static defaultProps = { onChangeShelf: () => {} }

  state = {
    value: 'none',
  }

  componentDidMount() {
    this.setState({ value: this.props.book.shelf })
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    this.props.onChangeShelf(this.props.book, event.target.value)
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="disabled" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default props => (
  <ContextConsumer>
    {({ contextActions }) => <ShelfChanger {...props} {...contextActions} />}
  </ContextConsumer>
)
