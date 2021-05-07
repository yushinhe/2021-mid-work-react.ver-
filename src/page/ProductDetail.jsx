import React, { Component } from 'react'
import Data from '../component/bookdata'
import ProductInfo from '../component/ProductInfo'
import BookIntro from '../component/BookIntro'
export default class ProductDetail extends Component {
    render() {
        console.log(Data);
        const { id } = this.props.match.params;
        const findResult = Data.find(detailObj => {
            return detailObj.id === id
        })
        console.log(findResult);
        return (
            <>
                <ProductInfo Data={findResult} />
                <BookIntro Data={findResult} />
            </>
        )
    }
}
