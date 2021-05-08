import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {

    
    render() {
        return (
            <>
                <article className="answer">
                    <div className="container">
                        <div className="according-group">
                            <div className="according-item close">
                                <h3 className="according-head">訂單成立後多久能拿到書</h3>
                                <div className="according-content">
                                    <p>
                                        若訂購書籍「均有庫存」<br /><br />
                                        1.便利商店：約2~3個工作天(不含假日)可送達。<br />
                                        2.包裹：約2~3個工作天(不含假日)即可送達。<br /><br />
                                        注意：若訂購書籍沒有庫存，出貨時間會因出版社及書籍狀況而異，我們將另行通知，<br />
                                        如須將已備妥的書籍優先出貨，可利用訂單問答紀綠來信，或來電至02-2300-0000 分機 130 、131洽詢。<br /><br /><br />
                                        ※註：「工作天」為不含星期六、日等例假日、國定假日。
                                    </p>
                                </div>
                            </div>
                            <div className="according-item close">
                                <h3 className="according-head"> 沒有庫存的書要等多久</h3>
                                <div className="according-content">
                                    <p>
                                        各家出版社作業時間不一，<br /><br />
                                        一般「繁體書籍」平均採購時間約4~10個工作天。<br />
                                        「政府出版品」平均採購時間約30個工作天；<br />
                                        「香港地區出版品」平均採購時間約45個工作天；<br />
                                        「英文原文書籍」平均採購時間約45~60個工作天；由於新冠肺炎關係影響。<br />
                                        「簡體書籍」平均採購時間約45~60個工作天；由於新冠肺炎關係影響。<br /><br />
                                        ※註： 以上調書採購期不保證確定可調到貨，尚請見諒。<br /><br />
                                        ※註：以上為平均採購期，因書籍採購程序不盡相同，實際採購期仍視供應商而定。　<br /><br /><br /> ※註：「工作天」為不含星期六、日等例假日、國定假日。
                                    </p>
                                </div>
                            </div>
                            <div className="according-item close">
                                <h3 className="according-head"> 可不可以指定書籍版次</h3>
                                <div className="according-content">
                                    <p>
                                        一般我們均提供較新版本書籍給顧客。<br />
                                        然書籍訂購時，仍以供應商提供的書籍出貨， 故無法指定書籍版次。<br />
                                        作業人員核對訂單時，核對書籍上的ISBN碼是否與訂單上相符， 非以書籍是否為最新版本做判別依據，<br />
                                        基本上同一個ISBN碼，無法確定其進貨時的版本為其中那一版的。<br />
                                        若該書前後已印刷多版，且內容差異頗大，廠商會將舊版的書回收不再出貨，顧客即不會拿到舊版書籍。
                                    </p>
                                </div>
                            </div>
                            <div className="according-item close">
                                <h3 className="according-head"> 會開發票嗎？發票可以打統編與抬頭嗎？</h3>
                                <div className="according-content">
                                    <p>
                                        每筆訂單出貨，我們均會開立紙本統一發票，一律隨訂單書籍包裹寄送。<br />
                                        您於訂單結帳畫面，可填寫發票統編與抬頭，如有填寫統編，即會開立發票扣抵聯。
                                    </p>
                                </div>
                            </div>
                            <div className="according-item close">
                                <h3 className="according-head"> 當日宅配的商品可以退貨嗎？</h3>
                                <div className="according-content">
                                    <p>
                                        可以，當日宅配的商品一樣享有七天鑑賞期，如您有退貨需求，可依一般商品退貨流程處理，辦理退貨。
                                    </p>
                                </div>
                            </div>
                            <div className="according-item close">
                                <h3 className="according-head"> 當日宅配的商品可以換貨嗎？</h3>
                                <div className="according-content">
                                    <p>
                                        可以，如您有換貨需求，可依一般商品換貨流程處理，辦理換貨。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </>
        )
    }
}
