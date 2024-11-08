import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Storeswiper.css";

// Import required modules
import { Pagination } from "swiper/modules";
import image1 from "../../assets/wood1.jpg";
import image2 from "../../assets/wood2.jpg";
import image3 from "../../assets/cabu.jpeg";
import image4 from "../../assets/light.jpeg";

export default function Storeswiper() {
  return (
    <>
      <Swiper
        slidesPerView={3.5}  // Default for larger screens
        spaceBetween={20}
        pagination={{
          clickable: true,
          renderBullet: () => '',  // Hide pagination bullets
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {  // When width is 0px and up
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          640: {  // When width is 640px and up
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {  // When width is 768px and up
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1024: {  // When width is 1024px and up
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full h-[400px] relative sm-max:h-[340px]">
            <img
              className="rounded-[10px] h-full w-full object-cover"
              src={image1}
              alt="Wood Image 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] relative sm-max:h-[340px]">
            <img
              className="rounded-[10px] h-full w-full object-cover"
              src={image2}
              alt="Wood Image 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] relative sm-max:h-[340px]">
            <img
              className="rounded-[10px] h-full w-full object-cover"
              src={image3}
              alt="Cabin Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] relative sm-max:h-[340px]">
            <img
              className="rounded-[10px] h-full w-full object-cover"
              src={image4}
              alt="Light Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] relative sm-max:h-[340px]">
            <img
              className="rounded-[10px] h-full w-full object-cover"
              src={image1}
              alt="Wood Image 1"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
