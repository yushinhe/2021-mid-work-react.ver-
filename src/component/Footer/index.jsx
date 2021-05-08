import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './index.scss'

export default class index extends Component {
    render() {
        return (
            <>
                <footer className="main-footer">
                    <ul>
                        <li><Link className='link' to='/about'>關於我們</Link></li>
                        <li><Link className='link' to='/answer'>常見問題</Link></li>
                        <li><Link className='link' to='/about'>聯絡我們</Link></li>
                    </ul>
                    <p>© 太公望書林 , All Rights Reserved
                    </p>
                </footer>
            </>
        )
    }
}
