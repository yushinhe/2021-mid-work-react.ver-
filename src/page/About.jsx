import React, { Component } from 'react'
import Banner from '../component/Banner'
import ToggleMenu from '../component/ToggleMenu'
import Bg from '../img/main-img/about-us-bg.jpg'
import TimeLine from '../component/TimeLine'
import Footer from '../component/Footer'
export default class About extends Component {
    render() {
        return (
            <>
                <Banner BgImg={Bg} title={'關於我們'}></Banner>
                <main>
                    <ToggleMenu />
                    <TimeLine />
                </main>
                <Footer/>
            </>
        )
    }
}
