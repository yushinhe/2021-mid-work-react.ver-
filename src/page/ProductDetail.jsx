import React, { Component } from 'react'
import Data from '../component/bookdata'
import ProductInfo from '../component/ProductInfo'
import BookIntro from '../component/BookIntro'
import BookContent from '../component/BookContent'
import BookSwipper from '../component/BookSwipper'
import Footer from '../component/Footer'

export default class ProductDetail extends Component {
    render() {
        const { id } = this.props.match.params;
        const findResult = Data.find(detailObj => {
            return detailObj.id === id
        })
        return (
            <>
                <ProductInfo Data={findResult} />
                <BookIntro Data={findResult} />
                <BookContent Data={findResult} />
                <BookSwipper />
                <Footer />
            </>
        )
    }
}
