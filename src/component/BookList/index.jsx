import React, { Component } from 'react'
import './index.scss'
import { FaTh } from 'react-icons/fa'
import { FaAlignJustify } from 'react-icons/fa'
import Data from '../bookdata'
export default class index extends Component {
    state = {
        toggleActive: false
    };
    handleToggle = () => {
        this.setState({
            toggleActive: !this.state.toggleActive
        })

    }
    render() {
        console.log(this.state.toggleActive);
        return (
            <>
                <main>
                    <section className="booklist">
                        <div className="wrapper">
                            <div className="toggle">
                                <h3>顯示模式：</h3>
                                <button onClick={this.handleToggle} className={this.state.toggleActive  === true ? "btn" : "btn active"}><FaAlignJustify></FaAlignJustify></button>
                                <button onClick={this.handleToggle} className={this.state.toggleActive === true ? "btn active" : "btn "}><FaTh></FaTh></button>
                            </div>
                            <div className={this.state.toggleActive ? "card-group active" : "card-group"}>
                                {
                                    Data.map((item, index) => {
                                        return (
                                            <div className="card">
                                                <a href="./product-detail.html" className="product-img">
                                                    <img src={item.img} alt={item.name} />
                                                </a>
                                                <a href="./product-detail.html" className="info">
                                                    <h3>{item.name}</h3>
                                                    <div className="detail-info">
                                                        <h4 className="author">作者:{item.arthur}</h4>
                                                        <h4>出版社:{item.publing}</h4>
                                                        <h4>出版日期:{item.publingDate}</h4>
                                                    </div>
                                                </a>
                                                <div className="toBuy">
                                                    <p className="price"> ${item.price}</p>
                                                    <button className="btn btn-red"><i className="fas fa-shopping-cart"></i> 加入購物車</button>
                                                </div>
                                                <button className="buy"><i className="fas fa-shopping-cart "></i></button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </section>
                </main>
            </>
        )
    }
}
