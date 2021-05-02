import React, { Component } from 'react'
import '../css/reset.css';
import '../css/utility.css';
import Hero from '../component/Hero';
import Service from '../component/Service';
import Knowledge from '../component/Knowledge'
import Recommand from '../component/Recommand'
import Active from '../component/Active'
import Slogan from '../component/Slogan'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

export default class home extends Component {
    render() {
        return (
            <>
                <Hero />
                <Service />
                <Knowledge />
                <Recommand />
                <Active />
                <Slogan />
                <Contact />
                <Footer />
            </>
        )
    }
}
