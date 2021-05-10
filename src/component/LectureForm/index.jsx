import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './index.scss'
export default function index({ title, startTime, location, price, formActiveToggle, formActive , formSubmit}) {
    
    return (
        <>
            <div class={formActive ? "apply-form active" : "apply-form"}>
                <div class="apply-form-content">
                    <div onClick={formActiveToggle}  class="apply-close">
                        < FaTimes className="close"/>
                    </div>
                    <div className="info">
                        <h3>場次:{title}</h3>
                        <h3>開始時間:{startTime}</h3>
                        <h3>地點:{location}</h3>
                        <h3>入場費:{price}元(到場付款)</h3>
                    </div>
                    <form action="" >
                        <div className="form-action">
                            <input type="text" id="name" required />
                            <label for="name">姓名</label>
                        </div>
                        <div className="form-action">
                            <input type="text" id="email" required />
                            <label htmlfor="email">電子信箱</label>
                        </div>
                        <div className="form-action">
                            <input type="text" id="phone" required />
                            <label htmlfor="phone">電話</label>
                        </div>
                        <div className="form-action">
                            <label htmlfor="person">參加人數</label>
                            <select required>
                                <option id="person" selected>請選擇人數</option>
                                <option value="1">1位</option>
                                <option value="2">2位</option>
                                <option value="3">3位</option>
                            </select>
                        </div>
                        <div className="btn-group">
                            <button onClick={formSubmit} id="submit" type="submit" className="btn btn-blue">送出</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
