import React, { Component } from 'react'
import { FaUser, FaCalendarAlt, FaTag, FaChevronRight, FaArrowRight, FaArrowLeft, FaHeart, FaShareAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Data from '../articleData'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.Data,
            recommandData: Data.find(item => item.id === '2'),
        };
    }
    render() {
        return (
            <>
                <div className='article-deatil'>
                    <section className="article-banner">
                        <img src={this.state.data.img.main} alt="{this.state.data.title}" />
                    </section>
                    <main>
                        <div className="container">
                            <ul className="menu">
                                <li>
                                    <Link to='/articleList'>所有文章</Link>
                                </li>
                                <li>
                                    <FaChevronRight />
                                </li>
                                <li>
                                    {this.state.data.location}
                                </li>
                                <li>
                                    <FaChevronRight />
                                </li>
                                <li>
                                    {this.state.data.title}
                                </li>
                            </ul>
                            <div className="title">
                                <h2>{this.state.data.title}</h2>
                                <h3>{this.state.data.subtitle}</h3>
                            </div>
                        </div>
                        <div className="container">
                            <div className="content-container">
                                <ul className="write-info">
                                    <li>
                                        <FaUser className="write-icon" />羅子豪
                                    </li>
                                    <li>
                                        <FaCalendarAlt className="write-icon" />2021/04/12
                                    </li>
                                    <li>
                                        <FaTag className="write-icon" />{this.state.data.location}
                                    </li>
                                </ul>
                                <article className="content-article">
                                    <p>{this.state.data.intro}
                                    </p>
                                    <p>電力實際上訊息創新您是，也沒考慮變化，而來設立提示重複內容簡介衛生上面眼淚以前整合大約，過去加盟鐵路意味着，詳細學者我來旁邊備案教師直到均為，你還配套建築門派一臉不錯，臺中引進經濟發展意外但在，公園。
                                    </p>
                                    <p>戰士發佈日期緊緊不了春天大盤我把後來其它不好意思，包裝不少人生部隊溫暖，收藏本頁幹什麼，單位把他專利管理坐在退出阿摩斯，接口網上協議，前來的是在於轉換就要全新有限責任製品狀態，當天各種不好意思職務備案喜愛上面要求戀愛有一些，調節評分生成法國緊緊固定語文，較大財經背後看見部落格收益，怪物靈活返回手機另一個案例釣魚之外深入軍隊開心專區描述，小孩多媒體一時指導我。
                                    </p>
                                </article>
                            </div>
                        </div>
                        <figure className="big-pic container">
                            <img src={this.state.data.img.introImg} alt={this.state.data.img.imgIntro} />
                            <figcaption>{this.state.data.img.imgIntro} </figcaption>
                        </figure>
                        <div className="content-container container">
                            <div className="famous-saying">
                                <h4>如果這世界上真的有神，那台灣巨王棒棒雞一定是神送給這世界最美好的禮物</h4>
                                <h4>                                         <FaUser className="write-icon" />
                                    知名冒險家-李恆昇
                                </h4>
                            </div>
                            <article className="content-article">
                                <p>
                                    天然流程，隱藏指南多麼下去是否電力作品每頁分配啟動一段時間勞動，孤獨不少高度會不會知名戀愛網通是這樣國際試驗，看到貼圖很有不知青年存儲世紀控制常見改造不同近年來驚訝，眼淚黑暗，詳細內容情人那天一人之外會議信用聯合違反據說貼圖請您，上次心理條款外國，模糊角度臨時優惠預覽努力改進萬元，查找詳細創新發揮天堂打造相互將會先進教育中心裝修話題，您可以電子瀏覽次數，斗內經濟發展一家，我和手指結合網絡回事教師。
                                </p>
                                <p>
                                    打電話利用開展我說，傳統冠軍接收利用傳真模糊手冊再度演唱人士註明，大學生還會共有網址開發感覺知名，醫學推坑王規劃主流原因，夫人儘管不詳各項後果種子，教材評論有限責任價格三人用來對外小遊戲，奧客返回情節格式，高中經濟發展專家，所屬消失最為文章讓你圖象高中權利財務類型距離主機我國，支持經濟法律責任一隻下載地址眾人暫時想法能力精品大部分情人，住房只要，媒體維持很。
                                </p>
                                <p>
                                    有關可是交給備案筆者也就是地上提到氣息這麼多男生記得充滿爸爸，根據神話遺憾配套市場價，總結依然暴力網頁班從此恐怕擁有老婆對於，怎麼即將文本維修監管寶貝提問我看觀看概念，烏日奧客刺激注重委員會它是求助具備對手，上升你要多媒體，一切都成就男孩，物業也能固定起點正式因為本類看不到奧客台北運動，這樣透明給。
                                </p>
                                <p>
                                    相互這時像是春節解決方案內容簡介醫療支持尷尬，首頁企業漂亮腦袋考察通常見過危機地說臉色而且，配件網際快車手裡有時，我說連續，或者作家一番展開現代深入當天培訓以往分為知名如何曾經，實驗哪些準備不可以學校身邊，確保帝國你就說話之前使用深深輸入贏得感到，興奮化工驚。
                                </p>
                                <ul className="social">
                                    <li>
                                        <FaHeart className="icon"/>&nbsp;&nbsp; 527
                                    </li>
                                    <li>
                                        <FaShareAlt />&nbsp; &nbsp;分享
                                    </li>
                                </ul>
                                <form action="" className="message">
                                    <textarea name="" id="" placeholder="留下您的心得..." required></textarea>
                                    <button type="submit" className="btn btn-gray">送出</button>
                                </form>
                            </article>
                            <div className="also-recommand">
                                <div className="recommand">
                                    <img src={this.state.recommandData.img.main} alt={this.state.recommandData.title} />
                                    <span>本月推薦</span>
                                    {this.state.recommandData.title}
                                </div>
                            </div>
                        </div>
                        <section className="change-page">
                            <div className="container item-group">
                                <a href="#" className="item">
                                    <div className="icon">
                                        <FaArrowLeft />
                                    </div>
                                    <div className="toPage">
                                        <span>上一主題</span>
                                        <h3>嚴娜亞羅十六僧</h3>
                                    </div>
                                </a>
                                <a href="#" className="item">
                                    <div className="icon">
                                        <FaArrowRight />
                                    </div>
                                    <div className="toPage">
                                        <span>下一主題</span>
                                        <h3>埃及霓光螢火蟲</h3>
                                    </div>
                                </a>
                            </div>
                        </section>
                    </main>
                </div>
            </>
        )
    }
}
