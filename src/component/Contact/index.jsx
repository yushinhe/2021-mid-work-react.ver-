import React, { Component } from 'react'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiFillClockCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { FaLine } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import Title from '../Title'
import './index.css'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            formList: [
                {
                    type: 'text',
                    id: 'name',
                    lab: '姓名'
                },
                {
                    type: 'text',
                    id: 'email',
                    lab: '電子信箱'
                },
                {
                    type: 'text',
                    id: 'title',
                    lab: '標題'
                },
            ],
            info: [
                {
                    icons: <FaMapMarkerAlt />,
                    variety: '地址',
                    info: '桃園市中壢區復興路46號'
                }, {
                    icons: <AiOutlinePhone />,
                    variety: '電話',
                    info: '03-425-1108'
                }, {
                    icons: <AiFillClockCircle />,
                    variety: '營業時間',
                    info: '10 : 30 - 22 : 30'
                }
            ]
        }
    }
    render() {
        return (
            <>
                <section className="contact">
                    <div className="container">
                        <Title title={'聯絡我們'} />
                        <div className="d-flex info-and-form">
                            <div className="info-group">
                                <h3>聯絡方式</h3>
                                {
                                    this.state.info.map((item, index) => {
                                        return (
                                            <div className="info">
                                                <h4>{item.icons}&nbsp;{item.variety}</h4>
                                                <p>{item.info}</p>
                                            </div>
                                        )
                                    })
                                }
                                <div className="d-flex ">
                                    <FaFacebook className="icon" />
                                    <FaLine className="icon" />
                                    <FaInstagram className="icon" />
                                </div>
                            </div>
                            <form action="">
                                {
                                    this.state.formList.map((item, index) => {
                                        return (
                                            <div className="form-action">
                                                <input type="{item.type}" id="{item.id}" required />
                                                <label for="{item.id}">{item.lab}</label>
                                            </div>
                                        )
                                    })
                                }
                                <div className="form-action">
                                    <textarea name="" id="opinion" cols="30" rows="10" required></textarea>
                                    <label for="opinion">意見</label>
                                </div>
                                <button className="btn btn-black" type="submit">送出</button>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
