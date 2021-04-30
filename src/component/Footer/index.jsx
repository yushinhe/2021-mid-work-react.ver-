import React, { Component } from 'react'
import './index.css'

export default class index extends Component {
    render() {
        return (
            <>
                <footer className="main-footer">
                    <ul>
                        <li><a href="./about.html">關於我們</a></li>
                        <li><a href="./answer.html">常見問題</a></li>
                        <li><a href="#">聯絡我們</a></li>
                    </ul>
                    <p>© 太公望書林 , All Rights Reserved
                    </p>
                </footer>
            </>
        )
    }
}
