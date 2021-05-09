import React, { Component } from 'react'
import Data from '../bookdata'
import {Link} from 'react-router-dom'
import { FaTh } from 'react-icons/fa'
import { FaAlignJustify, } from 'react-icons/fa'
import { FiShoppingCart } from 'react-icons/fi'
import './index.scss'
const getUnique = (item, index) => {
    return [...new Set(item.map(item => item[index]))]
}
export default class index extends Component {
    state = {
        data: [...Data],
        toggleActive: false,
    }
    handleToggle = () => {
        this.setState({
            toggleActive: !this.state.toggleActive
        })
    }
    FilterType = () => {
        let sortData = [...Data];
        let type = document.getElementById('type')
        if (type.value !== '全部') {
            sortData = sortData.filter(item => item.type === type.value)
        }
        let sort = document.getElementById('sort')
        if (sort.value === 'asc') {
            sortData = sortData.sort((a, b) => a.price - b.price)
        }
        if (sort.value === 'desc') {
            sortData = sortData.sort((a, b) => b.price - a.price)
        }
        if (sort.value === 'default') {
            sortData = sortData.sort((a, b) => a.id - b.id)
        }
        this.setState({
            data: sortData
        })
    }
    filterByPrice = () => {
        let price = document.getElementById('price')
        let data = [];
        data = Data.filter(room => room.price <= price.value)
        this.setState({
            data: data
        })
    }

    render() {
        console.log(this.state.data);
        let types = getUnique(Data, 'type')
        console.log(this.state.maxPrice);
        console.log(this.state.minPrice);
        types = ['全部', ...types]
        return (
            <>
                <aside>
                    <div className="sidebar">
                        <h3>類型篩選</h3>
                        <div class="form-check">
                            <label htmlFor="type">依種類分類</label>
                            <select name="type" id="type" className="form-select" onChange={this.FilterType}>
                                {types.map((item, index) => {
                                    return (
                                        <option value={item} key={index}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="form-check">
                            <label htmlFor="sort">依價錢排序</label>
                            <select name="sort" id="sort" className="form-select" onChange={this.FilterType} >
                                <option value='default'>預設排序</option>
                                <option value='desc'>價錢由高到低</option>
                                <option value='asc'>價錢由低到高</option>
                            </select>
                        </div>
                    </div>
                </aside>
                <main>
                    <section className="booklist">
                        <div className="wrapper">
                            <div className="toggle">
                                <h3>顯示模式：</h3>
                                <button onClick={this.handleToggle} className={this.state.toggleActive === true ? "toggle-btn" : "toggle-btn active"}><FaAlignJustify></FaAlignJustify></button>
                                <button onClick={this.handleToggle} className={this.state.toggleActive === true ? "toggle-btn active" : "toggle-btn"}><FaTh></FaTh></button>
                            </div>
                            <div className={this.state.toggleActive ? "card-group active" : "card-group"}>
                                {
                                    this.state.data.map((item, index) => {
                                        return (
                                            <div className="card">

                                                <Link to={`/product-detail/${item.id}`} className="product-img">
                                                    <img src={item.img} alt={item.name} />
                                                </Link>
                                                <Link to={`/product-detail/${item.id}`} className="info">
                                                    <h3>{item.name}</h3>
                                                    <div className="detail-info">
                                                        <h4 className="author">作者:{item.arthur}</h4>
                                                        <h4>出版社:{item.publing}</h4>
                                                        <h4>出版日期:{item.publingDate}</h4>
                                                    </div>
                                                </Link>
                                                <div className="toBuy">
                                                    <p className="price"> ${item.price}</p>
                                                    <button className="btn btn-red"><FiShoppingCart className="cart" />加入購物車</button>
                                                </div>

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