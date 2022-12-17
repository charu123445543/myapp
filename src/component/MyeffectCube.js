import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"

// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";

const MyeffectCube = () => {
    return (
        <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            modules={[ EffectCube, Pagination ]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={img4} alt="altname" width="500" height="400" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img5} alt="altname" width="500" height="400" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img6} alt="altname" width="500" height="400" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img7} alt="altname" width="500" height="400" />
            </SwiperSlide>
        </Swiper>
    )
}

export default MyeffectCube
