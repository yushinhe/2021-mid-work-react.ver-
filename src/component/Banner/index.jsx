import React, { useEffect } from 'react'
import styled from 'styled-components'
import { gsap } from "gsap"
import Title from "../Title"
export default function Index({ title, BgImg }) {
    const Banner = styled.section`
    display        : flex;
    justify-content: center;
    align-items    : center;
    position       : relative;
    overflow       : hidden;
    width          : 100%;
    height         : 540px;
    padding        : 0;
    background: url(${props => props.images}) center/cover no-repeat; 
    background-size: cover;
    @media screen and (max-width:768px) {
        background-position: 30% 30%;
    }   
    `
    const Bg = styled.div`
    position       : absolute;
    top            : 0;
    left           : 0;
    width          : 100%;
    height         : 100%;
    background: url(${props => props.images}) center/cover no-repeat; 
    filter         : blur(5px);
    background-size: cover;
    @media screen and (max-width:768px) {
       background-position: 30% 30%;
    }  
    `
    const Heading = styled.h2`  
    text-shadow   : 0px 0px 5px #000;
    color         : white;
    font-size     : 80px;
    letter-spacing: .5em;
    font-weight   : 600;
    @media screen and (max-width:768px) {  
        font-size: 48px; 
    }
   `
    useEffect(() => {
        const tl = gsap.timeline({ default: { ease: "power1.out" } })
        tl.to('#bg', { x: "100%", duration: 1, delay:2.5})
        tl.from('#title', { y: "50px", opacity: 0, duration: 1, stagger: .25 })
    }, [])
    return (
        <>
            <Banner images={BgImg}>
                <Bg id="bg" images={BgImg}></Bg>
                <Heading id="title">{title}</Heading>
            </Banner>
        </>
    )

}
