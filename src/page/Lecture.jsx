import React from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/lecture-bg.jpg'
import styled from 'styled-components'
import Title from '../component/Title'
import LectureRecent from '../component/LectureRecent'
import Data from '../component/activedata'
import Pagination from '../component/Pagination'
import Footer from '../component/Footer'
export default function ProductList() {
    const ProductList = styled.div`   
    max-width: 1320px;
    margin   : 60px auto 0;
    @media screen and(max - width: 1200px) {
            max-width: 1140px;
            padding: 0 10px;
    }
     @media screen and(max - width: 992px) {   
            max - width: 960px;     
    }
    @media screen and (max-width:768px) {      
            max - width: 720px;
    }`
    const Lecture = styled.article`  
        padding-top: 60px;    
    `
    return (
        <>
            <Banner BgImg={Bg} title={'近期演講'}></Banner>
            <ProductList >
                <Lecture>
                    <div className="container">
                        <Title title={'近期演講'} />
                        {Data.map((item, id) => {
                            return (
                                <LectureRecent key={item.id} host={item.host} year={item.year} date={item.date} title={item.title} introDetail={item.introDetail} startTime={item.startTime} location={item.location} price={item.price} img={item.img} />
                            )
                        })}
                    </div>
                </Lecture >
            </ProductList>
            <Pagination />
            <Footer />
        </>
    )
}