import React from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/pyramids-2371501_1920.jpg'
export default function Error() {
    return (
        <>
            <Banner BgImg={Bg} title={'此頁不存在'}></Banner>
        </>
    )
}
