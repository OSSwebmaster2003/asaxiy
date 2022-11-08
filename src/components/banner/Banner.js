import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./banner.scss";
import Discount from "../timer/Discount";

function Banner(props) {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/635cabfcca799.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="	https://assets.asaxiy.uz/uploads/banner/desktop/633c2226ea012.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/62f4b37ece1f6.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/628784f087071.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.asaxiy.uz/uploads/banner/desktop/635797f073b62.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>
      <Discount />
    </div>
  );
}

export default Banner;
