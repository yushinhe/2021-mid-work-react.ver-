import React, { Component } from 'react'
import './index.css'
import titleIcon1 from '../../img/main-img/idea.png'
import titleIcon2 from '../../img/main-img/open-book.png'
import titleIcon3 from '../../img/main-img/presentation.png'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            service: [
                {
                    title: '知識補給',
                    intro: [
                        // '民明丸至世界各地考察後記載的成果',
                        '世界各地的奇風異俗',
                        '鮮為人知的知識',
                        '絕對能豐富你的視野',
                    ],
                    icon: titleIcon1,
                },
                {
                    title: '來買書吧',
                    intro: [
                        '包含了大量優質的書籍',
                        '人文、社會、史地的書籍都有',
                        '絕對能豐富你的心靈',
                    ],
                    icon: titleIcon2,
                },
                {
                    title: '活動講座',
                    intro: [
                        // '古今中外的講題都有',
                        '人文、社會、史地的主題兼具',
                        '有許多優秀的講者',
                        '對能豐富你的見聞'
                    ],
                    icon: titleIcon3,
                },
            ]
        }

    }
    render() {

        return (
            <>
                <section class="service">
                    <div class="container item-group">
                        {this.state.service.map((item, index) => {
                            return (
                                <>
                                    <div className="item">
                                        <div className="title">
                                            <img src={item.icon} alt="" />
                                            <h3>{item.title}</h3>
                                        </div>
                                        <ul>
                                            <li>{item.intro[0]}</li>
                                            <li>{item.intro[1]}</li>
                                            <li>{item.intro[2]}</li>
                                        </ul>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </section>
            </>
        )
    }
}
