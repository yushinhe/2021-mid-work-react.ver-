import React, { Component } from 'react'
import Data from '../historyData'
import Title from '../Title'
import './index.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class index extends Component {
    componentDidMount() {
        AOS.init({
            duration: 2000
        })
    }
    state = {
        data: [...Data]
    }
    sortYear = () => {
        let sort = document.getElementById('sort')
        let data = '';
        if (sort.value === 'desc') {
            data = this.state.data.sort((a, b) => b.year - a.year)
        } else {
            data = this.state.data.sort((a, b) => a.year - b.year)
        }
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <>
                <section className="history">
                    <div className="container">
                        <Title title={'發展歷史'}></Title>
                        <select name="" id="sort" onChange={this.sortYear}>
                            <option value="asc">時間 升序</option>
                            <option value="desc">時間 降序</option>
                        </select>
                        <ul className="timeline">
                            {

                                this.state.data.map((item, id) => {
                                    return (
                                        <li key={item.id} data-aos="fade-up">
                                            <div className="time">
                                                <div className="year">
                                                    <h3>{item.year}</h3>
                                                </div>
                                                {item.subtitle === false ? '' : <h3 class="year-thing">{item.subtitle}</h3>}
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
