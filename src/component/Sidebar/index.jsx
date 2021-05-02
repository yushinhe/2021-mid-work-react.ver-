import React, { Component } from 'react'
import './index.scss'
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: [
                {
                    type: "歷史書籍",
                    labelFor: "history",
                },
                {
                    type: "哲學書籍",
                    labelFor: "philosophy",
                },
                {
                    type: "當代思潮",
                    labelFor: "contemporary",
                },
            ]
        }
    }
    render() {
        return (
            <>
                <aside>
                    <div className="sidebar">
                        <h3>類型篩選</h3>
                        <div className="form-group">
                            {
                                this.state.type.map((item, id) => {
                                    return (
                                        <div className="form-check" key={id}>
                                            <input type="checkbox" name={item.labelFor} id={item.labelFor} />
                                            <label htmlFor={item.labelFor} >{item.type}</label>
                                        </div>
                                    )
                                })
                            }
                            <div className="form-check">
                                <label htmlFor="sort">room price sort</label>
                                <select name="sort" id="sort"  className="form-select" >
                                    <option value='desc' >desc</option>
                                    <option value='asc' >asc</option>
                                </select>
                            </div>
                            <div className="form-check">
                                <label htmlFor="price">room price </label>
                                <input type="range" name="price" id="price"/>
                            </div>
                        </div>
                    </div>
                </aside>
            </>
        )
    }
}
