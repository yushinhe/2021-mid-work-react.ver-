import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation, Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import './index.scss';

import Data from '../bookdata'
import Title from '../Title'
SwiperCore.use([Autoplay,Navigation]);

function imgSwipper() {
    return (
        <>
            <section class="maybe">
                <div class="container">
                    <Title title={'相關好書'} />
                    <Swiper breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        }
                    }} loop={true} loopFillGroupWithBlank={true}  navigation={true} autoplay={{ speed: 600 }}>
                        {Data.map((i, index) => {
                            return <SwiperSlide key={i.id}><img src={i.img} />  <div class="info">
                                <h4>{i.name}</h4>
                                <h4>定價：{i.price}元</h4>
                            </div>
                            </SwiperSlide>;
                        })}
                    </Swiper>
                </div>
            </section>
        </>

    );
};

export default imgSwipper;