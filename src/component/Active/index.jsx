import React, { Component } from 'react'
import Data from '../activedata';
import './index.css'
export default class index extends Component {
    render() {
        let recommandActive = Data.filter((e) => e.recommand == true)
        return (
            <>
                <section className="activity">
                    <div className="container">
                        <h2 className="section-title">近期演講</h2>
                        <div className="item-group">
                            {
                                recommandActive.map((item, index) => {
                                    return (
                                        <div className="item">
                                            <div className="card">
                                                <div className="imgBox">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <div className="details">
                                                    <h4>{item.introTitle}</h4>
                                                    <p>{item.introDetail}                                                   </p>
                                                </div>
                                            </div>
                                            <div className="card-info">
                                                <h3>{item.title}</h3>
                                                <h4>活動日期 :{item.startTime}</h4>
                                                <h4>主講者:{item.host}</h4>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                        <a href="./lecture.html" className="btn btn-black">了解更多</a>
                    </div>
                </section>
            </>
        )
    }
}
