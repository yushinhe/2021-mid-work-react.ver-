import React, { Component } from 'react'
import Data from '../historyData'
import Title from '../Title'
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <>
                <section className="history">
                    <div className="container">
                        <Title title={'發展歷史'}></Title>
                        <ul className="timeline">
                            {

                                Data.map((item, id) => {
                                    return (
                                        <li key={item.id}>
                                            <div className="time">
                                                <div className="year">
                                                    <h3>{item.year}</h3>
                                                </div>
                                                {item.subtitle === false ? '' : <h3 class="year-thing">太公望書林成立</h3>}
                                            </div>
                                            <div class="things">
                                                <div className="intro">
                                                    <p>
                                                        {item.detail}
                                                    </p>
                                                    {item.img === false ? '' : <img src={item.img} />}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}
