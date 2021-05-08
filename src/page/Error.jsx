import React from 'react'
import Banner from '../component/Banner'
import Bg from '../img/main-img/pyramids-2371501_1920.jpg'
import TransformAnimation from '../component/TransformAnimation'

export default function Error() {
    return (
        <>
            <TransformAnimation />
            <Banner BgImg={Bg} title={'此頁不存在'}></Banner>
        </>
    )
}
