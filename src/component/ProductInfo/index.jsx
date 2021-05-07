import React from 'react'
import './index.scss'
export default function index({ Data }) {
    return (
        <div>
            <section className="product-info">
                <div className="container grid">
                    <div className="img-group">
                        <img src={Data.img} id="main-img" alt="" />                    
                    </div>
                    <div className="info-group">
                        <h2>{Data.name}</h2>
                        <h3>作者:{Data.arthur}</h3>
                        <h4>出版社:{Data.publing}</h4>
                        <h4>ISBN:9789865080815</h4>
                        <h4>出版日期:{Data.publingDate}</h4>
                        <h4>語言:繁體中文</h4>
                        <h4>類別:{Data.type}</h4>
                        <div className="amount">
                            <h4>目前庫存<span>{Data.quantity}</span>本</h4>
                            <div className="amountCount">
                                <button id="subtraction">-</button>
                                <input type='number' min="1" max="{Data.quantity}" value='1' name="" id="amount" />
                                <button id="plus">+</button>
                            </div>
                        </div>
                        <div className="price-buy">
                            <h3 className="price">${Data.price}</h3>
                            <div className="like"><i className="far fa-heart"></i> 加入收藏</div>
                            <div className="btn btn-red"><i className="fas fa-shopping-cart"></i> 加入購物車</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
