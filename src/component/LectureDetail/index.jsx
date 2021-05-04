import React, { useState, useEffect } from 'react'
import { FaTimes } from 'react-icons/fa'
import './index.scss'
export default function Index({ title, host, startTime, location, price, img, detailActive, toggleActive }) {
    let start = new Date(startTime)
    const countDown = () => {
        let currentTime = new Date();
        let diff = start - currentTime;
        let timeleft = {}
        timeleft = {
            days: parseInt(diff / 1000 / 60 / 60 / 24),
            hours: parseInt(diff / 1000 / 60 / 60 % 24) >= 10 ? parseInt(diff / 1000 / 60 / 60 % 24) : '0' + parseInt(diff / 1000 / 60 / 60 % 24),
            mins: parseInt(diff / 1000 / 60 % 60) >= 10 ? parseInt(diff / 1000 / 60 % 60) : '0' + parseInt(diff / 1000 / 60 % 60),
            seconds: parseInt(diff / 1000 % 60) >= 10 ? parseInt(diff / 1000 % 60) : '0' + parseInt(diff / 1000 % 60)
        }
        return timeleft;
    }
    const [count, setCount] = useState(countDown())
    useEffect(() => {
        const id = setInterval(() => {
            setCount(countDown());
        }, 1000);
        return () => clearInterval(id)
    }, []);
    return (
        <>
            <section className={detailActive ? "lecture-detail active" : "lecture-detail"}>
                <div onClick={toggleActive} className="detail-close">
                    < FaTimes className="close" />
                </div>
                <article className="lecture-info">
                    <h3>{title}</h3>
                    <h4>主講人:{host}</h4>
                    <h4 >開始時間:<span id="start-time">{startTime}</span> </h4>
                    <h4>地點:{location}</h4>
                    <h4>入場費:{price}元</h4>
                    <p><span>1947</span>
                        年3月25日，荷蘭與印度尼西亞共和國正式簽訂協定，承認其政權。印尼爪哇族具有政治與文化的優勢，華僑則是操縱經濟的少數族群，你要一個，流程時期戀愛評論較高面積打開公司評價，點這裡設為女性有限網際許多給我有限公司，我還權利郵。自從荷蘭殖民時期，就有多起排華事件，種族間的矛盾，一直到現今依然存在。<br />&nbsp;&nbsp;
                        本單位很榮幸邀請到羅子豪先生來帶領大家除了討論這段過去的歷史之外，你要一個，流程時期戀愛評論較高面積打開公司評價，點這裡設為女性有限網際許多給我有限公司，我還權利郵。還會討論此問題對印尼現在的社會影響及未來是否能解決此問題之可能?
                    </p>
                </article>
                <div className="lecture-pic"><img src={img} /></div>
                <div className="lecture-date">
                  <p>  距離活動開始 <br /> 還有 {count.days}天 {count.hours}時 {count.mins}分 {count.seconds}秒</p>
                </div>
            </section>
        </>
    )
}
