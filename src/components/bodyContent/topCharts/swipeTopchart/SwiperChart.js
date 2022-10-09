import React, { useState } from 'react';
import './SwiperChart.css';
import Swiper1 from './Swiper';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Navigation } from "swiper";
  


export default function SwiperChart() {
  const [swiper , setSwiper] = useState(false);

  return (
    <div id="swiperchart" onMouseEnter={e => {setSwiper(true)}} onMouseLeave={e => {setSwiper(false)}} className={swiper ? "showSwiper" : "hideSwiper"}>
      <div className="chart-container">
        {/* <div className="chart-container-content"> */}
          {/* <div className="chart-box"> */}
          <Swiper slidesPerView={"auto"}
            mousewheel={true}
            navigation={true}
            cssMode={true}
            modules={[Mousewheel, Navigation]} className="chart-container-content">
                <SwiperSlide className="chart-box"><Swiper1 id={1}/></SwiperSlide>
                <SwiperSlide className="chart-box"><Swiper1 id={2}/></SwiperSlide>
                <SwiperSlide className="chart-box"><Swiper1 id={3}/></SwiperSlide>
                <SwiperSlide className="chart-box"><Swiper1 id={1}/></SwiperSlide>
                <SwiperSlide className="chart-box"><Swiper1 id={2}/></SwiperSlide>
                <SwiperSlide className="chart-box"><Swiper1 id={3}/></SwiperSlide>
          </Swiper>
            
          {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  )
}


