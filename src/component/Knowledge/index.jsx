import React, { Component } from 'react'
import img1 from '../../img/main-img/eagle.png'
import './index.scss'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Title from '../Title'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '台灣巨王棒棒雞',
            info: '棲息在台灣中部阿里山山岳地帶的鷹科巨鳥，就如同牠的名字一般是最大級的鳥類，兩翼伸展開來約有四公尺長，現在已瀕臨絕種，被稱為是夢幻中的鳥。附帶一提，在大清帝國統治時代，這種巨鳥經常被運用在軍事、運送方面，因此現在台灣到處可見印有此鳥圖樣的快遞車輛，就是為了紀念這種鳥類。',
            infofrom: '摘自民明書房發行的「世界的怪鳥、奇鳥」'
        }
    }
    render() {
        return (
            <>
                <section className="knowledge">
                    <div className="container">
                        <Title title={'知識補給'}></Title>
                        <div className="grid">
                            <img src={img1} alt="" />
                            <div className="intro">
                                <h3>{this.state.title}</h3>
                                <p>{this.state.info}</p>
                                <h4>{this.state.infofrom}</h4>
                                <Link href="/articleList" className="btn btn-black">尋找更多知識 &nbsp; <FaChevronRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
