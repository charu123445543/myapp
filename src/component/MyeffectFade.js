
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img8 from "../assets/8.jpg"
import img9 from "../assets/9.jpg"
import img10 from "../assets/10.jpg"
import img11 from "../assets/11.jpg"

// import "./styles.css";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const MyeffectFade = () => {
    return (
        <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[ EffectFade, Navigation, Pagination ]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={img8} width="1400" height="400" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img9} width="1400" height="400" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img10} width="1400" height="400" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img11} width="1400" height="400" />
            </SwiperSlide>
        </Swiper>
    )
}

export default MyeffectFade
