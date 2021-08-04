import React, { useEffect } from 'react'
import './index.scss'
import { gsap } from "gsap"

export default function Index() {
    useEffect(() => {
        const tl = gsap.timeline({ default: { ease: "power1.out" } })
        tl.to("#intro .txt", { y: "0%", opacity: 1, duration: 1, stagger: .25 })
        tl.to('#slider', { y: "-100%", opacity: 1, duration: 1, delay: 0.5 })
        tl.to('#intro', { y: "-100%", duration: 1 }, "-=1")
    }, [])
    return (
        <>
            <div id="intro">
                <div className="intro-txt">
                    <h3 className="hide">
                        <span className="txt">
                            人的成長就是戰勝過去
                        </span>
                    </h3>
                    <h3 className="hide">
                        <span className="txt">
                            不成熟的自己
                        </span>
                    </h3>
                    <h3 className="hide">
                        <span className="txt">
                            —迪亞布羅
                        </span>
                    </h3>
                </div>
            </div>

            <div id="slider"></div>
        </>
    )
}
