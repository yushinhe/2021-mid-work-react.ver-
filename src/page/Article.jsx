import React, { Component } from 'react'
import ArticleDetail from '../component/ArticleDetail'
import Data from '../component/articleData'
import Footer from '../component/Footer'


export default class ProductDetail extends Component {
    render() {
        const { id } = this.props.match.params;
        const findResult = Data.find(detailObj => {
            return detailObj.id === id
        })
       
        return (
            <>
                <ArticleDetail Data={findResult} />
                <Footer />
            </>
        )
    }
}