// Productdetaildslider.js
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/wood1.jpg";
import img2 from "../../assets/wood2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./Productdetailslider.css";

export default function Productdetaildslider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // { data, index }
  return (
    <>
      <div className="slider items-center flex">
        {/* <div className="left-slider">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
            direction={"vertical"}
          >
            <SwiperSlide>
              <img
                className="left-side-img shadow-lg"
                // src={data?.products[index]?.images[0]}
                src={img1}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="left-side-img shadow-lg"
                // src={data?.products[index]?.images[1]}
                src={img2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="left-side-img"
                // src={data?.products[index]?.images[2]}
                src={img2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="left-side-img"
                // src={data?.products[index]?.images[3]}
                src={img2}
              />
            </SwiperSlide>
          </Swiper>
        </div> */}
        <div className="right-slider">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={false}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <img
                className="right-side-img"
                // src={data?.products[index]?.images[0]}
                src={img2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="right-side-img"
                // src={data?.products[index]?.images[1]}
                src={img2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="right-side-img"
                // src={data?.products[index]?.images[2]}
                src={img2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="right-side-img"
                // src={data?.products[index]?.images[3]}
                src={img2}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
