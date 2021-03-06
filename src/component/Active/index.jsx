import React, { Component } from 'react'
import Data from '../activedata';
import Title from '../Title'
import {Link} from 'react-router-dom'
import './index.scss'
export default class index extends Component {
    render() {
        let recommandActive = Data.filter((e) => e.recommand === true)
        return (
            <>
                <section className="activity">
                    <div className="container">
                        <Title title={"近期演講"}/>
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
                        <Link to="./lecture" className="btn btn-black">了解更多</Link>
                    </div>
                </section>
            </>
        )
    }
}
