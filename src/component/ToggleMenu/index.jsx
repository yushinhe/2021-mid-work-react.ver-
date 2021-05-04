import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <>
                <section className="toggle-menu">
                    <ul className="container">
                        <li className="active"><a href="#">發展歷史</a></li>
                        <li><a href="#">團隊成員</a></li>
                        <li><a href="#">品牌理念</a></li>
                        <li><a href="#">未來展望</a></li>
                    </ul>
                </section>
            </>
        )
    }
}
