import React, { Component } from 'react'
import Data from '../articleData'
import './index.scss'
export default class index extends Component {
    render() {
        return (
            <>
                <div className="word">
                    {
                        Data.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className="item">
                                        <img src={item.img.main} alt="" />
                                        <div className="intro">
                                            <h3>{item.title}</h3>
                                            <p>{item.intro}
                                            </p>
                                            <a href="./article.html" className="btn btn-blue">了解更多</a>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }


                </div>
            </>
        )
    }
}
