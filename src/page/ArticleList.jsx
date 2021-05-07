import React, { Component } from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/knowledge.jpg'
import WordGroup from '../component/WordGroup'
import WordList from '../component/WordList'
import Footer from '../component/Footer'
export default class About extends Component {
    render() {
        return (
            <>
                <Banner BgImg={Bg} title={'好文分享'} />
                <div className="container">
                    <WordList />
                    <WordGroup />
                </div>

                <Footer />
            </>
        )
    }
}