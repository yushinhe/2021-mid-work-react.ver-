import React, { Component } from 'react'
import Data from '../bookdata'
import Title from '../Title'
import './index.css'
export default class index extends Component {
    render() {
        let recommandBook = Data.filter(e => e.recommand == true)
        return (
            <>
                <section className="recommand">
                    <div className="bg"></div>
                    <div className="container">
                        <Title title={'暢銷熱賣'}></Title>
                        <div className="card-group">
                            {
                                recommandBook.map((item, index) => {
                                    return (
                                        <a href="./product-detail.html" class="card">
                                            <div className="card-bg"></div>
                                            <p className="price">${item.price}</p>
                                            <img src={item.img} alt="" />
                                            <div className="info">
                                                <h4>{item.name}</h4>
                                            </div>
                                        </a>
                                    )
                                })
                            }

                        </div>
                    </div>
                </section>
            </>
        )
    }
}
