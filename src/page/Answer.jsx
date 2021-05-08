import React, { Component } from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/ask-bg.jpg'
import Accroindiation from '../component/Accroindiation'
import Footer from '../component/Footer'
import TransformAnimation from '../component/TransformAnimation'

export default class About extends Component {
    render() {
        return (
            <>  
            <TransformAnimation />
                <Banner BgImg={Bg} title={'常見問題'}></Banner>
                <Accroindiation />
                <Footer />
            </>
        )
    }
}
