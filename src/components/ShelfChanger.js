import React, { Component } from 'react'

import { ContextConsumer } from './../context'

class ShelfChanger extends Component {
  static defaultProps = { onChangeShelf: () => {} }

  state = {
    value: 'none',
  }

  componentDidMount() {
    this.setState({ value: this.props.currentShelf })
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    this.props.onChangeShelf(this.props.bookId, event.target.value)
  }

  render() {
    console.log(this.props)
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
    {context => (
      <ShelfChanger {...props} onChangeShelf={context.actions.onChangeShelf} />
    )}
  </ContextConsumer>
)
