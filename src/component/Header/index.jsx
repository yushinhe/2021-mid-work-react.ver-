import React, { Component } from 'react'
import './index.scss';
import { RiAccountCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';
export default class index extends Component {
    state = {
        isOpen: false
    }
    handeleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <>
                <header className="main-header">
                    <nav className="main-nav container">
                        <Link to="/">
                            <h1>太公望書林</h1>
                        </Link>
                        <ul className="d-flex align-items-center nav-menu">
                            <li><Link to="./product-list">來讀書吧</Link></li>
                            <li><a href="./lecture.html">演講活動</a></li>
                            <li><a href="./knowledge.html">好文分享</a></li>
                            <li class="list-unstyled" id="to-log"><RiAccountCircleLine className="account-logo" /></li>
                        </ul>
                        <div onClick={this.handeleToggle} className={this.state.isOpen ? "menu-btn active" : "menu-btn"}>
                            <div className="menu-btn-burger"></div>
                        </div>
                        <ul className={this.state.isOpen ? "sub-menu active" : "sub-menu"}>
                            <li><Link to="./product-list">來讀書吧</Link></li>
                            <li><a href="./lecture.html">演講活動</a></li>
                            <li><a href="./knowledge.html">好文分享</a></li>
                        </ul>
                    </nav>
                </header >
            </>
        )
    }
}