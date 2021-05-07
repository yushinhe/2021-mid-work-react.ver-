import React, { Component } from 'react'
import './index.scss'
import Data from '../articleData'
const getUnique = (item, index) => {
    return [...new Set(item.map(item => item[index]))]
}
export default class index extends Component {
    render() {
        let getList = getUnique(Data, 'location')
        let list = ['所有文章', ...getList]
        return (
            <>
                <ul class="word-menu">
                    {/* <li class="active">所有文章</li>
                    <li>台灣知識<div class="bg"></div>
                    </li>
                    <li>東亞知識<div class="bg"></div>
                    </li>
                    <li>世界知識<div class="bg"></div> </li> */}
                    {
                        list.map((item, index) => {
                            return (
                                <li className="active" key={index}>{item}</li>
                            )
                        })
                    }

                </ul>
            </>
        )
    }
}
