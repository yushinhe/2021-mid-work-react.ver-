import React, { Component } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import './index.scss'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.Data,
            num: 1,
            collection: false,
        };
    }
    plus = () => {
        if (this.state.num < this.state.data.quantity) {
            this.setState({
                num: this.state.num + 1
            })
        } else {
            alert('達到上限了歐')
        }
    }
    toggleCollection = () => {
        this.setState({
            collection: !this.state.collection
        })
    }
    minus = () => {
        if (this.state.num > 2) {
            this.setState({
                num: this.state.num - 1
            })
        } else {
            alert('不能再減了歐')
        }
    }
    render() {
        console.log(this.state.data.img);
        return (
            <>
                <section className="product-info">
                    <div className="container grid">
                        <div className="img-group">
                            <img src={this.state.data.img} id="main-img" alt="" />
                        </div>
                        <div className="info-group">
                            <h2>{this.state.data.name}</h2>
                            <h3>作者:{this.state.data.arthur}</h3>
                            <h4>出版社:{this.state.data.publing}</h4>
                            <h4>ISBN:{this.state.data.isbn}</h4>
                            <h4>出版日期:{this.state.data.publingDate}</h4>
                            <h4>語言:繁體中文</h4>
                            <h4>類別:{this.state.data.type}</h4>
                            <div className="amount">
                                <h4>目前庫存<span>{this.state.data.quantity}</span>本</h4>
                                <div className="amountCount">
                                    <button onClick={this.minus}>-</button>
                                    <input type='number' min="1" max="{this.state.data.quantity}" value={this.state.num} name="" id="amount" />
                                    <button onClick={this.plus}>+</button>
                                </div>
                            </div>
                            <div className="price-buy">
                                <h3 className="price">${this.state.data.price}</h3>
                                <div onClick={this.toggleCollection} className="like"><FaHeart /> {this.state.collection?'已加入收藏':'加入收藏'}</div>
                                <div className="btn btn-red"><FaShoppingCart /> 加入購物車</div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
