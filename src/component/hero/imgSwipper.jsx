import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCoverflow,Autoplay } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import './index.css';
import img1 from '../../img/product-img/book2.png'
import img2 from '../../img/product-img/book3.png'
import img3 from '../../img/product-img/book4.png'
import img4 from '../../img/product-img/book5.png'
import img5 from '../../img/product-img/book6.png'
import img6 from '../../img/product-img/book7.png'

SwiperCore.use([EffectCoverflow, Autoplay]);
let imgArr = [img1, img2, img3, img4, img5, img6]
function imgSwipper() {
  return (
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={
        { rotate: 0 },
        { stretch: 0 },
        { depth: 200 },
        { modifier: 1 },
        { slideShadows: true }
      }
      autoplay={
        { delay: 1000 },
        { speed: 400 }
      }
      loop={true}>
      {imgArr.map((i) => {
        console.log(i);
        return <SwiperSlide key={`slide-${i}`}><img src={i} /></SwiperSlide>;
      })}
    </Swiper>
  );
};

export default imgSwipper;