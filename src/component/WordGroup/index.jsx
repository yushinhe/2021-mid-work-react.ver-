import React, { Component } from 'react'
import Data from '../articleData'
import {Link} from 'react-router-dom'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [...Data],
            all: true,
            taiwan: false,
            asia: false,
            world: false
        }
    }
    totalType = () => {
        let filterArticle;
        filterArticle = [...Data]
        this.setState({
            data: filterArticle,
            all: true,
            taiwan: false,
            asia: false,
            world: false
        })
    }
    taiwanType = () => {
        let filterArticle;
        filterArticle = [...Data].filter(article => article.location === '台灣知識')
        this.setState({
            data: filterArticle,
            all: false,
            taiwan: true,
            asia: false,
            world: false
        })
    }
    asiaType = () => {
        let filterArticle;
        filterArticle = [...Data].filter(article => article.location === '東亞知識')
        this.setState({
            data: filterArticle,
            all: false,
            taiwan: false,
            asia: true,
            world: false
        })
    }
    worldType = () => {
        let filterArticle;
        filterArticle = [...Data].filter(article => article.location === '世界知識')
        this.setState({
            data: filterArticle,
            all: false,
            taiwan: false,
            asia: false,
            world: true
        })
    }
    render() {
        console.log(this.state.data);
        return (
            <>
                <ul class="word-menu">
                    <li onClick={this.totalType} className={this.state.all?"active":""}>所有文章<div className="bg"></div></li>
                    <li onClick={this.taiwanType} className={this.state.taiwan?"active":""} >台灣知識<div className="bg"></div></li>
                    <li onClick={this.asiaType}  className={this.state.asia?"active":""}>東亞知識<div className="bg"></div></li>
                    <li onClick={this.worldType} className={this.state.world?"active":""} >世界知識<div className="bg"></div> </li>
                </ul>
                <div className="word">
                    {
                        this.state.data.map((item, index) => {
                            return (
                                <>
                                    <div key={item.id} className="item">
                                        <img src={item.img.main} alt="" />
                                        <div className="intro">
                                            <h3>{item.title}</h3>
                                            <p>{item.intro}
                                            </p>
                                            <Link to={`/article/${item.id}`} className="btn btn-blue">了解更多</Link>
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
