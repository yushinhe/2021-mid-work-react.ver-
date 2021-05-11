import React from 'react'
import './index.scss'

export default function index({ Data }) {
    return (
        <div>
            <div class="book-intro container">
                <div class="bg"></div>
                <h3>
                    {Data.slogan}
                </h3>
            </div>
        </div>
    )
}
