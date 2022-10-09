import React, { useState } from 'react';
import './Recommended.css';
import R1 from '../../../assets/recommend1.jpeg';
import R2 from '../../../assets/recommend2.jpeg';
import R3 from '../../../assets/recommend3.jpeg';
import R4 from '../../../assets/recommend4.webp';
import R5 from '../../../assets/recommend5.jpeg';
import R6 from '../../../assets/recommend6.jpeg';
import Chart1 from '../../../assets/chart1.webp';
import Chart2 from '../../../assets/chart2.webp';
import Chart3 from '../../../assets/chart3.webp';
import Chart4 from '../../../assets/chart4.webp';
import Chart5 from '../../../assets/chart5.webp';
import Chart6 from '../../../assets/chart6.webp';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Navigation } from "swiper";

const data = [
    {
        id:1,
        img: Chart1,
        img2: R1,
        title: 'Save the puppy: Pet dog rescue',
        text: 'Puzzle',
        rating: 3.4
      },
      {
        id:2,
        img: Chart2,
        img2: R2,
        title: 'Ludo King™',
        text: 'Board',
        rating: 4.2
      },
      {
        id:3,
        img: Chart3,
        img2: R3,
        title: 'Doge Rescue: Draw To Save',
        text: 'Puzzle',
        rating: 4.1
      },
      {
        id:4,
        img: Chart4,
        img2: R4,
        title: 'Gangster Crime, Mafia City',
        text: 'Action',
        rating: 3.9
      },
      {
        id:5,
        img: Chart5,
        img2: R5,
        title: 'Carrom Pool: Disc Game',
        text: 'Sports',
        rating: 4.2
      },
      {
        id:6,
        img: Chart6,
        img2: R6,
        title: 'Snake Lite - Snake Game',
        text: 'Action',
        rating: 4.2
      }
]

export default function Recommended(props) {

   const [swiper , setSwiper] = useState(false);

  return (
    <section id="recommended">
        <header className="recommended-header">
            <div className="recommended-text">
                <span>{props.title}</span>
            </div>
        </header>
        <div id="r-section" onMouseEnter={e => {setSwiper(true)}} onMouseLeave={e => {setSwiper(false)}} className={swiper ? "showSwiper" : "hideSwiper"}>
            <div className="recommended-container">
                <Swiper slidesPerView={"auto"}
                mousewheel={true}
                navigation={true}
                cssMode={true}
                modules={[Mousewheel, Navigation]} className="r-container">
                    {
                        data.map(({id,img,img2,title,text,rating}) => {
                            return(
                                <SwiperSlide key={id} className="r-list">
                                    <div className="r-box">
                                        <div className="r-content">
                                            <a href="#">
                                                <div className="r-image">
                                                    <img src={img2}/>
                                                    {/* <div className="playbutton"></div> */}
                                                </div>
                                                <div className="r-description">
                                                    <img src={img}/>
                                                    <div className="r-texts">
                                                        <div className="r-text">
                                                            <span className="r-title">
                                                                {title}
                                                            </span>
                                                        </div>
                                                        <div className="r-text">
                                                            <span className="r-desc">
                                                                {text}
                                                            </span>
                                                        </div>
                                                        <div className="r-text">
                                                            <span className="r-rate">
                                                                <span className="ratee">{rating}</span>
                                                                <span className="r-star">
                                                                    <i class="material-icons">star</i>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    </section>
  )
}
