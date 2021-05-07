import React, { Component } from 'react'
import './index.scss'

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.Data,
            author: true,
            content: false,
            table: false,
        };
    }
    viewAuthor = () => {
        this.setState({
            author: true,
            content: false,
            table: false,
        })
    }
    viewContent = () => {
        this.setState({
            author: false,
            content: true,
            table: false,
        })
    }
    viewTable = () => {
        this.setState({
            author: false,
            content: false,
            table: true,
        })
    }
    render() {

        return (
            <>
                <section className="book-content container">
                    <ul className="intro-tab">
                        <li onClick={this.viewAuthor} className={this.state.author ? "intro-title active" : "intro-title"}>作者介紹</li>
                        <li onClick={this.viewContent} className={this.state.content ? "intro-title active" : "intro-title"} > 內容簡介</li>
                        <li onClick={this.viewTable} className={this.state.table ? "intro-title active" : "intro-title"}>目錄</li>
                    </ul>
                    <div className="tab-view">
                        <p className={this.state.author ? "intro-content active" : "intro-content"}>
                            {this.state.data.arthurIntro}
                        </p>
                        <p className={this.state.content ? "intro-content active" : "intro-content"}>
                            {this.state.data.contact}
                        </p>
                        <p className={this.state.table ? "intro-content active" : "intro-content"}>
                            {this.state.data.table}
                        </p>
                    </div>
                </section>
            </>
        )
    }
}
