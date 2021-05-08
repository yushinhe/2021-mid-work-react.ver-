import React, { Component } from 'react'
import Data from '../bookdata'
import Title from '../Title'
import {Link} from 'react-router-dom' 
import './index.scss'
export default class index extends Component {
    render() {
        let recommandBook = Data.filter(e => e.recommand === true)
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
                                        <Link to={`/product-detail/${item.id}`} key={index} className="card">
                                            <div className="card-bg"></div>
                                            <p className="price">${item.price}</p>
                                            <img src={item.img} alt="" />
                                            <div className="info">
                                                <h4>{item.name}</h4>
                                            </div>
                                        </Link>
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
