import React, { Component } from 'react'
import Data from './bookdata'
const BookContext = React.createContext(null);
export default class BookProvider extends Component {
    state = {
        books: [],
        sortedBooks: [],
        sort: '',
        type: 'all',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
    };
    //getData
    componentDidMount() {
        let books = this.formatData(Data)
        let maxPrice = Math.max(...books.map(item => item.price))

        this.setState({
            books,
            sortedBooks: books,
            price: maxPrice,
            maxPrice
        })

    }
    formatData(items) {
        let tempItems = items.map(item => {
            let books = { ...item }
            return books;
        })
        return tempItems
    }
    getBook = id => {
        let tempBook = [...this.state.books];
        const book = tempBook.find(room => room.id === id)
        return book
    }
    handleChange = event => {
        const target = event.target;
        const name = event.target.name;
        const value = target.type === "checkbox" ? target.checked : target.value;
        this.setState(
            {
                [name]: value
            }, this.filterBooks
        )
    }


    filterBooks = () => {
        let {
            books,
            type,
            sort,
            maxPrice,
            minPrice
        } = this.state

        let tempBook = [...books]

        if (type !== 'all') {
            tempBook = tempBook.filter(item => item.type === type)
        }
        //price sort
        if (sort === 'asc') {
            tempBook = tempBook.sort((a, b) => a.price - b.price)
        } else {
            tempBook = tempBook.sort((a, b) => b.price - a.price)
        }

        //select price
        tempBook = tempBook.filter(item => item.price <= maxPrice && item.price >= minPrice)

        this.setState({
            sortedBooks: tempBook,
        })
    }

    render() {
        return (
            <div>
                <BookContext.Provider value={{ ...this.state, getBook: this.getBook, handleChange: this.handleChange }}>
                    {this.props.children}
                </BookContext.Provider>
            </div>
        )
    }
}
const BookConsumer = BookContext.Consumer;
export { BookContext, BookConsumer, BookProvider }