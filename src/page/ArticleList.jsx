import React, { Component } from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/knowledge.jpg'
import WordGroup from '../component/WordGroup'
import Footer from '../component/Footer'
import TransformAnimation from '../component/TransformAnimation'

export default class About extends Component {
    render() {
        return (
            <>
                <TransformAnimation />
                <Banner BgImg={Bg} title={'好文分享'} />
                <div className="container">
                    <WordGroup />
                </div>

                <Footer />
            </>
        )
    }
}