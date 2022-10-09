import React, { useState } from 'react';
import './Adsection.css';
import Ad1 from '../../../assets/google-ads-image.jpeg';
import Ad2 from '../../../assets/google-ads-image-2.jpeg';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Mousewheel, Navigation } from "swiper";

export default function Adsection() {
    const [swiper , setSwiper] = useState(false);
    // var self = useRef(null);
    // // console.log(this.swipe.style);
    // useEffect(() => {
    //     self.current.style[0].unuse();
    // });

  return (
    <div id="adSection" onMouseEnter={e => {setSwiper(true)}} onMouseLeave={e => {setSwiper(false)}} className={swiper ? "showSwiper" : "hideSwiper"}>
        <Swiper slidesPerView={"auto"}
        mousewheel={true}
        navigation={true}
        cssMode={true}
        modules={[Mousewheel, Navigation]} className="my-swiper ad-container">
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-first">
                    <div className="ad-image-block">
                        <img src={Ad2} className="image-first"></img>
                        <div className="blur-image-1"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-second">
                    <div className="ad-image-block">
                        <img src={Ad1} className="image-second"></img>
                        <div className="blur-image-2"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-first">
                    <div className="ad-image-block">
                        <img src={Ad2} className="image-first"></img>
                        <div className="blur-image-1"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-second">
                    <div className="ad-image-block">
                        <img src={Ad1} className="image-second"></img>
                        <div className="blur-image-2"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-first">
                    <div className="ad-image-block">
                        <img src={Ad2} className="image-first"></img>
                        <div className="blur-image-1"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-second">
                    <div className="ad-image-block">
                        <img src={Ad1} className="image-second"></img>
                        <div className="blur-image-2"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
            <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-first">
                    <div className="ad-image-block">
                        <img src={Ad2} className="image-first"></img>
                        <div className="blur-image-1"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
        <SwiperSlide><div className="ad-container-block">
            <div className="ad-box">
                <a href="#" className="ad-second">
                    <div className="ad-image-block">
                        <img src={Ad1} className="image-second"></img>
                        <div className="blur-image-2"></div>
                    </div>
                    <div className="ad-block">
                        <div className="ad-text">
                            <div class="ad-promo-text" aria-hidden="true">Enjoy 50% off the Rocker guitar</div>
                            <div class="ad-promo-text2">Diwali deal days</div>
                        </div>
                    </div>
                </a>
            </div>
        </div></SwiperSlide>
        </Swiper>
    </div>
  )
}
