import React from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/test.png'
import SideBar from '../component/Sidebar'
import styled from 'styled-components'
import Pagination from '../component/Pagination'
import Footer from '../component/Footer'
export default function ProductList() {
    const ProductList = styled.div`
    display              : grid;
    grid-template-columns: 2fr 7fr;   
    max-width: 1320px;
    margin   : 60px auto 0;
    @media screen and(max-width: 1200px) {
            max-width: 1140px;
            padding: 0 10px;
    }
     @media screen and (max-width: 992px) {   
         grid-template-columns: 1fr;    
         max -width: 960px;  
         padding: 0 10px;

    }
    @media screen and (max-width:768px) {   
        grid-template-columns: 1fr;    
            max-width: 720px;
            padding: 0 10px;
    }`
    return (
        <>

            <Banner BgImg={Bg} title={'來讀書吧'}></Banner>
            <ProductList>
                <SideBar />
            </ProductList>
            <Pagination />
            <Footer />
        </>
    )
}