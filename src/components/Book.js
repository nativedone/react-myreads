import React, { Component } from 'react'

import BookShelfChanger from './BookShelfChanger'

class Book extends Component {
    render() {
        const { data: { title, authors, imageLinks: { thumbnail } } } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
                    <BookShelfChanger />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book