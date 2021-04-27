import React, { Component } from 'react'
import './index.css'
// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.css';
export default class Hero extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: [
                {
                    title: '書中自有黃金屋',
                    detail: '太公望書林提供了很多能豐富精神的書籍，我們希望我們的讀者讀了我們的書之後，除了能擁有物質上的黃金屋，也能在書中探索到自己心中的黃金屋'
                }
            ],
            swiperImg:[

            ]
        }
    }

    render() {

        result(
            <>
                <section className="hero">
                    <div className="bg"></div>
                    <div className="container grid">
                        <div className="info">
                            <h2>{this.state.info.title}</h2>
                            <p>{this.state.info.detail}</p>
                            <a href="./product-list.html" className="btn btn-black"> 立刻選書 &nbsp; <i
                                className="fas fa-chevron-right"></i></a>

                        </div>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                            <div class="swiper-slide"><img src="./product-img/${swiperImg[i]}"/></div>
                            </div>
                        </div>
                        <div className="d-flex icon">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-line"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}