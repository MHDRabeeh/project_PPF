import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../assets/Sport car coupe silhouette.jpeg'

// Import Swiper styles
import 'swiper/css';
export const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className='w-full lg:h-[600px]'
      >
        {
          [1, 2, 2, 2].map((i) => (
            <SwiperSlide key={i}>
              <img src={banner} className='w-full h-full' alt="" />
            </SwiperSlide>
          ))
        }


     
      </Swiper>
    </div>
  )
}


